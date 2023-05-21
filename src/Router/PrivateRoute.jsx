import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    }
    
    
    if(user?.email){
        return children 
    }

    
        // return <Navigate to='/login' replace></Navigate>



};

export default PrivateRoute;