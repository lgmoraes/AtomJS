!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return e.offsetWidth>0}function i(){return window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth}function a(){return window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight}function c(){var e=navigator.userAgent;return-1!==e.indexOf("Firefox")?"FIREFOX":-1!==e.indexOf("Trident")?"IE":-1!==e.indexOf("OPR")?"OPERA":-1!==e.indexOf("Chrome")?"CHROME":-1!==e.indexOf("Safari")?"SAFARI":"UNKNOWN"}function u(e,t){e.style.top=t.offsetHeight/2-e.offsetHeight/2+"px",e.style.left=t.offsetWidth/2-e.offsetWidth/2+"px"}function l(e){return e.hasOwnProperty("fadeOut_timeout")&&null!==e.fadeOut_timeout}function s(e,t){return""!=t.className&&-1!==t.className.split(" ").indexOf(e)}function f(e,t){return!s(e,t)&&(t.className+=" "+e,!0)}function y(e,t){if(!s(e,t))return!1;var n=t.className.split(" "),r="",o=n.indexOf(e);n.splice(o,1),n.length>0&&(r=n[0]);for(var i=1;i<n.length;i++)r+=" "+n[i];return t.className=r,!0}function d(e,t){return t+=1,Math.floor(Math.random()*(t-e))+e}function k(e){return Math.random()*e}function m(e,t,n){return e<t?e=t:e>n&&(e=n),e}function p(e){for(var t=[];e;)t.push(e%2),e=Math.floor(e/2);return t.reverse(),t}function g(e){var t=0,n=0,r=0,o=parseInt(e%1*1e3);if(e>=1)t=parseInt(e/60/60),n=parseInt(e/60-60*t),r=parseInt(e)-60*n-60*t*60;return{h:t,m:n,s:r,ms:o}}function v(e,t){return 10!==e.length?"Unsupported format":isNaN(e.charAt(4))?(void 0===t&&(t=e.charAt(4)),e.substring(8,10)+t+e.substring(5,7)+t+e.substring(0,4)):(void 0===t&&(t=e.charAt(2)),e.substring(6,10)+t+e.substring(3,5)+t+e.substring(0,2))}function h(e,t){for(e=String(e);e.length<t;)e="0"+e;return e}function b(e){return e.replace(/\s/g,"&nbsp;")}function j(e){return e.replace(/\n/gm,"<br />")}function O(e){return e.replace(/<br \/>/gm,"\n")}function w(e){return e.replace(/ /g,"_")}function x(e){return e.replace(/_/g," ")}function E(e,t){return void 0===t&&(t=!0),t?e.replace(/"/g,"&quot;"):e.replace(/"/g,'\\"')}function T(e,t){return void 0===t&&(t=!0),t?e.replace(/'/g,"&apos;"):e.replace(/'/g,"\\'")}function S(e,t){return void 0===t&&(t=!0),t?e.replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.replace(/</g,"\\<").replace(/>/g,"\\>")}function C(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function A(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")}e.exports=(r(n={addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},isDisplayed:o,getOffsetHeight:function(e){if(o(e))return e.offsetHeight;var t=e.style.display;e.style.display="block";var n=e.offsetHeight;return e.style.display=t,n},widthSpace:function(e){var t=document.createElement("div");return t.style.display="inline-block",t.style.width=e+"px",t},heightSpace:function(e){var t=document.createElement("div");return t.style.height=e+"px",t},clearArray:function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},clearInput:function(e){var t=document.createElement("form"),n=e.parentNode,r=e.nextSibling;t.appendChild(e),t.reset(),n.insertBefore(e,r)},getTextContent:function(e){return e.textContent||e.innerText||""},getScrollY:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},getInnerWidth:i,getInnerHeight:a,toXML:function(e){if(window.ActiveXObject){var t=new ActiveXObject("Microsoft.XMLDOM");t.async="false",t.loadXML(e)}else var n=new DOMParser,t=n.parseFromString(e,"text/xml");return t},getExtention:function(e){if(e.lastIndexOf(".")>0)return e.substring(e.lastIndexOf(".")+1,e.length)},getNavigator:c,onLeave:function(e,t,n){void 0===t&&(t=!1);window.onbeforeunload=function(r){if(e(),t)return r=r||window.event,n=n||"",r&&(r.returnValue=n),n}}
//!\\ Ne fonctionne pas sous IE (renvoie automatiquement false)
,is404:function(e){if("IE"==c())return!1;var t=e.document.getElementsByTagName("title");return 0!=t.length&&"404 Not Found"==t[0].innerHTML},copyData:function(e,t){return void 0!==t?JSON.parse(JSON.stringify(e,t)):JSON.parse(JSON.stringify(e))},getExecutionTime:function(e){var t=Date.now();return e(),Date.now()-t},devlog:function(e,t){if("undefined"==typeof devmode)return!1;null==t&&(t=1);t<=devmode&&console.log(e)},txt:function(e){return document.createTextNode(e)},divTxt:function(e,t,n){var r=document.createElement("div");r.style.textAlign="center",r.style.display="inline-block","auto"!==e&&(r.style.width=e+"px");void 0!==t&&(r.innerHTML=t);void 0!==n&&(r.style.lineHeight=n+"px");return r},hide:function(e){e.style.display="none"},show:function(e){e.style.display="inline-block"},showBlock:function(e){e.style.display="block"},remove:function(e){e.parentNode.removeChild(e)},mouseover:function(e,t){var n=!0;e.clientX<getScreenPositionLeft(t)?n=!1:e.clientX>getScreenPositionLeft(t)+t.offsetWidth?n=!1:e.clientY<getScreenPositionTop(t)?n=!1:e.clientY>getScreenPositionTop(t)+t.offsetHeight&&(n=!1);return n},mousePosition:function(e,t){return{x:e.clientX-getScreenPositionLeft(t),y:e.clientY-getScreenPositionTop(t)}},whichClick:function(e){if(1===e.button)return"MIDDLE";if(2===e.button)return"RIGHT";e.button;return"LEFT"},wheelDirection:function(e){if(e.deltaY<0)return"UP";if(e.deltaY>0)return"DOWN"},centerOnScreen:function(e){e.style.top=a()/2-e.offsetHeight/2+"px",e.style.left=i()/2-e.offsetWidth/2+"px"},centerOnElement:u,verticalAlign:function(e,t,n){void 0===t&&(t="CENTER");var r=0;r=void 0===n?a():n.offsetHeight;"CENTER"===t?e.style.top=r/2-e.offsetHeight/2+"px":"TOP"===t?e.style.top="0px":"BOTTOM"===t&&(e.style.top=r-e.offsetHeight+"px")},horizontalAlign:function(e,t,n){void 0===t&&(t="CENTER");var r=0;r=void 0===n?i():n.offsetWidth;"CENTER"===t?e.style.left=r/2-e.offsetWidth/2+"px":"LEFT"===t?e.style.left="0px":"RIGHT"===t&&(e.style.left=r-e.offsetWidth+"px")},fitScale:function(e,t,n){var r=t.offsetWidth/e.offsetWidth,o=t.offsetHeight/e.offsetHeight,i=0;if(void 0===n)var i=Math.min(r,o);else var i=Math.min(r,o,n);e.style.transform="scale("+i+")",u(e,t)},getScreenPosition:function(e){return{x:e.getBoundingClientRect().left,y:e.getBoundingClientRect().top}},restartAnimation:function(e){var t=e.style.animationName;e.style.animationName="",setTimeout(function(){e.style.animationName=t},18)},fadeOut:function(e,t,n,r,o){if(l(e))return!1;void 0===r&&(r="");void 0===o&&(o="");e.style.animation=n+"ms "+t+" "+r+" "+o,e.fadeOut_timeout=setTimeout(function(){e.style.display="none",e.fadeOut_timeout=null,e.style.animation=""},n)},cancelFadeOut:function(e){return!!l(e)&&(clearInterval(e.fadeOut_timeout),e.fadeOut_timeout=null,e.style.animation="",!0)},fadeOutIsRunning:l,hasClass:s,addClass:f,removeClass:y,toggleClass:function(e,t){if(!y(e,t))return f(e,t),!0;return!1},getRandomInt:d,getRandomFloat:k,checkRange:m,toBin:p,getFormatedTime:g,invertDateFormat:v,zerofill:h,space2nbsp:b,nl2br:j,br2nl:O,space2underscore:w,underscore2space:x,escapeQuote:E,escapeSimpleQuote:T,escapeTags:S,htmlspecialchars:C,htmlspecialchars_decode:A},"getRandomInt",d),r(n,"getRandomFloat",k),r(n,"checkRange",m),r(n,"toBin",p),r(n,"getFormatedTime",g),r(n,"invertDateFormat",v),r(n,"zerofill",h),r(n,"space2nbsp",b),r(n,"nl2br",j),r(n,"br2nl",O),r(n,"space2underscore",w),r(n,"underscore2space",x),r(n,"escapeQuote",E),r(n,"escapeSimpleQuote",T),r(n,"escapeTags",S),r(n,"htmlspecialchars",C),r(n,"htmlspecialchars_decode",A),r(n,"getKey",function(e){if(void 0!==e.key){var t=e.key;switch(t){case"Up":t="ArrowUp";break;case"Right":t="ArrowRight";break;case"Down":t="ArrowDown";break;case"Left":t="ArrowLeft";break;case"Spacebar":t=" ";break;case"Esc":t="Escape";break;case"Del":t="Delete";break;case"Add":t="+";break;case"Subtract":t="-";break;case"Multiply":t="*";break;case"Divide":t="/";break;case"Win":t="OS";break;case"Scroll":t="ScrollLock"}return t}var n=e.keyCode;return void 0!==N[n]&&(e.maj?N[n].maj?N[n].maj:N[n].key:e.altKey&&e.ctrlKey&&N[n].alt?N[n].alt:N[n].key)}),r(n,"isArrowPressed",function(e){return void 0!==e.key?"ArrowLeft"==e.key||"ArrowUp"==e.key||"ArrowRight"==e.key||"ArrowDown"==e.key||"Left"==e.key||"Up"==e.key||"Right"==e.key||"Down"==e.key:37==e.keyCode||38==e.keyCode||39==e.keyCode||40==e.keyCode}),r(n,"isLetterPressed",function(e,t){void 0===t&&(t=!0);if(void 0!==e.key)return 1==e.key.length&&(t?/[A-Za-zéèçàù]/.test(e.key):/[A-Za-z]/.test(e.key));var n=e.keyCode;return t?n>=65&&n<=90||!e.maj&&(50==n||55==n||57==n||48==n||165==n):n>=65&&n<=90}),r(n,"isNumericPressed",function(e,t){void 0===t&&(t=!0);return void 0!==e.key?t?/^[0-9]/.test(e.key):/^[0-9&é"'\(\-è_çà]/.test(e.key):t?e.keyCode>=48&&e.keyCode<=57&&e.maj||e.keyCode>=96&&e.keyCode<=105:e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105}),r(n,"focusedOnInput",function(){var e=document.activeElement.tagName;return"INPUT"===e||"TEXTAREA"===e||"SELECT"===e}),n);var N=[];N[0]={key:"²"},N[8]={key:"Backspace"},N[9]={key:"Tab"},N[13]={key:"Enter"},N[16]={key:"Shift"},N[17]={key:"Ctrl"},N[18]={key:"Alt"},N[19]={key:"Pause"},N[20]={key:"CapsLock"},N[27]={key:"Escape"},N[32]={key:" "},N[33]={key:"PageUp"},N[34]={key:"PageDown"},N[35]={key:"End"},N[36]={key:"Home"},N[37]={key:"ArrowLeft"},N[38]={key:"ArrowUp"},N[39]={key:"ArrowRight"},N[40]={key:"ArrowDown"},N[45]={key:"Insert"},N[46]={key:"Delete"},N[48]={key:"à",maj:"0",alt:"@"},N[49]={key:"&",maj:"1"},N[50]={key:"é",maj:"2",alt:"~"},N[51]={key:'"',maj:"3",alt:"#"},N[52]={key:"'",maj:"4",alt:"{"},N[53]={key:"(",maj:"5",alt:"["},N[54]={key:"-",maj:"6",alt:"|"},N[55]={key:"è",maj:"7",alt:"`"},N[56]={key:"_",maj:"8",alt:"\\"},N[57]={key:"ç",maj:"9",alt:"^"},N[58]={key:":",maj:"/"},N[59]={key:";",maj:"."},N[60]={key:"<",maj:">"},N[61]={key:"=",maj:"+",alt:"}"},N[65]={key:"a",maj:"A"},N[66]={key:"b",maj:"B"},N[67]={key:"c",maj:"C"},N[68]={key:"d",maj:"D"},N[69]={key:"e",maj:"E",alt:"€"},N[70]={key:"f",maj:"F"},N[71]={key:"g",maj:"G"},N[72]={key:"h",maj:"H"},N[73]={key:"i",maj:"I"},N[74]={key:"j",maj:"J"},N[75]={key:"k",maj:"K"},N[76]={key:"l",maj:"L"},N[77]={key:"m",maj:"M"},N[78]={key:"n",maj:"N"},N[79]={key:"o",maj:"O"},N[80]={key:"p",maj:"P"},N[81]={key:"q",maj:"Q"},N[82]={key:"r",maj:"R"},N[83]={key:"s",maj:"S"},N[84]={key:"t",maj:"T"},N[85]={key:"u",maj:"U"},N[86]={key:"v",maj:"V"},N[87]={key:"w",maj:"W"},N[88]={key:"x",maj:"X"},N[89]={key:"y",maj:"Y"},N[90]={key:"z",maj:"Z"},N[91]={key:"OS"},N[93]={key:"ContextMenu"},N[96]={key:"0"},N[97]={key:"1"},N[98]={key:"2"},N[99]={key:"3"},N[100]={key:"4"},N[101]={key:"5"},N[102]={key:"6"},N[103]={key:"7"},N[104]={key:"8"},N[105]={key:"9"},N[106]={key:"*"},N[107]={key:"+"},N[109]={key:"-"},N[110]={key:"."},N[112]={key:"F1"},N[113]={key:"F2"},N[114]={key:"F3"},N[115]={key:"F4"},N[116]={key:"F5"},N[117]={key:"F6"},N[118]={key:"F7"},N[119]={key:"F8"},N[120]={key:"F9"},N[121]={key:"F10"},N[122]={key:"F11"},N[123]={key:"F12"},N[144]={key:"NumLock"},N[145]={key:"ScrollLock"},N[160]={key:"^",maj:"¨"},N[161]={key:"!",maj:"§"},N[164]={key:"$",maj:"£",alt:"¤"},N[165]={key:"ù",maj:"%"},N[169]={key:")",maj:"°",alt:"]"},N[170]={key:"*",maj:"µ"},N[188]={key:",",maj:"?"},N[222]={key:"²"}}]));