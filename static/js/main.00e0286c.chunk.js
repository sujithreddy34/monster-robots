(this["webpackJsonpmonster-robots"]=this["webpackJsonpmonster-robots"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=(n(12),n(5)),i=n(6),u=n(8),h=n(7),l=(n(13),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},j=(n(15),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),n(19),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=(n(20),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" Monster Robots"}),Object(l.jsx)(m,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.00e0286c.chunk.js.map