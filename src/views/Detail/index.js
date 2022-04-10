import {NavBar}      from 'antd-mobile';
import {useSelector} from 'react-redux';

import './index.less';
import backbtn       from '../../assets/back-black.svg';

const Detail = function(){
    let count    = useSelector(state => state.count);
    const onBack = () => {
        window.history.back();
    };

    return (
        <div className="detail bg">
            <NavBar className="nav-bar" backArrow={<img src={backbtn} style={{width: 10, height: 18}} alt=''/>}
                    onBack={onBack}>任务详情</NavBar>
            <div className="content">
                <div onClick={onBack}>
                    goback
                </div>
                <h1>{count}</h1>
            </div>
        </div>
    );
};

export default Detail;
