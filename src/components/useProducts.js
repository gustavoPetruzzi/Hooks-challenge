import  {useState, useEffect} from 'react';
import axios from 'axios';

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const getProducts = async () =>{
        const response = await axios.get('https://challenge-api.aerolab.co/products');
        setProducts(response.data.products);
    }

    useEffect(() =>{
        getProducts();
    },[])

    return products;
}

export default useProducts;