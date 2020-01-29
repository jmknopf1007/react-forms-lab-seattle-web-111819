import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  //this function saves new values
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //check for any empty fields
  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form
      onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text"
            // the value is what makes this a controlled event/ component 
            value={this.state.username}
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
