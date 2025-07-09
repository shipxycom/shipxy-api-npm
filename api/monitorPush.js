/**
 * 9监控推送
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/CH6RwXgt6ipfyXkzL7WcHXunnKb
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-创建船队
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_name 船队名称：必填，为您创建的船队起名，用来后续查询和区分
 * @param {*} mmsis 船舶清单：必填，添加船队下管理的船舶信息，输入多个mmsi编号，用英文逗号隔开
 * @param {*} monitor 监控内容：必填，选择船队进行监控的内容，1代表船队船舶查询；2代表船位实时推送；3代表船舶到离事件推送；4代表动态ETA推送；5代表AIS异常事件推送；6代表区域监控推送；7代表船舶搭靠事件推送。多选以英文逗号隔开。
 * @returns 查看在线文档
 */
async function AddFleet({ key, fleet_name, mmsis, monitor }) {
    let baseUrl = apiUrl + "/AddFleet"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            fleet_name,
            mmsis,
            monitor
        },
    });
    return res.data
}

/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-更新船队信息
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @param {*} fleet_name 船队名称：非必填，输入名称则更新船队名称
 * @param {*} mmsis 船舶清单：非必填，批量更新船队船舶信息，输入船舶mmsi编号，以英文逗号隔开。覆盖式全量更新，不做单独的增加和减少。
 * @param {*} monitor 监控内容：非必填，变更船队进行监控的内容，1代表船队船舶查询；2代表船位实时推送；3代表船舶到离事件推送；4代表动态ETA推送；5代表AIS异常事件推送；6代表区域监控推送；7代表船舶搭靠事件推送。多选以英文逗号隔开。覆盖式全量更新，不做单独的增加和减少。
 * @returns 查看在线文档
 */
async function UpdateFleet({ key, fleet_id, fleet_name, mmsis, monitor }) {
    let baseUrl = apiUrl + "/UpdateFleet"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            fleet_id,
            fleet_name,
            mmsis,
            monitor
        },
    });
    return res.data
}


/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-查询船队
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @returns 查看在线文档
 */
async function GetFleet({ key, fleet_id }) {
    let baseUrl = apiUrl + "/GetFleet"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            fleet_id,
        },
    });
    return res.data
}

/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-删除船队
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @returns 查看在线文档
 */
async function DeleteFleet({ key, fleet_id }) {
    let baseUrl = apiUrl + "/DeleteFleet"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            fleet_id,
        },
    });
    return res.data
}

/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-船队船舶增加
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @param {*} mmsis 船舶清单：必填，添加船队管理的船舶，mmsi编号，以英文逗号隔开。增量更新，不变动原有船队船舶，输入的mmsi编号与原有重复时，新填入的不会增加到船队中。
 * @returns 查看在线文档
 */
async function AddFleetShip({ key, fleet_id, mmsis }) {
    let baseUrl = apiUrl + "/AddFleetShip"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            fleet_id,
            mmsis,
        },
    });
    return res.data
}


/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-船队船舶批量更新
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @param {*} mmsis 船舶清单：必填，添加船队管理的船舶，mmsi编号，以英文逗号隔开。批量覆盖原有的船舶列表，替代式更新。
 * @returns 查看在线文档
 */
async function UpdateFleetShip({ key, fleet_id, mmsis }) {
    let baseUrl = apiUrl + "/UpdateFleetShip"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            fleet_id,
            mmsis,
        },
    });
    return res.data
}

/**
 * 9监控推送-9.1监控船队管理-设置监控船舶列表-船队船舶删除
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} fleet_id 船队id：必填，船队的ID，用来对船队信息进行维护的唯一标识。
 * @param {*} mmsis 船舶清单：必填，添加船队管理的船舶，mmsi编号，以英文逗号隔开。批量覆盖原有的船舶列表，替代式更新。
 * @returns 查看在线文档
 */
async function DeleteFleetShip({ key, fleet_id, mmsis }) {
    let baseUrl = apiUrl + "/DeleteFleetShip"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            fleet_id,
            mmsis,
        },
    });
    return res.data
}


