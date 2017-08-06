import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import App from './src/components/web/app/app';

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./src/reducers/reducer');
    store.replaceReducer(nextRootReducer);
  });
}
