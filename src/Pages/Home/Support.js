import React from 'react';

const Support = ({ support }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{support.name}</h2>
                <p>{support.description}</p>
            </div>
            <figure><img src={support.image} alt={support.name} /></figure>
        </div>
    );
};

export default Support;