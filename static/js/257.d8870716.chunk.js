"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{383:function(n,e,t){t.d(e,{Hg:function(){return h},M1:function(){return g},TP:function(){return m},XT:function(){return f},tx:function(){return w}});var r=t(861),a=t(757),s=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"42200b80456bf8bbad5e7a8d4195c4b9",language:"en-US"}}),i="/trending/all/day",o="/movie/",u="/credits",l="/reviews",p="/search/movie";function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get(i);case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get(p,{params:{query:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get(o+e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get(o+e+u);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get(o+e+l);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},257:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,s,c,i,o,u,l=t(439),p=t(791),h=t(383),d=t(689),f=t(168),v=t(444),m=t(87),x=v.ZP.h1(r||(r=(0,f.Z)(["\n  font-size: 2em;\n  margin-bottom: 1em;\n"]))),g=v.ZP.h2(a||(a=(0,f.Z)(["\n  font-size: 1.6em;\n  margin-top: 1em;\n"]))),b=v.ZP.ul(s||(s=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  gap: 1em;\n"]))),w=(0,v.ZP)(m.OL)(c||(c=(0,f.Z)(["\n  color: inherit;\n  text-decoration: none;\n  font-size: 22px;\n  padding: 5px;\n  border: 2px solid black;\n\n  &:hover {\n    color: inherit;\n    text-decoration: underline;\n  }\n"]))),Z=v.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),j=v.ZP.div(o||(o=(0,f.Z)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin-bottom: 1em;\n"]))),y=v.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),k=t(184),P=function(){var n=(0,p.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,d.UO)().movieId,s=(0,d.TH)(),c=(0,d.s0)();(0,p.useEffect)((function(){(0,h.TP)(a).then((function(n){return r(n)}))}),[a]);var i=s.pathname==="/movies/".concat(a,"/cast")?"/movies/".concat(a):"/movies/".concat(a,"/cast"),o=s.pathname==="/movies/".concat(a,"/reviews")?"/movies/".concat(a):"/movies/".concat(a,"/reviews");return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(y,{children:[(0,k.jsx)("button",{onClick:function(){c(-1)},children:"Go Back"}),(0,k.jsxs)(Z,{children:[(0,k.jsx)(x,{children:t.title}),(0,k.jsxs)("p",{children:["User Score: ",10*t.vote_average,"%"]}),t.poster_path&&(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})]}),(0,k.jsxs)(j,{children:[(0,k.jsx)(g,{children:"Overview"}),(0,k.jsx)("p",{children:t.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsxs)(b,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:i,children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:o,children:"Reviews"})})]})]})]}),(0,k.jsx)(p.Suspense,{fallback:(0,k.jsx)("h1",{children:"Loading..."}),children:(0,k.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=257.d8870716.chunk.js.map