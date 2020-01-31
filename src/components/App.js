import React,{useState} from 'react';
import Product from './Product/Product';
import classes from './App.module.css';
import useProducts from './useProducts';
import Navigation from '../components/Navigation/Navigation';


const App = () =>{

    const products  = useProducts();
    const [cart, setCart] = useState([]);
    
    let content;
    const addProduct = (id) =>{
        let newCart = [...cart];
       
        newCart.push(products.filter(product => product.id === id)[0]);
        setCart(newCart);
        
    }

    
    if(products.length > 0){
        content = products.map(product => {
            return (
                <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.photo}
                    
                    clicked={() => addProduct(product.id) }
                />
            )
        })  
    }
    else{
        content = 'no carga';
    }
    return(
        <div className={classes.App}>
            <Navigation cart={cart} />
            {content}
        </div>
    )
}

export default App;