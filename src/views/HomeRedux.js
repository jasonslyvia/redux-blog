import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import list from '../components/Home/PreviewListRedux';

export default combineReducers({
  list
});

export * as listActions from '../components/Home/PreviewListRedux';

