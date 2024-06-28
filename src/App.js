import './App.css';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Resume from './Components/Resume';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
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
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

