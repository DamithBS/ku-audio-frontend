import { FaHome, FaRegUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemPage from "./adminItemsPage";
import AddItemsPage from "./addItemPage";




export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">

            <div className="w-[200px] h-full bg-green-200">
                <Link to={"/admin/"} className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'><FaHome /> Dashboard</Link>
                <Link to={"/admin/bookings"} className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>Booking</Link>
                <Link to={"/admin/items"} className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>Items</Link>
                <Link to={"/admin/user"} className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'><FaRegUser/> User</Link>
                <Link to={"/admin/reviews"} className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>Reviews</Link>
            </div>

            <div className="w-[calc(100vw-200px)]">
                <Routes path="/*">
                    <Route path="/bookings" element={<h1>Booking</h1>} />
                    <Route path="/items" element={<AdminItemPage/>} />  
                    <Route path="/items/add" element={<AddItemsPage/>}/>                

                </Routes>

            </div>
        </div>
    );
}