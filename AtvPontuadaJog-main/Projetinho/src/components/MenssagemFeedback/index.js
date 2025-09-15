import './style.css';

function MenssagemFeedback({mensagem, tipo, visivel, onclose}) {
    if (!visivel) {
        return null;
    }

    return (
        <div 
            id = 'mensagem'
            className={`menssagem ${tipo} visivel`}
            onClick={onclose}
        >
            {mensagem}
        </div>

    )
}

export default MenssagemFeedback;