/**
 * 9监控推送-9.4区域监控推送-区域创建
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} area_bounds 区域范围：必填，经纬度逗号分隔，多个点减号分隔，如： （lng,lat - lng,lat - lng,lat ）经纬度数，多个经纬度坐标点必须按照顺时针或逆时针依次输入。
 * @param {*} area_name 区域名称：必填，为您创建的区域起名，用来后续查询和区分
 * @param {*} url 推送url：必填，推送的url地址，触发监控条件时候向这个url地址推送数据。
 * @param {*} filter_type 筛选类型：必填，区域筛选监控的类型，1代表全部船舶，2代表根据船舶类型和长度筛选匹配，3代表船队船舶。选择1的时候，不需要输入船舶类型、长度和船队id，输入也不会保存；选择2的时候，船舶类型和船舶长度为必填；选择3的时候，船队id为必填。
 * @param {*} ship_type 船舶类型：非必填，区域监控船舶的类型，根据船舶类型筛选监控并推送，多个类型使用英文逗号隔开，不填则全选。船舶类型列表请参考开发文档附录。
 * @param {*} length 船舶长度：非必填，区域监控船舶长度，根据船舶的长度筛选并推送，多个长度使用英文逗号隔开，不填则全选。1，代表0-40米；2，代表40-80米；3，代表80-160米；4，代表160-240米；5，代表240-320米；6，代表320米以上。
 * @param {*} fleet_id 船队id：非必填，区域监控船队，如果只想监控某一只或一批船舶在区域的进出情况。可以创建船队，输入fleet_id则会监控船队下所有船舶。填入此参数则不会再使用ship_type监控船只，只监控船队船舶。
 * @returns 查看在线文档
 */
async function AddArea({ key, area_bounds, area_name, url, filter_type, ship_type, length, fleet_id }) {
    let baseUrl = apiUrl + "/AddArea"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            area_bounds,
            area_name,
            url,
            filter_type,
            ship_type,
            length,
            fleet_id
        },
    });
    return res.data
}


/**
 * 9监控推送-9.4区域监控推送-区域更新
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} area_id 区域的ID：必填，区域的id，唯一标识，用来后续对区域的删改查
 * @param {*} area_bounds 区域范围：非必填，经纬度逗号分隔，多个点减号分隔，如： （lng,lat - lng,lat - lng,lat ）经纬度数，多个经纬度坐标点必须按照顺时针或逆时针依次输入。
 * @param {*} area_name 区域名称：非必填，为您创建的区域起名，用来后续查询和区分
 * @param {*} url 推送url：非必填，推送的url地址，触发监控条件时候向这个url地址推送数据。
 * @param {*} filter_type 筛选类型：非必填，区域筛选监控的类型，1代表全部船舶，2代表根据船舶类型和长度筛选匹配，3代表船队船舶。选择1的时候，不需要输入船舶类型、长度和船队id，输入也不会保存；选择2的时候，船舶类型和船舶长度为必填；选择3的时候，船队id为必填。
 * @param {*} ship_type 船舶类型：非必填，区域监控船舶的类型，根据船舶类型筛选监控并推送，多个类型使用英文逗号隔开，不填则全选。船舶类型列表请参考开发文档附录。
 * @param {*} length 船舶长度：非必填，区域监控船舶长度，根据船舶的长度筛选并推送，多个长度使用英文逗号隔开，不填则全选。1，代表0-40米；2，代表40-80米；3，代表80-160米；4，代表160-240米；5，代表240-320米；6，代表320米以上。
 * @param {*} fleet_id 船队id：非必填，区域监控船队，如果只想监控某一只或一批船舶在区域的进出情况。可以创建船队，输入fleet_id则会监控船队下所有船舶。填入此参数则不会再使用ship_type监控船只，只监控船队船舶。
 * @returns 查看在线文档
 */
async function UpdateArea({ key, area_id, area_bounds, area_name, url, filter_type, ship_type, length, fleet_id }) {
    let baseUrl = apiUrl + "/UpdateArea"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            area_id,
            area_bounds,
            area_name,
            url,
            filter_type,
            ship_type,
            length,
            fleet_id
        },
    });
    return res.data
}

/**
 * 9监控推送-9.4区域监控推送-区域查询
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} area_id 区域的ID：必填，区域的id，唯一标识，用来后续对区域的删改查
 * @returns 查看在线文档
 */
async function GetArea({ key, area_id }) {
    let baseUrl = apiUrl + "/GetArea"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            area_id,
        },
    });
    return res.data
}

/**
 * 9监控推送-9.4区域监控推送-区域删除
 * https://hiiau7lsqq.feishu.cn/wiki/A3UBwJ7pViozTskSFwPcJ4Ldnze
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} area_id 区域的ID：必填，区域的id，唯一标识，用来后续对区域的删改查
 * @returns 查看在线文档
 */
async function DeleteArea({ key, area_id }) {
    let baseUrl = apiUrl + "/DeleteArea"
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: {
            key,
            area_id,
        },
    });
    return res.data
}

module.exports = {
    AddFleet,
    UpdateFleet,
    GetFleet,
    DeleteFleet,
    AddFleetShip,
    UpdateFleetShip,
    DeleteFleetShip,
    AddArea,
    UpdateArea,
    GetArea,
    DeleteArea
};
