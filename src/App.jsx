// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import Home from './Components/Home/Home'
// import Products from './Components/Products/Products'
// import { Provider } from 'react-redux'
// import { store } from './Redux/store'
// import { Toaster } from 'react-hot-toast'
// import ProductDetails from './Components/ProductDeails/ProductDetails'

// function App() {
//   let router=createBrowserRouter([
//     {path:"", element :<Home/>},
//     {path:"/products", element :<Products/>},
//     {path:"/products/:id",element:<ProductDetails/>}
    
//   ])
//   return (
//     <>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//       <Toaster/>
//     </Provider>
      
//     </>
//   )
// }

// export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDeails/ProductDetails';
import Layout from './Components/Layout/Layout'; // ensure this is imported
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // wrap all in Layout
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  );
}

export default App;
