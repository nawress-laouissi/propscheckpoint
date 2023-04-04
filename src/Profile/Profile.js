import React from 'react'
import PropTypes from "prop-types"
// create a finctional component and passing props:
function Profile({name, familyName, bio, profession , children }) {
   

  return (
    //inline style:
    <div style={{color:"blue"}}>
      
        <h3>{name} {familyName}</h3>
        {children}
        <p>{bio}</p>
        <p>{profession}</p>
        
        

    </div>
  )
}
// defining proptypes:
Profile.propTypes = {
    name: PropTypes.string,
    familyName: PropTypes.string,
   };
   // defining default props:
   Profile.defaultProps={
    bio:""
   }
 
export default Profile