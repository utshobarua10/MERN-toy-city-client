import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyToy = () => {


    const data = useLoaderData();
    console.log(data.name)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.product.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const url = form.url.value;
        const updatedData = {
            name,
            seller,
            email,
            category,
            price,
            rating,
            quantity,
            description,
            url,
            
       
        }
        


        fetch(`http://localhost:5000/updateToy/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)

        })
            .then(res => res.json())
            .then(data => console.log(updatedData))


    }
 
    

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content ">

                    <div className="card  max-w-7xl shadow-2xl  bg-base-100">
                        <h3 className='text-center text-3xl font-semibold mt-4'>Update The Product</h3>
                        <div className="card-body ">
                            <form onSubmit={handleSubmit}>
                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='product' defaultValue={data.name} placeholder="Product Name" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='seller' defaultValue={data.seller} placeholder="Seller name" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Seller email" defaultValue={data.email} className="input input-bordered" />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <select name='subCategory' className="select select-bordered w-full max-w-xl">
                                            <option disabled selected>{data.category}</option>
                                            <option>Educational Lego</option>
                                            <option>Engeneering Lego</option>
                                            <option>Building  Lego</option>
                                        </select>

                                    </div>
                                </div>

                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' defaultValue={data.price} placeholder="price" className="input input-bordered" />

                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name='rating' defaultValue={data.rating} placeholder="rating" className="input input-bordered" />

                                    </div>
                                </div>


                                <div className='flex space-x-3'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name='quantity' defaultValue={data.quantity}  placeholder="available quantity" className="input input-bordered" />

                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail Description</span>
                                        </label>
                                        <input type="text" defaultValue={data.description} name='description' placeholder="description" className="input input-bordered" />

                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" name='url' defaultValue={data.url}  placeholder="picture url" className="input input-bordered" />

                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-pink border-none" type='submit'>Update The toy</button>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToy;