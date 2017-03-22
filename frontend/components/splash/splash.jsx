import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <img id="splash-img"
             src="http://res.cloudinary.com/rlee0525/image/upload/c_scale,w_1864/v1490159250/splash_b6w94i.png" />
        <SessionFormContainer />
      </div>
    )
  }
}

export default Splash;
