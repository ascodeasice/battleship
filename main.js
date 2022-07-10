(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root {\n  --blockSize: 40px;\n  --gapSize: 10px;\n  --boardSize: 10;\n}\n\n.block {\n  height: var(--blockSize);\n  width: var(--blockSize);\n  background-color: blue;\n}\n\n.block.attacked {\n  background-color: red;\n}\n\n.block.attacked.ship {\n  background-color: gray;\n}\n\n.board {\n  width: calc(var(--boardSize)*var(--boardSize));\n  height: calc(var(--boardSize)*var(--boardSize));\n  display: grid;\n  grid-template-columns: repeat(10, min-content);\n  grid-auto-rows: min-content;\n  gap: var(--gapSize);\n  border: var(--gapSize) solid black;\n  background-color: black;\n}\n\n.boardWrapper {\n  display: grid;\n  grid-template-rows: min-content min-content;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: repeat(2, min-content);\n  justify-content: space-evenly;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=e=>{const t=e,n=[];for(let e=0;e<t;e+=1)n.push(!1);return{length:t,hit:e=>{if(e>=t||e<0)throw new Error("Out of index(hit function in Ship)");n[e]=!0},isSunk:()=>n.every((e=>!0===e)),isHit:e=>{if(e>=t||e<0)throw new Error("Out of index(isHit function in Ship)");return n[e]}}};function m(e,t){return Math.floor(Math.random()*(t-e)+e)}const b=(e,t)=>{const n=(e=>{const t=[];for(let n=0;n<e;n+=1){const n=[];for(let t=0;t<e;t+=1)n.push(!1);t.push(n)}const n=[];for(let t=0;t<e;t+=1){const t=[];for(let n=0;n<e;n+=1)t.push({shipIndex:-1,shipPos:-1});n.push(t)}const r=[],o=(t,r)=>t<0||t>=e||r<0||r>=e||-1!==n[t][r].shipIndex;return{size:e,shipData:n,isHitData:t,shipArr:r,hasShip:o,receiveAttack:(e,o)=>{if(t[e][o]=!0,-1===n[e][o].shipIndex)return;const a=n[e][o];r[a.shipIndex].hit(a.shipPos)},isHit:(n,r)=>{if(n<0||n>e||r<0||r>e)throw new Error("Out of index");return t[n][r]},placeShipVertically:(t,a,i)=>{if(t<=0)throw new Error("Can' t place ship, invalid ship length");for(let n=0;n<t;n+=1)if(o(a+n,i)||a+n>=e)return!1;for(let e=0;e<t;e+=1)n[a+e][i].shipIndex=r.length,n[a+e][i].shipPos=e;return r.push(v(t)),!0},placeShipHorizontally:(t,a,i)=>{if(t<=0)throw new Error("Can' t place ship, invalid ship length");for(let n=0;n<t;n+=1)if(o(a,i+n)||i+n>=e)return!1;for(let e=0;e<t;e+=1)n[a][i+e].shipIndex=r.length,n[a][i+e].shipPos=e;return r.push(v(t)),!0}}})(t);return{name:e,board:n,attack:(e,t,n)=>{if(t<0||t>=e.size||n<0||n>=e.size)throw new Error("Out of index");if(e.isHit(t,n))throw new Error("Already attacked");e.receiveAttack(t,n)},randomAttack:e=>{const t=[];for(let n=0;n<e.size;n+=1)for(let r=0;r<e.size;r+=1)e.isHit(n,r)||t.push([n,r]);if(0===t.length)throw new Error("No blocks to attack");const n=t[m(0,t.length)];e.receiveAttack(n[0],n[1])},lost:()=>{if(0===n.shipArr.length)throw new Error("No ship in shipArr");return n.shipArr.every((e=>e.isSunk()))}}},g=document.getElementById("container"),y=document.getElementById("infoText");function k(e){const t=document.createElement("h1");t.innerText=e.name;const n=document.createElement("div");n.classList.add("board");for(let t=0;t<e.board.size;t+=1)for(let r=0;r<e.board.size;r+=1){const o=document.createElement("div");o.classList.add("block"),e.board.isHit(t,r)&&o.classList.add("attacked"),e.board.hasShip(t,r)&&o.classList.add("ship"),o.addEventListener("click",(()=>!e.board.isHit(t,r)&&(e.board.receiveAttack(t,r),o.classList.add("attacked"),!0))),n.appendChild(o)}const r=document.createElement("div");r.classList.add("boardWrapper"),r.appendChild(t),r.appendChild(n),g.appendChild(r)}function x(e){y.innerText=`${e.name} won!`}const w=e=>{[5,4,3,3,2].forEach((t=>{for(;;){const n=m(0,2),r=[m(0,e.size),m(0,e.size)];if(0===n){if(e.placeShipHorizontally(t,r[0],r[1]))break}else if(e.placeShipVertically(t,r[0],r[1]))break}}))};(()=>{const e=b("Player",10),t=b("Computer",10);for(w(e.board),w(t.board),k(e),k(t);!e.lost()&&!t.lost();)e.randomAttack(t.board),t.randomAttack(e.board),g.innerText="",k(e),k(t);e.lost()?x(t):x(e)})()})()})();