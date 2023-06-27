import { useIntl } from 'react-intl';
import { Container } from 'semantic-ui-react';
import { asyncConnect, Helmet } from '@plone/volto/helpers';
import { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { externalPageMessages as messages } from '../messages';
import { getExternalContent } from '../../../../actions/externalContent/externalContent';

const ExternalContent = (props) => {
  console.log(props);
  const intl = useIntl();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Container>
      <Helmet title={intl.formatMessage(messages.externalContent)} />
      <h2>Page external content client</h2>
      {data &&
        data.results &&
        data.results.map((item) => <div key={item.name}>{item.name}</div>)}
      <h2>Page external content Server</h2>
      {props.content &&
        props.content.data &&
        props.content.data.results &&
        props.content.data.results.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
    </Container>
  );
};

export default compose(
  asyncConnect([
    {
      key: 'externalContent',
      promise: ({ location, store: { dispatch } }) => {
        // Do not trigger the navigation action if the expander is present
        if (__SERVER__) {
          return dispatch(
            getExternalContent('https://pokeapi.co/api/v2/pokemon'),
          );
        }
      },
    },
  ]),
  connect(
    (state, props) => ({
      content: state.externalResourceReducer,
    }),
    null,
  ),
)(ExternalContent);
