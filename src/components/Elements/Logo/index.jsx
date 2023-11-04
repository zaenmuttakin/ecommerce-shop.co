import { logoImage } from "../../../assets/images";

const Logo = ({styles}) => {
  return (
    <a href="#" className={`scale-75 xl:scale-100 ${styles}`}>
      <img src={logoImage} alt="logo" />
    </a>
  );
};

export default Logo;
