import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';


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
  <Card className="card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Vehicle:</Card.Title>
      <Card.Text>
      {value.name}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  ))}
    </div>
  );
}
}

export default App;
