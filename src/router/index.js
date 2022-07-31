import React from 'react'
import {Navigate} from 'react-router-dom'

import Home from '../views/Home'

const routes = [
    {path: '/', element: <Home />}
    // {path: '/', element: <Navigate replace to="task-list"/>},
    // {path: 'task-list', element: <TasksList/>}
]
export default routes
