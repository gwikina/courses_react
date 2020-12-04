import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

class Edit extends React.Component {
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

  render(){
    return (
        <div>
        <Button onClick={this.toggle}> Edit </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Course</ModalHeader>
            <ModalBody>
                <p> <label> Course Name </label> </p>
                <p><input id="cname" placeholder={this.props.course.name}  /></p>
                <p> <label> Course Description </label> </p>
                <p><input id="cdesc" placeholder={this.props.course.desc}  /></p>
                <p> <label> Course Details </label> </p>
                <p><input id="cdet"placeholder={this.props.course.details}  /></p>
                <p> <label> Department </label> </p>
                <p>
                    <select name="drop-down" id="drop-down">
                        <option value="SE">Software Engineering </option>
                        <option value="CS">Computer Science</option>
                        <option value="CE">Computer Engineering</option>
                        <option value="Viro">Virology</option>
                    </select>
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Okay</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default Edit;