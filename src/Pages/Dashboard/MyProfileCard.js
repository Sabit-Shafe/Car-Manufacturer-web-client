import React, {  } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const MyProfileCard = ({ myprofile }) => {
    // const [shouldRemount, setShouldRemount] = useState(false)
    // const [user] = useAuthState(auth);

    // const [profile, setProfile] = useState([]);
    // useEffect(() => {
    //     fetch(`https://arcane-cove-77860.herokuapp.com/myprofile?email=${user.email}`)
        
        
    //         .then(res => res.json())
    //         .then(data => setProfile(data));
            
    // }, [user])


    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    
                const onSubmit = (myprofile) => {
                fetch('https://arcane-cove-77860.herokuapp.com/myprofile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(myprofile)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product Added Successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the Product');
                    }
                })
            };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-blue-500">Name : {myprofile.name}</h1>
                        <h1 className="text-3xl font-bold text-base-500 mt-5">Email : {myprofile.email}</h1>
                        <p className="py-6"></p>
                    </div>
                    {/* <div className="mt-40"> 
                    {
                        profile.map((p) => <div className="mt-40 text-3xl font-bold text-base-500 " key=
                        {p._id} 
                        shouldRemount={shouldRemount}
                        setShouldRemount={setShouldRemount}>
                            <h1> Your Address: {p.address}</h1>
                            <h1> Your Phone Number: {p.phoneNumber}</h1>
                            <h1>Your LinkedIn Profile :{p.linkProfile}</h1>
                           
                        </div>)
                    }
                   
                    </div> */}
                    <div>
            <h2 className="text-2xl">Update profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'education is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
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
                        <span className="label-text">your LinkedIn Profile</span>
                    </label>
                    <textarea
                        type="description"
                        placeholder="LinkedIn Profile"
                        className="input input-bordered w-full max-w-xs textarea"
                        {...register("linkProfile", {
                            required: {
                                value: true,
                                message: 'LinkedIn is Required'
                            },
                           
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Phone Number' type="number" {...register("phoneNumber")} />
                </div>
              

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileCard;