import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Main from './components/main.component/main.component'
import { startSetApps } from './actions/apps';


import './styles/styles.scss';
import LoadingPage from '../src/components/LoadingPage.component/LoadingPage'


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Main />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(startSetApps()).then(() => {
  renderApp();

});



