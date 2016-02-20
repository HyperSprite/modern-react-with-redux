import React, { Component } from 'react';

class SeachBar extends Component {
  // defining state in a class based componenet
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        // input telling state what the state is
        // <input onChange = {event => this.setState({ term: event.target.value })} />
        // state telling input what the state is
        < input // input is now a controlled componenet
        value={this.state.term}
        onChange = {event => this.setState({ term: event.target.value})} />

      </div>
    );
  }
}

export default SeachBar;

