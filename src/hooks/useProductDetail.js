import  { useEffect, useState } from 'react';

const useProductDetail = (productsID) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `https://arcane-cove-77860.herokuapp.com/product/${productsID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [productsID]);
    return [products, setProducts];
}

export default useProductDetail;