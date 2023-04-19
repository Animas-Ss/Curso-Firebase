import React from 'react';
import logOut from '../functions/logOut';

const Navbar = ({ usuario }) => {
  return (
    <div className='w-full flex justify-between px-10 my-5'>
        <p>{usuario.email}</p>
        <button className='bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={logOut}>Log out</button>
    </div>
  )
}

export default Navbar;