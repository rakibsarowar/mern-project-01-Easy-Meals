import React from 'react';
import { Button } from 'react-bootstrap';

const PartnerShip = () => {
    return (
        <div className='container bg-black bg-opacity-50 py-5 my-5'>

            <div className='mx-auto py-3 text-center align-self-center text-white w-50'>
                <h3 className='display-3'>We Offer You Partnership </h3>
                <p>We love to partner with brands and products that we believe in. If you feel that your company shares values and would benefit our readers, we would love to talk about working together.</p>
                <Button variant="warning">Learn More</Button>
            </div>
        </div>
    );
};

export default PartnerShip;