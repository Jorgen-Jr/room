(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9K6k":function(e,t,r){"use strict";r.r(t);var n=r("0SSZ"),a=r("v7Hm"),c=r("tofy"),i=r("flX4"),o=r("Wbzz"),l=r("q1tI"),s=r("VXBa"),m=r("hizP"),u=r("S9GY");t.default=function(){var e=Object(o.useStaticQuery)("4131231720").allMarkdownRemark.nodes.map((function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,description:e.frontmatter.description,short_description:e.frontmatter.short_description}}));return l.createElement(s.a,{slide:4},l.createElement(m.a,{title:"Projetos - Jorge.room",description:"Jorge - Conheça os projetos.",lang:"pt-BR"}),l.createElement(a.a,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},l.createElement(c.a,{flexDir:"column",mb:"35px"},l.createElement(c.a,{h:"50px",alignItems:"center"},l.createElement(i.a,{separator:l.createElement(n.a,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},l.createElement(i.b,null,l.createElement(o.Link,{to:"/#"},"Início")),l.createElement(i.b,{isCurrentPage:!0},l.createElement(o.Link,{to:"/#"},"Projetos"))))),l.createElement(u.a,{projects:e})))}},S9GY:function(e,t,r){"use strict";var n=r("tofy"),a=r("v7Hm"),c=r("rGDf"),i=r("MAJE"),o=r("+p43"),l=r("q1tI"),s=r.n(l),m=r("0SSZ"),u=r("wZsY"),p=r("vG+z"),d=r("Wbzz"),f=r("ATyU").a.custom(u.b),b=function(e){var t=e.project;return s.a.createElement(d.Link,{to:t.slug||null,style:{textDecoration:"none"}},s.a.createElement(f,{borderRadius:"md",w:["auto","auto","300px"],m:"20px",overflow:"hidden",position:"relative",textAlign:"center",cursor:"pointer",shadow:"md",background:Object(o.c)("white","#102435"),whileHover:{scale:1.5,zIndex:1,transition:{duration:.4,type:"spring",bounce:.5}}},s.a.createElement(n.a,{flexDir:"column",justifyContent:"center",alignItems:"center"},t.icon?s.a.createElement(p.a,{src:t.icon,alt:t.name,boxSize:"150px",minH:"53px",height:"auto"}):s.a.createElement(n.a,{flexGrow:1,minH:"80px",justifyContent:"center",alignContent:"center",flexDir:"column"},s.a.createElement(c.a,{fontFamily:"Fira Code",fontWeight:"bolder",fontSize:"24px"},t.name)),s.a.createElement(a.a,{p:"10px"},s.a.createElement(n.a,{flexGrow:1,justifyContent:"space-between",flexDir:"column"},s.a.createElement(i.a,{mt:"10px",p:"10px",pb:"25px",zIndex:0},t.short_description),s.a.createElement(n.a,{justifyContent:"center",alignItems:"center"},"Clique Para Saber Mais",s.a.createElement(a.a,null,s.a.createElement(m.a,{boxSize:"32px"}))))))))},g=r("y+qo");t.a=function(){var e=Object(d.useStaticQuery)("2960885644").allMarkdownRemark.nodes.map((function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,description:e.frontmatter.description,short_description:e.frontmatter.short_description,slug:e.fields.slug,category:e.frontmatter.category,tags:e.frontmatter.tags}}));return s.a.createElement(s.a.Fragment,null,e.length>0&&s.a.createElement(n.a,{minH:"60vh",alignItems:["center"],flexDirection:["column"]},s.a.createElement(n.a,{justifyContent:"center"},s.a.createElement(g.a,{boxSize:"42px",color:"#666"})),s.a.createElement(n.a,{justifyContent:"center",textTransform:"uppercase",m:"15px",textAlign:"center"},s.a.createElement(a.a,null,s.a.createElement(c.a,{fontWeight:"light",size:"lg"},s.a.createElement(i.a,{as:"span"},"Conheça os"),s.a.createElement(i.a,{as:"span",fontWeight:"bold"}," ","Projetos")))),s.a.createElement(n.a,{justifyContent:"center"},s.a.createElement(a.a,{maxW:"450px",textAlign:"center",colo:!0,color:Object(o.c)("#666","#CCC"),m:["15px","0"]},s.a.createElement(i.a,null,"Conheça meus projetos, que participei e desenvolvi"))),s.a.createElement(n.a,{mt:"30px",justifyContent:"center",alignSelf:"center",flexWrap:"wrap",transition:"0.2s",maxW:["100%","1450px"]},e.map((function(e,t){return s.a.createElement(b,{key:"servico"+t,project:e})})))))}},flX4:function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return g})),r.d(t,"a",(function(){return h}));var n=r("sKyC"),a=r("5+Am"),c=r("U6LL"),i=r("4jWa"),o=r("CRla"),l=r("pr4h"),s=r("epLR"),m=r("DNJr"),u=r("q1tI");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=Object(n.a)((function(e,t){var r=e.spacing,n=d(e,["spacing"]),i=p({mx:r},Object(a.d)().separator);return u.createElement(c.a.span,p({ref:t,role:"presentation"},n,{__css:i}))}));l.a&&(f.displayName="BreadcrumbSeparator");var b=Object(n.a)((function(e,t){var r=e.isCurrentPage,n=e.as,i=e.className,o=d(e,["isCurrentPage","as","className"]),l=Object(a.d)(),m=p({ref:t,as:n,className:Object(s.b)("chakra-breadcrumb__link",i)},o);return r?u.createElement(c.a.span,p({"aria-current":"page",__css:l.link},m)):u.createElement(c.a.a,p({__css:l.link},m))}));l.a&&(b.displayName="BreadcrumbLink");var g=Object(n.a)((function(e,t){var r=e.isCurrentPage,n=e.separator,i=e.isLastChild,o=e.spacing,l=e.children,g=e.className,h=d(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),x=Object(m.a)(l).map((function(e){return e.type===b?u.cloneElement(e,{isCurrentPage:r}):e.type===f?u.cloneElement(e,{spacing:o,children:e.props.children||n}):e})),E=p({display:"inline-flex",alignItems:"center"},Object(a.d)().item),j=Object(s.b)("chakra-breadcrumb__list-item",g);return u.createElement(c.a.li,p({ref:t,className:j},h,{__css:E}),x,!i&&u.createElement(f,{spacing:o},n))}));l.a&&(g.displayName="BreadcrumbItem");var h=Object(n.a)((function(e,t){var r=Object(i.a)("Breadcrumb",e),n=Object(o.b)(e),l=n.children,f=n.spacing,b=void 0===f?"0.5rem":f,g=n.separator,h=void 0===g?"/":g,x=n.className,E=d(n,["children","spacing","separator","className"]),j=Object(m.a)(l),v=j.length,y=j.map((function(e,t){return u.cloneElement(e,{separator:h,spacing:b,isLastChild:v===t+1})})),O=Object(s.b)("chakra-breadcrumb",x);return u.createElement(c.a.nav,p({ref:t,"aria-label":"breadcrumb",className:O,__css:r.container},E),u.createElement(a.b,{value:r},u.createElement(c.a.ol,{className:"chakra-breadcrumb__list"},y)))}));l.a&&(h.displayName="Breadcrumb")},wZsY:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return g}));var n=r("rePB"),a=r("U6LL"),c=r("sKyC"),i=r("epLR"),o=r("pr4h"),l=r("DNJr"),s=r("q1tI"),m=(r("ypkU"),r("BXwj"));Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,t){return Object(o.c)(e)?e.map((function(e){return null===e?null:t(e)})):Object(o.h)(e)?Object(m.e)(e).reduce((function(r,n){return r[n]=t(e[n]),r}),{}):null!=e?t(e):null}var p="& > *:not(style) ~ *:not(style)";function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){return s.createElement(a.a.div,d({className:"chakra-stack__item"},e,{__css:d({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},b=Object(c.a)((function(e,t){var r=e.isInline,c=e.direction,o=e.align,m=e.justify,b=e.spacing,g=void 0===b?"0.5rem":b,h=e.wrap,x=e.children,E=e.divider,j=e.className,v=e.shouldWrapChildren,y=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=r?"row":null!=c?c:"column",k=s.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return Object(n.a)({flexDirection:r},p,u(r,(function(e){return a[e]})))}({direction:O,spacing:g})}),[O,g]),C=s.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(r,(function(e){return n[e]}))}}({spacing:g,direction:O})}),[g,O]),w=!!E,_=!v&&!w,N=Object(l.a)(x),S=_?N:N.map((function(e,t){var r=t+1===N.length,n=v?s.createElement(f,{key:t},e):e;if(!w)return n;var a=r?null:s.cloneElement(E,{__css:C});return s.createElement(s.Fragment,{key:t},n,a)})),W=Object(i.b)("chakra-stack",j);return s.createElement(a.a.div,d({ref:t,display:"flex",alignItems:o,justifyContent:m,flexDirection:k.flexDirection,flexWrap:h,className:W,__css:w?{}:Object(n.a)({},p,k[p])},y),S)}));o.a&&(b.displayName="Stack");var g=Object(c.a)((function(e,t){return s.createElement(b,d({align:"center"},e,{direction:"row",ref:t}))}));o.a&&(g.displayName="HStack");var h=Object(c.a)((function(e,t){return s.createElement(b,d({align:"center"},e,{direction:"column",ref:t}))}));o.a&&(h.displayName="VStack")}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-55c8d71265485599ee95.js.map