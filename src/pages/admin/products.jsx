import axios from "axios"
import { useEffect, useState } from "react"

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
        <div className="w-full h-full rounded-lg">
            {
                products.map(
                    (product)=>{
                        console.log(product.name)

                        return(
                           <h1>{product.productId}</h1>
                        )
                    }
                )
            }
        </div>
    )
}