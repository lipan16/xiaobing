import React from 'react'
import BPI_TIME from '@/components/BPITime'
import Api from '@/api'

const Home = () => {
    Api.login('1').then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err.message)
    })
    return (
        <BPI_TIME/>
    )
}

export default Home
