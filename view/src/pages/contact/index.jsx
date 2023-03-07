import { Button, Textfield } from "@/components";
import { useCreatContact } from "./useCreatContact";

export default function Contact() {
  const {
    handelCreatContact,
    errors,
    register,
    handleSubmit
  }= useCreatContact()
  return (
    <>
     
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Creat a contact
            </h2>
          </div>
          <form className="mt-8 space-y-6 " onSubmit={handleSubmit(handelCreatContact)}>
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">

              <Textfield
                autoComplete="off"
                lable='name'
                type="text"
                placeholder="What is your conrtact name?"
                validation={{ ...register('name') }}
                error={errors.name?.message} />
              <Textfield
                validation={{ ...register('number') }}
                lable='number'
                error={errors.number?.message}
                id="number"
                name="number"
                type="number"
                placeholder="What is your conrtact number?"
      
              />
             
            </div>
            <div className="">
              <Button
                type="submit"
              >creat</Button>
            </div>
          </form>    
            <a className=' bg-slate-600 h-10 flex items-center rounded-md text-white justify-center' href='/contacts'>
             <p>
             show my Contacts
              </p>
            </a>
        </div>
      </div>
    </>
  );
}
