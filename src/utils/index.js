export let string2bool = function(str){
    if(!str) return false;
    if(str.length === 0) return false;
    return str !== '0';
};

export const arrayToObj = items => {
    const obj = {};
    items.forEach(item =>
        obj[item.value] = item.label
    );
    return obj;
};

export const arrayLabelToValueObj = items => {
    const obj = {};
    items.forEach(item =>
        obj[item.label] = item.value
    );
    return obj;
};

export const dateToYMD = date => {
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day   = date.getDate();
    month     = month < 10 ? '0' + month : month;
    day       = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
};

// 字符串长度校验，str: 字符串， len; 最大长度
export const strMax  = (str, len) => {
    if(str.length > len){
        return false;
    }
    return true;
};
//判断是否存在表情
export const isEmoji = (str) => {
    let emojiReg = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g;
    return !(emojiReg.test(str));
};

//返回时间戳格式数据 //返回格式：Fri Oct 29 2021 00:00:00 GMT+0800 (中国标准时间)
export const fullDateYMD = (timeStr) => {
    return timeStr ? timeStr.slice(0, 10) : '';
};

// 判断系统平台 手机、ipad、pc
export const systemPlatform = () => {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
        return 'mobile';
    }else if(/iPad/i.test(navigator.userAgent)){
        return 'iPad';
    }else{
        return 'pc';
    }
};
