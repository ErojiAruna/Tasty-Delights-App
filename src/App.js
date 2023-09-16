import React from 'react';
import ReactDOM from 'react-dom/client';
// Default import
//import Header from './components/Header';
// Named import

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/',
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
