import React from 'react';
import Modal from 'react-modal';
import MapItem from './map';

class UserLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "San Francisco, CA",
      center: { lat: 37.7758, lng: -122.435 },
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  componentWillUnmount() {
    this.closeModal();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  setAddress(address, center) {
    this.setState({ address, center });
  }

  render() {
    return (
      <div className="user-location-main">
        <p onClick={this.openModal}>{this.state.address}</p>

        <Modal
          className="maps-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="maps-modal">
          <MapItem setAddress={this.setAddress}
                   center={this.state.center}
                   closeModal={this.closeModal} />
        </Modal>
      </div>
    )
  }
}

export default UserLocation;
