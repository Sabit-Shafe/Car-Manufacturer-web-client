import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productsID } = useParams();
    const [products] = useProductDetail(productsID)
    const [user, loading, error] = useAuthState(auth);
    // const imageStorageKey='469f118d1ab297a7fcdd3af08feb5555';
    // const [updatedQuantity, setUpdatedQuantity] = useState()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const HandleAddQuantity = async quantity => {
    //     const url = `http://localhost:5000/product/${productsID}`
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'

    //         },
    //         body: JSON.stringify({ quantity: quantity })

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('succsessful', data);
    //             setUpdatedQuantity();
    //             // setShouldRemount(!shouldRemount)
    //         })

    // }
    const onSubmit =(order)=> {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res=>res.json())
        // .then(result =>{
        //     if(result.success){
        //         const img = result.data.url;
        //         const product = {
        //             name: data.name,
        //             description: data.description,
        //             price: data.price,
        //             quantity: parseInt(data.quantity),
        //             minimumQuantity: parseInt(data.Minquantity),
        //             img: img
        //         }
                // send to your database 
                // const order = {
                   
                    
                //     name: user.displayName,
                //     email: user.email,
                //     address: order.address,
                //     quantity: order.quantity,
                //     number: order.number
                // }
               
                console.log(order);
                fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                     },
                    body: JSON.stringify(order)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('order Successfull')
                        reset();
                    }
                    else{
                        toast.error('Failed to order');
                    }
                })

            };
            
    //     })
    // }

    
     


    return (
        // <div>
        // <div class="card lg:card-side bg-base-100 shadow-xl">
        //     <figure><img src={products.img} alt="product.name" /></figure>
        //     <div class="card-body">
        //         <h2 class="card-title">{products.name}</h2>
        //         <p>{products.description}</p>
        //         <h3>price per unit: {products.price}<span> $</span></h3>

        //         {/* <div>
        //             <input onChange={(e) => setUpdatedQuantity(e.target.value)} value={updatedQuantity} type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
        //         </div> */}
                
        //             <button  class="btn btn-primary">Purchase</button>
        //             {/* onClick={() => HandleAddQuantity(parseInt(updatedQuantity))} */}
        //         </div>
        //     </div>
        // </div>
        <div>
        <h2 className="text-2xl">Add a New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

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
                    placeholder="description"
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
                    <span className="label-text">Number</span>
                </label>
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("number")} />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='quantity' type="number" {...register("quantity")} />
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
    </div>
    );
};

export default Purchase;