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
            RStatus:'',
            vusername:'',
            vpassword:''
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
        
        if(this.state.username===''){
            this.setState({
                vusername:'Username',
                vpassword:'',
                username:'',
                password:'',
                registered:false,
                Rstatus:''
            })
        }
        else if(this.state.username.length<8){
            this.setState({
                vusername:'UsernameL',
                vpassword:'',
                username:'',
                password:'',
                registered:false,
                Rstatus:''
            })
        }
        else if(this.state.password===''){
            this.setState({
                vpassword:'Password',
                vusername:'',
                username:'',
                password:'',
                registered:false,
                Rstatus:''
            })
        }
        else if(this.state.password.length<8){
            this.setState({
                vusername:'',
                vpassword:'PasswordL',
                username:'',
                password:'',
                registered:false,
                Rstatus:''
            })
        }
        else{
            axois.post('http://192.168.1.235:8080/users/register',this.state)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                username:'',
                password:'',
                registered:true,
                Rstatus:'',
                vusername:'',
                vpassword:''
            })
        }).catch((err)=>{
           
            if(err.response.data.code===401){
                this.setState({
                    RStatus:'Hash',
                    registered:false,
                    vusername:'',
                    vpassword:'',
                    username:'',
                    password:''
                })
        }else if(err.response.data.code===402){
            this.setState({
                RStatus:'Already',
                username:'',
                password:'',
                vusername:'',
                vpassword:'',
                registered:false
            })
                }
        })
        } 
    }

    render() {
        if (this.state.registered === true) {
            return <Redirect to='/' location="User Registered"/>
        }

        return (
            <form className="fix">
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

                {
                  (this.state.vusername ==='Username')?
                  <p className='alert'>
                 Username cannot be empty !!!
              </p> 
                      :null
                } 

{
                  (this.state.vusername ==='UsernameL')?
                  <p className='alert'>
                 Username cannot be less than 8 digit !!!
              </p> 
                      :null
                } 

{
                  (this.state.vpassword ==='Password')?
                  <p className='alert'>
                 Password cannot be empty !!!
              </p> 
                      :null
                } 

                {
                  (this.state.vpassword ==='PasswordL')?
                  <p className='alert'>
                  Password cannot be less than 8 digit !!!
              </p> 
                      :null
                } 

                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Username of more than 8 digit" value={this.state.username} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password of more than 8 digit" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.register}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/">Sign in</a>
                </p>
            </form>
        );
    }
}

