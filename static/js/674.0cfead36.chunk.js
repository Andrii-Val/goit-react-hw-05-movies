"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{6713:function(n,t,e){e.d(t,{BG:function(){return c},Me:function(){return o},bI:function(){return s},np:function(){return p},wr:function(){return u}});var r=e(4165),a=e(5861),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzkyZGRjZDY0Y2Q1YzFlOTQ4NDhiODE3OGFjZjNmNyIsInN1YiI6IjY0ZjI0ODU3NWYyYjhkMDBhYmM5YzYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjHZG0nm_SvGYBgxulpG0lDE4BQDW-1ee24-kukqTQo";var u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{include_adult:!1,query:e,page:t}});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6582:function(n,t,e){e.d(t,{O:function(){return w}});var r,a,i,u,c,s=e(7689),o=e(168),p=e(5867),f=e(1087),d=(0,p.ZP)(f.OL)(r||(r=(0,o.Z)(["\n  color: inherit;\n"]))),l=p.ZP.h2(a||(a=(0,o.Z)(["\n  font-size: 18px;\n"]))),h=e(184),Z=function(n){var t=n.movie,e=(0,s.TH)(),r=t.release_date.indexOf("-"),a=t.release_date.slice(0,r);return(0,h.jsx)("div",{children:(0,h.jsxs)(d,{to:"/movies/".concat(t.id),state:{from:e},children:[t.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"movie poster",loading:"lazy"}):(0,h.jsx)("img",{src:"https://via.placeholder.com/250x375",alt:"movie poster",loading:"lazy"}),(0,h.jsxs)(l,{children:[t.title," (",a,")"]})]})},t.id)},v=p.ZP.div(i||(i=(0,o.Z)(["\n  width: 1050px;\n  margin: 0 auto;\n  padding: 0 10px;\n"]))),x=p.ZP.ul(u||(u=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 40px;\n"]))),m=p.ZP.li(c||(c=(0,o.Z)(["\n  width: 250px;\n"]))),w=function(n){var t=n.movies;return(0,h.jsx)(v,{children:(0,h.jsx)(x,{children:t.map((function(n){return(0,h.jsx)(m,{children:(0,h.jsx)(Z,{movie:n})},n.id)}))})})}},8674:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i=e(4165),u=e(5861),c=e(9439),s=e(2791),o=e(9014),p=e(6713),f=e(6582),d=e(6089),l=e(168),h=e(5867),Z=h.ZP.div(r||(r=(0,l.Z)(["\n  width: 1050px;\n  margin: 0 auto;\n  padding: 10px;\n"]))),v=h.ZP.h1(a||(a=(0,l.Z)(["\n  font-size: 22px;\n  font-weight: 500;\n  color: green;\n"]))),x=e(184),m=function(){return(0,x.jsx)(Z,{children:(0,x.jsx)(v,{children:"Trending today"})})},w=function(){var n=(0,s.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(!1),l=(0,c.Z)(a,2),h=l[0],Z=l[1];return(0,s.useEffect)((function(){function n(){return(n=(0,u.Z)((0,i.Z)().mark((function n(){var t,e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,p.wr)();case 4:t=n.sent,e=t.results,r(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),o.ZP.error("Oops, ".concat(n.t0,". Please try again."));case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,x.jsxs)("div",{children:[(0,x.jsx)(m,{}),h&&(0,x.jsx)(d.i,{}),e&&(0,x.jsx)(f.O,{movies:e}),(0,x.jsx)(o.x7,{})]})}}}]);
//# sourceMappingURL=674.0cfead36.chunk.js.map