import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const initialState: StoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

const offlineEnhancer: any = offline(offlineConfig);

const store = createStore<StoreState, EnthusiasmAction, any, any>(
  enthusiasm,
  initialState,
  offlineEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
