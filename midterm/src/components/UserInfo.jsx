import React from 'react';

const number = (Math.floor(Math.random() * 10) +1);



class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Joel', job: 'Contractor' };
  }
  
  render() {
    return (
    <div>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.job}</p>
        <p>Your Lucky Number is {number}!</p>
        <button onClick={this.props.handleClick}>Show Alert</button> {/*Assignment 2 - Task 4 */}
    </div>
    );
  }
}

export default UserInfo;