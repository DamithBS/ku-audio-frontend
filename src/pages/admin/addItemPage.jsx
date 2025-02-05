import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemsPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("0");
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const navigate = useNavigate();

async function handelAddItems(){
    console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription);
    
    const token = localStorage.getItem("token")

    if(token){
        try{
            const result = await axios.post("http://localhost:3000/api/products",{
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
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>
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
          type="submit" onClick={handelAddItems}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Add
        </button>
        <button onClick={()=>{navigate("/admin/items")}}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
          cancel
        </button>

      </div>
    </div>
  );
}
