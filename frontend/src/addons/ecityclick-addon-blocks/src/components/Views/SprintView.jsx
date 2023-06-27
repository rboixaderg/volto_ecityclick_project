import { DefaultView } from '@plone/volto/components';

import { Container } from 'semantic-ui-react';

const SprintView = (props) => {
  const { content } = props;
  console.log(content);
  return (
    <Container>
      <p>
        From {new Intl.DateTimeFormat('ca').format(new Date(content.start))} to{' '}
        {new Intl.DateTimeFormat('ca').format(new Date(content.end))}
      </p>
      <DefaultView {...props} />
    </Container>
  );
};

export default SprintView;
