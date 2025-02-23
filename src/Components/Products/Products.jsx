import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "../MainSlider/MainSlider";
import RecentProducts from "../RecentProducts/RecentProducts";


const Products = () => {
  return <>
  <div className="bg-gradient-to-br from-purple-50 to-pink-50">
    <MainSlider />
    <CategoriesSlider />
    <RecentProducts />
  </div>
  </>
}
export default Products ;