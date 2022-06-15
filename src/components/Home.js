import React from 'react'
import './home.css';
import logo from '../logo1.png';
// import resume from '../res1.png';
import resume1 from '../resume1.png';
import '../bg1.jpg';
// import { Link } from 'react-router-dom';
import ModalWin from './ModalWin';
import Login from './Login';
import { useState } from 'react';
export default function Home() {
   
    const[show,setShow] = useState(false);
    const[showlogin,setShowlogin] = useState(false);

        return (
            
            <div className='first-container'>
                <nav className='navbar'>
                    <div className='logo'>
                        <img style={{width:'10rem',height:'4rem'}} src={logo} alt='0'/>
                    </div>
                    <div className='sign-btn right'>
                        <button onClick={()=>setShow(!show)} type='submit'>Register</button>
                    </div> 
                    <div className='sign-btn'>
                    
                        <button onClick={()=>setShowlogin(!showlogin)} type='submit'>Login</button>
                       
                    </div>
                </nav>
                <div className='sec-container'>
                    <div className='imgTextContainer'>
                    <div className='imgContainer'>
                        {/* <img src={resume} alt="" />  */}
                        <img src={resume1} alt=""/>
                    </div>
                    <div className='textContainer' style={{width:'25rem',textAlign:'center'}}>
                        <p style={{textAlign:'center'}}>Land your dream job with the perfect resume that the employers are looking for!</p>
                        
                        <button className='createBtn' onClick={()=>setShowlogin(!showlogin)} type='submit' >Create Your Resume</button>
                
                    </div>
                </div>
            </div>
                <footer>
                    <p style={{margin:0,textAlign:'center',padding:'3px',fontWeight:'600'}}>&copy; Copyright@2022 </p>
                </footer>
                <ModalWin show={show}/> 
                <Login show={showlogin}/> 
            </div>
        )
    }


// onClose={()=>setShow(false)}
