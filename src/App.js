import "./App.css";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { Table } from "./components/Table";
import { Country } from "./components/country";
import { City } from "./components/City";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Table />}></Route>
        <Route path={"/Country"} element={<Country />}></Route>
        <Route path={"/city"} element={<City />}></Route>
      </Routes>
    </div>
  );
}

export default App;
