import React from 'react';
import './style.css';
import FormularioCadastro from '../../components/FormularioCadastro';

function PaginaCadastro() {
    return (
        <div className="pagina-cadastro">
            <div className="cabecalho">
                <h2 className="titulo">Cadastro de Jogador</h2>
                <p className="descricao">Preencha os dados abaixo para cadastrar um novo jogador.</p>
            </div>

            <div className="conteudo">
                <FormularioCadastro />
            </div>

            <div className="rodape">
                &copy; 2025 Seu Clube. Todos os direitos reservados.
            </div>
        </div>
    );
}

export default PaginaCadastro;
