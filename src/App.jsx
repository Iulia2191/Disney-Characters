
import Navbar from './components/Navbar/Navbar'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Character from './pages/Character';

const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />
      },
      {
        path: "/favorites", 
        element: <Favorites/>
      },
      {
        path: "/search", 
        element: <Search />
      },
      {
        path: "/character/:name", 
        element: <Character />
      },
      
    ]
  }
]);

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
