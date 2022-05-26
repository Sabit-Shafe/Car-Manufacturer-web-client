import React from 'react';

const Support = ({ support }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{support.name}</h2>
                <p>{support.description}</p>
            </div>
            <figure><img src={support.image} alt={support.name} /></figure>
        </div>
    );
};

export default Support;