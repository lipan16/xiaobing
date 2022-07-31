import moment from 'moment'

const date = moment('2018-11-04 18:36:00')

export function getBpiTime(type){
    let nowDate = moment()
    let y = moment.duration(nowDate.diff(date)).years()
    let M = moment.duration(nowDate.diff(date)).months()
    let D = Math.floor(moment.duration(nowDate.diff(date)).asDays())
    let d = moment.duration(nowDate.diff(date)).days()
    let H = moment.duration(nowDate.diff(date)).hours()
    let m = moment.duration(nowDate.diff(date)).minutes()
    let s = moment.duration(nowDate.diff(date)).seconds()
    return (type ? D : y + '年' + M + '个月' + d) + '天' + H + '时' + m + '分' + s + '秒'
}

