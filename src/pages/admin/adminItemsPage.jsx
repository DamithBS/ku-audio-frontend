const sampleArr = [
    {
      key: "ABC123",
      name: "Super Speaker",
      price: 299.99,
      category: "audio",
      dimensions: "20x15x10 cm",
      description: "A state-of-the-art speaker delivering crystal clear sound with powerful bass.",
      availability: true,
      image: [
        "https://cdn.pixabay.com/photo/2021/01/23/05/55/sound-board-5941736_1280.jpg"
      ]
    },
    {
      key: "XYZ789",
      name: "Elegant Lamp",
      price: 89.99,
      category: "lights",
      dimensions: "30x30x40 cm",
      description: "A modern lamp with an elegant design to brighten up any room.",
      availability: true,
      image: [
        "https://cdn.pixabay.com/photo/2021/01/23/05/55/sound-board-5941736_1280.jpg"
      ]
    },
    {
      key: "LMN456",
      name: "Compact Headphones",
      price: 149.99,
      category: "audio",
      dimensions: "15x15x5 cm",
      description: "Lightweight headphones offering exceptional sound quality and comfort.",
      availability: false,
      image: [
        "https://cdn.pixabay.com/photo/2021/01/23/05/55/sound-board-5941736_1280.jpg"
      ]
    }
  ];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemPage(){
    const[items,setItems]=useState(sampleArr)
    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                    {
                        items.map((product)=>{
                            console.log(product);
                            return(
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

            <Link to={"/admin/items/add"}>
                 <CiCirclePlus className="text-[60px] absolute right-2 bottom-2 hover:text-red-900 "/>
            </Link>
                 
           
           
        </div>
            
 
    )
}