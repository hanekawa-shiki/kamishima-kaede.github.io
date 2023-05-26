import{t as D,u as z,h as B,v as G,x,y as J,z as K,A as N,j as C,k as q,B as T,C as A,n as t,R as j,D as U,E as X,F as Y,G as Z,H as _,I as ee,J as te,s as se,K as ae,L as le,M as re,N as ue,O as oe,P as ne}from"./app-37db6743.js";const ce=()=>{const l=new Worker(`/${D.worker}`,{}),o=[];return l.addEventListener("message",({data:a})=>{const{resolve:p}=o.shift();p(a)}),{search:(a,p,d)=>new Promise((u,h)=>{l.postMessage({query:a,locale:p,options:d}),o.push({resolve:u,reject:h})}),terminate:()=>{l.terminate(),o.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))}}},ie="search-pro-result-history",v=z(ie,[]),ve=()=>{const{resultHistoryCount:l}=D,o=l>0;return{enabled:o,resultHistory:v,addResultHistory:a=>{o&&(v.value.length<l?v.value=[a,...v.value]:v.value=[a,...v.value.slice(0,l-1)])},removeResultHistory:a=>{v.value=[...v.value.slice(0,a),...v.value.slice(a+1)]}}},pe=l=>{const o=te(),a=x(),{search:p,terminate:d}=ce(),u=C(!1),h=se([]),R=oe(y=>{u.value=!0,y?p(y,a.value,o).then(g=>{h.value=g,u.value=!1}):(h.value=[],u.value=!1)},D.delay);return A([l,a],()=>R(l.value),{immediate:!0}),{searching:u,results:h,terminate:d}};var de=B({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(l,{emit:o}){const a=ae(),p=G(),d=x(),u=J(K),{addQueryHistory:h}=le(),{enabled:R,resultHistory:y,addResultHistory:g,removeResultHistory:F}=ve(),$=N(l,"query"),{results:m,searching:I}=pe($),c=C(0),r=C(0),L=q(()=>y.value.length>0),k=q(()=>m.value.length>0),H=q(()=>m.value[c.value]||null),w=e=>{const[s,n]=e.split("#");return p.resolve({name:s,hash:`#${n}`}).href},O=()=>{c.value=c.value>0?c.value-1:m.value.length-1,r.value=H.value.contents.length-1},Q=()=>{c.value=c.value<m.value.length-1?c.value+1:0,r.value=0},M=()=>{r.value<H.value.contents.length-1?r.value=r.value+1:Q()},V=()=>{r.value>0?r.value=r.value-1:O()},E=e=>e.map(s=>ne(s)?s:t(s[0],s[1])),P=e=>{if(e.type==="custom"){const s=re[e.index]||"$content",[n,f=""]=ue(s)?s[d.value].split("$content"):s.split("$content");return E([n,...e.display,f])}return E(e.display)},b=()=>{c.value=0,r.value=0,o("updateQuery",""),o("close")};return T("keydown",e=>{if(k.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const s=H.value.contents[r.value],n=w(s.id);a.value.path!==n&&(h(l.query),g(s),p.push(n),b())}}}),A([c,r],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:$.value?!k.value:!L.value}],id:"search-pro-results"},$.value===""?L.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.history),y.value.map((e,s)=>t(j,{to:w(e.id),class:["search-pro-result-item",{active:r.value===s}],onClick:()=>{b()}},()=>[t(U,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",P(e))]),t("button",{class:"search-pro-close-icon",onClick:n=>{n.preventDefault(),n.stopPropagation(),F(s)}},t(X))]))])):R?u.value.emptyHistory:u.value.emptyResult:I.value?t(Y,{hint:u.value.searching}):k.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const f=c.value===n;return t("li",{class:["search-pro-result-list-item",{active:f}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((i,W)=>{const S=f&&r.value===W;return t(j,{to:w(i.id),class:["search-pro-result-item",{active:S,"aria-selected":S}],onClick:()=>{h(l.query),g(i),b()}},()=>[i.type==="content"?null:t(i.type==="title"?Z:i.type==="heading"?_:ee,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="content"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",P(i))])])})])})):u.value.emptyResult)}});export{de as default};
