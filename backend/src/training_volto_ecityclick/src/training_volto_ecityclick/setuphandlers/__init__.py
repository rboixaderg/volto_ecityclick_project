from plone import api
from plone.app.multilingual.browser.setup import SetupMultilingualSite
from plone.app.multilingual.setuphandlers import enable_translatable_behavior
from plone.volto.setuphandlers import create_default_homepage
from Products.CMFPlone.interfaces import INonInstallable
from training_volto_ecityclick.setuphandlers import content, users
from zope.interface import implementer

from training_volto_ecityclick import logger


@implementer(INonInstallable)
class HiddenProfiles(object):
    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller."""
        return [
            "training_volto_ecityclick:uninstall",
        ]

def post_install(context):
    """Post install script"""
    portal = api.portal.get()
    # Multilanguage site
    sms = SetupMultilingualSite(portal)
    sms.setupSite(portal)
    enable_translatable_behavior(portal)
    create_default_homepage(portal)


def populate_portal(context):
    """Post install script"""
    portal = api.portal.get()
    # Delete content
    content.delete_content(portal)
    logger.info("Deleted default portal content")
    user = users.create_default_user()
    creators = [user.id]
    logger.info("Created default user")
    # Create other users
    users.create_team_accounts()
    logger.info("Created team accounts")
    # Create Initial content
    content.populate_portal(portal, creators)
    logger.info("Created initial content")
    # Update cover content
    content.update_home(portal, creators)
