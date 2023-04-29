import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Category from "../components/Home/Category/Category";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import NewsLayout from "../components/NewsLayout/NewsLayout";
import News from "../components/News/News";
import categoryDataLoader from "../loader/LoadCategoryNews";
import loadNews from "../loader/LoadNews";


const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { 
                path: "/", 
                element: <Category></Category> ,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            { 
                path: "/category/:id", 
                element: <Category></Category> ,
                loader: categoryDataLoader
            },
        ]
    },
    { 
        path: "/login", 
        element: <Login />, 
    },
    { 
        path: "/register", 
        element: <Register /> ,
    },
    {
        path: "news",
        element: <NewsLayout />,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: loadNews
            },
        ]
    },
])

export default route;