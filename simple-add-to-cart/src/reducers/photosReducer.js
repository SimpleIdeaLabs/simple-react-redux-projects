import photosTypes from '../constants';

const initialState = {
  list: [],
  cart_items: [],
  employee: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case photosTypes.GET_PHOTOS:
      return {
        ...state,
        list: action.payload
      }
    case photosTypes.ADD_TO_CART:
      // TODO: Handle same id photos
      const newCartItems = [...state.cart_items, action.payload];
      return {
        ...state,
        cart_items: newCartItems
      }

    case photosTypes.GET_CART_ITEMS:
      return state.cart_items;

    case photosTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cart_items: action.payload
      }

    case photosTypes.PROCEED_CHECKOUT:
      return {
        ...state,
        employee: action.payload
      }
    
    default:
      return state;
  }
}