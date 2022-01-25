import test from 'tape'
import { readFileSync } from 'fs'
import columnify from '../index.js'
import getFileAndDirname from './helpers.js';
const {__dirname} = getFileAndDirname(import.meta.url);

import data, { slice, length } from './large.json'
var data2 = readFileSync(__dirname + '/large.json', 'utf8')

test('handling large data', function(t) {
  t.plan(3)

  var maxStringLength = data2.length / 360
  console.time('large data as single cell')
  t.ok(columnify({key: 'root', description: data2.slice(0, maxStringLength)}, {
    config: {
      description: {
        maxWidth: 30,
        minWidth: 10
      }
    }
  }))
  console.timeEnd('large data as single cell')

  // have to reduce dataset, otherwise bench
  // blows memory limit
  data = slice(0, length / 20)
  console.time('large data 1')
  t.ok(columnify(data, {
    config: {
      description: {
        maxWidth: 30,
        minWidth: 10
      }
    }
  }))
  console.timeEnd('large data 1')
  console.time('large data 2')
  t.ok(columnify(data, {
    config: {
      description: {
        maxWidth: 30,
        minWidth: 10
      }
    }
  }))
  console.timeEnd('large data 2')
  console.time('large data 3')
  t.ok(columnify(data, {
    config: {
      description: {
        maxWidth: 30,
        minWidth: 10
      }
    }
  }))
  console.timeEnd('large data 3')
})


