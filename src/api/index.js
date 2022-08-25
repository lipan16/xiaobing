import config from '@config'
import nativeSDK from './nativeSDK'
import appRequest from '@/api/services/appRequest'
import axiosRequest from '@/api/services/axiosRequest'
import fetchRequest from '@/api/services/fetchRequest'

let Request = fetchRequest
switch(config.requestType){
    case 'fetch':
        Request = fetchRequest
        break
    case 'axios':
        Request = axiosRequest
        break
    case 'mobile':
        Request = appRequest
        break
    default:
        Request = fetchRequest
}

const Api = {
    nativeSDK,
    login: (data) => Request({url: '/api/login', method: 'GET', data, loading: true, loadingContent: '登录中...'}),
    loginPost: (data) => Request({url: '/api/post', method: 'POST', data, loading: true, loadingContent: '登录中...'}),
    bigList: () => Request({url: '/api/bigList', method: 'get', data: {}}),
}

export default Api
