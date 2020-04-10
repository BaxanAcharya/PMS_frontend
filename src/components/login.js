import React, { Component } from 'react';
import './login.css';
import axois from "axios";
import {  Redirect } from 'react-router-dom';
class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            logged:false,
            Lstatus:'',
            vusername:'',
            vpassword:''
        }
    }
    handleChange=(e)=>{
      
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    login=(e)=>{
        e.preventDefault();
        //axois for api handling
        if(this.state.username===''){
            this.setState({
                vusername:'Username',
                vpassword:'',
                username:'',
                password:'',
                logged:false,
                Lstatus:''
            })
        }
        else if(this.state.password===''){
            this.setState({
                vpassword:'Password',
                vusername:'',
                username:'',
                password:'',
                logged:false,
                Lstatus:''
            })
        }
        else{
            axois.post('http://192.168.1.235:8080/users/login', this.state)
            .then((response)=>{
                localStorage.setItem('myToken',response.data.token)
                this.setState({username:'',password:'',logged:true, vusername:'', vpassword:'', Lstatus:''})
            }).catch((err)=>{
                if(err.response.status===401){
                  this.setState({
                      Lstatus:'Not found',
                      username:'',
                      password:'',
                      vusername:'', vpassword:'',logged:false
                  })
                }else if(err.response.status===402){
                    this.setState({
                        username:'',
                        password:'',
                        Lstatus:'User not verified',
                        vusername:'', vpassword:'',logged:false
                    })
                  }else if(err.response.status===403){
                    this.setState({
                        password:'',
                        Lstatus:'Password',
                        vusername:'', vpassword:'',logged:false
                    })
                  }
            })
        }
       
    }


    render(){
        if (this.state.logged === true) {
            return <Redirect to='/dashboard' />
        }
        return (
          
          <form className='fix'>
                <h3>Login In Here!!!!!!</h3>

                {
                  (this.state.Lstatus ==='Not found')?
                  <p className='alert'>
                  User not found !!!
              </p> 
                      :null
                }  
                  {
                  (this.state.Lstatus ==='User not verified')?
                  <p className='alert'>
                  User is registered but not verified !!!
              </p> 
                      :null
                }  
                   {
                  (this.state.Lstatus ==='Password')?
                  <p className='alert'>
                  Password don't match !!!
              </p> 
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
                  (this.state.vpassword ==='Password')?
                  <p className='alert'>
                  Password cannot be empty !!!
              </p> 
                      :null
                } 

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter username" onBlur={this.validate} value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                     <a href="/register">Register</a>
                </p>
            </form>
        )
    }
}
export default login;