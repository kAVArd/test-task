/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import PostList from './components/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostDetails from './components/PostDetails';
import Navbar from './components/Navbar'
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import NewPost from './components/NewPost'

const client = axios.create({
  baseURL:'https://simple-blog-api.crew.red',
  responseType: 'json'
});

const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)))

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Container>
          <Route exact path='/' component={PostList} />
          <Route exact path='/posts/:id' component={PostDetails} />
          <Route exact path='/create-post' component={NewPost} />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
