import AndroidKeyboardCover from '@/components/android-keyboard-cover'
import BigList from '@/components/bigList'
import IosInputHeight from '@/components/ios-input-height'
import IosKeyboardReset from '@/components/ios-keyboard-reset'
import MySwiper from '@/components/mySwiper'
import BPI_TIME from '@/components/BPITime'
import SSE from '@/components/SSE'
import {Badge} from 'antd-mobile'
import React, {useEffect, useState} from 'react'

import Api from '@/api'

const Home = () => {
    // Api.login({username: 'lipan'}).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err.message)
    // })
    let [badge, setBadge] = useState('')
    useEffect(() => {
        Api.getBadge().then(res => {
            setBadge(res.badge)
            console.log(res)
        })
    }, [])

    return (<>
        <BPI_TIME/>
        <div>
            <Badge content={badge}>
                <div>角色</div>
            </Badge>
        </div>
        {/*<BigList/>*/}
    </>)
}

export default Home
