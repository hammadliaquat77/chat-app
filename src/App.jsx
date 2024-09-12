import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Loading from './components/Loading';
import Chat from './components/Chat';
import Signup from './components/Signup';


export default function App( ) {

  const router = createBrowserRouter([
    { path: "/", element: <Loading />},
    { path: "/Login", element: <Login />},
    { path: "/Signup", element: <Signup />},
    { path: "/Home", element: <Home />},
    { path: "*", element: <NotFound />},
    { path: "/Chat", element: <Chat />},

  ]); 

      return <RouterProvider router={router} />
    
}

 

