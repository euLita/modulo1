const X_CLASS = 'x'; /* essa constante armazena a classe CSS associada ao simbolo 'X' no jogo da velha */
const CIRCLE_CLASS = 'circle'; /* essa constante armazena a classe CSS associada ao simbolo 'O' no jogo */
const WINNING_COMBINATIONS = [ /* essa matriz de arrays representa todas as combinacoes possiveis de celulas que resultam em uma vitoria */
    [0, 1, 2],    /* linha 1 */
    [3, 4, 5],    /* linha 2 */
    [6, 7, 8],    /* linha 3 */
    [0, 3, 6],    /* coluna 1 */
    [1, 4, 7],    /* coluna 2 */
    [2, 5, 8],    /* coluna 3 */
    [0, 4, 8],    /* diagonal 1 */
    [2, 4, 6]     /* diagonal 2 */
]; /* acima, definicao de constantes */

/* Temos uma nodeList(colecao de nos) obtidos atraves do metodo 'document.querySelectorAll' */
const cellElements = document.querySelectorAll('[data-cell]'); /** esta variavel armazena uma nodeList de todos elementos HTML que possuem o atributos 'data-cell'. Itera sobre todas as celulas do tabuleiro */
const board = document.getElementById('game');/**  armazena a referencia ao elemento HTML com o ID 'game'. Conteiner principal que envolve todas as celulas do tabuleiro. Manipula o tabuleiro como um todo, como limpar ou reiniciar o jogo. */
const winningMessageElement = document.getElementById('winningMessage');/** armazena a referencia ao elemento HTML com o ID 'winningMessage'*/
const winningMessageTextElement = document.getElementById('winningMessageText');/** armazena a referencia ao HTML dentro de 'winningMessageElement' */
const restartButton = document.getElementById('restartButton');/** Evento de clique. Armazena a referencia ao HTML com o ID 'restartButton'*/
let circleTurn;/** variavel global, define de quem é o turno no jogo(circle ou X) */

startGame(); /** inicio do jogo */

restartButton.addEventListener('click', startGame); /** Evento de reinicio */

function startGame() { 
    circleTurn = false; /** inicia a variavel 'circleTurn' como 'false' indicando que e o turno do jogador 'X' */
    cellElements.forEach(cell => { /** itera sobre cada elemento na NodeList 'cellElements'. Para cada celula 'cell': */
        cell.classList.remove(X_CLASS, CIRCLE_CLASS); /** remove as classes CSS 'X_CLASS' */
        // cell.classList.remove(CIRCLE_CLASS); /** remove a classe CSS 'CIRCLE_CLASS' */
        cell.removeEventListener('click', handleClick); /** remove o evento de clique anteriormente associado a funcao 'handleClick' */
        cell.addEventListener('click', handleClick, { once: true }); /** adiciona um novvo evento de click, configurado para ser executado apenas uma vez */
    });
    setBoardHoverClass(); /** chama uma funcao que define classes CSS no tabuleiro para indicar vizualmente qual jogador esta prestes a jogar, como mudar a cor de fundo. */
    winningMessageElement.classList.remove('show'); /** remove a classe CSS 'show' do elemento 'winningMessageElement' */
}

function handleClick(e) { /** chamada sempre que um jogador clica em uma celula do tabuleiro */
    const cell = e.target; /** obter a celula clicada, 'e.target' é a celula especifica que foi clicada, obtida pelo evento de clique */
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS; /** expressao condicional onde 'condition' sera avaliada, se 'expr1' for verdadeira será execuatada, caso contrario 'expr2'; definir a classe atual do jogador */
    placeMark(cell, currentClass); /** coloca o simbola('X' ou 'O') na celula clicada */
    if (checkWin(currentClass)) { /** verificando se jogador atual venceu */
        endGame(false); /** chamada para terminar o jogo se houver ganhador */
    } else if (isDraw()) { /** se nao houver um vencedor a funcao 'isDraw' verifica se todas as celulas foram preenchidas sem um vencedor, indicando empate */
        endGame(true); / ** chamada para terminar o jogo se houver empate */
    } else { /** troca de turno e atualizar o tabuleiro */
        swapTurns(); /** se houver um vencedor ou empate a funcao 'swapTurns' é chamada para alternar o turno para proximo jogador */
        setBoardHoverClass(); /** atualiza a classe do tabuleiro para mostrar qual proximo jogador a jogar */
    }
}

