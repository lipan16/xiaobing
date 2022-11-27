import React from 'react'
import {Navigate} from 'react-router-dom'

import Map from '@/views/map'
import Home from '../views/home'

const routes = [
    {
        path: '/', element: <Home/>, children: [
            {path: 'map', element: <Map/>},
        ]
    },
]
export default routes
