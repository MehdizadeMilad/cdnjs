const boxen = require('boxen')
const ora = require('ora')
const chalk = require('chalk')

const boxenOptionsTitle = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555'
}

const boxenOptionsResultBody = {
    padding: 0,
    margin: 0,
    borderStyle: 'single',
    borderColor: 'gray',
    fontColor: 'red'
}

const boxenOptionsErrorBox = {
    padding: 0,
    margin: 0,
    borderStyle: 'round',
    borderColor: 'red',
    backgroundColor: ''
}

// boxen Helper
const messageToUser = (msg, msgStyle) => {
    let box = boxen(msg, msgStyle)
    process.stdout.write(box + '\n', 'utf-8');
}

const errorMessageToUser = (errorMsg) => {
    let box = boxen(errorMsg, boxenOptionsErrorBox)
    process.stdout.write(box + '\n', 'utf-8');
    process.exit(0)
}


// Spinner Helper
const spinner = ora();
const startSpinner = () => spinner.start()
const stopSpinner = () => spinner.stop()


// Chalk Helper
const boldText = (txt) => {
    return chalk.bold(txt)
}
const italicText = (txt) => {
    return chalk.italic(txt)
}

module.exports = {
    boxenOptionsTitle,
    boxenOptionsResultBody,
    startSpinner,
    stopSpinner,
    messageToUser,
    errorMessageToUser,
    boldText,
    italicText
}