import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const cname = document.querySelector('#cname');
const cdesc = document.querySelector('#cdesc');

const cdet = document.querySelector('#cdet');
const dropdown = document.querySelector('#dropdown');

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,   
        }
        this.toggle = this.toggle.bind(this);
    }
      toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('/coursedata/', {
            method: 'POST', 
            headers:{
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify({
                new_name: event.target.value,
                new_desc: event.target.value,
                new_detail: event.target.value,
                new_dept: 3,
            })
        })
        .then(response => response.json())
        .then( 
            alert('success')
        )
    }

  render(){
    return (
        <div>
        <Button onClick={this.toggle} color="primary"> Add </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add Course</ModalHeader>
            <ModalBody>
                <p> <label> Course Name </label> </p>
                <p><input id="cname" /></p>
                <p> <label> Course Description </label> </p>
                <p><input id="cdesc" /></p>
                <p> <label> Course Details </label> </p>
                <p><input id="cdet" /></p>
                <p> <label> Department </label> </p>
                <p>
                    <select name="dropdown" id="dropdown">
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