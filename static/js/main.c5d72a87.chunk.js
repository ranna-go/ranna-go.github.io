(this["webpackJsonpranna-web"]=this["webpackJsonpranna-web"]||[]).push([[0],{23:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),s=n.n(a),i=(n(23),n(4)),u=n.n(i),o=n(12),l=n(3),d=n(18),j=n(5),b=(n(35),n(36),n(2));function h(){return Object(b.jsxs)("div",{className:"lds-ellipsis",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}n(38);function v(e){var t=e.languages.map((function(e){return Object(b.jsx)("option",{children:e},e)}));return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("button",{className:"execute",disabled:e.disabled,onClick:function(){var t;return null===(t=e.onExecute)||void 0===t?void 0:t.call(null)},children:e.isExecuting?Object(b.jsx)(h,{}):Object(b.jsx)("span",{children:"\u25b6 execute"})}),Object(b.jsx)("select",{value:e.selectedLanguage,onChange:function(t){var n;return null===(n=e.onLanguageSelect)||void 0===n?void 0:n.call(null,t.target.value)},children:t}),Object(b.jsx)("button",{className:"share",disabled:e.disabled,onClick:function(){var t;return null===(t=e.onShare)||void 0===t?void 0:t.call(null)},children:"\ud83d\udd17 share snippet"})]})}n(39);function O(e){var t=e.trim().split("\n"),n=t.slice(0,t.length-1).map((function(e){return Object(b.jsxs)("span",{children:[e,Object(b.jsx)("br",{})]})}));return n.push(Object(b.jsx)("span",{children:t[t.length-1]})),n}var f=function(e){return Object(b.jsxs)("div",{className:"result-viewer",children:[e.res.stdout&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"heading",children:"stdout"}),Object(b.jsx)("div",{children:O(e.res.stdout)})]}),e.res.stderr&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"heading",children:"stderr"}),Object(b.jsx)("div",{className:"stderr",children:O(e.res.stderr)})]})]})};n(40);function p(e){var t;return Object(b.jsx)("div",{id:"snackbar-outer-container",className:e.show?" show":"",onClick:function(t){return function(t){var n;"snackbar-outer-container"===t.target.id&&(null===(n=e.onHide)||void 0===n||n.call(null))}(t)},children:Object(b.jsx)("div",{className:"snackbar-container",style:{backgroundColor:null!==(t=e.color)&&void 0!==t?t:"#2196F3"},children:e.children})})}var x=new j.Client("https://public.ranna.zekro.de"),g=new j.SnippetsClient("https://snippets.ranna.zekro.de"),m={python3:"python","openjdk-11":"java"};function k(e){var t;return null!==(t=m[e])&&void 0!==t?t:e}var w=function(){var e,t=Object(c.useState)({}),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),h=i[0],O=i[1],m=Object(c.useState)(""),w=Object(l.a)(m,2),S=w[0],y=w[1],N=Object(c.useState)({}),C=Object(l.a)(N,2),E=C[0],F=C[1],L=Object(c.useState)(!1),P=Object(l.a)(L,2),I=P[0],R=P[1],T=Object(c.useState)(!1),z=Object(l.a)(T,2),B=z[0],H=z[1],J=Object(c.useState)(),Y=Object(l.a)(J,2),A=Y[0],D=Y[1],M=Object(c.useState)(void 0),U=Object(l.a)(M,2),q=U[0],G=U[1],K=Object(c.useRef)(),Q=Object(c.useRef)();function V(){return(V=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I||!S||!h){e.next=14;break}return R(!0),F({}),e.prev=3,e.next=6,x.exec({language:h,code:S});case 6:t=e.sent,F(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),X(e.t0);case 13:R(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function W(){return(W=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S||!h){e.next=16;break}if(e.prev=1,K.current&&S.trim()===(null===(t=Q.current)||void 0===t?void 0:t.trim())){e.next=8;break}return e.next=5,g.create({code:S,language:h});case 5:n=e.sent,K.current=n.ident,window.history.pushState("","","/?s="+K.current);case 8:G(void 0),D(Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"You can share the snippet using this link."}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"share-input",readOnly:!0,value:window.location.origin+"?s="+K.current,onFocus:function(e){return e.target.select()}})]})),H(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),X(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function X(e){console.log(e),(e instanceof j.APIError&&429===e.code||"Failed to fetch"===e.message)&&(e.message="You need to wait until you can perform this action again."),G("#f44336"),D(Object(b.jsx)("span",{children:e.message})),H(!0),setTimeout((function(){return H(!1)}),4e3)}return Object(c.useEffect)((function(){K.current=new URLSearchParams(window.location.search).get("s"),x.spec().then((function(e){a(e),O(Object.keys(e)[0])})),K.current&&g.get(K.current).then((function(e){O(e.language),y(e.code),Q.current=e.code})).catch()}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(p,{show:B,color:q,onHide:function(){return H(!1)},children:A}),Object(b.jsx)(v,{languages:null!==(e=Object.keys(r))&&void 0!==e?e:[],selectedLanguage:h,isExecuting:I,disabled:!S,onLanguageSelect:function(e){return O(e)},onExecute:function(){return function(){return V.apply(this,arguments)}()},onShare:function(){return function(){return W.apply(this,arguments)}()}}),Object(b.jsx)(d.a,{height:"calc(100vh - 105px)",language:k(h),theme:"vs-dark",value:S,onChange:function(e){return y(e)},wrapperClassName:"code-editor"}),Object(b.jsx)(f,{res:E})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),S()}},[[41,1,2]]]);
//# sourceMappingURL=main.c5d72a87.chunk.js.map