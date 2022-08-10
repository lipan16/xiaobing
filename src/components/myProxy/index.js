let target = {
    name: 'lipan',
    lover: 'xb'
}

let myProxyHandler = {
    get: function(target, propKey){
        console.log('拦截get目标属性')
        return Reflect.get(target, propKey)
        // return target
    },
    set: (target, propKey, value) => {
        console.log('拦截set目标属性')
        if(propKey === 'lover'){
            throw new Error('lover property is not modify')
        }
        target[propKey] = value
    }
}


let proxy = new Proxy(target, myProxyHandler)

try{
    proxy.lover = 'li'
}catch(e){
    console.error(e)
}

export default proxy
