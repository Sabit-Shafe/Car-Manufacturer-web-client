import React, { useEffect, useState } from 'react';

import Product from './Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-cove-77860.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    // const navigate = useNavigate();
    // const navigateToItemDetail = id => {
    //     navigate(`/Inventory`);
    // }
    
    console.log("product gula ekhane", products);
    return (
        <div className='my-28'>
        <div className='text-center'>
            <h2 className='text-4xl text-fuchsia-700 font-bold uppercase '>Best Car Parts</h2>
            <div className="divider bg-red-300"></div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                products.slice(0, 6).map(products =><Product
                    key={products._id}
                    products={products}
                ></Product>)
            }
        </div>
    </div>
    );
};

export default Products;