"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{594:function(e,t,r){r.d(t,{Z:function(){return m}});r(791);var n=r(689),a=r(87),c="TrendMoveisItem_item__EVF5C",i="TrendMoveisItem_link__6aZWg",u="TrendMoveisItem_movie_title__TZ+Ht",s=r(829),o=r(184),p=function(e){var t=e.id,r=e.title,p=e.poster_path,l=e.state,h=(0,n.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(a.rU,{className:i,to:h.pathname.includes("movies")?"".concat(t):"movies/".concat(t),state:l,children:[null!==p?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(p),alt:r,width:"220px"}):(0,o.jsx)("img",{src:s,alt:r,width:"220px",height:"350px"}),(0,o.jsx)("p",{className:u,children:r})]})},t)})},l=r(393),h="MoviesList_list__0Owr9",m=function(e){var t=e.movies,r=(0,n.TH)();return null!==t?(0,o.jsx)("ul",{className:h,children:t.results.map((function(e){var t=e.id,n=e.title,a=e.poster_path;return(0,o.jsx)(p,{id:t,title:n,poster_path:a,to:t,state:{from:r}},t)}))}):(0,o.jsx)(l.Z,{})}},302:function(e,t,r){r.d(t,{i:function(){return c}});var n=r(439),a=r(791),c=function(e,t){var r=(0,a.useState)(null),c=(0,n.Z)(r,2),i=c[0],u=c[1];return(0,a.useEffect)((function(){e(t).then((function(e){return u(e)})).catch((function(e){return e.message}))}),[e,t]),[i,u]}},936:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),a=r(302),c=r(390),i=r(594),u=r(393),s="Home_main__3ilkD",o="Home_title__L087v",p="Home_accent__n4umv",l=r(184),h=function(){var e=(0,a.i)(c._k),t=(0,n.Z)(e,1)[0];return null!==t?(0,l.jsxs)("main",{className:s,children:[(0,l.jsxs)("h1",{className:o,children:["Trending ",(0,l.jsx)("span",{className:p,children:"today"})]}),(0,l.jsx)(i.Z,{movies:t})]}):(0,l.jsx)(u.Z,{})}},390:function(e,t,r){r.d(t,{Bt:function(){return p},I2:function(){return l},Mc:function(){return s},PI:function(){return o},_k:function(){return u}});var n=r(861),a=r(757),c=r.n(a),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.prev=1,e.next=4,i.Z.request(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"movie/".concat(t),params:{language:"en-US",movie_id:1,append_to_response:""},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,i.Z.request(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"movie/".concat(t,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,i.Z.request(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"movie/".concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,i.Z.request(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"search/movie",params:{query:"".concat(t),include_adult:"false",language:"en-US",primary_release_year:"",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQxNzRkMzczNGU1ZGI5Nzg5M2Q5NjU4ZDU1NmNjNiIsInN1YiI6IjY1ZGU4NWJlMTQwYmFkMDE4NjkzNTQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fve_csUJNzoZG2BaODejcu7Vo8LkD9Juv9wMoM7cZQE"}},e.prev=1,e.next=4,i.Z.request(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},829:function(e,t,r){e.exports=r.p+"static/media/anonymous.08f5fd3587c04d42e4ea.webp"}}]);
//# sourceMappingURL=936.e247cf93.chunk.js.map