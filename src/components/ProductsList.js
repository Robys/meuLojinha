import { useState,useEffect } from "react";
import {GetProducts} from '../api/api'
import ProductCart from './ProductCard'


const ProductsList = () =>{
    const [data,setData] = useState({products:[],loading:true})

    useEffect(() =>{
        async function GetData(){
            const res = await GetProducts()
            setData({products:res,loading:false})
        }

        GetData()

    },[])


    return(
        <ul className="card-list">
            {data.loading ? "" : data.products.map(item =>
            <li key={item.id} >
                <ProductCart product={item}/>
            </li>)}

        </ul>
    )
}

export default ProductsList

/**
 * 
 *         <ul>
            {data.loading ? "" : data.products.map(item =>
                <li key={item.id}>
                    <ProductCart product={item}/>
                </li>)}

        </ul>
 */