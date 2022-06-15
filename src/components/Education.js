import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Education extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email:localStorage.getItem("email"),
            university: '',
            degree: '',
            g_month: '',    
            g_year: '',
            percent: '',
            matric_percent: '',
            matric_board:'',
            sec_percent:'',
            sec_board:'',
            fields: {},
            fieldErrors: {}
        }
    }
    
    

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    universityHandler = (event) => {
        this.setState({ university: event.target.value });
        this.handleChange("university", event);
    }
    degreeHandler = (event) => {
        this.setState({ degree: event.target.value });
        this.handleChange("degree", event);
    }
    g_monthHandler = (event) => {
        this.setState({ g_month: event.target.value });
        this.handleChange("g_month", event);
    }
    g_yearHandler = (event) => {
        this.setState({ g_year: event.target.value });
        this.handleChange("g_year", event);
    }
    percentHandler = (event) => {
        this.setState({ percent: event.target.value });
        this.handleChange("percent", event);
    }
    matric_boardHandler = (event) => {
        this.setState({ matric_board: event.target.value });
        this.handleChange("matric_board", event);
    }
    matric_percentHandler = (event) => {
        this.setState({ matric_percent: event.target.value });
        this.handleChange("matric_percent", event);
    }
    sec_boardHandler = (event) => {
        this.setState({ sec_board: event.target.value });
        this.handleChange("sec_board", event);
    }
    sec_percentHandler = (event) => {
        this.setState({ sec_percent: event.target.value });
        this.handleChange("sec_percent", event);
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //university
        if (!fields["university"]) {
            formIsValid = false;
            errors["university"] = "Cannot be empty";
        }

        if (typeof fields["university"] !== "undefined") {
            if (!fields["university"].match(/^[a-zA-Z,' ']+$/)) {
                formIsValid = false;
                errors["university"] = "Only letters";
            }
        }
        //degree
        if (!fields["degree"]) {
            formIsValid = false;
            errors["degree"] = "Cannot be empty";
        }


        //g_month
        if (!fields["g_month"]) {
            formIsValid = false;
            errors["g_month"] = "Cannot be empty";
        }


        //g_year
        if (!fields["g_year"]) {
            formIsValid = false;
            errors["g_year"] = "Cannot be empty";
        }



        //percent
        if (!fields["percent"]) {
            formIsValid = false;
            errors["percent"] = "Cannot be empty";
        }

        if (typeof fields["percent"] !== "undefined") {
            if (!fields["percent"].match(/^\d+\.\d{0,2}$/)) {
                formIsValid = false;
                errors["percent"] = "Only Numbers ";
            }
        }

        //matric

        if (!fields["matric_board"]) {
            formIsValid = false;
            errors["matric_board"] = "Cannot be empty";
        } 

        if (!fields["matric_percent"]) {
            formIsValid = false;
            errors["matric_percent"] = "Cannot be empty";
        }

        if (typeof fields["matric_percent"] !== "undefined") {
            if (!fields["matric_percent"].match(/^\d+\.\d{0,2}$/)) {
                formIsValid = false;
                errors["matric_percent"] = "Only Numbers ";
            }
        }

        //senior secondary
        if (!fields["sec_board"]) {
            formIsValid = false;
            errors["sec_board"] = "Cannot be empty";
        } 

        if (!fields["sec_percent"]) {
            formIsValid = false;
            errors["sec_percent"] = "Cannot be empty";
        }

        if (typeof fields["sec_percent"] !== "undefined") {
            if (!fields["sec_percent"].match(/^\d+\.\d{0,2}$/)) {
                formIsValid = false;
                errors["sec_percent"] = "Only Numbers ";
            }
        }

        this.setState({ fieldErrors: errors });

        return formIsValid;
    }
    contactSubmit = (e) => {
        // e.preventDefault();
        if (this.handleValidation()) {
            this.props.history.push({
                pathname: "/skills"
            })
            e.preventDefault();

            return true;

        } else {
            // alert("Form has errors.");

            e.preventDefault();
            return false;
        }
    }

    submitHandler = (event) => {
        if(this.contactSubmit(event)){
       event.preventDefault();
        var UserData = {
            "email":localStorage.getItem("email"),
            "university": this.state.university,
            "degree": this.state.degree,
            "g_month": this.state.g_month,
            "g_year": this.state.g_year,
            "percent": this.state.percent,
            "matric_board":this.state.matric_board,
            "matric_percent":this.state.matric_percent,
            "sec_board":this.state.sec_board,
            "sec_percent":this.state.sec_percent
        }
        console.log(UserData);
        axios({
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            url: "http://localhost:3001/education", 
            data: UserData
        })
            .then((Response) => {
                if (Response.data.result === 'success') {
                    // alert('user registerd');
                    console.log(Response.data.result,"education result=========>"); 
                    // if(localStorage.getItem('email')!=null)
                    // {
                    // if(localStorage.getItem('email')===this.state.email)
                    // {
                    //   localStorage.removeItem("email"); 
                    // }
                    // else{
                    // localStorage.setItem("email", this.state.email);
                    // }
                //}
                    this.setState({
                        university: '',
                        degree: '',
                        g_month: '',
                        g_year: '',
                        percent: '',
                        matric_board:'',
                        matric_percent:'',
                        sec_board:'',
                        sec_percent:'',
                    })
                    this.props.history.push({
                        pathname:"/skills"
                      })
                }
                // else {
                //     alert('registration failed');
                //     console.log(Response.data.result,"education result=========>"); 

                // }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    };
    // componentDidMount(){
    //     console.log(localStorage.getItem("email"),"email in education");
    //     this.setState({

    //         email:localStorage.getItem("email")
    //     })
    // }
    render() {
        const { university, degree, g_month, g_year, percent,matric_board,matric_percent,sec_board,sec_percent } = this.state
        return (
            <div className='body'>
            <div className="container">
                <h2 className='heading'>Education</h2>
                {/* <p className="line">Add Information about your educational background.</p> */}
                <form onSubmit={this.submitHandler}>
                    <div className="row">
                        <div className="col">
                            <label>University name</label>
                            <input type="text" value={university} className="form-control space" id="university" placeholder="eg. Harvard University" name="university" onChange={this.universityHandler}  />
                            {this.state.fieldErrors.university && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.university} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
                        </div>
                    </div>


                    <div className="row">
                        <div class="col-sm-6">
                            <label for="sel1">Select a degree</label>
                            <select class="form-control space" value={degree} name='degree' id="sel1" required onChange={this.degreeHandler} >
                                <option selected >Select a degree</option>
                                <option value="High school Diploma">High school Diploma</option>
                                <option>BBA</option>
                                <option>BCA</option>
                                <option>MBA</option>
                                <option>GED</option>
                                <option>MCA</option>
                                <option>Bachelor of Arts</option>
                                <option>Bachelor of Science</option>
                                <option>Masters of Arts</option>
                                <option>M.D.</option>
                                <option>Ph.D</option>
                                <option>Accociate of Science</option>
                                <option>Accociate of Applied Science</option>
                                <option>Information technology</option>
                                <option>Bachelor of technology</option>
                            </select>
                            {this.state.fieldErrors.degree && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.degree} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                        </div>
                        <div className="col-sm-3">
                            <label>Graduation date</label>
                            <select class="form-control" value={g_month} id="sel1" name='g_month' required onChange={this.g_monthHandler}>
                                <option selected >Month</option>
                                <option value="January">January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            {this.state.fieldErrors.g_month && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.g_month} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                        </div>
                        <div className="col-sm-3">
                            <label><br /></label>
                            <select class="form-control" value={g_year} id="sel1" name='g_year' required onChange={this.g_yearHandler}>
                                <option selected >Year</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                            </select>
                            {this.state.fieldErrors.g_year && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.g_year} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label>Percent/SGPA/CGPA</label>
                            <input type="number" value={percent} className="form-control space" id="percent" placeholder="Enter your Percentage/CGPA/SGPA" name="percent" onChange={this.percentHandler}  />
                            {this.state.fieldErrors.percent && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.percent} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
                            
                        </div>
                    </div>

                    <h2 className='heading'>Senior Secondary Education</h2>

                    <div className="row">
                  
                         <div className='col-sm-6'>
                            <label>BOARD Name </label>
                            <input type="text" value={sec_board} className="form-control space" id="sec_board" placeholder="eg. CBSE" name="sec_board" onChange={this.sec_boardHandler}  />
                            {this.state.fieldErrors.sec_board && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.sec_board} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                        </div> 
                        <div className='col-sm-6'>
                            <label>CGPA/Percentage</label>
                            <input type="number" value={sec_percent} className="form-control space" id="sec_percent" placeholder="Enter your Percentage/CGPA/SGPA" name="sec_percent" onChange={this.sec_percentHandler}  />
                            {this.state.fieldErrors.sec_percent && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.sec_percent} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
                            
                        </div> 
                    </div>
                    <div className="row">
                       
                    </div>
                    <h2 className='heading'>Matriculation</h2>
                    <div className="row">
                    <div className='col-sm-6'>
                            <label>BOARD Name </label>
                            <input type="text" value={matric_board} className="form-control space" id="matric_board" placeholder="eg. CBSE" name="matric_board" onChange={this.matric_boardHandler}  />
                            {this.state.fieldErrors.matric_board && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.matric_board} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                        </div> 
                        <div className='col-sm-6'>
                            <label>CGPA/Percentage</label>
                            <input type="number" value={matric_percent} className="form-control space" id="matric_percent" placeholder="Enter your Percentage/CGPA/SGPA" name="matric_percent" onChange={this.matric_percentHandler}  />
                            {this.state.fieldErrors.matric_percent && <p key="degreeError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.matric_percent} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
                            
                        </div> 
                   
                    </div>
                    {/* <h2 className='heading'>Diploma</h2>
                    <div className="row">
                      
                        <div className='col-sm-6'>
                            <label>University Name </label>
                            <input type="text" className="form-control space" id="board" placeholder="eg. CBSE" name="board" required />
                        </div> 
                        <div className='col-sm-6'>
                            <label>CGPA/Percentage</label>
                            <input type="text" className="form-control space" id="percent" placeholder="Enter your Percentage/CGPA/SGPA" name="percent"  required />
                        </div> 
                    </div> */}

{/* 
                    <div class="form-check d-flex h-100">
                        <label class="form-check-label align-self-end ml-auto" >
                            <input type="checkbox" class="form-check-input" id="check" value="" />I presently attend here
                            
                        </label>
                    </div> */}
                    <div className='d-flex h-100'>
                        <div className='align-self-start mr-auto'>
                            <Link to='personal'>
                                <input type='button' className='btn color' value='Back' />
                            </Link>
                        </div>
                        <div className="align-self-end ml-auto">
                            {/* <Link to='skills'> */}
                                <input type='submit' className='btn color ' value='Save' />
                            {/* </Link> */}
                        </div>
                    </div>
                </form>
                <br />
            </div>
            </div>
        )
    }
}
