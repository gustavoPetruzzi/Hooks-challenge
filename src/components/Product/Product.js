import React from 'react';
import classes from './Product.module.css';
const Product = (props) =>{

    return(
        <div className={classes.Product}>
            <img alt={props.name} src={props.image} />
            <p className={classes.Name} >{props.name}</p>
            <p> $ {props.price}</p>

            <button className={classes.ButtonItem} onClick={props.clicked}>Agregar Producto</button>    
             


        </div>
    )
}

export default Product;