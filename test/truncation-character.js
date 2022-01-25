import test from 'tape'
import { readFileSync } from 'fs'

import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

var data = [{
  name: 'mod1',
  description: 'some description',
  version: '0.0.1',
}, {
  name: 'module-two',
  description: 'another description larger than the max',
  version: '0.2.0',
}, {
  name: 'module-three',
  description: 'thisisaverylongwordandshouldbetruncated',
  version: '0.2.0',
}]

test('truncation character is configurable', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/truncate-expected.txt', 'utf8').replace(/…/g, '>')
  t.equal(columnify(data, {
    truncateMarker: '>',
    truncate: true,
    config: {
      description: {
        maxWidth: 20
      }
    }
  }).trim(), expected.trim())
})

test('truncation character can be multichar', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/truncate-multichar-expected.txt', 'utf8')

  t.equal(columnify(data, {
    truncateMarker: '...',
    truncate: true,
    config: {
      description: {
        maxWidth: 20
      }
    }
  }).trim(), expected.trim())
})
