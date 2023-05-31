import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
<section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
      {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>    
            {/* {
            tours.map((tour) => {
                return(
                    <div key={tour.id}>
                    <img src={tour.image} alt='location'/>
                    <h2>{tour.name}</h2>
                    <p>{tour.info}</p>
                    <p>{tour.price}</p>
                </div>
                )
            })
        } */}
    </section>
  )
}

export default Tours