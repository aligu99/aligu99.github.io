"use strict";function dark(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var o,i,t,a,e=.05,n=document.getElementById("universe"),r=!0,s="226,225,224",c=[];function h(){o=window.innerWidth,i=window.innerHeight,t=.216*o,n.setAttribute("width",o),n.setAttribute("height",i)}function u(){a.clearRect(0,0,o,i);for(var t=c.length,e=0;e<t;e++){var n=c[e];n.move(),n.fadeIn(),n.fadeOut(),n.draw()}}function d(){this.reset=function(){this.giant=l(3),this.comet=!this.giant&&!r&&l(10),this.x=m(0,o-10),this.y=m(0,i),this.r=m(1.1,2.6),this.dx=m(e,6*e)+(this.comet+1-1)*e*m(50,120)+.1,this.dy=-m(e,6*e)-(this.comet+1-1)*e*m(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=m(.2,1-.4*(this.comet+1-1)),this.do=m(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,this.x>o||this.y<0)&&(this.fadingOut=!1,this.reset())},this.draw=function(){if(a.beginPath(),this.giant)a.fillStyle="rgba(180,184,240,"+this.opacity+")",a.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){a.fillStyle="rgba("+s+","+this.opacity+")",a.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)a.fillStyle="rgba("+s+","+(this.opacity-this.opacity/20*t)+")",a.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),a.fill()}else a.fillStyle="rgba(226,225,142,"+this.opacity+")",a.rect(this.x,this.y,this.r,this.r);a.closePath(),a.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>o-o/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){r=!1},50)}function l(t){return Math.floor(1e3*Math.random())+1<10*t}function m(t,e){return Math.random()*(e-t)+t}h(),window.addEventListener("resize",h,!1),a=n.getContext("2d");for(var f=0;f<t;f++)c[f]=new d,c[f].reset();u(),function t(){"dark"==document.getElementsByTagName("html")[0].getAttribute("data-theme")&&u(),window.requestAnimationFrame(t)}()}dark();var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var t=new Date("08/01/2022 00:00:00"),t=Math.trunc(234e8+(now-t)/1e3*17),e=(t/1496e5).toFixed(6),n=new Date("05/25/2024 00:00:00"),o=Math.floor((now-n)/1e3/60/60/24),i=Math.floor((now-n)/1e3/60/60-24*o),a=(1==String(i).length&&(i="0"+i),(now-n)/1e3/60-1440*o-60*i),a=Math.floor(a),n=(1==String(a).length&&(a="0"+a),(now-n)/1e3-86400*o-3600*i-60*a),n=Math.round(n),t=(1==String(n).length&&(n="0"+n),(i<18&&9<=i?"<img class='boardsign' src='https://img.shields.io/badge/%E5%B0%8F%E8%8F%9C%E5%9B%AD-%E7%A7%8D%E8%B1%86%E5%8D%97%E5%B1%B1%E4%B8%8B%F0%9F%A5%AC-white?style=social&logo=burton' title='草盛豆苗稀~'><br> <div style=\"font-size:13px;font-weight:bold\">本站居然运行了 ":"<img class='boardsign' src='https://img.shields.io/badge/%E5%B0%8F%E8%8F%9C%E5%9B%AD-%E5%B8%A6%E6%9C%88%E8%8D%B7%E9%94%84%E5%BD%92%E2%9B%8F%EF%B8%8F-white?style=social&logo=burton' title='衣沾不足惜~'><br> <div style=\"font-size:13px;font-weight:bold\">本站居然运行了 ").concat(o," 天 ").concat(i," 小时 ").concat(a," 分 ").concat(n," 秒 <i id=\"heartbeat\" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ").concat(t," 千米，约为 ").concat(e," 个天文单位 🚀</div>")),e='<div style="font-size:18px">已运行 '.concat(o," 天 ").concat(i," 小时 ").concat(a," 分 ").concat(n," 秒 <i id=\"heartbeat\" class='fas fa-heartbeat'></i></div>");document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=t),document.getElementById("timeboard")&&(document.getElementById("timeboard").innerHTML=e)}setInterval(function(){createtime()},1e3);var observer=new MutationObserver(function(t){t.forEach(function(t){"childList"===t.type&&document.getElementById("comment_Count")&&(fetchCommentsCount(),observer.disconnect())})}),appId=(observer.observe(document.body,{childList:!0,subtree:!0}),"mfdophmnVJlepseu1RciMEnP-MdYXbMMI"),appKey="pm22KnIvoJBFVSZrP4BATvNU",restApiUrl="https://waline.api.aligu.top/1.1/classes/Comment";function fetchCommentsCount(){fetch(restApiUrl,{headers:{"X-LC-Id":appId,"X-LC-Key":appKey,"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){var e;t.results&&(t=t.results.length,e=document.getElementById("comment_Count"))&&(e.innerText="".concat(t," 条评论"))})}document.addEventListener("DOMContentLoaded",fetchCommentsCount);var introductionPhrases=["🔍 分享与热心帮助","🏋️‍♀️ 坚韧不拔的长跑达人","🎮 DOTA2玩家","👨‍🍳 一位啥都搞的工程师"],lastSayHello="";function Introduction(){for(var t=introductionPhrases[Math.floor(Math.random()*introductionPhrases.length)];t===lastSayHello;)t=introductionPhrases[Math.floor(Math.random()*introductionPhrases.length)];var e=document.getElementById("Introduction");e&&(e.textContent=t,lastSayHello=t)}function updateStatistics(){fetch("https://v6-widget.51.la/v6/3J8PpTXDy9HAlzQm/quote.js").then(function(t){return t.text()}).then(function(t){var e=["今日人数","今日访问","昨日人数","昨日访问","本月访问"],t=t.match(/<\/span><span>(.*?)<\/span><\/p>/g);if(t){var n=t.map(function(t){return t.replace(/<\/?span>/g,"").replace(/<\/?p>/g,"")}),o=document.getElementById("statistic");if(o){var t=n[0],i=document.querySelector(".T-box");i&&(i.innerHTML="最近活跃：".concat(t,"&ensp;|&ensp;").concat(i.innerHTML));for(var a=1;a<n.length-1;a++)o.innerHTML+='<div><span class="tips">'.concat(e[a-1],'</span><span id="').concat(e[a-1],'">').concat(n[a],"</span></div>")}}else console.error("无法获取统计数据，请检查正则表达式或数据来源。")}).catch(function(t){console.error("获取统计数据时发生错误:",t)})}document.addEventListener("DOMContentLoaded",Introduction),document.addEventListener("DOMContentLoaded",updateStatistics);var IntroductionsPhrases=['关注的作者①：<a href="https://github.com/hexojs" target="_blank">hexojs</a>','关注的作者②：<a href="https://github.com/imsyy" target="_blank">imsyy</a>','关注的作者③：<a href="https://github.com/fomalhaut1998" target="_blank">fomalhaut1998</a>','关注的作者④：<a href="https://github.com/jerryc127" target="_blank">jerryc127</a>','关注的作者⑤：<a href="https://github.com/TheAlgorithms" target="_blank">TheAlgorithms</a>','关注的作者⑥：<a href="https://github.com/Yangyehong" target="_blank">Yangyehong</a>','关注的作者⑦：<a href="https://github.com/jacobsomer" target="_blank">jacobsomer</a>','关注的作者⑧：<a href="https://github.com/zhheo" target="_blank">zhheo</a>'],currentIndex=0;function Introductions(){var t=IntroductionsPhrases[currentIndex],e=document.getElementById("Introductions");e&&(e.innerHTML=t),currentIndex=(currentIndex+1)%IntroductionsPhrases.length}document.addEventListener("DOMContentLoaded",Introductions);var githubApiUrl="https://calendar.api.aligu.top/api?user=aligu99";function fetchGitHubActivity(){fetch(githubApiUrl).then(function(t){return t.json()}).then(function(t){t&&t.contributions?(updateIntroductionsPhrases(calculateContributions(t)),Introductions()):console.error("未能获取GitHub活动数据:",t)}).catch(function(t){return console.error("获取GitHub活动数据出错:",t)})}function calculateContributions(t){var t=t.contributions,e=t.flat().reduce(function(t,e){return t+e.count},0),n=new Date,o=new Date(n),i=(o.setFullYear(n.getFullYear()-1),new Date(n)),a=(i.setMonth(n.getMonth()-1),new Date(n));return a.setDate(n.getDate()-7),{totalContributions:e,pastYearContributions:t.flat().reduce(function(t,e){var n=new Date(e.date);return o<=n?t+e.count:t},0),pastMonthContributions:t.flat().reduce(function(t,e){var n=new Date(e.date);return i<=n?t+e.count:t},0),pastWeekContributions:t.flat().reduce(function(t,e){var n=new Date(e.date);return a<=n?t+e.count:t},0)}}function updateIntroductionsPhrases(t){var e=document.getElementById("totalContributions"),n=document.getElementById("pastYearContributions"),o=document.getElementById("pastMonthContributions"),i=document.getElementById("pastWeekContributions");e&&(e.textContent="♾️总提交次数: ".concat(t.totalContributions,"次")),n&&(n.textContent="🌞过去一年: ".concat(t.pastYearContributions,"次")),o&&(o.textContent="🌙过去一月提交: ".concat(t.pastMonthContributions,"次")),i&&(i.textContent="⭐过去一周提交: ".concat(t.pastWeekContributions,"次"))}document.addEventListener("DOMContentLoaded",function(){fetchGitHubActivity()});