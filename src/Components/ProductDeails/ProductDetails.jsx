import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecificProduct } from '../../Redux/productsSlice'
import Loader from '../Loader/Loader'
import StarRating from '../StarRating/StarRating'
import Error from '../Error/Error'
const ProductDetails = () => {
  const {isDark}= useSelector((state)=>state.theme);
  const { specificProduct, loading ,error} = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSpecificProduct(id))
  }, [dispatch, id])

  if (loading) return <div className="flex justify-center items-center min-h-screen"><Loader /></div>

  return (
    <>
    {error? <Error message={error}/> :(
      <div className="max-w-5xl mx-auto p-6 mt-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-100 p-4 rounded-xl">
            <img
              src={specificProduct?.image}
              alt={specificProduct?.title}
              className="w-full h-[400px] object-contain"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{specificProduct?.title}</h2>
            <p className="text-gray-600">{specificProduct?.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Category:</span> {specificProduct?.category}
            </p>
            <p className={`text-2xl font-bold ${isDark ? "dark":" "} text-primary dark:text-primary-dark`}>${specificProduct?.price}</p>
            <StarRating rate={specificProduct?.rating?.rate} count={specificProduct?.rating?.count} />
          </div>
        </div>
      </div>
    )}
      
    </>
     
  )
}

export default ProductDetails
