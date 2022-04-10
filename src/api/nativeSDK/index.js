const nativeSDK = {
    closeWebApp(){
        window.WebApp.closeWebapp();
    },
    getLoginInfo(){
        return new Promise((resolve, reject) => {
            window.WebApp.getLoginInfo(info => {
                resolve(info);
            });
        });
    },

    getLocation(){
        return new Promise((resolve, reject) => {
            window.WebApp.getLocation(function(result){
                console.log('getLocation 0: ' + JSON.stringify(result));
                try{
                    result = JSON.parse(result);
                }catch(err){
                    // webapp中的一些方法返回值格式令人窒息，这里做下处理
                    // 看不懂的字符串拼接
                    const a  = result.split('info\':')[1];
                    let info = a.slice(2, -2);
                    info     = JSON.parse(info);
                    const b  = result.split('info\':')[0];
                    result   = {
                        flag: b.indexOf(0) !== -1 ? 0 : 1,
                        info
                    };
                }

                if(typeof result.info == 'string'){
                    result.info = JSON.parse(result.info);
                }
                result.info.latitude  = Number(result.info.latitude).toFixed(6) + '';
                result.info.longitude = Number(result.info.longitude).toFixed(6) + '';
                console.log('getLocation: ' + JSON.stringify(result));
                resolve(result);
            });
        });
    },
    chooseLocation(callBack){
        window.WebApp.chooseLocation(callBack, 500);
    },

    uploadFiles({files}){
        let params = {
            uri      : 'eopenfileupload',
            type     : '1',
            timeout  : 70,
            parameter: {
                'fileName'    : '',
                'belongModule': 0, // 这个字段看就代码有0跟1，跟一个变量值，据说没用，需要确认
                'fileSize'    : ''
            },
            paramter : {
                'fileName'    : '',
                'belongModule': 0, // 这个字段看就代码有0跟1，跟一个变量值，据说没用，需要确认
                'fileSize'    : ''
            },
            fileID   : files
        };
        console.log('上传图片的参数');
        console.log(params);
        return new Promise((resolve, reject) => {
            // 这个方法会打开截图的那个原生界面，他并不是长截图功能
            return window.WebApp.uploadFile(JSON.stringify(params), function(info){
                console.log('图片上传失败');
                console.log(info);
                console.log('失败参数：');
                console.log(params);
                reject(JSON.parse(info));
            }, function(info){
                console.log('图片上传成功');
                info = JSON.parse(info);
                console.log();
                info.info = JSON.parse(info.info);
                resolve(info);
            }, function(info){
            });
        });
    },
    downloadFile({filedPath}){
        return new Promise((resolve, reject) => {
            window.WebApp.downloadFile('tjfxwjxz', filedPath, function(res){
                    //下载失败回调函数
                    reject(res);
                }, function(res){
                    //下载成功回调函数
                    window.WebApp.showFile('tjfxwjxz', filedPath);
                    resolve(res);
                }, function(res){
                    //下载进度回调函数
                    console.log('下载进度回调函数');
                }
            );
        });
    },
    getFilePathByFileNo({uri, fileId}){
        return new Promise((resolve, reject) => {
            // 失败、成功、进度log
            window.WebApp.getFilePathByFileNo(uri, fileId, (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    },
    showFile({uri, fileId}){
        return new Promise((resolve, reject) => {
            window.WebApp.showFile(uri, fileId);
        });
    },

    choosePhoto({pixelW = 50, pixelH = 50}){
        return new Promise((resolve, reject) => {
            window.WebApp.choosePhoto('com.cib.CibSafeBrowser', 'useless describe', result => {
                resolve(result);
            }, err => {
                reject(err);
            }, pixelW, pixelH);
        });
    },

    uploadCloudAlbumFiles(fileLocalIdList){
        return new Promise((resolve, reject) => {
            return window.WebApp.uploadCloudAlbumFiles(JSON.stringify({fileLocalIdList}), (res) => {
                resolve(JSON.parse(res).info);
            }, (process) => {
                // console.log('图片上传进度=>' + process)
            }, (err) => {
                console.log('上传失败回调' + JSON.stringify(err));
                reject(err);
            });
        });
    },
    viewOriginFiles({fileIndex, fileLocalIdList}){
        return new Promise((resolve, reject) => {
            return window.WebApp.viewOriginFiles(JSON.stringify({fileIndex, fileLocalIdList}), res => {

            }, err => {

            });
        });
    },
    getOriginFileByCloud({fileNoList, successCallBack, failCallBack}){
        window.WebApp.getOriginFileByCloud(JSON.stringify({fileNoList}), (res) => {
            successCallBack(JSON.parse(res).info);
        }, err => {
            failCallBack(err);
        });
        // return new Promise((resolve, reject) => {
        //     console.log(JSON.stringify({fileNoList}))
        //     return window.WebApp.getOriginFileByCloud(JSON.stringify({fileNoList}), (res) => {
        //         resolve(JSON.parse(res).info)
        //     }, err => {
        //         reject(err)
        //     })
        // })
    },
    takePhotoByCloud(){
        // handleMode 是否连拍，0:否， 1:是
        return new Promise((resolve, reject) => {
            window.WebApp.takePhotoByCloud(
                JSON.stringify({handleMode: '0'}),
                info => {
                    info = JSON.parse(info);
                    /**
                     fileLocalId，
                     source，
                     thumbnailUrl // 缩略图路径，用来返显图片
                     originFileUrl // 原图路径
                     */
                    resolve(info);
                }, err => {
                    reject(err);
                }
            );
        });
    },
    openCloudAlbum(){
        return new Promise((resolve, reject) => {
            console.log('openCloudAlbum001');
            window.WebApp.openCloudAlbum(
                info => {
                    console.log('打开云相册/开启云相册微应用成功！');
                    console.log(JSON.stringify(info));
                    info = JSON.parse(info);
                    resolve(info);
                }, err => {
                    console.log('打开云相册/开启云相册微应用失败！');
                    console.log(JSON.stringify(err));
                    reject(err);
                }
            );
        });
    },
    openSystemAlbumByCloud(){
        return new Promise((resolve, reject) => {
            window.WebApp.openSystemAlbumByCloud(
                info => {
                    console.log('打开开启系统相册（通过云相册）成功！');
                    info = JSON.parse(info);
                    resolve(info);
                }, err => {
                    console.log('打开开启系统相册（通过云相册）失败！');
                    reject(err);
                }
            );
        });
    },

    openOtherWebSitePageAndScreenShot({url}){
        /**
         截图会返回缩略图图base64和fileId，这里为了开发方便，优先填充base64
         fileId: 本地实际路径
         thumbnail: 缩略图base64
         */
        const param = {
            url     : url,
            'pixelW': 300,
            'pixelH': 300
        };
        return new Promise((resolve, reject) => {
            // 这个方法会打开截图的那个原生界面，他并不是长截图功能
            window.WebApp.longScreenShot(JSON.stringify(param), function(info){
                console.log('=====');
                console.log(info);
                resolve(JSON.parse(info).info);
            });
        });
    }
};

export default nativeSDK;
