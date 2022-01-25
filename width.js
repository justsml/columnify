import stripAnsi from 'strip-ansi'
import wcwidth from 'wcwidth'

export default function(str) {
  return wcwidth(stripAnsi(str))
}
