# Travel-tourism-and-hospitality
import React,{Component} from 'react'
const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>A Destination For The New Millennium</h3>
      <p></p>
      <div className='grid'>
        <div>
        <img src="i1.jpg" alt="picture" ></img>
          <h3>America</h3>
        </div>

        <div>
          <img src="i2.jpg" alt='destination-2' />
          <h3>IsLands</h3>
        </div>

        <div>
          <img src="i3.jpg" alt='destination-3' />
          <h3>LosAngeles</h3>
        </div>
      </div>
    </section>
  )
}

export default Destinations
