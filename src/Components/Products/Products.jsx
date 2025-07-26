import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/productsSlice';
import ProductCard from '../ProductCard/Productcard';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

const Products = () => {
  const {isDark}= useSelector((state)=>state.theme);
  const { products, loading , error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    let updated = [...products];

    if (searchTerm) {
      updated = updated.filter((product)=>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (sortType === 'price-low') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-high') {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortType === 'name') {
      updated.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(updated);
  }, [products, searchTerm, sortType]);

  return ( 
    <>
      {error ? <Error message={error}/> : (
      <div className="space-y-6">
        <h1 className={`text-3xl font-bold  ${isDark ? "dark":" "} text-primary dark:text-primary-dark `} >Products</h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-md w-full md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border px-4 py-2 rounded-md w-full md:w-1/4"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="name">Name: A → Z</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 textcen">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-10">
              <Loader />
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
      )}
    </>
  );
};

export default Products;
