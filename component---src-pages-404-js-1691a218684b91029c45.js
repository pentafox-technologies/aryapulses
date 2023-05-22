"use strict";(self.webpackChunkarya_pulses_website=self.webpackChunkarya_pulses_website||[]).push([[883],{8136:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return L}});var r=n(7294),a=n(8163),i=n(9357),o=n(47),l=n(6768),s=n(9724),c=n(8752),p=Object.defineProperty,f=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&h(e,n,t[n]);return e};function y(e,t,n){return void 0!==e?e in n.headings.sizes?n.headings.sizes[e].fontSize:(0,l.h)(e):n.headings.sizes[t].fontSize}function v(e,t,n){return void 0!==e&&e in n.headings.sizes?n.headings.sizes[e].lineHeight:n.headings.sizes[t].lineHeight}var w=(0,o.k)(((e,{element:t,weight:n,inline:r},{size:a})=>{return{root:(i=b({},e.fn.fontStyles()),o={fontFamily:e.headings.fontFamily,fontWeight:n||e.headings.sizes[t].fontWeight||e.headings.fontWeight,fontSize:y(a,t,e),lineHeight:r?1:v(a,t,e),margin:0},f(i,g(o)))};var i,o})),z=n(5918),O=Object.defineProperty,x=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const j={order:1},k=(0,r.forwardRef)(((e,t)=>{const n=(0,c.N4)("Title",j,e),{className:a,order:i,children:o,unstyled:l,size:s,weight:p,inline:f,variant:g}=n,d=((e,t)=>{var n={};for(var r in e)N.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&E.call(e,r)&&(n[r]=e[r]);return n})(n,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:u,cx:m}=w({element:`h${i}`,weight:p,inline:f},{name:"Title",unstyled:l,variant:g,size:s});return[1,2,3,4,5,6].includes(i)?r.createElement(z.x,((e,t)=>{for(var n in t||(t={}))N.call(t,n)&&S(e,n,t[n]);if(x)for(var n of x(t))E.call(t,n)&&S(e,n,t[n]);return e})({variant:g,component:`h${i}`,ref:t,className:m(u.root,a)},d),o):null}));k.displayName="@mantine/core/Title";var W=n(4258);const P={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var T=(0,o.k)(((e,{spacing:t,position:n,noWrap:r,grow:a,align:i,count:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:i||"center",flexWrap:r?"nowrap":"wrap",justifyContent:P[n],gap:(0,W.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:a?`calc(${100/o}% - (${(0,l.h)((0,W.a)({size:t,sizes:e.spacing}))} - ${(0,W.a)({size:t,sizes:e.spacing})} / ${o}))`:void 0,flexGrow:a?1:0}}}))),C=n(2850),D=Object.defineProperty,R=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const $={position:"left",spacing:"md"},H=(0,r.forwardRef)(((e,t)=>{const n=(0,c.N4)("Group",$,e),{className:a,position:i,align:o,children:l,noWrap:s,grow:p,spacing:f,unstyled:g,variant:d}=n,u=((e,t)=>{var n={};for(var r in e)A.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&R)for(var r of R(e))t.indexOf(r)<0&&F.call(e,r)&&(n[r]=e[r]);return n})(n,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),m=function(e){return r.Children.toArray(e).filter(Boolean)}(l),{classes:h,cx:b}=T({align:o,grow:p,noWrap:s,spacing:f,position:i,count:m.length},{unstyled:g,name:"Group",variant:d});return r.createElement(C.x,((e,t)=>{for(var n in t||(t={}))A.call(t,n)&&I(e,n,t[n]);if(R)for(var n of R(t))F.call(t,n)&&I(e,n,t[n]);return e})({className:b(h.root,a),ref:t},u),m)}));H.displayName="@mantine/core/Group";var Y=n(2691),B=n(7980),G=n(1883);const M=(0,o.k)((e=>({root:{paddingTop:(0,l.h)(80),paddingBottom:(0,l.h)(80)},label:{textAlign:"center",fontWeight:900,fontSize:(0,l.h)(220),lineHeight:1,marginBottom:"calc("+e.spacing.xl+" * 1.5)",color:B.DM.SECONDARY(),[e.fn.smallerThan("sm")]:{fontSize:(0,l.h)(120)}},title:{...B.g5.TITLE,textAlign:"center",fontWeight:900,fontSize:(0,l.h)(38),[e.fn.smallerThan("sm")]:{fontSize:(0,l.h)(32)}},description:{maxWidth:(0,l.h)(500),margin:"auto",marginTop:e.spacing.xl,marginBottom:"calc("+e.spacing.xl+" * 1.5)"},button:{color:B.DM.PRIMARY(),":hover":{backgroundColor:B.DM.SECONDARY()}}}))),_=()=>r.createElement(i.Z,{title:"404: Not Found"});var L=()=>{const{classes:e}=M();return r.createElement(a.Z,{headerStyle:{backgroundColor:"#FFF"},showLinks:!1},r.createElement(s.W,{className:e.root},r.createElement("div",{className:e.label},"404"),r.createElement(k,{className:e.title},"You have found a secret place."),r.createElement(z.x,{color:"dimmed",size:"lg",align:"center",className:e.description},"Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."),r.createElement(H,{position:"center"},r.createElement(Y.z,{variant:"subtle",size:"md",className:e.button,onClick:()=>(0,G.navigate)("/")},"Take me back to home page"))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-1691a218684b91029c45.js.map