import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const {isDark}= useSelector((state)=>state.theme);
  return (
    <section className="flex flex-col justify-center items-center text-center h-[calc(100vh-150px)] space-y-6 ">
      <h1 className={`text-5xl font-extrabold ${isDark ? "dark":" "} text-primary dark:text-primary-dark`}>Welcome to Products Gallery</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Explore a variety of trending products. Shop smart, shop fast, shop easy.
      </p>
      <Link
        to="/products"
        className={`px-6 py-3 ${isDark ? "dark":" "} bg-primary dark:bg-primary-dark  text-white rounded-xl hover:bg-blue-700 dark:hover:bg-red-900 transition`}
      >
        Browse Products
      </Link>
    </section>
  );
};

export default Home;

Home.jsx

