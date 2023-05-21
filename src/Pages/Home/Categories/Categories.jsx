import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import lego from '../../../assets/Images/lego.jpg'
import Rating from 'react-rating';
import { BsMoonStarsFill, BsMoonStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ViewDetails from '../ViewDetails/ViewDetails';



const Categories = () => {
    const [category, setCategory] = useState('Engeneering Lego');
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToys?category=${category}`)
            .then(res => res.json())
            .then(data => setTabs(data))
    }, [category])


    // console.log(tabs)
    tabs.map(tab=>console.log(tab))

    return (
        <div className='flex justify-center items-center'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => setCategory('Engeneering Lego')}> <h3 className='text-2xl text-pink'>Engeneering<span className='text-sky-blue font-bold'> Lego</span> </h3> </Tab>
                    <Tab onClick={() => setCategory('Educational Lego')}> <h3 className='text-2xl text-pink'>Educational<span className='text-sky-blue font-bold'> Lego</span> </h3> </Tab>
                    <Tab onClick={() => setCategory('Building Lego')}> <h3 className='text-2xl text-pink'>Bulding<span className='text-sky-blue font-bold'> Lego</span> </h3> </Tab>

                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            tabs.map(tab => <div className="card w-96 bg-base-100 shadow-xl ">
                                <figure className="px-10 pt-10">
                                    <img src={tab.url} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{tab.name}</h2>
                                    <p>Price: $<span className='text-pink'>{tab.price}</span></p>
                                    <Rating
                                        placeholderRating={tab.rating}
                                        readonly
                                        emptySymbol={<BsMoonStars></BsMoonStars>}
                                        placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                        fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                    />




                                    <div className="card-actions">
                                        <Link to={`/viewDetails/${tab._id}`}><button className="btn btn-outline btn-warning" >View Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            tabs.map(tab =>
                                <div className="card w-96 bg-base-100 shadow-xl ">
                                    <figure className="px-10 pt-10">
                                        <img src={tab.url? tab.url :''} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{tab.name}</h2>
                                        <p>Price: $<span className='text-pink'>{tab.price}</span></p>
                                        <Rating
                                            placeholderRating={tab.rating}
                                            readonly
                                            emptySymbol={<BsMoonStars></BsMoonStars>}
                                            placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                            fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                        />




                                        <div className="card-actions">
                                            <Link to={`/viewDetails/${tab._id}`}><button className="btn btn-outline btn-warning">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                        )
                        }
                    </div>
                </TabPanel>

            


                <TabPanel>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            tabs.map(tab => <div className="card w-96 bg-base-100 shadow-xl ">
                                <figure className="px-10 pt-10">
                                    <img src={tab.url? tab.url :''} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{tab.name}</h2>
                                    <p>Price: $<span className='text-pink'>{tab.price}</span></p>
                                    <Rating
                                        placeholderRating={tab.rating}
                                        readonly
                                        emptySymbol={<BsMoonStars></BsMoonStars>}
                                        placeholderSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                        fullSymbol={<BsMoonStarsFill></BsMoonStarsFill>}
                                    />




                                    <div className="card-actions">
                                        <Link to={`/viewDetails/${tab._id}`}><button className="btn btn-outline btn-warning"  >View Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;