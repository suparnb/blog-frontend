import React, {Component} from 'react';
import api from '../api/api.js';
import axios from 'axios';

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      author: '',
      saveState: 'displayNone'
    };
  }

  updateContent(value) {
    this.setState({
      content: value,
    });
  }

  updateTitle(value) {
    this.setState({
      title: value,
    });
  }

  updateAuthor(value) {
    this.setState({
      author: value,
    });
  }

  createReview() {
    const self = this;
     axios({
            method: 'POST',
            url: `${api.reviews.create}`,
            headers: { 
              'content-type': 'application/json'
            },
            data: JSON.stringify({
              title: this.state.title,
              content: this.state.content,
              author: this.state.author
            })
        }).then(res => {
          self.setState({
            title: '',
            content: '',
            author: '',
            saveState: 'displayBlock'
         });
       });

  }

  render() {
    return (
      <div className="container create-blog">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron col-12">
              <h3 className="create-blog-title">Create Blog</h3>
              <div className="card-body text-left">
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    onBlur={(e) => {this.updateTitle(e.target.value)}}
                    className="form-control"
                    placeholder="Enter Title."
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <textarea
                    onBlur={(e) => {this.updateContent(e.target.value)}}
                    className="form-control"
                    rows="5"
                    placeholder="Enter Description"
                  />
                </div>
                <div className="form-group">
                  <label>Author:</label>
                  <input
                    type="text"
                    onBlur={(e) => {this.updateAuthor(e.target.value)}}
                    className="form-control"
                    placeholder="Enter Author Name"
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {this.createReview()}}>
                  Create
                </button><br/><br/>
                <p className={this.state.saveState}>Review Successfully Created!!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
  }
}

export default CreateBlog;