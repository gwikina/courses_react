import React from 'react';
import { Container } from 'reactstrap';
import Course from './Course';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        courses : [],
        addedCourses : []
      }
  }

  updateData = (data) =>{
    let new_data = [];
    for(let i=0; i < data.length; i++){
      new_data.push({
        id: data[i][0],
        id2: data[i][1],
        name: data[i][2],
        desc: data[i][3],
        details: data[i][4],
        status: data[i][5],
        dept: data[i][6],
        college: data[i][7]
      })
    }
    this.setState({
      courses: new_data
    });
  }
  
  fetchData = () => {
    //In package.json add "proxy": "http://localhost:5000" 
    //This will allow redirect to REST api in Flask w/o CORS errors
      fetch('/coursedata')
      .then(
          response => response.json() 
          )//The promise response is returned, then we extract the json data
      .then (jsonOutput => //jsonOutput now has result of the data extraction
              {
                  this.updateData(jsonOutput)
                }
          )
  }
  
  componentDidMount(){
      this.fetchData();
  }

  render(){
    return(
      <Container className="pt-5">
      <div className="text-center h1 py-4"> Course List</div>
      
      <Course list={this.state.courses}> </Course>

      </Container>
    );
  }
}

export default App;