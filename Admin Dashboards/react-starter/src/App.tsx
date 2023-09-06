import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import { Users } from "./pages/users/Users";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/products/Products";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./components/menu/Menu";
import "./styles/global.scss"
function App() {

const Layout=()=>{
  return(
    <div className="main">
      <Navbar/>
<div className="main_container">
  <div className="menu_container">
    <Menu/>
  </div>
  <div className="content_container">
    <Outlet/>
  </div>
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
          path: "users",
          element: <Users />
        },
        {
          path: "products",
          element: <Products />
    }],}
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
