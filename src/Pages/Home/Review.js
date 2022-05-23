import React from 'react';

const Review = ({ reviews }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title">{reviews.name}</h2>
                <p>{reviews.description}</p>
                <h> Rating : {reviews.Rating}<span > star</span></h>
            </div>
        </div>
    );
};

export default Review;