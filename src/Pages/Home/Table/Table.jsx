import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Provider';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';


const Table = () => {
    const {user} = useContext(AuthContext)
    const sellerId=user && user.uid    
    const [toys, setToys] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allToys`)
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])
    
    const data = useLoaderData();
    useEffect(()=>{
        setToys(data)
    },[])

    const handleDelete =(id)=>{
        fetch(`http://localhost:5000/deleteToy/${id}`, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                location.reload();
                console.log(data)})
    }



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
                            <th>Update</th>
                            <th>Delete</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            toys.map(toy => 
                                <tr>
                                
                                    <th>{i++} {}</th>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price} </td>
                                    <td> {toy.quantity} </td>
                                    <td> <Link to={`/updateToy/${toy._id}`} ><FiEdit></FiEdit></Link> </td>
                                    <td> <MdOutlineDeleteForever onClick={()=>handleDelete(toy._id)}></MdOutlineDeleteForever> </td>
                                    <td className='text-pink'><Link to={`/viewDetails/${toy._id}`}>View Details</Link></td>
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