import {TIME_FORM} from './constant';

import dayjs             from 'dayjs';
import duration          from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone          from 'dayjs/plugin/timezone';
import utc               from 'dayjs/plugin/utc';


dayjs.extend(duration);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

dayjs.tz.setDefault('Asia/Shanghai');

let date = dayjs(TIME_FORM);

export function getDateTime(type){
    let nowDate = dayjs();

    let y = Math.floor(dayjs.duration(nowDate.diff(date)).asYears());
    let M = dayjs.duration(nowDate.diff(date)).months();
    let D = Math.floor(dayjs.duration(nowDate.diff(date)).asDays());
    let d = Math.floor(dayjs.duration(nowDate.diff(date)).days());
    let H = dayjs.duration(nowDate.diff(date)).hours();
    let m = dayjs.duration(nowDate.diff(date)).minutes();
    let s = dayjs.duration(nowDate.diff(date)).seconds();
    console.log((type ? D : y + '年' + M + '月' + d) + '天' + H + '时' + m + '分' + s + '秒');
    return (type ? D : y + '年' + M + '个月' + d) + '天' + H + '时' + m + '分' + s + '秒';
}
