import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";

function TelaCadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "Entrada",
    disponibilidade: "Em estoque",
    urlImagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const pratoData = {
        ...form,
        preco: parseFloat(form.preco), // importante para não causar erro de validação
      };

      const response = await axios.post(
        "https://avaliacaorestaurante-backend.onrender.com/pratos",
        pratoData
      );

      alert("Prato cadastrado com sucesso!");
      console.log("Resposta:", response.data);

      setForm({
        nome: "",
        descricao: "",
        preco: "",
        categoria: "Entrada",
        disponibilidade: "Em estoque",
        urlImagem: "",
      });
    } catch (erro) {
      let erroMsg = "Erro ao conectar ao servidor.";
      if (erro.response && erro.response.data) {
        erroMsg = erro.response.data.mensagem || erroMsg;
        if (erro.response.data.erros) {
          erroMsg += " " + Object.values(erro.response.data.erros).join(", ");
        }
      }
      alert(erroMsg);
      console.error("Erro ao cadastrar prato:", erro);
    }
  };

  return (
    <form className="form-cadastro" onSubmit={handleSubmit} noValidate>
      <h2>Cadastro de Prato</h2>

      <div className="input-group">
        <label htmlFor="nome">Nome do Prato</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="input-row">
        <div className="input-group small">
          <label htmlFor="preco">Preço (R$)</label>
          <input
            id="preco"
            name="preco"
            type="number"
            step="0.01"
            min="0"
            value={form.preco}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group small">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
          >
            <option value="Entrada">Entrada</option>
            <option value="Prato Principal">Prato Principal</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Bebida">Bebida</option>
          </select>
        </div>
      </div>

      <div className="input-row">
        <div className="input-group small">
          <label htmlFor="disponibilidade">Disponibilidade</label>
          <select
            id="disponibilidade"
            name="disponibilidade"
            value={form.disponibilidade}
            onChange={handleChange}
          >
            <option value="Em estoque">Em estoque</option>
            <option value="Esgotado">Esgotado</option>
          </select>
        </div>

        <div className="input-group small">
          <label htmlFor="urlImagem">URL da Imagem</label>
          <input
            id="urlImagem"
            name="urlImagem"
            type="url"
            value={form.urlImagem}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Salvar Prato
      </button>

      <div className="botoes-navegacao">
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate("/")}
        >
          Voltar para Home
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate("/cardapio")}
        >
          Ir para Cardápio
        </button>
      </div>
    </form>
  );
}

export default TelaCadastro;
