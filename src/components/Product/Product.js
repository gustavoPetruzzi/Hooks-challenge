import React, {useState} from 'react';
import classes from './Product.module.css';
import Button from '../Button/Button';
const add = (props, amount) =>{
    
    props.add(amount);
}


const Product = (props) =>{
    const [addProduct, setAddProduct] = useState(false);
    let button;
    if(addProduct){
        button = (
            <div>
                muestra boton
            </div>
        )
    }
    else{
        button = <Button style={{alignSelf: 'flex-end'}} clicked={() =>add(props,1)}>Agregar Producto</Button>
    }
    return(
        <div className={classes.Product}>
            <img alt={props.name} src={props.image} />
            <h3  className={classes.Name} >{props.name}</h3>
            <h4> $ {props.price.toFixed(2)}</h4>

            {button}             


        </div>
    )
}

export default Product;
//onClick={props.clicked}