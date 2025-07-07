/**
 * 公共方法
 * 作者：White
 */

const axios = require('axios')

const { apiUrl } = require('../config');

/**
 * get方法
 * @param {*} methodName 方法名
 * @param {*} params 参数
 * @returns 
 */
async function getMethod(methodName, params) {
    let baseUrl = apiUrl + "/" + methodName
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: params,
    });
    return res.data
}

/**
 * post方法
 * @param {*} methodName 方法名
 * @param {*} params 参数
 * @returns 
 */
async function postMethod(methodName, params) {
    let baseUrl = apiUrl + "/" + methodName
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: params,
    });
    return res.data
}

module.exports = {
    getMethod,
    postMethod
}
