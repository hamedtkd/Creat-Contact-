import { Button } from "@/components";
import { useEffect, useState } from "react";
import { deleteContactsServices, editContactsServices, getContactsServices } from "@/api/services/contacts";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { current } from "tailwindcss/colors";


const Contacts = () => {
    let [data, setData] = useState();
    const [editOrSubmit, setEditOrSubmit] = useState(true);
    const [updateContacts, setUpdateContacts] = useState({
        _id: '',
        name: '',
        number: '',
    });
    const [deletContacts, setDeletContacts] = useState('');
    const [deletRender, setDeletRender] = useState(true);

    const handelEdit = async (e) => {
        e.preventDefault()
        if (editOrSubmit) {
            const nameInput = e.target.parentElement.parentElement.children[0].children[0].children[1];
            const numberInput = e.target.parentElement.parentElement.children[0].children[1].children[1];
            numberInput.disabled = false;
            nameInput.disabled = false;
            nameInput.select();
        }
        else {
            await editContactsServices(updateContacts).then((res) => {
                toast.success(res?.data?.message)
            })
        }
    }
    const handelDelete = async (e) => {
        e.preventDefault();
        
        try {
            const res = await deleteContactsServices(deletContacts);
            toast.success(res?.data?.message)
        } catch (ex) {
            toast.error(ex?.response?.data?.message)
        }
        setDeletRender(current=>!current)


    }
    useEffect(() => {
        const fetchData = async () => {
            const token = Cookies.get('token')
            try {
                const res = await getContactsServices();
                setData(res.data.contacts);
            } catch (ex) {
                toast.error(ex?.response?.data?.massage);
            }
        };
        fetchData();

    }, [deletRender]);
    if(data==false){
        data=false
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center py-6 gap-3">
                {data?data.map(item => {
                    return (
                        <div key={item._id} className="flex flex-col gap-8 bg-slate-200 py-3 rounded-md items-center w-3/5">

                            <ul onClick={() => setUpdateContacts({ ...updateContacts, _id: item._id, name: item.name, number: item.number })} className="w-full flex justify-evenly" id={item._id}>
                                <li className="flex flex-col gap-3">
                                    <label htmlFor="name">Name :</label>
                                    <input name="name" id="name" className="rounded-md bg-cyan-700 text-white border-none w-1/2 text-center" onChange={(e) => setUpdateContacts({ ...updateContacts, name: e.target.value })} type="text" disabled={true} defaultValue={item.name} />
                                </li>
                                <li className="flex flex-col gap-3">
                                    <label htmlFor="number">Number :</label>
                                    <input onChange={(e) => setUpdateContacts({ ...updateContacts, number: e.target.value })} name="number" id="number" className="rounded-md bg-cyan-700 text-white border-none w-1/2 text-center" type="text" disabled={true} defaultValue={item.number} />
                                </li>

                            </ul>
                            <div className="flex flex-col gap-4 w-8/12">
                                <Button onClick={(e) => {
                                    handelEdit(e)
                                    setEditOrSubmit(current => !current)
                                }}>
                                    {editOrSubmit ? 'Edit' : "Submit"}
                                </Button>
                                <Button onClick={(e) => {
                                    setDeletContacts(item._id)
                                    handelDelete(e)
                                }}>Delete</Button>
                            </div>
                        </div>)
                }):
                <div>
                    You dont have any contacts in your list
                </div>
                }
            </div>
        </>
    );
}

export default Contacts;
