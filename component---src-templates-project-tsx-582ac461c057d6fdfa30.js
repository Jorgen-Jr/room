"use strict";(self.webpackChunkjorge_room=self.webpackChunkjorge_room||[]).push([[142],{5118:function(e,t,r){r.d(t,{At:function(){return g},gN:function(){return x},aG:function(){return E}});var a=r(2543),n=r(9735),o=r(9265),l=r(3888),c=r(7487),m=r(4667),i=r(5587),s=r(2299),u=r(7294);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var d=(0,a.G)((function(e,t){var r=e.spacing,a=f(e,["spacing"]),l=p({mx:r},(0,n.yK)().separator);return u.createElement(o.m$.span,p({ref:t,role:"presentation"},a,{__css:l}))}));m.Ts&&(d.displayName="BreadcrumbSeparator");var g=(0,a.G)((function(e,t){var r=e.isCurrentPage,a=e.as,l=e.className,c=f(e,["isCurrentPage","as","className"]),m=(0,n.yK)(),s=p({ref:t,as:a,className:(0,i.cx)("chakra-breadcrumb__link",l)},c);return r?u.createElement(o.m$.span,p({"aria-current":"page",__css:m.link},s)):u.createElement(o.m$.a,p({__css:m.link},s))}));m.Ts&&(g.displayName="BreadcrumbLink");var x=(0,a.G)((function(e,t){var r=e.isCurrentPage,a=e.separator,l=e.isLastChild,c=e.spacing,m=e.children,x=e.className,E=f(e,["isCurrentPage","separator","isLastChild","spacing","children","className"]),b=(0,s.W)(m).map((function(e){return e.type===g?u.cloneElement(e,{isCurrentPage:r}):e.type===d?u.cloneElement(e,{spacing:c,children:e.props.children||a}):e})),h=p({display:"inline-flex",alignItems:"center"},(0,n.yK)().item),y=(0,i.cx)("chakra-breadcrumb__list-item",x);return u.createElement(o.m$.li,p({ref:t,className:y},E,{__css:h}),b,!l&&u.createElement(d,{spacing:c},a))}));m.Ts&&(x.displayName="BreadcrumbItem");var E=(0,a.G)((function(e,t){var r=(0,l.j)("Breadcrumb",e),a=(0,c.Lr)(e),m=a.children,d=a.spacing,g=void 0===d?"0.5rem":d,x=a.separator,E=void 0===x?"/":x,b=a.className,h=f(a,["children","spacing","separator","className"]),y=(0,s.W)(m),C=y.length,k=y.map((function(e,t){return u.cloneElement(e,{separator:E,spacing:g,isLastChild:C===t+1})})),_=(0,i.cx)("chakra-breadcrumb",b);return u.createElement(o.m$.nav,p({ref:t,"aria-label":"breadcrumb",className:_,__css:r.container},h),u.createElement(n.Fo,{value:r},u.createElement(o.m$.ol,{className:"chakra-breadcrumb__list"},k)))}));m.Ts&&(E.displayName="Breadcrumb")},2274:function(e,t,r){r.r(t);var a=r(9063),n=r(7690),o=r(7361),l=r(5118),c=r(1531),m=r(2331),i=r(2200),s=r(9537),u=r(5230),p=r(5444),f=r(7294),d=r(8774),g=r(5167);t.default=function(e){var t=e.data.markdownRemark,r={colors:{primary:t.frontmatter.theme_color_primary||"#db98b5",secondary:t.frontmatter.theme_color_secondary||"#36557b",fontColor:t.frontmatter.theme_color_fontcolor||"#053a63"}};return f.createElement(d.Z,{slide:-1},f.createElement(g.Z,{title:t.frontmatter.name,description:"Jorge's Room - "+t.frontmatter.short_description,image:t.frontmatter.illustration}),f.createElement(n.xu,{className:"wrapper",mt:"80px",mb:"80px",p:["0 10px","0 30px","0 100px"]},f.createElement(o.k,{flexDir:"column",mb:"35px"},f.createElement(o.k,{h:"50px",alignItems:"center"},f.createElement(l.aG,{separator:f.createElement(a.X,{color:"gray.500"}),fontWeight:"medium",fontSize:"md"},f.createElement(l.gN,null,f.createElement(p.Link,{to:"/#"},"Início")),f.createElement(l.gN,null,f.createElement(p.Link,{to:"/#projetos"},"Projetos")),f.createElement(l.gN,{isCurrentPage:!0},f.createElement(l.At,{href:"#"},t.frontmatter.name)))),f.createElement(o.k,{flexDir:"column",position:"relative",w:"100%",height:"auto",justifyContent:"center",alignItems:"center",p:"30px",color:"#EEE"},f.createElement(n.xu,{backgroundColor:"#000",backgroundImage:"linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",position:"absolute",h:"100%",w:"200%",left:-100,bottom:0,zIndex:-1,opacity:.9,overflow:"hidden"},t.frontmatter.cover?f.createElement(f.Fragment,null,f.createElement(n.xu,{position:"absolute",background:"linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )",w:"100%",h:"100%",top:0,left:0}),f.createElement(c.E,{src:t.frontmatter.cover,alt:"Capa do project "+t.frontmatter.name,objectFit:"cover",boxSize:"100%"})):f.createElement(n.xu,{boxSize:"100%",bgColor:t.frontmatter.theme_color_primary}," ")),f.createElement(o.k,{justifyContent:"center"},t.frontmatter.icon?f.createElement(c.E,{alt:t.frontmatter.name,src:t.frontmatter.icon,maxH:"90px",objectFit:"contain"}):f.createElement(o.k,{flexGrow:1,minH:"80px",justifyContent:"center",alignContent:"center",flexDir:"column"},f.createElement(m.X,{fontFamily:"FiraCode",fontWeight:"bolder",fontSize:"32px"},t.frontmatter.name))),f.createElement(o.k,{justifyContent:"center",mt:"15px"},f.createElement(n.xu,{maxW:"450px",textAlign:"center",color:"#CCC"},f.createElement(i.x,null,t.frontmatter.category))),f.createElement(o.k,{m:"10px 0",flexDir:"column",justifyContent:"center",alignItems:"center",pos:"relative"},f.createElement(s.aV,{display:"flex",flexWrap:"wrap",justifyContent:"center/"},t.frontmatter.tags.map((function(e,t){return f.createElement(s.HC,{key:t,p:"10px 15px ",m:"3px 7px",borderRadius:"7px",backgroundColor:"#333",color:"white",fontWeight:"bolder"},console.log(e),e)})))))),f.createElement(o.k,{flexDir:["column"]},f.createElement("section",{title:"Cabeçalho "},f.createElement(o.k,{justifyContent:"center"},t.frontmatter.illustration&&f.createElement(c.E,{alt:"Illustração do project "+t.frontmatter.name,src:t.frontmatter.illustration,maxH:"500px"})),f.createElement(o.k,{justifyContent:"center",wrap:"wrap",alignItems:"baseline"})),f.createElement(o.k,{m:"10px 0",flexDir:"column",justifyContent:"center",alignItems:"center",pos:"relative"},f.createElement(n.xu,{color:(0,u.useColorModeValue)(r.colors.fontColor,"#ddd"),p:"20px",borderRadius:"lg",maxWidth:"1000px",className:"post-content-full",dangerouslySetInnerHTML:{__html:t.html}})))))}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-582ac461c057d6fdfa30.js.map