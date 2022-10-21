import React from 'react'
import ImageSlide from '../components/Home/ImageSlide'
import HeroesWelcome from '../components/Home/HeroesWelcome'
import HeroesTop from '../components/Home/HeroesTop'
import HeroesMid from '../components/Home/HeroesMid'

const Home = () => {
  return (
    <div>
      <ImageSlide />
      <br />
      <HeroesWelcome />
      <hr />
      <HeroesTop />
      <br />
      <HeroesMid />
    </div>
  )
}

export default Home
