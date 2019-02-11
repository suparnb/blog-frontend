import React, {Component} from 'react';
import  '../styles/blogs.css';
import api from '../api/api.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: null,
    };
  }

  async componentDidMount() {
    const data = (await axios.get(`${api.reviews.getAll}`)).data;
    const blogs = [];
    for (var i = 0; i < data.length; i++) {
      blogs.push(JSON.parse(data[i]));
    }
  
    this.setState({
     blogs
    });
  }

  render() {
    return (
      <div className="container blog-list">
        <div className="row">
         <h4>Recent Blogs</h4>
        <ul className="list-ul list-shadow">
          {
            this.state.blogs && this.state.blogs.map(blog => (
                <Link to={`/blogItem/${blog.id}`}>
                   <li key={blog.id} className="list-bar">
                    <div className="list-bar-item">
                      <span className="t-large">{blog.title}</span><br/>
                      <span className="t-faint">By : {blog.author}</span><br/>
                      <span className="t-medium">{blog.content}</span>
                    </div>
                    </li>
                  
                </Link>
            ))
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Blog;