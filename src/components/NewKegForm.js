import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableKegForm from './ReusableKegForm';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      pintsLeft: parseInt(event.target.pintsLeft.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <h2>Add New Keg</h2>
      <hr />
      <ReusableKegForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;