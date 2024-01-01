const Budge = ({thisPage}) => {
    return (
      <div className="flex gap-2 py-6 items-center text-black-60">
        <p className="tx-1 capitalize">home</p>
        <i className="ic-chevron -rotate-90" />
        <p className="tx-1 capitalize">{thisPage}</p>
      </div>
    );
  };

  export default Budge;