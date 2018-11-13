import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import reducers from './reducers';
import Hello from './component/Hello';

const store: Store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.querySelector('#app'),
);
