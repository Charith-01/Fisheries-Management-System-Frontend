import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function AddProductForm(){

    const [productId, setPorductId] = useState("");
    const [name, setName] = useState("");
    const [altname, setAltName] = useState("");
    const [price, setPrice] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [unit, setUnit] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(){
        toast.success("Product added successfully")
    }

    return(
        <div className="w-full h-full flex justify-center items-center rounded-lg">
            <div className="w-[500px] h-[700px] bg-white rounded-lg shadow-2xl flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-700 m-[10px]">Add Product</h1>
                <input
                    value={productId}
                    onChange={
                        (e)=>{
                            setPorductId(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product ID"
                />
                <input
                    value={name}
                    onChange={
                        (e)=>{
                            setName(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product Name"
                />
                <input
                    value={altname}
                    onChange={
                        (e)=>{
                            setAltName(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Alternative Names"
                />
                <input
                    value={price}
                    onChange={
                        (e)=>{
                            setPrice(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Price"
                />
                <input
                    value={labeledPrice}
                    onChange={
                        (e)=>{
                            setLabeledPrice(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Labeled Price"
                />
                <input
                    value={stock}
                    onChange={
                        (e)=>{
                            setStock(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="number" placeholder="Stock"
                />
                <input
                    value={category}
                    onChange={
                        (e)=>{
                            setCategory(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Product Category"
                />
                <input
                    value={unit}
                    onChange={
                        (e)=>{
                            setUnit(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" type="text" placeholder="Unit"
                />
                <textarea
                    value={description}
                    onChange={
                        (e)=>{
                            setDescription(e.target.value)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-2xl text-center m-[5px]" placeholder="Description"
                />
                <div className="w-[400px flex justify-between items-center">
                    <Link to={"/admin/products"} className="bg-red-500 rounded-xl text-white cursor-pointer hover:bg-red-700 p-4 w-[200px] m-3 text-center">Cancel</Link>
                    <button onClick={handleSubmit} to={"/admin/products"} className="bg-green-500 rounded-xl text-white cursor-pointer hover:bg-green-700 p-4 w-[200px] m-3 text-center">Add Product</button>
                </div>
            </div>
        </div>
    )
}