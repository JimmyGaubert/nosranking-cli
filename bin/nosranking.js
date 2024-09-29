#!/usr/bin/env node

const yargs = require('yargs');
const { fetchRanking } = require('@earlam/nosranking-module');

yargs
    .option('region', {
        describe: 'Region code (de, fr, en, etc.)',
        demandOption: true,
        type: 'string'
    })
    .option('server', {
        describe: 'Server name',
        type: 'string'
    })
    .option('nick', {
        describe: 'Nickname of the player',
        demandOption: true,
        type: 'string'
    })
    .help()
    .argv;

const { region, server, nick } = yargs.argv;

fetchRanking(region, server, nick)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error fetching ranking:', error.message);
    });
