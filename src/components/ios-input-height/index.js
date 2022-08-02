import React from 'react'

import './index.less'

const iosInputHeight = () => {
    return (<>
        <div className="flex-inline ios-input-height">
            <div className="label">ios端兼容input光标高度</div>
            <div className="value">
                <input/>
            </div>
        </div>
        <div className="remark">
            <div>
                <span className="label">问题详情描述: </span>
                <div className="value">
                    input输入框光标，在安卓手机上显示没有问题，但是在苹果手机上 当点击输入的时候，光标的高度和父盒子的高度一样
                </div>
            </div>
            <div>
                <span className="label">出现原因分析: </span>
                <div className="value">
                    通常我们习惯用height属性设置行间的高度和line-height属性设置行间的距离（行高），当点击输入的时候，光标的高度就自动和父盒子的高度一样了。（谷歌浏览器的设计原则，还有一种可能就是当没有内容的时候光标的高度等于input的line-height的值，当有内容时，光标从input的顶端到文字的底部
                </div>
            </div>
            <div>
                <span className="label">解决办法: </span>
                <div className="value">
                    高度height和行高line-height内容用padding撑开
                </div>
            </div>
        </div>
    </>)
}
export default iosInputHeight
