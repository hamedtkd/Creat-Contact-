
import { useContacts } from "./useContacts";
import uuid from 'react-uuid';
import { Button } from "@/components";

const Contacts = () => {

    const handelEdit = (e) => {
        const nameInput = e.target.parentElement.parentElement.children[0].children[0]
        const numberInput = e.target.parentElement.parentElement.children[0].children[1]
        nameInput.disabled = false
    }
    const handelDelete = (e) => {
        const parentEL = e.target.parentElement.parentElement


    }
    const { data } = useContacts()
    return (
        <>
            <div className="flex flex-col justify-center items-center py-6 gap-3">
                {data?.map(item => {
                    return (
                        <div className="flex flex-col gap-8 bg-slate-200 py-3 rounded-md items-center w-3/5">

                            <ul className="w-full flex justify-evenly">
                                <li className="flex flex-col gap-3">

                                    <label htmlFor="name">Name :</label>
                                    <input name="name" id="name" className="rounded-md bg-cyan-700 text-white border-none w-1/2 text-center" type="text" disabled={true} value={item.name} />
                                </li>
                                <li className="flex flex-col gap-3">
                                    <label htmlFor="number">Number :</label>
                                    <input name="number" id="number" className="rounded-md bg-cyan-700 text-white border-none w-1/2 text-center" type="text" disabled={true} value={item.number} />
                                </li>

                            </ul>
                            <div className="flex flex-col gap-4 w-8/12">
                                <Button onClick={handelEdit}>Edit</Button>
                                <Button onClick={handelDelete}>Delete</Button>
                            </div>
                        </div>)
                })}




            </div>
        </>
    );
}

export default Contacts;
