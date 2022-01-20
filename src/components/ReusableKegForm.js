import React from 'react';
import PropTypes from "prop-types";

function ReusableKegForm(props) {
  return (
    <React.Fragment>
      <form className="form-group" style={{width: '50vw'}} onSubmit={props.formSubmissionHandler}>
        <input className="form-control"
          type='text'
          name='name'
          placeholder='Name of Beer'/>
        <input className="form-control"
          type="text"
          name="brand"
          placeholder="Brewery"/>
        <input className="form-control"
          type="number"
          name="pintsLeft"
          placeholder="Pints per keg (standard keg is about 120 pints)"
          min="0"
          max="124"/>
        <button type="submit" className="btn btn-dark">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableKegForm;