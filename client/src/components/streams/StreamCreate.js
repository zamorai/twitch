import React from 'react';
import '../../styles/streamCreate.css';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';


function StreamCreate(props) {

    const onSubmit = (formValues) => {
      if(formValues.title && formValues.description) {
        props.createStream(formValues);
        formValues.title = "";
        formValues.description = "";
      }
    
  }

  return (
    <div className="streamCreate-container">
      <h1 className="uk-heading-large streamCreate-header">Create a Stream</h1>
      <StreamForm onSubmit = {onSubmit} />
    </div>
  )
}


export default connect(null, { createStream })(StreamCreate);
