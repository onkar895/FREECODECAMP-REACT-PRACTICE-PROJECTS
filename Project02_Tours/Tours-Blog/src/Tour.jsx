/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Tour = ({ id, image, info, price, name, removeTours }) => {

  const [readmore, setReadMore] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', gap: '20px', }}>
      <img src={image} alt="{name}" style={{ width: '40vw', borderRadius: '10px', boxShadow: '10px black', marginTop: '20px' }} />
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '40vw', textAlign: 'justify' }}>
          <p>{readmore ? info : `${info.substring(0, 200)}....`}
            <button onClick={() => setReadMore(!readmore)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '12px' }}>{readmore ? "Show Less" : "Show More"}</button>
          </p>
        </div>

        <button onClick={() => removeTours(id)} style={{ background: 'white', color: 'red', padding: '10px 30px', borderRadius: '5px', border: '2px solid red', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer', }}>Not Interested</button>

        <div style={{ width: '100%', height: '2.5px', background: 'black', marginTop: '10px' }}></div>
      </footer>
    </div>
  )
}

export default Tour
