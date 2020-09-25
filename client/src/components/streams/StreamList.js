import React, {useEffect} from 'react';
import Hero from '../Hero';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../actions';
import '../../styles/streamList.css';

function StreamList(props) {

  useEffect(() => {
    props.fetchStreams();

  }, []);

  const renderAdmin = (stream) => {
    if(stream.userId === props.auth.userId) {
      return (
        <div className = "streamList-buttons">
        <Link to ={`/streams/edit/${stream.id}`} className="uk-button uk-button-default">Edit</Link>
        <button onClick = {() => props.deleteStream(stream.id)} className="uk-button uk-button-primary">Delete</button>
        </div>
      )
    }
  }

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
      {renderAdmin(stream)} 
    </div>
    <hr className = "streamList-divider"/>
    </React.Fragment>
    
   ) 
  });

  const renderCreate = () => {
    if(props.auth.isSignedIn) {
      return (
       <Link className="uk-width-1-6@xl uk-width-1-4@m uk-width-1-2 uk-margin-top uk-align-center uk-button uk-button-secondary" to = "/streams/new" >Create Stream</Link>
      ) 
    }
  }

  return (
    <div>
      <Hero/>
      <h1 className = "uk-heading-small streamList-heading">Streams</h1>
      <div className = "streamList-container">
       {renderedItems}
      </div>
      {renderCreate()} 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    auth: state.auth
  }
}

export default connect(mapStateToProps, {fetchStreams, deleteStream})(StreamList)
