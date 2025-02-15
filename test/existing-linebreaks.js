import test from 'tape'
import { readFileSync } from 'fs'

import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

var data = [{
  name: "glob@3.2.9",
  paths: [
    "node_modules/tap/node_modules/glob",
    "node_modules/tape/node_modules/glob"
  ].join('\n')
}, {
  name: "nopt@2.2.1",
  paths: [
    "node_modules/tap/node_modules/nopt"
  ]
}, {
  name: "runforcover@0.0.2",
  paths: "node_modules/tap/node_modules/runforcover"
}]

test('leaving existing linebreaks', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/existing-linebreaks-expected.txt', 'utf8')
  t.equal(columnify(data, {preserveNewLines: true}).trim(), expected.trim())
  t.end()
})

test('removing existing linebreaks', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/remove-existing-linebreaks-expected.txt', 'utf8')
  t.equal(columnify(data).trim(), expected.trim())
  t.end()
})
