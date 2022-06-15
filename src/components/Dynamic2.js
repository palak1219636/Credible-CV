import React, { Component } from 'react'

export default class Dynamic2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputList: [{ firstName: "", lastName: "" }] 
        }
    }

    // handle input change
         handleInputChange(e, index) {
        const { name, value } = e.target;
        const list = [...this.state.inputList];
        list[index][name] = value;
        this.setState({inputList:list})
        //this.setInputList(list);
    };

    

     // handle click event of the Add button
     handleRemoveClick (index) {
        let x 
        const list = [...this.state.inputList];
        list.splice(index, 1);
        x=list
        this.setState({inputList:x})
        
    };

    // handle click event of the Add button
    handleAddClick= (e) => {
        this.setState((prevState)=>({
            inputList: [...prevState.inputList, {firstName:"", lastName:""}]
        }))
    };



    render() {
        let { inputList } = this.state
        return (
            <div>
                {inputList.map((x, i) => {
                    return (
                        <div className="box" key={i}>
                            <input
                                name="firstName"
                                placeholder="Enter First Name"
                                value={x.firstName}
                                onChange={e => this.handleInputChange(e, i)}
                            />
                            <input
                                className="ml10"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={x.lastName}
                                onChange={e => this.handleInputChange(e, i)}
                            />
                            <div className="btn-box">
                                {inputList.length !== 1 && <button
                                    className="mr10"
                                    onClick={() => this.handleRemoveClick(i)}>Remove</button>}
                                {inputList.length - 1 === i && <button onClick={this.handleAddClick}>Add</button>}
                            </div>
                        </div>
                    );
                })}
                <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

            </div>
        )
    }
}

