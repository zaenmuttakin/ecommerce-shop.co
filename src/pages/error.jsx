import { Link } from "react-router-dom"
import Button from "../components/Elements/Button"


const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[100vh]">
        <h2>Page Not Found!</h2>
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