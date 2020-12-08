import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,   
            cname: this.props.course.name,
            cdesc: this.props.course.desc,
            cdetails: this.props.course.details,
            cdept: 1,  
            deps: []
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
        fetch('/coursedata/' + this.props.course.id, {
            method: 'PUT', 
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
            alert("You successfully edited a course. Refresh to see it!")
        )
    }

  render(){
    return (
        <div>
        <Button onClick={this.toggle} color="secondary"> Edit </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Course</ModalHeader>
            <ModalBody>
                <p> <label> Course Name </label> </p>
                <p><Input id="cname" onChange={this.handleCname} defaultValue={this.state.cname}> </Input></p>
                <p> <label> Course Description </label> </p>
                <p><Input id="cdesc" onChange={this.handleCdesc} defaultValue={this.state.cdesc}/></p>
                <p> <label> Course Details </label> </p>
                <p><Input id="cdet" onChange={this.handleCdetails} defaultValue={this.state.cdetails}/></p>
                <p> <label> Department </label> </p>
                <p>
                    <select name="dropdown" id="dropdown" onChange={this.handleCdept}>
                        <option value={1}>Software Engineering </option>
                        <option value={2} selected>Computer Science</option>
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

export default Edit;