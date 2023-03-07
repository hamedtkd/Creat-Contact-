import Contact from "@/pages/contact";
import Contacts from "@/pages/contacts";
import Home from "@/pages/home";
import Signin from "@/pages/singin";
import Signup from "@/pages/singup";

export const routes={
    HOME: {
        path: '/home',
        element: <Home/>
    },
    SIGNIN: {
        path: '/signin',
        element: <Signin />,
    },
    SIGNUP: {
        path: '/signup',
        element: <Signup />,
    },
    CONTACT: {
        path: '/contact',
        element: <Contact />,
    },
    CONTACTS: {
        path: '/contacts',
        element: <Contacts />,
    },
    
}