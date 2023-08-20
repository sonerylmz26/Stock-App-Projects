import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import axios from 'axios'
import { getStockSuccess } from '../features/stockSlice'
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
const useStockCall = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const getStockData = async(url) => {

      dispatch(fetchStart())
      try {
            const { data } = await axios(
              `${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
              {
                headers: { Authorization: `Token ${token}` },
              }
            )
            dispatch(getStockSuccess({data, url}))
            console.log(data)
          } catch (error) {
            dispatch(fetchFail())
            console.log(error)
          }
  }

  const deleteStockData = async(url,id) => {

      dispatch(fetchStart())

      try {
           await axios.delete(
              `${import.meta.env.VITE_BASE_URL}/stock/${url}/${id}/`,
              {
                headers: { Authorization: `Token ${token}` },
              }
            )
            toastSuccessNotify(`${url} silinmiştir.`)
            getStockData(url)
            
          } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} silinmemiştir.`)
            console.log(error)
          }

  }


return { getStockData ,deleteStockData }


}

export default useStockCall