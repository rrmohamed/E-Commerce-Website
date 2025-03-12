// import Categories from "../Categories/Categories"
import LandingFeature from "./LandinFeature/LandingFeature"
import LandingBrands from "./LandingBrands/LandingBrands"
import LandingHeader from "./LandingHeader/LandingHeader"
import LandingSubscribe from "./LandingSubscribe/LandingSubscribe"


function Landing() {
  return <>
  <LandingHeader/>
  <LandingFeature/>
  <LandingBrands/>
  {/* <Categories /> */}
  <LandingSubscribe/>
  </>
}

export default Landing