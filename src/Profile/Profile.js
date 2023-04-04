import React from 'react'
import PropTypes from "prop-types"

function Profile({name, familyName, bio, profession , children}) {
  return (
    <div>
        
        <h3>{name}{familyName}</h3>
        {children}
        <p>{bio}</p>
        <p>{profession}</p>
        
        

    </div>
  )
}
Profile.propTypes = {
    BooleanProp: PropTypes.bool
   };

export default Profile