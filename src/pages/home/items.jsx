import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import ProductCart from "../../components/productCart";

export default function Items(){

    const [state,setState]= useState("loading")//loading success error
    const [item,setItems] = useState();

    useEffect(()=>{
        if(state =="loading"){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then((res)=>{
                console.log(res);      
               setItems(res.data)
               setState("success")       
            }).catch((err) =>{
                toast.error(err?.response?.data?.error||"An error occured")
                setState("error")
            })
        }
 
    },[])

    return(

        <div className="w-full h-full flex flex-wrap justify-center pt-[60px]">
            {
                state=="loading"&&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 rounded-full border-t-green-500 animate-spin"></div>

                </div>
            }
            {
                state=="success"&&
                item.map((item)=>{
                    return(
                        <ProductCart key={item.key} item={item}/>
                    )
                })
            }
        </div>
    )
}