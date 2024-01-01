import { Link } from "react-router-dom";

const Button = ({
  type = "primary",
  label = "button",
  styles,
  styleLbl,
  icon,
  to,
  onClk,
  showIcon = true,
}) => {
  let styleBtn = "";
  let styleLabel = "";
  switch (type) {
    case "primary":
      styleBtn =
        " bg-black-100 hover:bg-black-100/0 hover:outline hover:outline-2 pr-12 hover:pr-14 pl-12 py-4";
      styleLabel = "tx-2 text-white group-hover:text-black-100";
      break;
    case "primary-md":
      styleBtn =
        " bg-black-100 hover:bg-black-100/0 hover:outline hover:outline-2 pr-10 hover:pr-12 pl-10 py-2";
      styleLabel = "tx-2 text-white group-hover:text-black-100";
      break;
    case "secondary":
      styleBtn =
        "bg-black-trasparent outline outline-2 outline-black-10 pr-12 hover:pr-14 pl-12 py-4";
      styleLabel = "tx-2 text-black-100";
      break;
    case "white":
      styleBtn =
        "bg-gray-20 outline outline-2 outline-black-10 pr-12 hover:pr-14 pl-12 py-3";
      styleLabel = "tx-2 text-black-100";
      break;
    case "size-button":
      styleBtn =
        "px-4 py-3 rounded-full cursor-pointer smooth";
      styleLabel = "tx-1 ";
      break;
    case "pagination":
      styleBtn =
        "px-4 py-3 rounded-lg cursor-pointer smooth bg-black-10 hover:bg-black-100";
      styleLabel = "tx-1 text-black-100 group-hover:text-white";
      break;
    case "pagination-item":
      styleBtn =
        "px-4 py-3 rounded-lg cursor-pointer smooth bg-tranparent hover:bg-black-10";
      styleLabel = "tx-1 text-black-100";
      break;
  }

  return (
    <button
      onClick={onClk}
      className={`group relative flex justify-center gap-3 rounded-full overflow-hidden transition-all ease-in -z-0 ${styleBtn} ${styles}
       `}
    >
      <Link to={to} className={`font-medium capitalize smooth ${styleLabel} ${styleLbl}`}>
        {label}
      </Link>
      <div className={`${showIcon ? "block" : "hidden"}`}>
        <i
          className={`${icon} tx-3 absolute -bottom-14 translate-y-1/2 text-black transition-all ease-in-out duration-300 delay-100 group-hover:bottom-1/2 group-hover:translate-y-1/2 `}
        />
      </div>
    </button>
  );
};

export default Button;
