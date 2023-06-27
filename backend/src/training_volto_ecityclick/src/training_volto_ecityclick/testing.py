from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing.zope import WSGI_SERVER_FIXTURE

import training_volto_ecityclick


class TRAINING_VOLTO_ECITYCLICKLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.restapi

        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=training_volto_ecityclick)

    def setUpPloneSite(self, portal):
        applyProfile(portal, "training_volto_ecityclick:default")
        applyProfile(portal, "training_volto_ecityclick:initial")


TRAINING_VOLTO_ECITYCLICK_FIXTURE = TRAINING_VOLTO_ECITYCLICKLayer()


TRAINING_VOLTO_ECITYCLICK_INTEGRATION_TESTING = IntegrationTesting(
    bases=(TRAINING_VOLTO_ECITYCLICK_FIXTURE,),
    name="TRAINING_VOLTO_ECITYCLICKLayer:IntegrationTesting",
)


TRAINING_VOLTO_ECITYCLICK_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(TRAINING_VOLTO_ECITYCLICK_FIXTURE, WSGI_SERVER_FIXTURE),
    name="TRAINING_VOLTO_ECITYCLICKLayer:FunctionalTesting",
)


TRAINING_VOLTO_ECITYCLICKACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        TRAINING_VOLTO_ECITYCLICK_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        WSGI_SERVER_FIXTURE,
    ),
    name="TRAINING_VOLTO_ECITYCLICKLayer:AcceptanceTesting",
)
