import React from 'react';

const ProductRow = ({product, index, refetch, setDeletingProduct}) => {
    const {name, price, quantity, img} = product;
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div className="avatar">
            <div className="w-8 rounded">
                <img src={img} alt={name} />
            </div>
        </div></td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
            <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
        </td>
    </tr>
    );
};

export default ProductRow;