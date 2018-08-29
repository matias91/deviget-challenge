// @Vendor
import React, { Component } from 'react';

// @Components
// import PostsList from '../Layout/PostsList/PostsList';
// import PostDetail from '../Layout/PostDetail/PostDetail';

// @Styles
import './PostDetail.css';

class PostDetail extends Component {
  render() {
    const { post } = this.props;
    const thumbnailElem = post.thumbnail && <img className='PostDetail-thumbnail' src={post.thumbnail} alt='thumbnail' />

    return (
      <article className='PostDetail'>
        <header className='PostDetail-header'>
          <span className='PostDetail-author'>{post.author}</span>
        </header>
        <section className='PostDetail-body'>
          {thumbnailElem}
        </section>
        <footer className='PostDetail-footer'>
          <span className='PostDetail-title'>{post.title}</span>
        </footer>
      </article>
    );
  }
}

export default PostDetail;
