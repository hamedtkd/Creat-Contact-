import { Button, Link } from "@/components";

const Home = () => {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen ">
            <div className="w-full max-w-md space-y-8 flex flex-col gap-32 items-center">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Wellcome  to App
                    </h2>
                </div>

                

                    <a className=' bg-green-900 h-14 flex items-center rounded-md text-white justify-center w-full' href='/contact'>
                        <p>
                            show my Contacts
                        </p>
                    </a>
                
            </div>
        </div>
    );
}

export default Home;