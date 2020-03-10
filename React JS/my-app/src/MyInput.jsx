import React, { useState, useEffect } from 'react';

export default class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: 'test' };
  }

  onChange = (e) => {
    this.setState({ selectValue: e.target.value });
    console.log(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(`Вы набрали: ${this.state.selectValue}`);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <select onChange={this.onChange} value={this.state.selectValue}>
          <option value="test">Test</option>
          <option value="test2">Test2</option>
          <option value="test3">Test3</option>
        </select>
        <button type="submit">Send</button>
      </form>
    );
  }
}
