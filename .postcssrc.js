module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16,             // 根元素大小
            propList: ['*'],             // 存储将被转换的存储列表，‘*’表示所有
            unitPrecision: 3,           // rem保留小数点位数
            //selectorBlackList: [],      // 对css选择器过滤，忽略保留px
            //minPixelValue: 0,         // 被转换的px的值的最小值
            //exclude: '/src/media.less'  //需要忽略转换的文件路径
        }
    }
}