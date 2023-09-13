import { useState } from 'react'
import Home from './pages/home/Home'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.js';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contacts from './pages/contacts/Contacts';

function App() {
 const Layout = () =>{ return (
     <div className="App">
       <ThemeProvider theme={theme}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </ThemeProvider>
     </div>
  )}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        },
        {
          path: "/mycart",
          element: <Cart/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/contacts",
          element: <Contacts/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
