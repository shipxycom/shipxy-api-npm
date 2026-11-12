const axios = require('axios');
const { apiUrl } = require('../config');

/** 返回瓦片字节；光栅图需配合船讯网海图JS及相应权限，地图图层优先使用URL方法。 */
async function GetShipRasterImage({ key, tile_type, x, y, z }) {
    const res = await axios({ method: 'get', url: apiUrl + '/GetShipRasterImage', params: { key, tile_type, x, y, z }, responseType: 'arraybuffer' });
    return res.data;
}

/** 仅构造地图图层URL，不发送请求。 */
function GetShipRasterImageUrl({ key, tile_type, x, y, z }) {
    const url = new URL(apiUrl + '/GetShipRasterImage');
    for (const [paramName, value] of Object.entries({ key, tile_type, x, y, z })) {
        if (value !== undefined && value !== null) url.searchParams.set(paramName, String(value));
    }
    return url.toString();
}

/** 返回瓦片字节；光栅图需配合船讯网海图JS及相应权限，地图图层优先使用URL方法。 */
async function GetPortTile({ key, projection_type, x, y, z }) {
    const res = await axios({ method: 'get', url: apiUrl + '/GetPortTile', params: { key, projection_type, x, y, z }, responseType: 'arraybuffer' });
    return res.data;
}

/** 仅构造地图图层URL，不发送请求。 */
function GetPortTileUrl({ key, projection_type, x, y, z }) {
    const url = new URL(apiUrl + '/GetPortTile');
    for (const [paramName, value] of Object.entries({ key, projection_type, x, y, z })) {
        if (value !== undefined && value !== null) url.searchParams.set(paramName, String(value));
    }
    return url.toString();
}

module.exports = {
    GetShipRasterImage,
    GetShipRasterImageUrl,
    GetPortTile,
    GetPortTileUrl,
};
