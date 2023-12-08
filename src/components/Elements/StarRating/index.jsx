const StarRating = ({ rating = 4.5, styles }) => {
  let counts = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    counts.push(i);
  }
  return (
    <div className={styles}>
      {counts.map((c) => (
        <i className="ic-star text-yellow" key={c} />
      ))}
      {rating - Math.floor(rating) > 0 && (
        <i className="ic-half-star text-yellow" />
      )}
    </div>
  );
};
export default StarRating;
