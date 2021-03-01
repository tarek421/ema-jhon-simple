import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const tax = total/10;

    return (
        <div>
            <h2>This is cart</h2>
                <h4>Order summery:{props.cart.length} </h4>
                <h4><small>tax: {tax}</small></h4>
                <h4>total price : {total+tax}</h4>
        </div>
    );
};

export default Cart;