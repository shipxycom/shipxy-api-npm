const shipxy = require('../index');

const key = "484db43a65ec4f87b5b4dcc69e586bf7";

// test('getMethod', async () => {
//   let params = {
//     key: key, keywords: "coco", max: 2
//   }
//   let result = await shipxy.getMethod("SearchShip", params)
//   console.log(result);
// });

// test('postMethod', async () => {
//   let params = {
//     key: key, keywords: "coco", max: 2
//   }
//   let result = await shipxy.postMethod("SearchShip", params)
//   console.log(result);
// });



// test('SearchShip', async () => {
//   let params = {
//     key: key, keywords: "coco", max: 2
//   }
//   let result = await shipxy.SearchShip(params)
//   console.log(result);
// });

// test('GetSingleShip', async () => {
//   let params = {
//     key: key, mmsi: 413961925
//   }
//   let result = await shipxy.GetSingleShip(params)
//   console.log(result);
// });

// test('GetManyShip', async () => {
//   let params = {
//     key: key, mmsis: "413961925,477232800,477172700"
//   }
//   let result = await shipxy.GetManyShip(params)
//   console.log(result);
// });

// test('GetFleetShip', async () => {
//   let params = {
//     key: key, fleet_id: "72efa1dc-dc1d-45a6-9090-880835105363"
//   }
//   let result = await shipxy.GetFleetShip(params)
//   console.log(result);
// });

// test('GetSurRoundingShip', async () => {
//   let params = {
//     key: key, mmsi: 413881597
//   }
//   let result = await shipxy.GetSurRoundingShip(params)
//   console.log(result);
// });

// test('GetAreaShip', async () => {
//   let params = {
//     key: key,
//     region: "121.289063,35.424868-122.783203,35.281501-122.167969,33.979809",
//     output: 1,
//   }
//   let result = await shipxy.GetAreaShip(params)
//   console.log(result);
// });

// test('GetShipRegistry', async () => {
//   let params = {
//     key: key, mmsi: 477172700
//   }
//   let result = await shipxy.GetShipRegistry(params)
//   console.log(result);
// });

// test('SearchShipParticular', async () => {
//   let params = { key: key, mmsi: 477172700 }
//   let result = await shipxy.SearchShipParticular(params)
//   console.log(result);
// });

// test('SearchPort', async () => {
//   let params = { key, keywords: "qingdao", max: 2 }
//   let result = await shipxy.SearchPort(params)
//   console.log(result);
// });

// test('GetBerthShips', async () => {
//   let params = { key, port_code: "CNSHG" }
//   let result = await shipxy.GetBerthShips(params)
//   console.log(result);
// });

// test('GetAnchorShips', async () => {
//   let params = { key, port_code: "CNSHG" }
//   let result = await shipxy.GetAnchorShips(params)
//   console.log(result);
// });

// test('GetETAShips', async () => {
//   let params = { key, port_code: "CNSHG", start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.GetETAShips(params)
//   console.log(result);
// });

// test('GetShipTrack', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.GetShipTrack(params)
//   console.log(result);
// });

// test('SearchshipApproach', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1746612218, end_time: 1747044218 }
//   let result = await shipxy.SearchshipApproach(params)
//   console.log(result);
// });

// test('GetPortofCallByShip', async () => {
//   let params = { key, mmsi: 477172700, start_time: 1751007589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByShip(params)
//   console.log(result);
// });

// test('GetPortofCallByShipPort', async () => {
//   let params = { key, mmsi: 477172700, port_code: 'CNSHG', start_time: 1751007589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByShipPort(params)
//   console.log(result);
// });

// test('GetShipStatus', async () => {
//   let params = { key, mmsi: 477172700}
//   let result = await shipxy.GetShipStatus(params)
//   console.log(result);
// });

// test('GetPortofCallByPort', async () => {
//   let params = { key, port_code: 'CNSHG', start_time: 1751407589, end_time: 1751440378 }
//   let result = await shipxy.GetPortofCallByPort(params)
//   console.log(result);
// });

// test('PlanRouteByPoint', async () => {
//   let params = { key, start_point: '113.571144,22.844316', end_point: "121.58414,31.37979" }
//   let result = await shipxy.PlanRouteByPoint(params)
//   console.log(result);
// });

// test('PlanRouteByPort', async () => {
//   let params = { key, start_port_code: 'CNGZG', end_port_code: "CNSHG" }
//   let result = await shipxy.PlanRouteByPort(params)
//   console.log(result);
// });

// test('GetSingleETAPrecise', async () => {
//   let params = { key, mmsi: 477172700, port_code: "CNSHG", speed: 20 }
//   let result = await shipxy.GetSingleETAPrecise(params)
//   console.log(result);
// });

