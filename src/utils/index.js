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

export const networkChange=()=>{
    const {rtt, downlink, effectiveType, saveData} =navigator.connection
    console.log(`有效网络连接类型：${effectiveType}`)
    console.log(`估算下行速度：${downlink}Mb/s`)
    console.log(`估算往返时间：${rtt}ms`)
    console.log(`打开/请求数据保护模式(用户是否已请求用户代理减少数据使用量)：${saveData} `)
}

navigator.connection.addEventListener('change', networkChange)
