/**
 * 8海事数据
 * 作者：White
 * https://hiiau7lsqq.feishu.cn/wiki/RCXmwHcRQidabTkXweRcoUAMnMg
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * 8海事数据-8.1航行警告查询
 * https://hiiau7lsqq.feishu.cn/wiki/DCgdwVip5ifCpAkQ3lfcq8OEnOc
 * @param {*} key 授权码：必填，船讯网授权码，验证服务权限
 * @param {*} start_time 开始时间：必填，筛选航行警告发布时间。
 * @param {*} end_time 结束时间：必填，筛选航行警告发布时间
 * @param {*} warning_type 警告类型：非必填，警告类型筛选，默认是0，返回全部类型。1军事任务，2船舶演习，3实弹射击，4船舶作业，5航标动态，6船舶搁浅，7船舶试航，8沉没，9人员伤亡，10施工作业，11撤销航警，12其他
 * @returns 查看在线文档
 */
async function GetNavWarning({ key, start_time, end_time, warning_type }) {
    let baseUrl = apiUrl + "/GetNavWarning"
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: {
            key,
            start_time,
            end_time,
            warning_type
        },
    });
    return res.data
}

module.exports = {
    GetNavWarning
}