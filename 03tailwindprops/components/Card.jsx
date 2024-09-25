import React from 'react'

function Card({username="MB"}) {
  return (
    <div>
        <img src='https://images.pexels.com/photos/18681384/pexels-photo-18681384/free-photo-of-gaming.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
        <h1 className='text-2xl bg-green-500 p-3 rounded-md-3'>A card for photos</h1>
        <h3>{username}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquid.</p>
    </div>
  )
}

export default Card