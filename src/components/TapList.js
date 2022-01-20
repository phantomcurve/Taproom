import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <React.Fragment>
      <h2>Available Kegs</h2>
      <hr/>
      {Object.values(props.tapList).map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection} 
          name={keg.name}
          brand={keg.brand}
          priceByKeg={keg.priceByKeg}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  TapList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default TapList;