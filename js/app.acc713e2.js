(function(){"use strict";var t={7896:function(t,e,n){var o=n(144),r=n(998),s=n(6072),i=n(6190),a=n(579),l=n(4886),c=n(9223),u=n(255),d=n(2348),p=n(400),f=n(1214),v=n(5808),m=n(4525),b=n(1116),Z=n(3059),h=function(){var t=this,e=t._self._c;return e(r.Z,[e(s.Z,{attrs:{app:""}},[e("div",{staticClass:"title theme--dark"},[t._v("SKT 복지온 앱 버전별 다운로드")])]),e(Z.Z,{staticClass:"ma-5"},[e(a.Z,[e(l.EB,{staticClass:"font-weight-bold"},[t._v("안드로이드")]),e(l.ZB,{staticClass:"envs"},[e(f.Z,{attrs:{multiple:""},model:{value:t.opened.android,callback:function(e){t.$set(t.opened,"android",e)},expression:"opened.android"}},t._l(Object.keys(t.apps.android),(function(n){return e(u.Z,[e(p.Z,{staticClass:"font-weight-bold"},[t._v(t._s(n.toUpperCase()))]),e(d.Z,[e(v.Z,{staticClass:"versions"},t._l(t.apps.android[n],(function(n){return e(m.Z,[e(b.km,[e(b.V9,[t._v(t._s(n.version)),e("div",{staticClass:"buttons"},[e(i.Z,{attrs:{color:"primary"},on:{click:function(e){return t.install(n)}}},[t._v("설치")])],1)])],1)],1)})),1)],1)],1)})),1)],1),e(c.Z),e(l.EB,{staticClass:"font-weight-bold"},[t._v("iOS")]),e(l.ZB,{staticClass:"envs"},[e(f.Z,{attrs:{multiple:""},model:{value:t.opened.ios,callback:function(e){t.$set(t.opened,"ios",e)},expression:"opened.ios"}},t._l(Object.keys(t.apps.ios),(function(n){return e(u.Z,[e(p.Z,{staticClass:"font-weight-bold"},[t._v(t._s(n.toUpperCase()))]),e(d.Z,[e(v.Z,{staticClass:"versions"},t._l(t.apps.ios[n],(function(n){return e(m.Z,[e(b.km,[e(b.V9,[t._v(t._s(n.version)),e("div",{staticClass:"buttons"},[e(i.Z,{attrs:{color:"primary"},on:{click:function(e){return t.install(n)}}},[t._v("설치")]),e(i.Z,{staticClass:"ml-2",attrs:{color:"secondary"},on:{click:function(e){return t.download(n)}}},[t._v("다운로드")])],1)])],1)],1)})),1)],1)],1)})),1)],1)],1)],1)],1)},w=[],_=n(8738),y=n.n(_),g={name:"App",data:()=>({opened:{android:[],ios:[]},apps:{android:{},ios:{}}}),async mounted(){const t=await this.axios.get(`https://welfare-skt.github.io/apps/app_versions.json?t=${y()((new Date).getMilliseconds())}`);this.apps=t.data},methods:{install(t){let e=t.link.replace("&dl=0","").replace("www.dropbox.com","dl.dropboxusercontent.com").replace("scl/fl","s");e.includes("manifest")&&(e="itms-services://?action=download-manifest&url="+encodeURIComponent(e)),window.open(e)},download(t){let e=t.file.replace("&dl=0","").replace("www.dropbox.com","dl.dropboxusercontent.com").replace("scl/fl","s");window.open(e)}}},O=g,x=n(1001),C=(0,x.Z)(O,h,w,!1,null,null,null),k=C.exports,j=n(8345);o.ZP.use(j.ZP);const P=[{path:"/",name:"home"}],S=new j.ZP({mode:"history",base:"/qa-dev/",routes:P});var E=S,M=n(8864);o.ZP.use(M.Z);var T=new M.Z({}),B=n(6154),U=n(2346);o.ZP.config.productionTip=!1,o.ZP.use(U.Z,B.Z),new o.ZP({router:E,vuetify:T,render:t=>t(k)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],s=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(a=!1,s<i&&(i=s));if(a){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(e&&e(o);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkqa_dev"]=self["webpackChunkqa_dev"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7896)}));o=n.O(o)})();
//# sourceMappingURL=app.acc713e2.js.map