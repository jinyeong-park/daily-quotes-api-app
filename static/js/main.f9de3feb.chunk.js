(this["webpackJsonpmyadviser-app"]=this["webpackJsonpmyadviser-app"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(2),a=n.n(o),i=n(12),s=n.n(i),r=(n(23),n(13)),u=n(14),d=n(17),l=n(16),p=n(15),h=n.n(p),f=(n(41),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).fetchQuoteFromApi=function(){h.a.get("https://api.adviceslip.com/advice").then((function(e){var t=e.data.slip.advice;console.log("response.data",t),c.setState({quote:t})})).catch((function(e){console.log("App get error",e)}))},c.state={quote:""},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchQuoteFromApi()}},{key:"render",value:function(){var e=this.state.quote;return console.log("quote",e),Object(c.jsx)("div",{className:"app",children:Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("h1",{className:"heading",children:e})})})}}]),n}(o.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.f9de3feb.chunk.js.map