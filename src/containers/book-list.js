import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook, addBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book) }>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
        <li>
          <input type="text" id="book-input" />
          <button onClick={() => {
            this.props.addBook(document.querySelector('#book-input').value);
          }}>Add</button>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Wathever is returned will show up as props
  // inside BookList
  return {
    books: state.books
  }
}

// Anythig returned from this function will end up
// as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called the result
  // should be passed to all of our reducers
  return bindActionCreators({
    selectBook: selectBook,
    addBook: addBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
