import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({setDeletingProduct, deletingProduct, refetch}) => {
    const {name} = deletingProduct;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this? ${name}!</h3>
                    <p className="py-4">Thanks for view our site</p>
                    <div className="modal-action">
                    <button onClick={() => handleDelete(deletingProduct._id)} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;