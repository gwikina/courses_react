import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
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
        <img className="ml-2" width={15} src="img.png" alt="More Info" onClick={this.toggle}></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{this.props.course.name}</ModalHeader>
            <ModalBody>
                {this.props.course.details}
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default Popup;
