import React, { useContext } from 'react';
import img1 from '../../../assets/Images/image1.jpg'
import img2 from '../../../assets/Images/image2.jpg'
import img3 from '../../../assets/Images/image3.jpg'
import img4 from '../../../assets/Images/image4.jpg'
import { AuthContext } from '../../../Provider/Provider';



const Banner = () => {
    const {user} = useContext(AuthContext);
    console.log(user)


    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                 
                   
                    <img src={img3} className="w-full rounded-lg" />
                    <div className='absolute bottom-[400px] right-48'>
                    <h3 className='text-6xl text-white font-semibold'>Unleash The Enjoy</h3>
                    <button className="btn btn-wide mt-5 bg-pink border-none">Shop Now</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       
                        <a href="#slide4" className="btn btn-circle bg-sky-blue border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-sky-blue border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-lg" />
                    <div className='absolute bottom-[400px] right-48'>
                    <h3 className='text-6xl text-pink font-semibold'>Unleash The Enjoy</h3>
                    <button className="btn btn-wide mt-5 bg-sky-blue border-none">Shop Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-sky-blue border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-sky-blue border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-lg" />
                    <div className='absolute bottom-[400px] right-48'>
                    <h3 className='text-6xl text-white font-semibold'>Unleash The Enjoy</h3>
                    <button className="btn btn-wide mt-5 bg-pink border-none">Shop Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-sky-blue border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-sky-blue border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" />
                    <div className='absolute bottom-[400px] right-48'>
                    <h3 className='text-6xl text-white font-semibold'>Unleash The Enjoy</h3>
                    <button className="btn btn-wide mt-5 bg-pink border-none">Shop Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-sky-blue border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-sky-blue border-none">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;