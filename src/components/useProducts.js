import  {useState, useEffect} from 'react';
import api from '../api';

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const getProducts = async (page) =>{
        console.log(page);
        let response;
        response = await api.get('/products');
        setProducts(response.data.products);
        
    }

    useEffect(() =>{
        getProducts(page);
    },[])

    return products;
}

export default useProducts;