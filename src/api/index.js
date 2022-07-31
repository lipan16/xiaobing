import nativeSDK from './nativeSDK'
import webappRequest from './services/webappRequest'
import axiosRequest from './services/axiosRequest'

const Request = process.env.NODE_ENV === 'production' ? webappRequest : axiosRequest

const invoke = {
  login: (params) => Request({method: 'GET', url: '/login', params, loading: true, loadingContent: '登录中...'}),
}

const Api = {nativeSDK, ...invoke}
export default Api
