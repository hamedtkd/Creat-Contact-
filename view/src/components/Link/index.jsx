export const Link = ({children,...props}) => {
    return ( 
        <div className="flex items-center justify-between">
        <div className="text-sm">
          <a {...props}>
            {children}
          </a>
        </div>
      </div>
     );
}
 