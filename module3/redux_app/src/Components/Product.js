import { useEffect, useState } from "react"
import axios from "axios"

export default function Product(){
    let [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            // console.log(res);
            setProducts(res.data);
        })
    },[])

    return(
        <div className="productsWrapper">
            {products.map((item)=>{
                return <div key={item.id} className="card">
                            <img src={item.image}/>
                            <h6>{item.title}</h6>
                            <h5>{item.price}$</h5>
                            <button className="btn">Add to Cart</button>
                        </div>
            })}

        </div>
    )
}