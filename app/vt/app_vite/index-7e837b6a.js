(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const qe=(e,t)=>e===t,se=Symbol("solid-proxy"),G={equals:qe};let _e=Pe;const L=1,V=2,pe={owned:null,cleanups:null,context:null,owner:null};var d=null;let te=null,Ke=null,g=null,A=null,O=null,Y=0;function ge(e,t){const n=g,r=d,s=e.length===0,i=t===void 0?r:t,l=s?pe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=s?e:()=>e(()=>x(()=>z(l)));d=l,g=null;try{return T(o,!0)}finally{g=n,d=r}}function _(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),ve(n,s));return[be.bind(n),r]}function U(e,t,n){const r=Ae(e,t,!1,L);Z(r)}function S(e,t,n){n=n?Object.assign({},G,n):G;const r=Ae(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Z(r),be.bind(r)}function x(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function ye(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let a=0;a<e.length;a++)o[a]=e[a]()}else o=e();if(i)return i=!1,l;const u=x(()=>t(o,s,l));return s=o,u}}function me(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ue(){return d}function De(e,t){const n=d,r=g;d=e,g=null;try{return T(t,!0)}catch(s){ce(s)}finally{d=n,g=r}}function Fe(e){const t=g,n=d;return Promise.resolve().then(()=>{g=t,d=n;let r;return T(e,!1),g=d=null,r?r.done:void 0})}function we(e,t){const n=Symbol("context");return{id:n,Provider:He(n),defaultValue:e}}function le(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function ue(e){const t=S(e),n=S(()=>oe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function be(){if(this.sources&&this.state)if(this.state===L)Z(this);else{const e=A;A=null,T(()=>J(this),!1),A=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function ve(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=te&&te.running;l&&te.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?A.push(i):O.push(i),i.observers&&xe(i)),l||(i.state=L)}if(A.length>1e6)throw A=[],new Error},!1)),t}function Z(e){if(!e.fn)return;z(e);const t=Y;ke(e,e.value,t)}function ke(e,t,n){let r;const s=d,i=g;g=d=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=L,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,ce(l)}finally{g=i,d=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ve(e,r):e.value=r,e.updatedAt=n)}function Ae(e,t,n,r=L,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==pe&&(d.owned?d.owned.push(i):d.owned=[i]),i}function Se(e){if(e.state===0)return;if(e.state===V)return J(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===L)Z(e);else if(e.state===V){const r=A;A=null,T(()=>J(e,t[0]),!1),A=r}}function T(e,t){if(A)return e();let n=!1;t||(A=[]),O?n=!0:O=[],Y++;try{const r=e();return Me(n),r}catch(r){n||(O=null),A=null,ce(r)}}function Me(e){if(A&&(Pe(A),A=null),e)return;const t=O;O=null,t.length&&T(()=>_e(t),!1)}function Pe(e){for(let t=0;t<e.length;t++)Se(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===L?r!==t&&(!r.updatedAt||r.updatedAt<Y)&&Se(r):s===V&&J(r,t)}}}function xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=V,n.pure?A.push(n):O.push(n),n.observers&&xe(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function We(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ce(e,t=d){throw We(e)}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=oe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function He(e,t){return function(r){let s;return U(()=>s=x(()=>(d.context={...d.context,[e]:r.value},ue(()=>r.children))),void 0),s}}function P(e,t){return x(()=>e(t||{}))}function H(){return!0}const Xe={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function Ge(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ve(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&se in o,e[l]=typeof o=="function"?(t=!0,S(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const u=ne(e[o])[l];if(u!==void 0)return u}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ne(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ne(e[o])));return[...new Set(l)]}},Xe);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const u=Object.getOwnPropertyNames(o);for(let a=u.length-1;a>=0;a--){const c=u[a];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(o,c);if(!r[c])r[c]=f.get?{enumerable:!0,configurable:!0,get:Ge.bind(n[c]=[f.get.bind(o)])}:f.value!==void 0?f:void 0;else{const h=n[c];h&&(f.get?h.push(f.get.bind(o)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},i=Object.keys(r);for(let l=i.length-1;l>=0;l--){const o=i[l],u=r[o];u&&u.get?Object.defineProperty(s,o,u):s[o]=u?u.value:void 0}return s}const Je=e=>`Stale read from <${e}>.`;function Ee(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return S(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?x(()=>s(t?r:()=>{if(!x(n))throw Je("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Qe(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,u=t[s-1].nextSibling,a=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const c=i<r?o?n[o-1].nextSibling:n[i-o]:u;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<s;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!a){a=new Map;let f=o;for(;f<i;)a.set(n[f],f++)}const c=a.get(t[l]);if(c!=null)if(o<c&&c<i){let f=l,h=1,w;for(;++f<s&&f<i&&!((w=a.get(t[f]))==null||w!==c+h);)h++;if(h>c-o){const b=t[l];for(;o<c;)e.insertBefore(n[o++],b)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const he="_$DX_DELEGATE";function Ye(e,t,n,r={}){let s;return ge(i=>{s=i,t===document?e():et(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Ze(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>x(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function ze(e,t=window.document){const n=t[he]||(t[he]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,tt))}}function et(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Q(e,t,r,n);U(s=>Q(e,t(),s,n),r)}function tt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=N(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=N(e,n,r);else{if(i==="function")return U(()=>{let o=t();for(;typeof o=="function";)o=o();n=Q(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(ie(o,t,n,s))return U(()=>n=Q(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=N(e,n,r),l)return n}else u?n.length===0?de(e,o,r):Qe(e,n,o):(n&&N(e),de(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=N(e,n,r,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],u=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=ie(e,o,u)||s;else if(a==="function")if(r){for(;typeof o=="function";)o=o();s=ie(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||s}else e.push(o),s=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function de(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function N(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const u=o.parentNode===e;!i&&!l?u?e.replaceChild(s,o):e.insertBefore(s,n):u&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const nt=!1;function rt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function st([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function ot(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function it(e,t){const n=ot(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function lt(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=st(_(i(e()),{equals:(o,u)=>o.value===u.value}),void 0,o=>(!s&&t(o),o));return n&&me(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function ut(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:_({value:""})};return e}function ct(){return lt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),it(window.location.hash.slice(1),n)},e=>rt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function at(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const l={to:s,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:u=>{u&&(n=!0),o.navigate(s,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const ft=/^(?:[a-z0-9]+:)?\/\//i,ht=/^\/+|(\/)\/+$/g;function K(e,t=!1){const n=e.replace(ht,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function X(e,t,n){if(ft.test(t))return;const r=K(e),s=n&&K(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+K(t,!i)}function dt(e,t){if(e==null)throw new Error(t);return e}function Ce(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function pt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function gt(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),l=i.length;return o=>{const u=o.split("/").filter(Boolean),a=u.length-l;if(a<0||a>0&&s===void 0&&!t)return null;const c={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const w=i[h],b=u[h],m=w[0]===":",R=m?w.slice(1):w;if(m&&re(b,f(R)))c.params[R]=b;else if(m||!re(b,w))return null;c.path+=`/${b}`}if(s){const h=a?u.slice(-a).join("/"):"";if(re(h,f(s)))c.params[s]=h;else return null}return c}}function re(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function yt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Re(e){const t=new Map,n=Ue();return new Proxy({},{get(r,s){return t.has(s)||De(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Oe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Oe(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const mt=100,Le=we(),ee=we(),Te=()=>dt(le(Le),"Make sure your app is wrapped in a <Router />");let D;const $e=()=>D||le(ee)||Te().base;function wt(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>P(r,{}):()=>{const{element:u}=e;return u===void 0&&n?P(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return je(e.path).reduce((u,a)=>{for(const c of Oe(a)){const f=Ce(t,c),h=l?f:f.split("/*",1)[0];u.push({...o,originalPath:c,pattern:h,matcher:gt(h,!l,e.matchFilters)})}return u},[])}function bt(e,t=0){return{routes:e,score:yt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function je(e){return Array.isArray(e)?e:[e]}function Ne(e,t="",n,r=[],s=[]){const i=je(e);for(let l=0,o=i.length;l<o;l++){const u=i[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=wt(u,t,n);for(const c of a){r.push(c);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)Ne(u.children,c.pattern,n,r,s);else{const h=bt([...r],s.length);s.push(h)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function vt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function At(e,t){const n=new URL("http://sar"),r=S(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),s=S(()=>r().pathname),i=S(()=>r().search,!0),l=S(()=>r().hash),o=S(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Re(ye(i,()=>pt(r())))}}function St(e,t="",n,r){const{signal:[s,i],utils:l={}}=ut(e),o=l.parsePath||(y=>y),u=l.renderPath||(y=>y),a=l.beforeLeave||at(),c=X("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[h,w]=_(!1),b=async y=>{w(!0);try{await Fe(y)}finally{w(!1)}},[m,R]=_(s().value),[$,F]=_(s().state),k=At(m,$),B=[],j={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(y){return X(c,y)}};if(n)try{D=j,j.data=n({data:void 0,params:{},location:k,navigate:fe(j)})}finally{D=void 0}function ae(y,p,v){x(()=>{if(typeof p=="number"){p&&(l.go?a.confirm(p,v)&&l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:M,resolve:W,scroll:E,state:I}={replace:!1,resolve:!0,scroll:!0,...v},C=W?y.resolvePath(p):X("",p);if(C===void 0)throw new Error(`Path '${p}' is not a routable path`);if(B.length>=mt)throw new Error("Too many redirects");const q=m();if((C!==q||I!==$())&&!nt){if(a.confirm(C,v)){const Ie=B.push({value:q,replace:M,scroll:E,state:$()});b(()=>{R(C),F(I)}).then(()=>{B.length===Ie&&Be({value:C,state:I})})}}})}function fe(y){return y=y||le(ee)||j,(p,v)=>ae(y,p,v)}function Be(y){const p=B[0];p&&((y.value!==p.value||y.state!==p.state)&&i({...y,replace:p.replace,scroll:p.scroll}),B.length=0)}U(()=>{const{value:y,state:p}=s();x(()=>{y!==m()&&b(()=>{R(y),F(p)})})});{let y=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const v=p.composedPath().find(q=>q instanceof Node&&q.nodeName.toUpperCase()==="A");if(!v||!v.hasAttribute("link"))return;const M=v.href;if(v.target||!M&&!v.hasAttribute("state"))return;const W=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||W&&W.includes("external"))return;const E=new URL(M);if(E.origin!==window.location.origin||c&&E.pathname&&!E.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const I=o(E.pathname+E.search+E.hash),C=v.getAttribute("state");p.preventDefault(),ae(j,I,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:C&&JSON.parse(C)})};var $t=y;ze(["click"]),document.addEventListener("click",y),me(()=>document.removeEventListener("click",y))}return{base:j,out:f,location:k,isRouting:h,renderPath:u,parsePath:o,navigatorFactory:fe,beforeLeave:a}}function Pt(e,t,n,r,s){const{base:i,location:l,navigatorFactory:o}=e,{pattern:u,element:a,preload:c,data:f}=r().route,h=S(()=>r().path);c&&c();const w={parent:t,pattern:u,get child(){return n()},path:h,params:s,data:t.data,outlet:a,resolvePath(b){return X(i.path(),b,h())}};if(f)try{D=w,w.data=f({data:t.data,params:s,location:l,navigate:o(w)})}finally{D=void 0}return w}const xt=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||ct(),o=St(l,r,s);return P(Le.Provider,{value:o,get children(){return e.children}})},Et=e=>{const t=Te(),n=$e(),r=ue(()=>e.children),s=S(()=>Ne(r(),Ce(n.pattern,e.base||""),Rt)),i=S(()=>vt(s(),t.location.pathname)),l=Re(()=>{const c=i(),f={};for(let h=0;h<c.length;h++)Object.assign(f,c[h].params);return f});t.out&&t.out.matches.push(i().map(({route:c,path:f,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:h})));const o=[];let u;const a=S(ye(i,(c,f,h)=>{let w=f&&c.length===f.length;const b=[];for(let m=0,R=c.length;m<R;m++){const $=f&&f[m],F=c[m];h&&$&&F.route.key===$.route.key?b[m]=h[m]:(w=!1,o[m]&&o[m](),ge(k=>{o[m]=k,b[m]=Pt(t,b[m-1]||n,()=>a()[m+1],()=>i()[m],l)}))}return o.splice(c.length).forEach(m=>m()),h&&w?h:(u=b[0],b)}));return P(Ee,{get when(){return a()&&u},keyed:!0,children:c=>P(ee.Provider,{value:c,get children(){return c.outlet()}})})},Ct=e=>{const t=ue(()=>e.children);return Ve(e,{get children(){return t()}})},Rt=()=>{const e=$e();return P(Ee,{get when(){return e.child},keyed:!0,children:t=>P(ee.Provider,{value:t,get children(){return t.outlet()}})})};var Ot=Ze("<p>Index");function Lt(){return Ot()}const Tt=document.getElementById("root");Ye(()=>P(xt,{get children(){return P(Et,{get children(){return P(Ct,{path:"/",component:Lt})}})}}),Tt);
