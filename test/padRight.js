import test from 'tape'
import fs from 'fs'

import { padRight } from '../utils.js'

test('pad string with spaces up to len', function(t) {
  t.plan(1)
  t.equal(padRight('word', 10), 'word      ')
})

test('pad empty string with spaces up to len', function(t) {
  t.plan(1)
  t.equal(padRight('', 10), '          ')
})

test('leaves long strings along', function(t) {
  t.plan(1)
  t.equal(padRight('012345678910', 10), '012345678910')
})

test('custom padding', function(t) {
  t.plan(1)
  t.equal(padRight('', 10, '.'), '..........')
})

test('handling funky data with spaces up to len', function(t) {
  t.plan(5)
  t.equal(padRight(null, 10), '          ')
  t.equal(padRight(false, 10), 'false     ')
  t.equal(padRight(0, 10), '0         ')
  t.equal(padRight(10, 10), '10        ')
  t.equal(padRight([], 10), '          ')
})

test('pad string with paddingChr up to len', function(t) {
  t.plan(1)
  t.equal(padRight('word', 10, '.'), 'word......')
})

test('pad string with paddingChr of length >1, up to len', function(t) {
  t.plan(1)
  t.equal(padRight('words', 10, ' .'), 'words . . ')
})
