import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

import Logo from '../img/twitch.png';
import GoogleAuth from './GoogleAuth';

export default function Header() {
  return (
<div className = "header-container">
<Link to = "/" className  = "logo-link" ><img className = "logo-header" src = {Logo} /></Link>
<Link to = "/" className = "stream-header  uk-text-light">Streams</Link>
<GoogleAuth />

</div>
  )
}


