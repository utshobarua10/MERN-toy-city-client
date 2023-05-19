import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Pages/Layout/Main/Main";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";
import Table from "../Pages/Home/Table/Table";
  
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
        }
      ],
    },
  ]);
  
  export default router;