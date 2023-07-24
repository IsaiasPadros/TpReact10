import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PeliculasForm from "./components/PeliculasForm";
import "./App.css";

function App() {
  return (
    <div className="container app-container">
      <h1 className="mt-3">Películas</h1>
      <PeliculasForm />
    </div>
  );
}

export default App;
