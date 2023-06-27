/**
 * Header component.
 * @module components/theme/Header/Header
 */

import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  Anontools,
  Icon,
  LanguageSelector,
  Logo,
  Navigation,
  UniversalLink,
} from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';
import { Container, Dropdown, Segment } from 'semantic-ui-react';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment
        basic
        className="header-wrapper background-color-primary"
        role="banner"
      >
        <div className="top-header">
          <Container>
            <UniversalLink href="https://2022.ploneconf.org">
              Conference
            </UniversalLink>
            <UniversalLink href="https://docs.plone.org">
              Documentation
            </UniversalLink>
            <UniversalLink href="https://training.plone.org">
              Training
            </UniversalLink>
            <UniversalLink href="https://community.plone.org">
              Forum
            </UniversalLink>
            <UniversalLink href="https://discord.com/invite/zFY3EBbjaj">
              Chat
            </UniversalLink>
          </Container>
        </div>
        <Container>
          <div className="header">
            <div className="logo">
              <Logo />
            </div>
            <div className="nav-wrapper">
              <Navigation pathname={this.props.pathname} />
              <Dropdown text="More" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <UniversalLink href="/about-plone">
                      About Plone
                    </UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/conferences">
                      Conferences
                    </UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/donate">Donate</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/download">Download</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/features">Features</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/events">Events</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/news">News</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/providers">Providers</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/related">
                      Related websites
                    </UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/security">Security</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/support">Support</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/newsroom">Newsroom</UniversalLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <UniversalLink href="/products">Products</UniversalLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="tools-search-wrapper">
                <div className="tools-search">
                  <UniversalLink href="/search" className="ui button search">
                    <Icon name={zoomSVG} size="18px" color="white" />
                    Search
                  </UniversalLink>
                </div>
                <LanguageSelector />
                {!this.props.token && (
                  <div className="tools">
                    <Anontools />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
