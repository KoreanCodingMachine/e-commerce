import {createBrowserRouter} from "react-router-dom";
import {Login, Main, Signup} from "./pages";



export const router =   createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <Main />
    }
])