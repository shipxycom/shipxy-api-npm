/**
 * 3历史行为
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/N7oEwCZotiQLVQknmsKcRqEEnFb
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 3历史行为-3.1船舶历史轨迹查询
 * https://hiiau7lsqq.feishu.cn/wiki/RK2Uwh7tziQ7SnkzlDgcUk8Nnkc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶编号：必填，船舶mmsi编号
 * @param {*} start_time 开始时间：必填，查询的开始时间，unix时间戳
 * @param {*} end_time 结束时间：必填，查询的截止时间，unix时间戳
 * @param {*} output 输出格式：选填，输出数据格式类型选择：0为二进制 Base64 编码，1为json格式，默认为1。
 * @returns 
 */
async function GetShipTrack({ key, mmsi, start_time, end_time, output }) {
    let baseUrl = apiUrl + "/GetShipTrack"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            start_time: start_time,
            end_time: end_time,
            output: output,
        },
    });
    return res.data
}


/**
 * 3历史行为-3.2船舶搭靠记录查询
 * https://hiiau7lsqq.feishu.cn/wiki/GYrTwxfzRiQdDxkJYOWcF3kKnnf
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶编号：必填，船舶mmsi编号，9 位数字
 * @param {*} start_time 开始时间：必填，开始时间，utc时间戳。
 * @param {*} end_time 结束时间：必填，结束时间，utc时间戳。单次请求查询中，开始时间和结束时间的间隔不超过1个月。
 * @param {*} approach_zone 搭靠地区：选填，1代表港口地区搭靠；2代表锚地搭靠；3代表其他地点搭靠；不填写返回全部。
 * @returns 
 */
async function SearchshipApproach({ key, mmsi, start_time, end_time, approach_zone }) {
    let baseUrl = apiUrl + "/SearchshipApproach"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            start_time: start_time,
            end_time: end_time,
            approach_zone: approach_zone,
        },
    });
    return res.data
}


module.exports = {
    GetShipTrack,
    SearchshipApproach
}