// test('GetWeatherByPoint', async () => {
//   let params = { key, lng: 123.58414, lat: 27.37979 }
//   let result = await shipxy.GetWeatherByPoint(params)
//   console.log(result);
// });

// test('GetWeather', async () => {
//   let params = { key, weather_type: 1 }
//   let result = await shipxy.GetWeather(params)
//   console.log(result);
// });

// test('GetAllTyphoon', async () => {
//   let params = { key}
//   let result = await shipxy.GetAllTyphoon(params)
//   console.log(result);
// });

// test('GetSingleTyphoon', async () => {
//   let params = { key, typhoon_id: 2477927 }
//   let result = await shipxy.GetSingleTyphoon(params)
//   console.log(result);
// });

// test('GetTides', async () => {
//   let params = { key }
//   let result = await shipxy.GetTides(params)
//   console.log(result);
// });

// test('GetTideData', async () => {
//   let params = { key, port_code: 8000005, start_date: '2025-03-01', end_date: '2025-03-05' }
//   let result = await shipxy.GetTideData(params)
//   console.log(result);
// });


// test('GetNavWarning', async () => {
//   let params = { key, start_time: '2024-07-21 20:00', end_time: '2024-09-21 20:00' }
//   let result = await shipxy.GetNavWarning(params)
//   console.log(result);
// });

// test('AddFleet', async () => {
//     let params = { key, fleet_name: "测试船队1", mmsis: "477985700,412751691", monitor: 1 }
//     let result = await shipxy.AddFleet(params)
//     console.log(result);
// });

// test('UpdateFleet', async () => {
//     let params = { key, fleet_id: '6c3c6253-0174-48a8-8ec8-0e28810af8f2', fleet_name: "测试船队", mmsis: "412751691", monitor: 1 }
//     let result = await shipxy.UpdateFleet(params)
//     console.log(result);
// });

// test('GetFleet', async () => {
//     let params = { key, fleet_id: '6c3c6253-0174-48a8-8ec8-0e28810af8f2' }
//     let result = await shipxy.GetFleet(params)
//     console.log(result);
// });

// test('DeleteFleet', async () => {
//     let params = { key, fleet_id: 'cf47f6d0-4046-4b23-a671-53df0f5f7414' }
//     let result = await shipxy.DeleteFleet(params)
//     console.log(result);
// });

// test('AddFleetShip', async () => {
//     let params = { key, fleet_id: '6c3c6253-0174-48a8-8ec8-0e28810af8f2', mmsis: "477985700,412751690" }
//     let result = await shipxy.AddFleetShip(params)
//     console.log(result);
// });

// test('UpdateFleetShip', async () => {
//     let params = { key, fleet_id: '6c3c6253-0174-48a8-8ec8-0e28810af8f2', mmsis: "477985700,412751690" }
//     let result = await shipxy.UpdateFleetShip(params)
//     console.log(result);
// });

// test('DeleteFleetShip', async () => {
//     let params = { key, fleet_id: '6c3c6253-0174-48a8-8ec8-0e28810af8f2', mmsis: "477985700" }
//     let result = await shipxy.DeleteFleetShip(params)
//     console.log(result);
// });

// test('AddArea', async () => {
//     let params = {
//         key,
//         area_bounds: "119.846180,32.345143-119.814280,32.311867-119.4661,32.291067-119.375887,32.213847",
//         area_name: "浙江沿海区域1",
//         filter_type: 3,
//         ship_type: 59,
//         fleet_id: "6c3c6253-0174-48a8-8ec8-0e28810af8f2",
//         url: "http://192.186.1.1:8000/shipxy/testdemo"
//     }
//     let result = await shipxy.AddArea(params)
//     console.log(result);
// });

// test('UpdateArea', async () => {
//     let params = {
//         key,
//         area_id: "a8419b7c-7833-4eeb-84f6-3433928c8612",
//         area_name: "浙江沿海区域11",
//     }
//     let result = await shipxy.UpdateArea(params)
//     console.log(result);
// });

// test('GetArea', async () => {
//     let params = {
//         key,
//         area_id: "a8419b7c-7833-4eeb-84f6-3433928c8612",
//     }
//     let result = await shipxy.GetArea(params)
//     console.log(result);
// });

// test('GetArea', async () => {
//     let params = {
//         key,
//         area_id: "a8419b7c-7833-4eeb-84f6-3433928c8612",
//     }
//     let result = await shipxy.GetArea(params)
//     console.log(result);
// });

// test('DeleteArea', async () => {
//     let params = {
//         key,
//         area_id: "a8419b7c-7833-4eeb-84f6-3433928c8612",
//     }
//     let result = await shipxy.DeleteArea(params)
//     console.log(result);
// });