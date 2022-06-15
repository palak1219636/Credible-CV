import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Template.css'
// import ReactToPrint from 'react-to-print'
import axios from 'axios'
export default class Template extends Component {
    constructor(props){
        super(props);
        this.state={
            resultData:[]
        }
    }
    componentDidMount(){
       // this.setState({resultData:response})
        // })
        var Userdata = {
            "email":localStorage.getItem("email"),
        }
        console.log(Userdata);
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: "http://localhost:3001/getResume",
            data: Userdata
          })
      .then((response)=>{
          this.setState({
              resultData:response.data
          })
      })
      .catch((error)=>{
          console.log(error);
      })
    }
    render() {
        const {resultData} = this.state
        return (
            // this.state.resultData.length!=0
            // ?
           <div>{
               this.fetchdata(resultData)
           }
           {/* <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
                /> */}
           </div>
            // :
            // null
        )
    }


fetchdata(resultData)
{
    if(resultData.length>0)
    {
        return resultData.map((singleRes)=>{
            return(
                // <div className='templateWrapper' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'40rem'}}>
                <div className='templateWrapper' style={{backgroundColor:'rgb(236 236 240)',width:'32rem',height:'100vh',display:'flex'}}>

                    <div style={{width:'8rem',backgroundColor:'rgb(9,15,56)', height:'100vh'}}>
                    </div>
                    <div className="main" style={{paddingLeft:'1rem'}}>
                        <div>
                        <h3 style={{margin:'0.3rem'}}>{singleRes.firstName} {singleRes.lastName}</h3>
                        <p style={{margin:'0.3rem'}}><b>Address:</b> <span>{singleRes.address}</span></p>
                        <p style={{margin:'0.3rem'}}><b>E-mail:</b> <span>{singleRes.email}</span></p>
                        <p style={{margin:'0.3rem'}}><b>Phone:</b> <span>{singleRes.phone}</span></p>
                        <p style={{margin:'0.3rem'}}><b>LinkedIn:</b> <span>{singleRes.linkedin}</span></p>
                        </div>
                        <hr/>                        
                        <div>
                            <h3 style={{margin:'0.3rem'}}>Education</h3>
                            <p style={{margin:'0.3rem'}}><span><b>{singleRes.degree}</b></span> <span>{singleRes.university}</span> <span>({singleRes.g_month} </span><span>{singleRes.g_year})</span> </p>
                            <p style={{margin:'0.3rem'}}><b>SGPA-</b><span>{singleRes.percent}</span></p>
                          <div style={{display:'flex'}}>
                          <div className='matric'>
                           <h6 style={{margin:'0.3rem'}}><b>Matriculation</b></h6>
                            <p style={{margin:'0.3rem'}}><b>Board-</b> <span>{singleRes.matric_board}</span></p>
                            <p style={{margin:'0.3rem'}}><b>CGPA-</b> <span>{singleRes.matric_percent}</span></p>
                           </div>
                           <div className='secondary'>
                           <h6 style={{margin:'0.3rem'}}><b>Senior Secondary</b></h6>
                            <p style={{margin:'0.3rem'}}><b>Board-</b> <span>{singleRes.sec_board}</span></p>
                            <p style={{margin:'0.3rem'}}><b>CGPA-</b> <span>{singleRes.sec_percent}</span></p>
                           </div>
                          </div>
                        </div>
                        <hr/>
                        <div>
                            <h3 style={{margin:'0.3rem'}}>Experience</h3>
                            <p style={{margin:'0.3rem'}}><span><b>Technology- </b>{singleRes.internship}</span></p>
                            <div style={{margin:'0.3rem',display:'flex',justifyContent:'space-between'}}>
                            <p style={{margin:'0.3rem'}}><span><b>Company- </b>{singleRes.company}</span></p>
                            <p style={{margin:'0.3rem'}}>{singleRes.start_month} {singleRes.start_year} - {singleRes.end_month} {singleRes.end_year}</p>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <h3 style={{margin:'0.3rem'}}>Skills</h3>
                            <ul style={{margin:'0.3rem',listStyleType:'square'}}>
                                <li style={{margin:'0.3rem'}}>{singleRes.skill1}</li>
                                <li style={{margin:'0.3rem'}}>{singleRes.skill2}</li>
                                <li style={{margin:'0.3rem'}}>{singleRes.skill3}</li>
                            </ul>
                        </div>
                    </div>    
                {/* </div> */}
            </div>
            )
        }
        )
    }
}
}