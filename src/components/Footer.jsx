'use client';

import Link from 'next/link';
import React, { useState } from 'react';


  const Footer = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
  
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (err) => {
          setError(`Unable to retrieve location: ${err.message}`);
        }
      );
    };
    return (
      <>
          <div className='flex items-center justify-center flex-col border-t'>
          <div className="flex items-center justify-center gap-6 flex-col">
<img src="blackbag.png" alt="" height={50} width={50} />
            <ul className="flex list-none gap-4 text-xl hover:underline transition-all duration-200 ">
             <Link href= "/findstore"><li>Find a store</li></Link> 
             <Link href= "/assistance"><li>Help</li></Link> 
             <Link href= "/Joinus"><li>Join us</li></Link> 
             <Link href= "/Register"><li>Sign in</li></Link> 
            </ul>
          </div>
          <div className='grid grid-cols-4 gap-24 m-6 text-gray-600 '>
          <div className="flex items-center flex-col  ">
            <h1 className='font-bold'>Featured</h1>
            <ul className='flex flex-col gap-4'>
             <Link href=""><li className='hover:underline'>Air Force 1</li></Link>
             <Link href=""><li className='hover:underline'>Jordan 1</li></Link>
             <Link href=""><li className='hover:underline'>Metcon</li></Link>
             <Link href=""><li className='hover:underline'>Air Max 90</li></Link>
            </ul>
          </div>
          <div className="flex  flex-col  hoveer:underline transition-all duration-200 ">
            <h1 className='font-bold'>Shoes</h1>
            <ul className=' flex gap-4 flex-col'>
             <Link href=""><li className='hover:underline'>All shoes</li></Link> 
             <Link href=""><li className='hover:underline'>Running shoes</li></Link> 
             <Link href=""><li className='hover:underline'>Jordan shoes</li></Link> 
             <Link href=""><li className='hover:underline'>Basketball shoes</li></Link> 
            </ul>
          </div>
          <div className='flex  flex-col'>
            <h1 className='font-bold'>Clothing</h1>
            <ul className='flex  flex-col gap-4'>
             <Link href=""><li className='hover:underline'>All clothing</li></Link> 
             <Link href=""><li className='hover:underline'>Tops & T-shirts</li></Link> 
             <Link href=""><li className='hover:underline'>Shorts</li></Link> 
             <Link href=""><li className='hover:underline'>Hoodies & Pullovers</li></Link> 
            </ul>
          </div>
          <div className='flex  flex-col '>
            <h1 className='font-bold'>Kids</h1>
            <ul className=' flex gap-4 flex-col'>
            <Link href=""><li className='hover:underline'>Infant & toddler shoes</li></Link>
            <Link href=""><li className='hover:underline'>Kids shoes</li></Link>
            <Link href=""><li className='hover:underline'>Kids basketball shoes</li></Link>
            <Link href=""><li className='hover:underline'>Kids running shoes</li></Link>
            </ul>
          </div>
        </div>
        </div>
  
  {/* second part */}
          
        <hr className="w-full m-10" />

        <div className="flex flex-row justify-center gap-20 p-6 ">
          <div className="flex  flex-col gap-6">
            <ul className='flex flex-col gap-4'>
              <h1 className='font-bold'>Resources</h1>
             <Link href=""> <li className='hover:underline'>Gift cards</li></Link> 
             <Link href=""> <li className='hover:underline'>Find a store</li></Link> 
             <Link href=""> <li className='hover:underline'>Membership</li></Link> 
             <Link href=""> <li className='hover:underline'>Nike journal</li></Link> 
             <Link href=""> <li className='hover:underline'>Site feedback</li></Link> 
            </ul>
          </div>
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold'>Help</h1>
            <ul className='flex flex-col gap-4'>
             <Link href=""><li className='hover:underline'>Get help</li></Link> 
             <Link href=""><li className='hover:underline'>Order status</li></Link> 
             <Link href=""><li className='hover:underline'>Shipping and delivery</li></Link> 
             <Link href=""><li className='hover:underline'>Returns</li></Link> 
             <Link href=""><li className='hover:underline'>Order cancellation</li></Link> 
             <Link href=""><li className='hover:underline'>Gift card balance</li></Link> 
             <Link href=""><li className='hover:underline'>Contact us</li></Link> 
            </ul>
          </div>
          <div className='flex  flex-col gap-6'>
            <h1 className='font-bold'>Company</h1>
            <ul className='flex flex-col gap-4' >
            <Link href=""><li className='hover:underline'>About Nike</li></Link>  
            <Link href=""><li className='hover:underline'>News</li></Link>  
            <Link href=""><li className='hover:underline'>Careers</li></Link>  
            <Link href=""><li className='hover:underline'>Investors</li></Link>  
            <Link href=""><li className='hover:underline'>Purpose</li></Link>  
            <Link href=""><li className='hover:underline'>Sustainability</li></Link>  
            </ul>
          </div>
          <div className='flex  flex-col gap-6 '>
            <h1 className='font-bold'>Promotions & Discounts</h1>
            <ul className='flex flex-col gap-4'>
             <Link href="" ><li className='hover:underline'>Student</li></Link>
             <Link href="" ><li className='hover:underline'>Military</li></Link>
             <Link href="" ><li className='hover:underline'>Teacher</li></Link>
             <Link href="" ><li className='hover:underline'>First responders & medical professionals</li></Link>
             <Link href="" ><li className='hover:underline'>Birthday</li></Link>
            </ul>
          </div>
          <div className="flex items-center justify-start gap-4 flex-row">
            <img
              src="data:image/png;base64,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"
              alt="Location Icon"
              height={20}
              width={20}
            />
            <button onClick={getLocation}>Get Location</button>
            {location && (
              <div>
                <span>Longitude: {location.longitude}</span>
                <br />
                <span>Latitude: {location.latitude}</span>
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </> 
    );
  };
export default Footer
