import React from 'react'
import Nav from '../components/layout/Nav'
import Hero from "../components/home/hero"
import Features from '../components/home/Features '
import HowItWorks from '../components/home/HowItWorks '
import Testimonials from '../components/home/Testimonials '
import Pricing from '../components/home/Pricing '
import FAQ from '../components/home/FAQ'
import Footer from '../components/layout/Footer'
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home
