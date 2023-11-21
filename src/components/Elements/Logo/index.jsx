import { Link } from "react-router-dom";
import { logoImage } from "../../../assets/images";

const Logo = ({ styles }) => {
  return (
    <Link to="/ecommerce-shop.co/">
    <div className={`scale-75 xl:scale-100 origin-left cursor-pointer ${styles}`}>
      <img src={logoImage} alt="logo" />
    </div>
    </Link>
  );
};

export default Logo;
