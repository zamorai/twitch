import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


function StreamEdit(props) {
  console.log(props)
  // some of these props are coming from react router dom and they are passed through the router in App js

  useEffect(() => {
    props.fetchStream(props.match.params.id);

  }, []);

  const renderItems = props.stream ? <div>{props.stream.title}</div> : <div>Loading...</div>

  return (
   <div>{renderItems}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
