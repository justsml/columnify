import test from 'tape'
import { readFileSync } from 'fs'

import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

var data = {
  "mocha@1.18.2": 1,
  "commander@2.0.0": 1,
  "debug@0.8.1": 1
}

test('columns can be aligned to the center', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/align-center-expected.txt', 'utf8')
  var actual = columnify(data, { paddingChr: '.', config: {value: {align: 'center'}}})
  t.equal(actual.trim(), expected.trim())
})

test('columns can be aligned to the centre using the correct spelling of centre', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/align-center-expected.txt', 'utf8')
  var actual = columnify(data, { paddingChr: '.', config: {value: {align: 'centre'}}})
  t.equal(actual.trim(), expected.trim())
})
