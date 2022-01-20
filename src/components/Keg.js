import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div id="details" onClick = { () => props.whenKegClicked(props.id)}>
        <h3><strong>Beer:</strong> {props.name}</h3>
        <h3><strong>By:</strong> {props.brand}</h3>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  priceByKeg: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;