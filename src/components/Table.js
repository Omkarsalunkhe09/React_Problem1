import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./table.css";

export const Table = () => {
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState([]);

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
    <div
      style={{
        marginLeft: "100px",
        marginTop: "50px",
      }}
    >
      <table>
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
                <td>{e.id}</td>
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
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
