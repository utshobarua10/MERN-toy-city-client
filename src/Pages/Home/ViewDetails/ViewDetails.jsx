import React from 'react';
import lego from '../../../assets/Images/lego.jpg'
const ViewDetails = () => {
    return (
        <div>
            {/* Modals start */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Details Of The Product</h3>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, facere?</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
            {/* Modal Ends */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={lego} className='w-1/2 border' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
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