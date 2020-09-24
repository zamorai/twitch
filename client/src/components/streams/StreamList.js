import React, {useEffect} from 'react';
import Hero from '../Hero';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import '../../styles/streamList.css';

function StreamList(props) {

  useEffect(() => {
    props.fetchStreams();

  }, []);

  const renderedItems = props.streams.map(stream => {
   return (
     <React.Fragment>
    <div className = "streamList-items" key = {stream.id}>
      <div className = "streamList-items-container">
        <h1 className = "streamList-title">
          {stream.title}
        </h1>
        <p className = "streamList-description">
          {stream.description}
        </p>  
      </div>
      <button className="uk-button uk-button-default">Default</button>
      <button className="uk-button uk-button-primary">Primary</button>
    </div>
    <hr/>
    </React.Fragment>
    
   ) 
  });

  return (
    <div>
      <Hero/>
      <h1 className = "uk-heading-small streamList-heading">Streams</h1>
      <div className = "streamList-container">
       {renderedItems}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
