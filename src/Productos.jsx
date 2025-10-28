import { useState } from "react";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);


  return (
    <div className="productos-container">
      <h2 className="productos-title">Lista de productos</h2>
      <div className="productos-grid">
        {/* // Estructura sugerida para mostrar cada producto:
        // <div className="producto">
        //   <img src={producto.image} alt={producto.title} />
        //   <h3>{producto.title}</h3>
        //   <p className="categoria">Categoría: {producto.category}</p>
        //   <p className="precio">${producto.price}</p>
        //   <p className="rating">⭐ {producto.rating.rate} ({producto.rating.count} reseñas)</p>        
        // </div> */}

      </div>
    </div>
  );
}
