"use strict";(self.webpackChunk_metamindslol_opensource=self.webpackChunk_metamindslol_opensource||[]).push([[5218],{92646:function(a,t,e){e.d(t,{Z:function(){return r}});e(72791);var i=e(78983),n=e(11087),c=e(84012),s=e(80184);var l=function(a){var t=function(a,t){var e=(t-a.length)/2,i=a.padStart(a.length+e," ");t%2!==0&&(i=a.padStart(a.length+e+1," "));var n=i.padEnd(t," ");return console.log(n+" length: "+n.length),n}(0===a.participant.deaths?"Perfect KDA":"".concat(((a.participant.kills+a.participant.assists)/a.participant.deaths).toFixed(2)," KDA"),11);return a.summonerNameFromMatchDetail?(0,s.jsxs)(i.rb,{className:"justify-content-left",children:[(0,s.jsx)(i.rb,{className:"p-0 justify-content-center",children:(0,s.jsx)(c.Z,{participant:a.participant})}),(0,s.jsxs)(i.rb,{className:"p-0 justify-content-center",children:[a.participant.kills,"/",a.participant.deaths,"/",a.participant.assists]}),(0,s.jsx)(i.rb,{className:"p-0 justify-content-center",children:t})]}):(0,s.jsxs)(i.rb,{className:"justify-content-left",children:[(0,s.jsxs)(i.rb,{className:"p-0 justify-content-center",children:[a.participant.kills,"/",a.participant.deaths,"/",a.participant.assists]}),(0,s.jsx)(i.rb,{className:"p-0 justify-content-center",children:t})]})},r=function(a){return a.singleMatch?(0,s.jsxs)(i.b7,{sm:"auto",children:[(0,s.jsxs)(i.rb,{children:[(0,s.jsx)(i.b7,{className:"p-0",sm:"auto",children:(0,s.jsx)(n.rU,{to:"/champion/?champ=".concat("FiddleSticks"===a.participant.championName?"Fiddlesticks":a.participant.championName),state:{itemName:a.participant.championId},children:(0,s.jsx)("img",{style:{height:"90px",width:"90px"},className:"p-0",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/".concat("FiddleSticks"===a.participant.championName?"Fiddlesticks":a.participant.championName,".png"),alt:a.participant.championId})})}),(0,s.jsx)(i.b7,{sm:"auto",children:(0,s.jsxs)(n.rU,{to:"/matchDetail/?".concat(a.gameId,"#participant").concat(a.index),state:{match:a.match,number:a.index},className:"text-decoration-none text-black",children:[(0,s.jsx)(i.rb,{children:(0,s.jsx)("img",{style:{height:"45px",width:"45px"},className:"p-0",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/".concat(a.participant.summonerSpell1,".png"),alt:a.participant.summonerSpell1})}),(0,s.jsx)(i.rb,{children:(0,s.jsx)("img",{style:{height:"45px",width:"45px"},className:"p-0",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/".concat(a.participant.summonerSpell2,".png"),alt:a.participant.summonerSpell2})})]})})]}),(0,s.jsx)(l,{participant:a.participant})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.b7,{sm:"auto",children:(0,s.jsxs)(i.rb,{children:[(0,s.jsx)(i.b7,{className:"px-2",children:(0,s.jsx)(n.rU,{to:"/champion/?champ=".concat("FiddleSticks"===a.participant.championName?"Fiddlesticks":a.participant.championName),state:{itemName:a.participant.championId},children:(0,s.jsx)("img",{style:{height:"90px",width:"90px"},src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/".concat("FiddleSticks"===a.participant.championName?"Fiddlesticks":a.participant.championName,".png"),alt:a.participant.championId})})}),(0,s.jsxs)(i.b7,{style:{height:"45px",width:"45px"},className:"p-0",children:[(0,s.jsx)(i.rb,{children:(0,s.jsx)("img",{style:{height:"45px",width:"45px"},className:"p-0",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/".concat(a.participant.summonerSpell1,".png"),alt:a.participant.summonerSpell1})}),(0,s.jsx)(i.rb,{children:(0,s.jsx)("img",{style:{height:"45px",width:"45px"},className:"p-0",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/".concat(a.participant.summonerSpell2,".png"),alt:a.participant.summonerSpell2})})]}),(0,s.jsx)(i.b7,{style:{width:"115px",padding:0},children:(0,s.jsx)(l,{participant:a.participant,summonerNameFromMatchDetail:a.participant.riotIdName+"#"+a.participant.riotIdTagline})})]})})})}},53663:function(a,t,e){e.d(t,{Z:function(){return o}});e(72791);var i=e(78983),n=e(11087),c=e(24846),s=e(93647),l=e(80184),r=function(a){var t=a.item,e=a.color;return 0!==t?(0,l.jsx)(i.Eb,{color:e,className:"p-0",children:(0,l.jsx)("img",{style:{height:"35px"},className:"m-1",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/".concat(t,".png"),alt:t})}):(0,l.jsx)(i.Eb,{color:e,className:"p-0",children:(0,l.jsx)(c.Z,{style:{height:"35px",width:"35px"},className:"m-1",size:"lg",icon:s.U})})};var o=function(a){function t(){return(0,l.jsxs)(i.GZ,{children:[(0,l.jsxs)(i.GZ,{layout:"horizontal",children:[(0,l.jsx)(r,{item:a.participant.item0,color:a.color}),(0,l.jsx)(r,{item:a.participant.item1,color:a.color}),(0,l.jsx)(r,{item:a.participant.item2,color:a.color}),(0,l.jsx)(r,{item:a.participant.item6,color:a.color})]}),(0,l.jsxs)(i.GZ,{layout:"horizontal",children:[(0,l.jsx)(r,{item:a.participant.item3,color:a.color}),(0,l.jsx)(r,{item:a.participant.item4,color:a.color}),(0,l.jsx)(r,{item:a.participant.item5,color:a.color})]})]})}return a.matchDetail?(0,l.jsx)(i.b7,{sm:"auto",className:"mx-3",children:t()}):(0,l.jsx)(i.b7,{children:(0,l.jsx)(n.rU,{to:"/matchDetail/?".concat(a.gameId,"#participant").concat(a.index),state:{match:a.match,participant:a.participant,number:a.index},className:"text-decoration-none text-black",children:t()})})}},84012:function(a,t,e){e(72791);var i=e(57689),n=e(80184);t.Z=function(a){var t=a.participants,e=a.imageSize,c=a.participant,s=(0,i.s0)(),l=function(a){var t=a.riotIdName+"#"+a.riotIdTagline,e=encodeURIComponent(t);fetch("https://metamindslol-backend-render.onrender.com/summoners/EUW1/".concat(e)).then((function(a){return a.json()})).then((function(a){"Summoner not found"!==a?s("/summoner/?summonerName=".concat(e),{state:{summoner:a}}):console.error("Summoner not found")})).catch((function(a){return console.error("Error fetching summoner data:",a)}))};return t?(0,n.jsx)(n.Fragment,{children:t.map((function(a,t){return(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("img",{style:{height:e,width:e},className:"ms-2 p-1",src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/".concat("FiddleSticks"===a.championName?"Fiddlesticks":a.championName,".png"),alt:a.championId},a.championId),(0,n.jsx)("span",{className:"ms-2",style:{cursor:"pointer",whiteSpace:"pre",width:"150px"},onClick:function(){return l(a)},children:a.riotIdName+"#"+a.riotIdTagline})]},t)}))}):c?(0,n.jsx)("div",{className:"d-flex align-items-center px-1",children:(0,n.jsx)("span",{style:{cursor:"pointer",whiteSpace:"pre"},onClick:function(){return l(c)},children:function(a,t){var e=(t-a.length)/2,i=a.padStart(a.length+e," ");t%2!==0&&(i=a.padStart(a.length+e+1," "));var n=i.padEnd(t," ");return console.log(n+" length: "+n.length),n}(c.riotIdName,16)})},c.riotIdName+"#"+c.riotIdTagline):(0,n.jsx)("div",{children:"No participant is being given"})}},95218:function(a,t,e){e.r(t),e.d(t,{default:function(){return h}});var i=e(1413),n=e(72791),c=e(78983),s=e(57689),l=e(92646),r=e(53663),o=e(33035),d=e(76131),m=e(80184),p=function(a){var t=a.data1,e=a.data2,i=a.label1,n=a.label2,c=a.title,s={id:"doughnutTextPlugin",beforeDraw:function(a){console.log("doughnutTextPlugin");var i=a.chartArea.width,n=a.chartArea.height,c=a.ctx;c.restore();var s=(n/114).toFixed(2);c.font=s+"em sans-serif",c.textBaseline="middle";var l="".concat(t,"\n-------------------\n").concat(e),r=n/2+a.legend.height+a.titleBlock.height;l.split("\n").forEach((function(a,t){var e=c.measureText(a).width,n=Math.round((i-e)/2);c.fillText(a,n,r+20*(t-1))})),c.save()}};return(0,m.jsx)("div",{className:"m-2",style:{width:"31%"},children:(0,m.jsx)(o.FR,{type:"doughnut",data:{labels:[i,n],datasets:[{backgroundColor:["#41B883","#DD1B16"],data:[t,e]}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{title:{display:!0,text:c,font:{size:25}},legend:{labels:{color:(0,d.Z)("--cui-body-color")}}}},plugins:[s]})},t)},h=function(){var a=(0,s.TH)().state,t=a.match,e=a.number,d=t.gameId,h=t.participants,u=h[e],g=e>=5?h[e-5]:h[e+5],x=(0,s.s0)();function f(a,e){return(0,m.jsx)(n.Fragment,{children:(0,m.jsxs)(c.rb,{className:"pb-1 pt-1",children:[(0,m.jsx)(l.Z,{participant:a,gameId:d,index:e,match:t,singleMatch:!1}),(0,m.jsx)(r.Z,{gameId:d,index:e,match:t,participant:a,color:"success",matchDetail:!0})]})},a)}var j={labels:h.map((function(a){return"FiddleSticks"===a.championName?"Fiddlesticks":a.championName})),datasets:[{label:"Champion Damage Dealt To Champions",data:h.map((function(a){return a.totalDamageDealtToChampions})),backgroundColor:h.map((function(a){return"BLUE"===a.team?"#7986f8":"#f87979"}))},{label:"Physical Damage Dealt To Champions",data:h.map((function(a){return a.physicalDamageDealtToChampions})),backgroundColor:h.map((function(a){return"BLUE"===a.team?"#7986f8":"#f87979"})),hidden:!0},{label:"Magical Damage Dealt To Champions",data:h.map((function(a){return a.magicDamageDealtToChampions})),backgroundColor:h.map((function(a){return"BLUE"===a.team?"#7986f8":"#f87979"})),hidden:!0},{label:"True Damage Dealt To Champions",data:h.map((function(a){return a.trueDamageDealtToChampions})),backgroundColor:h.map((function(a){return"BLUE"===a.team?"#7986f8":"#f87979"})),hidden:!0}]};return(0,m.jsxs)(c.KB,{children:[(0,m.jsx)("h2",{children:"Match Details"}),(0,m.jsxs)(c.rb,{children:[(0,m.jsxs)(c.b7,{children:[(0,m.jsx)("h3",{children:"Team 1"}),h.slice(0,5).map((function(a,t){return f(a,t)}))]}),(0,m.jsxs)(c.b7,{children:[(0,m.jsx)("h3",{children:"Team 2"}),h.slice(5,10).map((function(a,t){return f(a,t)}))]})]}),(0,m.jsx)(c.rb,{children:(0,m.jsx)(c.b7,{children:(0,m.jsx)(o.FR,{type:"bar",data:j})})}),(0,m.jsx)(c.GZ,{className:"mt-3 justify-content-center",layout:"horizontal",children:h.map((function(a,n){return(0,m.jsx)(c.Eb,{className:"d-flex align-items-center p-0",style:n===e?{border:"2px solid #7986f8"}:{},children:(0,m.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/".concat("FiddleSticks"===a.championName?"Fiddlesticks":a.championName,".png"),alt:"FiddleSticks"===a.championName?"Fiddlesticks":a.championName,style:(0,i.Z)({width:"50px",height:"50px"},n===e?{border:"2px solid #7986f8"}:{}),onClick:function(){x("/matchDetail/?".concat(d,"#participant").concat(n),{state:{match:t,number:n}})}})},n)}))}),(0,m.jsx)(c.rb,{children:(0,m.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,m.jsxs)(c.rb,{className:"w-100",children:[(0,m.jsx)(p,{data1:u.kills,data2:g.kills,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"Total Kills"}),(0,m.jsx)(p,{data1:u.goldEarned,data2:g.goldEarned,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"Gold obtained"}),(0,m.jsx)(p,{data1:u.totalMinionsKilled+u.neutralMinionsKilled,data2:g.totalMinionsKilled+g.neutralMinionsKilled,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"total CS"})]}),(0,m.jsxs)(c.rb,{className:"w-100",children:[(0,m.jsx)(p,{data1:u.visionScore,data2:g.visionScore,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"Vision Score"}),(0,m.jsx)(p,{data1:u.totalDamageTaken,data2:g.totalDamageTaken,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"Damage taken"}),(0,m.jsx)(p,{data1:u.damageDealtToTurrets,data2:g.damageDealtToTurrets,label1:"FiddleSticks"===u.championName?"Fiddlesticks":u.championName,label2:"FiddleSticks"===g.championName?"Fiddlesticks":g.championName,title:"Damage dealt to turrets"})]})]})})]})}},93647:function(a,t,e){e.d(t,{U:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},76131:function(a,t,e){e.d(t,{Z:function(){return i}});var i=function(a,t){if("undefined"!==typeof window&&"undefined"!==typeof document){var e=null!==t&&void 0!==t?t:document.body;return window.getComputedStyle(e,null).getPropertyValue(a).replace(/^\s/,"")}}}}]);
//# sourceMappingURL=5218.1c156991.chunk.js.map