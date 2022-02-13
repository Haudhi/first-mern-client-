import React from "react";
import "./App.css";
import BasicTable from "./component/show/show";
import BasicTextFields from "./component/create/create";

function App() {
  return (
    <div className="App">
      <BasicTable />
      <br />
      <BasicTextFields />
    </div>
  );
}

export default App;
