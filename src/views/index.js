import BPI_TIME from '@/components/BPITime'
import React, {useEffect} from 'react'

import Api from '@/api'
import {useNavigate, Outlet} from 'react-router-dom'

const Root = () => {
    const navigate = useNavigate()
    useEffect(() => {
        Api.login({username: 'lipan'}).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])

    return (<>
        <BPI_TIME leftClick={() => navigate(-1)}/>
        <Outlet/>
    </>)
}

export default Root
