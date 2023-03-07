export const Textfield = ({clases, lable, validation, error,...props }) => {
    return <div>
        <label htmlFor="email-address" className="sr-only">
            {lable}
        </label>
        <input
            {...validation}
            {...props}
            className={"relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"} 

        />
        {error && <p className=' bg-red-300 mt-3 p-2 rounded border border-red-900'>{error}</p>}

    </div>
}

