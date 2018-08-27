import photosTypes from '../constants';
import * as _ from 'lodash';

export const getPhotos = () => {
  return {
    type: photosTypes.GET_PHOTOS,
    payload: [
      {
        id: 1,
        photo: 'https://via.placeholder.com/350x150',
        heading: 'Photo 1',
        description: 'Blah Blah'
      },
      {
        id: 2,
        photo: 'https://via.placeholder.com/350x150',
        heading: 'Photo 2',
        description: 'Blah Blah'
      },
      {
        id: 3,
        photo: 'https://via.placeholder.com/350x150',
        heading: 'Photo 3',
        description: 'Blah Blah'
      },
      {
        id: 4,
        photo: 'https://via.placeholder.com/350x150',
        heading: 'Photo 4',
        description: 'Blah Blah'
      },
      {
        id: 5,
        photo: 'https://via.placeholder.com/350x150',
        heading: 'Photo 5',
        description: 'Blah Blah'
      }
    ]
  }
}

export const addToCart = (photo) => {
  return {
    type: photosTypes.ADD_TO_CART,
    payload: photo
  }
}

export const removeToCart = (photo, cart_items) => {
  const newCartItems = _.filter(cart_items, (cart_item) => {
    return cart_item.id !== photo.id;
  });
  return {
    type: photosTypes.REMOVE_CART_ITEM,
    payload: newCartItems
  }
}

export const proceedCheckout = (employee) => {
  return {
    type: photosTypes.PROCEED_CHECKOUT,
    payload: {
      employee
    }
  }
}