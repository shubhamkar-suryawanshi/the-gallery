import React, { useState } from 'react';
import '../style.css';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './shared/store';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Explore from './components/Explore';
import Advertise from './components/Advertise';
import Login from './components/Login';
import Saved from './components/Saved';

function App() {
  return (
    <Provider store={store}>
      <div className="relative">
        <div className="sticky top-0">
          <Header />
        </div>
        <Outlet />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/advertise',
        element: <Advertise />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/liked',
        element: <Saved />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
