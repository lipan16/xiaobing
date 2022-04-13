import nativeSDK     from './nativeSDK';
import mockRequest   from './request/mockRequest';
import axiosRequest  from './request/axiosRequest';
import webappRequest from './request/webappRequest';
import {string2bool} from '../utils';

let Request = string2bool(process.env.REACT_APP_MOCK) ? mockRequest() : process.env.NODE_ENV === 'development' ? axiosRequest : webappRequest;

const Api = {
    ...nativeSDK,
    login(){
        return new Promise((resolve, reject) => {
            if(process.env.NODE_ENV === 'development'){ // web dev
                let notesid = '010924';
                let url     = `/loginS.jsp?parameter={%22userName%22:%22${notesid}%22,%22passWord%22:%227C0BE3A2A9469AE0FD9F8607A49856BEB87E5AD8E5A5C3E0373948774A4576E8B3F91C190F309A29150CB8FCE78EFC6F5550C99FE02B93B48B057ED928157EA15B04E02ECAE727B763144438B398F0123DCF67F9883A3BC43659A2AA907A1E3AF82F53880E0DA2FCBD81B61A97DFDE96A654EEB8B1D75F0F552A7EB6D99F7F50%22,%22deviceId%22:%22867106020022759%22,%22deviceType%22:%22HUAWEI%20M2-803L%22,%22sysType%22:%22android5.1.1%22,%22appId%22:%22com.cib.CIBSafeBrowser%22,%22sakId%22:%2220150529%22}`;
                Request({url, method: 'GET'}).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            }else{ // mobile
                nativeSDK.getLoginInfo().then(response => {
                    resolve(response.info);
                }).catch(err => {
                    reject(err);
                });
            }
        });
    }
};

export default Api;
