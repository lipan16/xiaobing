import AndroidKeyboardCover from '@/components/android-keyboard-cover'
import BigList from '@/components/bigList'
import IosInputHeight from '@/components/ios-input-height'
import IosKeyboardReset from '@/components/ios-keyboard-reset'
import MySwiper from '@/components/mySwiper'
import BPI_TIME from '@/components/BPITime'
import SSE from '@/components/SSE'
import React from 'react'

import Api from '@/api'

const Home = () => {
    // Api.login({username: 'lipan'}).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err.message)
    // })

    return (<>
        {/*<BPI_TIME/>*/}
        <BigList/>
    </>)
}

export default Home
