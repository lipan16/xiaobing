import AndroidKeyboardCover from '@/components/android-keyboard-cover'
import IosInputHeight from '@/components/ios-input-height'
import IosKeyboardReset from '@/components/ios-keyboard-reset'
import MySwiper from '@/components/mySwiper'
import React from 'react'

import BPI_TIME from '@/components/BPITime'
import Api from '@/api'

const Home = () => {
    // Api.login({username: 'lipan'}).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err.message)
    // })
    Api.loginPost({username: 'lipan'}).then(res => {
        console.log('res', res)
    }).catch(err => {
        console.log(err.message)
    })

    return (<>
        <BPI_TIME/>
        <MySwiper/>
    </>)
}

export default Home
