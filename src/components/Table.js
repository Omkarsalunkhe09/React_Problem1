import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./table.css";

export const Table = () => {
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState([]);
  const [sort, sortData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/City`).then((res) => {
      setData(res.data);
    });
  }, [handle]);

  const handleDel = (id) => {
    axios.delete(`http://localhost:3001/City/${id}`).then((res) => {
      setHandle(res.data);
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div>
          <button
            onClick={() => {
              const sorted = data.sort((a, b) => {
                // console.log(data.sort((a, b) => a.population - b.population));
                return a.population - b.population;
              });
              sortData([...sorted]);
            }}
          >
            Asc population
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const sorted = data.sort((a, b) => {
                return b.population - a.population;
              });
              sortData([...sorted]);
            }}
          >
            Dec population
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const sorted = data.sort((a, b) => {
                if (a.country < b.country) {
                  return -1;
                }
              });
              sortData([...sorted]);
            }}
          >
            Filter By country
          </button>
        </div>
      </div>
      <table
        style={{
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td className="id">{e.id}</td>
                <td className="country">{e.country}</td>
                <td className="city">{e.city}</td>
                <td className="pop">{e.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDel(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
