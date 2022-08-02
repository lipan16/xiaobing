import React, {useState} from 'react'

const iosKeyboardReset = () => {
    const [value, setValue] = useState('')
    const changeFocus = () => {}
    const changeBlur = () => {
        let u = navigator.userAgent
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if(isIOS){
            setTimeout(() => {
                const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
                window.scrollTo(0, Math.max(scrollHeight - 1, 0))
            }, 200)
        }
    }
    return (<>
        <div className="list-warp">
            <div className="title">
                <span>姓名</span>
            </div>
            <div className="content">
                <input className="input" placeholder="请输入姓名" value={value} onChange={val => setValue(val.target.value)}
                       onFocus={changeFocus} onBlur={changeBlur}/>
            </div>
        </div>

        <div className="remark">
            <div>
                <span className="label">问题详情描述: </span>
                <div className="value">
                    输入内容，软键盘弹出，页面内容整体上移，但是键盘收起，页面内容不下滑
                </div>
            </div>
            <div>
                <span className="label">出现原因分析: </span>
                <div className="value">
                    固定定位的元素 在元素内 input 框聚焦的时候 弹出的软键盘占位 失去焦点的时候软键盘消失 但是还是占位的 导致input框不能再次输入
                    在失去焦点的时候给一个事件
                </div>
            </div>
            <div>
                <span className="label">拓展知识: </span>
                <div className="value">
                    position: fixed的元素在ios里，收起键盘的时候会被顶上去，特别是第三方键盘
                </div>
            </div>
        </div>
    </>)
}
export default iosKeyboardReset
