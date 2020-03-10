import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addPost } = this.props;
    addPost({ text: this.state.text });
    this.setState({ text: '' });
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input type="text" name="title" className="form-control" onChange={this.onChange} value={this.state.text} />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Опубликовать</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, actionCreators)(Form);
