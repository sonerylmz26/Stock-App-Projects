import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Purchases = () => {
const {getStockData} = useStockCall();
const { purchases } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("purchases")
  
  }, [])
  console.log(purchases)
  return <div>Purchases</div>
}

export default Purchases
