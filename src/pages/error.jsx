import { Link } from "react-router-dom"
import Button from "../components/Elements/Button"


const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[50vh]">
        <h2>Page Not Found!</h2>
        <Link to="/ecommerce-shop.co/">
        <Button
            type="primary"
            label="go back"
            styles="max-w-full xl:max-w-fit"
            icon="ic-arrow -rotate-45"
          />
        </Link>
    </div>
  )
}

export default ErrorPage