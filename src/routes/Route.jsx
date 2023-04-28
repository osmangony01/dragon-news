import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Category from "../components/Home/Category/Category";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";


const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <Category></Category>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register" ,
        element: <Register />
    },
])

export default route;