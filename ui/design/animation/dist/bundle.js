!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["@nextbnb/animation"]=r(require("react")):e["@nextbnb/animation"]=r(e.react)}(this,(function(e){return(()=>{var r={566:e=>{e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},474:(e,r,t)=>{var n=t(387);e.exports=function(e,r){if(null==e)return{};var t,a,i=n(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},387:e=>{e.exports=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}},875:e=>{e.exports=function(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}},857:e=>{"use strict";var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)},t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,r){return!1!==r.clone&&r.isMergeableObject(e)?c((t=e,Array.isArray(t)?[]:{}),e,r):e;var t}function a(e,r,t){return e.concat(r).map((function(e){return n(e,t)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(r){return e.propertyIsEnumerable(r)})):[]}(e))}function o(e,r){try{return r in e}catch(e){return!1}}function c(e,t,s){(s=s||{}).arrayMerge=s.arrayMerge||a,s.isMergeableObject=s.isMergeableObject||r,s.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(t);return l===Array.isArray(e)?l?s.arrayMerge(e,t,s):function(e,r,t){var a={};return t.isMergeableObject(e)&&i(e).forEach((function(r){a[r]=n(e[r],t)})),i(r).forEach((function(i){(function(e,r){return o(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,i)||(o(e,i)&&t.isMergeableObject(r[i])?a[i]=function(e,r){if(!r.customMerge)return c;var t=r.customMerge(e);return"function"==typeof t?t:c}(i,t)(e[i],r[i],t):a[i]=n(r[i],t))})),a}(e,t,s):n(t,s)}c.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,t){return c(e,t,r)}),{})};var s=c;e.exports=s},727:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$Animation:()=>ve,Animation:()=>we});var n=t(566),a=t.n(n),i=t(474),o=t.n(i);var c=t(297),s=t.n(c),l=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var r=e.prototype;return r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r,t=function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r}(this);r=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,r),this.tags.push(t)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(n);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(e){}}else n.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();const u=function(e){function r(e,n,s,l,d){for(var p,h,b,g,w,O=0,x=0,A=0,C=0,j=0,z=0,M=b=p=0,N=0,I=0,W=0,$=0,D=s.length,B=D-1,G="",H="",Y="",X="";N<D;){if(h=s.charCodeAt(N),N===B&&0!==x+C+A+O&&(0!==x&&(h=47===x?10:47),C=A=O=0,D++,B++),0===x+C+A+O){if(N===B&&(0<I&&(G=G.replace(f,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=s.charAt(N)}h=59}switch(h){case 123:for(p=(G=G.trim()).charCodeAt(0),b=1,$=++N;N<D;){switch(h=s.charCodeAt(N)){case 123:b++;break;case 125:b--;break;case 47:switch(h=s.charCodeAt(N+1)){case 42:case 47:e:{for(M=N+1;M<B;++M)switch(s.charCodeAt(M)){case 47:if(42===h&&42===s.charCodeAt(M-1)&&N+2!==M){N=M+1;break e}break;case 10:if(47===h){N=M+1;break e}}N=M}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<B&&s.charCodeAt(N)!==h;);}if(0===b)break;N++}switch(b=s.substring($,N),0===p&&(p=(G=G.replace(u,"").trim()).charCodeAt(0)),p){case 64:switch(0<I&&(G=G.replace(f,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:I=n;break;default:I=R}if($=(b=r(n,I,b,h,d+1)).length,0<T&&(w=c(3,b,I=t(R,G,W),n,E,S,$,h,d,l),G=I.join(""),void 0!==w&&0===($=(b=w.trim()).length)&&(h=0,b="")),0<$)switch(h){case 115:G=G.replace(k,o);case 100:case 109:case 45:b=G+"{"+b+"}";break;case 107:b=(G=G.replace(m,"$1 $2"))+"{"+b+"}",b=1===P||2===P&&i("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=G+b,112===l&&(H+=b,b="")}else b="";break;default:b=r(n,t(n,G,W),b,l,d+1)}Y+=b,b=W=I=M=p=0,G="",h=s.charCodeAt(++N);break;case 125:case 59:if(1<($=(G=(0<I?G.replace(f,""):G).trim()).length))switch(0===M&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&($=(G=G.replace(" ",":")).length),0<T&&void 0!==(w=c(1,G,n,e,E,S,H.length,l,d,l))&&0===($=(G=w.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),h=G.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){X+=G+s.charAt(N);break}default:58!==G.charCodeAt($-1)&&(H+=a(G,p,h,G.charCodeAt(2)))}W=I=M=p=0,G="",h=s.charCodeAt(++N)}}switch(h){case 13:case 10:47===x?x=0:0===1+p&&107!==l&&0<G.length&&(I=1,G+="\0"),0<T*L&&c(0,G,n,e,E,S,H.length,l,d,l),S=1,E++;break;case 59:case 125:if(0===x+C+A+O){S++;break}default:switch(S++,g=s.charAt(N),h){case 9:case 32:if(0===C+O+x)switch(j){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+x+O&&(I=W=1,g="\f"+g);break;case 108:if(0===C+x+O+_&&0<M)switch(N-M){case 2:112===j&&58===s.charCodeAt(N-3)&&(_=j);case 8:111===z&&(_=z)}break;case 58:0===C+x+O&&(M=N);break;case 44:0===x+A+C+O&&(I=1,g+="\r");break;case 34:case 39:0===x&&(C=C===h?0:0===C?h:C);break;case 91:0===C+x+A&&O++;break;case 93:0===C+x+A&&O--;break;case 41:0===C+x+O&&A--;break;case 40:if(0===C+x+O){if(0===p)switch(2*j+3*z){case 533:break;default:p=1}A++}break;case 64:0===x+A+C+O+M+b&&(b=1);break;case 42:case 47:if(!(0<C+O+A))switch(x){case 0:switch(2*h+3*s.charCodeAt(N+1)){case 235:x=47;break;case 220:$=N,x=42}break;case 42:47===h&&42===j&&$+2!==N&&(33===s.charCodeAt($+2)&&(H+=s.substring($,N+1)),g="",x=0)}}0===x&&(G+=g)}z=j,j=h,N++}if(0<($=H.length)){if(I=n,0<T&&void 0!==(w=c(2,H,I,e,E,S,$,l,d,l))&&0===(H=w).length)return X+H+Y;if(H=I.join(",")+"{"+H+"}",0!=P*_){switch(2!==P||i(H,2)||(_=0),_){case 111:H=H.replace(v,":-moz-$1")+H;break;case 112:H=H.replace(y,"::-webkit-input-$1")+H.replace(y,"::-moz-$1")+H.replace(y,":-ms-input-$1")+H}_=0}}return X+H+Y}function t(e,r,t){var a=r.trim().split(b);r=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var c=0;for(e=0===o?"":e[0]+" ";c<i;++c)r[c]=n(e,r[c],t).trim();break;default:var s=c=0;for(r=[];c<i;++c)for(var l=0;l<o;++l)r[s++]=n(e[l]+" ",a[c],t).trim()}return r}function n(e,r,t){var n=r.charCodeAt(0);switch(33>n&&(n=(r=r.trim()).charCodeAt(0)),n){case 38:return r.replace(g,"$1"+e.trim());case 58:return e.trim()+r.replace(g,"$1"+e.trim());default:if(0<1*t&&0<r.indexOf("\f"))return r.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function a(e,r,t,n){var o=e+";",c=2*r+3*t+4*n;if(944===c){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===P||2===P&&i(s,1)?"-webkit-"+s+s:s}if(0===P||2===P&&!i(o,1))return o;switch(c){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(j,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(r=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(r)){case 226:s=o.replace(w,"tb");break;case 232:s=o.replace(w,"tb-rl");break;case 220:s=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(r=(o=e).length-10,c=(s=(33===o.charCodeAt(r)?o.substring(0,r):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),r,t,n).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===t+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,r){var t=e.indexOf(1===r?":":"{"),n=e.substring(0,3!==r?t:10);return t=e.substring(t+1,e.length-1),M(2!==r?n:n.replace(A,"$1"),t,r)}function o(e,r){var t=a(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return t!==r+";"?t.replace(O," or ($1)").substring(4):"("+r+")"}function c(e,r,t,n,a,i,o,c,s,u){for(var f,d=0,p=r;d<T;++d)switch(f=z[d].call(l,e,p,t,n,a,i,o,c,s,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==r)return p}function s(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?P=1:(P=2,M=e):P=0),s}function l(e,t){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var a=c(-1,t,n,n,E,S,0,0,0,0);void 0!==a&&"string"==typeof a&&(t=a)}var i=r(R,n,t,0,0);return 0<T&&void 0!==(a=c(-2,i,n,n,E,S,i.length,0,0,0))&&(i=a),_=0,S=E=1,i}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,x=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,S=1,E=1,_=0,P=1,R=[],z=[],T=0,M=null,L=0;return l.use=function e(r){switch(r){case void 0:case null:T=z.length=0;break;default:if("function"==typeof r)z[T++]=r;else if("object"==typeof r)for(var t=0,n=r.length;t<n;++t)e(r[t]);else L=0|!!r}return e},l.set=s,void 0!==e&&s(e),l},f=function(e){var r=new WeakMap;return function(t){if(r.has(t))return r.get(t);var n=e(t);return r.set(t,n),n}};var d="/*|*/";function p(e){e&&h.current.insert(e+"}")}var h={current:null},b=function(e,r,t,n,a,i,o,c,s,l){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return h.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===c)return r+d;break;case 3:switch(c){case 102:case 112:return h.current.insert(t[0]+r),"";default:return r+(0===l?d:"")}case-2:r.split("/*|*/}").forEach(p)}},g=function(e,r){if(1===e&&108===r.charCodeAt(0)&&98===r.charCodeAt(2))return""},m="undefined"!=typeof document,y={},v=m?void 0:f((function(){var e=f((function(){return{}})),r={},t={};return function(n){return void 0===n||!0===n?r:!1===n?t:e(n)}}));const w=function(e){void 0===e&&(e={});var r,t=e.key||"css";void 0!==e.prefix&&(r={prefix:e.prefix});var n,a,i=new u(r),o={};if(m){n=e.container||document.head;var c=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(c,(function(e){e.getAttribute("data-emotion-"+t).split(" ").forEach((function(e){o[e]=!0})),e.parentNode!==n&&n.appendChild(e)}))}if(m)i.use(e.stylisPlugins)(b),a=function(e,r,t,n){var a=r.name;h.current=t,i(e,r.styles),n&&(f.inserted[a]=!0)};else{i.use(g);var s=y;(e.stylisPlugins||void 0!==e.prefix)&&(i.use(e.stylisPlugins),s=v(e.stylisPlugins||y)(e.prefix)),a=function(e,r,t,n){var a=r.name,o=function(e,r){var t=r.name;return void 0===s[t]&&(s[t]=i(e,r.styles)),s[t]}(e,r);return void 0===f.compat?(n&&(f.inserted[a]=!0),o):n?void(f.inserted[a]=o):o}}var f={key:t,sheet:new l({key:t,container:n,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:o,registered:{},insert:a};return f};var k="undefined"!=typeof document;function O(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]):n+=t+" "})),n}var x=function(e,r,t){var n=e.key+"-"+r.name;if((!1===t||!1===k&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=r.styles),void 0===e.inserted[r.name]){var a="",i=r;do{var o=e.insert("."+n,i,e.sheet,!0);k||void 0===o||(a+=o),i=i.next}while(void 0!==i);if(!k&&0!==a.length)return a}};const A=function(e){for(var r,t=0,n=0,a=e.length;a>=4;++n,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},C={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var j,S=/[A-Z]|^ms/g,E=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_=function(e){return 45===e.charCodeAt(1)},P=function(e){return null!=e&&"boolean"!=typeof e},R=(j={},function(e){return void 0===j[e]&&(j[e]=_(r=e)?r:r.replace(S,"-$&").toLowerCase()),j[e];var r}),z=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(E,(function(e,r,t){return M={name:r,styles:t,next:M},r}))}return 1===C[e]||_(e)||"number"!=typeof r||0===r?r:r+"px"};function T(e,r,t,n){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return M={name:t.name,styles:t.styles,next:M},t.name;if(void 0!==t.styles){var a=t.next;if(void 0!==a)for(;void 0!==a;)M={name:a.name,styles:a.styles,next:M},a=a.next;return t.styles+";"}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=T(e,r,t[a],!1);else for(var i in t){var o=t[i];if("object"!=typeof o)null!=r&&void 0!==r[o]?n+=i+"{"+r[o]+"}":P(o)&&(n+=R(i)+":"+z(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=r&&void 0!==r[o[0]]){var c=T(e,r,o,!1);switch(i){case"animation":case"animationName":n+=R(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<o.length;s++)P(o[s])&&(n+=R(i)+":"+z(i,o[s])+";")}return n}(e,r,t);case"function":if(void 0!==e){var i=M,o=t(e);return M=i,T(e,r,o,n)}}if(null==r)return t;var c=r[t];return void 0===c||n?t:c}var M,L=/label:\s*([^\s;\n{]+)\s*;/g,N=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";M=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=T(t,r,i,!1)):a+=i[0];for(var o=1;o<e.length;o++)a+=T(t,r,e[o],46===a.charCodeAt(a.length-1)),n&&(a+=i[o]);L.lastIndex=0;for(var c,s="";null!==(c=L.exec(a));)s+="-"+c[1];return{name:A(a)+s,styles:a,next:M}},I="undefined"!=typeof document,W=Object.prototype.hasOwnProperty,$=(0,c.createContext)("undefined"!=typeof HTMLElement?w():null),D=(0,c.createContext)({}),B=($.Provider,function(e){var r=function(r,t){return(0,c.createElement)($.Consumer,null,(function(n){return e(r,n,t)}))};return(0,c.forwardRef)(r)});if(!I){var G=function(e){function r(r,t,n){var a;return(a=e.call(this,r,t,n)||this).state={value:w()},a}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return(0,c.createElement)($.Provider,this.state,this.props.children(this.state.value))},r;var t,n}(c.Component);B=function(e){return function(r){return(0,c.createElement)($.Consumer,null,(function(t){return null===t?(0,c.createElement)(G,null,(function(t){return e(r,t)})):e(r,t)}))}}}var H="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Y=function(e,r){var t={};for(var n in r)W.call(r,n)&&(t[n]=r[n]);return t[H]=e,t},X=function(e,r,t,n){var a=null===t?r.css:r.css(t);"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var i=r[H],o=[a],s="";"string"==typeof r.className?s=O(e.registered,o,r.className):null!=r.className&&(s=r.className+" ");var l=N(o),u=x(e,l,"string"==typeof i);s+=e.key+"-"+l.name;var f={};for(var d in r)W.call(r,d)&&"css"!==d&&d!==H&&(f[d]=r[d]);f.ref=n,f.className=s;var p=(0,c.createElement)(i,f);if(!I&&void 0!==u){for(var h,b=l.name,g=l.next;void 0!==g;)b+=" "+g.name,g=g.next;return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("style",((h={})["data-emotion-"+e.key]=b,h.dangerouslySetInnerHTML={__html:u},h.nonce=e.sheet.nonce,h)),p)}return p},F=B((function(e,r,t){return"function"==typeof e.css?(0,c.createElement)(D.Consumer,null,(function(n){return X(r,e,n,t)})):X(r,e,null,t)}));const q=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return N(r)};var U=function(e,r){var t=arguments;if(null==r||!W.call(r,"css"))return c.createElement.apply(void 0,t);var n=t.length,a=new Array(n);a[0]=F,a[1]=Y(e,r);for(var i=2;i<n;i++)a[i]=t[i];return c.createElement.apply(null,a)},V=(c.Component,function e(r){for(var t=r.length,n=0,a="";n<t;n++){var i=r[n];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var c in o="",i)i[c]&&c&&(o&&(o+=" "),o+=c);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a});function Z(e,r,t){var n=[],a=O(e,n,t);return n.length<2?t:a+r(n)}B((function(e,r){return(0,c.createElement)(D.Consumer,null,(function(t){var n,a="",i="",o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=N(t,r.registered);if(I)x(r,o,!1);else{var c=x(r,o,!1);void 0!==c&&(a+=c)}return I||(i+=" "+o.name),r.key+"-"+o.name},s={css:o,cx:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Z(r.registered,o,V(t))},theme:t},l=e.children(s);return I||0===a.length?l:(0,c.createElement)(c.Fragment,null,(0,c.createElement)("style",((n={})["data-emotion-"+r.key]=i.substring(1),n.dangerouslySetInnerHTML={__html:a},n.nonce=r.sheet.nonce,n)),l)}))}));var J,K=function(e,r,t,n,a){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:a;return e===a?t:e},Q=[40,52,64].map((function(e){return e+"em"})),ee={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},re={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},te={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},ne={color:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ae=function(e,r){if("number"!=typeof r||r>=0)return K(e,r,r);var t=Math.abs(r),n=K(e,t,t);return"string"==typeof n?"-"+n:-1*n},ie=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return Object.assign({},e,((t={})[r]=ae,t))}),{}),oe=function(e){return function(r){void 0===r&&(r={});var t=Object.assign({},ee,r.theme||r),n={},a=function(e){return function(r){var t={},n=K(r,"breakpoints",Q),a=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var o="function"==typeof e[i]?e[i](r):e[i];if(null!=o)if(Array.isArray(o))for(var c=0;c<o.slice(0,a.length).length;c++){var s=a[c];s?(t[s]=t[s]||{},null!=o[c]&&(t[s][i]=o[c])):t[i]=o[c]}else t[i]=o}return t}}("function"==typeof e?e(t):e)(t);for(var i in a){var o=a[i],c="function"==typeof o?o(t):o;if("variant"!==i)if(c&&"object"==typeof c)n[i]=oe(c)(t);else{var s=K(re,i,i),l=K(ne,s),u=K(t,l,K(t,s,{})),f=K(ie,s,K)(u,c,c);if(te[s])for(var d=te[s],p=0;p<d.length;p++)n[d[p]]=f;else n[s]=f}else{var h=oe(K(t,c))(t);n=Object.assign({},n,h)}}return n}},ce=(t(857),function(e){if(!e)return null;var r={};for(var t in e)"sx"!==t&&(r[t]=e[t]);var n=function(e){if(e.sx||e.css)return function(r){return[oe(e.sx)(r),"function"==typeof e.css?e.css(r):e.css]}}(e);return n&&(r.css=n),r}),se=function(e,r){for(var t=[],n=arguments.length-2;n-- >0;)t[n]=arguments[n+2];return U.apply(void 0,[e,ce(r)].concat(t))},le=(s().createContext({__EMOTION_VERSION__:"10.1.1",theme:null}),"function"==typeof Symbol&&Symbol.for),ue=(le&&Symbol.for("react.element"),le&&Symbol.for("react.forward_ref"),t(875));function fe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?fe(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var pe=function(){var e=q.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}(J||(J=t.n(ue)()(["\n  0% {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 0.3;\n  }\n"]))),he={wrapper:{width:"36px",height:"20px",display:"flex",justifyContent:"space-around",alignItems:"center"},content:{display:"block",width:"8px",height:"8px",borderRadius:"4px"},first:{animation:"".concat(pe," 1s infinite")},second:{animation:"".concat(pe," 1s infinite"),animationDelay:"0.3s"},third:{animation:"".concat(pe," 1s infinite"),animationDelay:"0.6s"}};function be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ge(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?be(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var me={web:{wrapper:de({},he.wrapper),content:de({},he.content),first:de({},he.first),second:de({},he.second),third:de({},he.third)},theme:{}}.web,ye=function(e){var r=e.dark;return se("div",{css:me.wrapper},se("span",{sx:ge({},r?{bg:"black"}:{bg:"white"}),css:ge(ge({},me.content),me.first)}),se("span",{sx:ge({},r?{bg:"black"}:{bg:"white"}),css:ge(ge({},me.content),me.second)}),se("span",{sx:ge({},r?{bg:"black"}:{bg:"white"}),css:ge(ge({},me.content),me.third)}))},ve={LOADING:"loading"},we=function(e){var r=e.variant,t=void 0===r?ve.LOADING:r,n=e.extendsTo,i=o()(e,["variant","extendsTo"]),c=a()({},ve.LOADING,se(ye,i));return se("div",{"data-testid":"".concat(t,"-animation"),className:n},c[t])}},297:r=>{"use strict";r.exports=e}},t={};function n(e){if(t[e])return t[e].exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}return n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(727)})()}));