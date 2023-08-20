import { useDispatch} from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import useAxios from './useAxios'
import { getStockSuccess } from '../features/stockSlice'
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
const useStockCall = () => {
//   const { token } = useSelector((state) => state.auth) //! axiose instance ile tokene gerek kalmadı.
const dispatch = useDispatch()
const {axiosWithToken} = useAxios()

  const getStockData = async(url) => {

      dispatch(fetchStart())
      try {
      const { data } = await axiosWithToken(`/stock/${url}/`)

            dispatch(getStockSuccess({data, url}))
           
          } catch (error) {
            dispatch(fetchFail())
            console.log(error)
          }
  }

  const deleteStockData = async(url,id) => {

      dispatch(fetchStart())

      try {
         await axiosWithToken.delete(`/stock/${url}/${id}/`)
            toastSuccessNotify(`${url} silinmiştir.`)
            getStockData(url)
            
          } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} silinmemiştir.`)
            console.log(error)
          }

  }

  const postStockData = async(url, info) => {

      dispatch(fetchStart())

      try {
         await axiosWithToken.post(`/stock/${url}/`, info)
            toastSuccessNotify(`${url} başarılı bir şekilde eklenmiştir.`)
            getStockData(url)
            
          } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} eklenmemiştir.`)
            console.log(error)
          }

  }
  
  const putStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/stock/${url}/${info.id}/`, info)
      toastSuccessNotify(`${url} succesfuly updated`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be updated`)
      console.log(error)
    }
  }


return { getStockData ,deleteStockData, postStockData, putStockData }


}

export default useStockCall