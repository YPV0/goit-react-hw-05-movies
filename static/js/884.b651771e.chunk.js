"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{576:function(n,e,t){t.d(e,{Hg:function(){return f},M1:function(){return g},TP:function(){return m},XT:function(){return d},tx:function(){return Z}});var r=t(861),a=t(757),c=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"42200b80456bf8bbad5e7a8d4195c4b9",language:"en-US"}}),i="/trending/all/day",o="/movie/",u="/credits",l="/reviews",p="/search/movie";function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get(i);case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get(p,{params:{query:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get(o+e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get(o+e+u);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function Z(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get(o+e+l);case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},884:function(n,e,t){t.r(e);var r=t(439),a=t(791),c=t(576),s=t(689),i=t(800),o=t(184);e.default=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],u=e[1],l=(0,s.UO)().movieId,p=(0,s.TH)(),f=(0,s.s0)();(0,a.useEffect)((function(){(0,c.TP)(l).then((function(n){return u(n)}))}),[l]);var h=p.pathname==="/movies/".concat(l,"/cast")?"/movies/".concat(l):"/movies/".concat(l,"/cast"),d=p.pathname==="/movies/".concat(l,"/reviews")?"/movies/".concat(l):"/movies/".concat(l,"/reviews");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.lx,{children:[(0,o.jsx)("button",{onClick:function(){f(-1)},children:"Go Back"}),(0,o.jsxs)(i.Zb,{children:[(0,o.jsx)(i.rS,{children:t.title}),(0,o.jsxs)("p",{children:["User Score: ",10*t.vote_average,"%"]}),t.poster_path&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})]}),(0,o.jsxs)(i.mo,{children:[(0,o.jsx)(i.Ju,{children:"Overview"}),(0,o.jsx)("p",{children:t.overview}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsxs)(i.LK,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.Fg,{to:h,children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.Fg,{to:d,children:"Reviews"})})]})]})]}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading..."}),children:(0,o.jsx)(s.j3,{})})]})}},800:function(n,e,t){t.d(e,{Fg:function(){return m},Ju:function(){return d},LK:function(){return v},Zb:function(){return x},lx:function(){return b},mo:function(){return g},rS:function(){return h}});var r,a,c,s,i,o,u,l=t(168),p=t(444),f=t(87),h=p.ZP.h1(r||(r=(0,l.Z)(["\n  font-size: 2em;\n  margin-bottom: 1em;\n"]))),d=p.ZP.h2(a||(a=(0,l.Z)(["\n  font-size: 1.6em;\n  margin-top: 1em;\n"]))),v=p.ZP.ul(c||(c=(0,l.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  gap: 1em;\n"]))),m=(0,p.ZP)(f.OL)(s||(s=(0,l.Z)(["\n  color: inherit;\n  text-decoration: none;\n  font-size: 22px;\n  padding: 5px;\n  border: 2px solid black;\n\n  &:hover {\n    color: inherit;\n    text-decoration: underline;\n  }\n"]))),x=p.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),g=p.ZP.div(o||(o=(0,l.Z)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin-bottom: 1em;\n"]))),b=p.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 50px;\n"])))}}]);
//# sourceMappingURL=884.b651771e.chunk.js.map