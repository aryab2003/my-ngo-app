import React from 'react'
// import Sidebar from '../Components/Sidebar'
// import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
// import Footer from '../Components/Footer'
import Dash from '../Components/Dash'
import Story from '../Components/Story'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden ml-[4rem]'>
      
          <Carousel />
          <Dash />
          <Story />
          <Footer/>
      
    </div>
  )
}

export default Home
