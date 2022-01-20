import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingEdit} = props;

  return (
    <React.Fragment>
      <h2>Keg Details</h2>
        <h3>Name: { keg.name }</h3>
        <h3>Brand or Brewery: { keg.brand }</h3>
        { keg.priceByKeg > 90 }
        <h3 style={{color: 'red'}}>Cost per Keg: ${ keg.priceByKeg }</h3>
        <h3>Cost per Keg: ${ keg.priceByKeg }</h3>
        <h3>Alcohol Content: { keg.alcoholContent }</h3>
        {keg.pintsLeft === 0 }
        <h3>sorry, sold out!</h3>
        <h3>Pints Remaining: { keg.pintsLeft }</h3>
        {keg.pintsLeft > 0 && keg.pintsLeft <= 10}
        <h4><em>nearly gone!!</em></h4>
        
        { keg.pintsLeft > 0 }
        <button onClick={props.onClickingBuy} className="btn btn-success">Buy Pint</button>
        <button onClick={props.onClickingRestock} className="btn btn-info">Restock Large Keg</button>
        <button onClick={() => onClickingEdit(keg.id)} className="btn btn-warning">Update Keg Info</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KegDetail;