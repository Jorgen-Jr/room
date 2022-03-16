"use strict";(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[845],{9535:function(e,t,r){r.d(t,{At:function(){return d},aG:function(){return x},gN:function(){return g}});var n=r(7370),a=r(559),c=r(9818),o=r(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var s=["spacing"],m=["isCurrentPage","as","className","href"],u=["isCurrentPage","separator","isLastChild","spacing","children","className"],p=["children","spacing","separator","className"],f=(0,n.Gp)((function(e,t){var r=e.spacing,a=l(e,s),c=i({mx:r},(0,n.yK)().separator);return o.createElement(n.m$.span,i({ref:t,role:"presentation"},a,{__css:c}))}));a.Ts&&(f.displayName="BreadcrumbSeparator");var d=(0,n.Gp)((function(e,t){var r=e.isCurrentPage,c=e.as,s=e.className,u=e.href,p=l(e,m),f=(0,n.yK)(),d=i({ref:t,as:c,className:(0,a.cx)("chakra-breadcrumb__link",s)},p);return r?o.createElement(n.m$.span,i({"aria-current":"page",__css:f.link},d)):o.createElement(n.m$.a,i({__css:f.link,href:u},d))}));a.Ts&&(d.displayName="BreadcrumbLink");var g=(0,n.Gp)((function(e,t){var r=e.isCurrentPage,s=e.separator,m=e.isLastChild,p=e.spacing,g=e.children,x=e.className,E=l(e,u),h=(0,c.WR)(g).map((function(e){return e.type===d?o.cloneElement(e,{isCurrentPage:r}):e.type===f?o.cloneElement(e,{spacing:p,children:e.props.children||s}):e})),C=i({display:"inline-flex",alignItems:"center"},(0,n.yK)().item),b=(0,a.cx)("chakra-breadcrumb__list-item",x);return o.createElement(n.m$.li,i({ref:t,className:b},E,{__css:C}),h,!m&&o.createElement(f,{spacing:p},s))}));a.Ts&&(g.displayName="BreadcrumbItem");var x=(0,n.Gp)((function(e,t){var r=(0,n.jC)("Breadcrumb",e),s=(0,n.Lr)(e),m=s.children,u=s.spacing,f=void 0===u?"0.5rem":u,d=s.separator,g=void 0===d?"/":d,x=s.className,E=l(s,p),h=(0,c.WR)(m),C=h.length,b=h.map((function(e,t){return o.cloneElement(e,{separator:g,spacing:f,isLastChild:C===t+1})})),k=(0,a.cx)("chakra-breadcrumb",x);return o.createElement(n.m$.nav,i({ref:t,"aria-label":"breadcrumb",className:k,__css:r.container},E),o.createElement(n.Fo,{value:r},o.createElement(n.m$.ol,{className:"chakra-breadcrumb__list"},b)))}));a.Ts&&(x.displayName="Breadcrumb")},7252:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(6541),a=r(8262),c=r(7294),o=r(7278),i=r(45),l=r(5444),s=r(6577).E.custom(n.Kq),m=function(e){var t=e.project;return c.createElement(l.Link,{to:t.slug||null,style:{textDecoration:"none",margin:"15px"}},c.createElement(s,{borderRadius:"md",w:["auto","auto","300px"],h:"100%",overflow:"hidden",position:"relative",textAlign:"center",cursor:"pointer",shadow:"md",background:(0,a.ff)("white","#102435"),whileHover:{scale:1.5,zIndex:1,transition:{duration:.4,type:"spring",bounce:.5}}},c.createElement(n.kC,{flexDir:"column",justifyContent:"center",alignItems:"center",margin:"auto"},t.icon?c.createElement(i.Ee,{src:t.icon,alt:t.name,boxSize:"150px",minH:"53px",maxH:"150px",height:"auto",width:"auto",p:"5px"}):c.createElement(n.kC,{flexGrow:1,minH:"80px",justifyContent:"center",alignContent:"center",flexDir:"column"},c.createElement(n.X6,{fontFamily:"FiraCode",fontWeight:"bolder",fontSize:"24px"},t.name)),c.createElement(n.xu,{p:"10px"},c.createElement(n.kC,{flexGrow:1,justifyContent:"space-between",flexDir:"column"},c.createElement(n.xv,{mt:"10px",p:"10px",pb:"25px",zIndex:0},t.short_description),c.createElement(n.kC,{justifyContent:"center",alignItems:"center"},"Clique Para Saber Mais",c.createElement(n.xu,null,c.createElement(o.XC,{boxSize:"32px"}))))))))},u=function(){var e=(0,l.useStaticQuery)("2960885644").allMarkdownRemark.nodes.map((function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,description:e.frontmatter.description,short_description:e.frontmatter.short_description,slug:e.fields.slug,category:e.frontmatter.category,tags:e.frontmatter.tags}}));return c.createElement(c.Fragment,null,e.length>0&&c.createElement(n.kC,{minH:"60vh",alignItems:["center"],flexDirection:["column"]},c.createElement(n.kC,{justifyContent:"center"},c.createElement(o.NW,{boxSize:"42px",color:"#666"})),c.createElement(n.kC,{justifyContent:"center",textTransform:"uppercase",m:"15px",textAlign:"center"},c.createElement(n.xu,null,c.createElement(n.X6,{fontWeight:"light",size:"lg"},c.createElement(n.xv,{as:"span"},"Conheça os"),c.createElement(n.xv,{as:"span",fontWeight:"bold"}," ","Projetos")))),c.createElement(n.kC,{justifyContent:"center"},c.createElement(n.xu,{maxW:"450px",textAlign:"center",colo:!0,color:(0,a.ff)("#666","#CCC"),m:["15px","0"]},c.createElement(n.xv,null,"Conheça meus projetos, que participei e desenvolvi"))),c.createElement(n.kC,{mt:"30px",justifyContent:"center",alignSelf:"center",flexWrap:"wrap",transition:"0.2s",maxW:["100%","1450px"]},e.map((function(e,t){return c.createElement(m,{key:"servico"+t,project:e})})))))}},9441:function(e,t,r){r.r(t);var n=r(7278),a=r(6541),c=r(9535),o=r(5444),i=r(7294),l=r(8271),s=r(5167),m=r(7252);t.default=function(){var e=(0,o.useStaticQuery)("4131231720").allMarkdownRemark.nodes.map((function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,description:e.frontmatter.description,short_description:e.frontmatter.short_description,category:e.frontmatter.category,slug:e.slug}}));return i.createElement(l.Z,{slide:{index:4,name:"projetos"}},i.createElement(s.Z,{title:"Projetos - Jorge.room",description:"Jorge - Conheça os projetos.",lang:"pt-BR"}),i.createElement(a.xu,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},i.createElement(a.kC,{flexDir:"column",mb:"35px"},i.createElement(a.kC,{h:"50px",alignItems:"center"},i.createElement(c.aG,{separator:i.createElement(n.XC,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},i.createElement(c.gN,null,i.createElement(o.Link,{to:"/#"},"Início")),i.createElement(c.gN,{isCurrentPage:!0},i.createElement(o.Link,{to:"/#"},"Projetos"))))),i.createElement(m.Z,{projects:e})))}}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-c86219ff1cd6b50cbb33.js.map