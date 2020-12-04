import React from 'react';
import Edit from './EditModal';
import Add from './AddModal';
import { Table } from 'reactstrap';

function Course (props) {
  return (
    <div>
    <Table className="table-striped">
      <thead>
        <tr>
          <th></th>
          <th>name</th>
          <th>descrition</th>
          <th>details</th>
          <th>department</th>
          <th>college</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map((element) => {
                    return(
                      <tr>
                      <th scope="row"><Edit course={element} /></th>
                      <td>{element.name}</td>
                      <td>{element.desc}</td>
                      <td>{element.details}</td>
                      <td>{element.dept}</td>
                      <td>{element.college}</td>
                    </tr>)
                })} 
      </tbody>
    </Table>
    <Add />
    </div>
  );
}

export default Course;