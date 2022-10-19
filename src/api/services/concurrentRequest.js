import axiosRequest from '@/api/services/axiosRequest'

/**
 * 并发请求
 * @param urls 请求列表
 * @param maxNum 最大并发数
 */
export function concurrentRequest(urls, maxNum){
    return new Promise(resolve => {
        if(urls.length === 0){
            resolve([])
            return
        }
        const result = []
        let index = 0 // 下一个请求的下标
        let count = 0 // 当前请求的完成数量

        async function request(){
            if(index === urls.length){ // 防止数组越界
                return
            }
            const i = index // 保存当前请求下标
            const url = urls[index]
            index++
            try{
                const resp = await fetch(url)
                result[i] = resp
            }catch(e){
                result[i] = e
            }finally{
                // 判断所有请求是否完成
                count++
                if(count === urls.length){ // 请求完成
                    resolve(result)
                }
                request() // 发起下次请求
            }
        }

        const times = Math.min(maxNum, urls.length)
        for(let i = 0; i < times; i++){
            request()
        }
    })
}
