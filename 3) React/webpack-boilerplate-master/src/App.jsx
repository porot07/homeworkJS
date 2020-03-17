import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Field name="username" component="input" type="text" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
})(App);
