define(["@grafana/data","react","@grafana/ui"],((e,r,t)=>(()=>{"use strict";var n={305:r=>{r.exports=e},388:e=>{e.exports=t},650:e=>{e.exports=r}},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return n[e](t,t.exports,a),t.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{a.r(u),a.d(u,{plugin:()=>f});var e=a(305);function r(e,r,t,n,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void t(e)}c.done?r(i):Promise.resolve(i).then(n,o)}function t(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var u=e.apply(t,n);function c(e){r(u,o,a,c,i,"next",e)}function i(e){r(u,o,a,c,i,"throw",e)}c(void 0)}))}}class n extends e.DataSourceApi{query(r){return t((function*(){return{data:r.targets.map((r=>new e.MutableDataFrame({refId:r.refId,fields:[{name:"message",values:["This is approval app backend plugin"],type:e.FieldType.string}]})))}}))()}testDatasource(){return t((function*(){return{status:"success",message:"Success"}}))()}constructor(e){super(e)}}var o=a(650),c=a.n(o),i=a(388);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function p(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const f=new e.DataSourcePlugin(n).setConfigEditor((function(e){const{onOptionsChange:r,options:t}=e,{jsonData:n}=t;return c().createElement("div",{className:"gf-form-group"},c().createElement(i.InlineField,{label:"Url",labelWidth:12},c().createElement(i.Input,{onChange:e=>{const n=p(l({},t.jsonData),{url:e.target.value});r(p(l({},t),{jsonData:n}))},value:n.url||"",placeholder:"Truesa Server Url",width:40})))})).setQueryEditor((function({query:e,onChange:r,onRunQuery:t}){return c().createElement("div",{className:"gf-form"},"This is approval app backend plugin")}))})(),u})()));
//# sourceMappingURL=module.js.map