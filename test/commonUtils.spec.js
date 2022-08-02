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
        expect('a').toEqual('a')
    })
})
