import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/review', {
        method: 'GET',

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>sd</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.slice(0, 3).map(reviews =><Review
                    key={reviews._id}
                    reviews={reviews}
                ></Review>)
            }
        </div>
    </div>
    );
};

export default Reviews;