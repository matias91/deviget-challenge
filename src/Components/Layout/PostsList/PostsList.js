// @Vendor
import React, { Component } from 'react';

// @Components
import Post from '../../Commons/Post/Post';

// @Styles
import './PostsList.css';

class PostsList extends Component {
  renderPosts() {
    const { posts, selectCallback } = this.props;

    return posts.map((post, index) =>
      <Post
        post={post.data}
        index={index}
        key={index}
        selectCallback={selectCallback}
      />
    )
  }

  render() {
    const posts = this.renderPosts();

    return (
      <aside className='PostsList'>
        <header className='PostsList-header'>
          <h2>Reddit Posts</h2>
        </header>
        <ul className='PostsList-list'>
          {posts}
        </ul>
        <footer className='PostsList-footer' onClick={this.dismissAll}>
          Dismiss All
        </footer>
      </aside>
    );
  }
}

export default PostsList;
