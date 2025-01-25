import { FaHome, FaRegUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">
        <div className="w-[400px] h-full bg-green-200">
            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'><FaHome /> Dashboard</button>
            <Link to="/admin/bookings" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >Booking</Link>
            <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >Items</Link>
            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' ><FaRegUser/> User</button>
            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >Reviews</button>
        </div>

        <div className="w-[calc(100vw-400px)] bg-red-400">
            <Routes path="/*">
                <Route path="/bookings" element={<h1>Booking</h1>} />
                <Route path="/items" element={<h1>Items</h1>} />

            </Routes>

        </div>
        </div>
    );
}