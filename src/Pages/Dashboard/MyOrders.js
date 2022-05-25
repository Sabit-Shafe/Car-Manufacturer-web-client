import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [shouldRemount, setShouldRemount] = useState(false)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user, shouldRemount, navigate])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
          const url = `http://localhost:5000/order/${id}`;
          fetch(url, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              // const remaining = item.filter(item => item._id !== id);
              // setItem(remaining);
              setShouldRemount(!shouldRemount)
    
            })
        }
    }
    return (
        <div>
        <h2>My order {orders.length}</h2>
        <div class="overflow-x-auto bg-lime-100">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                      
                        <th>Product</th>
                        <th>quantity</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        orders.map((o, index) => <tr key=
                        {o._id} 
                        shouldRemount={shouldRemount}
                        setShouldRemount={setShouldRemount}>
                            <th>{index + 1}</th>
                            <td>{o.email}</td>
                
                            <td>{o.ProductName}</td>
                            <td>{o.quantity}</td>
                            <td>{o.price}<span> $</span></td>
                            <td>
                                {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(o.price && o.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{o.transactionId}</span></p>
                                </div>}
                            </td>
                            <td>{(!o.paid) && <button onClick={() => handleDelete(o._id)} className='btn btn-xs btn-success'>Cancel</button>}</td>
                        </tr>)
                    }
                    


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;