import moment from 'moment'
import React, {useState, useEffect, useRef} from 'react'
import Api from '@/api'

const BigList = () => {

    let container = useRef()
    let blank = useRef()

    const limit = 100
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [showList, setShowList] = useState([])

    useEffect(() => {
        Api.bigList().then(res => {
            setData(res.bigList)
            setMaxPage(Math.ceil(res.bigList.length / limit))
        }).catch(e => {
            console.error(e)
        })
    }, [])

    useEffect(() => {
        setShowList(data.slice(0, page * limit))
    }, [page])

    const handleScroll = () => {
        if(page > maxPage) return
        const clientHeight = container.current?.clientHeight
        console.log('clientHeight', clientHeight)
        const blankTop = blank.current?.getBoundingClientRect().top // 元素上边距离页面上边的距离
        console.log('blankTop', blankTop)
        if(blankTop - clientHeight < 10){
            setPage(val => val + 1)
        }
    }

    return (
        <div onScroll={handleScroll} ref={container} style={{flexGrow: '1', overflow: 'scroll'}}>
            {
                showList.map(item =>
                    <div className="sunshine" key={item.tid}>
                        <span>{item.text}</span>
                    </div>
                )
            }
            <div ref={blank}></div>
        </div>

    )
}

export default BigList
