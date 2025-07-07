/**
 * 6气象天气
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/Q7Lzwnq9CigMRGkwmeNciQaun7M
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 6气象天气-6.1单点海洋气象
 * https://hiiau7lsqq.feishu.cn/wiki/AFfAwtwc1ifij6k5JQ9c2u3hnbh
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} weather_time 时间：非必填，utc时间，Unix时间戳。不填写则查询最近时间的气象数据。
 * @param {*} lng 经度：必填，WGS84坐标系，格式为lng=155.2134。
 * @param {*} lat 纬度：必填，WGS84坐标系，格式为lat=20.2134。
 * @returns 查看在线文档
 */
async function GetWeatherByPoint({ key, weather_time, lng, lat }) {
    let baseUrl = apiUrl + "/GetWeatherByPoint"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            weather_time: weather_time,
            lng: lng,
            lat: lat,
        },
    });
    return res.data
}

/**
 * 6气象天气-6.2海区气象
 * https://hiiau7lsqq.feishu.cn/wiki/EEdPwP4kqi10qjkehH5cmK2Onwc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} weather_type 区域类型：必填，查询区域的类型：0：全部；1：沿岸；2：近海；3：远海。
 * @returns 查看在线文档
 */
async function GetWeather({ key, weather_type }) {
    let baseUrl = apiUrl + "/GetWeather"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            weather_type: weather_type,
        },
    });
    return res.data
}

/**
 * 6气象天气-6.3全球台风-获取全球台风列表
 * https://hiiau7lsqq.feishu.cn/wiki/PuWSw4Nteir49WkMccMcryjNnbp
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @returns 查看在线文档
 */
async function GetAllTyphoon({ key }) {
    let baseUrl = apiUrl + "/GetAllTyphoon"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
        },
    });
    return res.data
}

/**
 * 6气象天气-6.3全球台风-获取单个台风信息
 * https://hiiau7lsqq.feishu.cn/wiki/PuWSw4Nteir49WkMccMcryjNnbp
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} typhoon_id 台风序号：必填，通过查询台风列表获得
 * @returns 查看在线文档
 */
async function GetSingleTyphoon({ key, typhoon_id }) {
    let baseUrl = apiUrl + "/GetSingleTyphoon"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            typhoon_id
        },
    });
    return res.data
}

/**
 * 6气象天气-6.4国内港口潮汐-查询国内潮汐观测站列表
 * https://hiiau7lsqq.feishu.cn/wiki/Ayoiw98eSi0PrpkZnLnclCy8nzd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @returns 查看在线文档
 */
async function GetTides({ key }) {
    let baseUrl = apiUrl + "/GetTides"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
        },
    });
    return res.data
}


/**
 * 6气象天气-6.4国内港口潮汐-查询单个观测站潮汐详情
 * https://hiiau7lsqq.feishu.cn/wiki/Ayoiw98eSi0PrpkZnLnclCy8nzd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} port_code 潮汐观测站id：必填，港口潮汐观测站id
 * @param {*} start_date 起始日期：必填，查询潮汐起始日期（2022-09-26），支持从2020年开始往后的历史数据查询。
 * @param {*} end_date 结束日期：必填，查询潮汐结束日期（2022-10-03）
 * @returns 查看在线文档
 */
async function GetTideData({ key, port_code, start_date, end_date }) {
    let baseUrl = apiUrl + "/GetTideData"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            port_code,
            start_date,
            end_date
        },
    });
    return res.data
}


module.exports = {
    GetWeatherByPoint,
    GetWeather,
    GetAllTyphoon,
    GetSingleTyphoon,
    GetTides,
    GetTideData
}