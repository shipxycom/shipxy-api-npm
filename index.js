/**
 * 亿海蓝-船讯网-shipxy-api-sdk
 * 作者：White
 */

const baseMethod = require('./api/baseMethod'); // 0基础方法
const shipQuery = require('./api/shipQuery'); // 1船舶查询
const portQuery = require('./api/portQuery'); // 2港口查询
const historyAction = require('./api/historyAction'); // 3历史行为
const portOfCall = require('./api/portOfCall'); // 4挂靠记录
const planRoute = require('./api/planRoute'); // 5航线规划
const weather = require('./api/weather'); // 6气象天气
const warning = require('./api/warning'); // 8海事数据
const monitorPush = require('./api/monitorPush'); // 9监控推送

module.exports = {
    ...baseMethod,
    ...shipQuery,
    ...portQuery,
    ...historyAction,
    ...portOfCall,
    ...planRoute,
    ...weather,
    ...warning,
    ...monitorPush,
};