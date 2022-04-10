import axios from 'axios';

const responseSuccess          = ['0', 'I00'];
axios.defaults.withCredentials = true;

// create an axios instance
const service = axios.create({
    timeout: 20000, // request timeout
    headers: {
        'Content-Type'    : 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// response interceptor
service.interceptors.response.use(res => {
    if(res.config.url.includes('login')){
        return res;
    }
    let response = res.data;
    if(typeof response == 'string'){
        response = JSON.parse(response);
    }
    if(response && responseSuccess.includes(response.flag) && response.info && responseSuccess.includes(response.info.resultCode)){ // success
        return Promise.resolve(response);
    }else{ // error
        return Promise.reject(response);
    }
}, error => {
    return Promise.reject(error);
});

const axiosRequest = function({uri, parameter, url = 'invoke.jsp', method = 'post'}){
    return new Promise((resolve, reject) => {
        const data = `uri=${uri}&parameter=${JSON.stringify(parameter)}`;
        service({url, method, data}).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        });
    });
};

export default axiosRequest;
