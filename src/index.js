import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {HashRouter, useRoutes} from 'react-router-dom'
import 'antd-mobile/es/global'
import VConsole from 'vconsole'

import '@/styles/global.less'

import store from './store'
import routes from './router'

const AppRoutes = () => useRoutes(routes)
const App = () => (
    <Provider store={store}>
        <HashRouter>
            <AppRoutes/>
        </HashRouter>
    </Provider>
)

createRoot(document.getElementById('root')).render(<App/>)
