import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyProfileCard from './MyProfileCard';

const MyProfile = () => {

    const [myprofile, setMyprofile] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [shouldRemount, setShouldRemount] = useState(false)

    useEffect(() => {
        if (user) {
            fetch(`https://arcane-cove-77860.herokuapp.com/order?email=${user.email}`, {
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

                    setMyprofile(data);
                });
        }
    }, [user, shouldRemount, navigate])



    return (
        <div>
            <h1>{myprofile.length}</h1>
            <div>
                {
                    myprofile.map(myprofile =><MyProfileCard
                    key={myprofile._id}
                    myprofile={myprofile}
                    ></MyProfileCard>)
                }
            </div>
        </div>
    );
};

export default MyProfile;