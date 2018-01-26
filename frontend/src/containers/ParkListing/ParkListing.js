import React, { Component } from 'react';
import axios from 'axios';

import ParkList from './ParkList';

class ParkListing extends Component {
  constructor() {
    super();

    this.state = {
      parks: []
    };
  }

  componentDidMount() {
    this.populateParks();
  }

  populateParks() {
    // Mock data until there's a live source.
    axios.get('/api/v1/parks')
      .then((response) => {
        this.setState({
          parks: response.data.parks
        });
        console.log(this.state.parks);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderParks() {
    const parks = [];

    for (let i = 0; i < this.state.parks.length; i++) {
      parks.push(<ParkList park={this.state.parks[i]} />);
    }

    return parks;
  }
  render() {
    return (
      <div>
          <h1>Park Listing</h1>
          <ol>
            {this.renderParks()}
          </ol>
      </div>
    );
  }
}

export default ParkListing;
