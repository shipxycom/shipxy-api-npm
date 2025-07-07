/**
 * 1船舶查询
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/YySywXJr8iVGwqktYsYcftwknFg
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 1船舶查询-1.1船舶模糊查询
 * https://hiiau7lsqq.feishu.cn/wiki/VCSYw1FU3iP0zwk2IIFcf2oynPb
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} keywords 关键字：必填，船舶查询的输入关键字，可以是船名、呼号、MMSI、IMO 等；匹配原则：MMSI 为 9 位数, IMO 为 7 位数
 * @param {*} max 最大返回数量：选填，最多返回的结果数量，该值最大 100
 * @returns 查看在线文档
 */
async function SearchShip({ key, keywords, max }) {
    let baseUrl = apiUrl + "/SearchShip"
    let res = await axios({
        method: 'post',
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
 * 1船舶查询-1.2船舶位置查询-单船位置查询
 * https://hiiau7lsqq.feishu.cn/wiki/GxF2w6cZHisQiEkBRatcoIqlnfc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：必填，船舶mmsi编号，9 位数字
 * @returns 查看在线文档
 */
async function GetSingleShip({ key, mmsi }) {
    let baseUrl = apiUrl + "/GetSingleShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
        },
    });
    return res.data
}

/**
 * 1船舶查询-1.2船舶位置查询-多船位置查询
 * https://hiiau7lsqq.feishu.cn/wiki/GxF2w6cZHisQiEkBRatcoIqlnfc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsis 船舶mmsi编号：必填，船舶编号，船舶mmsi编号，多船查询以英文逗号隔开，单次查询船舶数量不超过100
 * @returns 查看在线文档
 */
async function GetManyShip({ key, mmsis }) {
    let baseUrl = apiUrl + "/GetManyShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsis: mmsis,
        },
    });
    return res.data
}

/**
 * 1船舶查询-1.2船舶位置查询-船队船位置查询
 * https://hiiau7lsqq.feishu.cn/wiki/GxF2w6cZHisQiEkBRatcoIqlnfc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队编号：必填，控制台中维护的船队id，查询船队下所有船舶数据。
 * @returns 查看在线文档
 */
async function GetFleetShip({ key, fleet_id }) {
    let baseUrl = apiUrl + "/GetFleetShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            fleet_id: fleet_id,
        },
    });
    return res.data
}

/**
 * 1船舶查询-1.3周边船舶查询
 * https://hiiau7lsqq.feishu.cn/wiki/XXTiwDpetivSFhkciWic6qarnOc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：必填，船舶mmsi编号，9 位数字
 * @returns 查看在线文档
 */
async function GetSurRoundingShip({ key, mmsi }) {
    let baseUrl = apiUrl + "/GetSurRoundingShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
        },
    });
    return res.data
}

/**
 * 1船舶查询-1.4区域船舶查询
 * https://hiiau7lsqq.feishu.cn/wiki/ZlcrwKpgqik1L3kvbIMcBJUCn1U
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} region 查询区域：必填，经纬度逗号分隔，多个点减号分隔，如： （lng,lat - lng,lat ）经纬度数，多个经纬度坐标点必须按照顺时针或逆时针依次输入。
 * @param {*} output 输出格式：选填，输出数据格式类型选择：0为二进制 Base64 编码，1为json格式，默认为1
 * @param {*} scode 会话令牌：选填，当区域范围船舶单次请求无法全部返回时，可以根据首次请求返回的scode再次请求剩余的数据，保证全部返回。
 * @returns 查看在线文档
 */
async function GetAreaShip({ key, region, output, scode }) {
    let baseUrl = apiUrl + "/GetAreaShip"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            region: region,
            output: output,
            scode: scode
        },
    });
    return res.data
}


/**
 * 1船舶查询-1.5船舶船籍查询
 * https://hiiau7lsqq.feishu.cn/wiki/Ko5gw1o0ZiMQankWEAscSMoin7g
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：必填，船舶mmsi编号
 * @returns 查看在线文档
 */
async function GetShipRegistry({ key, mmsi }) {
    let baseUrl = apiUrl + "/GetShipRegistry"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
        },
    });
    return res.data
}


/**
 * 1船舶查询-1.6船舶档案查询
 * https://hiiau7lsqq.feishu.cn/wiki/Vvd2wHECliYz6okSoYucTRXvnsd
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} mmsi 船舶mmsi编号：非必填，船舶mmsi编号，9位数字。请求时船舶mmsi编号、imo、呼号、名称必填一项，全部不填则请求失败。
 * @param {*} imo imo编号：非必填，船舶imo编号
 * @param {*} call_sign 船舶呼号：非必填，船舶呼号，如果不同船舶的呼号相同，则相同呼号档案都将返回
 * @param {*} ship_name 船舶名称：非必填，船舶英文名称，如果不同船舶的名称相同，则同名船舶的档案都将返回
 * @returns 查看在线文档
 */
async function SearchShipParticular({ key, mmsi, imo, call_sign, ship_name }) {
    let baseUrl = apiUrl + "/SearchShipParticular"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key: key,
            mmsi: mmsi,
            imo: imo,
            call_sign: call_sign,
            ship_name: ship_name
        },
    });
    return res.data
}

module.exports = {
    SearchShip,
    GetSingleShip,
    GetManyShip,
    GetManyShip,
    GetFleetShip,
    GetSurRoundingShip,
    GetAreaShip,
    GetShipRegistry,
    SearchShipParticular
};