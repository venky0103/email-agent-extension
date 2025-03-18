import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WebsiteApp from './WebsiteApp';
import './styles/website.css';

const root = createRoot(document.getElementById('website-root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WebsiteApp />
    </BrowserRouter>
  </React.StrictMode>
); 