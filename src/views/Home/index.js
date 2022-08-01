import React from 'react'
import myFetch from '@/api/services/fetchRequest'
import BPI_TIME from '@/components/BPITime'
import Api from '@/api'

const Home = () => {
    Api.login({username: 'lipan'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err.message)
    })
    Api.loginPost({username: 'lipan'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err.message)
    })

    return (
        <BPI_TIME/>
    )
}

export default Home
