import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/vehicles/")
    .then(response => response.json())
    .then(data => {
      this.setState({
        vehicles: data
      })
    })
  }
  render() {
  return (
    <div>
      {this.state.vehicles.map((value, key) => (
  <Card className="Card">
    <Card.Img variant="top" src="" width="10px" height="120px" />
    <Card.Body>
      <Card.Title>Vehicle: {value.name}</Card.Title>
      <Card.Text>
      {value.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 23 mins ago</small>
    </Card.Footer>
  </Card>
  ))}
    </div>
  );
}
}

export default App;