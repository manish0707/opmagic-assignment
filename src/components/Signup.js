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
        axios.post("http://3.6.20.4/signup/", 
        {email : this.state.email, 
        password : this.state.password,
        designation : this.state.designation,
        organisation : this.state.organisation
    }).then(response => {
            console.log(response);
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
                        <input type="text" onChange={this.onchangeHandle} name="email" />
                    </div>
                    <div>
                        <label>Designation</label>
                        <input type="text" onChange={this.onchangeHandle} name="designation" />
                    </div>
                    <div>
                        <label>Organisation</label>
                        <input type="text" onChange={this.onchangeHandle} name="organisation" />
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
