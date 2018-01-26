import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ParkList extends Component {
  render() {
    return (
        <li><Link to={"/park/" + this.props.park._id}>{this.props.park.name}</Link>- {this.props.park.location.city}, {this.props.park.location.state}</li>
    );
  }
}

export default ParkList;
