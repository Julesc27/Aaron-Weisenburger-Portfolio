import Hero from '../components/Hero.jsx'
import FeaturedWork from '../components/FeaturedWork.jsx'
import TechnicalSkills from '../components/TechnicalSkills.jsx'
import ExperienceTimeline from '../components/ExperienceTimeline.jsx'
import AboutSection from '../components/AboutSection.jsx'
import NextOpportunity from '../components/NextOpportunity.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <TechnicalSkills />
      <ExperienceTimeline />
      <AboutSection />
      <NextOpportunity />
    </>
  )
}
