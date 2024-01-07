import { brandsImage } from "../../assets/images";
const Brands = () => {
  return (
    <section className="bg-black-100 py-8 xl:py-10">
      <div className="main-container flex flex-wrap lg:flex-nowrap justify-evenly gap-y-5">
        {brandsImage.map((image, i) => (
          <img key={i} src={image} alt={`brands-${i}`} className="h-8 w-1/3 lg:w-fit xl:h-10" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
