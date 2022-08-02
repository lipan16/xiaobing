import React, {useState} from 'react'

const androidKeyboardCover = () => {
    const [value, setValue] = useState('')
    const changeFocus = () => {
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
        if(isAndroid){
            setTimeout(function(){
                document.activeElement.scrollIntoViewIfNeeded()
                document.activeElement.scrollIntoView()
            }, 500)
        }
    }

    return (<>
        <div className="remark">
            <div>
                <span className="label">问题详情描述: </span>
                <div className="value">
                    H5弹出软键盘后挡住input输入框
                </div>
            </div>
            <div>
                <span className="label">出现原因分析: </span>
                <div className="value"></div>
            </div>
            <div>
                <span className="label">解决办法: </span>
                <div className="value">
                    给input和textarea标签添加focus事件，如下，先判断是不是安卓手机下的操作，当然，可以不用判断机型，Document
                    对象属性和方法，setTimeout延时0.5秒，因为调用安卓键盘有一点迟钝，导致如果不延时处理的话，滚动就失效了
                </div>
            </div>
            <div>
                <span className="label">拓展知识: </span>
                <div className="value">
                    Element.scrollIntoView()方法让当前的元素滚动到浏览器窗口的可视区域内
                    Element.scrollIntoViewIfNeeded()方法也是用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。但如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动
                </div>
            </div>
        </div>

        <div className="list-warp">
            <div className="title">
                <span>姓名</span>
            </div>
            <div className="content">
                <input className="input" placeholder="请输入姓名" value={value} onChange={val => setValue(val.target.value)}
                       onFocus={changeFocus}/>
            </div>
        </div>
    </>)
}

export default androidKeyboardCover
