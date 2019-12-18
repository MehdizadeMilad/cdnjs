const yargs = require('yargs')


const cliOptions = yargs
    .describe()
    .example('cdnjs -p jquery.selectBox -l 10', 'Queries jquery.selectBox package CDN, with results limited to 10 row.')
    .usage("Usage: cdnjs [-options]")
    .option("p",
        {
            alias: 'packageName',
            describe: 'the package youre looking for',
            type: 'string',
            demandOption: true
        })
    .option('l', {
        alias: 'limit',
        describe: 'limit results printed on CLI',
        type: 'number',
        demandOption: false,
        default: 5
    })
    .argv;

module.exports = cliOptions