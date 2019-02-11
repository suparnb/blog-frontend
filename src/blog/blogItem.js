import React, {Component} from 'react';
import '../styles/blogs.css';
import api from '../api/api.js';
import axios from 'axios';
import PostComment from './postComment';


class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItem : null,
    };

    this.postComment = this.postComment.bind(this);
  }

  async componentDidMount() {
    await this.refresh();
  }

  async refresh() {
    const { match: { params } } = this.props;
    const blogItem = (await axios.get(`${api.reviews.getById}/${params.blogItemId}`)).data;
    
    this.setState({
        blogItem,
    });
  }


  async postComment(comment) {
    const postObj = this.state.blogItem;
    if(postObj.comment){
      postObj.comment.push(comment);
    }
    else
      postObj.comment = [comment];

    await axios.post(`${api.comments.create}`, postObj);
    await this.refresh();
  }

  render() {
    const {blogItem} = this.state;
    if (blogItem === null) return <p>Loading ...</p>;
    return (
      <div className="container blog-Item">
        <div className="row">
          <div className="jumbotron col-12">
            <h3 className="blog-item-title">{blogItem.title}</h3>
            <h4 className="t-medium t-faint"> Created By : {blogItem.author}</h4>
            <p className="t-medium">{blogItem.content}</p><br/>
            <h5 className="t-faint">Comments:</h5>
            <ul className="list-ul list-rounded">
            {
             blogItem.comment && blogItem.comment.map((comment, idx) => (
                  <li className="list-bar">
                    <div className="list-bar-item">
                    <img src={ require('../icons/avatar.png') } alt="avatar" className="list-bar-item av-circle"/>
                    <span className="t-medium t-faint">{comment.name} :</span><br/>
                    <span className="t-medium">{comment.text}</span>
                    </div>
                  </li>
              ))
            }
            </ul>
          </div>
        </div>
        <PostComment blogId={blogItem.id} postComment={this.postComment} />
      </div>
    )
  }
}

export default BlogItem;