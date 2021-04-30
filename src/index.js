import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/reduxStore'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import anchors from './components/scripts/anchors';
anchors();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    {/* basename={process.env.PUBLIC_URL} */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
