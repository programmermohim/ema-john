import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const{img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
    <h4 className="product-name"><Link className="titlelink" to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only{stock}left in stock-Order soon</small></p>
                {props.showAddToCart &&
                    <button onClick={() => props.handleAddProduct(props.product)}>Add Card</button>}
            </div>
        </div>
    );
};

export default Product;