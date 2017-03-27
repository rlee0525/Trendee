import React from 'react';

let style = { pastel:
  [
    { "featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}] },
    { "featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}] },
    { "featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}] },
    { "featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}] },
    { "featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}] },
    { "featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}] },
    { "featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}] },
    { "featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}] },
    { "featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}] },
    { "featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fac9a9"},{"visibility":"simplified"}] },
    { "featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}] },
    { "featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}] },
    { "featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}] },
    { "featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}] },
    { "featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#0a00ff"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}] },
    { "featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#43321e"}] },
    { "featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ff6c00"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}] },
    { "featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}] },
    { "featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7eced"}] },
    { "featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"}] }
  ]
};

class MapItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 37.7758, lng: -122.435 },
      place: "San Francisco, CA"
    }
  }

  componentDidMount() {
    const map = this.refs.map;
    const options = {
      center: this.state.center,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let input = document.getElementById('pac-input');
    let opts = {
      types: ['(cities)']
    };

    this.map = new google.maps.Map(map, options);
    this.map.setOptions({styles: style['pastel']});
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    let autocomplete = new google.maps.places.Autocomplete(input, opts);

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace().formatted_address;
      this.map.setCenter(autocomplete.getPlace().geometry.location);
      this.setState({ place });
    });

  }

  render() {
    return (
      <div className="map-container">
        <input id="pac-input" className="controls" type="text" placeholder="Select a city to find its trend!" />
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

export default MapItem;
