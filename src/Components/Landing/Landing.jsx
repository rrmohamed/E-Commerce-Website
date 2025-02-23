import Categories from "../Categories/Categories"
import LandingFeature from "./LandinFeature/LandingFeature"
import LandingHeader from "./LandingHeader/LandingHeader"
import LandingSubscribe from "./LandingSubscribe/LandingSubscribe"
// import LandingTestimonials from "./LandingTestimonials/LandingTestimonials"


function Landing() {
  return <>
  <LandingHeader/>
  <LandingFeature/>
  <Categories />
  {/* <LandingTestimonials /> */}
  <LandingSubscribe/>
  </>
}

export default Landing