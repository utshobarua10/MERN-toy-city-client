import React from 'react';
import building from '../../assets/Images/building.jpg'


const Trending = () => {
    let counter = 50
setInterval(() => {
		if(counter>0){
			counter--
		}
    document.getElementById('counterElement').style.setProperty('--value', counter)
}, 1000)


    return (
        <div>
            <h3 className='text-5xl text-center mb-5 font-semibold mt-5'>Trending Now</h3>
            <div className="card lg:card-side bg-base-100 shadow-xl">

                <figure><img src={building} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Autem Euaiure</h2>
                    <p>$45.00 <br /> Product Type : toy <br /> Vendor : Toytown Sectioned Shopify Theme</p>
                   
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span id="counterElement" style={{ "--value": 52 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;