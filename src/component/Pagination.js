const Pagination = ({ totalRecNum, pageSize, pageNum, setPageNum }) => {
  const totalPageCount = Math.ceil(totalRecNum / pageSize);
  const pageList = [...Array(totalPageCount)].map((_, i) => {
    return (
      <li
        key={i + 1}
        className={i + 1 === pageNum ? "active" : null}
        onClick={() => setPageNum(i + 1)}
      >
        {i + 1}
      </li>
    );
  });

  pageNum < totalPageCount &&
    pageList.push(<li onClick={() => setPageNum((num) => ++num)}>＞</li>);
  pageNum > 1 &&
    pageList.unshift(<li onClick={() => setPageNum((num) => --num)}>＜</li>);

  return (
    <div>
      <ul className="page-range-container">{pageList}</ul>
    </div>
  );
};

export default Pagination;
