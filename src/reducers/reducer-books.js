const getInitialState = function() {
  return [
    { title: 'test 1' },
    { title: 'test 2' },
    { title: 'test 3' },
    { title: 'test 4' },
  ];
}

export default function(state = null, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
      break;
    default:
      if( state == null )
        return getInitialState();
      return state;
      break;
  }
}
