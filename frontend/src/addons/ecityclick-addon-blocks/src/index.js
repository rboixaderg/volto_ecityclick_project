import {
  DownloadBlockEdit,
  DownloadBlockView,
  HighlightBlockEdit,
  HighlightBlockView,
  eventListingTemplate,
  sprintView,
} from './components';
import '@plone/volto/config';
import heroSVG from '@plone/volto/icons/hero.svg';

const applyConfig = (config) => {
  config.blocks.requiredBlocks = [];
  config.blocks.blocksConfig.highlight = {
    id: 'highlight',
    title: 'Highlight',
    icon: heroSVG,
    group: 'common',
    view: HighlightBlockView,
    edit: HighlightBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.download = {
    id: 'download',
    title: 'Download',
    icon: heroSVG,
    group: 'common',
    view: DownloadBlockView,
    edit: DownloadBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'eventListing',
      title: 'Events',
      template: eventListingTemplate,
    },
  ];
  config.views.contentTypesViews.sprint = sprintView;
  return config;
};

export default applyConfig;
