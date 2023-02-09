import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppContainer from './AppContainer';
import './i18n';
// Style
import "./style.css";
//import 'antd/dist/reset.css';
const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
