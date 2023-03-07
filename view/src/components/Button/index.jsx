export  const Button = ({children , icon , ...props}) => {
    return (
        
        <button
        {...props}
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-700 py-3 px-4 text-sm font-medium text-white hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
        {icon}
        {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
        </span> */}
       {children}
      </button>
      );
}
 
