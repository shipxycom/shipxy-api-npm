/**
 * 2港口查询
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/QRx2watmwiQVZjkiCuKc9icQncg
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 2港口查询-2.1港口信息查询
 * https://hiiau7lsqq.feishu.cn/wiki/DAlUwEn9Zi50gckSv0uc1qsIn6f
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} keywords 关键字：必填，港口查询的输入关键字，可以是港口中文/英文名称、港口标准五位码 
 * @param {*} max 最大返回数量：选填，最多返回的结果数量，该值最大 100
 * @returns 查看在线文档
 */
async function SearchPort({ key, keywords, max }) {
    let baseUrl = apiUrl + "/SearchPort"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            keywords: keywords,
            max: max,
        },
    });
    return res.data
}


/**
 * 2港口查询-2.2港口当前靠泊船查询
 * https://hiiau7lsqq.feishu.cn/wiki/KdBNwIxOhijpALkCkNXc69MKn3g
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} port_code 港口标准code：必填，港口标准五位码
 * @param {*} ship_type 船舶类型：选填，筛选船舶的类型，船舶类型清单请参考文档，不填写时返回全部船舶。
 * @returns 查看在线文档
 */
async function GetBerthShips({ key, port_code, ship_type }) {
    let baseUrl = apiUrl + "/GetBerthShips"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            port_code: port_code,
            ship_type: ship_type,
        },
    });
    return res.data
}


/**
 * 2港口查询-2.3港口当前到锚船舶查询
 * https://hiiau7lsqq.feishu.cn/wiki/WTHnwa66niA4VhkmNVXchRRSnYe
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} port_code 港口标准code：必填，港口标准五位码
 * @param {*} ship_type 船舶类型：选填，筛选船舶的类型，船舶类型清单请参考文档，不填写时返回全部船舶。
 * @returns 查看在线文档
 */
async function GetAnchorShips({ key, port_code, ship_type }) {
    let baseUrl = apiUrl + "/GetAnchorShips"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            port_code: port_code,
            ship_type: ship_type,
        },
    });
    return res.data
}


/**
 * 2港口查询-2.4港口预抵船舶查询
 * https://hiiau7lsqq.feishu.cn/wiki/Poe3wdXkwiwzMUkATcJcigeBnJh
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} port_code 港口标准code：必填，港口标准五位码
 * @param {*} start_time 开始时间：必填，开始时间，utc时间戳。开始时间必须大于当前时间
 * @param {*} end_time 结束时间：必填，结束时间，utc时间戳。单次请求查询中，开始时间和结束时间的间隔不超过1周。
 * @param {*} ship_type 船舶类型：选填，筛选船舶的类型，船舶类型清单请参考文档，不填写时返回全部船舶。
 * @returns 
 */
async function GetETAShips({ key, port_code, start_time, end_time, ship_type }) {
    let baseUrl = apiUrl + "/GetETAShips"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            port_code: port_code,
            start_time: start_time,
            end_time: end_time,
            ship_type: ship_type,
        },
    });
    return res.data
}



module.exports = {
    SearchPort,
    GetBerthShips,
    GetAnchorShips,
    GetETAShips
}