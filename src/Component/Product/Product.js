import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-information">
                <p className='product-name'>this is product: {name}</p>
                <div>
                    <div>
                        <p>by :{seller}</p>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={
                            () => props.handleProduct(props.product)} 
                            className="btn">
                                <FontAwesomeIcon icon={faShoppingCart} />add to cart
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;