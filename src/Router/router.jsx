import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Pages/Layout/Main/Main";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";
import Table from "../Pages/Home/Table/Table";
import ViewDetails from "../Pages/Home/ViewDetails/ViewDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Home/Login/Login";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../Pages/MyToy/MyToy";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Pages/NotFound/NotFound";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
  
      children: [
        {
          path: "/",
          element: <LandingPage></LandingPage>
        
        },
        {
          path: "/allToys/seller/:sellerId",
          element: <Table></Table>,

          loader: ({params})=> fetch(`http://localhost:5000/allToys?sellerId=${params.sellerId}`)
        },
        {
          path: "/viewDetails/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path: '/signUp',
          element:<SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/updateToy/:id',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path: '/addToy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },

       
      ],
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);
  
  export default router;