(function(e){function t(t){for(var a,i,r=t[0],l=t[1],d=t[2],s=0,b=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==c[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"185c":function(e,t,n){"use strict";n("72e3")},2341:function(e,t,n){"use strict";n("3b78")},"317e":function(e,t,n){"use strict";n("c33a")},"386a":function(e,t,n){"use strict";n("f9e0")},"3b78":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={id:"router-container"};function o(e,t,n,o,i,r){var l=Object(a["A"])("Sidebar"),d=Object(a["A"])("MediumSidebar"),u=Object(a["A"])("Smallbar"),s=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[i.largeScreen?(Object(a["t"])(),Object(a["d"])(l,{key:0})):Object(a["e"])("",!0),i.mediumScreen?(Object(a["t"])(),Object(a["d"])(d,{key:1})):Object(a["e"])("",!0),i.smallScreen?(Object(a["t"])(),Object(a["d"])(u,{key:2})):Object(a["e"])("",!0),Object(a["g"])("div",c,[Object(a["j"])(s)])],64)}var i=function(e){return Object(a["w"])("data-v-4ddae754"),e=e(),Object(a["u"])(),e},r={id:"nav"},l={class:"links"},d={class:"indicator",ref:"indicator"},u=i((function(){return Object(a["g"])("div",{class:"icon-user icon"},null,-1)})),s=i((function(){return Object(a["g"])("div",null,"Home",-1)})),b=i((function(){return Object(a["g"])("div",{class:"icon-chart-bar icon"},null,-1)})),f=i((function(){return Object(a["g"])("div",null,"Skills",-1)})),v=i((function(){return Object(a["g"])("div",{class:"icon-code icon"},null,-1)})),p=i((function(){return Object(a["g"])("div",null,"Portfolio",-1)})),j=i((function(){return Object(a["g"])("div",{class:"icon-at icon"},null,-1)})),O=i((function(){return Object(a["g"])("div",null,"Contact",-1)}));function m(e,t,n,c,o,i){var m=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])("div",r,[Object(a["g"])("div",l,[Object(a["g"])("div",d,null,512),Object(a["j"])(m,{to:"/",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[u,s]})),_:1},8,["onClick"]),Object(a["j"])(m,{to:"/skills",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[b,f]})),_:1},8,["onClick"]),Object(a["j"])(m,{to:"/portfolio",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[v,p]})),_:1},8,["onClick"]),Object(a["j"])(m,{to:"/contact",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[j,O]})),_:1},8,["onClick"])])])}var h=n("a1e9"),g={name:"Sidebar",setup:function(){var e=Object(h["l"])(null),t=function(t){"A"==t.target.parentElement.nodeName?e.value.style.top="".concat(t.target.parentElement.offsetTop,"px"):e.value.style.top="".concat(t.target.offsetTop,"px")};return{indicator:e,moveIndicator:t}}},k=(n("90e0"),n("6b0d")),y=n.n(k);const w=y()(g,[["render",m],["__scopeId","data-v-4ddae754"]]);var S=w,C=function(e){return Object(a["w"])("data-v-546fdfaf"),e=e(),Object(a["u"])(),e},_={id:"nav"},I={class:"links"},x={class:"indicator",ref:"indicator"},A=C((function(){return Object(a["g"])("div",{class:"icon-user icon"},null,-1)})),T=C((function(){return Object(a["g"])("div",{class:"label"},"Home",-1)})),F=C((function(){return Object(a["g"])("div",{class:"icon-chart-bar icon"},null,-1)})),P=C((function(){return Object(a["g"])("div",{class:"label"},"Skills",-1)})),M=C((function(){return Object(a["g"])("div",{class:"icon-code icon"},null,-1)})),L=C((function(){return Object(a["g"])("div",{class:"label"},"Portfolio",-1)})),E=C((function(){return Object(a["g"])("div",{class:"icon-at icon"},null,-1)})),H=C((function(){return Object(a["g"])("div",{class:"label"},"Contact",-1)}));function B(e,t,n,c,o,i){var r=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])("div",_,[Object(a["g"])("div",I,[Object(a["g"])("div",x,null,512),Object(a["j"])(r,{to:"/",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[A,T]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/skills",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[F,P]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/portfolio",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[M,L]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/contact",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[E,H]})),_:1},8,["onClick"])])])}var J={name:"Smallbar",setup:function(){var e=Object(h["l"])(null),t=function(t){"A"==t.target.parentElement.nodeName?e.value.style.left="".concat(t.target.parentElement.offsetLeft-10,"px"):e.value.style.left="".concat(t.target.offsetLeft-10,"px")};return{indicator:e,moveIndicator:t}}};n("185c");const W=y()(J,[["render",B],["__scopeId","data-v-546fdfaf"]]);var V=W,D=function(e){return Object(a["w"])("data-v-cc9fd66e"),e=e(),Object(a["u"])(),e},G={id:"nav"},N={class:"links"},Q={class:"indicator",ref:"indicator"},R=D((function(){return Object(a["g"])("div",{class:"icon-user icon"},null,-1)})),U=D((function(){return Object(a["g"])("div",{class:"label"},"Home",-1)})),z=D((function(){return Object(a["g"])("div",{class:"icon-chart-bar icon"},null,-1)})),K=D((function(){return Object(a["g"])("div",{class:"label"},"Skills",-1)})),Y=D((function(){return Object(a["g"])("div",{class:"icon-code icon"},null,-1)})),q=D((function(){return Object(a["g"])("div",{class:"label"},"Portfolio",-1)})),X=D((function(){return Object(a["g"])("div",{class:"icon-at icon"},null,-1)})),Z=D((function(){return Object(a["g"])("div",{class:"label"},"Contact",-1)}));function $(e,t,n,c,o,i){var r=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])("div",G,[Object(a["g"])("div",N,[Object(a["g"])("div",Q,null,512),Object(a["j"])(r,{to:"/",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[R,U]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/skills",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[z,K]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/portfolio",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[Y,q]})),_:1},8,["onClick"]),Object(a["j"])(r,{to:"/contact",onClick:c.moveIndicator},{default:Object(a["F"])((function(){return[X,Z]})),_:1},8,["onClick"])])])}var ee={name:"MediumSidebar",setup:function(){var e=Object(h["l"])(null),t=function(t){"A"==t.target.parentElement.nodeName?e.value.style.top="".concat(t.target.parentElement.offsetTop,"px"):e.value.style.top="".concat(t.target.offsetTop,"px")};return{indicator:e,moveIndicator:t}}};n("ada9");const te=y()(ee,[["render",$],["__scopeId","data-v-cc9fd66e"]]);var ne=te,ae={data:function(){return{largeScreen:!1,mediumScreen:!1,smallScreen:!1}},components:{Sidebar:S,Smallbar:V,MediumSidebar:ne},mounted:function(){window.innerWidth>=1200?this.largeScreen=!0:window.innerWidth>600?this.mediumScreen=!0:window.innerWidth<=600&&(this.smallScreen=!0)}};n("317e");const ce=y()(ae,[["render",o]]);var oe=ce,ie=n("6c02"),re=function(e){return Object(a["w"])("data-v-f4736e20"),e=e(),Object(a["u"])(),e},le={class:"home"},de=re((function(){return Object(a["g"])("div",{class:"main-box"},[Object(a["g"])("header",null,[Object(a["g"])("h1",null,"AASIM OMAR"),Object(a["g"])("h2",null,"Front End Developer")]),Object(a["g"])("main",null,[Object(a["g"])("p",null,[Object(a["i"])(" I am a self-taught web developer from Sudan. Passionate about coding and fond of great design. Looking for an opportunity to work with a tech company. "),Object(a["g"])("br"),Object(a["i"])("Currently open to freelance offerings and full-time job opportunities, whether on site or - and preferably - remote. ")])])],-1)})),ue=[de];function se(e,t,n,c,o,i){return Object(a["t"])(),Object(a["f"])("div",le,ue)}var be={name:"Home"};n("386a");const fe=y()(be,[["render",se],["__scopeId","data-v-f4736e20"]]);var ve=fe,pe={class:"skills main-box"},je=Object(a["h"])('<h1 class="main-head" data-v-1de21eed>My Skills :</h1><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Basic Skills:</h2><p data-v-1de21eed>Html</p><p data-v-1de21eed>Css</p><p data-v-1de21eed>Javascript ES6+</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Templating Languages</h2><p data-v-1de21eed>Pug.js</p><p data-v-1de21eed>Haml</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Css Frameworks</h2><p data-v-1de21eed>Bootstrap</p><p data-v-1de21eed>Tailwind Css</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Css Preprocessors</h2><p data-v-1de21eed>Less</p><p data-v-1de21eed>Sass</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Javascript Frameworks</h2><p data-v-1de21eed>Vue.js</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Vue.js Frameworks</h2><p data-v-1de21eed>Vuetify</p><p data-v-1de21eed>Qusar</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Related Skills</h2><p data-v-1de21eed>Version control with Git</p><p data-v-1de21eed>Deployment</p></div><div class="skill-box" data-v-1de21eed><h2 data-v-1de21eed>Soft Skills</h2><p data-v-1de21eed>Quick learner</p><p data-v-1de21eed>Hard worker</p><p data-v-1de21eed>Problem solver</p></div>',9),Oe=[je];function me(e,t,n,c,o,i){return Object(a["t"])(),Object(a["f"])("div",pe,Oe)}var he={components:{}};n("ce8d");const ge=y()(he,[["render",me],["__scopeId","data-v-1de21eed"]]);var ke=ge,ye={class:"portfolio main-box"},we=Object(a["h"])('<h1 class="main-head" data-v-eee86410>My Portfolio</h1><div class="portfolio-box" data-v-eee86410><h2 data-v-eee86410>Elitecorp Template</h2><p data-v-eee86410>This is Modren Template, Build By Basic Web Language And Some Liberary</p><h3 data-v-eee86410>The Technolgy Used in This Template is:</h3><ul data-v-eee86410><li data-v-eee86410>Html</li><li data-v-eee86410>Css3</li><li data-v-eee86410>Javascript</li></ul><h3 data-v-eee86410>And Some Library Like:</h3><ul data-v-eee86410><li data-v-eee86410>WOWjs</li><li data-v-eee86410>Mixitup</li><li data-v-eee86410>Fontello for Icons fonts</li></ul><div class="buttons" data-v-eee86410><a href="https://aasim-omar.github.io/Elitecorp-Template" target="_blank" data-v-eee86410>Preview</a><a href="https://github.com/Aasim-Omar/Elitecorp-Template" target="_blank" data-v-eee86410>View Source</a></div></div><div class="portfolio-box" data-v-eee86410><h2 data-v-eee86410>Javascript Todo</h2><p data-v-eee86410>Javascript Todo With Modren Feature, like Sync Your Data In Browser</p><h3 data-v-eee86410>The Technolgy Used in This Template is:</h3><ul data-v-eee86410><li data-v-eee86410>Html</li><li data-v-eee86410>Css3</li><li data-v-eee86410>Javascript</li></ul><p data-v-eee86410>And This App Support Local Storage Sync</p><div class="buttons" data-v-eee86410><a href="https://aasim-omar.github.io/javascript-todo" target="_blank" data-v-eee86410>Preview</a><a href="https://github.com/Aasim-Omar/javascript-todo" target="_blank" data-v-eee86410>View Source</a></div></div>',3),Se=[we];function Ce(e,t){return Object(a["t"])(),Object(a["f"])("div",ye,Se)}n("2341");const _e={},Ie=y()(_e,[["render",Ce],["__scopeId","data-v-eee86410"]]);var xe=Ie,Ae=(n("9911"),function(e){return Object(a["w"])("data-v-63df51e0"),e=e(),Object(a["u"])(),e}),Te={class:"contact main-box"},Fe=Ae((function(){return Object(a["g"])("h1",{class:"main-head"},"Contact Me:",-1)})),Pe=["href"],Me={class:"label"},Le={class:"link"};function Ee(e,t,n,c,o,i){return Object(a["t"])(),Object(a["f"])("div",Te,[Fe,Object(a["g"])("ul",null,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(o.contactInfo,(function(e){return Object(a["t"])(),Object(a["f"])("li",{key:e.icon},[Object(a["g"])("a",{href:e.href,target:"_blank"},[Object(a["g"])("div",{class:Object(a["p"])(["icon",e.icon])},null,2),Object(a["g"])("div",Me,Object(a["C"])(e.label),1),Object(a["g"])("div",Le,Object(a["C"])(e.link),1)],8,Pe)])})),128))])])}var He={data:function(){return{contactInfo:[{href:"https://mail.google.com",icon:"icon-mail",label:"My Gmail",link:"aasim.omar7"},{href:"https://www.linkedin.com/in/AasimOmar/",icon:"icon-linkedin",label:"Linkedin",link:"@AasimOmar"},{href:"https://twitter.com/AasimOmar",icon:"icon-twitter",label:"By Twitter",link:"@AasimOmar"},{href:"https://www.github.com/Aasim-Omar",icon:"icon-github",label:"Github",link:"@Aasim-Omar"},{href:"https://facebook.com/AasimOmar7/",icon:"icon-facebook",label:"By Facebook",link:"@AasimOmar7"},{href:"#",icon:"icon-phone",label:"By Phone",link:"+249117322272"},{href:"#",icon:"icon-location",label:"My Location",link:"Khartoum, Sudan"}]}}};n("e899");const Be=y()(He,[["render",Ee],["__scopeId","data-v-63df51e0"]]);var Je=Be,We=[{path:"/",name:"Home",component:ve},{path:"/skills",name:"Skills",component:ke},{path:"/portfolio",name:"Porfolio",component:xe},{path:"/contact",name:"Contact",component:Je}],Ve=Object(ie["a"])({history:Object(ie["b"])("/"),routes:We}),De=Ve;n("a6cf"),n("6672");Object(a["c"])(oe).use(De).mount("#app")},6672:function(e,t,n){},"72e3":function(e,t,n){},"7b9a":function(e,t,n){},"90e0":function(e,t,n){"use strict";n("c7b0")},a6cf:function(e,t,n){},ada9:function(e,t,n){"use strict";n("ded3")},c33a:function(e,t,n){},c7b0:function(e,t,n){},ce8d:function(e,t,n){"use strict";n("7b9a")},ded3:function(e,t,n){},e899:function(e,t,n){"use strict";n("ed8f")},ed8f:function(e,t,n){},f9e0:function(e,t,n){}});
//# sourceMappingURL=app.06c46d12.js.map