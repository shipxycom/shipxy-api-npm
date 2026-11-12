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


/**
 * 查询全球潮汐观测站列表。
 * 文档：船讯网 V3 6.5 全球港口潮汐 / 6.6 新全球气象 / 6.7 历史气象记录。
 * 所有参数必填；气象 observation_time 返回 UTC 时间。
 */
async function GetGlobalTides({ key }) {
    const res = await axios({
        method: 'get',
        url: apiUrl + '/GetGlobalTides',
        params: { key },
    });
    return res.data;
}

/**
 * 查询全球观测站潮汐。port_code 为观测站 ID；日期 yyyy-MM-dd，单次不超过90天，未来不超过30天。
 * 文档：船讯网 V3 6.5 全球港口潮汐 / 6.6 新全球气象 / 6.7 历史气象记录。
 * 所有参数必填；气象 observation_time 返回 UTC 时间。
 */
async function GetGlobalTideData({ key, port_code, start_date, end_date }) {
    const res = await axios({
        method: 'get',
        url: apiUrl + '/GetGlobalTideData',
        params: { key, port_code, start_date, end_date },
    });
    return res.data;
}

/**
 * 查询 WGS84 坐标的实时大气和海洋气象。
 * 文档：船讯网 V3 6.5 全球港口潮汐 / 6.6 新全球气象 / 6.7 历史气象记录。
 * 所有参数必填；气象 observation_time 返回 UTC 时间。
 */
async function CurrentWeather({ key, lng, lat }) {
    const res = await axios({
        method: 'get',
        url: apiUrl + '/CurrentWeather',
        params: { key, lng, lat },
    });
    return res.data;
}

/**
 * 查询 WGS84 坐标的未来大气和海洋气象预报。
 * 文档：船讯网 V3 6.5 全球港口潮汐 / 6.6 新全球气象 / 6.7 历史气象记录。
 * 所有参数必填；气象 observation_time 返回 UTC 时间。
 */
async function FutureWeather({ key, lng, lat }) {
    const res = await axios({
        method: 'get',
        url: apiUrl + '/FutureWeather',
        params: { key, lng, lat },
    });
    return res.data;
}

/**
 * 查询历史气象。时间为北京时间 yyyy-MM-dd HH:mm:ss，单次不超过1个月，开始不早于3年前，结束须在24小时前。
 * 文档：船讯网 V3 6.5 全球港口潮汐 / 6.6 新全球气象 / 6.7 历史气象记录。
 * 所有参数必填；气象 observation_time 返回 UTC 时间。
 */
async function HistoryWeather({ key, lng, lat, start_time, end_time }) {
    const res = await axios({
        method: 'get',
        url: apiUrl + '/HistoryWeather',
        params: { key, lng, lat, start_time, end_time },
    });
    return res.data;
}

module.exports = {
    GetGlobalTides,
    GetGlobalTideData,
    CurrentWeather,
    FutureWeather,
    HistoryWeather,

    GetWeatherByPoint,
    GetWeather,
    GetAllTyphoon,
    GetSingleTyphoon,
    GetTides,
    GetTideData
}