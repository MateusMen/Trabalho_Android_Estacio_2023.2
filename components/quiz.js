import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {useState} from 'react';

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 25,
    },
});

interface Props {
    pergunta: string;
    respostas: string[];
    solucao: string;
    onSolucao: (solucao: string) => void;
}

const perguntas = [
  {
    pergunta:'Em uma pesquisa sobre salários de funcionários de uma empresa, foram coletados os seguintes valores mensais: R$ 3.000, R$ 3.500, R$ 4.200, R$ 4.800 e R$ 25.000. Após a análise inicial, o professor identificou um valor que pode ser considerado um outlier. Qual dos seguintes é o valor que mais provavelmente representa um outlier?',
    respostas:['R$25.000','R$3.000','R$3.500','R$4.200','R$4.800'],
    solucao:'R$25.000'
  },
  {
    pergunta:'Um assistente virtual baseado em inteligência artificial foi projetado para responder perguntas de forma precisa. Durante um teste, o assistente respondeu corretamente a 80% das perguntas. Qual é a probabilidade de o assistente responder corretamente a próxima pergunta?',
    respostas:['20%','50%','60%','10%','80%'],
    solucao:'80%'
  },
  {
    pergunta:'Todas as afirmativas estão corretas, exceto:',
    respostas:['Conjunto unitário é aquele formado por dois elementos.','Conjunto Universo é aquele que possui todos os elementos no contexto atual. Denotado por U','Conjunto vazio é o conjunto que não possui elemento algum.','Conjunto Infinito é aquele que possui uma quantidade ilimitada de elementos','Conjunto finito é aquele em que conseguimos contar os elementos do início ao fim.'],
    solucao:'Conjunto unitário é aquele formado por dois elementos.'
  },
  {
    pergunta:"A simplificação da fração (8! + 9!)/ 6! resulta no valor: ",
    respostas:['780','718','216','92','560'],
    solucao:'560'
  },
];

const Pergunta: React.FC<Props> = (
    { pergunta, respostas, onSolucao }) => {
    return (
              <View>
              <Text>{pergunta}</Text>
                {respostas.map((choice) => 
                    <TouchableOpacity  
                      onPress={() => onSolucao(choice)} 
                      style={{backgroundColor: '#ff3355', margin: 16, borderRadius: 8, padding: 16}}  
                    >
                      <Text>{choice}</Text>
                    </TouchableOpacity>
                )}
                </View>
    );
};

const Quiz: React.FC = () => {
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [score, setScore] = useState(0);
  
    const processaSolucao = (solucao: string) => {
        if (solucao === perguntas[perguntaAtual].solucao) {
            setScore(score + 1);
        }

        const nextPergunta = perguntaAtual + 1;
        if (nextPergunta < perguntas.length) {
            setPerguntaAtual(nextPergunta);
        } else {
            alert(`Quiz terminado, seu score: ${score}/${perguntas.length}`);
            setPerguntaAtual(0);
            setScore(0);
        }

    };

    return (
        <View style={{paddingVertical: 32, paddingHorizontal: 16}}>
            <Text style={styles.titleText}>Quiz App</Text>
            {perguntaAtual < perguntas.length ? (
                <Pergunta
                    pergunta={perguntas[perguntaAtual].pergunta}
                    respostas={perguntas[perguntaAtual].respostas}
                    solucao={perguntas[perguntaAtual].solucao}
                    onSolucao={processaSolucao}
                />
            ):"null"
            }
        </View>
    )
}

export default Quiz;