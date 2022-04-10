import sensors from 'sa-sdk-javascript'
import config from '../../../package.json'

// 神策初始化
sensors.init({
    server_url: process.env.REACT_APP_SENSORS_URL, // 项目数据接收地址
    // is_track_single_page: true, // 如果是单页面框架，请放开此配置
    use_client_time: false,
    send_type: 'ajax', // 以post方式发送数据，默认是get方式
    show_log: false, // 测试时，可以设置为true，来打印日志
    // datasend_timeout: 6000,
    heatmap: {
        clickmap: 'not_collect', // 是否开启点击图，自动采集 $WebClick 事件
        scroll_notice_map: 'not_collect' // 是否开启触达注意力图，自动采集 $WebStay 事件
    },
    // batch_send: {
    //     datasend_timeout: 6000, // 一次请求超过多少毫秒的话自动取消，防止请求无响应。
    //     send_interval: 6000, // 间隔多少毫秒发一次数据。
    //     one_send_max_length: 6 // 一次请求最大发送几条数据，防止数据太大。
    // },
})

// 所有神策请求都需要添加的属性
sensors.registerPage({
    APPNAME: config.name
});

// 调用代码之后，SDK 就会自动收集页面浏览事件。
// sensors.quick('autoTrack')

const SensorsApi = {
    login(info){
        try{
            sensors.login(info.notesid);
            sensors.track('QJ', {
                user_time: new Date(),
                notes_id: info.notesid,
                orgid: info.orgid, // 机构号
                hmnRsrcNo: info.HmnRsrcNo, // 人力资源号
                rlNm: info.RlNm, // 客户经理身份
                orgName_ZH: info.OrgName_ZH, // 所属机构支行名称
                orgNum_ZH: info.OrgNum_ZH, // 所属机构支行机构号
                orgName_FH: info.OrgName_FH, // 所属机构分行名称
                orgNum_FH: info.OrgNum_FH, // 所属机构分行机构号
            })
            sensors.track('QJ_khjd_login', {
                user_time: new Date(),
                notes_id: info.notesid,
                orgid: info.orgid,
                hmnRsrcNo: info.HmnRsrcNo,
                rlNm: info.RlNm,
                orgName_ZH: info.OrgName_ZH, // 所属机构支行名称
                orgNum_ZH: info.OrgNum_ZH, // 所属机构支行机构号
                orgName_FH: info.OrgName_FH, // 所属机构分行名称
                orgNum_FH: info.OrgNum_FH, // 所属机构分行机构号
            })
        }catch{
            console.error('埋点异常')
        }
    },
}

export default SensorsApi
