import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> Profile Class Component </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // WE DO NOT MUTATE STATE DIRECTLY
            // Never do this.state = something
            this.setState({
              count: 1,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}
