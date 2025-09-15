import { useNavigate } from "react-router-dom";
import ListaDeUsuarios from "../../components/ListaDeUsuarios";



function PaginaListaUsuarios() {
    const navigate = useNavigate();

    return (
        <div className="pagina-lista-usuarios">
            <div className="container">
                <h2>Lista de Usuários</h2>
                <button className="link-voltar" onClick={() => navigate('/')}>
                    Cadastrar usuários
                </button>

                <div className="lista-usuarios">
                    <ListaDeUsuarios /> {/* Cada usuário deve ser um card dentro do componente */}
                </div>
            </div>
        </div>
    );
}

export default PaginaListaUsuarios;
