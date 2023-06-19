import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./component/Pagination";

export default function App() {
  const [data, setData] = useState([]);
  const pageSize = 4;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    const dataRes = axios.get("https://dummyjson.com/products").then((res) => {
      // res.data.products.length > 1 ?
      setData(res.data.products);
      return res;
    });
  }, []);

  const currentPageData = useMemo(() => {
    console.log("useMemo run");
    const firstRecInx = (pageNum - 1) * pageSize;
    const lastRecInx = firstRecInx + pageSize;
    return data.slice(firstRecInx, lastRecInx);
  }, [data, pageNum]);

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
            {currentPageData.map((el) => {
              return (
                <tr>
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
