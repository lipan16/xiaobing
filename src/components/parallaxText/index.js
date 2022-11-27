import React, {useRef, useEffect, useState} from 'react'
import {motion, useMotionValue, useVelocity, useSpring, useScroll, useTransform, useAnimationFrame} from 'framer-motion'
import {wrap} from '@motionone/utils'

import './index.less'

function ParallaxText({children, baseVelocity = 100}){
    const baseX = useMotionValue(0)

    const {scrollY} = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    // 速度
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`)

    // 方向
    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if(velocityFactor.get() < 0){
            directionFactor.current = -1
        }else if(velocityFactor.get() > 0){
            directionFactor.current = 1
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    const [Y, setY] = useState(0)
    requestAnimationFrame(() => {
        setY(prev => {
            if(prev >= 0){
                prev = -100
            }
            return +prev + 1
        })
    })

    return (
        <>
            <div className="parallax display-none">
                <div className="scroller" style={{transform: `translateX(${Y}%)`}}>
                    {/*<div className="scroll1"></div>*/}
                    {/*<div className="scroll1"></div>*/}
                    <div className="scrolls">
                        <div className="scroll-container-1"></div>
                        <div className="scroll-container-2"></div>
                    </div>
                    <div className="scrolls">
                        <div className="scroll-container-1"></div>
                        <div className="scroll-container-2"></div>
                    </div>
                </div>
            </div>
            <div className="parallax">
                <motion.ul className="scroller" style={{x}}>
                    <li style={{display: 'contents'}}>
                        <div className="scrolls">
                            <div className="scroll-container-1">{children}</div>
                            <div className="scroll-container-2">{children}</div>
                        </div>
                    </li>
                    <li style={{display: 'contents'}}>
                        <div className="scrolls">
                            <div className="scroll-container-1">{children}</div>
                            <div className="scroll-container-2">{children}</div>
                        </div>
                    </li>
                </motion.ul>
            </div>
        </>
    )
}

export default ParallaxText
