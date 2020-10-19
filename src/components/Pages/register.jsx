import React from "react";
import loginImg from "../../login.svg";
import fire from "../../Config/fire";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  register(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btnlo" onClick={this.register}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
