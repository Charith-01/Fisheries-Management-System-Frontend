import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import meadiaUpload from "../../utils/meadiaUpload";

export default function EditProductForm(){

    const locationData = useLocation();
    
    

    const [productId, setPorductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [price, setPrice] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [unit, setUnit] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit() {

        const promisesArray = []
        for(let i=0; i<images.length; i++){
            const promise = meadiaUpload(images[i])
            promisesArray[i] = promise
        }
        try{


        const result = await Promise.all(promisesArray)

        const altNamesInArray = altName.split(",").map(name => name.trim()).filter(n => n);

        const product = {
            productId: productId.trim(),
            name: name.trim(),
            altNames: altNamesInArray,
            price: Number(price),
            labeledPrice: Number(labeledPrice),
            stock: Number(stock),
            category: category.trim(),
            unit: unit.trim(),
            description: description.trim(),
            images: result
        };

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You must be logged in to add a product");
            return;
        }

        await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/product", product, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        toast.success("Product added successfully")
        navigate("/admin/products");

    }catch(err){
        console.log(err)
        toast.error(err?.response?.data?.message || "Product adding failed");
    }

    }

    return (
        <div className="w-full h-full flex justify-center items-center rounded-lg">
            <div className="w-[500px] h-[700px] bg-white rounded-lg shadow-2xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-700 m-[10px]">Edit Product</h1>
                <input value={productId} onChange={(e) => setPorductId(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product ID" />
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product Name" />
                <input value={altName} onChange={(e) => setAltName(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Alternative Names" />
                <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Price" />
                <input value={labeledPrice} onChange={(e) => setLabeledPrice(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Labeled Price" />
                <input value={stock} onChange={(e) => setStock(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Stock" />
                <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product Category (Fish, Crab, Shrimp, Other)" />
                <input value={unit} onChange={(e) => setUnit(e.target.value)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Unit (kg, Piece, Packet)" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-[400px] h-[100px] border border-gray-500 rounded-2xl text-center m-[5px]" placeholder="Description" />
                <input type="file" multiple onChange={(e) => setImages(e.target.files)} className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px] px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
                <div className="w-[400px] flex justify-between items-center">
                    <Link to={"/admin/products"} className="bg-red-500 rounded-xl text-white cursor-pointer hover:bg-red-700 p-4 w-[200px] m-3 text-center">Cancel</Link>
                    <button onClick={handleSubmit} className="bg-green-500 rounded-xl text-white cursor-pointer hover:bg-green-700 p-4 w-[200px] m-3 text-center">Edit Product</button>
                </div>
            </div>
        </div>
    );
}
