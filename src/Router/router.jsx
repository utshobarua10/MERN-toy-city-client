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
          path: "/allToys",
          element: <Table></Table>
        },
        {
          path: "/viewDetails",
          element: <ViewDetails></ViewDetails>
        },
        {
          path: '/signUp',
          element:<SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ],
    },
  ]);
  
  export default router;