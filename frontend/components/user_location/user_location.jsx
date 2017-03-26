import React from 'react';
import Modal from 'react-modal';

class UserLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "San Francisco, CA",
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    return (
      <div className="user-location-main">
        <p onClick={this.openModal}>{this.state.address}</p>
        <Modal
          className="maps-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="maps-modal">
          <div className="maps-modal-text">
            This is where Google Maps will go.
          </div>
        </Modal>
      </div>
    )
  }
}

export default UserLocation;
