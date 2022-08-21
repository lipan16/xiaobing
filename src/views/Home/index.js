import AndroidKeyboardCover from '@/components/android-keyboard-cover'
import IosInputHeight from '@/components/ios-input-height'
import IosKeyboardReset from '@/components/ios-keyboard-reset'
import MySwiper from '@/components/mySwiper'
import BPI_TIME from '@/components/BPITime'
import SSE from '@/components/SSE'
import React from 'react'

import PublishSubscribeModel from '@/components/publish-subscribe-model'
import Api from '@/api'

const Home = () => {
    // Api.login({username: 'lipan'}).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err.message)
    // })

    return (<>
        <BPI_TIME/>
        <MySwiper/>
        <SSE/>
    </>)
}

export default Home
