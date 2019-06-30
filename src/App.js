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
      <Card.Title>Vehicle:</Card.Title>
      <Card.Text>
      {value.name}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 8 mins ago</small>
    </Card.Footer>
  </Card>
  ))}
    </div>
  );
}
}

export default App;