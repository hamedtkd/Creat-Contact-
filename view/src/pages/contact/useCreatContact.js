
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { contactsServices } from '@/api/services/creatContact';

export const useCreatContact  = () => {
    const creatContactSchema = yup.object({
        name: yup.string().required('Please enter name'),
        number: yup.string().required('Please enter number'),
      });
      // const [, set] = useState();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(creatContactSchema) });
      const handelCreatContact = async (data) => {
        try {
          const token = Cookies.get('token')
          console.log(data);
          const res = await contactsServices({...data,token});
          toast.success(res.data.massage);
        } catch (ex) {
          toast.error(ex?.response?.data?.massage);
        }
      }
      return {
        handelCreatContact,
        errors,
        register,
        handleSubmit
    } 
}
 
