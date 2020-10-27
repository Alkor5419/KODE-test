import React from 'react'
 
const Pokemon = props => {
   return <div>
      {props.data.map(e => <div>{e}</div>)}
   </div>
}

export default Pokemon;