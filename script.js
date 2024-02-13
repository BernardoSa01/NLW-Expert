const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de alto nível",
      "Um tipo de café",
      "Um sistema operacional",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variável myVar;",
      "const myVar;",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado que armazena um único valor",
      "Um tipo de dado que armazena uma coleção de valores",
      "Uma função em JavaScript",
    ],
    correta: 1
  },
  {
    pergunta: "Como você escreve um comentário em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "' Este é um comentário",
      "<!-- Este é um comentário -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [
      "=",
      ":",
      "==",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado de 10 + '2' em JavaScript?",
    respostas: [
      "102",
      "12",
      "20",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Diretório de Módulos",
      "Documento de Objetos Móveis",
      "Modelo de Objeto de Documento",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
    respostas: [
      "log()",
      "print()",
      "display()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
    respostas: [
      "function",
      "def",
      "função",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: [
      "parseInt()",
      "stringToNumber()",
      "convertToInt()",
    ],
    correta: 0
  }
];

/* Exemplo de como acessar uma pergunta:
console.log(perguntas[0]); */

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta 
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)

}

quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}


