(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("UserSetup",{attrs:{wifiNets:t.wifiNets},on:{"request-wifi-nets-from-app":function(e){return t.loadNetworksFromJson()}}})],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"panel"},[s("p",{staticClass:"panel-heading has-text-centered"},[t._v("Setup Device")]),s("div",{staticClass:"panel-block columns is-marginless is-centered"},[s("form",{staticClass:"column is-full-mobile is-four-fifths-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label",attrs:{for:"wifi"}},[t._v("Your wifi is")]),s("div",{staticClass:"field is-grouped"},[t.isManualSetup?s("div",{staticClass:"control is-expanded has-icons-left"},[s("input",{staticClass:"input is-link",attrs:{id:"wifi-input",type:"text",placeholder:"Type me"}}),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:["fas","wifi"]}})],1)]):s("div",{staticClass:"control is-expanded has-icons-left"},[s("div",{staticClass:"select is-fullwidth is-info"},[s("select",{attrs:{id:"wifi-select",name:"wifi-net"}},[s("option",{attrs:{value:"select-value"}},[t._v("Select Wifi")]),t._l(t.wifiNets,(function(e){return s("option",{key:e.id,attrs:{value:"wifi.id"}},[t._v(t._s(e.name))])}))],2)]),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:["fas","wifi"]}})],1)]),s("p",{staticClass:"control"},[t.isManualSetup?s("a",{staticClass:"button is-info",on:{click:function(e){t.switchSetupMode(),t.requestWifiNetsFromApp()}}},[t._v("Scan")]):s("a",{staticClass:"button is-info",on:{click:function(e){return t.switchSetupMode()}}},[t._v("Manual")])])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-primary",attrs:{id:"password",type:t.isPasswordHidden?"password":"text",placeholder:"********"}}),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:["fas","unlock-alt"]}})],1),s("span",{staticClass:"icon is-small is-right",staticStyle:{"pointer-events":"initial"},on:{click:function(e){return t.changePasswordDisplay()}}},[t.isPasswordHidden?s("font-awesome-icon",{attrs:{icon:["fas","eye"]}}):s("font-awesome-icon",{attrs:{icon:["fas","eye-slash"]}})],1)])]),t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link is-outlined is-fullwidth"},[t._v("Save setup")])])])}],l={name:"UserSetup",props:{wifiNets:{type:Array,required:!0}},data(){return{isManualSetup:!0,isPasswordHidden:!0}},methods:{switchSetupMode(){this.isManualSetup=!this.isManualSetup},changePasswordDisplay(){this.isPasswordHidden=!this.isPasswordHidden},requestWifiNetsFromApp(){this.$emit("request-wifi-nets-from-app")}}},c=l,u=s("2877"),d=Object(u["a"])(c,o,r,!1,null,null,null),f=d.exports;let p=[{id:1,name:"I am wifi"}];var w={name:"app",components:{UserSetup:f},data(){return{wifiNets:p}},methods:{}},h=w,v=Object(u["a"])(h,n,a,!1,null,null,null),m=v.exports,b=(s("92c6"),s("ad3d")),y=s("ecee"),C=s("c074");y["c"].add(C["d"]),y["c"].add(C["c"]),y["c"].add(C["a"]),y["c"].add(C["b"]),i["a"].component("font-awesome-icon",b["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.348f9e46.js.map