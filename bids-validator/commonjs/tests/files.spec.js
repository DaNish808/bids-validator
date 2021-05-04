import { assert } from 'chai'
import { Blob, File, FileList } from '../files'

function getAllFuncs(toCheck) {
  var props = []
  var obj = toCheck
  do {
    props = props.concat(Object.getOwnPropertyNames(obj))
  } while ((obj = Object.getPrototypeOf(obj)))

  return props.sort().filter(function(e, i, arr) {
    if (e != arr[i + 1] && typeof toCheck[e] == 'function') return true
  })
}

describe('files api', () => {
  it('has functioning Blob', async () => {
    const blob = new Blob(['file content'])
    console.log(blob.size)
    console.log(blob.type)
    console.log(getAllFuncs(blob))
    assert(false)
  })
})
