"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[397],{302:function(e,r,t){t.d(r,{i:function(){return c}});var n=t(439),a=t(791),c=function(e,r){var t=(0,a.useState)(null),c=(0,n.Z)(t,2),u=c[0],i=c[1];return(0,a.useEffect)((function(){e(r).then((function(e){return i(e)})).catch((function(e){return e.message}))}),[e,r]),[u,i]}},397:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(439),a=(t(791),t(689)),c=t(302),u=t(390),i=t(393),s="Reviews_reviews_item__lcK9T",o="Reviews_reviews_list__w9z2C",h="Reviews_div__q2GS6",p="Reviews_avatar__EVCnL",l="Reviews_name__SeSYs",N="Reviews_review__1zM2q",v="Reviews_neg__8dArC",d=t(829),m=t(184),f=function(){var e=(0,a.UO)().id,r=(0,c.i)(u.Bt,e),t=(0,n.Z)(r,1)[0];if(!t)return(0,m.jsx)(i.Z,{});var f=t.results;return console.log(f),f.length>0?(0,m.jsxs)("ul",{className:o,children:[f.map((function(e){return(0,m.jsxs)("li",{className:s,children:[null!==e.author_details.avatar_path?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.author_details.avatar_path),alt:e.author,width:80,height:100,className:p}):(0,m.jsx)("img",{src:d,alt:e.author,width:80,height:100,className:p}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("p",{className:l,children:e.author}),(0,m.jsx)("p",{className:N,children:e.content})]})]},e.id)}))," "]}):(0,m.jsx)("h2",{className:v,children:"We don`t have any reviews about this movie yet"})}},390:function(e,r,t){t.d(r,{Bt:function(){return h},I2:function(){return p},Mc:function(){return s},PI:function(){return o},_k:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.prev=1,e.next=4,u.Z.request(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"movie/".concat(r),params:{language:"en-US",movie_id:1,append_to_response:""},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,u.Z.request(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"movie/".concat(r,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,u.Z.request(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"movie/".concat(r,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,u.Z.request(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"search/movie",params:{query:"".concat(r),include_adult:"false",language:"en-US",primary_release_year:"",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,u.Z.request(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},829:function(e,r,t){e.exports=t.p+"static/media/anonymous.08f5fd3587c04d42e4ea.webp"}}]);
//# sourceMappingURL=397.412664e6.chunk.js.map