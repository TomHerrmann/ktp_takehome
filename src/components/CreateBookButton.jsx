import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalToggle } from '../actions/actions';

const CreateBookButton = ({ modalToggle }) => {
  return (
    <section className="create-book-button-container">
      <button onClick={modalToggle}>Create New Book</button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(modalToggle, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBookButton);
