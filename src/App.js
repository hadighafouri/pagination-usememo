import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./component/Pagination";

export default function App() {
  const [data, setData] = useState([]);
  const pageSize = 4;
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    const dataRes = axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
      setPageNum(1);
      return res;
    });
  }, []);

  const getPageData = () => {
    const firstRecInx = (pageNum - 1) * pageSize;
    const lastRecInx = firstRecInx + pageSize;
    return data.slice(firstRecInx, lastRecInx);
  };

  const currentPageData = getPageData();

  return (
    <div className="App">
      <h1>Simple Pagination with useMemo()</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((el, index) => {
              return (
                <tr key={index}>
                  <th>{el.title}</th>
                  <th>{el.description}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalRecNum={data?.length}
          pageSize={pageSize}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </div>
    </div>
  );
}
