import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Create An Account!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl  bg-base-100">
                        <div className="card-body ">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="enter your name" className="input input-bordered" />
                            </div>
                           
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                               
                            </div>




                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-pink border-none">Sign In</button>
                            </div>
                            <div className='flex items-center justify-between'>



                            <div>
                            <label className="label">
                                    <Link to='/login'><a className="label-text-alt link link-hover">Already Have An Account?</a></Link>
                                </label>
                            </div>



                            <div>
                              <small>Sign With Google  <FcGoogle className='text-3xl inline'></FcGoogle></small>

                            </div>



                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;