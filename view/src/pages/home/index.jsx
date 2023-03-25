import { Button, Link } from "@/components";

const Home = () => {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen ">
            <div className="w-full max-w-md space-y-8 flex flex-col gap-32 items-center">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Wellcome to Contacts App
                    </h2>
                </div>
                <div className="flex flex-col w-full gap-5">

                <Link className=' bg-green-900 h-14 flex items-center rounded-md text-white justify-center w-full' to='/contacts'>
                    show my Contacts
                </Link>
                <Link className=' bg-green-900 h-14 flex items-center rounded-md text-white justify-center w-full' to='/contact'>
                    Creat new contact
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;