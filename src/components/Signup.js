import React, { Component } from 'react'
import axios from 'axios'
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            designation : "",
            organisation : "",
            confirmPassword : ""
        }
        this.onchangeHandle = this.onchangeHandle.bind(this);
        this.onSubmithHandle = this.onSubmithHandle.bind(this);
    }
    onchangeHandle(evt) {
        this.setState({[evt.target.name] : evt.target.value});
    }

    onSubmithHandle(evt) {
        evt.preventDefault();
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('designation', this.state.designation);
        formData.append('organization', this.state.organisation);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://3.6.20.4/signup/", formData, config).then(response => {
            console.log(response);
            this.setState({email : "", password : "", organisation : "", designation : "", confirmPassword : ""});
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="login-main-div">
                <form style={{padding : "20px 30px", height : "70vh"}} onSubmit={this.onSubmithHandle}>
                    <div>
                        <h2>SignUp Here</h2>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={this.onchangeHandle} value={this.state.email} name="email" />
                    </div>
                    <div>
                        <label>Designation</label>
                        <input type="text" onChange={this.onchangeHandle} value={this.state.designation} name="designation" />
                    </div>
                    <div>
                        <label>Organisation</label>
                        <input type="text" onChange={this.onchangeHandle} value={this.state.organisation} name="organisation" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={this.onchangeHandle} value={this.state.password} name="password" />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={this.onchangeHandle} value={this.state.confirmPassword} name="confirmPassword" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
