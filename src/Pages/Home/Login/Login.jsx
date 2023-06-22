import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/Provider';
import { Link } from 'react-router-dom';

const Login = () => {
    const [err,setErr] = useState('');
    const [success,setSuccess] = useState('');
    const {login} = useContext(AuthContext);
    const handleLogin =(event)=>{
        setErr('');
        setSuccess('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email,password)
        .then(result =>{
            setSuccess('User logged in successfully')
        })
        .catch(err=>{
            console.log(err.message)
            setErr(err.message)
        })


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl  bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>




                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <Link to="/signup"><a href="#" className="label-text-alt link link-hover">Don't have an account? Create Now!!</a></Link>
                                    
                                    </label>
                                </div>




                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-pink border-none" type='submit'>Log In</button>
                                </div>
                            </form>
                            {
                                
                                <div>
                                    <p className='text-success'>{success}</p>
                                    <p className='text-error'>{err}</p>

                                </div>
                                
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;