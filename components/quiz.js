import { Text, SafeAreaView, StyleSheet } from 'react-native';

import {useState} from 'react';

interface Props {
    Pergunta: string;
    Respostas: string[];
    Solucao: string;
    OnSolucao: (Solucao: string) => void;
}

const Perguntas = [
  {
    Pergunta:'Em uma pesquisa sobre salários de funcionários de uma empresa, foram coletados os seguintes valores mensais: R$ 3.000, R$ 3.500, R$ 4.200, R$ 4.800 e R$ 25.000. Após a análise inicial, o professor identificou um valor que pode ser considerado um outlier. Qual dos seguintes é o valor que mais provavelmente representa um outlier?',
    Respostas:['R$25.000','R$3.000','3.500','R$4.200','R$4.800'],
    Solucao:'R$25.000'
  },
  {
    Pergunta:'Um assistente virtual baseado em inteligência artificial foi projetado para responder Perguntas de forma precisa. Durante um teste, o assistente respondeu corretamente a 80% das Perguntas. Qual é a probabilidade de o assistente responder corretamente a próxima Pergunta?',
    Respostas:['20%','50%','60%','10%','80%'],
    Solucao:'80%'
  },
];

const Quiz: React.FC = () => {
    const [PerguntaAtual, setPerguntaAtual] = useState(0);
    const [score, setScore] = useState(0);
  
    const processaSolucao = (Solucao: string) => {
        if (Solucao === Perguntas[PerguntaAtual].Solucao) {
            setScore(score + 1);
        }
  
        const nextPergunta = PerguntaAtual + 1;
        if (nextPergunta < Perguntas.length) {
            setPerguntaAtual(nextPergunta);
        } else {
            alert(`Quiz terminado, seu score: ${score}/${Perguntas.length}`);
        }
    };
    
    return (
        <div>
            <h1 className="text-center">Quiz App</h1>
            {PerguntaAtual < Perguntas.length ? (
                <Pergunta
                    Pergunta={Perguntas[PerguntaAtual].Pergunta}
                    Respostas={Perguntas[PerguntaAtual].Respostas}
                    Solucao={Perguntas[PerguntaAtual].Solucao}
                    OnSolucao={processaSolucao}
                />
            ) : "null"
            }
        </div>
    )
}

const Pergunta: React.FC<Props> = (
    { Pergunta, Respostas, Solucao, OnSolucao }) => {
    return (
        <div className="d-flex 
                        justify-content-center 
                        align-center 
                        text-center 
                        flex-column">
            <h2 className="">{Pergunta}</h2>
            <div className="">
                {Respostas.map((choice) => (
                    <button className="btn btn-success m-2" 
                        onClick={() => OnSolucao(choice)}>
                                        {choice}</button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
