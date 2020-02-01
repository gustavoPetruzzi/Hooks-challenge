import React,{useState} from 'react';
import Product from './Product/Product';
import classes from './App.module.css';
import useProducts from './useProducts';
import Navigation from '../components/Navigation/Navigation';
import Button from './Button/Button';

const addMoreProducts = () =>{
    return 1;
}

const App = () =>{

    const products  = useProducts();
    const [cart, setCart] = useState([]);
    
    let content;
    const addProduct = (id, amount) =>{
        let newCart = [...cart];
        console.log(amount);
        console.log(id);
        /*
        newCart.push(products.filter(product => product.id === id)[0]);
        setCart(newCart);
        */
        
    }

    const removeProduct = (id) =>{
        return 1;
    }

    
    if(products.length > 0){
        content = products.map(product => {
            return (
                <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.photo}
                    //clicked={() =>addProduct(product.id)}
                    remove={() => removeProduct(product.id)}
                    add={(amount) =>addProduct(product.id, amount)}
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
            <Button style={{ width: '70%'}} clicked={addMoreProducts} > Mas productos</Button>
        </div>
    )
}

export default App;