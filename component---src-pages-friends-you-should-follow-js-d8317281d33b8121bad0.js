(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7w6I":function(e,t,n){"use strict";n.r(t);n("pJf4");var r=n("U6JG"),a=n("q1tI"),o=n.n(a),i=n("vOnD"),c=n("p3AD"),s=(n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),n("17x9")),u=n.n(s),l=n("8+s/"),f=n.n(l),d=n("bmMU"),p=n.n(d),h=n("J7Mx"),m=n("MZZl"),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v,w,C,A=f()(h.d,h.b,h.c)((function(){return null})),O=(v=A,C=w=function(e){function t(){return y(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.g.SCRIPT:case m.g.NOSCRIPT:return{innerHTML:t};case m.g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return g({},r,((t={})[n.type]=[].concat(r[n.type]||[],[g({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case m.g.TITLE:return g({},a,((t={})[r.type]=i,t.titleAttributes=g({},o),t));case m.g.BODY:return g({},a,{bodyAttributes:g({},o)});case m.g.HTML:return g({},a,{htmlAttributes:g({},o)})}return g({},a,((n={})[r.type]=g({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=g({},t);return Object.keys(e).forEach((function(t){var r;n=g({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),c=Object(h.a)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case m.g.LINK:case m.g.META:case m.g.NOSCRIPT:case m.g.SCRIPT:case m.g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),r=g({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.a.createElement(v,r)},b(t,null,[{key:"canUseDOM",set:function(e){v.canUseDOM=e}}]),t}(o.a.Component),w.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},w.defaultProps={defer:!0,encodeSpecialCharacters:!0},w.peek=v.peek,w.rewind=function(){var e=v.rewind();return e||(e=Object(h.c)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},C);O.renderStatic=O.rewind;var S=n("Wbzz"),L="Friends you should follow",I="List of my friends I worked with and you should definitely follow",P=i.a.div.withConfig({displayName:"friends-you-should-follow__Friends",componentId:"sc-18m7qr3-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem;@media screen and (max-width:768px){grid-template-columns:repeat(2,1fr);}}"]),_=i.a.article.withConfig({displayName:"friends-you-should-follow__Friend",componentId:"sc-18m7qr3-1"})(["header{margin-bottom:0.7rem;}img{width:100%;}"]);t.default=function(){var e=r.data.allFriendsJson.edges;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",color:"var(--textNormal)",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(3/4)}},o.a.createElement(S.Link,{to:"/"},"Back to blog"),o.a.createElement(O,{htmlAttributes:{lang:"en_US",prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},title:L,meta:[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:I},{property:"og:title",content:L},{property:"og:description",content:I},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:L},{name:"twitter:description",content:I},{property:"fb:app_id",content:"235346886871248"}]}),o.a.createElement("h1",{style:{color:"var(--header)"}},"List of friends"),o.a.createElement("p",null,"Here is an uncomplete and unordered list of my web friends that you should follow. I had the chance to work with them on different projects. They support my humor, so they are wonderful people."),o.a.createElement(P,null,e.map((function(e){var t=e.node;return o.a.createElement(_,null,o.a.createElement("a",{key:t.id,href:t.site},o.a.createElement("header",null,t.name)),o.a.createElement("img",{loading:"lazy",src:t.image,alt:t.name+" profile picture"}))}))))}},J7Mx:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return T}));n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX");var r,a=n("q1tI"),o=n.n(a),i=n("MgzW"),c=n.n(i),s=n("MZZl"),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=b(e,s.g.TITLE),n=b(e,s.c.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=b(e,s.c.DEFAULT_TITLE);return t||r||void 0},p=function(e){return b(e,s.c.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return l({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[s.g.BASE]})).map((function(e){return e[s.g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},g=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&C("Helmet: "+e+' should be of type "Array". Instead found type "'+u(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===s.h.REL&&"canonical"===e[n].toLowerCase()||u===s.h.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==s.h.INNER_HTML&&c!==s.h.CSS_TEXT&&c!==s.h.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],l=c()({},r[u],a[u]);r[u]=l}return e}),[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},T=function(e){return{baseTag:m([s.h.HREF],e),bodyAttributes:h(s.a.BODY,e),defer:b(e,s.c.DEFER),encode:b(e,s.c.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(s.a.HTML,e),linkTags:g(s.g.LINK,[s.h.REL,s.h.HREF],e),metaTags:g(s.g.META,[s.h.NAME,s.h.CHARSET,s.h.HTTPEQUIV,s.h.PROPERTY,s.h.ITEM_PROP],e),noscriptTags:g(s.g.NOSCRIPT,[s.h.INNER_HTML],e),onChangeClientState:p(e),scriptTags:g(s.g.SCRIPT,[s.h.SRC,s.h.INNER_HTML],e),styleTags:g(s.g.STYLE,[s.h.CSS_TEXT],e),title:d(e),titleAttributes:h(s.a.TITLE,e)}},y=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){y(e)}),0)}),E=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,w="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,C=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,O=function(e){A&&w(A),e.defer?A=v((function(){S(e,(function(){A=null}))})):(S(e),A=null)},S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;P(s.g.BODY,r),P(s.g.HTML,a),I(d,p);var h={baseTag:_(s.g.BASE,n),linkTags:_(s.g.LINK,o),metaTags:_(s.g.META,i),noscriptTags:_(s.g.NOSCRIPT,c),scriptTags:_(s.g.SCRIPT,l),styleTags:_(s.g.STYLE,f)},m={},g={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=h[e].oldTags)})),t&&t(),u(e,m,g)},L=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=L(e)),P(s.g.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.b),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(s.b):n.getAttribute(s.b)!==i.join(",")&&n.setAttribute(s.b,i.join(","))}},_=function(e,t){var n=document.head||document.querySelector(s.g.HEAD),r=n.querySelectorAll(e+"["+s.b+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.h.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.h.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(s.b,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[s.e[n]||n]=e[n],t}),t)},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[s.d[n]||n]=e[n],t}),t)},j=function(e,t,n){switch(e){case s.g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[s.b]=!0,a=R(n,r),[o.a.createElement(s.g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=M(n),o=L(t);return a?"<"+e+" "+s.b+'="true" '+a+">"+f(o,r)+"</"+e+">":"<"+e+" "+s.b+'="true">'+f(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case s.a.BODY:case s.a.HTML:return{toComponent:function(){return R(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[s.b]=!0,r);return Object.keys(t).forEach((function(e){var n=s.e[e]||e;if(n===s.h.INNER_HTML||n===s.h.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===s.h.INNER_HTML||e===s.h.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===s.f.indexOf(e);return t+"<"+e+" "+s.b+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:j(s.g.BASE,t,r),bodyAttributes:j(s.a.BODY,n,r),htmlAttributes:j(s.a.HTML,a,r),link:j(s.g.LINK,o,r),meta:j(s.g.META,i,r),noscript:j(s.g.NOSCRIPT,c,r),script:j(s.g.SCRIPT,u,r),style:j(s.g.STYLE,l,r),title:j(s.g.TITLE,{title:d,titleAttributes:p},r)}}}).call(this,n("yLpj"))},MZZl:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l}));n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},a={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(Object.keys(a).map((function(e){return a[e]})),{CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"}),i={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},c={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},s=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),u=[a.NOSCRIPT,a.SCRIPT,a.STYLE],l="data-react-helmet"},U6JG:function(e){e.exports=JSON.parse('{"data":{"allFriendsJson":{"edges":[{"node":{"id":"cfcf8a73-a1d8-55d1-a2ad-6e433dd3c0b1","name":"Marvin Frachet","image":"https://avatars3.githubusercontent.com/u/3874873","site":"https://mfrachet.github.io/"}},{"node":{"id":"af6d7974-feac-5dbf-b174-df8627d9fe39","name":"Matthieu Lux","image":"https://avatars0.githubusercontent.com/u/475895","site":"https://swiip.now.sh/"}},{"node":{"id":"7b7f0c80-efa1-5d89-ba52-9792d527c7a0","name":"Florent Berthelot","image":"https://avatars0.githubusercontent.com/u/6927852","site":"http://berthelot.io/"}},{"node":{"id":"20b243bf-e6e1-58d2-8702-def5090323a9","name":"Cécile Frey Foucault","image":"https://pbs.twimg.com/profile_images/1081180282978484224/WFXPlDwl_400x400.jpg","site":"https://twitter.com/cecilefreydf"}},{"node":{"id":"a9740526-cf11-5917-b1ed-2c4caefb8e54","name":"Florent Lepretre","image":"https://avatars0.githubusercontent.com/u/1705687","site":"https://github.com/flepretre"}},{"node":{"id":"ae2f7868-8f3d-543a-b3f6-f87ff374aa19","name":"Baptiste Candellier","image":"https://pbs.twimg.com/profile_images/1109542968795504640/K7GdCt_P_400x400.jpg","site":"https://outadoc.fr/"}},{"node":{"id":"59f117eb-158e-57c2-afc0-9a0cd2a04c51","name":"Nicolas Cuillery","image":"https://avatars1.githubusercontent.com/u/4425455","site":"http://www.cuillery.com/"}},{"node":{"id":"1c5eb8e8-22e2-5eaa-b991-5837dc99f2ae","name":"Pascal Martin","image":"https://avatars3.githubusercontent.com/u/193481","site":"https://blog.pascal-martin.fr/"}},{"node":{"id":"6f67ebfd-3be3-5772-b059-cedc78a23c16","name":"Clémence Piteau","image":"https://pbs.twimg.com/profile_images/786952214845808640/SNQA2Zvn_400x400.jpg","site":"https://clemencepiteau.com/"}},{"node":{"id":"c895fecd-b8f7-5f5b-a11e-8a9b193f07ac","name":"Nicolas Payot","image":"https://avatars1.githubusercontent.com/u/463319","site":"https://nicolaspayot.com/"}},{"node":{"id":"4f760012-f3c6-550c-8fe9-f83c5bd4af82","name":"Mathieu Mure","image":"https://avatars2.githubusercontent.com/u/7687610","site":"https://github.com/mathieumure"}},{"node":{"id":"9baa8fb6-edd4-5521-8085-4de76d382414","name":"Yann Verry","image":"https://avatars3.githubusercontent.com/u/708802","site":"https://yann.verry.org/"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-friends-you-should-follow-js-d8317281d33b8121bad0.js.map