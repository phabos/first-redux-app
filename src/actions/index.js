function selectBook(book) {
  // Select book is an action creator it needs
  // to return an action / object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

function addBook(bookTitle) {
  return {
    type: 'ADD_BOOK',
    payload: {title: bookTitle}
  };
}

export {selectBook, addBook};
