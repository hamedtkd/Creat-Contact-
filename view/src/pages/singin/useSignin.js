import { loginServices } from '@/api/services/login'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const useSignin  = () => {
    const signInSchema = yup.object({
        password: yup.string().required('Please enter paasword'),
        email: yup.string().email().required('Please enter email'),
      });
      // const [, set] = useState();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(signInSchema) });
      const navigate = useNavigate();
    
      const handelSignin = async (data) => {
        try {
          const res = await loginServices(data);
          navigate('/home');
          // console.log(res);
          Cookies.set('token', res.data.token, {
            expires: 1
          })
          toast.success(res.data.massage);
        } catch (ex) {
          toast.error(ex?.response?.data?.massage);
        }
      }
      return {
        handelSignin,
        errors,
        register,
        handleSubmit
    } 
}
 
