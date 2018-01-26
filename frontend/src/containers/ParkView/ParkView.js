import React, { Component } from 'react';
import axios from 'axios';

class ParkView extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      park: {}
    };
 
  }

  componentDidMount() {
    this.getParkData(this.props.match.params.id);
    console.log("Her");
  }

  getParkData(parkId) {
    // Mock data until there's a live source.
    axios.get('/api/v1/park/' + parkId)
    .then((response) => {
      this.setState({
        id: this.state.id,
        park: response.data.park
      });
      console.log(this.state.parks);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>{this.state.park.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ParkView;
