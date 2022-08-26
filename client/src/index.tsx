import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';
import './app/layout/styles.css';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
