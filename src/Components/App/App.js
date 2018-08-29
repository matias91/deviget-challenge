// @Vendor
import React, { Component } from 'react';

// @Components
import PostsList from '../Layout/PostsList/PostsList';
import PostDetail from '../Layout/PostDetail/PostDetail';

// @Data
import Top from '../../Data/top';

// @Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: Top.data.children,
      selectedPost: null
    }

    this.onSelect = this.onSelect.bind(this);
    this.onDissmiss = this.onDissmiss.bind(this);
    this.onDissmissAll = this.onDissmissAll.bind(this);
  }

  onSelect(index) {
    this.setState({ selectedPost: this.state.posts[index].data })
  }

  onDissmiss(dismissIndex) {
    this.setState({
      posts: this.state.posts.filter( (post, index) => index !== dismissIndex ),
      selectedPost: null
    })
  }

  onDissmissAll() {
    this.setState({ posts: null })
  }

  render() {
    const { posts, selectedPost } = this.state
    const details = selectedPost && <PostDetail post={selectedPost} />

    return (
      <main className='App'>
        <PostsList
          posts={posts}
          selectCallback={this.onSelect}
          dismissCallback={this.onDissmiss}
          dismissAllCallback={this.onDissmissAll}
        />

        {details}
      </main>
    );
  }
}

export default App;
