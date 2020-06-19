import * as types from '../constants/actionTypes';

const initialState = {
  appLoaded: false,
  modalOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_ERROR:
      return state;
    case types.APP_LOADED:
      const appLoaded = action.payload;

      return {
        ...state,
        appLoaded,
      };
    case types.BOOKS_CREATE:
      return state;
    case types.BOOKS_POPULATE:
      const books = action.payload;

      return {
        ...state,
        books,
      };
    case types.FORM_SUBMIT:
      return state;
    case types.MODAL_TOGGLE:
      const modalOpened = state.modalOpened;
      console.log('hitting mt reducer');
      return {
        ...state,
        modalOpened,
      };
    case types.SEARCH_SUBMIT:
      return state;
    default:
      return state;
  }
};

export default reducer;
