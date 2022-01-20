import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <React.Fragment>
      <div id="details">
        <hr />
        {props.tapList.map((keg) =>
          <Keg
            whenKegClicked = {props.onKegSelection} 
            name={keg.name}
            brewery={keg.brewery}
            kegPrice={keg.kegPrice}
            alcoholContent={keg.alcoholContent}
            pintsLeft={keg.pintsLeft}
            id={keg.id}
            key={keg.id} 
          /> 
        )}
      </div>
    </React.Fragment>
  );
}

TapList.propTypes = {
  TapList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default TapList;