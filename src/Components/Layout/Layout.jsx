import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const {isDark}= useSelector((state)=>state.theme);
  return (
    <div className={`min-h-screen flex flex-col  ${isDark ? "dark":" "} text-primary dark:text-primary-dark bg-gray-100 dark:bg-gray-50  `}>
      <Header/>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
};

export default Layout;
