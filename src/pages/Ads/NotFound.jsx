import React from 'react';

import notFound from "../assets/img/notfound.webp"

const NotFound = () => {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={notFound} alt="NotFound" />
        </div>
    );
};

export default NotFound;