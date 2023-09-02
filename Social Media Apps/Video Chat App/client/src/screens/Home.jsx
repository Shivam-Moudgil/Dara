import React, { useCallback, useState } from 'react'

export const Home = () => {
    const [email,setEmail]=useState('')
    const [room,setRoom]=useState('');
const handleSubmit=useCallback((e)=>{
e.preventDefault();
console.log({email,room})
},[email,room])

  return (
    <div>
<h1>Lobby</h1>
<form onSubmit={handleSubmit}>
    <label htmlFor="email">Email Id</label>
<input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
<label htmlFor="room">Room Id</label>
<input type="text" id='room' value={room} onChange={(e)=>setRoom(e.target.value)} />
<button type="submit">Join</button>
</form>
    </div>
  )
}
