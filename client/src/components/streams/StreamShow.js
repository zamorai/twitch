import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow(props) {

  const ref = useRef();

  useEffect(() => {
    props.fetchStream(props.match.params.id)
    buildPlayer();
  }, []);

  const buildPlayer = () => {
    if(!props.stream || flvPlayer) {
      return
    }
    var flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${props.match.params.id}.flv`
    });

    flvPlayer.attachMediaElement(ref.current);
    flvPlayer.load();

    return () => {
     flvPlayer.destroy();
    }

  }

  const renderItems = !props.stream ? <div>Loading...</div> : (
    <div>
      <video ref = {ref} style = {{ width: '100%'}} controls  />
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
