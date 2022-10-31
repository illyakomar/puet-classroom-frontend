import { combineReducers } from 'redux';

import { ReduxAction, SagaAction } from './common/types';
import { paginatedDataReducer } from './store/paginated-data.slice';
import { coursesReducer } from './store/courses.slice';
import { authReducer } from './store/auth.slice';

const mainReducer = combineReducers({
  paginatedDataReducer,
  coursesReducer,
  authReducer,
});

const rootReducer = (state: any, action: ReduxAction) => {
  if (action.type === SagaAction.LOG_OUT) {
    return mainReducer(undefined, action);
  }
  return mainReducer(state, action);
};

export default rootReducer;
