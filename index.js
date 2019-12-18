const args = require('./lib/cliArgs')
const {
    startSpinner,
    stopSpinner,
    messageToUser,
    boxenOptionsTitle,
    boxenOptionsResultBody,
    errorMessageToUser,
    boldText,
    italicText
} = require('./lib/cliOutputOptions');

const callApi = require('./lib/httpHelper')


const app = async () => {
    const apiOptions = 'fields=version,description'
    const url = `https://api.cdnjs.com/libraries?search=${args.packageName}&${apiOptions}`

    startSpinner()
    let apiResult = await callApi(url)
    stopSpinner()

    if (apiResult.err) errorMessageToUser(`Error Fetching API: ${apiResult.err}`);
    if (!apiResult.data.length) errorMessageToUser(`Nothing found`);

    const parseResultTitle =
        `packages similar to ${italicText(args.p)} were found\n for more accurate results, specify package full name: e.g jquery-mobile`
    messageToUser(parseResultTitle, boxenOptionsTitle)

    apiResult.data
        .splice(0, args.limit)
        .forEach(p => {
            messageToUser(`${boldText(p.name)} => ${p.latest}`, boxenOptionsResultBody)
        });

    console.log('*'.repeat(10), 'Done', '*'.repeat(10));
    process.exit(0)
}

module.exports = app;