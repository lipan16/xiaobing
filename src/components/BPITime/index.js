import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {motion} from 'framer-motion'

import {changeTimeType} from '@/store/bpiTime'
import {getBpiTime} from '@/utils/bpiTime'
import SvgIcon from '@/components/SvgIcon'
import './index.less'

const BPI_TIME = (props) => {
    let timeType = useSelector((state) => state.bpiTime.timeType)
    let dispatch = useDispatch()
    const [baseX, setBaseX] = useState(0)

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

    requestAnimationFrame(() => {
        setBaseX(prev => {
            if(prev >= 0){
                prev = -100
            }
            return +prev + 1
        })
    })

    return (
        <motion.div className='bpi-time flex-inline'>
            <SvgIcon name='back' className='left' onClick={props.leftClick} fill='#fff'/>
            <motion.div className='title' onClick={changesTimeType}>{dataTime || getBpiTime(timeType)}</motion.div>
            <div className='text-blur'/>
            <div className="bg-scroll" style={{transform: `translateX(${baseX}%)`}}>
                <div className="scrolls">
                    <div className="scroll-container-1"></div>
                    <div className="scroll-container-2"></div>
                </div>
                <div className="scrolls">
                    <div className="scroll-container-1"></div>
                    <div className="scroll-container-2"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default BPI_TIME
