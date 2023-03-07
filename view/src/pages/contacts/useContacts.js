import {
    getContactsServices
} from "@/api/services/contacts"
import axios from "axios"
import Cookies from "js-cookie"
import {
    useEffect, useState
} from "react"
import { toast } from "react-toastify"

export const useContacts = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const token = Cookies.get('token')
            try {

                const res = await getContactsServices({token});
                // toast.success(res?.data.massage);
                setData(res.data.contacts);
              } catch (ex) {
                toast.error(ex?.response?.data?.massage);
              }
        };
        fetchData();
        
    }, []);
    return{data};
    

}