import axios from "axios";
import "./login.css";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const navigate = useNavigate();

    function handleOnSubmit(e){
        console.log(email,password);
        e.preventDefault();
        const backendurl = import.meta.env.VITE_BACKEND_URL

        axios.post(`${backendurl}/api/users/login`,
            {
                email : email,
                password : password
            }
        ).then((res)=>{
            console.log(res);     
            toast.success("Login Success.")
            const user = res.data.user  // user data give from databse
            localStorage.setItem("token",res.data.token)
            
            if(user.role ==="admin"){
                // window.location.href="/admin"
                navigate("/admin/")
            }
            else{
                // window.location.href="/"
                navigate("/")
            }

        }).catch((err)=>{
            console.log(err);
            toast.error(err.response.data.error)
        })
        
    }

    return(
        <div className="w-full h-screen flex justify-center items-center bg-picture">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[400px] h-[400px] backdrop-blur-lg rounded-2xl flex justify-center items-center flex-col relative ">

                    <img className="w-[100px] h-[100px] object-cover absolute top-2 rounded-full" src="/logo.jpg" alt="" />

                    <input type="email" placeholder="Email" className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none mt-9"
                        value={email}
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                                
                            }
                        }
                    />

                    <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" 
                        value={password}
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                    />

                    <button className="my-8 w-[300px] h-[50px] bg-[#4543e2] text-2xl text-white rounded-lg">Login</button>

                </div>
            </form>
        </div>

    )

}