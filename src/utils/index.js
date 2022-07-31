// 判断系统平台 手机、ipad、pc
export const systemPlatform = () => {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
        return 'mobile'
    }else if(/iPad/i.test(navigator.userAgent)){
        return 'iPad'
    }else{
        return 'pc'
    }
}
