import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  title: {
    id: 'Download block',
    defaultMessage: 'Download block',
  },
});

export const schemaDownload = (props) => {
  return {
    required: [],
    fieldsets: [
      {
        id: 'default',
        title: props.intl.formatMessage(messages.title),
        fields: ['title', 'description'],
      },
      {
        id: 'link',
        title: 'Links',
        fields: ['buttonTitle', 'buttonLink', 'otherLinkText', 'otherLink'],
      },
    ],
    properties: {
      title: {
        title: 'Title',
        widget: 'text',
      },
      description: {
        title: 'Description',
        widget: 'text',
      },
      buttonTitle: {
        title: 'Button Title',
        widget: 'text',
      },
      buttonLink: {
        title: 'Button link',
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
      otherLinkText: {
        title: 'Other link text',
        widget: 'text',
      },
      otherLink: {
        title: 'Other link',
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
    },
  };
};

export default schemaDownload;
