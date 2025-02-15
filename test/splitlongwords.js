import test from 'tape'
import fs from 'fs'

import { splitLongWords } from '../utils.js'

test('split long word with …', function(t) {
  t.plan(1)
  // note is 5 letters to take … into account
  t.equal(splitLongWords('dinosaur', 5, '…'), 'dino… saur')
})


test('split long words with …', function(t) {
  t.plan(1)
  t.equal(splitLongWords('dinosaur cabbages', 5, '…'), 'dino… saur cabb… ages')
})

test('ignores short words', function(t) {
  t.plan(1)
  t.equal(splitLongWords('cow car mouse', 5, '…'), 'cow car mouse')
})

test('can split long words multiple times', function(t) {
  t.plan(1)
  t.equal(splitLongWords('dodecahedrons', 3, '…'), 'do… de… ca… he… dr… ons')
})

test('ignores/strips leading whitespace', function(t) {
  t.plan(1)
  t.equal(splitLongWords(' dodecahedrons', 3, '…'), 'do… de… ca… he… dr… ons')
})

test('multibytes characters', function(t) {
  t.plan(1)
  t.equal(splitLongWords('cow 开汽车 mouse 안녕하세요', 3, '…'), 'cow 开… 汽… 车 mo… use 안… 녕… 하… 세… 요')
})
