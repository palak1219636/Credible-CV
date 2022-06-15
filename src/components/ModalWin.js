// import { Button } from 'bootstrap'
import './ModalWin.css';
import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
export default class ModalWin extends Component {
    
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            submitted:false
        }
    }
    userNameChange = (event)=>{
        this.setState(
            {
                name:event.target.value
            }
        )
    }

    userEmailChange = (event)=>{
        this.setState(
            {
                email:event.target.value
            }
        )
    }
    userPasswordChange = (event)=>{
        this.setState(
            {
                password:event.target.value
            }
        )
    }

    submitHandler = (event) =>{
        event.preventDefault();
        var UserData = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        console.log(UserData);
        axios({
            method:'POST',
            headers:{'Content-Type':'application/json'},
            url:"http://localhost:3001/register",
            data:UserData
        })
        .then((Response)=>{
            if(Response.data.result === 'success'){
                alert("Succesfully registered");
                this.setState({
                    name:"",
                    email:"",
                    password:"",
                    submitted:!this.state.submitted
                })
                // this.props.history.push({
                //     pathname:"/skills"
                // })
            }
            else{
                alert('registration failed');
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
   
    render() {
        const {name,email,password}=this.state;
         
             return (
                this.props.show
                ?
                <div className='modal-body'>
                     <div className='modal-wrapper'>
                         <header className='modal-header'>
                             <button type='submit'>Register</button>
                         </header>
                         <form onSubmit={this.submitHandler} className="signInForm">
                             <label style={{textAlign:'justify'}}>Name</label>
                             <input type="text" name="name" value={name} onChange={this.userNameChange} required/>
                             <label style={{textAlign:'justify'}}>Email</label>
                             <input type="email" name="email" value={email} onChange={this.userEmailChange} required/>
                             <label style={{textAlign:'justify'}}>Password</label>
                             <input type="password" name="password" value={password} onChange={this.userPasswordChange} required/>
                             <button type="submit">Submit</button>
                             {this.state.submitted && <Redirect to="/personal"/>}
                         </form>
                     </div>
                 </div>
                 :
                 null
 
             )
    }
} 
















