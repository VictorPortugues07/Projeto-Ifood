import React from "react";
import "./BarraDePesquisa.css";

function BarraDePesquisa() {
    return (
        <div className="search-bar-container">
            <input 
                type="text"
                className="search-input"
                placeholder="Buscar produtos, restaurantes..."
            />
            <button className="search-button">
                Buscar
            </button>
        </div>
    );
}

export default BarraDePesquisa;