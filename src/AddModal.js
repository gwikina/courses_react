import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,   
            cname: "",
            cdesc: "",
            cdetails: "",
            cdept: "",  
        }
        this.toggle = this.toggle.bind(this);
        this.handleCname = this.handleCname.bind(this);
    }
      toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    handleCname = (event) => {
        this.setState({
            cname: event.target.value
        });
    }

    handleCdesc = (event) => {
        this.setState({
            cdesc: event.target.value
        });
    }

    handleCdetails = (event) => {
        this.setState({
            cdetails: event.target.value
        });
    }

    handleCdept = (event) => {
        this.setState({
            cdept: event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        fetch('/coursedata/', {
            method: 'POST', 
            headers:{
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify({
                new_name: this.state.cname,
                new_desc: this.state.cdesc,
                new_detail: this.state.cdetails,
                new_dept: this.state.cdept,
            })
        })
        .then(response => response.json())
        .then( 
            alert("Success")
        )
    }

  render(){
    return (
        <div>
        <p> {this.state.cname}</p>
        <Button onClick={this.toggle} color="primary"> Add </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add Course</ModalHeader>
            <ModalBody>
                <p> <label> Course Name </label> </p>
                <p><Input id="cname" onChange={this.handleCname}/></p>
                <p> <label> Course Description </label> </p>
                <p><Input id="cdesc" onChange={this.handleCdesc}/></p>
                <p> <label> Course Details </label> </p>
                <p><Input id="cdet" onChange={this.handleCdetails}/></p>
                <p> <label> Department </label> </p>
                <p>
                    <select name="dropdown" id="dropdown" onChange={this.handleCdept}>
                        <option value={1}>Software Engineering </option>
                        <option value={2}>Computer Science</option>
                        <option value={3}>Computer Engineering</option>
                        <option value={4}>Virology</option>
                    </select>
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.handleSubmit}>Okay</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default Add;