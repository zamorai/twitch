import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


function StreamEdit(props) {
  console.log(props)
  // some of these props are coming from react router dom and they are passed through the router in App js

  useEffect(() => {
    props.fetchStream(props.match.params.id);

  }, []);

 const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues)
  }

  return (
    <div className="streamCreate-container">
    <h1 className="uk-heading-large streamCreate-header">Edit a Stream</h1>
    <StreamForm onSubmit = {onSubmit} initialValues = {_.pick(props.stream, "title", 'description')}/> 
  </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
