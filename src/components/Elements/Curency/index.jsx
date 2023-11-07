const Usd = ({ children }) => {
  if (children > 0) {
    return (
      <span>
        {children.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        })}
      </span>
    );
  }
};

export {
    Usd
}