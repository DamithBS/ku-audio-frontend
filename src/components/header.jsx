import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white">

            <img src="/logo.jpg" className="w-[100px] h-[100px] object-cover absolute left-1 rounded-full border-[3px]" alt="" />

            <Link to={"/"} className="text-[25px] font-bold m-1">Home</Link>
            <Link to={"/contact"} className="text-[25px] font-bold m-1">contact</Link>
            <Link to={"/gallery"} className="text-[25px] font-bold m-1">gallery</Link>
            <Link to={"/items"} className="text-[25px] font-bold m-1">Items</Link>
                
        </header>
    )
}