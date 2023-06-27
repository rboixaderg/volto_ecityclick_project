from training_volto_ecityclick import PACKAGE_NAME


class TestSetupInstall:
    def test_addon_installed(self, installer):
        """Test if training_volto_ecityclick is installed."""
        assert installer.is_product_installed(PACKAGE_NAME) is True

    def test_browserlayer(self, browser_layers):
        """Test that ITRAINING_VOLTO_ECITYCLICKLayer is registered."""
        from training_volto_ecityclick.interfaces import ITRAINING_VOLTO_ECITYCLICKLayer

        assert ITRAINING_VOLTO_ECITYCLICKLayer in browser_layers

    def test_latest_version(self, profile_last_version):
        """Test latest version of default profile."""
        assert profile_last_version(f"{PACKAGE_NAME}:default") == "20230620001"
