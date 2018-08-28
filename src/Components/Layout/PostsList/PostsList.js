// @Vendor
import React, { Component } from 'react';

// @Components
import Post from '../../Commons/Post/Post';

import Top from '../../../Data/top';

// @Styles
import './PostsList.css';

class PostsList extends Component {
  renderPosts() {
    return Top.data.children.map((post, index) => <Post data={post.data} index={index} key={index} />)
  }

  render() {
    const posts = this.renderPosts();

    console.log(Top);

    return (
      <section className="PostsList">
        <h2>Reddit Posts</h2>
        <ul className="PostsList-list">
          {posts}
        </ul>
      </section>
    );
  }
}

export default PostsList;
