// @Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.dismiss = this.dismiss.bind(this);
  }

  showDetails(evt) {
    evt.preventDefault();
    const { index, selectCallback } = this.props;

    this.setState(
      { read: true },
      () => selectCallback(index)
    );
  }

  dismiss(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const { index, dismissCallback } = this.props;
    dismissCallback(index);
  }

  render() {
    const { read } = this.state;
    const { post } = this.props;
    const thumbnailElem = post.thumbnail && <img className='Post-thumbnail' src={post.thumbnail} alt='thumbnail' />
    const statusElem = !read && <span className='Post-status'></span>
    const createdDate = new Date(post.created).toLocaleDateString();

    return (
      <li className='Post' onClick={this.showDetails}>
        <header className='Post-header'>
          {statusElem}
          <span className='Post-author'>{post.author}</span>
          <span className='Post-date'>{createdDate}</span>
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

Post.propTypes = {
  dismissCallback: PropTypes.func,
  index: PropTypes.number,
  post: PropTypes.object,
  selectCallback: PropTypes.func
}

export default Post;
