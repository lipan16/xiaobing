import {NavBar}                   from 'antd-mobile';
import {useNavigate}              from 'react-router-dom';

import './index.less';
import backbtn                    from '../../assets/back-black.svg';
import searchbtn                  from '../../assets/search.svg';
import {useDispatch, useSelector} from 'react-redux';

const Home = function(){
    let navigate = useNavigate();
    let count    = useSelector(state => state.count);
    let dispatch = useDispatch();

    const toDetail = () => {
        navigate('/detail');
    };
    const add1     = () => {
        dispatch({type: '+', data: 1});
    };
    const add2     = () => {
        dispatch({type: '+', data: 2});
    };
    return (
        <div className="home">
            <NavBar className="nav-bar" backArrow={<img src={backbtn} style={{width: 10, height: 18}} alt=""/>}
                    right={<img src={searchbtn} style={{width: 18, height: 18}} alt=""/>}>
                <div>尽调任务</div>
            </NavBar>
            <div>
                <div onClick={toDetail}>detail</div>
                <div>{count}</div>
                <button onClick={add1}>count ++</button>
                <button onClick={add2}>count + 2</button>
            </div>
        </div>
    );
};

export default Home;
