"use strict";(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[41,54],{152:function(e,t,r){r.d(t,{J5:function(){return g},Qp:function(){return E},w1:function(){return f}});var a=r(865),n=r(9256),l=r(7766),c=r(6540);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var i=["spacing"],m=["isCurrentPage","as","className","href"],u=["isCurrentPage","separator","isLastChild","spacing","children","className"],p=["children","spacing","separator","className"],d=(0,a.Rf)((function(e,t){var r=e.spacing,n=o(e,i),l=s({mx:r},(0,a.IS)().separator);return c.createElement(a.Bv.span,s({ref:t,role:"presentation"},n,{__css:l}))}));n.gt&&(d.displayName="BreadcrumbSeparator");var f=(0,a.Rf)((function(e,t){var r=e.isCurrentPage,l=e.as,i=e.className,u=e.href,p=o(e,m),d=(0,a.IS)(),f=s({ref:t,as:l,className:(0,n.cx)("chakra-breadcrumb__link",i)},p);return r?c.createElement(a.Bv.span,s({"aria-current":"page",__css:d.link},f)):c.createElement(a.Bv.a,s({__css:d.link,href:u},f))}));n.gt&&(f.displayName="BreadcrumbLink");var g=(0,a.Rf)((function(e,t){var r=e.isCurrentPage,i=e.separator,m=e.isLastChild,p=e.spacing,g=e.children,E=e.className,h=o(e,u),x=(0,l.ag)(g).map((function(e){return e.type===f?c.cloneElement(e,{isCurrentPage:r}):e.type===d?c.cloneElement(e,{spacing:p,children:e.props.children||i}):e})),v=s({display:"inline-flex",alignItems:"center"},(0,a.IS)().item),b=(0,n.cx)("chakra-breadcrumb__list-item",E);return c.createElement(a.Bv.li,s({ref:t,className:b},h,{__css:v}),x,!m&&c.createElement(d,{spacing:p},i))}));n.gt&&(g.displayName="BreadcrumbItem");var E=(0,a.Rf)((function(e,t){var r=(0,a.o5)("Breadcrumb",e),i=(0,a.MN)(e),m=i.children,u=i.spacing,d=void 0===u?"0.5rem":u,f=i.separator,g=void 0===f?"/":f,E=i.className,h=o(i,p),x=(0,l.ag)(m),v=x.length,b=x.map((function(e,t){return c.cloneElement(e,{separator:g,spacing:d,isLastChild:v===t+1})})),C=(0,n.cx)("chakra-breadcrumb",E);return c.createElement(a.Bv.nav,s({ref:t,"aria-label":"breadcrumb",className:C,__css:r.container},h),c.createElement(a.W$,{value:r},c.createElement(a.Bv.ol,{className:"chakra-breadcrumb__list"},b)))}));n.gt&&(E.displayName="Breadcrumb")},5870:function(e,t,r){r.r(t),r.d(t,{PostCard:function(){return o}});var a=r(676),n=r(2336),l=r(2950),c=r(1015),s=r(6540);const o=e=>{let{post:t,fullWidth:r}=e;const o=null==t?void 0:t.special;return s.createElement(s.Fragment,null,t?s.createElement(a.BJ,{borderRadius:"5px",w:o||r?"100%":["100%","100%","100%","29%"],m:"20px",overflow:"hidden",background:o&&t.isBanner?"unset":(0,n.dU)("white","#102435"),position:"relative",direction:r?["column","column","row","row"]:"column",justifyContent:o?"center":"auto",shadow:o?"none":"xl"},s.createElement(a.az,{maxHeight:r?["100%","100%","250px","250px"]:"unset",maxWidth:r?["100%","100%","400px","500px","500px"]:"unset"},s.createElement(c.Link,{to:t.slug},s.createElement(l._V,{src:t.cover,alt:t.title,loading:t.isBanner?"eager":"lazy",style:{marginTop:"-25%",width:"100%"},borderRadius:o?"7px":"unset",shadow:o?"md":"none"}))),s.createElement(c.Link,{to:t.slug},s.createElement(a.az,Object.assign({},t.isBanner?{display:"none"}:null,{p:"10px 20px"}),s.createElement(a.EY,{as:"span",fontSize:"12px",color:(0,n.dU)("#666","#CCC"),fontWeight:"bolder"},`${t.category.toUpperCase()}`)," • ",s.createElement(a.EY,{as:"span",fontSize:"12px",color:(0,n.dU)("#666","#CCC")},`${t.post_date}`),s.createElement(a.DZ,{fontSize:"25px"},t.title),s.createElement(a.so,{flexGrow:1,justifyContent:"space-between",flexDir:"row"},s.createElement(a.az,{mt:"10px",pb:"25px",color:(0,n.dU)("#666","#CCC"),zIndex:0},s.createElement("div",{className:"aviso-content-list",dangerouslySetInnerHTML:{__html:t.content}})," ",s.createElement(a.EY,{style:{color:(0,n.dU)("darkblue","lightblue")}},"ler mais")))))):null)};t.default=o},4902:function(e,t,r){r.r(t);var a=r(3556),n=r(676),l=r(152),c=r(1015),s=r(6540),o=r(5870),i=r(2751),m=r(9956);t.default=function(){const{allMarkdownRemark:e}=(0,c.useStaticQuery)("3465711192"),t=e.nodes.map((e=>({post_date:e.frontmatter.date,slug:e.fields.slug,title:e.frontmatter.title,cover:e.frontmatter.cover,content:e.html,isBanner:e.frontmatter.isBanner,special:e.frontmatter.special,category:e.frontmatter.category})));return s.createElement(i.A,{slide:{index:-1,name:"room"}},s.createElement(m.A,{title:"Blog",description:"Jorge - Feed de blog posts e comunicados.",lang:"pt-BR"}),s.createElement(n.az,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},s.createElement(n.so,{flexDir:"column",mb:"35px"},s.createElement(n.so,{h:"50px",alignItems:"center"},s.createElement(l.Qp,{separator:s.createElement(a.vK,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},s.createElement(l.J5,null,s.createElement(c.Link,{to:"/#"},"Início")),s.createElement(l.J5,{isCurrentPage:!0},s.createElement(l.w1,null,"Posts"))))),s.createElement(n.so,{justifyContent:"center",alignSelf:"center",flexDir:"column"},t.map(((e,t)=>s.createElement(o.PostCard,{fullWidth:0===t,key:"aviso"+t,post:e}))))))}}}]);
//# sourceMappingURL=component---src-pages-posts-feed-tsx-678c26fe3567479d8da3.js.map