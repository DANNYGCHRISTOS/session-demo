import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      user: {}
    }
  }

  componentDidMount() {
    axios.get('/api/getUser')
      .then(response => this.setState({
        user: response.data
      }))
  }

  login = () => {
    axios.post('/api/login', {name: this.state.name, password: this.state.password})
      .then(response => this.setState({
        user: response.data
      }))
  }

  logout = () => {
    axios.get('/api/logout')
      .then(response => this.setState({
        user: response.data
      }))
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <input type="text" onChange={e => this.setState({name: e.target.value})} placeholder='username...'/>
          <input type="text" onChange={e => this.setState({password: e.target.value})} placeholder='password...'/>
          <button onClick={this.login}>Login</button>
        </div>
        <button onClick={this.logout}>Logout</button>
        <div>
          <h3>Username: {this.state.user.name}</h3>
          <p>Password: {this.state.user.password}</p>
        </div>
      </div>
    );
  }
}

export default App;
