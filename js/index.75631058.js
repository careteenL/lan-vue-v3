(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],p=0,d=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={index:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b6916":"b852b45f","chunk-2d0d3ca5":"1e67f018","chunk-2d208a29":"e311be98","chunk-2d216271":"0961aa2b"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/lan-vue-v3/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("9682")},"0779":function(e,n,t){"use strict";t("92b9")},"24a3":function(e,n,t){"use strict";t("a8ed")},"92b9":function(e,n,t){},9682:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={class:"app-home"};function a(e,n,t,a,c,u){var i=Object(r["o"])("AppMenu"),l=Object(r["o"])("AppNavigatorPage"),p=Object(r["o"])("AppNavigator");return Object(r["j"])(),Object(r["c"])(p,{defaultpath:"normal/button",ref:"navigator"},{default:Object(r["r"])((function(){return[Object(r["d"])("article",o,[Object(r["d"])("section",{class:"app-header",style:{height:"".concat(e.HomeConfig.headSize,"px")},onClick:n[1]||(n[1]=function(){return e.goHome&&e.goHome.apply(e,arguments)})}," LanVue-V3 ",4),Object(r["d"])("section",{class:"app-menu",style:{width:"".concat(e.HomeConfig.menuSize,"px"),top:"".concat(e.HomeConfig.headSize,"px")}},[Object(r["d"])(i)],4),Object(r["d"])("section",{class:"app-content",style:{paddingTop:"".concat(e.HomeConfig.headSize+20,"px"),paddingLeft:"".concat(e.HomeConfig.menuSize+20,"px")}},[Object(r["d"])(l)],4)])]})),_:1},512)}t("fb6a"),t("ac1f"),t("1276");var c=t("3835"),u="@@APP_NAVIGATOR_PROVIDER",i=function(){var e=window.location.hash||"";"#"===e.charAt(0)&&(e=e.slice(1));var n=decodeURIComponent(e).split("#"),t=Object(c["a"])(n,2),r=t[0],o=t[1];return{path:r,hash:o}},l=function(e){var n=i();n.path||(n.path=e.defaultpath);var t=Object(r["l"])({route:n}),o={go:function(e){window.location.hash=encodeURIComponent(e)}},a={hashChange:function(){t.route=i()}},c={state:t,methods:o},l=Object(r["f"])();return l._refer=c,window.addEventListener("hashchange",a.hashChange),Object(r["i"])((function(){window.removeEventListener("hashchange",a.hashChange)})),Object(r["k"])(u,c),c},p=function(){return Object(r["g"])(u)},s=Object(r["e"])({name:"app-navigator",props:{defaultpath:String},setup:function(e,n){return l(e),function(){return n.slots.default?n.slots.default():null}}}),d=(t("d3b7"),t("96cf"),t("1da1")),f=Object(r["e"])({name:"app-navigator-page",setup:function(){var e=Object(r["l"])({PageComponent:null}),n=p(),o={reset:function(){var o=Object(d["a"])(regeneratorRuntime.mark((function o(){var a,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=n.state.route.path,a){o.next=3;break}return o.abrupt("return");case 3:return"/"===a.charAt(0)&&(a=a.slice(1)),o.next=6,t("e45c")("./".concat(a));case 6:c=o.sent.default,e.PageComponent=Object(r["h"])(c);case 8:case"end":return o.stop()}}),o)})));function a(){return o.apply(this,arguments)}return a}()};return Object(r["q"])((function(){return n.state.route.path}),o.reset,{immediate:!0}),function(){var n=e.PageComponent;return Object(r["d"])("div",{class:"app-navigator-page"},[n?Object(r["d"])(n,null,null):null])}}}),h=(t("b0c0"),{class:"app-menu-list"}),b={class:"app-menu-group-name"},m={class:"app-menu-name"};function j(e,n,t,o,a,c){return Object(r["j"])(),Object(r["c"])("div",h,[Object(r["d"])("ul",null,[(Object(r["j"])(!0),Object(r["c"])(r["a"],null,Object(r["n"])(o.menus,(function(e){return Object(r["j"])(),Object(r["c"])("li",{key:e.name},[Object(r["d"])("div",b,[Object(r["d"])("span",null,Object(r["p"])(e.name),1)]),Object(r["d"])("ul",null,[(Object(r["j"])(!0),Object(r["c"])(r["a"],null,Object(r["n"])(e.children,(function(e){return Object(r["j"])(),Object(r["c"])("li",{key:e.page,onClick:function(n){return o.handleClickMenu(e)},class:{"app-menu-active":o.currentPath===e.page}},[Object(r["d"])("div",m,[Object(r["d"])("span",null,Object(r["p"])(e.name),1),Object(r["d"])("span",null,Object(r["p"])(e.title),1)])],10,["onClick"])})),128))])])})),128))])])}var v=[{name:"基础",children:[{name:"Color",title:"颜色",page:"/normal/color",complete:!1},{name:"Icon",title:"图标",page:"/normal/icon",complete:!1},{name:"Button",title:"按钮",page:"/normal/button",complete:!1},{name:"Layout",title:"布局",page:"/normal/layout",complete:!1}]}],O={name:"app-menu",setup:function(){var e=Object(r["m"])(""),n=p();return Object(r["q"])((function(){return null===n||void 0===n?void 0:n.state.route.path}),(function(n){e.value=n||""})),{currentPath:e,menus:v,handleClickMenu:function(e){n.methods.go(e.page)}}}};t("0779");O.render=j;var g=O,y={headSize:60,menuSize:300},k=Object(r["e"])({name:"App",components:{AppNavigator:s,AppNavigatorPage:f,AppMenu:g},data:function(){return{HomeConfig:y}},methods:{goHome:function(){console.log(this.$refs)}}});t("24a3");k.render=a;var w=k,C=Object(r["b"])(w);C.mount("#app")},a8ed:function(e,n,t){},e45c:function(e,n,t){var r={"./normal/button":["1e5a","chunk-2d0b6916"],"./normal/button.vue":["1e5a","chunk-2d0b6916"],"./normal/color":["a642","chunk-2d208a29"],"./normal/color.vue":["a642","chunk-2d208a29"],"./normal/icon":["5dee","chunk-2d0d3ca5"],"./normal/icon.vue":["5dee","chunk-2d0d3ca5"],"./normal/layout":["c0f4","chunk-2d216271"],"./normal/layout.vue":["c0f4","chunk-2d216271"]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id="e45c",e.exports=o}});
//# sourceMappingURL=index.75631058.js.map