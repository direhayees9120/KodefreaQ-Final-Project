import React, { useState } from 'react'
import { office1 } from '../assets';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SignUp from '../components/SignUp';

const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen]= useState(true);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(user.token) {
  return window.location.href = (from);
  }

  return (
    <div className='w-full '>
      <img src={office1} alt="office" className='object-contain' />
      <SignUp open={open} setOpen={setOpen} />
    </div>
  )
};

export default Auth