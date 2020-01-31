import React from 'react';
import classes from './Product.module.css';
const Product = (props) =>{
     
    return(
        <div className={classes.Product}>
            <img alt={props.name} src={props.image} />
            <h3  className={classes.Name} >{props.name}</h3>
            <h4> $ {props.price.toFixed(2)}</h4>

            <button className={classes.ButtonItem} onClick={props.clicked}>Agregar Producto</button>    
             


        </div>
    )
}

export default Product;