import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
export default class ModalWin extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            submitted:false,
        }
    }
    userPasswordChange = (event)=>{
        this.setState(
            {
                password:event.target.value
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
    submitHandler = (event) =>{
        // event.preventDefault();
        var UserData = {
            "email":this.state.email,
            "password":this.state.password
        }
        console.log(UserData);
        axios({
            method:'POST',
            headers:{'Content-Type':'application/json'},
            url:"http://localhost:3001/login",
            data:UserData
        })
        .then((Response)=>{
            if(Response.data.result === 'success'){
                alert("Succesfully Login");
                this.setState({
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
    handleModal(e){
      this.setState({e:false})
        console.log(!this.props.show);
    }
   
    render() {
        const {email,password}=this.state; 
    
        return (
            this.props.show
            ?
            <div className='modal-body'>
                     <div className='modal-wrapper'>
                    <button onClick={()=>this.handleModal(this.props.show)}>X</button>
                         <header className='modal-header'>
                             <button type='submit'>Login</button>
                         </header>
                         <form onSubmit={this.submitHandler} className="signInForm">
                             <label style={{textAlign:'justify'}}>Email</label>
                             <input type="email" name="email" value={email} onChange={this.userEmailChange} required/>
                             <label style={{textAlign:'justify'}}>Password</label>
                             <input type="password" name="password" value={password} onChange={this.userPasswordChange} required/>
                             <button type="submit">Submit</button>
                             {this.state.submitted && <Link to="/personal"/>}
                         </form>
                     </div>
                 </div>
                 :
                 null
         )
    }
} 
