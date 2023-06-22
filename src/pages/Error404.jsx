import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../assets/error.jpg'

const Error404 = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center'>
            <div className='mt-5'>
                <img className='img-fluid w-25' src={img} alt="" />
            </div>
            <h2 className=''>
            <span className=''>Error</span> {status || 404}
          </h2>
          <p className=''>
            {error?.message}
          </p>

        </div>
    );
};

export default Error404;