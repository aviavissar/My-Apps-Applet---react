import { createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import appsReducer from '../reducers/appsReducer';
//import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default () => {
    const store = createStore(
      combineReducers({
      apps: appsReducer
      
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };
  