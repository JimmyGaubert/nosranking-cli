# @earlam/nosranking-cli

![NPM Downloads](https://img.shields.io/npm/d18m/%40earlam%2Fnosranking-module) ![NPM Version](https://img.shields.io/npm/v/%40earlam%2Fnosranking-module)

![NosRanking Logo](https://www.aht.li/3769246/nr-192.png)



A CLI tool for fetching Nostale rankings using the `@earlam/nosranking-module`.

## Installation

To install the CLI globally, run the following command:

- `npm i -g @earlam/nosranking-cli`

This will install the `nosranking` command globally on your machine.

## Usage

Once the CLI is installed globally, you can use the `nosranking` command to fetch player rankings.

### Example

- `nosranking --region fr --server 1 --nick Earlam`

### Options

- `--region <region>`: Required. Specifies the region for the rankings (e.g., `fr`, `de`, `en`).
- `--server <server>`: Optional. Specifies the server name.
- `--nick <nickname>`: Required. Specifies the player's nickname.

### Help

To see the help menu, run:

nosranking --help
