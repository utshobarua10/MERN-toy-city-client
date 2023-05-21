import React from 'react';
import lego from '../../../assets/Images/lego.jpg'
import { useLoaderData, useLocation } from 'react-router-dom';
const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data.name)


    return (
        <div>
            {/* Modals start */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{data.name}</h3>
                    <p className="py-4">{data.description}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
            {/* Modal Ends */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={lego} className='w-1/2 border' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>Price: {data.price}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Seller: {data.seller}</p>
                    <div className="card-actions justify-start">
                        {/* <button className="btn btn-outline" htmlFor="my-modal-5">Click Here to See Full Details</button> */}
                        <label htmlFor="my-modal-5" className="btn btn-outline">Click Here to See Full Details</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;