import { QuadSizeWidget } from 'ecityclick-addon-blocks/components/Widgets/QuadSize';
import ExternalEndpoint from './pages/ExternalEndpoint';
import ExternalContent from './pages/ExternalContent';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: true,
    supportedLanguages: ['en', 'ca', 'es'],
    defaultLanguage: 'en',
    allowed_cors_destinations: ['pokeapi.co'],
  };
  config.widgets.widget.quad_size = QuadSizeWidget;

  config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
    'teaser',
    'image',
    'slate',
    'group',
  ];

  config.addonRoutes.push({
    path: '/**/external-endpoint',
    component: ExternalEndpoint,
  });
  config.addonRoutes.push({
    path: '/**/external-content',
    component: ExternalContent,
  });
  config.addonRoutes.push({
    path: '/external-content',
    component: ExternalContent,
  });

  return config;
};

export default applyConfig;
