import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemsPage() {

    const location = useLocation()

    console.log(location);
    
    const [productKey, setProductKey] = useState(location.state.key);
    const [productName, setProductName] = useState(location.state.name);
    const [productPrice, setProductPrice] = useState(location.state.price);
    const [productCategory, setProductCategory] = useState(location.state.category);
    const [productDimensions, setProductDimensions] = useState(location.state.dimensions);
    const [productDescription, setProductDescription] = useState(location.state.description);

    const navigate = useNavigate();

async function handelUpdateItems(){
    console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription);
    
    const token = localStorage.getItem("token")
    // update details from database in put requset
    if(token){
        try{ 
            const result = await axios.put("http://localhost:3000/api/products/"+productKey,{
               key:productKey,
               name:productName,
               price:productPrice,
               category:productCategory,
               dimensions:productDimensions,
               description:productDescription
           },{
               headers:{
                   Authorization:"Bearer "+ token
               }
           })
   
            toast.success(result.data.message)
            console.log(result);
            navigate("/admin/items")
           
            }
        catch(err){
            toast.error(err.response.data.error)
        }

        }
    else{
        toast.error("Plase Login Frist")
    }
}

  return (
    <div className="w-full h-full flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Update Item</h1>
      <div
        className="w-[400px] border p-6 bg-white rounded shadow flex flex-col space-y-4"
      >
        <input
          type="text"
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          placeholder="Product Key"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          placeholder="Product Name"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          placeholder="Product Price"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>
        <input
          type="text"
          onChange={(e) => setProductDimensions(e.target.value)}
          value={productDimensions}
          placeholder="Dimensions"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          placeholder="Product Description"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit" onClick={handelUpdateItems}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Update
        </button>
        <button onClick={()=>{navigate("/admin/items")}}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
          cancel
        </button>

      </div>
    </div>
  );
}
