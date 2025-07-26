// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header className="bg-primary text-white px-4 py-3 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold">🛍️ Products Gallery</Link>
//           <nav className="space-x-6">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/products" className="hover:underline">Products</Link>
//           </nav>
//         </div>
//     </header>
//   )
// }

// export default Header

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDark } from '../../Redux/themeSlice';

const Header = () => {
    const {isDark}= useSelector((state)=>state.theme);
    const dispatch = useDispatch();
  return (
    <header className={`${isDark ? "dark":""} bg-primary  dark:bg-primary-dark text-white px-4 py-3 shadow-md`} >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">🛍️ Products Gallery</Link>
        
        <nav className="space-x-6 flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <button
            onClick={()=>dispatch(toggleDark())}
            className={`ml-4 px-3 py-1 bg-white ${isDark ? "dark":""} text-primary  dark:text-primary-dark rounded-md hover:bg-gray-200 transition`}
          >
            {isDark  ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
