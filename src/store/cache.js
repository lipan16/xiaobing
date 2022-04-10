/**
 [
 taskId: {
            khjbxx: {},
            khpz
    }
 ]
 */
let origin = JSON.parse(localStorage.getItem('khjd')) || {}
/*
    key为taskId
*/
const khjdStorage = {
    setItem(key, value){
        let data = localStorage.getItem('khjd')
        if(!data){
            data = '{}'
        }
        data = JSON.parse(data)
        data[key] = value
        localStorage.setItem('khjd', JSON.stringify(data))
    },
    getItem(key){
        let data = localStorage.getItem('khjd')
        if(!data){
            data = '{}'
        }
        return JSON.parse(data)[key]
    },
    clearCache(){
        localStorage.removeItem('khjd')
    }
}

let khjdCache = {
    ...origin,
    setCache(taskId, key, value){
        if(!origin[taskId]){
            origin[taskId] = {}
        }
        origin[taskId][key] = {...origin[taskId][key], ...value}
        khjdStorage.setItem(taskId, origin[taskId])
    },
    clearCache(){
        khjdStorage.clearCache()
    }
}

export default {
    ...origin,
    setCache(taskId, key, value){
        if(!origin[taskId]){
            origin[taskId] = {}
        }
        origin[taskId][key] = {...origin[taskId][key], ...value}
        khjdStorage.setItem(taskId, origin[taskId])
    },
    clearCache(){
        khjdStorage.clearCache()
    }
}