(this["webpackJsonpweekly-planner"]=this["webpackJsonpweekly-planner"]||[]).push([[0],{16:function(e,t,n){e.exports=n(43)},21:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(21),n(14)),l=n.n(i);if(!Object({NODE_ENV:"production",PUBLIC_URL:"/weekly-planner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GOOGLE_SHEET_KEY)throw new Error("You must include a 'GOOGLE_SHEET_KEY' in your .env file!");var s={appName:"Weekly Planner",sheetKey:Object({NODE_ENV:"production",PUBLIC_URL:"/weekly-planner",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GOOGLE_SHEET_KEY},m=function(){var e=document.getElementsByTagName("meta").namedItem("description");e&&(e.content=s.appName),document.title=s.appName;var t={short_name:s.appName,name:s.appName,icons:[{src:"favicon.ico",sizes:"64x64 32x32 24x24 16x16",type:"image/x-icon"},{src:"logo192.png",type:"image/png",sizes:"192x192"},{src:"logo512.png",type:"image/png",sizes:"512x512"}],start_url:".",display:"standalone",theme_color:"#000000",background_color:"#ffffff"},n=JSON.stringify(t),a=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(a);document.querySelector("#manifest-placeholder").setAttribute("href",r)},u=n(3),d=n(15),p=n.n(d),E=function(e){var t=e.headingItems;return r.a.createElement("li",{className:"heading"},t.map((function(e){return r.a.createElement("div",{key:e,className:"heading-item",style:{width:"".concat(100/t.length,"%")}},e||"-")})))},f=function(e){var t=e.row,n=e.keys,o=Object(a.useMemo)((function(){return n.map((function(e){return t[e]}))}),[t,n]);return r.a.createElement("li",{className:"row"},o.map((function(e){return r.a.createElement("div",{key:e,className:"heading-item",style:{width:"".concat(100/o.length,"%")}},e||"-")})))},h=(n(41),"https://docs.google.com/spreadsheets/d/".concat(s.sheetKey,"/pubhtml")),v=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),i=Object(u.a)(c,2),l=i[0],m=i[1],d=Object(a.useCallback)((function(){p.a.init({key:h,simpleSheet:!0,callback:function(e){m(e),o(!1)}})}),[]);Object(a.useEffect)((function(){o(!0),d();var e=setInterval(d,6e4);return function(){clearInterval(e)}}),[d]);var v=Object(a.useMemo)((function(){return l&&l[0]&&Object.keys(l[0])||[]}),[l]),g=Object(a.useMemo)((function(){return l?r.a.createElement("div",{className:"weekly-overview"},r.a.createElement("ul",{className:"list"},r.a.createElement(E,{headingItems:v}),l.map((function(e,t){return r.a.createElement(f,{row:e,keys:v})})))):r.a.createElement("div",{className:"no-data"},r.a.createElement("p",null,"No data loaded! Edit the sheet ",r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/".concat(s.sheetKey,"/edit#gid=0"),target:"_blank",rel:"noopener noreferrer"},"here")))}),[l,v]);return r.a.createElement("div",{className:"Overview"},r.a.createElement("h1",null,s.appName),n?r.a.createElement("p",null,"Loading..."):g)};n(42);l.a.config(),m();var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b268be5d.chunk.js.map