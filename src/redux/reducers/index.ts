import { combineReducers } from 'redux';
import PackagesReducer from './packagesReducer';

const reducers = combineReducers({
  packages: PackagesReducer,
});

export default reducers;