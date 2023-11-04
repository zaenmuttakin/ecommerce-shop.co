const InputField = ({ placeholder, icon, alignIcon, styles, click =()=>{} }) => {
  return (
    <div className={`relative ${styles} `}>
      <input
        type="text"
        className={`w-full rounded-full tx-2 py-3 bg-gray-20 ${
          alignIcon === "left"
            ? "pl-16 pr-8"
            : alignIcon === "right"
            ? "pl-8 pr-16"
            : "px-8"
        }`}
        placeholder={placeholder}
      />
      <button
        className={`absolute top-1/2 -translate-y-1/2  ${
          alignIcon === "left"
            ? "left-4"
            : alignIcon === "right"
            ? "right-4"
            : "hidden"
        }`}
        onClick={() => click()}
      >
        <i className={`${icon} tx-3 text-black-40 leading-tight`} />
      </button>
    </div>
  );
};

export default InputField;
