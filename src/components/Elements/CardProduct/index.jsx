import { Link } from "react-router-dom";
import { Usd } from "../Curency";
import StarRating from "../StarRating";

const CardProduct = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image group">
        <img
          src={product.variant[0].image[0]}
          alt={product.name}
          className="card-image-inner"
        />
        <div className="card-image-overlay">
          <Link to={`/ecommerce-shop.co/${product.id}`} className="-rotate-45">
            <i className="ic-arrow tx-5 text-white hover:text-black-100" />
          </Link>
        </div>
      </div>
      <Link to={`/ecommerce-shop.co/${product.id}`} className="card-tittle">
        {product.name}
      </Link>
      <div className="card-rate flex gap-5 items-center">
        <div className="rate flex gap-2">
          <StarRating rating={product.rating} />
          <p className="tx-1">
            {product.rating}/<span className="text-black-60">5</span>
          </p>
        </div>
      </div>

      <div className="card-price">
        {product.discount && (
          <>
            <p className="price">
              <Usd>{(product.price * (100 - product.discount)) / 100}</Usd>
            </p>
            <p className="price-discount">
              <Usd>{product.price}</Usd>
            </p>
            <p className="discount">{`-${product.discount}%`}</p>
          </>
        )}

        {!product.discount && (
          <>
            <p className="price">
              <Usd>{product.price}</Usd>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
