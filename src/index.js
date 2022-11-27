import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {useRoutes, BrowserRouter, HashRouter, useLocation} from 'react-router-dom'
import 'antd-mobile/es/global'
import VConsole from 'vconsole'

import '@/styles/global.less'

import store from './store'
import routes from './router'

const AppRoutes = () => {
    const route = useRoutes(routes)
    const location = useLocation()

    let token = 'token'
    // if(location.pathname === '/login' && token){
    //     return <Home/>
    // }
    // if(location.pathname !== 'login' && !token){
    //     return <Login/>
    // }
    return route
}

async function bootstrap(){
    const app = createRoot(document.getElementById('root'))

    app.render(
        <Provider store={store}>
            <HashRouter>
                <AppRoutes/>
            </HashRouter>
        </Provider>
    )
}

bootstrap()
