const Button = ({ type = "primary", label = "button", styles, icon }) => {
  let styleBtn = "";
  let styleLabel = "";
  switch (type) {
    case "primary":
      styleBtn =
        " bg-black-100 hover:bg-black-100/0 hover:outline hover:outline-2";
      styleLabel = "text-white group-hover:text-black-100";
      break;
    case "secondary":
      styleBtn = "bg-black-trasparent outline outline-2 outline-black-10";
      styleLabel = "text-black-100";
      break;
  }

  return (
    <button
      className={`group relative flex justify-center gap-2 rounded-full pr-12 hover:pr-14 pl-12 py-4  overflow-hidden transition-all ease-in -z-0 ${styleBtn} ${styles}
       `}
    >
      <a href="#" className={`tx-2 font-medium capitalize ${styleLabel}`}>
        {label}
      </a>
      <div className="">
        <i
          className={`${icon} tx-3 absolute -bottom-14 translate-y-1/2 text-black transition-all ease-in-out duration-300 delay-100 group-hover:bottom-1/2 group-hover:translate-y-1/2 `}
        />
      </div>
    </button>
  );
};

export default Button;
