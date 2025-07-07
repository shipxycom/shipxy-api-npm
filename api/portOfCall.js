/**
 * 4挂靠记录
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/F9Tkw1moeiiidAkgijJcdeD9nWe
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 4挂靠记录-4.1船舶历史挂靠记录
 * https://hiiau7lsqq.feishu.cn/wiki/Sv5rw61KVioV0ekq4ytcBpGgnGd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：非必填，船舶mmsi编号，9位数字。请求时船舶mmsi编号、imo、呼号、名称必填一项，全部不填则请求失败。
 * @param {*} imo imo编号：非必填，船舶imo编号
 * @param {*} ship_name 船舶名称：非必填，船舶英文名称，如果不同船舶的名称相同，则同名船舶的档案都将返回
 * @param {*} call_sign 船舶呼号：非必填，船舶呼号，如果不同船舶的呼号相同，则相同呼号档案都将返回
 * @param {*} start_time 开始时间：必填，历史靠港记录开始时间，Unix 时间戳start_time与end_time为必填项，表示查询[start_time，end_time]之间的结果，最多1次只能查询1年（366天）的靠港记录.
 * @param {*} end_time 结束时间：必填，历史靠港记录结束时间，unix 时间戳。
 * @param {*} time_zone 时区：选填，时间类型(选填)。 1当地时区，如果不存在，使用零时区；2北京时区；3零时区，即格林尼治平均时。默认值：2。
 * @returns 查看在线文档
 */
async function GetPortofCallByShip({ key, mmsi, imo, ship_name, call_sign, start_time, end_time, time_zone }) {
    let baseUrl = apiUrl + "/GetPortofCallByShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            imo: imo,
            ship_name: ship_name,
            call_sign: call_sign,
            start_time: start_time,
            end_time: end_time,
            time_zone: time_zone
        },
    });
    return res.data
}


/**
 * 4挂靠记录-4.2船舶挂靠指定港口记录
 * https://hiiau7lsqq.feishu.cn/wiki/R01xw8GxYiPd08kGhDeckVojnSC
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：非必填，船舶mmsi编号，9位数字。请求时船舶mmsi编号、imo、呼号、名称必填一项，全部不填则请求失败。
 * @param {*} imo imo编号：非必填，船舶imo编号
 * @param {*} ship_name 船舶名称：非必填，船舶英文名称，如果不同船舶的名称相同，则同名船舶的档案都将返回
 * @param {*} call_sign 船舶呼号：非必填，船舶呼号，如果不同船舶的呼号相同，则相同呼号档案都将返回
 * @param {*} port_code 港口标准code：必填，港口标准五位码
 * @param {*} start_time 开始时间：必填，历史靠港记录开始时间，Unix 时间戳start_time与end_time为必填项，表示查询[start_time，end_time]之间的结果，最多1次只能查询1年（366天）的靠港记录.
 * @param {*} end_time 结束时间：必填，历史靠港记录结束时间，unix 时间戳。
 * @param {*} time_zone 时区：选填，时间类型(选填)。 1当地时区，如果不存在，使用零时区；2北京时区；3零时区，即格林尼治平均时。默认值：2。
 * @returns 查看在线文档
 */
async function GetPortofCallByShipPort({ key, mmsi, imo, ship_name, call_sign, port_code, start_time, end_time, time_zone }) {
    let baseUrl = apiUrl + "/GetPortofCallByShipPort"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            imo: imo,
            ship_name: ship_name,
            call_sign: call_sign,
            port_code: port_code,
            start_time: start_time,
            end_time: end_time,
            time_zone: time_zone
        },
    });
    return res.data
}

/**
 * 4挂靠记录-4.3船舶当前挂靠信息
 * https://hiiau7lsqq.feishu.cn/wiki/O3PRwZoAjiX3DdknudicZnVpnxH
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：必填，船舶mmsi编号，9位数字。请求时船舶mmsi编号、imo、呼号、名称必填一项，全部不填则请求失败。
 * @param {*} imo imo编号：非必填，船舶imo编号
 * @param {*} ship_name 船舶名称：非必填，船舶英文名称，如果不同船舶的名称相同，则同名船舶的档案都将返回
 * @param {*} call_sign 船舶呼号：非必填，船舶呼号，如果不同船舶的呼号相同，则相同呼号档案都将返回
 * @param {*} time_zone 时区：选填，时间类型(选填)。 1当地时区，如果不存在，使用零时区；2北京时区；3零时区，即格林尼治平均时。默认值：2。
 * @returns 查看在线文档
 */
async function GetShipStatus({ key, mmsi, imo, ship_name, call_sign, time_zone }) {
    let baseUrl = apiUrl + "/GetShipStatus"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            imo: imo,
            ship_name: ship_name,
            call_sign: call_sign,
            time_zone: time_zone
        },
    });
    return res.data
}


/**
 * 4挂靠记录-4.4港口挂靠历史船舶
 * https://hiiau7lsqq.feishu.cn/wiki/G9BDwzNPqiXdyckzFrBctxYUnHd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} port_code 港口标准code：必填，港口标准五位码
 * @param {*} start_time 开始时间：必填，历史靠港记录开始时间，Unix 时间戳start_time与end_time为必填项，表示查询[start_time，end_time]之间的结果，最多1次只能查询1年（366天）的靠港记录.
 * @param {*} end_time 结束时间：必填，历史靠港记录结束时间，unix 时间戳。
 * @param {*} type 查询类型：选填，查询类型（选填）。1，按照ATA（到港时间）查询；2，按照ATD（离港时间）查询。默认值：1
 * @param {*} time_zone 时区：选填，时间类型(选填)。 1当地时区，如果不存在，使用零时区；2北京时区；3零时区，即格林尼治平均时。默认值：2。
 * @returns 查看在线文档
 */
async function GetPortofCallByPort({ key, port_code, start_time, end_time, type, time_zone }) {
    let baseUrl = apiUrl + "/GetPortofCallByPort"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            port_code: port_code,
            start_time: start_time,
            end_time: end_time,
            type: type,
            time_zone: time_zone
        },
    });
    return res.data
}

module.exports = {
    GetPortofCallByShip,
    GetPortofCallByShipPort,
    GetShipStatus,
    GetPortofCallByPort
}