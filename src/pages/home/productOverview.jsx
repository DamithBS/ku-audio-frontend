import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview(){
    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`)
        .then((res)=>{
                setProduct(res.data)
                setLoadingStatus("loaded");
                console.log(res.data);
                
        })
        .catch((err)=>{
            console.log(err);
            setLoadingStatus("error");
        })
    },[])
    return(
        <div className="w-full h-full flex justify-center items-center">
                {
                    loadingStatus == "loading" &&
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[70px] h-[70px] border-b-4 rounded-full border-green-500 animate-spin"></div>
                    </div>
                }
                {
                    loadingStatus == "loaded" &&
                    <div className="w-full h-full flex justify-center items-center">
                       <div className="w-[49%]  h-full">
                          <ImageSlider images={product.image} />
                       </div>
                       <div className="w-[49%] h-full flex flex-col items-center">
                          <h1 className="text-[50px] text-black-200">{product.name}</h1>
                          <h2 className="text-[30px] text-black-200">{product.category}</h2>
                          <h2 className="text-[30px] text-black-200">{product.dimensions}</h2>
                          <h2 className="text-[30px] text-black-200">${product.price}</h2>
                          <p className="text-[20px] text-black-200">{product.description}</p>
                       </div>
                    </div>
                }
                {
                    loadingStatus == "error" &&
                    <div className="w-full h-full flex justify-center items-center">
                        <h1>Something went wrong</h1>
                    </div>
                }
        </div>
    
)
}