import React, { useContext, useEffect } from 'react'
import UserContext from '../utils/UserContext';

const User = () => {

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className = "user-card">
        <h2>Name: Charan</h2>
        <h3>Location: Toronto, Canada</h3>
        <h4>Contact: @CharanPresence</h4>
        <h4>{loggedInUser}</h4>
    </div>
  )
}

export default User