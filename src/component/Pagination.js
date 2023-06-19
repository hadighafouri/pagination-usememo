const Pagination = ({ totalRecNum, pageSize, pageNum, setPageNum }) => {
  const totalPageCount = totalRecNum / pageSize;
  let pageList = [];
  for (let i = 0; i < totalPageCount; i++) {
    const el = (
      <li
        key={i + 1}
        className={i + 1 === pageNum ? "active" : null}
        onClick={() => setPageNum(i + 1)}
      >
        {i + 1}
      </li>
    );

    pageList = [...pageList, el];
  }

  return (
    <div>
      <ul className="page-range-container">{pageList}</ul>
    </div>
  );
};

export default Pagination;
