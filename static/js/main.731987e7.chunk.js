(this.webpackJsonpktv=this.webpackJsonpktv||[]).push([[0],{45:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(37),a=n.n(s),r=(n(45),n(46),n(47),n(14)),i=n(4),l=(n(49),n(7)),j=n(23);n(79);j.a.initializeApp({apiKey:"AIzaSyAZ3DKq0vI256yimaad4iUp0uML33m07Yo",authDomain:"loatr-tech-ktv.firebaseapp.com",projectId:"loatr-tech-ktv",storageBucket:"loatr-tech-ktv.appspot.com",messagingSenderId:"580571065570",appId:"1:580571065570:web:a0f122923e4800aa2742bb",measurementId:"G-XQY5SYQYEV"});var b=j.a,d=n(19),u=n(1),m=Object(c.createContext)({});function h(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)(),r=Object(l.a)(a,2),i=r[0],j=r[1],h=Object(c.useState)([]),O=Object(l.a)(h,2),f=O[0],p=O[1];return Object(c.useEffect)((function(){var e=b.firestore().collection("rooms").doc("kcuRCauZPqfaoLCLcjDP").collection("songs").orderBy("position","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));p(t)}));return function(){return e()}}),[]),Object(u.jsx)(m.Provider,{value:{room:o,setRoom:s,roomId:i,setRoomId:j,songs:f},children:e.children})}n(51);var O=function(){var e=Object(c.useContext)(m).songs,t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)(),r=Object(l.a)(a,2),i=r[0],j=r[1],d=Object(c.useState)(),h=Object(l.a)(d,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){var t;0===O&&o&&(e.length>1?o.loadVideoById(e[1].videoId):o.loadVideoById("BHACKCNDMW8"),(t=e).length&&b.firestore().collection("rooms").doc("kcuRCauZPqfaoLCLcjDP").collection("songs").doc(t[0].id).delete().then((function(){console.log("song removed!")})),f(1))}),[O,e,o]),Object(c.useEffect)((function(){var e=document.createElement("script");e.id="youtube-iframe-api",e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=function(e){new window.YT.Player("ktv-youtube-iframe",{videoId:"BHACKCNDMW8",events:{onReady:function(e){e.target.playVideo(),s(e.target)},onStateChange:function(e){var t=e.data;f(t)}}})}}),[]),Object(c.useEffect)((function(){if(o&&e.length){var t=e[0];(null===i||void 0===i?void 0:i.videoId)!==t.videoId&&(o.loadVideoById(t.videoId),e.length>1&&b.firestore().collection("rooms").doc("kcuRCauZPqfaoLCLcjDP").collection("songs").doc(t.id).update({position:t.position-1e3}),j(t))}}),[o,e,i]),Object(u.jsxs)("div",{className:"room-container",children:[Object(u.jsx)("section",{className:"room-iframe-wrapper",children:Object(u.jsx)("div",{className:"room-iframe-container",children:Object(u.jsx)("div",{id:"ktv-youtube-iframe",className:"room-iframe",tabIndex:-1})})}),Object(u.jsxs)("section",{children:[Object(u.jsx)("button",{onClick:function(){o.playVideo()},children:"Play"}),Object(u.jsx)("button",{onClick:function(){f(0)},children:"Skip"})]})]})};n(52);var f=function(){var e=Object(c.useContext)(m).songs;return Object(u.jsxs)("div",{className:"remote-container",children:[Object(u.jsxs)("section",{className:"remote-links",children:[Object(u.jsxs)(r.b,{to:"/remote/playing",className:"btn btn-lg btn-outline-secondary",children:["\u6b63\u5728\u64ad\u653e ",Object(u.jsx)("span",{className:"badge",children:e.length})]}),Object(u.jsx)(r.b,{to:"/remote/search",className:"btn btn-lg btn-outline-secondary",children:"\u70b9\u6b4c"})]}),Object(u.jsx)("section",{className:"remote-actions",children:Object(u.jsx)("button",{className:"btn btn-lg btn-outline-secondary",children:"\u5207\u6b4c"})})]})},p=n(26),x=n.n(p),g=n(39),v=(n(58),n(40)),y=n.n(v);n(76);function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(c){var o=1e3;e.length>0&&(o=n&&e.length>1?e[1].position-1:e[e.length-1].position+1e3),b.firestore().collection("rooms").doc("kcuRCauZPqfaoLCLcjDP").collection("songs").add(Object(d.a)(Object(d.a)({},t),{},{position:o})).then((function(){c(!0)}))}))}var C=function(e){var t=Object(c.useContext)(m).songs,n=Object(c.useState)(!1),o=Object(l.a)(n,2),s=o[0],a=o[1],r=e.video,i=r.thumbnail.thumbnails,j=Object(l.a)(r.title.runs,1)[0].text;return Object(u.jsxs)("div",{className:"remote-song",children:[Object(u.jsx)("section",{className:"remote-song-header",children:j}),Object(u.jsxs)("section",{className:"remote-song-body",children:[Object(u.jsx)("img",{className:"remote-song-image",src:i[i.length-1].url,alt:j}),Object(u.jsx)("div",{className:"remote-song-actions",children:s?Object(u.jsx)("span",{children:"\u5df2\u6dfb\u52a0"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){N(t,r).then((function(){a(!0)}))},children:"\u6dfb\u52a0"}),Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){N(t,r,!0).then((function(){a(!0)}))},children:"\u7f6e\u9876"})]})})]})]})};var k=function(){var e=Object(c.useContext)(m).songs,t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)([]),i=Object(l.a)(a,2),j=i[0],b=i[1],d=Object(c.useCallback)(Object(g.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=6;break}return e.next=3,y.a.get("http://api.loatr.tech/ktv/search",{params:{query:o}});case 3:t=e.sent,n=t.data,b(n);case 6:case"end":return e.stop()}}),e)}))),[o]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"remote-search-header",children:[Object(u.jsx)(r.b,{to:"/remote",className:"btn btn-light",children:"\u8fd4\u56de"}),Object(u.jsxs)(r.b,{to:"/remote/playing",className:"btn btn-primary",children:["\u6b63\u5728\u64ad\u653e ",Object(u.jsx)("span",{className:"badge",children:e.length})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"input-group remote-search-box",children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Search song",value:o,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:d,children:"Search"})]}),Object(u.jsx)("section",{children:j.map((function(e){return Object(u.jsx)(C,{video:e},e.videoId)}))})]})]})};n(77);var I=function(){var e=Object(c.useContext)(m).songs;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"remote-playing-header",children:[Object(u.jsx)(r.b,{to:"/remote",className:"btn btn-light",children:"\u8fd4\u56de"}),Object(u.jsx)("span",{children:"\u64ad\u653e\u5217\u8868"})]}),Object(u.jsxs)("table",{className:"table remote-playing-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"\u5df2\u9009\u6b4c\u66f2"}),Object(u.jsx)("th",{scope:"col"})]})}),Object(u.jsx)("tbody",{children:e.map((function(t,n){var c=Object(l.a)(t.title.runs,1)[0].text,o=null;return 0===n?o="\u6b63\u5728\u64ad\u653e":1===n&&(o="\u5373\u5c06\u64ad\u653e"),Object(u.jsxs)("tr",{className:0===n?"table-primary":"",children:[Object(u.jsx)("td",{children:n+1}),Object(u.jsx)("td",{children:c}),Object(u.jsx)("td",{children:o?Object(u.jsx)("span",{children:o}):Object(u.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return function(t){b.firestore().collection("rooms").doc("kcuRCauZPqfaoLCLcjDP").collection("songs").doc(t.id).update({position:e[1].position-1})}(t)},children:"\u7f6e\u9876"})})]},n)}))})]})]})};var S=function(){return Object(u.jsx)(h,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:"Homepage of ktv"}),Object(u.jsx)(i.a,{path:"/room",component:O}),Object(u.jsx)(i.a,{path:"/remote",exact:!0,component:f}),Object(u.jsx)(i.a,{path:"/remote/search",component:k}),Object(u.jsx)(i.a,{path:"/remote/playing",component:I})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),P()}},[[78,1,2]]]);
//# sourceMappingURL=main.731987e7.chunk.js.map