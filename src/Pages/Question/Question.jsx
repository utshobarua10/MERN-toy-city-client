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
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='product' placeholder="Product Name" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='seller' placeholder="Seller name" className="input input-bordered" />
                                    </div>
                                </div>
                                

                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered" />

                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail Description</span>
                                        </label>
                                        <input type="text" name='description' placeholder="description" className="input input-bordered" />

                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name='url' placeholder="picture url" className="input input-bordered" />

                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-pink border-none" type='submit'>Add a toy</button>
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