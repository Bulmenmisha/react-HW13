// createStore помечен в Redux 5 как устаревший (рекомендуют Redux Toolkit),
// но работает. В задании требуется именно он.
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;
