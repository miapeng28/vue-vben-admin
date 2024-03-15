var Wt=Object.defineProperty,qt=Object.defineProperties;var Jt=Object.getOwnPropertyDescriptors;var tt=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable;var nt=(n,o,t)=>o in n?Wt(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,K=(n,o)=>{for(var t in o||(o={}))Vt.call(o,t)&&nt(n,t,o[t]);if(tt)for(var t of tt(o))Yt.call(o,t)&&nt(n,t,o[t]);return n},re=(n,o)=>qt(n,Jt(o));var ne=(n,o,t)=>new Promise((c,l)=>{var i=r=>{try{u(t.next(r))}catch(s){l(s)}},f=r=>{try{u(t.throw(r))}catch(s){l(s)}},u=r=>r.done?c(r.value):Promise.resolve(r.value).then(i,f);u((t=t.apply(n,o)).next())});import{d as oe,Z as A,_ as de,ae as we,G as ue,a0 as U,k as T,u as e,c as I,f as z,w as ye,J as Ce,l as qe,r as gt,h as Je,o as Ve,y as Ie,ao as Zt,K as mt,a7 as pt,a8 as G,a9 as x,$ as fe,a1 as Se,ab as V,F as Qt,aa as Ge,m as Ct,A as vt,ah as Xt,e as en,ad as at,aj as He,ak as Ne,ac as ot}from"./vue-COhTiP8A.js";import{_ as tn}from"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import{P as Ye,b as nn,D as an,I as ke,A as ze,R as ge,F as on,u as Fe,d as ln}from"./componentMap-xQ68uHIf.js";import{u as sn}from"./useForm-B5BTWHx4.js";import{a1 as lt,f as Ke,h as Re,H as Me,Q as cn,a2 as rn,D as un,G as fn,a3 as dn,Z as hn,y as st,a4 as wt,a5 as gn,V as mn,c as pn,r as je,E as Cn,P as vn,U as wn}from"./entry/index-BS_vH3S4-1710492679851.js";import{aI as Sn,ah as me,aJ as yn,aK as bn,f as pe,e as Y,l as Ze,a as _n,aL as xn,aM as Rn,ad as ct,o as Qe,aH as Tn,a3 as Oe,aN as In,T as Te,a4 as St,aO as kn,d as it,D as Fn,x as Le,aP as Kn,aQ as Pn,aD as Dn,aC as An,as as $n,aR as yt}from"./antd-D1Pawy5U.js";import{a as En,p as ae,b as We,u as bt,c as On,d as Bn}from"./TableImg.vue_vue_type_style_index_0_lang-DYrUgwcl.js";import{b as rt}from"./uuid-D0SLUWHI.js";import Hn from"./sortable.esm-CoO8jRpa.js";const Nn={class:"edit-header-cell"},ut=oe({name:"EditTableHeaderIcon",__name:"EditTableHeaderIcon",props:{title:{type:String,default:""}},setup(n){return(o,t)=>(A(),de("span",Nn,[we(o.$slots,"default"),ue(" "+U(n.title)+" ",1),T(e(Sn))]))}}),Ln=oe({name:"TableHeaderCell",components:{EditTableHeaderCell:ut,BasicHelp:lt},props:{column:{type:Object,default:()=>({})}},setup(n){const{prefixCls:o}=Ke("basic-table-header-cell"),t=I(()=>{var i;return!!((i=n.column)!=null&&i.edit)}),c=I(()=>{var f;const i=n.column;return typeof i.customHeaderRender=="function"?i.customHeaderRender(i):(i==null?void 0:i.customTitle)||((f=n.column)==null?void 0:f.title)}),l=I(()=>{var i;return(i=n.column)==null?void 0:i.helpMessage});return()=>T("div",null,[t.value?T(ut,null,{default:()=>[c.value]}):T("span",{class:"default-header-cell"},[c.value]),l.value&&T(lt,{text:l.value,class:`${o}__help`},null)])}});function Mn({page:n,type:o,originalElement:t}){return o==="prev"?n===0?null:T(yn,null,null):o==="next"?n===1?null:T(bn,null,null):t}function zn(n){const{t:o}=Re(),t=z({}),c=z(!0);ye(()=>e(n).pagination,s=>{!me(s)&&s&&(t.value=K(K({},e(t)),s!=null?s:{}))});const l=I(()=>{const{pagination:s}=e(n);return!e(c)||me(s)&&!s?!1:K(K({current:1,size:"small",defaultPageSize:Ye,showTotal:w=>o("component.table.total",{total:w}),showSizeChanger:!0,pageSizeOptions:nn,itemRender:Mn,showQuickJumper:!0},me(s)?{}:s),e(t))});function i(s){const w=e(l);t.value=K(K({},me(w)?{}:w),s)}function f(){return e(l)}function u(){return e(c)}function r(s){return ne(this,null,function*(){c.value=s})}return{getPagination:f,getPaginationInfo:l,setShowPagination:r,getShowPagination:u,setPagination:i}}function Un(n){return({text:o,record:t,index:c})=>(Ce(t).onValid=()=>ne(this,null,function*(){if(Me(t==null?void 0:t.validCbs)){const l=((t==null?void 0:t.validCbs)||[]).map(f=>f());return(yield Promise.all(l)).every(f=>!!f)}else return!1}),Ce(t).onEdit=(l,i=!1)=>ne(this,null,function*(){var f,u;return i||(t.editable=l),!l&&i?(yield t.onValid())&&(yield(f=t.onSubmitEdit)==null?void 0:f.call(t))?(t.editable=!1,!0):!1:(!l&&!i&&((u=t.onCancelEdit)==null||u.call(t)),!0)}),qe(En,{value:o,record:t,column:n,index:c}))}function _t(n,o){const{key:t,dataIndex:c,children:l}=n;n.align=n.align||an,o&&(t||(n.key=typeof c=="object"?c.join("-"):c),me(n.ellipsis)||Object.assign(n,{ellipsis:o})),l&&l.length&&xt(l,!!o)}function xt(n,o){n&&n.forEach(t=>{const{children:c}=t;_t(t,o),xt(c,o)})}function jn(n,o,t){const{t:c}=Re(),{showIndexColumn:l,indexColumnProps:i,isTreeTable:f}=e(n);let u=!1;if(e(f)||(t.forEach(()=>{const s=t.findIndex(w=>w.flag===ke);l?u=s===-1:!l&&s!==-1&&t.splice(s,1)}),!u))return;const r=t.some(s=>s.fixed==="left");t.unshift(K(K({flag:ke,width:60,title:c("component.table.index"),align:"center",customRender:({index:s})=>{const w=e(o);if(me(w))return`${s+1}`;const{current:P=1,pageSize:O=Ye}=w;return((P<1?1:P)-1)*O+s+1}},r?{fixed:"left"}:{}),i))}function Gn(n,o){const{actionColumn:t}=e(n);if(!t)return;const c=o.findIndex(l=>l.flag===ze);c===-1&&o.push(re(K(re(K({},o[c]),{fixed:"right"}),t),{flag:ze}))}function Wn(n,o){const t=z(e(n).columns);let c=e(n).columns;const l=I(()=>{const p=pe(e(t));if(jn(n,o,p),Gn(n,p),!p)return[];const{ellipsis:a}=e(n);return p.forEach(g=>{const{customRender:C,slots:v}=g;_t(g,Reflect.has(g,"ellipsis")?!!g.ellipsis:!!a&&!C&&!v)}),p});function i(p){const a=p.ifShow;let g=!0;return me(a)&&(g=a),Y(a)&&(g=a(p)),g}const{hasPermission:f}=cn(),u=I(()=>{const p=ft(e(l)),a=C=>{const{slots:v,customRender:y,format:R,edit:k,editRow:$,flag:N}=C;(!v||!(v!=null&&v.title))&&(C.customTitle=C.title);const q=[ke,ze].includes(N);return!y&&R&&!k&&!q&&(C.customRender=({text:le,record:m,index:b})=>qn(le,R,m,b)),(k||$)&&!q&&(C.customRender=Un(C)),gt(C)};return pe(p).filter(C=>f(C.auth)&&i(C)).map(C=>{var v;return(v=C.children)!=null&&v.length&&(C.children=C.children.map(a)),a(C)})});ye(()=>e(n).columns,p=>{var a;t.value=p,c=(a=p==null?void 0:p.filter(g=>!g.flag))!=null?a:[]});function r(p,a){!p||!a||c.forEach(g=>{if(g.dataIndex===p){Object.assign(g,a);return}})}function s(p){const a=pe(p);if(!Me(a))return;if(a.length<=0){t.value=[];return}const g=a[0],C=c.map(v=>v.dataIndex);if(!Ze(g)&&!Me(g))t.value=a;else{const v=a.map(R=>R.toString()),y=[];c.forEach(R=>{var k;y.push(re(K({},R),{defaultHidden:!v.includes(((k=R.dataIndex)==null?void 0:k.toString())||R.key)}))}),_n(C,a)||y.sort((R,k)=>{var $,N;return v.indexOf(($=R.dataIndex)==null?void 0:$.toString())-v.indexOf((N=k.dataIndex)==null?void 0:N.toString())}),t.value=y}}function w(p){const{ignoreIndex:a,ignoreAction:g,sort:C}=p||{};let v=Ce(e(l));return a&&(v=v.filter(y=>y.flag!==ke)),g&&(v=v.filter(y=>y.flag!==ze)),C&&(v=ft(v)),v}function P(){return c}function O(p){Me(p)&&(c=p.filter(a=>!a.flag))}function _(p,a){a.width=p}return{getColumnsRef:l,getCacheColumns:P,getColumns:w,setColumns:s,setColumnWidth:_,getViewColumns:u,setCacheColumnsByField:r,setCacheColumns:O}}function ft(n){const o=[],t=[],c=[];for(const u of n){if(u.fixed==="left"){o.push(u);continue}if(u.fixed==="right"){t.push(u);continue}c.push(u)}const l=u=>!u.defaultHidden,i=[...o,...c,...t].filter(l),f=[...i];for(;f.length;){const u=f[0];Array.isArray(u.children)?(u.children=u.children.filter(l),f.shift(),f.unshift(...u.children)):f.shift()}return i}function qn(n,o,t,c){if(!o)return n;if(Y(o))return o(n,t,c);try{const l="date|";if(Ze(o)&&o.startsWith(l)&&n){const i=o.replace(l,"");return i?rn(n,i):n}if(xn(o))return o.get(n)}catch(l){return n}}function Jn(n,{getPaginationInfo:o,setPagination:t,setLoading:c,getFieldsValue:l,clearSelectedRowKeys:i,tableData:f},u){const r=gt({sortInfo:{},filterInfo:{}}),s=z([]),w=z({});Je(()=>{f.value=e(s)}),ye(()=>e(n).dataSource,()=>{const{dataSource:m,api:b}=e(n);!b&&m&&(s.value=m)},{immediate:!0});function P(m,b,E){const{clearSelectOnPageChange:B,sortFn:H,filterFn:J}=e(n);B&&i(),t(m);const L={};if(E&&Y(H)){const j=H(E);r.sortInfo=j,L.sortInfo=j}if(b&&Y(J)){const j=J(b);r.filterInfo=j,L.filterInfo=j}k(L)}function O(m){!m||!Array.isArray(m)||m.forEach(b=>{b[ge]||(b[ge]=rt()),b.children&&b.children.length&&O(b.children)})}const _=I(()=>e(n).autoCreateKey&&!e(n).rowKey),p=I(()=>{const{rowKey:m}=e(n);return e(_)?ge:m}),a=I(()=>{const m=e(s);if(!m||m.length===0)return e(s);if(e(_)){const b=m[0],E=m[m.length-1];if(b&&E&&(!b[ge]||!E[ge])){const B=pe(e(s));B.forEach(H=>{H[ge]||(H[ge]=rt()),H.children&&H.children.length&&O(H.children)}),s.value=B}}return e(s)});function g(m,b,E){return ne(this,null,function*(){return s.value[m]&&(s.value[m][b]=E),s.value[m]})}function C(m,b){const E=R(m);if(E){for(const B in E)Reflect.has(b,B)&&(E[B]=b[B]);return E}}function v(m){var B;if(!s.value||s.value.length==0)return;const b=Array.isArray(m)?m:[m];function E(H,J){const L=j(H,J);if(L===null||L.index===-1)return;L.data.splice(L.index,1);function j(Q,se){var ce;if(Q==null)return null;for(let X=0;X<Q.length;X++){const ee=Q[X];if(ae(e(p),ee)===se)return{index:X,data:Q};if(((ce=ee.children)==null?void 0:ce.length)>0){const te=j(ee.children,se);if(te!=null)return te}}return null}}for(const H of b)E(s.value,H),E(e(n).dataSource,H);t({total:(B=e(n).dataSource)==null?void 0:B.length})}function y(m,b){var B;b=b!=null?b:(B=s.value)==null?void 0:B.length;const E=fn(m)?[m]:m;return e(s).splice(b,0,...E),e(s)}function R(m){if(!s.value||s.value.length==0)return;const{childrenColumnName:b="children"}=e(n);return(B=>{let H;return B.some(function J(L){return ae(e(p),L)===m?(H=L,!0):L[b]&&L[b].some(J)}),H})(s.value)}function k(m){return ne(this,null,function*(){var se,ce,X;const{api:b,searchInfo:E,defSort:B,fetchSetting:H,beforeFetch:J,afterFetch:L,useSearchForm:j,pagination:Q}=e(n);if(!(!b||!Y(b)))try{c(!0);const{pageField:ee,sizeField:te,listField:ie,totalField:be}=Object.assign({},on,H);let he={};const{current:_e=1,pageSize:Pe=Ye}=e(o);me(Q)&&!Q||me(o)?he={}:(he[ee]=m&&m.page||_e,he[te]=Pe);const{sortInfo:De={},filterInfo:Ae}=r;let d=Rn(he,j?l():{},E,(se=m==null?void 0:m.searchInfo)!=null?se:{},B,De,Ae,(ce=m==null?void 0:m.sortInfo)!=null?ce:{},(X=m==null?void 0:m.filterInfo)!=null?X:{});J&&Y(J)&&(d=(yield J(d))||d);const S=yield b(d);w.value=S;const F=Array.isArray(S);let h=F?S:ct(S,ie);const D=F?S.length:ct(S,be);if(Number(D)){const ve=Math.ceil(D/Pe);if(_e>ve)return t({current:ve}),yield k(m)}return L&&Y(L)&&(h=(yield L(h))||h),s.value=h,t({total:D||0}),m&&m.page&&t({current:m.page||1}),u("fetch-success",{items:e(h),total:D}),h}catch(ee){u("fetch-error",ee),s.value=[],t({total:0})}finally{c(!1)}})}function $(m){s.value=m}function N(){return a.value}function q(){return w.value}function le(m){return ne(this,null,function*(){return yield k(m)})}return Ve(()=>{un(()=>{e(n).immediate&&k()},16)}),{getDataSourceRef:a,getDataSource:N,getRawDataSource:q,getRowKey:p,setTableData:$,getAutoCreateKey:_,fetch:k,reload:le,updateTableData:g,updateTableDataRecord:C,deleteTableDataRecord:v,insertTableDataRecord:y,findTableDataRecord:R,handleTableChange:P}}function Vn(n){const o=z(e(n).loading);ye(()=>e(n).loading,l=>{o.value=l});const t=I(()=>e(o));function c(l){o.value=l}return{getLoading:t,setLoading:c}}function Yn(n,o,t){const c=z([]),l=z([]),i=I(()=>{const{rowSelection:a}=e(n);return a?K({selectedRowKeys:e(c),onChange:(g,C,v)=>{var y,R;if(v)(y=a.onChange)==null||y.call(a,g,C);else{const k=o.value.map($=>ae(e(u),$));for(const $ of c.value.filter(N=>k.includes(N)))if(g.findIndex(N=>N===$)<0){const N=c.value.findIndex(q=>q===$);N>-1&&(c.value.splice(N,1),l.value.splice(N,1))}for(const $ of g)if(c.value.findIndex(q=>q===$)<0){c.value.push($);const q=C.find(le=>ae(e(u),le)===$);q&&l.value.push(q)}r(c.value),(R=a.onChange)==null||R.call(a,c.value,l.value)}}},Qe(a,["onChange"])):null});ye(()=>{var a;return(a=e(n).rowSelection)==null?void 0:a.selectedRowKeys},a=>{r(a)}),ye(()=>e(c),()=>{Ie(()=>{const{rowSelection:a}=e(n);if(a){const{onChange:g}=a;g&&Y(g)&&g(O(),_(),!0)}t("selection-change",{keys:O(),rows:_()})})},{deep:!0});const f=I(()=>e(n).autoCreateKey&&!e(n).rowKey),u=I(()=>{const{rowKey:a}=e(n);return e(f)?ge:a});function r(a){var y;c.value=a||[];const g=Ce(e(o)).concat(Ce(e(l))),C=dn(g,R=>a==null?void 0:a.includes(ae(e(u),R)),{children:(y=n.value.childrenColumnName)!=null?y:"children"}),v=[];a==null||a.forEach(R=>{const k=C.find($=>ae(e(u),$)===R);k?v.push(k):g[0]&&v.push({[We(e(u),g[0])]:R})}),l.value=v}function s(a){l.value=a,c.value=l.value.map(g=>ae(e(u),g))}function w(){l.value=[],c.value=[]}function P(a){const C=e(c).findIndex(v=>v===a);C!==-1&&e(c).splice(C,1)}function O(){return e(c)}function _(){return e(l)}function p(){return e(i)}return{getRowSelection:p,getRowSelectionRef:i,getSelectRows:_,getSelectRowKeys:O,setSelectedRowKeys:r,clearSelectedRowKeys:w,deleteSelectRowByKey:P,setSelectedRows:s}}function Zn(n,o){let t;function c(i){return ne(this,null,function*(){var r;const{id:f}=i,u=t==null?void 0:t.querySelector(`[data-row-key="${f}"]`);yield Ie(),t==null||t.scrollTo({top:(r=u==null?void 0:u.offsetTop)!=null?r:0,behavior:"smooth"})})}function l(i){const f=e(n);if(!f)return;const u=f.$el;if(!u||!t&&(t=u.querySelector(".ant-table-body"),!t))return;const r=e(o);if(r)if(i==="top")c(r[0]);else if(i==="bottom")c(r[r.length-1]);else{const s=r.find(w=>w.id===i);s&&c(s)}}return{scrollTo:l}}function Qn(n,{setSelectedRowKeys:o,getSelectRowKeys:t,getAutoCreateKey:c,clearSelectedRowKeys:l,emit:i}){return{customRow:(u,r)=>({onClick:s=>{s==null||s.stopPropagation();function w(){var v;const{rowSelection:P,rowKey:O,clickToRowSelect:_}=e(n);if(!P||!_)return;const p=t()||[],a=ae(O,u,e(c));if(!a)return;if(P.type==="checkbox"){const y=(v=s.composedPath)==null?void 0:v.call(s).find($=>$.tagName==="TR");if(!y)return;const R=y.querySelector("input[type=checkbox]");if(!R||R.hasAttribute("disabled"))return;if(!p.includes(a)){p.push(a),o(p);return}const k=p.findIndex($=>$===a);p.splice(k,1),o(p);return}if(P.type==="radio"){if(!p.includes(a)){p.length&&l(),o([a]);return}l()}}w(),i("row-click",u,r,s)},onDblclick:s=>{i("row-dbClick",u,r,s)},onContextmenu:s=>{i("row-contextmenu",u,r,s)},onMouseenter:s=>{i("row-mouseenter",u,r,s)},onMouseleave:s=>{i("row-mouseleave",u,r,s)}})}}function Xn(n,o){function t(c,l){const{striped:i,rowClassName:f}=e(n),u=[];return i&&u.push((l||0)%2===1?`${o}-row__striped`:""),f&&Y(f)&&u.push(f(c,l)),u.filter(r=>!!r).join(" ")}return{getRowClassName:t}}const ea=["data-no"],ta=oe({name:"ColumnSetting",__name:"ColumnSetting",props:{cache:{type:Boolean,default:()=>!1}},emits:["columns-change"],setup(n,{emit:o}){const t=bt(),c=o,l=Zt(),{t:i}=Re(),{prefixCls:f}=Ke("basic-column-setting"),u=mt(),r=Fe(),s=n,w=()=>Y(u.getPopupContainer)?u.getPopupContainer():wt();let P=!1,O=!1;const _=z([]),p=z(null),a=z([]);ye(a,()=>{P&&(_.value.filter(d=>a.value.includes(d.value)).forEach(d=>{d.column.defaultHidden=!1}),_.value.filter(d=>!a.value.includes(d.value)).forEach(d=>{d.column.defaultHidden=!0,d.fixed=void 0}),se(),H(),s.cache&&N())});const g=z(!1),C=()=>{a.value.length<_.value.length?a.value=_.value.map(d=>d.value):a.value=[]},v=I(()=>a.value.length>0&&a.value.length<_.value.length),y=z(!1),R=d=>{ce(d.target.checked),s.cache&&typeof l.name=="string"&&t.setShowIndexColumn(l.name,d.target.checked)},k=z(!1),$=d=>{X(d.target.checked),s.cache&&typeof l.name=="string"&&t.setShowRowSelection(l.name,d.target.checked)},N=()=>{typeof l.name=="string"&&t.setColumns(l.name,_.value)},q=()=>{y.value=te,R({target:{checked:te}}),k.value=ie,$({target:{checked:ie}}),_.value=pe(he),ee()},le=(d,S)=>{S==="left"?!d.fixed||d.fixed==="right"?d.fixed="left":d.fixed=void 0:S==="right"&&(!d.fixed||d.fixed==="left"?d.fixed="right":d.fixed=void 0),H(),s.cache&&N()},m=()=>ne(this,null,function*(){if(p.value){const d=p.value.$el;Array.from(d.children).forEach(S=>d.removeChild(S))}yield Ie()}),b=d=>{if(d){if("ifShow"in d){if(typeof d.ifShow=="boolean")return d.ifShow;if(d.ifShow)return d.ifShow(d)}return!0}return!1},E=()=>r.getColumns({ignoreIndex:!0,ignoreAction:!0}).filter(d=>b(d)),B=d=>{O=!0,r==null||r.setColumns(d);const S=d.map(F=>({dataIndex:F.dataIndex?F.dataIndex.toString():"",fixed:F.fixed,visible:!F.defaultHidden}));c("columns-change",S)},H=()=>{var h;const d=pe(r.getColumns());let S=d.filter(D=>D.flag!==ke&&(D.fixed==="left"||D.fixed===!0)).length;y.value&&S++;for(const D of _.value){const ve=d.findIndex(xe=>xe.dataIndex===D.value);if(ve>-1){const xe=d[ve];xe.defaultHidden=(h=D.column)==null?void 0:h.defaultHidden,xe.fixed=D.fixed,d.splice(ve,1),d.splice(S++,0,xe)}}const F=d.findIndex(D=>D.dataIndex==="action");if(F>-1){const D=d.splice(F,1);d.push(D[0])}B(d)},J=()=>ne(this,null,function*(){if(yield Ie(),p.value){const d=p.value.$el;Hn.create(e(d),{animation:500,delay:400,delayOnTouchOnly:!0,handle:".table-column-drag-icon ",dataIdAttr:"data-no",onEnd:S=>{const{oldIndex:F,newIndex:h}=S;if(it(F)||it(h)||F===h)return;const D=pe(_.value);F>h?(D.splice(h,0,D[F]),D.splice(F+1,1)):(D.splice(h+1,0,D[F]),D.splice(F,1)),_.value=D,H(),s.cache&&N()}})}}),L=()=>{if(typeof l.name=="string"){let d=t.getColumns(l.name);if(d&&JSON.stringify(_.value.map(S=>({value:S.value,label:S.label})))!==JSON.stringify(d.map(S=>({value:S.value,label:S.label})))){const S=_.value.reduce((F,h)=>(F[h.value]=h.label,F),{});if(Array.isArray(d)){d=d.filter(h=>S[h.value]),d.forEach(h=>{h.label=S[h.value]});const F=d.map(h=>h.value);d=d.concat(_.value.filter(h=>!F.includes(h.value))),t.setColumns(l.name,d)}}}},j=()=>{if(typeof l.name=="string"){const d=t.getShowIndexColumn(l.name);typeof d=="boolean"&&(y.value=te&&d);const S=t.getShowRowSelection(l.name);typeof S=="boolean"&&(k.value=ie&&S)}if(R({target:{checked:y.value}}),$({target:{checked:k.value}}),typeof l.name=="string"){const d=t.getColumns(l.name);Array.isArray(d)&&(_.value=d)}},Q=()=>{a.value=_.value.filter(d=>{var S;return!((S=d.column)!=null&&S.defaultHidden)}).map(d=>d.value)},se=()=>{g.value=_.value.length===a.value.length},ce=d=>{O=!0,r.setProps({showIndexColumn:d})},X=d=>{O=!0,r.setProps({rowSelection:d?re(K({},Qe(be,["selectedRowKeys"])),{fixed:!0}):void 0})},ee=()=>{Q(),se(),ce(y.value),X(k.value),H()};let te=!1,ie=!1,be,he=[];const _e=()=>ne(this,null,function*(){var d;if(!P){const S=E();(d=r.setCacheColumns)==null||d.call(r,S);const F=[];for(const h of S)F.push({label:typeof h.title=="string"?h.title:h.customTitle==="string"?h.customTitle:"",value:typeof h.dataIndex=="string"?h.dataIndex:h.title==="string"?h.title:"",column:{defaultHidden:h.defaultHidden},fixed:h.fixed});te=r.getBindValues.value.showIndexColumn||!1,be=r.getRowSelection(),ie=!!be,he=F,y.value=te,k.value=ie,_.value=pe(F),s.cache&&L(),s.cache&&j(),ee(),P=!0}});ne(this,null,function*(){yield m(),_e()});const De=I(()=>r==null?void 0:r.getColumns()),Ae=I(()=>r==null?void 0:r.getBindValues);return Ve(()=>{ye([De,Ae],()=>{O?O=!1:(P=!1,_e())})}),(d,S)=>{const F=pt("a-button");return A(),G(e(Te),{placement:"top"},{title:x(()=>[fe("span",null,U(e(i)("component.table.settingColumn")),1)]),default:x(()=>[T(e(Tn),{placement:"bottomLeft",trigger:"click",onOpenChange:J,overlayClassName:`${e(f)}__column-list`,getPopupContainer:w},{title:x(()=>[fe("div",{class:Se(`${e(f)}__popover-title`)},[T(e(Oe),{indeterminate:v.value,checked:g.value,"onUpdate:checked":S[0]||(S[0]=h=>g.value=h),onChange:C},{default:x(()=>[ue(U(e(i)("component.table.settingColumnShow")),1)]),_:1},8,["indeterminate","checked"]),T(e(Oe),{checked:y.value,"onUpdate:checked":S[1]||(S[1]=h=>y.value=h),onChange:R},{default:x(()=>[ue(U(e(i)("component.table.settingIndexColumnShow")),1)]),_:1},8,["checked"]),e(ie)?(A(),G(e(Oe),{key:0,checked:k.value,"onUpdate:checked":S[2]||(S[2]=h=>k.value=h),onChange:$},{default:x(()=>[ue(U(e(i)("component.table.settingSelectColumnShow")),1)]),_:1},8,["checked"])):V("",!0),T(F,{size:"small",type:"link",onClick:q},{default:x(()=>[ue(U(e(i)("common.resetText")),1)]),_:1})],2)]),content:x(()=>[T(e(hn),null,{default:x(()=>[T(e(Oe).Group,{value:a.value,"onUpdate:value":S[3]||(S[3]=h=>a.value=h),ref_key:"columnOptionsRef",ref:p},{default:x(()=>[(A(!0),de(Qt,null,Ge(_.value,h=>(A(),de("div",{key:h.value,class:Se(`${e(f)}__check-item`),"data-no":h.value},[T(e(In),{class:"table-column-drag-icon"}),T(e(Oe),{value:h.value},{default:x(()=>[ue(U(h.label),1)]),_:2},1032,["value"]),T(e(Te),{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:w},{title:x(()=>[ue(U(e(i)("component.table.settingFixedLeft")),1)]),default:x(()=>[T(st,{icon:"line-md:arrow-align-left",class:Se([`${e(f)}__fixed-left`,{active:h.fixed==="left",disabled:h.value?!a.value.includes(h.value):!0}]),onClick:D=>le(h,"left")},null,8,["class","onClick"])]),_:2},1024),T(e(St),{type:"vertical"}),T(e(Te),{placement:"bottomLeft",mouseLeaveDelay:.4,getPopupContainer:w},{title:x(()=>[ue(U(e(i)("component.table.settingFixedRight")),1)]),default:x(()=>[T(st,{icon:"line-md:arrow-align-left",class:Se([`${e(f)}__fixed-right`,{active:h.fixed==="right",disabled:h.value?!a.value.includes(h.value):!0}]),onClick:D=>le(h,"right")},null,8,["class","onClick"])]),_:2},1024)],10,ea))),128))]),_:1},8,["value"])]),_:1})]),default:x(()=>[T(e(kn))]),_:1},8,["overlayClassName"])]),_:1})}}}),na=oe({name:"SizeSetting",__name:"SizeSetting",setup(n){const o=bt(),t=Fe(),{t:c}=Re(),l=z([t.getSize()]),i=({key:f})=>{l.value=[f],o.setTableSize(f),t.setProps({size:f})};return Ve(()=>{l.value=[o.getTableSize],t.setProps({size:l.value[0]})}),(f,u)=>(A(),G(e(Te),{placement:"top"},{title:x(()=>[fe("span",null,U(e(c)("component.table.settingDens")),1)]),default:x(()=>[T(e(Fn),{placement:"bottom",trigger:["click"],getPopupContainer:e(wt)},{overlay:x(()=>[T(e(Le),{onClick:i,selectable:"",selectedKeys:l.value,"onUpdate:selectedKeys":u[0]||(u[0]=r=>l.value=r)},{default:x(()=>[T(e(Le).Item,{key:"default"},{default:x(()=>[fe("span",null,U(e(c)("component.table.settingDensDefault")),1)]),_:1}),T(e(Le).Item,{key:"middle"},{default:x(()=>[fe("span",null,U(e(c)("component.table.settingDensMiddle")),1)]),_:1}),T(e(Le).Item,{key:"small"},{default:x(()=>[fe("span",null,U(e(c)("component.table.settingDensSmall")),1)]),_:1})]),_:1},8,["selectedKeys"])]),default:x(()=>[T(e(Kn))]),_:1},8,["getPopupContainer"])]),_:1}))}}),aa=oe({name:"RedoSetting",__name:"RedoSetting",setup(n){const o=Fe(),{t}=Re();function c(){o.reload()}return(l,i)=>(A(),G(e(Te),{placement:"top"},{title:x(()=>[fe("span",null,U(e(t)("common.redo")),1)]),default:x(()=>[T(e(Pn),{onClick:c})]),_:1}))}}),oa=oe({name:"FullScreenSetting",__name:"FullScreenSetting",setup(n){const o=Fe(),{t}=Re(),{toggle:c,isFullscreen:l}=gn(o.wrapRef);return(i,f)=>(A(),G(e(Te),{placement:"top"},{title:x(()=>[fe("span",null,U(e(t)("component.table.settingFullScreen")),1)]),default:x(()=>[e(l)?(A(),G(e(An),{key:1,onClick:e(c)},null,8,["onClick"])):(A(),G(e(Dn),{key:0,onClick:e(c)},null,8,["onClick"]))]),_:1}))}}),la={class:"table-settings"},sa=oe({name:"TableSetting",__name:"index",props:{setting:{type:Object,default:()=>({})}},emits:["columns-change"],setup(n,{emit:o}){const t=n,c=o,l=Fe(),i=I(()=>K({redo:!0,size:!0,setting:!0,settingCache:!1,fullScreen:!1},t.setting));function f(r){c("columns-change",r)}function u(){return l?e(l.wrapRef):document.body}return(r,s)=>(A(),de("div",la,[i.value.redo?(A(),G(aa,{key:0,getPopupContainer:u})):V("",!0),i.value.size?(A(),G(na,{key:1,getPopupContainer:u})):V("",!0),i.value.setting?(A(),G(ta,{key:2,onColumnsChange:f,getPopupContainer:u,cache:i.value.settingCache},null,8,["cache"])):V("",!0),i.value.fullScreen?(A(),G(oa,{key:3,getPopupContainer:u})):V("",!0)]))}}),ca=oe({name:"BasicTableTitle",__name:"TableTitle",props:{title:{type:[Function,String]},getSelectRows:{type:Function},helpMessage:{type:[String,Array]}},setup(n){const o=n,{prefixCls:t}=Ke("basic-table-title"),c=I(()=>{const{title:l,getSelectRows:i=()=>{}}=o;let f=l;return Y(l)&&(f=l({selectRows:i()})),f});return(l,i)=>c.value?(A(),G(e(mn),{key:0,class:Se(e(t)),helpMessage:n.helpMessage},{default:x(()=>[ue(U(c.value),1)]),_:1},8,["class","helpMessage"])):V("",!0)}}),ia={key:0},ra={key:1},ua=oe({name:"TableSelectBar",__name:"TableSelectionBar",props:{count:{default:()=>0},clearSelectedRowKeys:{}},setup(n){const{t:o}=Re(),{prefixCls:t}=Ke("table-select-bar"),c=n;return(l,i)=>{const f=pt("a-button");return A(),G(e($n),{type:"info",showIcon:"",class:Se([e(t)])},{message:x(()=>[c.count>0?(A(),de("span",ia,U(e(o)("component.table.selectionBarTips",{count:c.count})),1)):(A(),de("span",ra,U(e(o)("component.table.selectionBarEmpty")),1)),Ct(T(f,{type:"link",onClick:l.clearSelectedRowKeys,size:"small"},{default:x(()=>[ue(U(e(o)("component.table.selectionBarClear")),1)]),_:1},8,["onClick"]),[[vt,c.count>0]])]),_:1},8,["class"])}}}),fa=pn(ua,[["__scopeId","data-v-80ee960a"]]),da={style:{width:"100%"}},ha={key:0,style:{margin:"5px"}},ga={key:1,style:{margin:"5px"}},ma={class:"flex items-center"},pa=oe({name:"BasicTableHeader",__name:"TableHeader",props:{title:{type:[Function,String]},tableSetting:{type:Object},showTableSetting:{type:Boolean},titleHelpMessage:{type:[String,Array],default:""},clearSelectedRowKeys:{type:Function},count:{type:Number,default:0},showSelectionBar:{type:Boolean,default:!1}},emits:["columns-change"],setup(n,{emit:o}){const t=n,c=o,{prefixCls:l}=Ke("basic-table-header");function i(f){c("columns-change",f)}return(f,u)=>(A(),de("div",da,[f.$slots.headerTop?(A(),de("div",ha,[we(f.$slots,"headerTop")])):V("",!0),n.showSelectionBar?(A(),de("div",ga,[T(fa,{clearSelectedRowKeys:t.clearSelectedRowKeys,count:t.count},null,8,["clearSelectedRowKeys","count"])])):V("",!0),fe("div",ma,[f.$slots.tableTitle?we(f.$slots,"tableTitle",{key:0}):V("",!0),!f.$slots.tableTitle&&n.title?(A(),G(ca,{key:1,helpMessage:n.titleHelpMessage,title:n.title},null,8,["helpMessage","title"])):V("",!0),fe("div",{class:Se(`${e(l)}__toolbar`)},[we(f.$slots,"toolbar"),f.$slots.toolbar&&n.showTableSetting?(A(),G(e(St),{key:0,type:"vertical"})):V("",!0),n.showTableSetting?(A(),G(sa,{key:1,setting:n.tableSetting,onColumnsChange:i},null,8,["setting"])):V("",!0)],2)])]))}});function Ca(n,o,t,c){return{getHeaderProps:I(()=>{const{title:i,showTableSetting:f,titleHelpMessage:u,tableSetting:r,showSelectionBar:s}=e(n),w=!o.tableTitle&&!i&&!o.toolbar&&!f;return w&&!Ze(i)?{}:{title:w?null:()=>qe(pa,{title:i,titleHelpMessage:u,showTableSetting:f,tableSetting:r,onColumnsChange:t.onColumnsChange,clearSelectedRowKeys:c.clearSelectedRowKeys,count:c.getSelectRowKeys().length,showSelectionBar:s},K(K(K({},o.toolbar?{toolbar:()=>je(o,"toolbar")}:{}),o.tableTitle?{tableTitle:()=>je(o,"tableTitle")}:{}),o.headerTop?{headerTop:()=>je(o,"headerTop")}:{}))}})}}function va(n,o,t){const c=z([]),l=I(()=>e(n).autoCreateKey&&!e(n).rowKey),i=I(()=>{const{rowKey:a}=e(n);return e(l)?ge:a}),f=I(()=>{const{isTreeTable:a,expandRowByClick:g}=e(n);return!a&&!g?{}:{expandedRowKeys:e(c),onExpandedRowsChange:C=>{c.value=C,t("expanded-rows-change",C)}}});function u(){const a=P();c.value=a}function r(){c.value=[]}function s(a){const{isTreeTable:g,expandRowByClick:C}=e(n);!g&&!C||(c.value=[...c.value,...a])}function w(a){const{isTreeTable:g,expandRowByClick:C}=e(n);!g&&!C||(c.value=e(c).filter(v=>!a.includes(v)))}function P(a){const g=[],{childrenColumnName:C}=e(n);return Ce(a||e(o)).forEach(v=>{g.push(ae(e(i),v));const y=v[C||"children"];y!=null&&y.length&&g.push(...P(y))}),g}function O(a,g,C,v){if(a.findIndex(y=>ae(e(i),y)===C)>-1)return v.push(C),!0;for(const y of a){const R=y[g];if(Array.isArray(R)&&O(R,g,C,v))return v.push(ae(e(i),y)),!0}return!1}function _(a){const{childrenColumnName:g}=e(n),C=[];O(o.value,g||"children",a,C),c.value=C}function p(a,g){n.value.accordion&&(n.value.isTreeTable||n.value.expandRowByClick)&&a&&Ie(()=>{_(ae(e(i),g))})}return{getExpandOption:f,expandAll:u,collapseAll:r,expandRows:s,collapseRows:w,expandRowAccordion:_,handleTableExpand:p}}const dt="_row",ht="_index",wa=oe({name:"BasicTableFooter",__name:"TableFooter",props:{summaryFunc:{default:null},summaryData:{default:null},scroll:{},rowKey:{default:""}},setup(n){const o=n,t=Fe(),c=I(()=>{var f;if((f=o.summaryData)!=null&&f.length)return o.summaryData.forEach((u,r)=>{u[We(o.rowKey,u)]=`${r}`}),o.summaryData;if(!Y(o.summaryFunc))return[];let i=Ce(e(t.getDataSource()));return i=o.summaryFunc(i),i.forEach((u,r)=>{u[We(o.rowKey,u)]=`${r}`}),i}),l=I(()=>{const i=e(c),f=pe(t.getColumns()),u=f.findIndex(w=>w.flag===ke),r=i.some(w=>Reflect.has(w,dt)),s=i.some(w=>Reflect.has(w,ht));if(u!==-1&&(s?(f[u].customRender=({record:w})=>w[ht],f[u].ellipsis=!1):Reflect.deleteProperty(f[u],"customRender")),t.getRowSelection()&&r){const w=f.some(P=>P.fixed==="left");f.unshift(re(K({width:60,title:"selection",key:"selectionKey",align:"center"},w?{fixed:"left"}:{}),{customRender:({record:P})=>P[dt]}))}return f});return(i,f)=>o.summaryFunc||o.summaryData?(A(),G(e(yt),{key:0,showHeader:!1,bordered:!1,pagination:!1,dataSource:c.value,rowKey:o.rowKey,columns:l.value,tableLayout:"fixed",scroll:o.scroll},null,8,["dataSource","rowKey","columns","scroll"])):V("",!0)}});function Sa(n,o,t,c){const l=I(()=>(e(c)||[]).length===0),i=I(()=>{const{summaryFunc:u,showSummary:r,summaryData:s}=e(n);return r&&!e(l)?()=>qe(wa,{summaryFunc:u,summaryData:s,scroll:e(o)}):void 0});Je(()=>{f()});function f(){const{showSummary:u}=e(n);!u||e(l)||Ie(()=>{const r=e(t);if(!r)return;const s=r.$el.querySelector(" .ant-table-content,  .ant-table-body");Cn({el:s,name:"scroll",listener:()=>{const w=r.$el.querySelector('.ant-table-footer .ant-table-container  [class^="ant-table-"]');!w||!s||(w.scrollLeft=s.scrollLeft)},wait:0,options:!0})})}return{getFooterProps:i}}function ya(n,o,t,c){const l=I(()=>{const{formConfig:r}=e(n),{submitButtonOptions:s}=r||{};return re(K({showAdvancedButton:!0},r),{submitButtonOptions:K({loading:e(c)},s),compact:!0})}),i=I(()=>Object.keys(o).map(s=>s.startsWith("form-")?s:null).filter(s=>!!s));function f(r){var s,w;return r&&(w=(s=r==null?void 0:r.replace)==null?void 0:s.call(r,/form-/,""))!=null?w:""}function u(r){const{handleSearchInfoFn:s}=e(n);s&&Y(s)&&(r=s(r)||r),t({searchInfo:r,page:1})}return{getFormProps:l,replaceFormSlotKey:f,getFormSlotKeys:i,handleSearchInfoChange:u}}const Aa=oe({name:"BasicTable",__name:"BasicTable",props:On,emits:["fetch-success","fetch-error","selection-change","register","row-click","row-dbClick","row-contextmenu","row-mouseenter","row-mouseleave","edit-end","edit-cancel","edit-row-end","edit-change","expanded-rows-change","change","columns-change"],setup(n,{expose:o,emit:t}){const c=n,l=t,i=mt(),f=Xt(),u=z(null),r=z([]),s=z(null),w=z(null),P=z(),{prefixCls:O}=Ke("basic-table"),[_,p]=sn(),a=I(()=>K(K({},c),e(P))),g=en(vn,!1);Je(()=>{e(g)&&c.canResize&&wn()});const{getLoading:C,setLoading:v}=Vn(a),{getPaginationInfo:y,getPagination:R,setPagination:k,setShowPagination:$,getShowPagination:N}=zn(a),{getRowSelection:q,getRowSelectionRef:le,getSelectRows:m,setSelectedRows:b,clearSelectedRowKeys:E,getSelectRowKeys:B,deleteSelectRowByKey:H,setSelectedRowKeys:J}=Yn(a,r,l),{handleTableChange:L,getDataSourceRef:j,getDataSource:Q,getRawDataSource:se,setTableData:ce,updateTableDataRecord:X,deleteTableDataRecord:ee,insertTableDataRecord:te,findTableDataRecord:ie,fetch:be,getRowKey:he,reload:_e,getAutoCreateKey:Pe,updateTableData:De}=Jn(a,{tableData:r,getPaginationInfo:y,setLoading:v,setPagination:k,getFieldsValue:p.getFieldsValue,clearSelectedRowKeys:E},l);function Ae(M,Z,W,Ee){L(M,Z,W),l("change",M,Z,W);const{onChange:Ue}=e(a);Ue&&Y(Ue)&&Ue(M,Z,W,Ee)}const{getViewColumns:d,getColumns:S,setCacheColumnsByField:F,setCacheColumns:h,setColumnWidth:D,setColumns:ve,getColumnsRef:xe,getCacheColumns:Rt}=Wn(a,y),{getScrollRef:Xe,redoHeight:et}=Bn(a,u,xe,le,j,s,w),{scrollTo:Tt}=Zn(u,j),{customRow:It}=Qn(a,{setSelectedRowKeys:J,getSelectRowKeys:B,clearSelectedRowKeys:E,getAutoCreateKey:Pe,emit:l}),{getRowClassName:kt}=Xn(a,O),{getExpandOption:Ft,expandAll:Kt,expandRows:Pt,collapseRows:Dt,collapseAll:At,handleTableExpand:$t}=va(a,r,l),Et={onColumnsChange:M=>{var Z,W;l("columns-change",M),(W=(Z=e(a)).onColumnsChange)==null||W.call(Z,M)}},Ot={clearSelectedRowKeys:E,getSelectRowKeys:B},{getHeaderProps:Bt}=Ca(a,f,Et,Ot),{getFooterProps:Ht}=Sa(a,Xe,u,j),{getFormProps:Nt,replaceFormSlotKey:Lt,getFormSlotKeys:Mt,handleSearchInfoChange:zt}=ya(a,f,be,C),$e=I(()=>{const M=e(j);let Z=K(re(K(K(re(K({},i),{customRow:It}),e(a)),e(Bt)),{scroll:e(Xe),loading:e(C),tableLayout:"fixed",rowSelection:e(le),rowKey:e(he),columns:Ce(e(d)),pagination:Ce(e(y)),dataSource:M,footer:e(Ht)}),e(Ft));return Z=Qe(Z,["class","onChange"]),Z}),Ut=I(()=>{const M=e($e);return[O,i.class,{[`${O}-form-container`]:M.useSearchForm,[`${O}--inset`]:M.inset}]}),jt=I(()=>{const{emptyDataIsShowTable:M,useSearchForm:Z}=e(a);return M||!Z?!0:!!e(j).length});function Gt(M){P.value=K(K({},e(P)),M)}const Be={reload:_e,getSelectRows:m,setSelectedRows:b,clearSelectedRowKeys:E,getSelectRowKeys:B,deleteSelectRowByKey:H,setPagination:k,setTableData:ce,updateTableDataRecord:X,deleteTableDataRecord:ee,insertTableDataRecord:te,findTableDataRecord:ie,redoHeight:et,setSelectedRowKeys:J,setColumns:ve,setLoading:v,getDataSource:Q,getRawDataSource:se,setProps:Gt,getRowSelection:q,getPaginationRef:R,getColumns:S,getCacheColumns:Rt,emit:l,updateTableData:De,setShowPagination:$,getShowPagination:N,setCacheColumnsByField:F,expandAll:Kt,collapseAll:At,expandRows:Pt,collapseRows:Dt,scrollTo:Tt,getSize:()=>e($e).size,setCacheColumns:h};return ln(re(K({},Be),{wrapRef:s,getBindValues:$e})),l("register",Be,p),o(K({tableElRef:u},Be)),(M,Z)=>(A(),de("div",{ref_key:"wrapRef",ref:s,class:Se(Ut.value)},[$e.value.useSearchForm?(A(),G(e(tn),ot({key:0,ref_key:"formRef",ref:w,submitOnReset:""},e(Nt),{tableAction:Be,onRegister:e(_),onSubmit:e(zt),onAdvancedChange:e(et)}),at({_:2},[Ge(e(Mt),W=>({name:e(Lt)(W),fn:x(Ee=>[we(M.$slots,W,He(Ne(Ee||{})))])}))]),1040,["onRegister","onSubmit","onAdvancedChange"])):V("",!0),Ct(T(e(yt),ot({ref_key:"tableElRef",ref:u},$e.value,{rowClassName:e(kt),onChange:Ae,onResizeColumn:e(D),onExpand:e($t)}),at({headerCell:x(({column:W})=>[we(M.$slots,"headerCell",He(Ne({column:W})),()=>[T(Ln,{column:W},null,8,["column"])])]),bodyCell:x(W=>[we(M.$slots,"bodyCell",He(Ne(W||{})))]),_:2},[Ge(Object.keys(M.$slots),W=>({name:W,fn:x(Ee=>[we(M.$slots,W,He(Ne(Ee||{})))])}))]),1040,["rowClassName","onResizeColumn","onExpand"]),[[vt,jt.value]])],2))}});export{Aa as _,Ln as a};