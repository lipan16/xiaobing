import React from 'react'
import myFetch from '@/api/services/fetchRequest'
import BPI_TIME from '@/components/BPITime'
import Api from '@/api'

const Home = () => {
    // Api.login('1').then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err.message)
    // })
    myFetch('/api/name/a', 'get').then(res => {
        console.log(res.info.name)
    }).catch(err => {
        console.log(err)
    })
    myFetch('/api/login?a=1', 'get').then(res => {
        console.log(res.info.name)
    }).catch(err => {
        console.log(err)
    })
    myFetch('/api/post', 'post', {'a': '1'}).then(res => {
        console.log(res.info.name)
    }).catch(err => {
        console.log(err)
    })

    return (
        <BPI_TIME/>
    )
}

export default Home
