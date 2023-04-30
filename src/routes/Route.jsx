import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Category from "../components/Home/Category/Category";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import NewsLayout from "../components/Layout/NewsLayout";
import News from "../components/News/News";
import categoryDataLoader from "../loader/LoadCategoryNews";
import loadNews from "../loader/LoadNews";
import LoginLayout from "../components/Layout/LoginLayout";
import PrivateRoutes from "../privateroutes/PrivateRoutes";
import TermsCondition from "../components/Register/TermsCondition";


const route = createBrowserRouter([

    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path:"/",
                element: <Navigate to="category/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <TermsCondition></TermsCondition>
            }
        ]
    },

    // {
    //     path: "/",
    //     element: <Layout />,
    //     children: [
    //         { 
    //             path: "/", 
    //             element: <Category></Category> ,
    //             loader: ()=> fetch('http://localhost:5000/news')
    //         },
    //         { 
    //             path: "/category/:id", 
    //             element: <Category></Category> ,
    //             loader: categoryDataLoader
    //         },
    //     ]
    // },
    {
        path: "category/",
        element: <Layout />,
        children: [
            { 
                path: ":id", 
                element: <Category></Category> ,
                loader: categoryDataLoader
            },
        ]
    },
   
    {
        path: "news",
        element: <NewsLayout />,
        children: [
            {
                path: ":id",
                element:<PrivateRoutes> <News></News></PrivateRoutes>,
                loader: loadNews
            },
        ]
    },
])

export default route;