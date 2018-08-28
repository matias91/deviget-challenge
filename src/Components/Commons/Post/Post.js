// @Vendor
import React, { Component } from 'react';

// @Components
// import PostsList from '../Layout/PostsList/PostsList';
// import PostDetail from '../Layout/PostDetail/PostDetail';

// @Styles
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      read: false
    }
  }

  render() {
    const { data } = this.props;

    return (
      <li className="Post">
        <div>{data.author}</div>
        <div className="Post-title">{data.title}</div>
        <div>{data.num_comments}</div>
      </li>
    );
  }
}

export default Post;
