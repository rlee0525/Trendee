import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <div id="splash-logo">
          <p>Set and discover the</p><p id="splash-title">trend.</p>
        </div>
        <img id="splash-img"
             src="http://res.cloudinary.com/rlee0525/image/upload/v1490341700/Slice-min_thmg9g.png" />
        <SessionFormContainer />
      </div>
    )
  }
}

export default Splash;
