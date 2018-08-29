// @Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @Components
import Post from '../../Commons/Post/Post';

// @Styles
import './PostsList.css';

class PostsList extends Component {
  renderPosts() {
    const { dismissCallback, posts, selectCallback } = this.props;

    return posts.map((post, index) =>
      <Post
        dismissCallback={dismissCallback}
        index={index}
        key={index}
        post={post.data}
        selectCallback={selectCallback}
      />
    )
  }

  render() {
    const { dismissAllCallback, posts } = this.props;
    const postsArray = posts && this.renderPosts();

    return (
      <aside className='PostsList'>
        <header className='PostsList-header'>
          <h2>Reddit Posts</h2>
        </header>
        <ul className='PostsList-list'>
          {postsArray}
        </ul>
        <footer className='PostsList-footer' onClick={dismissAllCallback}>
          Dismiss All
        </footer>
      </aside>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array,
  selectCallback: PropTypes.func,
  dismissCallback: PropTypes.func,
  dismissAllCallback: PropTypes.func
}

export default PostsList;
