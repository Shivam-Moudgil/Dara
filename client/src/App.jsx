import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/Error/Error";
import { Footer } from "./components/Footer/Footer";
import { Booked } from "./pages/Tables/Booked";
import { Billable } from "./pages/Tables/Billable";
import Logging from "./pages/Auth/Signin";

function App() {
  const Layout=()=>{
  return(
    <div className="main">
      <Navbar
      />

  <div className="content_container">
    <Outlet/>
  </div>
      <Footer/>
    </div>
  )
}


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/booked",
          element: <Booked />
        },
        {
          path: "/book",
          element: <Billable />
        },
        {
          path: "/signin",
          element: <Logging />
        },
     {
      path:"*",
      element:<NotFound/>
     }
       ],}
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
