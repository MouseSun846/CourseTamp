import"./index-DO5_EgMF.js";const t=(t,n)=>{const e=t.__vccOpts||t;for(const[o,s]of n)e[o]=s;return e};function n(t,n){return"string"==typeof t?n:t}const e={all:o=o||new Map,on:function(t,n){var e=o.get(t);e?e.push(n):o.set(t,[n])},off:function(t,n){var e=o.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):o.set(t,[]))},emit:function(t,n){var e=o.get(t);e&&e.slice().map((function(t){t(n)})),(e=o.get("*"))&&e.slice().map((function(e){e(t,n)}))}};var o;export{t as _,e,n as r};
