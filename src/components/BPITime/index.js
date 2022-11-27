import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {changeTimeType} from '@/store/bpiTime'
import {getBpiTime} from '@/utils/bpiTime'
import SvgIcon from '@/components/SvgIcon'
import './index.less'

const BPI_TIME = (props) => {
    let timeType = useSelector((state) => state.bpiTime.timeType)
    let dispatch = useDispatch()

    let [dataTime, setDataTime] = useState('')

    useEffect(() => {
        window.timeInterval = setInterval(() => {
            setDataTime(getBpiTime(timeType))
            clearInterval(window.timeInterval)
        }, 1000)
        return () => {
            clearInterval(window.timeInterval)
        }
    }, [dataTime])

    const changesTimeType = () => {
        clearInterval(window.timeInterval)
        dispatch(changeTimeType(!timeType))
        setDataTime(getBpiTime(!timeType))
    }

    return (
        <div className='bpi-time flex-inline'>
            <SvgIcon name='back' className='left' onClick={props.leftClick} fill='#ff00ff'/>
            <div className='title' onClick={changesTimeType}>{dataTime || getBpiTime(timeType)}</div>
            <div className='test'></div>
        </div>
    )
}

export default BPI_TIME
