import test from 'tape'
import { readFileSync } from 'fs'
import chalk from 'chalk';

let { yellow, green, red } = chalk;

// required when running inside faucet etc
// as chalk will detect output is not a tty
// and disable color for you automatically
chalk.level = 3;


import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

var data = {
  "mocha@1.18.2": yellow`3`,
  "commander@2.0.0": green`1`,
  "debug@0.8.1": red`6`
}

test('width calculated correctly even if ansi colors used.', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/ansi-expected.txt', 'utf8')
  var actual = columnify(data)
  t.equal(actual.trim(), expected.trim())
})
