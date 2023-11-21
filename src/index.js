import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './pages/Auth/Auth';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inbox from './components/containers/Inbox';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Compose from './components/containers/Compose';
import Template from './components/containers/Template';
import SentMail from './components/containers/Sentmail';

const routes = [
  {
    element: <Auth />,
    path: '/',
  },
  {
    element:<Compose />,
    path: '/compose',
  },
  {
    element:<Template />,
    path: '/template',
  },
  {
    element:<SentMail />,
    path: '/sent',
  },
  {
    element:<Inbox />,
    path:'/inbox',
  },
]
const router = createBrowserRouter(routes);

const clientId = '590811174729-j0v5ub1ju0ajha6h0ahn0ltdrju4ttor.apps.googleusercontent.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId={clientId}>

    <RouterProvider router={router} />
    </GoogleOAuthProvider>

  </React.StrictMode>
);
reportWebVitals();
