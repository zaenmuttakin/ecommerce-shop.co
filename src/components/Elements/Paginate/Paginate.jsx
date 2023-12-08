const Paginate = ({ total, perPage, curPage, handlePage }) => {
  const paginateNums = [];
  const maxPage = Math.ceil(total / perPage);
  for (let i = 1; i <= maxPage; i++) {
    paginateNums.push(i);
  }

  const handlePrev = () => {
    if (curPage > 1) {
      handlePage(curPage - 1);
    }
  }
  const handleNext = () => {
    if (curPage < maxPage) {
      handlePage(curPage + 1);
    }
  }
  return (
    <ul className="paginate gap-2">
      <li className="flex-1 paginate-btn" onClick={handlePrev}>
        <i className="tx-3 ic-arrow rotate-180" />
        <p className="tx-2 truncate">Previous</p>
      </li>
      <li className="flex-1 paginate-num-page">
        {paginateNums.map((num) => (
          <p key={num} className={`paginate-num ${num === curPage && "bg-black-10"}`} onClick={() => handlePage(num)}>{num}</p>
        ))}
      </li>
      <li className="flex-1 paginate-btn" onClick={handleNext}>
        <p className="tx-2 truncate">Next</p>
        <i className="tx-3 ic-arrow" />
      </li>
    </ul>
  );
};

export default Paginate;
