(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{350:function(e,t,r){"use strict";var n=r(0),o=r(44),i=r(351),u=r(352),a=r(1),c=1..toFixed,f=Math.floor,s=function(e,t,r){return 0===t?r:t%2==1?s(e,t-1,r*e):s(e*e,t/2,r)},l=function(e,t,r){for(var n=-1,o=r;++n<6;)o+=t*e[n],e[n]=o%1e7,o=f(o/1e7)},d=function(e,t){for(var r=6,n=0;--r>=0;)n+=e[r],e[r]=f(n/t),n=n%t*1e7},p=function(e){for(var t=6,r="";--t>=0;)if(""!==r||0===t||0!==e[t]){var n=String(e[t]);r=""===r?n:r+u.call("0",7-n.length)+n}return r};n({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}))},{toFixed:function(e){var t,r,n,a,c=i(this),f=o(e),g=[0,0,0,0,0,0],v="",m="0";if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(c*s(2,69,1))-69)<0?c*s(2,-t,1):c/s(2,t,1),r*=4503599627370496,(t=52-t)>0){for(l(g,0,r),n=f;n>=7;)l(g,1e7,0),n-=7;for(l(g,s(10,n,1),0),n=t-1;n>=23;)d(g,1<<23),n-=23;d(g,1<<n),l(g,1,1),d(g,2),m=p(g)}else l(g,0,r),l(g,1<<-t,0),m=p(g)+u.call("0",f);return m=f>0?v+((a=m.length)<=f?"0."+u.call("0",f-a)+m:m.slice(0,a-f)+"."+m.slice(a-f)):v+m}})},351:function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}},352:function(e,t,r){"use strict";var n=r(44),o=r(15),i=r(23);e.exports=function(e){var t=o(i(this)),r="",u=n(e);if(u<0||u==1/0)throw RangeError("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(t+=t))1&u&&(r+=t);return r}},486:function(e,t,r){"use strict";r.r(t);r(350);var n=new(r(125).Player)("5s"),o=document.querySelector(".player-controls-demo button"),i=document.querySelector('.player-controls-demo input[type="range"]'),u=document.querySelector(".player-controls-demo .time");u.innerHTML="0s",i.addEventListener("input",(function(e){n.progress=+e.target.value})),n.on("update",(function(e){u.innerHTML=(e/1e3).toFixed(2)+"s",i.value=n.progress})),n.on("play",(function(){n.time>=n.totalTime&&n.seek(0)})),o.addEventListener("click",(function(e){e.stopImmediatePropagation(),n.togglePause()})),n.on("togglePause",(function(){o.innerHTML=n.paused?"play":"pause"}))}}]);