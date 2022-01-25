import test from 'tape'
import { readFileSync } from 'fs'

import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

var data = [{
  name: 'mod1',
  description: 'some description which happens to be far larger than the max',
  version: '0.0.1',
}, {
  name: 'module-two',
  description: 'another description larger than the max',
  version: '0.2.0',
}]

test('column splitter character', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/column-splitter-character-expected.txt', 'utf8')
  t.equal(columnify(data, {
    columnSplitter: ' | '
  }).trim(), expected.trim())
})
