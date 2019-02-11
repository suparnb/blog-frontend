import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

class PostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: ''
    };
  }

  updateComment(value) {
    this.setState({
      text: value,
    });
  }

  updateName(value) {
    this.setState({
      name: value,
    });
  }

  submit() {
    this.props.postComment(this.state);

    this.setState({
      text: '',
      name: ''
    });
  }

  render() {
    return (
      <Fragment>
        <div className="form-group">
          <h4>Post Comment</h4><br/>
          <textarea
            onChange={(e) => {this.updateComment(e.target.value)}}
            className="form-control"
            placeholder="Enter your Comment."
            rows="5"
            value={this.state.text}
          /> <br/>
          
          <input
            type="text"
            onChange={(e) => {this.updateName(e.target.value)}}
            className="form-control col-xs-3"
            placeholder="Enter Name."
            value={this.state.name}
          />
          
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {this.submit()}}>
          Submit
        </button>
        <hr className="my-4" />
      </Fragment>
    )
  }
}

export default withRouter(PostComment);
