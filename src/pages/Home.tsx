import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import Categories from '../components/Categories'
import FeaturedMaterials from '../components/FeaturedMaterials'
import AboutSection from '../components/AboutSection'
import ScaleSection from '../components/ScaleSection'
import PartnerSection from '../components/PartnerSection'

const Home = () => {
  return (
    <React.Fragment>
      <HomeCarousel />
      <Categories />
      <FeaturedMaterials />
      <AboutSection />
      <ScaleSection />
      <PartnerSection />
    </React.Fragment>
  )
}

export default Home
