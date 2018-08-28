import {types as wTypes} from '../actions/weather.action';

const intitialState = {
  list: []
}

export default (state = intitialState, action) => {
  switch(action.type) {

    case wTypes.GET_WEATHER:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload.data
        ]
      }

    default:
      return state;
  }
}