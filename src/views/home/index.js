import AndroidKeyboardCover from '@/components/android-keyboard-cover'
import BigList from '@/components/bigList'
import IosInputHeight from '@/components/ios-input-height'
import IosKeyboardReset from '@/components/ios-keyboard-reset'
import MySwiper from '@/components/mySwiper'
import BPI_TIME from '@/components/BPITime'
import ParallaxText from '@/components/parallaxText'
import SSE from '@/components/SSE'
import SvgIcon from '@/components/SvgIcon'
import {Button} from 'antd-mobile'
import React, {useEffect} from 'react'

import Api from '@/api'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (<>
        home
        <Button onClick={() => navigate('/map')}>高德</Button>
    </>)
}

export default Home
