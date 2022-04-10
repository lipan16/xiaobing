import {render}                    from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {Toast}                     from 'antd-mobile';
import VConsole                    from 'vconsole';
import {Provider}                  from 'react-redux';

import Home   from './views/Home';
import Detail from './views/Detail';
import './index.less';

import Api                  from './api';
import SensorsApi           from './api/sensors';
import {isXZH, string2bool} from './common/utils.js';
import store                from './store';

Toast.config({maskClickable: false});

// 全局操作改变原生应用
!string2bool(process.env.REACT_APP_VCONSOLE) && isXZH() && new VConsole();

render(
    <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="detail" element={<Detail/>}/>
            </Routes>
        </HashRouter>
    </Provider>, document.getElementById('root')
);


