from training_volto_ecityclick import PACKAGE_NAME

import pytest


class TestSetupUninstall:
    @pytest.fixture(autouse=True)
    def uninstalled(self, installer):
        installer.uninstall_product(PACKAGE_NAME)

    def test_product_uninstalled(self, installer):
        """Test if training_volto_ecityclick is cleanly uninstalled."""
        assert installer.is_product_installed(PACKAGE_NAME) is False

    def test_browserlayer_removed(self, browser_layers):
        """Test that ICaseStudyLayer is removed."""
        from training_volto_ecityclick.interfaces import ITRAINING_VOLTO_ECITYCLICKLayer

        assert ITRAINING_VOLTO_ECITYCLICKLayer not in browser_layers
