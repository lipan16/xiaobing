import React, {useState, useRef} from 'react'

import './index.less'

const mySwiper = () => {
    const imgs = []
    const [swiperIndex, setSwiperIndex] = useState(0)
    const swiperRef = useRef()


    window.swiper = setInterval(() => {
        if(window.swiper){
            clearInterval(window.swiper)
        }
        if(swiperIndex + 1 === imgs.length){
            swiperRef.current.style.transform = 'translateX(100%)'
            swiperRef.current.style.transition = 'none'
            swiperRef.current.clientHeight
            requestAnimationFrame(()=>{
                console.log(swiperRef.current.style)
                console.log(swiperIndex)
            })
            setSwiperIndex(0)
        }else{
            setSwiperIndex(swiperIndex + 1)
        }

    }, 1000)

    return (<div className="my-swiper">
        <div className="swiper-item flex-inline" ref={swiperRef}
             style={{transform: `translateX(-${swiperIndex}00%)`, transition: swiperIndex === 0 ? `0s` : `0.5s`}}>
            {/*<div><img className="swiper-item-img" src={imgs[0]} alt=""/></div>*/}
            {imgs.map((item, index) =>
                <div key={index}><img className="swiper-item-img" src={item} alt=""/></div>
            )}
            {/*<div><img className="swiper-item-img" src={imgs[imgs.length - 1]} alt=""/></div>*/}
        </div>
        <div className="swiper-indicator flex-inline">
            {imgs.map((item, index) =>
                <span key={index} className={index === swiperIndex ? 'active' : ''} onClick={() => setSwiperIndex(index)}></span>
            )}
        </div>
    </div>)

}

export default mySwiper
