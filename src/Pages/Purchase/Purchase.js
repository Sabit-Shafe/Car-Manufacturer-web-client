import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
      navigate(`/dashboard/MyOrder/${id}`);
    }
    const { productsID } = useParams();
    const [products] = useProductDetail(productsID)
    
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const onSubmit = (order) => {
        
       

        console.log(order);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('order Successfull')
                    reset();
                }
                else {
                    toast.error('Failed to order');
                }
            })

    };


    return (
        <div className="flex h-screen justify-center items-center mt-20 mb-20">
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={products.img} alt="product.name" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{products.name}</h2>
                    <p> Product Description: {products.description}</p>
                    <h3 className="text-lg font-bold text-fuchsia-500">price per unit: {products.price}<span> $</span></h3>


                 </div>
           </div>
           <div className=" mx-5">
            <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">{products.name}</span>
                    </label>
                    <input
                        // disabled value={products?.name || ''}
                        type="text"
                        placeholder=" Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ProductName")}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        // disabled value={user?.displayName || ''}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        // disabled value={user?.email || ''}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email")}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            },

                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input className='mb-2 input input-bordered w-full max-w-xs' 
                    placeholder='Quantity' type="number" {...register("quantity")} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='price' type="number" {...register("price")} />
                </div>

                {/* <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Photo</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'Image is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div> */}

                <input className='btn w-full max-w-xs text-white' type="submit" value="Purchase" />
            </form>
            <div className="text-center mb-5">
            <Link to={`/dashboard/MyOrder`}><button className='btn btn-xl btn-success mt-5 mb-5'>Order Payment</button></Link>
            </div>
            </div>
           
        </div>
       
    );
};

export default Purchase;