/** funcao fundamental para concluir o jogo*/
function endGame(draw) { /** fim do jogo, funcao é chamada quando ha um vencedor ou empate */
    if (draw) { /** parametro 'draw' booleano que indica se o jogo terminou em empate */
        winningMessageTextElement.innerText = 'Draw!'; /** se 'draw' for 'true' a funcao define o texto do elemento 'winningMessageTextElement' para 'draw' */
    } else { /** caso haja um vencedor */
        winningMessageTextElement.innerText = `${circleTurn ? "'O' " : "'X' "} venceu!`; /** se 'draw' for 'false' a funcao define o texto do elemento 'winningMessageTextElement' para indicar o vencedor; a expressão '${circleTurn ? "O's" : "X's"}', usa usa o operador ternario para determinar o vencedor com base na variavel 'circleTurn', se 'circleTurn' for 'true' significa que o jogador 'O' venceu, e o texto 'O venceu!' e o mesmo vale para o 'X' */
    }
    winningMessageElement.classList.add('show'); /** exibir a mensagem de fim de jogo. Adicione a classe 'show' ao elemento 'winningMessageElement', o que faz com que a mensagem de vitoria ou empate seja exibida */
}

function isDraw() { /** verifica se o jogo terminou em empate, faz percorrer todas a celulas do tabuleiro 'cellElements' e verifica se cada celula contem a classe 'X_CLASS' ou 'CIRCLE_CLASS' */
    return [...cellElements].every(cell => { /**  '[...cellElements]' converte essa coleçao em um array, 'every(cell => {...})' itera sobre cada celula no array */
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS); /** verifica se contem a classe de 'X' ou 'Circle', se todas as celulas contem uma dessas classes 'every' retorna 'true', indicando que jogo empatou */
    });
}

function placeMark(cell, currentClass) { /** essa funcao é usada para marcar uma celula com 'X' ou com 'O'; adiciona a classe especificada ('currentClass') a uma celula especifica ('cell') */
    cell.classList.add(currentClass); /** adiciona a classe a celula, efetivamente marcando-a */
}

function swapTurns() { /** alterna o turno entre os jogadores */
    circleTurn = !circleTurn; /** vareavel booleana que indica de quem é o turno. Se 'circleTurn' for 'true' é turno do 'O', do contrario, 'false' é do 'X' */
}

function setBoardHoverClass() { /** atualiza a classe do tabuleiro para refletir de quem é o turno atual, alterando a aparencia do tabuleiro */
    board.classList.remove(X_CLASS, CIRCLE_CLASS); /** 'board' elemento DOM que representa o tabuleiro; removem quaisquer classes antes que estava indicando jogador atual */
    // board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) { /** bloco que verifica se é a vez do jogador 'O' */
        board.classList.add(CIRCLE_CLASS); /** se 'circleTurn' é 'true' a classe 'CIRCLE_CLASS' é adicionada ao tabuleiro */
    } else {
        board.classList.add(X_CLASS); /** se 'circleTurn' é 'false' a classe 'X_CLASS' é adicionada ao tabuleiro indicando que é a vez do jogador 'X' */
    }
}

function checkWin(currentClass) { /** funcao verifica se o jogador atual, indicado por 'currentClass' ganhou. Ela faz isso verificando se as combinaçoes pre-definidas esta completa */
    return WINNING_COMBINATIONS.some(combination => { /** 'WINNING_COMBINATIONS' litas de combinaçoes de indices das possiveis linhas vencedoras; 'some(combination => {...})' percorre cada combinacao possivel de vitoria */
        /** 'some' retorna 'true' se uma combinacao e encontrada onde todas as celulas contem a classe do jogador atual, indicando que o mesmo ganhou */
        return combination.every(index => { /** para cada combinaçao, 'every(index => {...})' verifica se todas as celulas da combinacao contem a classe do jogador atual ('currentClass') */
            return cellElements[index].classList.contains(currentClass); /** verifica se a celula no indice 'index' contem a classe do jogador atual */
        });
    });
}