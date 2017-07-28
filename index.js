import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './src/data/store';
import { TodoApp } from './src/ui/web/components/TodoApp/TodoApp';

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <TodoApp />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./data/reducer');
    store.replaceReducer(nextRootReducer);
  });
}
