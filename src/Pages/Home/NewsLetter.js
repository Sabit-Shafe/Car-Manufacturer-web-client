import React from 'react';

const NewsLetter = () => {
    return (
        <div className="mb-5">
            <div style={{backgroundColor: 'beige'}}>
            <h1 className="text-center font-bold text-5xl text-info mt-5">join our newsletter</h1>
            <div className="text-center mt-5 mb-5" >
            <input type="email" placeholder="write your email" className="input input-bordered input-secondary w-full max-w-xs" /> 
            </div>
            <div className="text-center font-bold text-3xl text-red-300">
            <button className="text-center mb-5" variant="primary" type="submit">
                Subcribe 
            </button>
            </div>
        </div>
        </div>
    );
};

export default NewsLetter;