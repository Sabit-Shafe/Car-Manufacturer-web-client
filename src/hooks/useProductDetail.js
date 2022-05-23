import  { useEffect, useState } from 'react';

const useProductDetail = (productsID) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productsID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [productsID]);
    return [products, setProducts];
}

export default useProductDetail;