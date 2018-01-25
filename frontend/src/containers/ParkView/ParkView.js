import React, { Component } from 'react';

class ParkView extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Park #{this.props.match.params.id}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ParkView;
