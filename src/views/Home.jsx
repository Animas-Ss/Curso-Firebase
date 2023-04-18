import React from 'react'
import logOut from '../functions/logOut';

const Home = () => {
  return (
    <div>
        Home
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={logOut}>Log out</button>
    </div>
  )
}

export default Home