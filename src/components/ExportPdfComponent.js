import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
// import Dynamic2 from './Dynamic2'
import Template from './Template'


export default class ExportPdfComponent extends Component {
    render() {
        return (
    // background-image:linear-gradient(rgba(235,197,197,0.4),rgba(144,180,195,0.4));
    <div style={{position:'relative',backgroundImage:'linear-gradient(rgba(250,168,168,0.4),rgba(6,15,19,0.4))',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                {/* <h1>Export HTMl Table in PDF File</h1> */}

                {/* {/ Component to print here /} */}
                <Template ref={(response) => (this.componentRef = response)} />
                {/* <Template ref={(response) => (this.componentRef = response)} /> */}


                <ReactToPrint
                    content={() => this.componentRef}
                    // trigger={() => <button style={{position:'absolute',top:'45%',height:'40px'}} className="btn btn-dark">Download</button>}
                    trigger={() => <button style={{position:'absolute',top:'40%',right:'13%',height:'40px'}} className="btn btn-outline-success">Download</button>}/>
            </div>
        )
    }
}