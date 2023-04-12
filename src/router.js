import {createBrowserRouter} from "react-router-dom";
import {ChangePasswordAfterLogin, ConfirmEmail, FindPassword, Login, Main, Profile, Signup, State, Test} from "./pages";



export const router = createBrowserRouter([
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
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/email/confirm',
        element: <ConfirmEmail />
    },
    {
        path: '/find/password',
        element: <FindPassword />
    },
    {
        path: '/change/password/after',
        element: <ChangePasswordAfterLogin />
    },
    {
        path: '/state',
        element: <State />
    },
    {
        path: '/test',
        element: <Test />
    }
])