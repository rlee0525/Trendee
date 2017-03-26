import React from 'react';

class UserLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "San Francisco, CA"
    }
  }

  render() {
    return (
      <div className="user-location-main">
        <p>{this.state.address}</p>
      </div>
    )
  }
}

export default UserLocation;
