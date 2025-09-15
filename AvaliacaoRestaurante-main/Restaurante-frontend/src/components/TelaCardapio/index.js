import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TelaCardapio() {
  const [pratos, setPratos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://avaliacaorestaurante-backend.onrender.com/pratos")
      .then((res) => {
        console.log("Pratos recebidos:", res.data); // DEBUG
        setPratos(res.data);
      })
      .catch((err) => console.error("Erro ao carregar pratos:", err));
  }, []);

  return (
    <div className="cardapio-wrapper">
      <button
        className="btn-voltar-home"
        onClick={() => navigate("/")}
        aria-label="Voltar para a Home"
        title="Voltar para a Home"
      >
        <FaHome />
      </button>

      <h2>Cardápio</h2>
      <div className="grid-pratos">
        {pratos.map((prato) => (
          <div className="card-prato" key={prato.id}>
            <img src={prato.urlImagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p className="descricao">{prato.descricao}</p>
            <p className="preco">R$ {parseFloat(prato.preco).toFixed(2)}</p>
            <p className="categoria">Categoria: {prato.categoria}</p>
            <p className="disponibilidade">Disponibilidade: {prato.disponibilidade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaCardapio;
