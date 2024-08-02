import React from 'react'
import './Wishlist.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Wishlist = ({data}) => {
  const navigate = useNavigate();
    const proceedToBook = async()=>{
       try{
           const result  = await data.room.map((d)=>axios.post(`/booking/book/`,{room:d,user:data.user,start:data.from_date,end:data.to_date}));
           toast.success("Room Booked Successfully");
           navigate('/bookings');
       }catch(error)
       {
         toast.error(error.message);
         navigate('/');  
       }
    }
  return (
      <div className='Wish'>
             <div className='NumberOfHotelRoom'>
  <p className='HotelRoomNumber'>{data.room.length}</p>
   <p className='NumberOfHotelRoomHeading'>
    {(data.room.length>1)?('Rooms'):('Room')}
   </p>

  </div>
             <div className='HotelRoomContainer'>
             <p className='price'>
             ₹&nbsp;{data.price}/
   </p>

             <button className='HotelBtn' onClick={proceedToBook}>Book</button>
             </div>
      </div>
  )
}

export default Wishlist
