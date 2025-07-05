import HeroSection from '../pages/HeroSection'
import Slider from '../pages/Slider'
import DealSection from '../home/dealOffers/DealSection'
import PopularCategoriesSection from './popularCategories/PopularCategoriesSection'

const Home = () => {
  return (
<div>
      {/* No Navbar here! */}
      {/* <Slider /> */}
      <HeroSection />
      <DealSection />
      <PopularCategoriesSection />
    </div>
  )
}

export default Home