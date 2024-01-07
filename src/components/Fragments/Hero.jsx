import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Hero = ({ tittle, text, stats, img }) => {
  return (
    <section className="bg-gray-10 overflow-hidden">
      <div className="main-container h-full xl:h-[85vh] flex flex-col gap-10 lg:flex-row items-center pt-10">
        <div className="flex-1 flex flex-col gap-8 xl:gap-10">
          <h1>{tittle}</h1>
          <p className="tx-2 text-black-60">{text}</p>
            <Button
              type="primary"
              label="shop now"
              styles="max-w-full xl:max-w-fit"
              icon="ic-arrow -rotate-45"
              to="/ecommerce-shop.co/category"
            />
          <div className="flex flex-wrap justify-center gap-y-5 max-w-fit mt-4 mb-10 lg:mb-0">
            {stats.map((stat, i) => (
              <div
                className={`${
                  i === 0
                    ? "pr-5 xl:10"
                    : i === 2
                    ? "px-5 xl:px-10 xl:border-l"
                    : " px-5 border-l xl:px-10"
                } border-black-10`}
                key={i}
              >
                <p className="tx-5 font-bold">{stat.number}</p>
                <p className="tx-2 text-black-60 capitalize">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 self-end overflow-hidden hidden lg:block">
          <img src={img} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
