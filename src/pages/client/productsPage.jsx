import axios from "axios";
import { useEffect, useState } from "react"

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

    

}