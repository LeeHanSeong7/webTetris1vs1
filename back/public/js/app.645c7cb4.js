(function(){"use strict";var n={5570:function(n,t,o){var e=o(9242),i=o(3396);const r={class:"App"};function u(n,t,o,e,u,a){const s=(0,i.up)("LoginView");return(0,i.wg)(),(0,i.iD)("div",r,[0==n.page?((0,i.wg)(),(0,i.j4)(s,{key:0,onOnLogin:a.onLogin},null,8,["onOnLogin"])):(0,i.kq)("",!0)])}var a=o(7139);const s={class:"flexbox"};function c(n,t,o,e,r,u){const c=(0,i.up)("SigninInput"),g=(0,i.up)("SignupInput");return(0,i.wg)(),(0,i.iD)("div",{class:"LoginView",style:(0,a.j5)({"background-image":n.background})},[(0,i._)("div",s,[0===n.page?((0,i.wg)(),(0,i.j4)(c,{key:0,onToggle:u.togglePage},null,8,["onToggle"])):1===n.page?((0,i.wg)(),(0,i.j4)(g,{key:1,onToggle:u.togglePage},null,8,["onToggle"])):(0,i.kq)("",!0)])],4)}const g={class:"SigninInput"},l={class:"flexbox"};function p(n,t,o,e,r,u){const a=(0,i.up)("InputForm");return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",l,[(0,i.Wm)(a,{onSubmit:u.onSubmit},null,8,["onSubmit"]),(0,i._)("button",{onClick:t[0]||(t[0]=(...n)=>u.onToggle&&u.onToggle(...n))},"토글")])])}const d={class:"Input"},f={class:"flexbox"};function v(n,t,o,r,u,a){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",f,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>n.id=t),placeholder:"ID"},null,512),[[e.nr,n.id]]),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>n.pw=t),placeholder:"Password"},null,512),[[e.nr,n.pw]]),(0,i._)("button",{onClick:t[2]||(t[2]=(...n)=>a.submit&&a.submit(...n))},"제출")])])}var m={name:"App",data:()=>({id:"",pw:""}),methods:{submit:function(){this.$emit("submit",this.value)}}},b=o(89);const h=(0,b.Z)(m,[["render",v],["__scopeId","data-v-357238d4"]]);var w=h,I={name:"SigninInput",props:["width","height"],data:()=>({val:""}),methods:{onSubmit:function(n){this.val=n},onToggle:function(){this.$emit("toggle",1)}},components:{InputForm:w}};const k=(0,b.Z)(I,[["render",p],["__scopeId","data-v-33481350"]]);var y=k;function O(n,t,o,e,r,u){return(0,i.wg)(),(0,i.iD)("div")}var _={name:"SignupInput"};const j=(0,b.Z)(_,[["render",O]]);var S=j,x={name:"LoginView",props:{},data:()=>({page:0,list:["signIn","signUp"],background:`url(${o.g.CONFIG.assetURL}/background/8.jpg)`}),components:{SigninInput:y,SignupInput:S},methods:{togglePage:function(){this.page=(this.page+1)%2}}};const L=(0,b.Z)(x,[["render",c],["__scopeId","data-v-5b3a4915"]]);var T=L,C={name:"App",data:()=>({page:0,list:["login","lobby","game"]}),methods:{onLogin:function(){this.page=1}},components:{LoginView:T}};const D=(0,b.Z)(C,[["render",u]]);var P=D;o.g.CONFIG={assetURL:"http://localhost:4001/assets/"},(0,e.ri)(P).mount("#app")}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,function(){var n=[];o.O=function(t,e,i,r){if(!e){var u=1/0;for(g=0;g<n.length;g++){e=n[g][0],i=n[g][1],r=n[g][2];for(var a=!0,s=0;s<e.length;s++)(!1&r||u>=r)&&Object.keys(o.O).every((function(n){return o.O[n](e[s])}))?e.splice(s--,1):(a=!1,r<u&&(u=r));if(a){n.splice(g--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var g=n.length;g>0&&n[g-1][2]>r;g--)n[g]=n[g-1];n[g]=[e,i,r]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var i,r,u=e[0],a=e[1],s=e[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var g=s(o)}for(t&&t(e);c<u.length;c++)r=u[c],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(g)},e=self["webpackChunkfront"]=self["webpackChunkfront"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(5570)}));e=o.O(e)})();
//# sourceMappingURL=app.645c7cb4.js.map