(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Pm7R:function(e,t,n){"use strict";n.r(t),n.d(t,"PostCard",(function(){return p}));var r=n("wZsY"),a=n("+p43"),i=n("vG+z"),o=n("v7Hm"),c=n("MAJE"),l=n("rGDf"),s=n("tofy"),u=n("Wbzz"),m=n("q1tI"),d=n.n(m),p=function(e){var t=e.post,n=e.fullWidth,m=null==t?void 0:t.special;return d.a.createElement(d.a.Fragment,null,t?d.a.createElement(r.b,{borderRadius:"5px",w:m||n?"100%":["100%","100%","100%","29%"],m:"20px",overflow:"hidden",background:m&&t.isBanner?"unset":Object(a.c)("white","#102435"),position:"relative",direction:n?["column","column","row","row"]:"column",justifyContent:m?"center":"auto",shadow:m?"none":"xl"},d.a.createElement(u.Link,{to:t.slug},d.a.createElement(i.a,{src:t.cover,alt:t.title,loading:t.isBanner?"eager":"lazy",style:{margin:0,width:"100%"},borderRadius:m?"7px":"unset",shadow:m?"md":"none"})),d.a.createElement(u.Link,{to:t.slug},d.a.createElement(o.a,Object.assign({},t.isBanner?{display:"none"}:null,{p:"0 20px"}),d.a.createElement(c.a,{as:"span",fontSize:"12px",color:Object(a.c)("#666","#CCC"),fontWeight:"bolder"},""+t.category.toUpperCase())," • ",d.a.createElement(c.a,{as:"span",fontSize:"12px",color:Object(a.c)("#666","#CCC")},""+t.post_date),d.a.createElement(l.a,{fontSize:"25px"},t.title),d.a.createElement(s.a,{flexGrow:1,justifyContent:"space-between",flexDir:"row"},d.a.createElement(o.a,{mt:"10px",pb:"25px",color:Object(a.c)("#666","#CCC"),zIndex:0},d.a.createElement("div",{className:"aviso-content-list",dangerouslySetInnerHTML:{__html:t.content}})," ",d.a.createElement(c.a,{style:{color:Object(a.c)("darkblue","lightblue")}},"ler mais")))))):null)};t.default=p},wZsY:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return b}));var r=n("rePB"),a=n("U6LL"),i=n("sKyC"),o=n("epLR"),c=n("pr4h"),l=n("DNJr"),s=n("q1tI"),u=(n("ypkU"),n("BXwj"));Object.freeze(["base","sm","md","lg","xl","2xl"]);function m(e,t){return Object(c.c)(e)?e.map((function(e){return null===e?null:t(e)})):Object(c.h)(e)?Object(u.e)(e).reduce((function(n,r){return n[r]=t(e[r]),n}),{}):null!=e?t(e):null}var d="& > *:not(style) ~ *:not(style)";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){return s.createElement(a.a.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},g=Object(i.a)((function(e,t){var n=e.isInline,i=e.direction,c=e.align,u=e.justify,g=e.spacing,b=void 0===g?"0.5rem":g,h=e.wrap,v=e.children,y=e.divider,x=e.className,w=e.shouldWrapChildren,j=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),E=n?"row":null!=i?i:"column",O=s.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return Object(r.a)({flexDirection:n},d,m(n,(function(e){return a[e]})))}({direction:E,spacing:b})}),[E,b]),k=s.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":m(n,(function(e){return r[e]}))}}({spacing:b,direction:E})}),[b,E]),C=!!y,W=!w&&!C,B=Object(l.a)(v),_=W?B:B.map((function(e,t){var n=t+1===B.length,r=w?s.createElement(f,{key:t},e):e;if(!C)return r;var a=n?null:s.cloneElement(y,{__css:k});return s.createElement(s.Fragment,{key:t},r,a)})),S=Object(o.b)("chakra-stack",x);return s.createElement(a.a.div,p({ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:O.flexDirection,flexWrap:h,className:S,__css:C?{}:Object(r.a)({},d,O[d])},j),_)}));c.a&&(g.displayName="Stack");var b=Object(i.a)((function(e,t){return s.createElement(g,p({align:"center"},e,{direction:"row",ref:t}))}));c.a&&(b.displayName="HStack");var h=Object(i.a)((function(e,t){return s.createElement(g,p({align:"center"},e,{direction:"column",ref:t}))}));c.a&&(h.displayName="VStack")}}]);
//# sourceMappingURL=component---src-pages-posts-post-card-tsx-207d84b42d7319ac3a8c.js.map