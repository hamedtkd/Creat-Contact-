import Cookies from "js-cookie";
import {
    useEffect
} from "react";
import {
    useLocation,
    useNavigate
} from "react-router-dom";


export const useAuth = () => {
    const {
        pathname
    } = useLocation()
    const navigat = useNavigate()
    return ( 
        useEffect(() => {
            if (Cookies.get('token') && ['/signin', '/signup','/'].includes(pathname))
                navigat('/home')
            if (!Cookies.get('token') )
                if(['/signin'].includes(pathname))
                return navigat('/signin')
            else{

                    navigat('/signup')
                }

                
        }, [])
     );
}
 