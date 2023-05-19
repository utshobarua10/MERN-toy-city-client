import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import lego from '../../../assets/Images/lego.jpg'
import Rating from 'react-rating';
import { BsMoonStarsFill,BsMoonStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Categories = () => {
    return (
        <div className='flex justify-center items-center'>
            <Tabs>
                <TabList>
                    <Tab> <h3 className='text-2xl'>For Age <span className='text-sky-blue font-bold'>1-5</span> </h3> </Tab>
                    <Tab> <h3 className='text-2xl'>For Age <span className='text-sky-blue font-bold'>5-10</span> </h3> </Tab>
                    <Tab> <h3 className='text-2xl'>For Age <span className='text-sky-blue font-bold'>10-15</span> </h3> </Tab>
                    <Tab> <h3 className='text-2xl'>For Age <span className='text-sky-blue font-bold'>15-20</span> </h3> </Tab>

                </TabList>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src={lego} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Lego Name</h2>
                            <p>Price: $<span className='text-pink'>1000</span></p>
                            <Rating
                                placeholderRating={3.5}
                                readonly
                                emptySymbol={<BsMoonStars></BsMoonStars>}
                                placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                            />




                            <div className="card-actions">
                                <Link to='/viewDetails'><button className="btn btn-outline btn-warning">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lego} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Lego Name</h2>
                            <p>Price: $<span className='text-pink'>1000</span></p>
                            <Rating
                                placeholderRating={3.5}
                                readonly
                                emptySymbol={<BsMoonStars></BsMoonStars>}
                                placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                            />




                            <div className="card-actions">
                                <Link to='/viewDetails'><button className="btn btn-outline btn-warning">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            
                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lego} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Lego Name</h2>
                            <p>Price: $<span className='text-pink'>1000</span></p>
                            <Rating
                                placeholderRating={3.5}
                                readonly
                                emptySymbol={<BsMoonStars></BsMoonStars>}
                                placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                            />




                            <div className="card-actions">
                                <Link to='/viewDetails'><button className="btn btn-outline btn-warning">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={lego} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Lego Name</h2>
                            <p>Price: $<span className='text-pink'>1000</span></p>
                            <Rating
                                placeholderRating={3.5}
                                readonly
                                emptySymbol={<BsMoonStars></BsMoonStars>}
                                placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                            />




                            <div className="card-actions">
                                <Link to='/viewDetails'><button className="btn btn-outline btn-warning">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;