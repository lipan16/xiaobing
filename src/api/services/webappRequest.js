import {get} from 'lodash'

export default function({url, method = 'POST', data, loading = false, loadingContent = '加载中...'}){
    // loading && Toast.show({icon: 'loading', content: loadingContent, duration: 0, maskClickable: false, maskStyle: {backgroundColor: 'rgba(0,0,0,0.35)'}})

    const composedData = JSON.stringify({...data, url})
    return new Promise((resolve, reject) => {
        window.WebApp.invoke('openapi_to_lake', method, composedData, response => {
            // loading && Toast.clear()
            if(typeof response === 'string'){
                response = JSON.parse(response)
            }
            if(response && response.flag === 200){ // success
                resolve(response.info)
            }else{ // error
                // Toast.show({icon: 'fail', content: get(response, 'info.result', '') || response})
            }
        }, function(error){
            // loading && Toast.clear()
            // Toast.show({icon: 'fail', content: JSON.stringify(error)})
            reject(error)
        })
    })
}
