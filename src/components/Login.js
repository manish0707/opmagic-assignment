import React, { Component } from 'react'
import '../styles/Login.css';
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            confirmPassword : ""
        }
        this.onchangeHandle = this.onchangeHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    onchangeHandle(evt) {
        this.setState({[evt.target.name] : evt.target.value});
    }
    onSubmitHandle(evt) {
        evt.preventDefault();
        axios.post("http://3.6.20.4/login/", 
        {email : this.state.email, password : this.state.password}).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className="login-main-div">
                <form onSubmit={this.onSubmitHandle}>
                    <div>
                        <h2>Login Here</h2>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" onChange={this.onchangeHandle} name="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={this.onchangeHandle} name="password" />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={this.onchangeHandle} name="confirmPassword" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
