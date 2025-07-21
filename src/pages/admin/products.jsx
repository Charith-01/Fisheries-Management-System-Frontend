import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){

    const [products, setProducts] = useState([])

    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                (response)=>{
                    console.log(response.data)
                    setProducts(response.data)
                }
            )
        },
        []
    )

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
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(
                        (product, index)=>{
                            console.log(product.name)

                            return(
                                <tr key={index} className="border-b-2 border-gray-300 text-center cursor-pointer hover:bg-gray-800 hover:text-white">
                                    <td className="p-2">{product.productId}</td>
                                    <td className="p-2">{product.name}</td>
                                    <td className="p-2">{product.price}</td>
                                    <td className="p-2">{product.labeledPrice}</td>
                                    <td className="p-2">{product.stock}</td>
                                    <td className="p-2">{product.category}</td>
                                    <td className="p-2">{product.unit}</td>
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