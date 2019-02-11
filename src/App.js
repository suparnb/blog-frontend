import React, { Component } from 'react';
import NavBar from './layout/navBar';
import {Route} from 'react-router-dom';
import CreateBlog from './blog/createBlog';
import BlogItem from './blog/blogItem';
import Blog from './blog/blog';


class App extends Component{
  render() {
    return(
      <div>
        <NavBar/>
        <Route exact path='/create' component={CreateBlog}/>
        <Route exact path='/' component={Blog}/>
        <Route exact path='/blogItem/:blogItemId' component={BlogItem}/>
      </div>
    ); 
  }
}

export default App