(this.webpackJsonpktv=this.webpackJsonpktv||[]).push([[0],{45:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(38),a=n.n(s),r=(n(45),n(46),n(47),n(11)),i=n(4),l=(n(49),n(9)),b=n.n(l),u=n(16),j=n(5),d=n(21),m=n(25);n(81);m.a.initializeApp({apiKey:"AIzaSyAZ3DKq0vI256yimaad4iUp0uML33m07Yo",authDomain:"loatr-tech-ktv.firebaseapp.com",projectId:"loatr-tech-ktv",storageBucket:"loatr-tech-ktv.appspot.com",messagingSenderId:"580571065570",appId:"1:580571065570:web:a0f122923e4800aa2742bb",measurementId:"G-XQY5SYQYEV"});var h=m.a,O=n(1),p=Object(c.createContext)({});function f(e){var t=Object(c.useState)("0EqUdVjYeqA8aAvAv3W5"),n=Object(j.a)(t,2),o=n[0],s=n[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),i=r[0],l=r[1];Object(c.useEffect)((function(){var e=h.firestore().collection("rooms").doc(o).collection("songs").orderBy("position","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));l(t)}));return function(){return e()}}),[o]);var m=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.firestore().collection("rooms").add({play:!0}).then((function(e){s(e.id)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(p.Provider,{value:{roomId:o,createRoom:m,onRoomChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return h.firestore().collection("rooms").doc(o).onSnapshot(e)},songs:i,playPauseSong:function(e){return h.firestore().collection("rooms").doc(o).update({play:e})},updateSongProps:function(e,t){return h.firestore().collection("rooms").doc(o).collection("songs").doc(e).update(t)},addSong:function(e){return function(e){return h.firestore().collection("rooms").doc(e)}(o).collection("songs").add(e)},removeFirstSong:function(){if(i.length)return h.firestore().collection("rooms").doc(o).collection("songs").doc(i[0].id).delete()}},children:e.children})}n(52);var x=function(){var e=Object(c.useContext)(p),t=e.roomId,n=e.createRoom,o=Object(c.useState)(!1),s=Object(j.a)(o,2),a=s[0],i=s[1],l=Object(c.useRef)(null),d=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:i(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"home-container",children:a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{children:"Room created!"}),Object(O.jsx)("i",{className:"bi bi-check-circle text-success home-created-icon"}),Object(O.jsxs)(r.b,{to:"/room/".concat(t),className:"btn btn-info mb-2",children:["Go to ",Object(O.jsx)("i",{className:"bi bi-mic"})," room"]}),Object(O.jsxs)(r.b,{to:"/remote/".concat(t),className:"btn btn-warning mb-2",children:["Go to ",Object(O.jsx)("i",{className:"bi bi-phone"})," remote controller"]}),Object(O.jsxs)("button",{className:"btn btn-outline-secondary mb-2",onClick:function(){return function(){var e=l.current;e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("Controller link has been copied on your clipboard")}()},children:[Object(O.jsx)("i",{className:"bi bi-share"})," Share the controller"]}),Object(O.jsx)("input",{type:"text",className:"form-control",value:"http://ktv.loatr.tech/#/remote/".concat(t),onChange:function(){},ref:l})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{children:"Welcome to Youtube Karaoke"}),Object(O.jsx)("img",{src:"karaoke-icon.png",alt:"karaoke icon"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){return d()},children:"Create a room"}),Object(O.jsx)("button",{className:"btn btn-primary",children:"Join a room"})]})]})})};n(57);var g,v=function(){var e=Object(c.useContext)(p).songs;return Object(O.jsx)("div",{className:"room-banner-container",children:Object(O.jsx)("div",{className:"room-banner",children:e.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"\u6b63\u5728\u64ad\u653e:"})," ",e[0].title.runs[0].text]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"\u4e0b\u4e00\u9996:"})," ",e.length>1?e[1].title.runs[0].text:"\u6ca1\u6709\u4e86\uff0c\u5feb\u70b9\u6b4c"]})]}):Object(O.jsx)("span",{children:"\u6ca1\u6709\u6b4c\u66f2\u5566\uff0c\u5feb\u70b9\u70b9\u6b4c"})})})};n(58);var y=function(){var e=Object(c.useContext)(p),t=e.songs,n=e.updateSongProps,o=e.removeFirstSong,s=e.onRoomChange,a=Object(c.useState)(),r=Object(j.a)(a,2),i=r[0],l=r[1],b=Object(c.useState)(),u=Object(j.a)(b,2),d=u[0],m=u[1],h=Object(c.useState)(-1),f=Object(j.a)(h,2),x=f[0],y=f[1],N=Object(c.useState)(),k=Object(j.a)(N,2),C=k[0],S=k[1];return Object(c.useEffect)((function(){i&&[-1,1,2].includes(x)&&s((function(e){var t=e.data().play;clearTimeout(g),g=setTimeout((function(){C!==t&&(S(t),console.log("play",t,"songState",x),[-1,2].includes(x)&&t?setTimeout((function(){console.log("Listen and PLAY!"),i.playVideo()}),100):1!==x||t||(console.log("Listen and PAUSE!"),i.pauseVideo()))}),500)}))}),[s,x,i,C]),Object(c.useEffect)((function(){0===x&&i&&(t.length>1?i.loadVideoById(t[1].videoId):i.loadVideoById("BHACKCNDMW8"),t.length&&o(),y(1))}),[x,t,i,o]),Object(c.useEffect)((function(){var e=document.createElement("script");e.id="youtube-iframe-api",e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=function(e){new window.YT.Player("ktv-youtube-iframe",{videoId:"BHACKCNDMW8",playerVars:{autoplay:1,controls:0},events:{onReady:function(e){l(e.target)},onStateChange:function(e){var t=e.data;y(t)}}})}}),[]),Object(c.useEffect)((function(){if(i&&t.length){var e=t[0];(null===d||void 0===d?void 0:d.videoId)!==e.videoId&&(i.loadVideoById(e.videoId),t.length>1&&n(e.id,{position:e.position-1e3}),m(e))}}),[i,t,d,n]),Object(O.jsxs)("div",{className:"room-container",children:[Object(O.jsx)(v,{}),Object(O.jsx)("section",{className:"room-iframe-wrapper",children:Object(O.jsx)("div",{className:"room-iframe-container",children:Object(O.jsx)("div",{id:"ktv-youtube-iframe",className:"room-iframe",tabIndex:-1})})}),i?Object(O.jsxs)("section",{className:"room-actions",children:[Object(O.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){return y(0)},children:Object(O.jsx)("i",{className:"bi bi-skip-forward"})}),Object(O.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){return i.playVideo()},children:Object(O.jsx)("i",{className:"bi bi-play"})}),Object(O.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){return i.pauseVideo()},children:Object(O.jsx)("i",{className:"bi bi-pause"})})]}):Object(O.jsx)(O.Fragment,{})]})};n(59);var N=function(e){e.match;var t=Object(c.useContext)(p),n=t.songs,o=t.playPauseSong,s=t.removeFirstSong,a=t.roomId,i=Object(c.useState)(!1),l=Object(j.a)(i,2),d=l[0],m=l[1],h=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,o(t);case 3:setTimeout((function(){return m(!1)}),300);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,s();case 3:setTimeout((function(){return m(!1)}),300);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"remote-container",children:[Object(O.jsxs)("section",{className:"remote-links",children:[Object(O.jsxs)(r.b,{to:"/remote/".concat(a,"/playing"),className:"btn btn-lg btn-primary",children:["\u6b63\u5728\u64ad\u653e ",Object(O.jsx)("span",{className:"badge",children:n.length})]}),Object(O.jsxs)(r.b,{to:"/remote/".concat(a,"/search"),className:"btn btn-lg btn-warning",children:[Object(O.jsx)("i",{className:"bi bi-music-note"})," \u70b9\u6b4c"]})]}),Object(O.jsxs)("section",{className:"remote-actions",children:[Object(O.jsxs)("button",{className:"btn btn-lg btn-".concat(n.length<2?"outline-":"","secondary"),disabled:n.length<2||d,onClick:function(){return f()},children:[Object(O.jsx)("i",{className:"bi bi-skip-forward"})," \u5207\u6b4c"]}),Object(O.jsx)("button",{className:"btn btn-lg btn-secondary",onClick:function(){return h(!0)},disabled:d,children:Object(O.jsx)("i",{className:"bi bi-play"})}),Object(O.jsx)("button",{className:"btn btn-lg btn-secondary",onClick:function(){return h(!1)},disabled:d,children:Object(O.jsx)("i",{className:"bi bi-pause"})})]})]})},k=(n(60),n(40)),C=n.n(k);n(78);function S(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o){var s=1e3;t.length>0&&(s=c&&t.length>1?t[1].position-1:t[t.length-1].position+1e3),e(Object(d.a)(Object(d.a)({},n),{},{position:s})).then((function(){o(!0)}))}))}var I=function(e){var t=Object(c.useContext)(p),n=t.songs,o=t.addSong,s=Object(c.useState)(!1),a=Object(j.a)(s,2),r=a[0],i=a[1],l=e.video,b=l.thumbnail.thumbnails,u=Object(j.a)(l.title.runs,1)[0].text;return Object(O.jsxs)("div",{className:"remote-song",children:[Object(O.jsx)("section",{className:"remote-song-header",children:u}),Object(O.jsxs)("section",{className:"remote-song-body",children:[Object(O.jsx)("div",{className:"remote-song-image",children:Object(O.jsx)("img",{src:b[b.length-1].url,alt:u})}),Object(O.jsx)("div",{className:"remote-song-actions",children:r?Object(O.jsx)("div",{className:"remote-song-already-added text-success",children:Object(O.jsx)("i",{className:"bi bi-check2-circle"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"btn btn-secondary",onClick:function(){S(o,n,l).then((function(){i(!0)}))},children:"\u6dfb\u52a0"}),Object(O.jsx)("button",{className:"btn btn-secondary",onClick:function(){S(o,n,l,!0).then((function(){i(!0)}))},children:"\u7f6e\u9876"})]})})]})]})};var w=function(){var e=Object(c.useContext)(p),t=e.songs,n=e.roomId,o=Object(c.useState)(""),s=Object(j.a)(o,2),a=s[0],i=s[1],l=Object(c.useState)([]),d=Object(j.a)(l,2),m=d[0],h=d[1],f=Object(c.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=7;break}return e.next=4,C.a.get("https://loatr-tech-api.herokuapp.com/ktv/search",{params:{query:a}});case 4:n=e.sent,c=n.data,h(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{className:"remote-search-header",children:[Object(O.jsx)(r.b,{to:"/remote/".concat(n),className:"btn btn-light",children:"\u8fd4\u56de"}),Object(O.jsxs)(r.b,{to:"/remote/".concat(n,"/playing"),className:"btn btn-primary",children:["\u6b63\u5728\u64ad\u653e ",Object(O.jsx)("span",{className:"badge",children:t.length})]})]}),Object(O.jsxs)("form",{className:"container",onSubmit:f,children:[Object(O.jsxs)("div",{className:"input-group remote-search-box",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search song",value:a,onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("button",{className:"btn btn-outline-secondary",id:"remote-search-input",type:"button",onClick:f,children:"Search"})]}),Object(O.jsx)("section",{children:m.map((function(e){return Object(O.jsx)(I,{video:e},e.videoId)}))})]})]})};n(79);var F=function(){var e=Object(c.useContext)(p),t=e.songs,n=e.updateSongProps,o=e.roomId;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{className:"remote-playing-header",children:[Object(O.jsx)(r.b,{to:"/remote/".concat(o),className:"btn btn-light",children:"\u8fd4\u56de"}),Object(O.jsx)("span",{children:"\u64ad\u653e\u5217\u8868"})]}),Object(O.jsxs)("table",{className:"table remote-playing-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"#"}),Object(O.jsx)("th",{scope:"col",children:"\u5df2\u9009\u6b4c\u66f2"}),Object(O.jsx)("th",{scope:"col"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e,c){var o=Object(j.a)(e.title.runs,1)[0].text,s=null;return 0===c?s="\u6b63\u5728\u64ad\u653e":1===c&&(s="\u5373\u5c06\u64ad\u653e"),Object(O.jsxs)("tr",{className:0===c?"table-primary":"",children:[Object(O.jsx)("td",{children:c+1}),Object(O.jsx)("td",{children:o}),Object(O.jsx)("td",{children:s?Object(O.jsx)("span",{children:s}):Object(O.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return function(e){n(e.id,{position:t[1].position-1})}(e)},children:"\u7f6e\u9876"})})]},c)}))})]})]})};var P=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(i.a,{path:"/room/:roomId",component:y}),Object(O.jsx)(i.a,{path:"/remote/:roomId",exact:!0,component:N}),Object(O.jsx)(i.a,{path:"/remote/:roomId/search",component:w}),Object(O.jsx)(i.a,{path:"/remote/:roomId/playing",component:F})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),A()}},[[80,1,2]]]);
//# sourceMappingURL=main.4cc0a875.chunk.js.map