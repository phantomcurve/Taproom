import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingEdit} = props;

  return (
    <React.Fragment>
      <div id="details">
        <h1><b>Keg Details</b></h1>
        <h3>Name: {keg.name}</h3>
        <h3>Brewery: {keg.brewery}</h3>
        { keg.kegPrice > 90
        ? <h3 style={{color: 'green'}}>Cost per Keg: ${keg.kegPrice}</h3>
        : <h3>Cost per Keg: ${keg.kegPrice}</h3>}
        <h3>Alcohol Content: {keg.alcoholContent}%</h3>

        {keg.pintsLeft === 0 ?
        <h3>That beer has been drunk!</h3>
        : <h3>Pints Remaining: {keg.pintsLeft}</h3>}
        {keg.pintsLeft > 0 && keg.pintsLeft <= 10
        ? <h4><em>bottoms nearly up!</em></h4>
        : null}
        { keg.pintsLeft > 0
        ? <button onClick={props.onClickingBuy} className="btn btn-dark">Buy a Pint</button>
        : <button onClick={props.onClickingRestock} className="btn btn-dark">Restock That Keg</button>}
        <button onClick={() => onClickingEdit(keg.id)} className="btn btn-dark">Update Keg Info</button>
      </div>
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