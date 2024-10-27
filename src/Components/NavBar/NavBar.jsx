import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFold2Fill} from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const NavBar = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }, 
        { id: 5, name: "Profile", path: "/profile" }
    ];



    return (


        <nav className="w-11/12 mx-auto  mt-5">
            <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose></IoClose> : <RiMenuFold2Fill></RiMenuFold2Fill>
                }
            
            </div>
            <ul className={`md:flex duration-1000 gap-10 absolute md:static  bg-purple-500 md:bg-white p-5 rounded-lg
                ${open? 'left-8' : '-left-60'}
                `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            } 
            </ul>
        </nav>
    );
};

export default NavBar;

// export default routes;