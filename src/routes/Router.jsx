import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import SecondaryPage from "../pages/SecondaryPage/SecondaryPage.jsx";
import AddCoffee from "../pages/AddCoffee/AddCoffee.jsx";
import ViewCoffee from "../pages/ViewCoffee/ViewCoffee.jsx";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee.jsx";
import App from "../../src/pages/App/App.jsx";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/secondary',
                element: <SecondaryPage/>,
                children: [
                    {
                        path: '/secondary/',
                        element: <AddCoffee/>,
                    },
                    {
                        path: '/secondary/view',
                        element: <ViewCoffee/>,
                    },
                    {
                        path: '/secondary/update',
                        element: <UpdateCoffee/>
                    }
                ]
            }
        ]
    }
  ]);

  export default router;