import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Table = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    let i = 1;

    console.log(toys)




    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            toys.map(toy =>
                                <tr>
                                
                                    <th>{i++}</th>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price} </td>
                                    <td> {toy.quantity} </td>
                                    <td className='text-pink'><Link to='/viewDetails'>View Details</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;