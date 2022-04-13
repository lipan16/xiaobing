import {NavBar, Toast}            from 'antd-mobile';
import {useNavigate}              from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './index.less';
import btn_search                 from '../../assets/search.svg';

import {getDateTime}         from '../../utils/day';
import {useEffect, useState} from 'react';

const Home = function(){
    let navigate = useNavigate();
    let count    = useSelector(state => state.count);
    let timeType = useSelector(state => state.timeType);
    let dispatch = useDispatch();

    let [dataTime, setDataTime] = useState('');

    useEffect(() => {
        window.timeInterval = setInterval(() => {
            setDataTime(getDateTime(timeType));
            clearInterval(window.timeInterval);
        }, 1000);
        return () => {
            clearInterval(window.timeInterval);
        };
    }, [dataTime]);

    const Events = {
        back    : () => {
            Toast.show({
                content : '点击了返回区域',
                duration: 1000
            });
        },
        toDetail: () => {
            navigate('/detail');
        },
        add     : data => {
            dispatch({type: '+', data});
        },
        changesTimeType(){
            clearInterval(window.timeInterval);
            dispatch({type: 'timeType', data: !timeType});
            setDataTime(getDateTime(!timeType));
        }
    };

    return (
        <div className="home">
            <NavBar className="nav-bar" onBack={Events.back} right={<img src={btn_search} style={{width: 18, height: 18}} alt=""/>}>
                <div onClick={Events.changesTimeType}>{dataTime || getDateTime(timeType)}</div>
            </NavBar>
            <div>
                <div onClick={Events.toDetail} className="aaa">12</div>
                <h1>{count}</h1>
                <button onClick={() => Events.add(1)}>count ++</button>
                <button onClick={() => Events.add(2)}>count + 2</button>
            </div>
        </div>
    );
};

export default Home;
