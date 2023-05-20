import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const SignUp = () => {

    const { createUser,googleUser,updateUser } = useContext(AuthContext&& AuthContext);
    const [err,setErr] = useState('');
    const [success,setSuccess] = useState('');
    const handleSubmit =(event)=>{
        setErr('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const url = form.url.value;
        
        console.log(name,email,password,confirmPassword,url)
        if(password.length<6){
                setErr('Password must be 6 charachter long');
                return;
        }
        if(password!=confirmPassword){
                setErr("Password didn't match");
                return;
        }

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            updateUser(result.user,name,url)
            .then(result=>{
               
            })
            .catch(err=>{
                
            })


            setSuccess('User created successfully')
        })
        .catch(err=>{
            setErr(err.message)
        })
        

        
    

    
    }

    const handleGoogle =()=>{
        setErr('');
        setSuccess('');
        googleUser()
        .then((result)=>{
           
            setSuccess('User created successfully')
            
        })
        .catch(err=>{
            setErr(err.message)
        })
    }





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
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="enter your name" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="url" placeholder="photo url" className="input input-bordered" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" />

                                </div>




                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-pink border-none" type='submit'>Sign In</button>
                                </div>
                            </form>
                            {
                                
                                <div>
                                    <p className='text-success'>{success}</p>
                                    <p className='text-error'>{err}</p>

                                </div>
                                
                            }


                            <div className='flex items-center justify-between'>



                                <div>
                                    <label className="label">
                                        <Link to='/login'><a className="label-text-alt link link-hover">Already Have An Account?</a></Link>
                                    </label>
                                </div>



                                <div>
                                    <label className='label'>
                                    <small> <a className="label-text-alt link link-hover" onClick={handleGoogle}>Sign With Google  <FcGoogle className='text-3xl inline'></FcGoogle></a> </small>
                                    </label>

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