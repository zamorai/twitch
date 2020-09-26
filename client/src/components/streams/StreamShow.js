import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow(props) {

  useEffect(() => {
    props.fetchStream(props.match.params.id)

  }, [])

  const renderItems = !props.stream ? <div>Loading...</div> : (
    <div>
      <h1>{props.stream.title}</h1>
      <h5>{props.stream.description}</h5>
    </div>
  )

  return (
    <div>
      {renderItems}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
