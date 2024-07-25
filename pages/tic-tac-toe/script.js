const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        // Rows
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

const squares = document.querySelectorAll('td')
squares.forEach(square => square.addEventListener('click', handleOption))
document.querySelector('button').addEventListener('click', resetGame)

function handleOption(event) {
    const { target } = event
    const isDisabled = target.classList.contains('disabled')

    if (!isDisabled) {
      const {value} = target.dataset
      game.xTurn
        ? game.xState.push(value)
        : game.oState.push(value)

        target.classList.add('disabled')
        target.textContent = game.xTurn ? '❌' : '⭕'

        game.xTurn = !game.xTurn
    }

    if (!document.querySelectorAll('td:not(.disabled)').length) {
        document.querySelector('.game-over').style.opacity = 1
        document.querySelector('.game-over span').textContent = 'Empate!'
    }

    game.winningStates.forEach(winningState => {
        const xWins = winningState.every(state => game.xState.includes(state))
        const oWins = winningState.every(state => game.oState.includes(state))
      
        if (xWins || oWins) {
            document.querySelectorAll('td').forEach(cell => cell.classList.add('disabled'))
            document.querySelector('.game-over').style.opacity = 1
            document.querySelector('.game-over span').textContent = xWins
                ? 'X venceu!'
                : 'O venceu!'
        }
    })
}

function resetGame() {
    document.querySelector('.game-over').style.opacity = 0
    squares.forEach(cell => {
        cell.textContent = ''
        cell.classList.remove('disabled')
    })

    game.xTurn = true
    game.xState = []
    game.oState = []
}
