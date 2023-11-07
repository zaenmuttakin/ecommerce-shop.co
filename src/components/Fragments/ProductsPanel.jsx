import Button from "../Elements/Button";
import CardProduct from "../Elements/CardProduct";
const ProductsPanel = ({ tittle, productList }) => {
  return (
    <section className="flex flex-col gap-10 xl:gap-14 py-10 xl:py-16">
      <h2 className="main-container text-center">{tittle}</h2>
      {/* scrolling card */}
      <div className="full-container flex gap-6  overflow-x-scroll hide-scroll-bar">
        {productList.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </div>
      {/* button */}
      <div className="main-container flex justify-center">
        <Button
          type="secondary"
          label="view all"
          styles="min-w-full xl:min-w-fit"
          icon="ic-arrow"
        />
      </div>
    </section>
  );
};

export default ProductsPanel;
