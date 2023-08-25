"use strict";(self.webpackChunkcoin_cap_app=self.webpackChunkcoin_cap_app||[]).push([[938],{"./src/components/table/tableRow/tableRow.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bitcoin:function(){return Bitcoin},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return tableRow_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),currencyInfoSlice=(0,redux_toolkit_esm.oM)({name:"currencyInfo",initialState:{id:"",name:"",symbol:"",priceUsd:"",amount:0},reducers:{addCurrencyId:function addCurrencyId(state,action){state.id=action.payload},addCurrencyPriceUsd:function addCurrencyPriceUsd(state,action){state.priceUsd=action.payload},addCurrencyName:function addCurrencyName(state,action){state.name=action.payload},addCurrencySymbol:function addCurrencySymbol(state,action){state.symbol=action.payload},addCurrencyAmount:function addCurrencyAmount(state,action){state.amount=action.payload},addCurrencyInfo:function addCurrencyInfo(state,action){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},state),action.payload)}}}),_currencyInfoSlice$ac=currencyInfoSlice.actions,addCurrencyId=_currencyInfoSlice$ac.addCurrencyId,addCurrencyName=_currencyInfoSlice$ac.addCurrencyName,addCurrencySymbol=_currencyInfoSlice$ac.addCurrencySymbol,addCurrencyPriceUsd=(_currencyInfoSlice$ac.addCurrencyAmount,_currencyInfoSlice$ac.addCurrencyPriceUsd),store_currencyInfoSlice=(_currencyInfoSlice$ac.addCurrencyInfo,currencyInfoSlice.reducer),Button=__webpack_require__("./src/components/button/Button.tsx"),convertToMillions=function convertToMillions(value){return"".concat(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",notation:"compact",compactDisplay:"short",maximumFractionDigits:2}).format(+value))},convertToPercentage=function convertToPercentage(value){return"".concat(Number(value).toFixed(2))},convertToThousands=function convertToThousands(value){return"".concat(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(+value))},useAppDispatch=es.I0,modalSlice=(0,redux_toolkit_esm.oM)({name:"modal",initialState:{value:!1},reducers:{open:function open(state){state.value=!0},close:function close(state){state.value=!1},toggleByAmount:function toggleByAmount(state,action){state.value=action.payload}}}),_modalSlice$actions=modalSlice.actions,modalWindowSlice_open=_modalSlice$actions.open,modalWindowSlice=(_modalSlice$actions.close,_modalSlice$actions.toggleByAmount,modalSlice.reducer),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TableRow_TableRow=function TableRow(_ref){var id=_ref.id,rank=_ref.rank,name=_ref.name,symbol=_ref.symbol,priceUsd=_ref.priceUsd,marketCapUsd=_ref.marketCapUsd,vwap24Hr=_ref.vwap24Hr,supply=_ref.supply,volumeUsd24Hr=_ref.volumeUsd24Hr,changePercent24Hr=_ref.changePercent24Hr,dispatch=useAppDispatch();return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{colSpan:1,children:rank}),(0,jsx_runtime.jsxs)("td",{colSpan:2,className:"table-currency__wrapper",children:[(0,jsx_runtime.jsxs)(dist.rU,{to:"/currency/".concat(id),className:"table-currency__name-wrapper",children:[(0,jsx_runtime.jsx)("img",{src:"https://assets.coincap.io/assets/icons/".concat(symbol.toLowerCase(),"@2x.png"),alt:symbol,className:"table-currency__icon"}),(0,jsx_runtime.jsxs)("div",{className:"table-currency__name",children:[(0,jsx_runtime.jsx)("div",{children:"".concat(name)}),(0,jsx_runtime.jsx)("div",{children:"".concat(symbol)})]})]}),(0,jsx_runtime.jsx)(Button.z,{className:"button-secondary",description:"Add",onClick:function handleCurrency(){dispatch(addCurrencyId(id||"")),dispatch(addCurrencyName(name)),dispatch(addCurrencySymbol(symbol)),dispatch(addCurrencyPriceUsd(priceUsd)),dispatch(modalWindowSlice_open())}})]}),Number(priceUsd)>.01?(0,jsx_runtime.jsxs)("td",{colSpan:1,children:[" ",convertToThousands(priceUsd)," "]}):(0,jsx_runtime.jsxs)("td",{colSpan:1,children:[" $",Number(priceUsd).toFixed(5)," "]}),(0,jsx_runtime.jsx)("td",{colSpan:1,children:convertToMillions(marketCapUsd)}),(0,jsx_runtime.jsx)("td",{colSpan:1,children:convertToThousands(vwap24Hr)}),(0,jsx_runtime.jsx)("td",{colSpan:1,children:convertToMillions(supply)}),(0,jsx_runtime.jsx)("td",{colSpan:1,children:convertToMillions(volumeUsd24Hr)}),(0,jsx_runtime.jsx)("td",{colSpan:1,children:"".concat(convertToPercentage(changePercent24Hr),"%")})]})};try{TableRow_TableRow.displayName="TableRow",TableRow_TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},rank:{defaultValue:null,description:"",name:"rank",required:!0,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},supply:{defaultValue:null,description:"",name:"supply",required:!0,type:{name:"string"}},maxSupply:{defaultValue:null,description:"",name:"maxSupply",required:!1,type:{name:"string"}},marketCapUsd:{defaultValue:null,description:"",name:"marketCapUsd",required:!0,type:{name:"string"}},volumeUsd24Hr:{defaultValue:null,description:"",name:"volumeUsd24Hr",required:!0,type:{name:"string"}},priceUsd:{defaultValue:null,description:"",name:"priceUsd",required:!0,type:{name:"string"}},changePercent24Hr:{defaultValue:null,description:"",name:"changePercent24Hr",required:!0,type:{name:"string"}},vwap24Hr:{defaultValue:null,description:"",name:"vwap24Hr",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/tableRow/TableRow.tsx#TableRow"]={docgenInfo:TableRow_TableRow.__docgenInfo,name:"TableRow",path:"src/components/table/tableRow/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}var _reducer,_Bitcoin$parameters,_Bitcoin$parameters2,_Bitcoin$parameters2$,storybook_addon_react_router_v6_dist=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),rtk_query_react_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js"),rtk_query_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js"),coinCapApi=(0,rtk_query_react_esm.LC)({reducerPath:"coinCapApp",baseQuery:(0,rtk_query_esm.ni)({baseUrl:"https://coin-cap-server.onrender.com"}),endpoints:function endpoints(builder){return{getAssets:builder.query({query:function query(_ref){_ref.search;var _ref$ids=_ref.ids,ids=void 0===_ref$ids?"":_ref$ids,_ref$limit=_ref.limit,limit=void 0===_ref$limit?20:_ref$limit;_ref.offset;return"/trpc/assets?input={".concat(limit&&'"limit": '.concat(limit)).concat(ids&&', "ids":'.concat(ids),"}")}}),getAsset:builder.query({query:function query(_ref2){var _ref2$id=_ref2.id,id=void 0===_ref2$id?"":_ref2$id;return"assets/".concat(id&&"".concat(id))}}),getAssetHistory:builder.query({query:function query(_ref3){var _ref3$id=_ref3.id,id=void 0===_ref3$id?"":_ref3$id,_ref3$interval=_ref3.interval,interval=void 0===_ref3$interval?"d1":_ref3$interval;return"assets/".concat(id&&"".concat(id),"/history").concat(interval&&"?interval=".concat(interval))}})}}}),modalCartSlice=(coinCapApi.useGetAssetsQuery,coinCapApi.useGetAssetQuery,coinCapApi.useGetAssetHistoryQuery,(0,redux_toolkit_esm.oM)({name:"modalCart",initialState:{value:!1},reducers:{open:function open(state){state.value=!0},close:function close(state){state.value=!1},toggleByAmount:function toggleByAmount(state,action){state.value=action.payload}}})),_modalCartSlice$actio=modalCartSlice.actions,store_modalCartSlice=(_modalCartSlice$actio.open,_modalCartSlice$actio.close,_modalCartSlice$actio.toggleByAmount,modalCartSlice.reducer),currentCartList=localStorage.getItem("currentCartList")||null,currentCartTotal=localStorage.getItem("currentCartTotal")||null,cartSlice_initialState={cartList:currentCartList?JSON.parse(currentCartList):[],total:currentCartTotal?JSON.parse(currentCartTotal):0},cartSlice=(0,redux_toolkit_esm.oM)({name:"cart",initialState:cartSlice_initialState,reducers:{addCurrencyInfoToCart:function addCurrencyInfoToCart(state,action){state.cartList.push(action.payload)},removeCurrencyInfoFromCart:function removeCurrencyInfoFromCart(state,action){state.cartList=state.cartList.filter((function(_ref){return _ref.id!==action.payload}))},handleTotalCart:function handleTotalCart(state,action){state.total=action.payload},updateCart:function updateCart(state,action){}}}),_cartSlice$actions=cartSlice.actions,store_cartSlice=(_cartSlice$actions.addCurrencyInfoToCart,_cartSlice$actions.removeCurrencyInfoFromCart,_cartSlice$actions.handleTotalCart,_cartSlice$actions.updateCart,cartSlice.reducer),store=(0,redux_toolkit_esm.xC)({reducer:(_reducer={},(0,defineProperty.Z)(_reducer,coinCapApi.reducerPath,coinCapApi.reducer),(0,defineProperty.Z)(_reducer,"modal",modalWindowSlice),(0,defineProperty.Z)(_reducer,"modalCart",store_modalCartSlice),(0,defineProperty.Z)(_reducer,"cart",store_cartSlice),(0,defineProperty.Z)(_reducer,"currencyInfo",store_currencyInfoSlice),_reducer),middleware:function middleware(getDefaultMiddleware){return getDefaultMiddleware().concat(coinCapApi.middleware)}}),tableRow_stories={title:"TableRow",component:TableRow_TableRow,decorators:[storybook_addon_react_router_v6_dist.EN]},Bitcoin={args:{changePercent24Hr:"-0.4318334465580034",id:"bitcoin",marketCapUsd:"504809460764.5957999819365000",maxSupply:"21000000.0000000000000000",name:"Bitcoin",priceUsd:"25940.0435887642765832",rank:"1",supply:"19460625.0000000000000000",symbol:"BTC",volumeUsd24Hr:"4123284409.6746283983812074",vwap24Hr:"25911.8362873331906325"},decorators:[function(Story){return(0,jsx_runtime.jsx)(es.zt,{store:store,children:(0,jsx_runtime.jsx)(Story,{})})}],parameters:{reactRouter:(0,storybook_addon_react_router_v6_dist._1)({location:{pathParams:{id:"bitcoin"},state:{fromPage:"currency"}},routing:{path:"/currency/:id"}})}};Bitcoin.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Bitcoin.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Bitcoin$parameters=Bitcoin.parameters)||void 0===_Bitcoin$parameters?void 0:_Bitcoin$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    changePercent24Hr: '-0.4318334465580034',\n    id: 'bitcoin',\n    marketCapUsd: '504809460764.5957999819365000',\n    maxSupply: '21000000.0000000000000000',\n    name: 'Bitcoin',\n    priceUsd: '25940.0435887642765832',\n    rank: '1',\n    supply: '19460625.0000000000000000',\n    symbol: 'BTC',\n    volumeUsd24Hr: '4123284409.6746283983812074',\n    vwap24Hr: '25911.8362873331906325'\n  },\n  decorators: [Story => <Provider store={store}>\r\n        <Story />\r\n      </Provider>],\n  parameters: {\n    reactRouter: reactRouterParameters({\n      location: {\n        pathParams: {\n          id: 'bitcoin'\n        },\n        state: {\n          fromPage: 'currency'\n        }\n      },\n      routing: {\n        path: '/currency/:id'\n      }\n    })\n  }\n}"},null===(_Bitcoin$parameters2=Bitcoin.parameters)||void 0===_Bitcoin$parameters2||null===(_Bitcoin$parameters2$=_Bitcoin$parameters2.docs)||void 0===_Bitcoin$parameters2$?void 0:_Bitcoin$parameters2$.source)})});var __namedExportsOrder=["Bitcoin"]},"./src/components/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button_Button}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button_Button=function Button(_ref){var className=_ref.className,description=_ref.description,onClick=_ref.onClick;return(0,jsx_runtime.jsx)("button",{className:className,onClick:onClick,children:description})};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"enum",value:[{value:'"button-primary"'},{value:'"button-secondary"'},{value:'"button-delete"'}]}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);