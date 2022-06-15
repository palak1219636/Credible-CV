import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default class Skills extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     data: [{ skill: '', level: '' }],
        //     skill:'',
        //     level:'',
        //    inputList: [{ skill: "", level: "" }] 
        // }
        
        this.state = {
            email: localStorage.getItem("email"),
            skill1: '',
            skill1_level: '',
            skill2: '',
            skill2_level: '',
            skill3: '',
            skill3_level: '',
            fields: {},
            fieldErrors: {}
        }
    }

    // Add = (e) => {
    //     this.setState((prevState) => ({
    //         data: [...prevState.data, { name: '', email:'' }],
    //     }));
    // }
    // // handle input change
    // handleInputChange(e, index) {
    //     const { name, value } = e.target;
    //     const list = [...this.state.inputList];
    //     list[index][name] = value;
    //     this.setState({inputList:list})
    // }

    // // handle click event of the Add button
    // handleRemoveClick (index) {

    //     let x 
    //     const list = [...this.state.inputList];
    //     list.splice(index, 1);
    //     x=list
    //     this.setState({inputList:x})
    // };

    // // handle click event of the Add button
    //    handleAddClick= (e) => {
    //     this.setState((prevState)=>({
    //         inputList: [...prevState.inputList, {skill:"", level:""}]
    //     }))
    // };

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    skill1Handler = (event) => {
        this.setState({ skill1: event.target.value });
        this.handleChange("skill1", event);
    }


    skill2Handler = (event) => {
        this.setState({ skill2: event.target.value });
        this.handleChange("skill2", event);
    }


    skill3Handler = (event) => {
        this.setState({ skill3: event.target.value });
        this.handleChange("skill3", event);
    }


    skill1_levelHandler = (event) => {
        this.setState({ skill1_level: event.target.value });
        this.handleChange("skill1_level", event);
    }

    skill2_levelHandler = (event) => {
        this.setState({ skill2_level: event.target.value });
        this.handleChange("skill2_level", event);
    }

    skill3_levelHandler = (event) => {
        this.setState({ skill3_level: event.target.value });
        this.handleChange("skill3_level", event);
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //skill1
        if (!fields["skill1"]) {
            formIsValid = false;
            errors["skill1"] = "Cannot be empty";
        }

        // if (typeof fields["skill1"] !== "undefined") {
        //     if (!fields["skill1"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill1"] = "Only letters";
        //     }
        // }
        //skill1 level
        if (!fields["skill1_level"]) {
            formIsValid = false;
            errors["skill1_level"] = "Cannot be empty";
        }
        // if (typeof fields["skill1_level"] !== "undefined") {
        //     if (!fields["skill1_level"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill1_level"] = "Only letters";
        //     }
        // }
        //skill2
        if (!fields["skill2"]) {
            formIsValid = false;
            errors["skill2"] = "Cannot be empty";
        }

        // if (typeof fields["skill2"] !== "undefined") {
        //     if (!fields["skill2"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill2"] = "Only letters";
        //     }
        // }
        //skill2 level
        if (!fields["skill2_level"]) {
            formIsValid = false;
            errors["skill2_level"] = "Cannot be empty";
        }

        // if (typeof fields["skill2_level"] !== "undefined") {
        //     if (!fields["skill2_level"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill2_level"] = "Only letters";
        //     }
        // }
        //skill3
        if (!fields["skill3"]) {
            formIsValid = false;
            errors["skill3"] = "Cannot be empty";
        }

        // if (typeof fields["skill3"] !== "undefined") {
        //     if (!fields["skill3"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill3"] = "Only letters";
        //     }
        // }
        //skill3 level
        if (!fields["skill3_level"]) {
            formIsValid = false;
            errors["skill3_level"] = "Cannot be empty";
        }

        // if (typeof fields["skill3_level"] !== "undefined") {
        //     if (!fields["skill3_level"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["skill3_level"] = "Only letters";
        //     }
        // }
        this.setState({ fieldErrors: errors });
        return formIsValid;
    }

    contactSubmit = (e) => {
        //  e.preventDefault();
        if (this.handleValidation()) {
            // alert("Form submitted");
            this.props.history.push({
                pathname: "/experience"
            })
            e.preventDefault();
            return true;
        } else {
            // alert("Form has errors.");
            e.preventDefault();
            return false;
        }
    }

    //   handleChange(field, e) {
    //     let fields = this.state.fields;
    //     fields[field] = e.target.value;
    //     this.setState({ fields });
    //   }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    submitHandler = (event) => {
        if (this.contactSubmit(event)) {
            event.preventDefault();
            var UserData = {
                "email":localStorage.getItem("email"),
                "skill1": this.state.skill1,
                "skill2": this.state.skill2,
                "skill3": this.state.skill3,
                "skill1_level": this.state.skill1_level,
                "skill2_level": this.state.skill2_level,
                "skill3_level": this.state.skill3_level,
            }
            console.log(UserData);
            axios({
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                url: "http://localhost:3001/skills",
                data: UserData
            })
                .then((Response) => {
                    if (Response.data.result === 'success') {
                        
                    
                        this.setState({
                            skill1: '',
                            skill1_level: '',
                            skill2: '',
                            skill2_level: '',
                            skill3: '',
                            skill3_level: '',
                        })
                        this.props.history.push({
                            pathname: "/experience"
                        })
                    }
                    else {
                        //alert('registration failed');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    render() {
        // let { data } = this.state
        //  let {inputList} = this.state
        const { skill1, skill1_level, skill2, skill2_level, skill3, skill3_level } = this.state
        return (
            <div className='body'>
                <div className="container">

                    <h2 className='heading'>Skills</h2>
                    <p className="line">Highlight 3-4 of your top skills.</p>
                    <form onSubmit={this.submitHandler}>
                        <div className='row'>
                            <div className="col">
                                <label htmlFor='skill'>Skill</label>
                                <input type="text" value={skill1} className="form-control space" id="skill" placeholder="Enter your Skill" name="skill" onChange={this.skill1Handler} required />
                                {this.state.fieldErrors.skill1 && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill1} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control ' value={skill1_level} onChange={this.skill1_levelHandler}>
                                    <option selected>Select your Level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Experienced</option>
                                </select>
                                {this.state.fieldErrors.skill1_level && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill1_level} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                        </div>

                        <div className='row'>
                            <div className="col">
                                <label htmlFor='skill'>Skill</label>
                                <input type="text" value={skill2} className="form-control space" id="skill2" placeholder="Enter your Skill" name="skill" onChange={this.skill2Handler} required />
                                {this.state.fieldErrors.skill2 && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill2} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control ' value={skill2_level} onChange={this.skill2_levelHandler}>
                                    <option selected>Select your Level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Experienced</option>
                                </select>
                                {this.state.fieldErrors.skill2_level && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill2_level} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                        </div>


                        <div className='row'>
                            <div className="col">
                                <label htmlFor='skill'>Skill</label>
                                <input type="text" value={skill3} className="form-control space" id="skill" placeholder="Enter your Skill" name="skill" onChange={this.skill3Handler} required />
                                {this.state.fieldErrors.skill3 && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill3} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control ' value={skill3_level} onChange={this.skill3_levelHandler}>
                                    <option selected>Select your Level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Experienced</option>
                                </select>
                                {this.state.fieldErrors.skill3_level && <p key="universityError" style={{ marginVertical: 10, color: '#949594' }}>{this.state.fieldErrors.skill3_level} <i style={{ color: '#F2B221 ' }} class="fas fa-exclamation-circle"></i></p>}

                            </div>
                        </div>
                        {/* <div className='row'>
                            <div className="col">
                                <label htmlFor='skill'>Skill</label>
                                <input type="text" className="form-control space" id="skill" placeholder="Enter your Skill" name="skill" required />
                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control '>
                                    <option selected disabled>Select your Level</option>
                                    <option>Novice</option>
                                    <option>Begainner</option>
                                    <option>skillful</option>
                                    <option>experienced</option>
                                    <option>expert</option>
                                    <option>-Don't show level</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <label htmlFor='skill'>Skill</label>
                                <input type="text" className="form-control space" id="skill" placeholder="Enter your Skill" name="skill" required />
                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control '>
                                    <option selected disabled>Select your Level</option>
                                    <option>Novice</option>
                                    <option>Begainner</option>
                                    <option>skillful</option>
                                    <option>experienced</option>
                                    <option>expert</option>
                                    <option>-Don't show level</option>
                                </select>
                            </div>
                        </div> */}
                        {/* {
                       data.map((val, idx) => {
                            let skillid = `skill-${idx}`, levelid = `level-${idx}`
                            return (
                                <div key={idx} className='row'>
                                    <div className='col'>
                                    <label htmlFor={skillid}>{`Skill`}</label>
                                    <input type='text' name={skillid} value={val.skill} data-id={idx} id={skillid} className='name form-control' placeholder='Enter your Skill' onChange={e=>this.handleInputChange(e,idx)} />
                                    </div>
                                    <div className='col'>
                                    <label htmlFor={levelid}>level</label>
                                    <select name={levelid} data-id={idx} id={skillid} className='name form-control' value={val.level} onChange={e=>this.handleInputChange(e,idx)}>
                                        <option selected disabled>Select your Level</option>
                                        <option>Novice</option>
                                        <option>Begainner</option>
                                        <option>skillful</option>
                                        <option>experienced</option>
                                        <option>expert</option>
                                        <option>-Don't show level</option>
                                    </select>
                                </div>
                                
                                </div>
                                
                            )
                        })
                    } */}
                        <div className='d-flex h-100'>
                            <div className='align-self-start mr-auto'>
                                <Link to='education'>
                                    <input type='button' className='btn color' value='Back' />
                                </Link>
                            </div>
                            <div className='align-self-center mx-auto'>
                                {/* <input type='button' onClick={this.Add} className='btn center text-lg mr-4' value='+Add More skills' />  */}
                                {/* <input type='button' onClick={this.handleChange} className='btn center text-lg' value="Remove"/> */}
                                {/* {data.length !== 1 && <button
                                    className="btn center text-lg mr-4"
                                    onClick={() => this.handleRemoveClick(idx)}>Remove</button>}
                                {data.length - 1 === idx && <button onClick={this.handleAddClick}>Add</button>}
                                */}
                            </div>
                            <div className="align-self-end ml-auto">
                                <input type='submit' className='btn color' value='Save and Next' />
                            </div>
                        </div>
                    </form>

                    <br />
                </div>
            </div>
        )
    }
    // render() {
    //     let { inputList } = this.state
    //     return (
    //         <div>
    //             {inputList.map((x, i) => {
    //                 return (
    //                     <div className="box" key={i}>
    //                         <input
    //                             name="firstName"
    //                             placeholder="Enter First Name"
    //                             value={x.firstName}
    //                             onChange={e => this.handleInputChange(e, i)}
    //                         />
    //                         <input
    //                             className="ml10"
    //                             name="lastName"
    //                             placeholder="Enter Last Name"
    //                             value={x.lastName}
    //                             onChange={e => this.handleInputChange(e, i)}
    //                         />
    //                         <div className="btn-box">
    //                             {inputList.length !== 1 && <button
    //                                 className="mr10"
    //                                 onClick={() => this.handleRemoveClick(i)}>Remove</button>}
    //                             {inputList.length - 1 === i && <button onClick={this.handleAddClick}>Add</button>}
    //                         </div>
    //                     </div>
    //                 );
    //             })}
    //             <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

    //         </div>
    //     )
    // }
}