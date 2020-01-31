import React from 'react';
import classes from './Navigation.module.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/shopping-cart.png';
const Navigation = (props) =>{
    let price;
    let algo = [10,20,30,40];
    
    
    return(
        <header className={classes.Header}>
            <div>
                <img src={logo} alt="Ezshop" />
            </div>
            <div style={{marginLeft:'10px'}}>
                <p> EzReal</p>
            </div>
            <nav className={classes.Navigation}>
                <ul className={classes.Items}>
                    <li className={classes.Item}>
                       <p> $ {(props.cart.reduce((acc,cur) => acc + cur.price, 0).toFixed(2))} </p>
                    </li>
                    <li>
                        <img src={cart} alt="cart" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;