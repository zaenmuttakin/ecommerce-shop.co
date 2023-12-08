import { Link } from "react-router-dom";
import { logoImage } from "../../../assets/images";

const Logo = ({ styles }) => {
  return (
    <div
      className={`scale-75 xl:scale-100 origin-left cursor-pointer ${styles}`}
    >
      <Link to="/ecommerce-shop.co/">
        <img src={logoImage} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
