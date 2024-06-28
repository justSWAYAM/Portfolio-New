import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Whole from './Components/Whole';
import './App.css';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Whole/>
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Whole />
    </RouterProvider>
  );
}

export default App;



