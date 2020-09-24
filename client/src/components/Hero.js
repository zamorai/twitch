import React from 'react'
import { connect } from 'react-redux';
import '../styles/hero.css';
import { Link } from 'react-router-dom';
 
function Hero(props) {

 const renderButton = () => {
  if(props.auth.isSignedIn) {
    return (
      <Link class="uk-width-1-6@xl uk-width-1-4@m uk-width-1-2 uk-align-center uk-button uk-button-secondary" to = "/streams/new" >Create Stream</Link>
    )
  } else {
      return (
        <Link class="uk-width-1-6@xl uk-width-1-4@m uk-width-1-2 uk-align-center uk-button uk-button-secondary" to = "#" >Login to Create streams</Link>
      )
  }

 } 
  return (
    <div className = "streamlist-container">
      <div className = "streamlist-items">  
        <h1 className = "uk-heading-medium uk-heading-divider uk-text-light text">Your place to stream</h1>
        <p className = "uk-text-light">Whether you want to show off your programming skills or your gaming skills, join a community of streamers that want to perform at the highest level of skill.</p>
      </div> 
      <div className="alt-button">
        {renderButton()}
      </div>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Hero);
