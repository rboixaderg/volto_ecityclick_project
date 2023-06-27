from training_volto_ecityclick.testing import TRAINING_VOLTO_ECITYCLICK_INTEGRATION_TESTING
from pytest_plone import fixtures_factory


pytest_plugins = ["pytest_plone"]


globals().update(fixtures_factory(((TRAINING_VOLTO_ECITYCLICK_INTEGRATION_TESTING, "integration"),)))
