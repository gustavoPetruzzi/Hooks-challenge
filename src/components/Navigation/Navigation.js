import React from 'react';
import classes from './Navigation.module.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/shopping-cart.png';
const Navigation = (props) =>{    
    return(
        <header className={classes.Header}>
            <div>
                <img src={logo} alt="Ezshop" />
            </div>
            <div style={{marginLeft:'10px'}}>
                <p className={classes.Item}> Ezshop</p>
            </div>
            <nav className={classes.Navigation}>
                <ul className={classes.Items}>
                    <li className={classes.Item}>
                       <p> $ {(props.cart.reduce((acc,cur) => acc + cur.price, 0).toFixed(2))} </p>
                    </li>
                    <li className={classes.Cart}>
                        <div className={classes.CartObject}>
                            {props.cart.length} 
                        </div>
                        <img src={cart} alt="cart" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;