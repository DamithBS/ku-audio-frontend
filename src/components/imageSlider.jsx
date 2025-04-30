import { useState } from "react";

export default function ImageSlider(props) {
    const images = props.images;
    console.log(images);

    const [selectedImage, setSelectedImage] = useState(images[0]);
    
    return (
        <div className="w-full h-full flex flex-col items-center mt-4">
            <img src={selectedImage} className="w-full h-[500px] object-cover" alt="" />
            <div className="w-full h-[150px] flex justify-center items-center mt-2">
                {images.map((image, index) => (
                    <img key={index} src={image} className={`w-[100px] h-[100px] object-cover m-1 ml-2 cursor-pointer ${image == selectedImage ? "border-2 border-green-500" : ""}`} alt=""
                     onClick={() => setSelectedImage(image)} />
                ))
                }
            </div>
        </div>
    );
}