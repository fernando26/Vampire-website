/*
 * Copyright 2012 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function(window,document,undefined){
var i=void 0,k=!0,l=null,n=!1;function p(a){return function(){return this[a]}}var q;function r(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}};function aa(a,c){this.G=a;this.z=c||a;this.H=this.z.document;this.W=i}aa.prototype.createElement=function(a,c,b){a=this.H.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?s(this,a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.H.createTextNode(b));return a};function v(a,c,b){a=a.H.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function ba(a){function c(){document.body?a():setTimeout(c,0)}c()}
function w(a){a.parentNode&&a.parentNode.removeChild(a)}function x(a,c){return a.createElement("link",{rel:"stylesheet",href:c})}function y(a,c){return a.createElement("script",{src:c})}function z(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}function A(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}
function ca(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return k;return n}function s(a,c,b){if(a.W===i){var d=a.H.createElement("p");d.innerHTML='<a style="top:1px;">w</a>';a.W=/top/.test(d.getElementsByTagName("a")[0].getAttribute("style"))}a.W?c.setAttribute("style",b):c.style.cssText=b}function B(a){var c=a.z.location.protocol;"about:"==c&&(c=a.G.location.protocol);return"https:"==c?"https:":"http:"};function C(a,c,b,d,e,f,g,j){this.Ba=a;this.Ha=c;this.pa=b;this.oa=d;this.Ea=e;this.Da=f;this.na=g;this.Ia=j}q=C.prototype;q.getName=p("Ba");q.xa=p("Ha");q.Z=p("pa");q.ua=p("oa");q.va=p("Ea");q.wa=p("Da");q.ta=p("na");q.w=p("Ia");function D(a,c){this.a=a;this.o=c}var da=new C("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",i,n);
D.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=E(this);var c=F(this),b=G(this.a,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1],e=H(d),f=H(c);a=new C(b,d,b,d,a,c,I(this.o),"Windows"==a&&6<=e||"Windows Phone"==a&&8<=f)}else a=new C("MSIE","Unknown","MSIE","Unknown",a,c,I(this.o),n)}else if(-1!=this.a.indexOf("Opera"))a:if(c=a="Unknown",b=G(this.a,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=G(this.a,
/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.a.indexOf("Opera Mini/"))b=G(this.a,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new C("OperaMini",b,a,c,E(this),F(this),I(this.o),n);else{if(-1!=this.a.indexOf("Version/")&&(b=G(this.a,/Version\/([\d\.]+)/,1),""!=b)){a=new C("Opera",b,a,c,E(this),F(this),I(this.o),10<=H(b));break a}b=G(this.a,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new C("Opera",b,a,c,E(this),F(this),I(this.o),10<=H(b)):new C("Opera","Unknown",a,c,E(this),F(this),I(this.o),n)}else-1!=this.a.indexOf("AppleWebKit")?
(a=E(this),c=F(this),b=G(this.a,/AppleWebKit\/([\d\.\+]+)/,1),""==b&&(b="Unknown"),d="Unknown",-1!=this.a.indexOf("Chrome")||-1!=this.a.indexOf("CrMo")||-1!=this.a.indexOf("CriOS")?d="Chrome":-1!=this.a.indexOf("Safari")?d="Safari":-1!=this.a.indexOf("AdobeAIR")&&(d="AdobeAIR"),e="Unknown",-1!=this.a.indexOf("Version/")?e=G(this.a,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=G(this.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=G(this.a,/AdobeAIR\/([\d\.]+)/,1)),f=n,"AdobeAIR"==d?(f=G(e,/\d+\.(\d+)/,
1),f=2<H(e)||2==H(e)&&5<=parseInt(f,10)):(f=G(b,/\d+\.(\d+)/,1),f=526<=H(b)||525<=H(b)&&13<=parseInt(f,10)),a=new C(d,e,"AppleWebKit",b,a,c,I(this.o),f)):-1!=this.a.indexOf("Gecko")?(c=a="Unknown",d=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=G(this.a,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=G(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=H(b)&&5<=parseInt(d,10))):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),b=G(this.a,/rv:([^\)]+)/,1),""==b?b="Unknown":d||(d=H(b),e=parseInt(G(b,/\d+\.(\d+)/,1),10),f=parseInt(G(b,
/\d+\.\d+\.(\d+)/,1),10),d=1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=l||b.match(/1\.9\.1\.[\d\.]+/)!=l),a=new C(a,c,"Gecko",b,E(this),F(this),I(this.o),d)):a=da;return a};function E(a){var c=G(a.a,/(iPod|iPad|iPhone|Android|Windows Phone)/,1);if(""!=c)return c;a=G(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function F(a){var c=G(a.a,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=G(a.a,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=G(a.a,/(iPhone )?OS ([\d_]+)/,2))return c;return(a=G(a.a,/Linux ([i\d]+)/,1))?a:"Unknown"}function H(a){a=G(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function G(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function I(a){if(a.documentMode)return a.documentMode};function ea(a,c,b){this.c=a;this.h=c;this.X=b;this.j="wf";this.g=new ga("-")}function ha(a){z(a.h,a.g.e(a.j,"loading"));J(a,"loading")}function K(a){A(a.h,a.g.e(a.j,"loading"));ca(a.h,a.g.e(a.j,"active"))||z(a.h,a.g.e(a.j,"inactive"));J(a,"inactive")}function J(a,c,b,d){if(a.X[c])a.X[c](b,d)};function ia(){this.ga={}}function ja(a,c,b){var d=[],e;for(e in c)if(c.hasOwnProperty(e)){var f=a.ga[e];f&&d.push(f(c[e],b))}return d};function L(a,c,b,d,e){this.c=a;this.B=c;this.k=b;this.u=d;this.F=e;this.N=0;this.ka=this.fa=n}L.prototype.watch=function(a,c,b,d,e){for(var f=a.length,g=0;g<f;g++){var j=a[g];c[j]||(c[j]=["n4"]);this.N+=c[j].length}e&&(this.fa=e);for(g=0;g<f;g++)for(var j=a[g],e=c[j],m=b[j],h=0,o=e.length;h<o;h++){var t=e[h],u=this.B,O=j,fa=t;z(u.h,u.g.e(u.j,O,fa,"loading"));J(u,"fontloading",O,fa);u=r(this,this.qa);O=r(this,this.ra);(new d(u,O,this.c,this.k,this.u,this.F,j,t,m)).start()}};
L.prototype.qa=function(a,c){var b=this.B;A(b.h,b.g.e(b.j,a,c,"loading"));A(b.h,b.g.e(b.j,a,c,"inactive"));z(b.h,b.g.e(b.j,a,c,"active"));J(b,"fontactive",a,c);this.ka=k;ka(this)};L.prototype.ra=function(a,c){var b=this.B;A(b.h,b.g.e(b.j,a,c,"loading"));ca(b.h,b.g.e(b.j,a,c,"active"))||z(b.h,b.g.e(b.j,a,c,"inactive"));J(b,"fontinactive",a,c);ka(this)};
function ka(a){0==--a.N&&a.fa&&(a.ka?(a=a.B,A(a.h,a.g.e(a.j,"loading")),A(a.h,a.g.e(a.j,"inactive")),z(a.h,a.g.e(a.j,"active")),J(a,"active")):K(a.B))};function M(a,c,b,d,e,f,g,j,m){this.K=a;this.aa=c;this.c=b;this.k=d;this.u=e;this.F=f;this.Aa=new la;this.v=new N;this.O=g;this.C=j;this.sa=m||"BESbswy";this.R=ma(this,"arial,'URW Gothic L',sans-serif");this.S=ma(this,"Georgia,'Century Schoolbook L',serif");this.da=this.R;this.ea=this.S;this.T=P(this,"arial,'URW Gothic L',sans-serif");this.U=P(this,"Georgia,'Century Schoolbook L',serif")}M.prototype.start=function(){this.ja=this.F();this.M()};
M.prototype.M=function(){var a=this.k.p(this.T),c=this.k.p(this.U);(this.R!=a||this.S!=c)&&this.da==a&&this.ea==c?Q(this,this.K):5E3<=this.F()-this.ja?Q(this,this.aa):(this.da=a,this.ea=c,na(this))};function na(a){a.u(function(a,b){return function(){b.call(a)}}(a,a.M),25)}function Q(a,c){w(a.T);w(a.U);c(a.O,a.C)}function ma(a,c){var b=P(a,c,k),d=a.k.p(b);w(b);return d}function P(a,c,b){c=a.c.createElement("span",{style:R(a,c,a.C,b)},a.sa);v(a.c,"body",c);return c}
function R(a,c,b,d){b=a.v.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Aa.quote(a.O)+",")+c+";"+b};function S(a,c,b,d){this.G=a;this.Y=c;this.u=b;this.a=d;this.P=this.Q=0}S.prototype.q=function(a,c){this.Y.ga[a]=c};S.prototype.load=function(a){var c=a.context||this.G;this.c=new aa(this.G,c);c=new ea(this.c,c.document.documentElement,a);this.a.w()?oa(this,c,a):K(c)};S.prototype.ya=function(a,c,b,d){var e=a.$?a.$():M;d?a.load(r(this,this.Ca,c,b,e)):(a=0==--this.Q,this.P--,a&&(0==this.P?K(c):ha(c)),b.watch([],{},{},e,a))};
S.prototype.Ca=function(a,c,b,d,e,f){var g=0==--this.Q;g&&ha(a);this.u(r(this,function(a,b,c,d,e,f){a.watch(b,c||{},d||{},e,f)},c,d,e,f,b,g))};function oa(a,c,b){b=ja(a.Y,b,a.c);a.P=a.Q=b.length;for(var d=new L(a.c,c,{p:function(a){return a.offsetWidth}},a.u,function(){return(new Date).getTime()}),e=0,f=b.length;e<f;e++){var g=b[e];g.A(a.a,r(a,a.ya,g,c,d))}};function ga(a){this.za=a||"-"}ga.prototype.e=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.za)};function la(){this.ia="'"}la.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.ia+d+this.ia)}return c.join(",")};function N(){this.J=pa;this.m=qa}var pa=["font-style","font-weight"],qa={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function T(a,c,b){this.ba=a;this.Fa=c;this.m=b}T.prototype.compact=function(a,c){for(var b=0;b<this.m.length;b++)if(c==this.m[b][1]){a[this.ba]=this.m[b][0];break}};
T.prototype.expand=function(a,c){for(var b=0;b<this.m.length;b++)if(c==this.m[b][0]){a[this.ba]=this.Fa+":"+this.m[b][1];break}};N.prototype.compact=function(a){for(var c=["n","4"],a=a.split(";"),b=0,d=a.length;b<d;b++){var e=a[b].replace(/\s+/g,"").split(":");if(2==e.length){var f=e[1];a:{for(var e=e[0],g=0;g<this.J.length;g++)if(e==this.J[g]){e=new T(g,e,this.m[e]);break a}e=l}e&&e.compact(c,f)}}return c.join("")};
N.prototype.expand=function(a){if(2!=a.length)return l;for(var c=[l,l],b=0,d=this.J.length;b<d;b++){var e=this.J[b];(new T(b,e,this.m[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":l};var U=window.WebFont=function(){var a=(new D(navigator.userAgent,document)).parse();return new S(window,new ia,function(a,b){setTimeout(a,b)},a)}();U.load=U.load;U.addModule=U.q;C.prototype.getName=C.prototype.getName;C.prototype.getVersion=C.prototype.xa;C.prototype.getEngine=C.prototype.Z;C.prototype.getEngineVersion=C.prototype.ua;C.prototype.getPlatform=C.prototype.va;C.prototype.getPlatformVersion=C.prototype.wa;C.prototype.getDocumentMode=C.prototype.ta;C.prototype.isSupportingWebFont=C.prototype.w;function V(a,c,b){this.a=a;this.c=c;this.d=b;this.f=[];this.s={}}V.prototype.A=function(a,c){var b=this,d=b.d.projectId;if(d){var e=y(b.c,b.D(d));e.id="__MonotypeAPIScript__"+d;e.onreadystatechange=function(a){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=l,e.onload(a)};var f=this.c.z;e.onload=function(){if(f["__mti_fntLst"+d]){var e=f["__mti_fntLst"+d]();if(e&&e.length){var j;for(j=0;j<e.length;j++)b.f.push(e[j].fontfamily)}}c(a.w())};v(this.c,"head",e)}else c(k)};
V.prototype.D=function(a){var c=B(this.c),b=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+b+"/"+a+".js"};V.prototype.load=function(a){a(this.f,this.s)};U.q("monotype",function(a,c){var b=(new D(navigator.userAgent,document)).parse();return new V(b,c,a)});function W(a,c){this.c=a;this.d=c;this.f=[];this.s={}}W.prototype.D=function(a){var c=B(this.c);return(this.d.api||c+"//use.typekit.com")+"/"+a+".js"};W.prototype.A=function(a,c){var b=this.d.id,d=this.d,e=this.c.z,f=this;b?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[b]=function(b){b(a,d,function(a,b,d){f.f=b;f.s=d;c(a)})},v(this.c,"head",y(this.c,this.D(b)))):c(k)};W.prototype.load=function(a){a(this.f,this.s)};
U.q("typekit",function(a,c){return new W(c,a)});function X(a,c,b,d,e,f,g,j,m){X.Ga.call(this,a,c,b,d,e,f,g,j,m);a=["Times New Roman","Arial","Times","Sans","Serif"];c=a.length;b={};d=P(this,a[0],k);b[this.k.p(d)]=k;for(e=1;e<c;e++)f=a[e],s(this.c,d,R(this,f,this.C,k)),b[this.k.p(d)]=k,"4"!=this.C[1]&&(s(this.c,d,R(this,f,this.C[0]+"4",k)),b[this.k.p(d)]=k);w(d);this.t=b;this.ma=n}(function(a,c){function b(){}b.prototype=a.prototype;c.prototype=new b;c.Ga=a;c.Ja=a.prototype})(M,X);var ra={Arimo:k,Cousine:k,Tinos:k};
X.prototype.M=function(){var a=this.k.p(this.T),c=this.k.p(this.U);!this.ma&&a==c&&this.t[a]&&(this.t={},this.ma=this.t[a]=k);(this.R!=a||this.S!=c)&&!this.t[a]&&!this.t[c]?Q(this,this.K):5E3<=this.F()-this.ja?this.t[a]&&this.t[c]&&ra[this.O]?Q(this,this.K):Q(this,this.aa):na(this)};function sa(a,c){this.L=a?a:c+ta;this.f=[];this.V=[]}var ta="//fonts.googleapis.com/css";sa.prototype.e=function(){if(0==this.f.length)throw Error("No fonts to load !");if(-1!=this.L.indexOf("kit="))return this.L;for(var a=this.f.length,c=[],b=0;b<a;b++)c.push(this.f[b].replace(/ /g,"+"));a=this.L+"?family="+c.join("%7C");0<this.V.length&&(a+="&subset="+this.V.join(","));return a};function ua(a){this.f=a;this.ha=[];this.la={};this.I={};this.v=new N}
var va={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},wa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},xa={i:"i",italic:"i",n:"n",normal:"n"},ya=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ua.prototype.parse=function(){for(var a=this.f.length,c=0;c<a;c++){var b=this.f[c].split(":"),d=b[0].replace(/\+/g," "),e=["n4"];if(2<=b.length){var f;var g=b[1];f=[];if(g)for(var g=g.split(","),j=g.length,m=0;m<j;m++){var h;h=g[m];if(h.match(/^[\w]+$/))if(h=ya.exec(h.toLowerCase()),h==l)h="";else{var o=i;o=h[1];if(o==l)o="4";else var t=wa[o],o=t?t:isNaN(o)?"4":o.substr(0,1);h=(h=this.v.expand([h[2]==l?"n":xa[h[2]],o].join("")))?this.v.compact(h):l}else h="";h&&f.push(h)}0<f.length&&(e=f);3==b.length&&
(b=b[2],f=[],b=!b?f:b.split(","),0<b.length&&(b=va[b[0]])&&(this.I[d]=b))}this.I[d]||(b=va[d])&&(this.I[d]=b);this.ha.push(d);this.la[d]=e}};function Y(a,c,b){this.a=a;this.c=c;this.d=b}Y.prototype.A=function(a,c){c(a.w())};Y.prototype.$=function(){return"AppleWebKit"==this.a.Z()?X:M};Y.prototype.load=function(a){"MSIE"==this.a.getName()&&this.d.blocking!=k?ba(r(this,this.ca,a)):this.ca(a)};
Y.prototype.ca=function(a){for(var c=this.c,b=new sa(this.d.api,B(c)),d=this.d.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&b.V.push(g.pop());var j="";2==g.length&&""!=g[1]&&(j=":");b.f.push(g.join(j))}d=new ua(d);d.parse();v(c,"head",x(c,b.e()));a(d.ha,d.la,d.I)};U.q("google",function(a,c){var b=(new D(navigator.userAgent,document)).parse();return new Y(b,c,a)});function Z(a,c){this.c=a;this.d=c}Z.prototype.load=function(a){for(var c=this.d.urls||[],b=this.d.families||[],d=0,e=c.length;d<e;d++)v(this.c,"head",x(this.c,c[d]));a(b)};Z.prototype.A=function(a,c){return c(a.w())};U.q("custom",function(a,c){return new Z(c,a)});function $(a,c){this.c=a;this.d=c;this.f=[];this.s={};this.v=new N}$.prototype.D=function(a){return B(this.c)+(this.d.api||"//f.fontdeck.com/s/css/js/")+(this.c.z.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
$.prototype.A=function(a,c){var b=this.d.id,d=this.c.z,e=this;b?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[b]=function(a,b){for(var d=0,m=b.fonts.length;d<m;++d){var h=b.fonts[d];e.f.push(h.name);e.s[h.name]=[e.v.compact("font-weight:"+h.weight+";font-style:"+h.style)]}c(a)},v(this.c,"head",y(this.c,this.D(b)))):c(k)};$.prototype.load=function(a){a(this.f,this.s)};U.q("fontdeck",function(a,c){return new $(c,a)});function za(a,c){this.c=a;this.d=c}var Aa={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};za.prototype.A=function(a,c){return c(a.w())};
za.prototype.load=function(a){var c,b;v(this.c,"head",x(this.c,B(this.c)+"//webfonts.fontslive.com/css/"+this.d.key+".css"));var d=this.d.families,e,f;e=[];f={};for(var g=0,j=d.length;g<j;g++){b=b=c=i;b=d[g].split(":");c=b[0];if(b[1]){b=b[1].split(",");for(var m=[],h=0,o=b.length;h<o;h++){var t=b[h];if(t){var u=Aa[t];m.push(u?u:t)}}b=m}else b=["n4"];e.push(c);f[c]=b}a(e,f)};U.q("ascender",function(a,c){return new za(c,a)});window.WebFontConfig&&U.load(window.WebFontConfig);
})(this,document);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text"); //data is id of planet
	var f=document.getElementById(data); // f is object of the planet
	ev.target.appendChild(f);

	var what=ev.target.id;
	var discount_amount=f.id;
	var discount = 0.00;
	var months = "";

	if (discount_amount == "drag1") {

		months = "three";

		if (what == "div1") {
			discount = 14.00;
		}
		else if (what == "div2") {
			discount = 34.00;
		}
	}
	else if (discount_amount == "drag2") {

		months = "six";

		if (what == "div1") {
			discount = 9.00;
		}
		else if (what == "div2") {
			discount = 29.00;
		}
	}
	else if (discount_amount == "drag3") {

		months = "twelve";

		if (what == "div1") {
			discount = 0.00;
		}
		else if (what == "div2") {
			discount = 14.00;
		}
	}


	if (what == "div1") {
		alert('Congratulations! You have just signed up for ' + months + ' months of membership in the group Type A (starving college students). Your first months fee will be $' + discount + ' and the remaining five months will be $19.00');
	}
	else if (what == "div2") {
		alert('Congratulations! You have just signed up for ' + months + ' months of membership in the group All Types (healty, fulley employed professionals). Your first months fee will be $' + discount + ' and the remaining five months will be $39.00');
	}
	else {
		alert('Congratulations! You have just signed up for ' + months + ' months of membership in the group Attourneys. You do not have to pay anything for this category.');
	}

	document.getElementById("regular_body").style.visibility = "hidden";
	document.getElementById("finished_body").style.visibility = "visible";
}	

function drop2(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text"); //data is id of planet
	var f=document.getElementById(data); // f is object of the planet
	ev.target.appendChild(f);
}	

