import React, { useState, useEffect} from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/streamCreate.css';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


const renderInput = (formProps) => {

  const renderButton = () => {
    if(formProps.meta.touched) {
      return (
        <div className = "streamCreate-error">{formProps.meta.error}</div>
      )
    }
  }

    return (
      <div className = "uk-margin"> 
        <label className = "uk-form-label create-label" for="form-stacked-text">{formProps.label}</label>
        <div className = "uk-form-controls">
          <input autoComplete = "off" className="uk-input" id="form-stacked-text" type="text" placeholder={formProps.placeholder} value = {formProps.input.value} onChange = {formProps.input.onChange} />
        </div>
        <div>{renderButton()}</div>
      </div>
    )
}



function StreamCreate(props) {

  const onSubmit = (formValues) => {
    if(formValues.title && formValues.description) {
      props.createStream(formValues);
    }
    
  }

  return (
    <div className="streamCreate-container">
      <h1 className="uk-heading-large streamCreate-header">Create a Stream</h1>
      <form className="uk-form-stacked uk-container uk-container-xsmall create-form" onSubmit = {props.handleSubmit(onSubmit)}>
        <Field placeholder="Title of stream" label = "Enter Title" name ="title" component = {renderInput}/>
        <Field placeholder="Description of stream" label = "Enter Description" name ="description" component = {renderInput} />
        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Submit</button>
      </form>

    </div>
  )
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    //only runs if the user didnt enter a title
    errors.title = "You must enter a title"
  }
  if (!formValues.description) {
    errors.description = "You must enter a description"
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
