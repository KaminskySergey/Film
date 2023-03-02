import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { BackgroundProvider } from 'context/context';
import { Provider } from "react-redux";
import { store } from './redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='KaminskySergey'>
    <React.StrictMode> 
    <ThemeProvider theme={theme}>
      <BackgroundProvider>
      <Provider  store={store}>
    <App />
  </Provider>
      </BackgroundProvider>
    </ThemeProvider>
    </React.StrictMode> 
  </BrowserRouter> 
);
