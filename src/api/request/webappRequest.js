const responseSuccess = ['0', 'I00'];

const webappRequest = function({uri, parameter}){
    return new Promise((resolve, reject) => {
        window.WebApp.invoke(uri, 'POST', JSON.stringify(parameter), function(response){
            if(typeof response == 'string'){
                response = JSON.parse(response);
            }
            if(response && responseSuccess.includes(response.flag) && response.info && responseSuccess.includes(response.info.resultCode)){ // success
                console.log('WebApp invoke response success: \n \trequest: [uri: ' + uri + ', parameter: ' + JSON.stringify(parameter) + ']\n \tresponse: ' + JSON.stringify(response));
                resolve(response);
            }else{ // error
                console.error('WebApp invoke response error: \n \trequest: [uri: ' + uri + ', parameter: ' + JSON.stringify(parameter) + ']\n \terror: ' + JSON.stringify(response));
                reject(response);
            }
        }, function(error){
            console.error('WebApp invoke response error: \n \trequest: [uri: ' + uri + ', parameter: ' + JSON.stringify(parameter) + ']\n \terror: ' + JSON.stringify(error));
            reject(error);
        });
    });
};

export default webappRequest;
