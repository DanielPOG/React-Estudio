import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Texto } from "./Saludar";
import Producto, { Nav } from "./Producto";

const root = ReactDOM.createRoot(document.getElementById("root"));
const texto = "Hola mundo desde index";
root.render(
  <>
    <Producto
      texto={texto}
      numero={10}
      booleano={true}
      objeto={{ nombre: "pepe", edad: 20 }}
      arreglo={[1, 2, 3]}
    />
  </>
);
