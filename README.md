# 亿海蓝-船讯网-sdk
[亿海蓝官网](https://www.shipxy.com/)&nbsp;&nbsp;
[API控制台](https://api.shipxy.com/v3/console/index)&nbsp;&nbsp;
[在线开发文档](https://hiiau7lsqq.feishu.cn/wiki/E0wAwrPpvieGhSk5wLCctNqonVb)&nbsp;&nbsp;
[github](https://github.com/shipxycom/shipxy-api-npm)&nbsp;&nbsp;
[gitee](https://gitee.com/shipxycom/shipxy-api-npm)&nbsp;&nbsp;
[NPM](https://www.npmjs.com/package/shipxy-api)

## 示例用法
```
npm i shipxy-api
```
```
// CommonJS
const Shipxy = require('shipxy-api'); 
```
```
// ESM
import Shipxy from 'shipxy-api' 
```
```
const key = "请从 API控制台 申请";

async function GetManyShipFn() {
    let params = {
        key: key, mmsis: "413961925,477232800,477172700"
    }
    let result = await Shipxy.GetManyShip(params)
    console.log(result);
}

GetManyShipFn()

```

## 开发者在使用过程中如有疑问，可以通过以下方式联系船讯网：

• 商务邮箱：support@shipxy.com

• 技术支持邮箱：service@shipxy.com

• 电话：400-010-8558 

![飞书](./images/飞书.jpg)
![微信](./images/微信.jpg)