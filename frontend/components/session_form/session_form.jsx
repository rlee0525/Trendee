import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPage: false,
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.toggleAdminStatus = this.toggleAdminStatus.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.loginPage) {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };

      this.props.login(user)
          .then(() => hashHistory.replace("/home"))
          .fail((error) => console.log(error));
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      };

      this.props.signup(user)
          .then(() => hashHistory.replace("/home"))
          .fail((error) => console.log(error));
    }
  }

  toggleStatus(e) {
    e.preventDefault();
    let loginPage = !this.state.loginPage;
    this.props.clearErrors();
    this.setState({
      loginPage,
      username: "",
      password: "",
    });
  }

  toggleAdminStatus(e) {
    e.preventDefault();
    let admin = !this.state.admin;
    this.props.clearErrors();
    this.setState({
      admin,
      username: "",
      password: "",
    });
  }

  demoLogin() {
    this.setState({ loginPage: true });

    const that = this;
    let counter = 1;
    let passwordCounter = 1;

    const username = "RaymondLee";
    const password = "password";
    const usernameLoop = username.length;
    const passwordLoop = password.length;

    // curry function to login using demo account
    (function usernameNext() {
      if (counter++ > usernameLoop) return passwordNext();
      setTimeout(() => {
        that.setState({ username: username.slice(0, counter) });
        usernameNext();
      }, 70);
    })();

    function passwordNext() {
      if (passwordCounter++ > passwordLoop) {
        return that.props.login({
          username: that.state.username,
          password: that.state.password
        }).then(() => hashHistory.replace("/home"));
      }

      setTimeout(() => {
        that.setState({ password: password.slice(0, passwordCounter) });
        passwordNext();
      }, 70);
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  renderSignUp() {
    return (
      <div className="signup-div">
        <label>
          <input type="text"
            placeholder="Email"
            className="signup-input-field"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.update('email')}
            required />
        </label>

        <div className="signup-name-div">
          <label>
            <input type="text"
              placeholder="First name"
              className="signup-input-field left"
              id="first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              required />
          </label>

          <label>
            <input type="text"
              placeholder="Last name"
              className="signup-input-field"
              id="last_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              required />
          </label>
        </div>
      </div>
    )
  }

  render() {
    let buttonText = this.state.loginPage ? "LOGIN" : "SIGNUP";
    let questionText = this.state.loginPage ?
        "Don't have an account?" : "Already have an account?";
    let text = this.state.loginPage ? "Sign Up" : "Login";

    return (
      <div className="login-box">
        <form className="login-box-inputs">
          <div className="intro-text">
            <h1>Trend<img id="login-logo"
                          src="http://res.cloudinary.com/rlee0525/image/upload/v1490145963/Logomakr_2u6XfB_nj7a1l.png"/>
            </h1>
            <div className="divide-line"></div>
          </div>

          <div className="errors-container">
            {this.props.errors && this.renderErrors()}
          </div>

          {!this.state.loginPage && this.renderSignUp()}

          <label>
            <input type="text"
              placeholder="Username"
              className="login-input-field"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.update('username')}
              required />
          </label>

          <label>
            <input type="password"
              placeholder="Password"
              className="login-input-field"
              id="password"
              value={this.state.password}
              onChange={this.update('password')}
              required />
          </label>
          <div className="buttons">
            <button id="sign-up-log-in-button" type="submit"
                    onClick={this.handleSubmit}>{buttonText}</button>
            <button id ="demo-button"
              type="button" onClick={this.demoLogin}>DEMO</button>
          </div>
          <div id="question-login">{questionText}</div>
          <button id="status-toggle"
                  onClick={this.toggleStatus}>{text}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
