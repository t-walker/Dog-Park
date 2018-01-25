import React, { Component } from 'react';

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
    this.setState({
      parks: [
        {id: 1, name: "Petrovitsky Park", location: {city: "Renton", state: "Washington", country: "United States"}},
        {id: 2, name: "Maplewood Park", location: {city: "Renton", state: "Washington", country: "United States"}},
        {id: 3, name: "Marymoore Park", location: {city: "Redmond", state: "Washington", country: "United States"}},
        {id: 4, name: "Wilderness Peak", location: {city: "Renton", state: "Washington", country: "United States"}},
        {id: 5, name: "Mirrormont Park", location: {city: "Issaquah", state: "Washington", country: "United States"}},
      ]
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
