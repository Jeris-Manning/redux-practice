import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  // SEARCH FOR GITHUB USERS
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`
    );
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar title={'Github for Horses'} />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
