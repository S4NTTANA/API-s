import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './style.css';
import banner from '../../assets/images/arsenal-football-club.svg';

function BemVindo() {
    const navigate = useNavigate(); 

    return (
        <div className="pagina-bem-vindo">
            <div className="conteudo">
                <div className="banner-container">
                    <img src={banner} alt="Logo do time" className="imagem-banner" />
                </div>

                <div className="texto-introducao">
                    <h1 className="titulo">⚽ Dê Vida à Sua História no Futebol!</h1>
                    <p className="descricao">
                        Registre cada momento e conquiste o reconhecimento que você e seu time merecem.
                    </p>
                </div>

                <div className="botoes">
                    <button 
                        className="botao-cadastro" 
                        onClick={() => navigate('/cadastro')}
                    >
                        Iniciar Cadastro
                    </button>
                    <a href="#" className="botao google">Baixar na Google Play</a>
                </div>
            </div>

            <footer className="rodape">
                <nav className="menu">
                    <a href="#inicio">Início</a>
                    <a href="#acessorados">Acessorados</a>
                    <a href="#funcionalidades">Funcionalidades</a>
                    <a href="#quem-somos">Quem somos</a>
                </nav>
            </footer>
        </div>
    );
}

export default BemVindo;
