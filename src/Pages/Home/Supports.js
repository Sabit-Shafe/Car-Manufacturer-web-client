import React, { useEffect, useState } from 'react';
import Support from './Support';

const Supports = () => {

    const [supports, setSupports] = useState([]);
    useEffect(() => {
        fetch('https://arcane-cove-77860.herokuapp.com/support')
            .then(res => res.json())
            .then(data => setSupports(data));
    }, [])
   
    return (
        <div className="">
        <div className=" mb-10">
            <h1 className="text-center text-4xl text-amber-700 font-bold uppercase">Support</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {supports.map(support => <Support
                    key={support._id}
                    support={support}
                ></Support>)}
            </div>
        </div>
    </div>
    );
};

export default Supports;