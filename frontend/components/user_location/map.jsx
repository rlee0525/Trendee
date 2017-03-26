import React from 'react';
import ReactDOM from 'react-dom';

// has access to this.props.businessesPositions & this.props.center
class MapItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: 12
    };

    this.map = new google.maps.Map(map, options);
  }

  // addBusiness(business) {
  //   const pos = new google.maps.LatLng(business.lat, business.long);
  //   const marker = new google.maps.Marker({
  //     position: pos,
  //     map: this.map
  //   });
  //
  //   // creating window that will appear when clicked on
  //   const windowString = `<h1 id="map-window">${business.name}</h1>`;
  //   const window = new google.maps.InfoWindow({
  //     content: windowString,
  //     maxWidth: 200
  //   });
  //
  //   marker.addListener('click', () => {
  //     window.open(this.map, marker);
  //   });
  // }

  render() {
    return (
      <div className="col col-1-3">
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

export default MapItem;
