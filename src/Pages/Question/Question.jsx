import React from 'react';

const Question = () => {
    const handleSubmit =(event)=>{
        event.preventDefault();
    }
    
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content ">

                    <div className="card  max-w-7xl shadow-2xl  bg-base-100">
                        <h3 className='text-center text-3xl font-semibold mt-4'>Ask us</h3>
                        <div className="card-body ">
                            <form onSubmit={handleSubmit}>
                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name='product' placeholder="Your Name" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" name='seller' placeholder="Phone Number" className="input input-bordered" />
                                    </div>
                                </div>
                                

                              


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <input type="text" name='url' placeholder="details" className="input input-bordered" />

                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-pink border-none" type='submit'>Send Us</button>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;