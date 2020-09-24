import React from 'react';
import '../styles/googleAuth.css' 
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {


  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '298641701726-teea8bopmpd1kjdjsu1806feh7lvjusu.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get()); 
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
    
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut();
    }
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderButton = () => {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === false) {
      return (
        <div>
         <button onClick = {this.onSignIn} className="uk-text-light uk-margin-right uk-button-small uk-button uk-button-primary">Sign In</button>
        </div>
      ) 
    } else {
      return (
        <button onClick = {this.onSignOut} className="uk-text-light uk-margin-right uk-button-small uk-button uk-button-primary">Sign Out</button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderButton()} 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
