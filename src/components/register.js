import React, { Component } from "react";
import axois from "axios";
import {  Redirect } from 'react-router-dom';
import './register.css'

export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            registered:false,
            RStatus:''
        }
    }

    //to handle change of form
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    //handling form submit
    register=(e)=>{
        e.preventDefault();
        
        axois.post('http://192.168.1.235:8080/users/register',this.state)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                username:'',
                password:'',
                registered:true
            })
        }).catch((err)=>{
           
            if(err.response.data.code===401){
                this.setState({
                    RStatus:'Hash',
                    username:'',
                    password:''
                })
        }else if(err.response.data.code===402){
            this.setState({
                RStatus:'Already',
                username:'',
                password:''
            })
    }
        })
    }

    render() {
        if (this.state.registered === true) {
            return <Redirect to='/' location="User Registered"/>
        }

        return (
            <form>
                <h3>Register Here!!!!!</h3>
                <div className="form-group">
                    {
                        (this.state.RStatus==='Hash')?
                             <p className="alert">Error while hashing password!!!!!!!!!!!!!!! </p>
                             :null
                    }

                    {
                        (this.state.RStatus==='Already')? 
                        <p className="alert"> Username already registered choose different username!!!</p>
                        :null
                    }
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.register}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">Sign in?</a>
                </p>
            </form>
        );
    }
}

