import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {

  const getRecentProducts = ()=>{
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`) ;
  }

  const responseObject = useQuery({
    queryKey : ['recentProducts'] ,
    queryFn:getRecentProducts ,
    staleTime : 8000
  }) ;
  
  return responseObject 
}

export default useProducts ;