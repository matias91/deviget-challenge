// @Vendor
import React, { Component } from 'react';

// @Components
import PostsList from '../Layout/PostsList/PostsList';
import PostDetail from '../Layout/PostDetail/PostDetail';

// @Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <PostsList />

        <PostDetail />
      </main>
    );
  }
}

export default App;
