import React from 'react';
import errImg from '../../assets/images/404-Page-Cover.png'

const Notfound = () => {
    return (
        <div>
            <div>
            <h1 className="bg-warning">404 ERROR ! Please try again.</h1>
            <img className="img-responsive align-center" src={errImg} alt="404error"></img>
        </div>
        </div>
    );
};

export default Notfound;