import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: localStorage.getItem("email"),
            company: '',
            internship: '',
            start_month: '',
            start_year: '',
            end_month: '',
            end_year: '',
            fields: {},
            fieldErrors: {},
        }
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    companyNameHandler = (event) => {
        this.setState({ company: event.target.value });
        this.handleChange("company", event);
    }
    internshipHandler = (event) => {
        this.setState({ internship: event.target.value });
        this.handleChange("internship", event);
    }
    start_monthHandler = (event) => {
        this.setState({ start_month: event.target.value });
        this.handleChange("start_month", event);
    }
    start_yearHandler = (event) => {
        this.setState({ start_year: event.target.value });
        this.handleChange("start_year", event);
    }
    end_monthHandler = (event) => {
        this.setState({ end_month: event.target.value });
        this.handleChange("end_month", event);
    }
    end_yearHandler = (event) => {
        this.setState({ end_year: event.target.value });
        this.handleChange("end_year", event);
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //company
        if (!fields["company"]) {
            formIsValid = false;
            errors["company"] = "Cannot be empty";
            // console.log(errors,"errors====>")
        }

        if (typeof fields["company"] !== "undefined") {
            if (!fields["company"].match(/^[a-zA-Z,' ']+$/)) {
                formIsValid = false;
                errors["company"] = "Only letters";
                // console.log(errors,"errors====>");
            }
        }

        //internship
        if (!fields["internship"]) {
            formIsValid = false;
            errors["internship"] = "Cannot be empty";
            // console.log(errors,"errors====>")
        }

        // if (typeof fields["internship"] !== "undefined") {
        //     if (!fields["internship"].match(/^[a-zA-Z,' ']+$/)) {
        //         formIsValid = false;
        //         errors["internship"] = "Only letters";
        //         // console.log(errors,"errors====>");
        //     }
        // }
        //start month
        if (!fields["start_month"]) {
            formIsValid = false;
            errors["start_month"] = "Cannot be empty";
        }
        //start year
        if (!fields["start_year"]) {
            formIsValid = false;
            errors["start_year"] = "Cannot be empty";
        }
        //end month
        if (!fields["end_month"]) {
            formIsValid = false;
            errors["end_month"] = "Cannot be empty";
        }
        //end year
        if (!fields["end_year"]) {
            formIsValid = false;
            errors["end_year"] = "Cannot be empty";
        }
        this.setState({ fieldErrors: errors });
        //console.log(this.state.fieldErrors, "errors====>");

        return formIsValid;
    }
    contactSubmit = (e) => {
        if (this.handleValidation()) {
            this.props.history.push({
                // pathname: '/template'
                pathname:'/export'
            })
            e.preventDefault();
            return true;
        }
        else {
        
            e.preventDefault();
            return false;
        }
    }
    submitHandler = (event) => {
        if (this.contactSubmit(event)) {
            event.preventDefault();
            var UserData = {
                "email": localStorage.getItem("email"),
                'company': this.state.company,
                'internship': this.state.internship,
                'start_month': this.state.start_month,
                'start_year': this.state.start_year,
                'end_month': this.state.end_month,
                'end_year': this.state.end_year,
            }
            console.log(UserData);
            axios({
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                url: "http://localhost:3001/experience",
                data: UserData
            })
                .then((Response) => {
                    if (Response.data.result === 'success') {
                     //   alert('user registerd');
                     
                    
                        this.setState({
                            company: '',
                            internship: '',
                            start_month: '',
                            start_year: '',
                            end_month: '',
                            end_year: ''
                        })
                        this.props.history.push({
                            // pathname: "/template"
                            pathname:'/export'
                        })
                    }
                    // else {
                    //     alert('registration failed');
                    // }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    render() {
        const { company, internship, start_month, start_year, end_month, end_year } = this.state

        return (
            // const {company,internship,start_month,start_year,end_month,end_year}=this.state
            <div className='body'>
                <div className="container" >
                    <h2 id='heading'>Experience</h2>
                    <p className="line">List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples.</p>
                    <form onSubmit={this.submitHandler}>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label>Company/Institute</label>
                                <input type='text' name="company" id="company" value={company} className='form-control space' placeholder='eg. IBM' onChange={this.companyNameHandler} />
                                {this.state.fieldErrors.company && <p key="companyError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.company} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className='col-sm-6'>
                                <label>Internship/Training on</label>
                                <input type='text' name="internship" id="internship" value={internship} className='form-control space' placeholder='eg. IBM' onChange={this.internshipHandler} />
                                {this.state.fieldErrors.internship && <p key="internshipError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.internship} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-3">
                                <label>Start date</label>
                                <select className="form-control" value={start_month} id="sel1" onChange={this.start_monthHandler}>
                                    <option selected hidden>Month</option>
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
                                {this.state.fieldErrors.start_month && <p key="start_monthError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.start_month} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className="col-sm-3">
                                <label><br /></label>
                                <select className="form-control" value={start_year} id="sel1" onChange={this.start_yearHandler}>
                                    <option selected>Year</option>
                                    <option>2022</option>
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
                                {this.state.fieldErrors.start_year && <p key="start_yearError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.start_year} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className="col-sm-3">
                                <label>End date</label>
                                <select className="form-control" value={end_month} id="sel1" onChange={this.end_monthHandler}>
                                    <option selected hidden>Month</option>
                                    <option>January</option>
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
                                {this.state.fieldErrors.end_month && <p key="start_monthError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.end_month} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className="col-sm-3">
                                <label><br /></label>
                                <select className="form-control" value={end_year} id="sel1" onChange={this.end_yearHandler}>
                                    <option selected hidden>Year</option>
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
                                {this.state.fieldErrors.end_year && <p key="end_yearError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.end_year} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                        </div>
                        <div className="form-check d-flex h-100">
                            <label className="form-check-label align-self-end ml-auto" >
                                <input type="checkbox" class="form-check-input" id="check" value="" />I presently work here
                            </label>
                        </div>
                        <div className='d-flex h-100'>
                            <div className='align-self-start mr-auto'>
                                <Link to="skills">
                                <input type='button' className='btn color' value='Back' />
                                </Link>
                            </div>
                            <div className="align-self-end ml-auto">
                                <input type='submit' className='btn color ' value='Save' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}