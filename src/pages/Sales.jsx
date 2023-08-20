import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";



const Sales = () => {
  const {getStockData} = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  
    useEffect(() => {
      getStockData("sales")
    
    }, [])
    console.log(sales)

  return <div>Sales</div>
}

export default Sales
