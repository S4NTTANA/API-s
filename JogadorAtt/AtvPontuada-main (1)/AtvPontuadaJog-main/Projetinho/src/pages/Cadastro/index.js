import React from 'react';
import FormularioCadastro from "../../components/FormularioCadastro";
import './style.css'; 

function PaginaCadastro() {
    return (
        <div className="pagina-cadastro">
            <header className="cabecalho">
                <a className="titulo">Cadastro de Jogadores</a>
                <p className="descricao">Preencha as informações para cadastrar um novo jogador.</p>
            </header>
            <main className="conteudo">
                <FormularioCadastro />
            </main>
            <footer className="rodape">
                <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default PaginaCadastro;
