"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{6713:function(n,e,t){t.d(e,{BG:function(){return i},Me:function(){return o},bI:function(){return s},np:function(){return p},wr:function(){return c}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers.common.Authorization="Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzkyZGRjZDY0Y2Q1YzFlOTQ4NDhiODE3OGFjZjNmNyIsInN1YiI6IjY0ZjI0ODU3NWYyYjhkMDBhYmM5YzYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjHZG0nm_SvGYBgxulpG0lDE4BQDW-1ee24-kukqTQo";var c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie",{params:{include_adult:!1,query:t,page:e}});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2707:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,u,c,i=t(4165),s=t(5861),o=t(9439),p=t(2791),f=t(7689),l=t(9014),h=t(3430),Z=t(6713),d=t(168),v=t(5867),x=v.ZP.ul(r||(r=(0,d.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n"]))),m=v.ZP.p(a||(a=(0,d.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n"]))),y=v.ZP.p(u||(u=(0,d.Z)(["\n  font-style: italic;\n"]))),w=v.ZP.p(c||(c=(0,d.Z)(["\n  margin-top: 15px;\n"]))),g=t(184),j=function(){var n=(0,f.UO)().movieId,e=(0,p.useState)(null),t=(0,o.Z)(e,2),r=t[0],a=t[1],u=(0,p.useState)(null),c=(0,o.Z)(u,2),d=c[0],v=c[1],j=(0,p.useState)(!1),k=(0,o.Z)(j,2),b=k[0],I=k[1];return(0,p.useEffect)((function(){function e(){return(e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,(0,Z.np)(n);case 4:t=e.sent,r=t.results,u=t.total_results,a(r),v(u),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),l.ZP.error("Oops, ".concat(e.t0,". Please try again."));case 14:return e.prev=14,I(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,g.jsxs)("div",{children:[b&&(0,g.jsx)(h.g4,{height:"80",width:"80",radius:"9",color:"orange",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),r&&(0!==d?(0,g.jsx)(x,{children:r.map((function(n){return(0,g.jsxs)("li",{children:[(0,g.jsxs)(m,{children:["Author: ",n.author]}),(0,g.jsxs)(y,{children:["'",n.content,"'"]})]},n.id)}))}):(0,g.jsx)(w,{children:"We don't have any reviews for this movie"})),(0,g.jsx)(l.x7,{})]})}}}]);
//# sourceMappingURL=707.c08b8b41.chunk.js.map