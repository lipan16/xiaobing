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

export const networkChange = () => {
    const {rtt, downlink, effectiveType, saveData} = navigator.connection
    console.log(`有效网络连接类型：${effectiveType}`)
    console.log(`估算下行速度：${downlink}Mb/s`)
    console.log(`估算往返时间：${rtt}ms`)
    console.log(`打开/请求数据保护模式(用户是否已请求用户代理减少数据使用量)：${saveData} `)
}

navigator.connection.addEventListener('change', networkChange)

// js判断横竖屏
window.addEventListener('resize', () => {
    if(window.screen.orientation.angle === 180 || window.screen.orientation.angle === 0){
        // 正常方向或屏幕旋转180度
        console.log('竖屏')
    }
    if(window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90){
        // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
        console.log('横屏')
    }
})

/**
 * 根据码点截取字符串 可以截取四个字节的字符，如emoji表情
 *
 * @param pStart 开始位置
 * @param pEnd 结束位置
 * @returns {string}
 */
String.prototype.sliceByPoint = function(pStart, pEnd){
    let result = '' // 截取的结果
    let pIndex = 0 // 码点的指针
    let cIndex = 0 // 码元的指针
    while(1){
        if(pIndex >= pEnd || cIndex >= this.length){
            break
        }
        // 获取字符的码点值
        const point = this.codePointAt(cIndex)
        if(pIndex >= pStart){
            // 根据码点恢复字符
            result += String.fromCodePoint(point)
        }
        // 码点值大于0xFFFF 表示该字符存储占四个字节两个字符，码元的指针往后加2
        cIndex += point > 0xFFFF ? 2 : 1
        pIndex++
    }
    return result
}

// 😀
console.log('😀死了'.sliceByPoint(0, 1))
// '\uD83D'
console.log('😀死了'.slice(0, 1))
