(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),s=n(667),c=n.n(s),d=new URL(n(342),n.b),l=o()(a()),p=c()(d);l.push([e.id,':root {\n  --blockSize: 40px;\n  --gapSize: 10px;\n  --boardSize: 10;\n}\n\n[draggable="true"] {\n  /*\n   To prevent user selecting inside the drag source\n  */\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.block {\n  height: var(--blockSize);\n  width: var(--blockSize);\n  background-color: white;\n}\n\n.block.computer:hover:not(.attacked) {\n  background-color: lightblue;\n}\n\n.block.computer.attacked {\n  cursor: not-allowed;\n}\n\n.block.attacked {\n  background-color: blue;\n}\n\n.block.attacked.ship {\n  background: url('+p+");\n  background-repeat: no-repeat;\n  background-size: var(--blockSize) var(--blockSize);\n  background-color: gray;\n}\n\n.block.ship:not(.computer) {\n  background-color: gray;\n}\n\n.block.hover {}\n\n.board {\n  width: calc(var(--boardSize)*var(--boardSize));\n  height: calc(var(--boardSize)*var(--boardSize));\n  display: grid;\n  grid-template-columns: repeat(10, var(--blockSize));\n  grid-auto-rows: var(--blockSize);\n  gap: var(--gapSize);\n  border: var(--gapSize) solid black;\n  background-color: black;\n}\n\n.boardWrapper {\n  display: grid;\n  grid-template-rows: min-content min-content;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: repeat(2, min-content);\n  justify-content: space-evenly;\n}\n\n.shipContainer {\n  background-color: black;\n  display: grid;\n  gap: var(--gapSize);\n  grid-auto-columns: var(--blockSize);\n}\n\n.dragging {\n  opacity: .5;\n}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},342:(e,t,n)=>{e.exports=n.p+"c26ab9c8ad3b4765cbca.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),f={};function g(e){return e.preventDefault(),e.stopPropagation(),!1}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const b=document.getElementById("container"),m=document.getElementById("infoText");function v(){b.innerText=""}function y(e){m.innerText=e}function k(e){const t=document.createElement("h1");t.innerText=e.name;const n=document.createElement("div");n.classList.add("board"),function(e,t,n){!function(e,t,n){for(let e=0;e<t.size;e++)for(let r=0;r<t.size;r++){const a=document.createElement("div");if(a.setAttribute("draggable","true"),a.classList.add("shipContainer"),a.setAttribute("id",`${e},${r}`),t.hasShip(e,r)&&"horizontal"===t.shipData[e][r].direction){const i=t.shipArr[t.shipData[e][r].shipIndex].length;a.style.gridRow=`${e+1}/${e+2}`,a.style.gridColumn=`${r+1}/${r+1+i}`,a.style.gridTemplateColumns=`repeat(${i}, var(--blockSize))`;for(let n=0;n<i;n++){const i=document.createElement("div");i.classList.add("block"),i.classList.add("ship"),i.setAttribute("id",`${e},${r+n}`),t.isHit(e,r+n)&&i.classList.add("attacked"),a.appendChild(i)}const o=a.childNodes;let s=0;for(let e=0;e<o.length;e++)o[e].addEventListener("mouseenter",(()=>{s=e}));a.addEventListener("dragstart",(e=>{a.classList.add("dragging"),e.dataTransfer.setData("text/plain",`${e.target.id},${s}`)})),a.addEventListener("dragend",(()=>{a.classList.remove("dragging")})),n.appendChild(a),r+=i-1}}}(0,t,n),function(e,t,n){for(let e=0;e<t.size;e++)for(let r=0;r<t.size;r++){const a=document.createElement("div");if(a.setAttribute("draggable","true"),a.classList.add("shipContainer"),a.setAttribute("id",`${r},${e}`),t.hasShip(r,e)&&"vertical"===t.shipData[r][e].direction){const i=t.shipArr[t.shipData[r][e].shipIndex].length;a.style.gridRow=`${r+1}/${r+1+i}`,a.style.gridColumn=`${e+1}/${e+2}`;for(let n=0;n<i;n++){const i=document.createElement("div");i.classList.add("block"),i.classList.add("ship"),i.setAttribute("id",`${r+n},${e}`),t.isHit(r+n,e)&&i.classList.add("attacked"),a.appendChild(i)}const o=a.childNodes;let s=0;for(let e=0;e<o.length;e++)o[e].addEventListener("mouseenter",(()=>{s=e}));a.addEventListener("dragstart",(e=>{a.classList.add("dragging"),e.dataTransfer.setData("text/plain",`${e.target.id},${s}`)})),a.addEventListener("dragend",(()=>{a.classList.remove("dragging")})),n.appendChild(a),r+=i-1}}}(0,t,n)}(0,e.board,n);for(let t=0;t<e.board.size;t++)for(let r=0;r<e.board.size;r++){const a=document.createElement("div");a.setAttribute("id",`${t},${r}`),a.classList.add("block"),e.board.hasShip(t,r)||(e.board.isHit(t,r)&&a.classList.add("attacked"),e.board.hasShip(t,r)&&(a.classList.add("ship"),a.setAttribute("draggable","true")),n.appendChild(a))}const r=document.createElement("div");r.classList.add("boardWrapper"),r.appendChild(t),r.appendChild(n),b.appendChild(r),function(e,t){const n=document.querySelectorAll(".shipContainer");for(let r=0;r<n.length;r++)n[r].addEventListener("click",(()=>{const a=n[r].id.split(",").map((e=>Number(e))),i=t.shipData[a[0]][a[1]],o=t.shipArr[i.shipIndex];t.removeShip(a[0],a[1]),"vertical"===i.direction?t.placeShipHorizontally(o.length,a[0],a[1])||t.placeShipVertically(o.length,a[0],a[1]):t.placeShipVertically(o.length,a[0],a[1])||t.placeShipHorizontally(o.length,a[0],a[1]),v(),k(e)}))}(e,e.board),function(e){const t=document.querySelectorAll(".block");for(let n=0;n<t.length;n++)t[n].addEventListener("drop",(t=>{const n=t.dataTransfer.getData("text/plain").split(",").map((e=>Number(e))),r=t.target.id.split(",").map((e=>Number(e))),a=e.board.shipData[n[0]][n[1]],i=e.board.shipArr[a.shipIndex];e.board.removeShip(n[0],n[1]),"vertical"===a.direction?e.board.placeShipVertically(i.length,r[0]-n[2],r[1])||e.board.placeShipVertically(i.length,n[0],n[1]):e.board.placeShipHorizontally(i.length,r[0],r[1]-n[2])||e.board.placeShipHorizontally(i.length,n[0],n[1]),v(),k(e)})),t[n].addEventListener("dragenter",g),t[n].addEventListener("dragover",g)}(e)}function S(e,t){const n=document.createElement("h1");n.innerText=t.name;const r=document.createElement("div");r.classList.add("board");for(let n=0;n<t.board.size;n+=1)for(let a=0;a<t.board.size;a+=1){const i=document.createElement("div");i.classList.add("block"),i.classList.add("computer"),t.board.isHit(n,a)&&i.classList.add("attacked"),t.board.hasShip(n,a)&&i.classList.add("ship"),i.addEventListener("click",(()=>{t.board.isHit(n,a)||e.lost()||t.lost()||(t.board.receiveAttack(n,a),i.classList.add("attacked"),t.lost()&&y(`${e.name} win!`),t.randomAttack(e.board),e.lost()&&y(`${t.name} win!`),v(),k(e),S(e,t))})),r.appendChild(i)}const a=document.createElement("div");a.classList.add("boardWrapper"),a.appendChild(n),a.appendChild(r),b.appendChild(a)}const x=e=>{const t=e,n=[];for(let e=0;e<t;e+=1)n.push(!1);return{length:t,hit:e=>{if(e>=t||e<0)throw new Error("Out of index(hit function in Ship)");n[e]=!0},isSunk:()=>n.every((e=>!0===e)),isHit:e=>{if(e>=t||e<0)throw new Error("Out of index(isHit function in Ship)");return n[e]}}};function w(e,t){return Math.floor(Math.random()*(t-e)+e)}const E=(e,t)=>{const n=(e=>{const t=[];for(let n=0;n<e;n+=1){const n=[];for(let t=0;t<e;t+=1)n.push(!1);t.push(n)}const n=[];for(let t=0;t<e;t+=1){const t=[];for(let n=0;n<e;n+=1)t.push({shipIndex:-1,shipPos:-1,direction:"none"});n.push(t)}const r=[],a=(t,r)=>t<0||t>=e||r<0||r>=e||-1!==n[t][r].shipIndex,i=(t,i,o)=>{if(t<=0)throw new Error("Can' t place ship, invalid ship length");for(let n=0;n<t;n+=1)if(a(i+n,o)||i+n>=e)return!1;for(let e=0;e<t;e+=1)n[i+e][o].shipIndex=r.length,n[i+e][o].shipPos=e,n[i+e][o].direction="vertical";return r.push(x(t)),!0},o=(t,i,o)=>{if(t<=0)throw new Error("Can' t place ship, invalid ship length");for(let n=0;n<t;n+=1)if(a(i,o+n)||o+n>=e)return!1;for(let e=0;e<t;e+=1)n[i][o+e].shipIndex=r.length,n[i][o+e].shipPos=e,n[i][o+e].direction="horizontal";return r.push(x(t)),!0};return{size:e,shipData:n,isHitData:t,shipArr:r,hasShip:a,receiveAttack:(e,a)=>{if(t[e][a]=!0,-1===n[e][a].shipIndex)return;const i=n[e][a];r[i.shipIndex].hit(i.shipPos)},isHit:(n,r)=>{if(n<0||n>e||r<0||r>e)throw new Error("Out of index");return t[n][r]},placeShipVertically:i,placeShipHorizontally:o,placeShipsRandomly:()=>{[5,4,3,3,2].forEach((t=>{for(;;){const n=w(0,2),r=[w(0,e),w(0,e)];if(0===n){if(o(t,r[0],r[1]))break}else if(i(t,r[0],r[1]))break}}))},removeShip:(t,a)=>{if(t<0||t>=e||a<0||a>=e)throw new Error("Out of index(removeShip)");if(-1===n[t][a].shipIndex)return;const i=n[t][a],o=r[i.shipIndex].length,s=i.shipPos;if("vertical"===i.direction){const e=t-s;for(let t=0;t<o;t++)n[e+t][a]={shipIndex:-1,shipPos:-1,direction:"none"}}else{const e=a-s;for(let r=0;r<o;r++)n[t][e+r]={shipIndex:-1,shipPos:-1,direction:"none"}}}}})(t);return{name:e,board:n,attack:(e,t,n)=>{if(t<0||t>=e.size||n<0||n>=e.size)throw new Error("Out of index");if(e.isHit(t,n))throw new Error("Already attacked");e.receiveAttack(t,n)},randomAttack:e=>{const t=[];for(let n=0;n<e.size;n+=1)for(let r=0;r<e.size;r+=1)e.isHit(n,r)||t.push([n,r]);if(0===t.length)throw new Error("No blocks to attack");const n=t[w(0,t.length)];e.receiveAttack(n[0],n[1])},lost:()=>{if(0===n.shipArr.length)throw new Error("No ship in shipArr");for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++)if(-1!==n.shipData[e][t].shipIndex&&!n.shipArr[n.shipData[e][t].shipIndex].isSunk())return!1;return!0}}},z=E("Player",10),L=E("Computer",10),A=document.getElementById("startBtn");z.board.placeShipsRandomly(z.board),L.board.placeShipsRandomly(L.board),y("Place your ship by drag and drop.\n click to change direction"),k(z),A.addEventListener("click",(()=>{S(z,L)}))})()})();