import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from '../history';
import '../../node_modules/uikit/dist/css/uikit.min.css';
import '../../node_modules/uikit/dist/js/uikit';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import NotFound from './NotFound';

const App = () => {

  return (
    <div>
      <Router history = {history}> 
          <Header />
          <Switch>
            <Route path = "/" exact component = {StreamList} />
            <Route path = "/streams/new" exact component = {StreamCreate} />
            <Route path = "/streams/edit/:id" exact component = {StreamEdit} />
            <Route path = "/streams/delete/:id" exact component = {StreamDelete} />
            <Route path = "/streams/show/:id" exact component = {StreamShow} />
            <Route path = "/404" exact component = {NotFound} />
          <Redirect to = '/404' />
          </Switch>
      </Router>
    </div>
  )

}

export default App;