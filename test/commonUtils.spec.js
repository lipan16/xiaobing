import { arrayToObj, toImmutability } from '@/src/utils/common'

describe('array to object', () => {
  const testData = [
    {
      value: 'name',
      label: '姓名'
    },
    {
      value: 'sex',
      label: '性别'
    }
  ]
  const testSuccess = {
    name: '姓名',
    sex: '性别'
  }
  test('correct input params', () => {
    expect(arrayToObj(testData, 'value', 'label')).toEqual(testSuccess)
  })
  test('lost first transfer items', () => {
    let error
    try {
      arrayToObj(undefined, 'value', 'label')
    } catch (e) {
      error = e
    }
    expect(error).toEqual('transfer items are required')
  })
  test('lost second key argument', () => {
    let error
    try {
      arrayToObj(testData, undefined, 'label')
    } catch (e) {
      error = e
    }
    expect(error).toEqual('key argument is required')
  })
  test('lost third value argument', () => {
    let error
    try {
      arrayToObj(testData, 'value', undefined)
    } catch (e) {
      error = e
    }
    expect(error).toEqual('value argument is required')
  })
  test('wrong type of transfer items', () => {
    let error
    try {
      arrayToObj('aaaa', 'value', 'label')
    } catch (e) {
      error = e
    }
    expect(error).toEqual('transfer items must be array')
  })
})
describe('transform object path to object', () => {
  const testPath = '[1].user.[0].name'
  const testData = {$set: '冯超'}
  const successData = {
    1: {
      user: {
        0: {
          name: {
            $set: '冯超'
          }
        }
      }
    }
  }

  test('set happy pass', () => {
    expect(toImmutability(testPath, testData)).toEqual(successData)
  })
})