import React from 'react';

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Joel', job: 'Contractor', luckyNumber: this.generateNumber() };
  }

  generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  render() {
    return (
    <div>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.job}</p>
        <p>Your Lucky Number is: {this.state.luckyNumber}</p>
        <button onClick={() => this.setState({ luckyNumber: this.generateNumber() })}>
          Generate New Lucky Number
        </button>
    </div>
    );
  }
}

export default UserInfo;