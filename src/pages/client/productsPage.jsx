import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../../components/loader";
import ProductCard from "../../components/product.card";

export default function ProductsPage(){

    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(
        ()=>{
            if(!loaded){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                    (res)=>{
                        setProductList(res.data);
                        setLoaded(true)
                    }
                )
            }
        },[loaded]
    )

    return(
        <div className="w-full h-full">
            {
                loaded?
                <div>
                    {
                        productList.map(
                            (product, index)=>{
                                return(
                                    <ProductCard key={index} product={product}/>
                                ) 
                            }
                        )
                    }
                </div>
                :
                <Loader/>
            }
        </div>
    )

}