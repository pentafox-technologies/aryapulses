"use strict";(self.webpackChunkarya_pulses_website=self.webpackChunkarya_pulses_website||[]).push([[704],{2850:function(t,e,r){r.d(e,{x:function(){return N}});var p=r(7294),n=r(8427),i=r(2756),o=r(8752),a=r(698),s=r(58),y=r(4258);function c({value:t,theme:e,getValue:r,property:p}){if(null==t)return;if("object"==typeof t){const n=function(t,e){const r=Object.keys(t).filter((t=>"base"!==t)).sort(((t,r)=>(0,s.oI)((0,y.a)({size:t,sizes:e.breakpoints}))-(0,s.oI)((0,y.a)({size:r,sizes:e.breakpoints}))));return"base"in t?["base",...r]:r}(t,e).reduce(((n,i)=>{if("base"===i&&void 0!==t.base){const i=r(t.base,e);return Array.isArray(p)?(p.forEach((t=>{n[t]=i})),n):(n[p]=i,n)}const o=r(t[i],e);return Array.isArray(p)?(n[e.fn.largerThan(i)]={},p.forEach((t=>{n[e.fn.largerThan(i)][t]=o})),n):(n[e.fn.largerThan(i)]={[p]:o},n)}),{});return n}const n=r(t,e);return Array.isArray(p)?p.reduce(((t,e)=>(t[e]=n,t)),{}):{[p]:n}}var l=r(6768);const f=["-xs","-sm","-md","-lg","-xl"];const m={identity:function(t){return t},color:function(t,e){return"dimmed"===t?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:e.fn.variant({variant:"filled",color:t,primaryFallback:!1}).background},size:function(t){return(0,l.h)(t)},fontSize:function(t,e){return(0,y.a)({size:t,sizes:e.fontSizes})},spacing:function(t,e){return f.includes(t)?`calc(${(0,y.a)({size:t.replace("-",""),sizes:e.spacing})} * -1)`:(0,y.a)({size:t,sizes:e.spacing})}},g={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"identity",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"identity",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"}};var u=Object.defineProperty,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,z=(t,e,r)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))b.call(e,r)&&z(t,r,e[r]);if(d)for(var r of d(e))h.call(e,r)&&z(t,r,e[r]);return t};function w(t,e,r=g){return Object.keys(r).reduce(((p,n)=>(n in t&&void 0!==t[n]&&p.push(c({value:t[n],getValue:m[r[n].type],property:r[n].property,theme:e})),p)),[]).reduce(((t,e)=>(Object.keys(e).forEach((r=>{"object"==typeof e[r]&&null!==e[r]?t[r]=r in t?v(v({},t[r]),e[r]):e[r]:t[r]=e[r]})),t)),{})}function x(t,e){return"function"==typeof t?t(e):t}function O(t,e,r){const p=(0,o.rZ)(),{css:n,cx:i}=(0,a.Z)();return Array.isArray(t)?i(r,n(w(e,p)),t.map((t=>n(x(t,p))))):i(r,n(x(t,p)),n(w(e,p)))}var j=Object.defineProperty,k=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,A=(t,e,r)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;const E=(0,p.forwardRef)(((t,e)=>{var r=t,{className:n,component:o,style:a,sx:s}=r,y=((t,e)=>{var r={};for(var p in t)S.call(t,p)&&e.indexOf(p)<0&&(r[p]=t[p]);if(null!=t&&k)for(var p of k(t))e.indexOf(p)<0&&P.call(t,p)&&(r[p]=t[p]);return r})(r,["className","component","style","sx"]);const{systemStyles:c,rest:l}=(0,i.x)(y),f=o||"div";return p.createElement(f,((t,e)=>{for(var r in e||(e={}))S.call(e,r)&&A(t,r,e[r]);if(k)for(var r of k(e))P.call(e,r)&&A(t,r,e[r]);return t})({ref:e,className:O(s,c,n),style:a},l))}));E.displayName="@mantine/core/Box";const N=(0,n.F)(E)},2756:function(t,e,r){r.d(e,{x:function(){return s}});var p=r(6896),n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,e)=>{var r={};for(var p in t)i.call(t,p)&&e.indexOf(p)<0&&(r[p]=t[p]);if(null!=t&&n)for(var p of n(t))e.indexOf(p)<0&&o.call(t,p)&&(r[p]=t[p]);return r};function s(t){const e=t,{m:r,mx:n,my:i,mt:o,mb:s,ml:y,mr:c,p:l,px:f,py:m,pt:g,pb:u,pl:d,pr:b,bg:h,c:z,opacity:v,ff:w,fz:x,fw:O,lts:j,ta:k,lh:S,fs:P,tt:A,td:E,w:N,miw:R,maw:T,h:L,mih:I,mah:B,bgsz:C,bgp:W,bgr:F,bga:_,pos:H,top:V,left:Z,bottom:D,right:$,inset:q,display:G}=e,J=a(e,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]);return{systemStyles:(0,p.L)({m:r,mx:n,my:i,mt:o,mb:s,ml:y,mr:c,p:l,px:f,py:m,pt:g,pb:u,pl:d,pr:b,bg:h,c:z,opacity:v,ff:w,fz:x,fw:O,lts:j,ta:k,lh:S,fs:P,tt:A,td:E,w:N,miw:R,maw:T,h:L,mih:I,mah:B,bgsz:C,bgp:W,bgr:F,bga:_,pos:H,top:V,left:Z,bottom:D,right:$,inset:q,display:G}),rest:J}}},9724:function(t,e,r){r.d(e,{W:function(){return d}});var p=r(7294),n=r(6768),i=r(8752),o=r(47),a=r(4258),s=(0,o.k)(((t,{fluid:e,sizes:r},{size:p})=>({root:{paddingLeft:t.spacing.md,paddingRight:t.spacing.md,maxWidth:e?"100%":(0,a.a)({size:p,sizes:r}),marginLeft:"auto",marginRight:"auto"}}))),y=r(2850),c=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(t,e,r)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;const u={sizes:{xs:(0,n.h)(540),sm:(0,n.h)(720),md:(0,n.h)(960),lg:(0,n.h)(1140),xl:(0,n.h)(1320)}},d=(0,p.forwardRef)(((t,e)=>{const r=(0,i.N4)("Container",u,t),{className:n,fluid:o,size:a,unstyled:c,sizes:d,variant:b}=r,h=((t,e)=>{var r={};for(var p in t)f.call(t,p)&&e.indexOf(p)<0&&(r[p]=t[p]);if(null!=t&&l)for(var p of l(t))e.indexOf(p)<0&&m.call(t,p)&&(r[p]=t[p]);return r})(r,["className","fluid","size","unstyled","sizes","variant"]),{classes:z,cx:v}=s({fluid:o,sizes:d},{unstyled:c,name:"Container",variant:b,size:a});return p.createElement(y.x,((t,e)=>{for(var r in e||(e={}))f.call(e,r)&&g(t,r,e[r]);if(l)for(var r of l(e))m.call(e,r)&&g(t,r,e[r]);return t})({className:v(z.root,n),ref:e},h))}));d.displayName="@mantine/core/Container"},8427:function(t,e,r){function p(t){return t}r.d(e,{F:function(){return p}})}}]);
//# sourceMappingURL=component---src-pages-sections-what-we-do-js-bd931068c2fd1efa526c.js.map