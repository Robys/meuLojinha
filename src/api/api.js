
export const GetProducts = async () =>{
    return await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
}

export const GetProduct = async (id) =>{
    return await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
}