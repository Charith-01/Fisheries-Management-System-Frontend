import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminProductsPage(){

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(
        ()=>{
            if(!loaded){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                    (response)=>{
                        console.log(response.data)
                        setProducts(response.data)
                        setLoaded(true)
                    }
                )
            }
        },
        [loaded]
    )

    async function deleteProduct(id){
        const token = localStorage.getItem("token")
        
        if(token == null){
            toast.error("Please login to delete a product")
            return
        }
        try{
            await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+id, {
                headers:{
                    Authorization: "Bearer "+token
                }
            })
            setLoaded(false)
            toast.success("Product deleted successfully")

        }catch(err){
            console.log(err)
            toast.error("Product deleting failed")
            return;
        }
    }

    return(
        <div className="w-full h-full rounded-lg relative">
            <Link to={"/admin/addProduct"} className="absolute right-6 bottom-6 text-white bg-gray-700 p-[12px] rounded-full text-3xl cursor-pointer hover:bg-gray-400 hover:text-gray-700">
                <FaPlus />
            </Link>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labeled Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Unit</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(
                        (product, index)=>{
                            return(
                                <tr key={index} className="border-b-2 border-gray-300 text-center hover:bg-gray-100">
                                    <td className="p-2">{product.productId}</td>
                                    <td className="p-2">{product.name}</td>
                                    <td className="p-2">{product.price}</td>
                                    <td className="p-2">{product.labeledPrice}</td>
                                    <td className="p-2">{product.stock}</td>
                                    <td className="p-2">{product.category}</td>
                                    <td className="p-2">{product.unit}</td>
                                    <td className="p-2">
                                        <div className="w-full h-full flex  justify-center">
                                            <FaRegTrashAlt onClick={()=>{deleteProduct(product.productId)}} className="text-3xl m-[10px] hover:text-red-500 cursor-pointer"/>
                                            <FaRegEdit className="text-3xl m-[10px] hover:text-blue-500 cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
            
        </div>
    )
}