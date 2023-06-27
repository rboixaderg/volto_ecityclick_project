import { Container } from 'semantic-ui-react';
import { asyncConnect, Helmet } from '@plone/volto/helpers';
import { compose } from 'redux';
import { defineMessages, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { getProxiedExternalContent } from '@eeacms/volto-corsproxy';
import { getExternalContent } from '../../../../actions/externalResource/externalResource';
import { connect } from 'react-redux';

const messages = defineMessages({
  externalEndpointPage: {
    id: 'External endpoint page',
    defaultMessage: 'External endpoint page',
  },
});

const ExternalEndpointContent = (props) => {
  console.log(props);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  return (
    <Container id="contact-page">
      <Helmet title={props.intl.formatMessage(messages.externalEndpointPage)} />
      External endpoint page SSR
      {props.state.externalResourceReducer.data &&
        props.state.externalResourceReducer.data.results &&
        props.state.externalResourceReducer.data.results.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      External endpoint page
      {data &&
        data.results &&
        data.results.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
    </Container>
  );
};

export default compose(
  asyncConnect([
    {
      key: 'externalResource',
      promise: ({ location, store: { dispatch } }) => {
        // Do not trigger the breadcrumbs action if the expander is present
        if (__SERVER__) {
          return dispatch(
            getExternalContent('https://pokeapi.co/api/v2/pokemon'),
          );
        }
      },
    },
  ]),
  withRouter,
  injectIntl,
  connect(
    (state, props) => ({
      state: state,
      apiError: state.apierror.error,
      connectionRefused: state.apierror.connectionRefused,
    }),
    null,
  ),
)(ExternalEndpointContent);
