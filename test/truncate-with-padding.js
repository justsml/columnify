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

test('columns are limited when truncation enabled', function(t) {
  t.plan(1)
  var expected = readFileSync(__dirname + '/truncate-with-padding-expected.txt', 'utf8')
  t.equal(columnify(data, {
    truncate: true,
    paddingChr: '.',
    config: {
      description: {
        maxWidth: 20
      }
    }
  }).trim(), expected.trim())
})
