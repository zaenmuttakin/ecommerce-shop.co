import Button from "../components/Elements/Button"

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[100vh]">
        <h2 className=" leading-3">sorry 😢</h2>
        <p className="tx-5 capitalize leading-3 xl:leading-normal mb-5">This page not yet available</p>
        <Button
            type="primary"
            label="go back"
            styles="max-w-full xl:max-w-fit"
            icon="ic-arrow -rotate-45"
            to={"/ecommerce-shop.co/"}
          />
    </div>
  )
}

export default ErrorPage