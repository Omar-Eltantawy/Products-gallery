import { useSelector } from 'react-redux';

const Footer = () => {
    const {isDark}= useSelector((state)=>state.theme);
  return (
    <footer className={`${isDark ? "dark":""} bg-primary  dark:bg-primary-dark text-white py-4 text-center mt-8`}>
        &copy; 2025 Products Gallery. All rights reserved.
    </footer>
  )
}

export default Footer
