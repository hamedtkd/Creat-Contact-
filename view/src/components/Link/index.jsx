import { Link as ReactLink } from "react-router-dom";

export const Link = ({children,...props}) => {
    return ( 


          <ReactLink {...props}>
            {children}
          </ReactLink>

     );
}
 