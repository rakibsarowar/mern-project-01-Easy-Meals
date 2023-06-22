import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import SIngleChefInfo from "../pages/SIngleChefInfo";
import Blogs from "../pages/Blogs";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: 'chefs',
        errorElement:<Error404></Error404>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><SIngleChefInfo></SIngleChefInfo></PrivateRoute>,
                loader: ({params}) => fetch(`https://easymeal-server-rakibsarowar.vercel.app/chefs/${params.id}`)
                    .then((response) => response.json())
            }
        ]
    },
    {
        path:'/blogs',
        element:<Blogs></Blogs>
    },
])

export default router;