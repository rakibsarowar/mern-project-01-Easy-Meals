import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <div className='text-center mt-5 pt-5'>
            <Spinner animation="border" variant="secondary" />
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;