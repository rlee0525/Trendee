import React from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-menu">
            <div className="footer-vertical-menu">
              <span>English<FontAwesome
                        className='fa-chevron-down'
                        name='chevron-down'
                        id='fa-chevron-down' />
              </span>
            </div>
            <div className="footer-vertical-menu">
              <p className="menu-header-footer">Trendee</p>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Policies</li>
                <li>Help</li>
                <li>Diversity</li>
              </ul>
            </div>
            <div className="footer-vertical-menu">
              <p className="menu-header-footer">Discover</p>
              <ul>
                <li>Trust & Safety</li>
                <li>Travel Credit</li>
                <li>Gift Cards</li>
                <li>Trendee Citizen</li>
                <li>Business Travel</li>
                <li>Guidebooks</li>
              </ul>
            </div>
            <div className="footer-vertical-menu">
              <p className="menu-header-footer">Hosting</p>
              <ul>
                <li>Why Host</li>
                <li>Hospitality</li>
                <li>Hosting</li>
              </ul>
            </div>
          </div>
          <div className="footer-links">
            <div id="footer-logo">
              <img src="http://res.cloudinary.com/rlee0525/image/upload/v1490383964/logo4_feruh4.png" />© Trendee, Inc.
            </div>
            <div>
              <div className="icons">
                <a href="http://www.raymondlee.io">
                  <FontAwesome
                    className='fa-user'
                    name='user'
                    id='fa-user' />
                </a>
                <a href="https://github.com/rlee0525/Trendee">
                  <FontAwesome
                    className='fa-github'
                    name='github'
                    id='fa-github' />
                </a>
                <a href="https://www.linkedin.com/in/rlee0525">
                  <FontAwesome
                    className='fa-linkedin'
                    name='linkedin'
                    id='fa-linkedin' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
