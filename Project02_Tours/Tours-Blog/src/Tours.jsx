/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Tour from './Tour'


const Tours = ({ tours, removeTours }) => {
  return (
    <div>
      <div style={{ marginLeft: '35rem' }}>
        <h2>Ours Tours</h2>
      </div>
      <div>
        {
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTours={removeTours} />
          })
        }
      </div>
    </div>
  )
}

export default Tours
