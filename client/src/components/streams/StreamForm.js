import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/streamCreate.css';

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



function StreamForm(props) {



  const onSubmit = (formValues) => {
    if(formValues.title && formValues.description) {
      props.onSubmit(formValues);
      // formValues.title = "";
      // formValues.description = "";
    }
    
  }

  return (
    <div>
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
    errors.title = "You must enter a title"
  }
  if (!formValues.description) {
    errors.description = "You must enter a description"
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamForm',
  validate,
  enableReinitialize: true
})(StreamForm);

export default (formWrapped);
