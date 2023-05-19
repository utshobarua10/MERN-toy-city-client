import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Vin Diesel</td>
                            <td>Lego Car</td>
                            <td>Lego</td>
                            <td>$1000 </td>
                            <td>  5 </td>
                            <td className='text-pink'><Link to='/viewDetails'>View Details</Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Vin Diesel</td>
                            <td>Lego Car</td>
                            <td>Lego</td>
                            <td>$1000 </td>
                            <td>5 </td>
                            <td className='text-pink'><Link to='/viewDetails'>View Details</Link></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>                            <td>Vin Diesel</td>
                            <td>Lego Car</td>
                            <td>Lego</td>
                            <td>$1000 </td>
                            <td>5 </td>
                            <td className='text-pink'><Link to='/viewDetails'>View Details</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;