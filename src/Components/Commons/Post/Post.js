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

    this.showDetails = this.showDetails.bind(this);
  }

  dismiss(evt) {
    evt.preventDefault();
    console.log('dismissed');
  }

  showDetails() {
    const { index, selectCallback } = this.props;
    selectCallback(index);
  }

  render() {
    const { post } = this.props;
    const thumbnailElem = post.thumbnail && <img className='Post-thumbnail' src={post.thumbnail} alt='thumbnail' />

    return (
      <li className='Post' onClick={this.showDetails}>
        <header className='Post-header'>
          <span className='Post-status'></span>
          <span className='Post-author'>{post.author}</span>
          {/* <span className='Post-date'>{post.author}</span> */}
        </header>
        <section className='Post-body'>
          {thumbnailElem}
          <span className='Post-title'>{post.title}</span>
          <span className='Post-arrow'></span>
        </section>
        <footer className='Post-footer'>
          <div>
            <button className='Post-button' onClick={this.dismiss}>
              <span className='Post-dismiss'>X</span>
              <span> Dismiss Post</span>
            </button>
          </div>
          <div>
            <span className='Post-comments'>{post.num_comments} comments</span>
          </div>
        </footer>
      </li>
    );
  }
}

export default Post;
