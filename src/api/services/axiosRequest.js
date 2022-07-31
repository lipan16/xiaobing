import axios from 'axios'
import {get} from 'lodash'

// create an axios instance
const instance = axios.create({
    baseURL: '/api',
    timeout: 20 * 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

// request interceptor
instance.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

// response interceptor
instance.interceptors.response.use(response => {
    let res = response.data
    if(res && res.flag === 200){ // success
        return Promise.resolve(res.info)
    }else{ // error
        return Promise.reject(res)
    }
}, error => {
    return Promise.reject(error)
})

export default function({url, method, data, loading = false, loadingContent = '加载中...'}){
    // loading && Toast.show({
    //     icon: 'loading',
    //     content: loadingContent,
    //     duration: 0,
    //     maskClickable: false,
    //     maskStyle: {backgroundColor: 'rgba(0,0,0,0.35)'}
    // })

    return new Promise((resolve, reject) => {
        instance({url, method, data}).then((res) => {
            // loading && Toast.clear()
            resolve(res)
        }).catch(err => {
            // loading && Toast.clear()
            // Toast.show({icon: 'fail', content: get(err, 'info.result', '') || err})
            reject(err)
        })
    })
}
