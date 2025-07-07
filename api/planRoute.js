/**
 * 5航线规划
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/V7fRwdd9Ni4lZskEEVZcXQnAnOe
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 5航线规划-5.1点到点航线规划
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} start_point 起始点：必填，出发的位置点，lng,lat
 * @param {*} end_point 结束点：必填，到达的位置点，lng,lat
 * @param {*} avoid 绕航节点：非必填，需要避让的节点，id详见附录7 。绕航多节点时，不同id之间使用逗号分隔；不填则不绕航；一次请求绕航的节点控制在10个以内。
 * @param {*} through 查询类型：非必填，必经的点，lng,lat - lng,lat；多点之间用“-”连接；不填则不必经；一次请求途经的节点控制在30个以内。
 * @returns 查看在线文档
 */
async function PlanRouteByPoint({ key, start_point, end_point, avoid, through }) {
    let baseUrl = apiUrl + "/PlanRouteByPoint"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            start_point: start_point,
            end_point: end_point,
            avoid: avoid,
            through: through,
        },
    });
    return res.data
}


/**
 * 5航线规划-5.2港到港航线规划
 * https://hiiau7lsqq.feishu.cn/wiki/NpsbwNzWWiJRy2k79bscVljTntd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} start_port_code 起始港：必填，出发港PortCode港口标准五位码
 * @param {*} end_port_code 结束港：必填，到达港PortCode港口标准五位码
 * @param {*} avoid 绕航节点：非必填，需要避让的节点，id详见附录7 。绕航多节点时，不同id之间使用逗号分隔；不填则不绕航；一次请求绕航的节点控制在10个以内。
 * @param {*} through 查询类型：非必填，必经的点，lng,lat - lng,lat；多点之间用“-”连接；不填则不必经；一次请求途经的节点控制在30个以内。
 * @returns 查看在线文档
 */
async function PlanRouteByPort({ key, start_port_code, end_port_code, avoid, through }) {
    let baseUrl = apiUrl + "/PlanRouteByPort"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            start_port_code: start_port_code,
            end_port_code: end_port_code,
            avoid: avoid,
            through: through,
        },
    });
    return res.data
}

/**
 * 5航线规划-5.3预计到达时间(ETA)查询
 * https://hiiau7lsqq.feishu.cn/wiki/NMxnw8fEHiRhrPkIpwTcovdfnOg
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：必填，船舶mmsi编号，9 位数字
 * @param {*} port_code 港口标准code：非必填，港口标准CODE值，可以使用港口查询API获取。如果此处不填写港口，则默认查询船舶在AIS中填写的下一目的港口。
 * @param {*} speed 设定船速：非必填，船舶在接下来的航行中维持的速度，单位：节。如果此处不填写，则默认按照船舶近一个月的平均航速来计算预计到达，平均航速是去掉在港口地区锚泊的船速信息后计算的平均值。
 * @returns 查看在线文档
 */
async function GetSingleETAPrecise({ key, mmsi, port_code, speed }) {
    let baseUrl = apiUrl + "/GetSingleETAPrecise"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            port_code: port_code,
            speed: speed,
        },
    });
    return res.data
}


module.exports = {
    PlanRouteByPoint,
    PlanRouteByPort,
    GetSingleETAPrecise
}