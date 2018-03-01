import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const BeerModal = (props) => (
  <Modal
    isOpen={!!props.selectedBeer}
    onRequestClose={props.closeModal}
    contentLabel="Selected Beer"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>{props.beer.name}}</h3>
    {props.selectedBeer && <p>{props.selectedBeer}</p>}
    <button className="button" onClick={props.closeModal}>okay</button>
  </Modal>
);

export default BeerModal;