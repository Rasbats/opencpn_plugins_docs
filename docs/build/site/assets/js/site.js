!function(){"use strict";var e=document.querySelector(".navigation-container"),t=document.querySelector(".navigation-toggle");t.addEventListener("click",(function(n){if(t.classList.contains("is-active"))return r(n);document.documentElement.classList.add("is-clipped--nav"),t.classList.add("is-active"),e.classList.add("is-active"),window.addEventListener("click",r),l(n)})),e.addEventListener("click",l);var n=e.querySelector("[data-panel=menu]");if(n){var i,a=(i=window.sessionStorage.getItem("nav-state"))&&"1"===(i=JSON.parse(i)).__version__?i:{__version__:"1"},s=function(e,t,n){var i=n+"@"+t;return e[i]||(e[i]={})}(a,e.dataset.component,e.dataset.version);e.querySelector(".context").addEventListener("click",(function(){var t=e.querySelector(".is-active[data-panel]"),n="menu"===t.dataset.panel?"explore":"menu";t.classList.toggle("is-active"),e.querySelector("[data-panel="+n+"]").classList.toggle("is-active")})),v(".nav-toggle",n).forEach((function(e){var t=e.parentElement;e.addEventListener("click",(function(){t.classList.toggle("is-active"),s.expandedItems=d(),u()}));var n=function(e,t){var n;if("nextElementSibling"in e)n=e.nextElementSibling;else for(n=e;(n=n.nextSibling)&&1!==n.nodeType;);return n&&t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",(function(){t.classList.toggle("is-active"),s.expandedItems=d(),u()})))})),v(".nav-item",n).forEach((function(e,t){e.setAttribute("data-id","menu-"+e.dataset.depth+"-"+t)}));var c=s.expandedItems||(s.expandedItems=[]);c.length&&v(c.map((function(e){return'.nav-item[data-id="'+e+'"]'})).join(","),n).forEach((function(e){e.classList.add("is-active")}));var o=n.querySelector(".is-current-page");o&&function(e){var t,n=[e.dataset.id],i=e.parentNode;for(;!(t=i.classList).contains("nav-menu");)"LI"===i.tagName&&t.contains("nav-item")&&(t.add("is-active","is-current-path"),n.push(i.dataset.id)),i=i.parentNode;return e.classList.add("is-active"),n}(o).forEach((function(e){c.indexOf(e)<0&&c.push(e)})),u(),function(e,t,n){if(!n)return t.scrollTop=e;var i=n.offsetTop;i<e?t.scrollTop=i-10:i-t.offsetHeight+n.offsetHeight>e?t.scrollTop=i-t.offsetHeight+n.offsetHeight+10:t.scrollTop=e}(s.scroll||0,n,o&&o.querySelector(".nav-link")),n.addEventListener("scroll",(function(){s.scroll=Math.round(n.scrollTop),u()}))}function r(n){3!==n.which&&2!==n.button&&(document.documentElement.classList.remove("is-clipped--nav"),t.classList.remove("is-active"),e.classList.remove("is-active"),window.removeEventListener("click",r),l(n))}function l(e){e.stopPropagation()}function d(){return v(".is-active",n).map((function(e){return e.dataset.id}))}function u(){window.sessionStorage.setItem("nav-state",JSON.stringify(a))}function v(e,t){return[].slice.call((t||document).querySelectorAll(e))}}();
!function(){"use strict";var e=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function n(t,o){return e.contains(t)?n(t.offsetParent,t.offsetTop+o):o}function o(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,n(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",(function e(t){var n,i;(n=window.location.hash)&&(i=document.getElementById(n.slice(1)))&&(o.bind(i)(),setTimeout(o.bind(i),0)),window.removeEventListener("load",e)})),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach((function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",o.bind(n))}))}();
!function(){"use strict";var e=document.querySelector(".page-versions .versions-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",(function(e){t.classList.toggle("is-active"),e.stopPropagation()})),window.addEventListener("click",(function(){t.classList.remove("is-active")}))}}();
document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach((function(t){t.addEventListener("click",(function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")}))}))}));
!function(){"use strict";var t=window.location.hash;function a(t){var a=this.tab,e=this.pane;i(".tabs li, .tab-pane",this.tabset).forEach((function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")})),t.preventDefault()}function i(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}i(".tabset").forEach((function(e){var s,c,n=e.querySelector(".tabs");n&&(i("li",n).forEach((function(n,r){var l=(n.querySelector("a[id]")||n).id;if(l){var o=function(t,a){return i(".tab-pane",a).find((function(a){return a.getAttribute("aria-labelledby")===t}))}(l,e);r||(c={tab:n,pane:o}),!s&&t==="#"+l&&(s=!0)?(n.classList.add("is-active"),o&&o.classList.add("is-active")):r||(n.classList.remove("is-active"),o&&o.classList.remove("is-active")),n.addEventListener("click",a.bind({tabset:e,tab:n,pane:o}))}})),!s&&c&&(c.tab.classList.add("is-active"),c.pane&&c.pane.classList.add("is-active")));e.classList.remove("is-loading")}))}();