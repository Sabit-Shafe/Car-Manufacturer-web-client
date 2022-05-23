import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ products }) => {
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/products/${id}`);
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={products.img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{products.name}</h2>
                    <p>{products.description}</p>
                    <h3>price per unit: {products.price}<span> $</span></h3>
                    <h4>available quantity: {products.quantity}</h4>
                </div>
                <div class="card-actions justify-end ">
                    <button onClick={() => navigateToProductDetail(products._id)} className='btn btn-primary' class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;