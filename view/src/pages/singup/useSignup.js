import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { signUpServices } from '@/api/services/signUp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
export const useSignup = () => {
    
    const signUpSchema = yup.object({
        password: yup.string().required('Please enter paasword'),
        email: yup.string().email().required('Please enter email'),
        confirmPassword: yup.string().required('Please enter your paasword again')
      });
      // const [, set] = useState();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(signUpSchema) });
      const navigate = useNavigate();
    
      const handleSignup = async (data) => {
        try {
          const res = await signUpServices(data);
          toast.success(res.data.massage);
          navigate('/signin')
        } catch (ex) {
          console.log(ex?.response?.data);
          toast.error(ex?.response?.data?.massage);
        }
      }
    return {
        handleSignup,
        errors,
        register,
        handleSubmit
    } 
        
    ;
}
 
