export default (state={}, action) => {
  switch (action.type) {

    case 'GET_ARTIST_ALL':
      return {...state, artistList: action.payload}
      break;
      
    case 'GET_ARTISTS':
      return { ...state, artistList: action.payload }
      break;

    case 'GET_ARTIST_DETAIL':
      return { ...state, artistData: action.payload }
      break;

    case 'CLEAR_ARTIST_DETAIL':
      return { ...state, artistData: action.payload }
      break;

    default:
      return state;
      break;
  }
}