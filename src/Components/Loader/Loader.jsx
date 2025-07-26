import { useSelector } from "react-redux";

const Loader = () => {
  const {isDark}= useSelector((state)=>state.theme);
  return (
   <div className="flex justify-center items-center h-64">
    <div className={`w-12 h-12 border-4 border-dashed rounded-full animate-spin ${isDark ? "dark":" "} border-primary dark:border-primary-dark`}></div>
  </div>
  );
};

export default Loader;
