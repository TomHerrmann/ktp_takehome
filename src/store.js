import { createStore } from 'redux';
import booksReducer from './reducers/bookReducer';

const store = createStore(booksReducer);

export default store;
