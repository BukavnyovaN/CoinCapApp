"use strict";(self.webpackChunkcoin_cap_app=self.webpackChunkcoin_cap_app||[]).push([[427],{"./src/components/chart/chart.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:function(){return Base},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return chart_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),chart=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/chart.js/dist/chart.js")),dist=__webpack_require__("./node_modules/react-chartjs-2/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");chart.kL.register(chart.uw,chart.f$,chart.od,chart.jn,chart.Dx,chart.u,chart.Gu,chart.De);var _Base$parameters,_Base$parameters2,_Base$parameters2$doc,options={responsive:!0,plugins:{legend:{position:"top"},title:{display:!1,text:"Chart.js Line Chart"}}},Chart=function Chart(_ref){var labelsChart=_ref.labelsChart,dataChart=_ref.dataChart,name=_ref.name;console.log("label",labelsChart);var data={labels:labelsChart,datasets:[{fill:!0,label:name,data:dataChart,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return(0,jsx_runtime.jsx)(dist.x1,{options:options,data:data})};try{Chart.displayName="Chart",Chart.__docgenInfo={description:"",displayName:"Chart",props:{labelsChart:{defaultValue:null,description:"",name:"labelsChart",required:!0,type:{name:"string[] | undefined"}},dataChart:{defaultValue:null,description:"",name:"dataChart",required:!0,type:{name:"string[] | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/Chart.tsx#Chart"]={docgenInfo:Chart.__docgenInfo,name:"Chart",path:"src/components/chart/Chart.tsx#Chart"})}catch(__react_docgen_typescript_loader_error){}var chart_stories={title:"Chart",component:Chart},Base={args:{name:"Bitcoin",dataChart:["1650.76","1696.22","1629.72","1493.42","1487.45","1486.60","1552.87","1577.39","1558.76","1593.08","1557.96","1560.19","1580.48","1635.00","1547.95","1630.59","1700.36","1735.36","1769.52","1735.20","1662.86","1601.45","1563.10","1455.50","1444.79","1421.79","1331.38","1353.73","1329.47","1286.18","1314.59","1329.76","1314.92","1312.67","1361.60","1310.61","1331.60","1337.68","1323.42","1303.43","1304.27","1344.96","1347.60","1364.78","1344.51","1327.54","1319.83","1313.68","1283.03","1294.73","1272.92","1315.82","1288.45","1288.55","1317.33","1322.27","1299.76","1290.18","1289.12","1307.16","1318.66","1345.67","1389.88","1527.01","1548.77","1525.17","1605.24","1600.16","1578.95","1581.69","1560.71","1541.70","1596.37","1640.85","1616.27","1580.52","1460.12","1228.17","1228.93","1265.63","1264.53","1240.34","1228.93","1258.48","1230.05","1205.73","1214.73","1210.83","1193.22","1121.59","1110.81","1163.45","1200.21","1191.54","1217.30","1217.15","1174.17","1206.77","1272.60","1281.34"],labelsChart:["3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM","3:00 AM"]}};Base.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Base.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    name: 'Bitcoin',\n    dataChart: ['1650.76', '1696.22', '1629.72', '1493.42', '1487.45', '1486.60', '1552.87', '1577.39', '1558.76', '1593.08', '1557.96', '1560.19', '1580.48', '1635.00', '1547.95', '1630.59', '1700.36', '1735.36', '1769.52', '1735.20', '1662.86', '1601.45', '1563.10', '1455.50', '1444.79', '1421.79', '1331.38', '1353.73', '1329.47', '1286.18', '1314.59', '1329.76', '1314.92', '1312.67', '1361.60', '1310.61', '1331.60', '1337.68', '1323.42', '1303.43', '1304.27', '1344.96', '1347.60', '1364.78', '1344.51', '1327.54', '1319.83', '1313.68', '1283.03', '1294.73', '1272.92', '1315.82', '1288.45', '1288.55', '1317.33', '1322.27', '1299.76', '1290.18', '1289.12', '1307.16', '1318.66', '1345.67', '1389.88', '1527.01', '1548.77', '1525.17', '1605.24', '1600.16', '1578.95', '1581.69', '1560.71', '1541.70', '1596.37', '1640.85', '1616.27', '1580.52', '1460.12', '1228.17', '1228.93', '1265.63', '1264.53', '1240.34', '1228.93', '1258.48', '1230.05', '1205.73', '1214.73', '1210.83', '1193.22', '1121.59', '1110.81', '1163.45', '1200.21', '1191.54', '1217.30', '1217.15', '1174.17', '1206.77', '1272.60', '1281.34'],\n    labelsChart: ['3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM', '3:00 AM']\n  }\n}"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2$doc=_Base$parameters2.docs)||void 0===_Base$parameters2$doc?void 0:_Base$parameters2$doc.source)})});var __namedExportsOrder=["Base"]}}]);