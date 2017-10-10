import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
        <div>{ this.props.activeBook ? this.props.activeBook.title : 'Nothing selected' }</div>
    );
  }
}

function mapStateToProps(state) {
  // Wathever is returned will show up as props
  // inside BookList
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
