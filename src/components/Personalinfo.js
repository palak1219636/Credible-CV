import React, { Component } from 'react'
// import Education from './Education'
import './personal.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Personalinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      linkedin: '',
      address: '',
      phone: '',
      fields: {},
      fieldErrors: {},
    }

  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  firstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
    this.handleChange("firstName", event);
  }
  lastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
    this.handleChange("lastName", event);

  }
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
    this.handleChange("email", event);

  }
  linkedinHandler = (event) => {
    this.setState({ linkedin: event.target.value });
    this.handleChange("linkedin", event);

  }
  addressHandler = (event) => {
    this.setState({ address: event.target.value });
    this.handleChange("address", event);

  }
  phoneHandler = (event) => {
    this.setState({ phone: event.target.value });
    this.handleChange("phone", event);

  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
      // console.log(errors,"errors====>")
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
        // console.log(errors,"errors====>");
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
      // console.log(errors,"errors====>");
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
        // console.log(errors,"errors====>");
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Cannot be empty";
    }

    // if (typeof fields["Address"] !== "undefined") {
    //   if (!fields["Address"]) {
    //     formIsValid = false;
    // errors["Address"] = "";
    // console.log(errors,"errors====>");
    // }
    //}

    if (!fields["linkedin"]) {
      formIsValid = false;
      errors["linkedin"] = "Cannot be empty";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
      // console.log(errors,"errors====>");
    }

    if (typeof fields["email"] !== "undefined") {
      if (!fields["email"].match(/^(([^<>()[\],;:\s@"]+(\.[^<>()[\]\\,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        formIsValid = false;
        errors["email"] = "Enter a valid email address";
        // console.log(errors,"errors====>");
      }
    }


    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
      // console.log(errors,"errors====>");
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone"] = "Enter a valid phone number";
        // console.log(errors,"errors====>");
      }
    }

    this.setState({ fieldErrors: errors });
    //console.log(this.state.fieldErrors, "errors====>");

    return formIsValid;
  }

  contactSubmit = (e) => {
    // e.preventDefault();
    if (this.handleValidation()) {
      // alert("Form submitted");

      this.props.history.push({
        pathname: "/education"
      })
      return true;
    } else {

      e.preventDefault();
      return false;
    }
  }
  submitHandler = (event) => {
    if (this.contactSubmit(event))
    // event.preventDefault();
    {
      var UserData = {
        'firstName': this.state.firstName,
        'lastName': this.state.lastName,
        'email': this.state.email,
        'linkedin': this.state.linkedin,
        'address': this.state.address,
        'phone': this.state.phone,
      }
      console.log(UserData);
      axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: "http://localhost:3001/personal",
        data: UserData
      })
        .then((Response) => {
          if (Response.data.result === 'success') {
            
                    if(localStorage.getItem('email')===this.state.email)
                    {
                      localStorage.removeItem("email");
                      localStorage.setItem("email", this.state.email); 
                    }
                    else{
                    localStorage.setItem("email", this.state.email);
                    }
            this.setState({
              firstName: '',
              lastName: '',
              email: '',
              linkedin: '',
              address: '',
              phone: ''
            })
            this.props.history.push({
              pathname: "/education"
            })
          }
          else {
            alert('registration failed');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { firstName, lastName, email, linkedin, address, phone } = this.state
    return (
      <div className='body'>
        <div className="container" >
          <h2 className='heading'>Personal Information</h2>
          <p className="line">Employers will use this Information to contact you.</p>
          <form onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col">
                <label>First name</label>
                <input type="text" value={firstName} className="form-control space" id="firstName" placeholder="eg. Bill" name="firstName" onChange={this.firstNameHandler} />
                {this.state.fieldErrors.firstName && <p key="firstnamError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.firstName} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
              <div className="col">
                <label>Last name</label>
                <input type="text" value={lastName} className="form-control space" id="lastName" placeholder="eg. Gates " name="lastName" onChange={this.lastNameHandler} />
                {this.state.fieldErrors.lastName && <p key="lastnamError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.lastName} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <label>Address</label>
                <input type="text" value={address} className="form-control space" id="address" placeholder="eg. 24b, lajpat nagar" name="address" onChange={this.addressHandler} />
                {this.state.fieldErrors.address && <p key="addressError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.address} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
              <div className="col">
                <label>LinkedIn</label>
                <input type="text" value={linkedin} className="form-control space" id="linkedin" placeholder="Profile Link" name="linkedin" onChange={this.linkedinHandler} />
                {this.state.fieldErrors.linkedin && <p key="linkedinError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.linkedin} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Email Address</label>
                <input type="email" value={email} className="form-control space" id="email" placeholder="eg. abc123@gmail.com" name="email" onChange={this.emailHandler} />
                {this.state.fieldErrors.email && <p key="emailError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.email} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
              <div className="col">
                <label>Phone</label>
                <input type="tel" value={phone} className="form-control space" id="phone" placeholder="eg. 8763524821 " onChange={this.phoneHandler} name="Phone" />
                {this.state.fieldErrors.phone && <p key="phoneError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.phone} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}
              </div>
            </div>
            <div className='d-flex h-100'>
              <div className='align-self-start mr-auto'>
                <Link to='/'>
                  <input type='button' className='btn color' value='Back' />
                </Link>
              </div>
              <div className="align-self-end ml-auto">
                {/* <Link to='/education'> */}
                <input type='submit' className='btn color' value='Save and Next' />
                {/* </Link> */}
              </div>
            </div>
            <div className='panel panel-default'>
            </div>
          </form>
          <br />
        </div>
      </div>
    )
  }
}


