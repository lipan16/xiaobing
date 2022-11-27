import React from 'react'

import Index from '@/views'
import Map from '@/views/map'
import Home from '../views/home'

const routes = [
    {
        path: '/', element: <Index/>, children: [
            {path: '/', element: <Home/>},
            {path: 'map', element: <Map/>},
        ]
    },
]
export default routes
