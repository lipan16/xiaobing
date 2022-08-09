const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    // Promise 状态初始化为等待
    status = PENDING
    // 成功之后的值
    value = undefined
    // 失败的原因
    reason = undefined
    // 成功的回调函数存放的数组
    successCallback = []
    // 失败的回调函数存放额数组
    failCallback = []

    constructor(executor){
        // console.log('myPromise construct: ', executor)
        // 保证每一个 resolve 和 reject 方法只会更改自己的 Promise 实例
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)

        try{ // 尝试调用执行器
            executor(this.resolve, this.reject)
        }catch(e){ // 调用失败
            this.reject(e)
        }
    }

    resolve = value => {
        // 如果状态不是等待 阻止程序向下执行
        if(this.status !== PENDING) return
        // 更改状态为成功
        this.status = FULFILLED
        // 保存成功之后的值
        this.value = value
        // 成功回调存在 调用成功回调方法
        // this.successCallback && this.successCallback(this.value)
        // 因为then是可以多次调用的
        // this.successCallback.shift()，截取数组中的第一个元素并返回，会改变原数组
        while(this.successCallback.length){
            this.successCallback.shift()(this.value)
        }
    }

    reject = reason => {
        if(this.status !== PENDING) return
        // 更改状态为失败
        this.status = REJECTED
        // 保存失败的值
        this.reason = reason
        // 成功回调存在 调用成功回调方法
        // this.failCallback && this.failCallback(this.value)
        while(this.failCallback.length){
            this.failCallback.shift()(this.value)
        }
    }

    then(successCallback, failCallback){
        // console.log('myPromise then: ', successCallback, failCallback)
        // 当没有成功回调时，将value值往下传递
        successCallback = successCallback ? successCallback : value => value
        // 当没有失败回调时，抛出异常
        failCallback = failCallback ? failCallback : reason => { throw reason }
        // 创建一个新的 Promise对象
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if(this.status === FULFILLED){ // 成功
                setTimeout(() => {
                    try{
                        // 定义 val接收成功回调的返回值
                        let x = successCallback(this.value)

                        // 判断val的值是一个普通值，还是promise对象，为确保返回值是promise对象
                        // 如果是普通值，直接调用resolve
                        // 如果是promise对象，查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve还是reject
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            }else if(this.status === REJECTED){ // 失败
                setTimeout(() => {
                    try{
                        // 定义 val接收成功回调的返回值
                        let x = failCallback(this.reason)

                        // 判断val的值是一个普通值，还是promise对象，为确保返回值是promise对象
                        // 如果是普通值，直接调用resolve
                        // 如果是promise对象，查看promise对象返回的结果
                        // 再根据promise对象返回的结果，决定调用resolve还是reject
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            }else{  // 等待
                // 当异步改变状态时，此时状态为 pending，将成功或失败回调缓存起来
                // 每次调用 then方法 ，都会缓存一个回调
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try{
                            // 定义 val接收成功回调的返回值
                            let x = successCallback(this.value)

                            // 判断val的值是一个普通值，还是promise对象，
                            // 如果是普通值，直接调用resolve
                            // 如果是promise对象，查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve还是reject
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    }, 0)
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try{
                            // 定义 val接收成功回调的返回值
                            let x = failCallback(this.reason)

                            // 判断val的值是一个普通值，还是promise对象，
                            // 如果是普通值，直接调用resolve
                            // 如果是promise对象，查看promise对象返回的结果
                            // 再根据promise对象返回的结果，决定调用resolve还是reject
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    }, 0)
                })
            }
        })
        // 返回一个 Promise对象
        return promise2
    }

    catch(failCallback){
        // console.log('myPromise catch: ', failCallback)
        return this.then(undefined, failCallback)
    }

    finally(callback){
        // console.log('myPromise finally: ', callback)
        // 无论成功或失败都要执行
        return this.then(value=>{
            return MyPromise.resolve(callback()).then(() => value)
        },reason => {
            return MyPromise.resolve(callback()).then(() => {throw reason})
        })
    }

    static all(array){
        let result = []
        let index = 0 // 由index判断是否执行完所有代码，并将数据添加进result中了
        return new MyPromise((resolve, reject) => {
            // 由addData方法像 result 中添加数据
            function addData(key, val){
                result[key] = val
                index ++
                if(index == array.length){
                    resolve(result)
                }
            }
            array.forEach((item,index) => {
                if(item instanceof MyPromise){
                    item.then(val => addData(index,val), reason => reject(reason))
                }else{
                    addData(index,item)
                }
            })
        })
    }

    static resolve(val){
        // promise对象直接原样返回
        if(val instanceof MyPromise) return val;
        // 数值类型将其作为一个新的promise对象的返回值返回
        return new MyPromise(resolve => resolve(val))
    }
}

function resolvePromise(promise2, x, resolve, reject){
    if(promise2 === x){
        console.log('传入了同一个promise');
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    if(x instanceof MyPromise){
        // promise对象
        // x.then(value => resolve(value), reason => reject(reason))
        // 优化为：
        x.then(resolve, reject)
    }else{
        // 普通值
        resolve(x)
    }
}

export default MyPromise
