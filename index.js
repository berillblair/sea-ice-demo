!function(e){function t(t){for(var a,n,o=t[0],i=t[1],l=0,s=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&s.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);s.length;)s.shift()()}var a={},r={0:0};var n={};var o={3:function(){return{"./index_bg.js":{__wbindgen_json_parse:function(e,t){return a[2].exports.d(e,t)},__wbindgen_json_serialize:function(e,t){return a[2].exports.e(e,t)},__wbindgen_object_drop_ref:function(e){return a[2].exports.f(e)},__wbg_new_693216e109162396:function(){return a[2].exports.b()},__wbg_stack_0ddaca5d1abfb52f:function(e,t){return a[2].exports.c(e,t)},__wbg_error_09919627ac0992f5:function(e,t){return a[2].exports.a(e,t)},__wbindgen_throw:function(e,t){return a[2].exports.g(e,t)}}}}};function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=l);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return({1:[3]}[e]||[]).forEach((function(e){var a=n[e];if(a)t.push(a);else{var r,l=o[e](),s=fetch(i.p+""+{3:"80cffeb7d70db2f03a80"}[e]+".module.wasm");if(l instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),l]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,l);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,l)}))}t.push(n[e]=r.then((function(t){return i.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i(i.s=0)}([function(e,t,a){let r=document.getElementById("canvas"),n=r.getContext("2d"),o=document.createElement("canvas");o.width=r.width,o.height=r.height,r.width=663,r.height=517;let i=document.createElement("canvas"),l=i.getContext("2d"),s=2034,c=2035,u=o.getContext("2d");const d=[[234,491],[184,304],[127,263],[232,303],[217,262],[262,287],[305,262],[255,222],[153,230],[310,189],[388,501],[360,255],[503,287],[431,392],[646,262],[350,137],[291,313],[388,47],[342,65],[274,80],[212,88],[132,146]].map(e=>[Math.floor(e[0]/2),Math.floor(e[1]/2)]);function g(e){let t=new Image;return t.src=e,new Promise((e,a)=>{t.onload=function(){i.width=this.width,i.height=this.height,l.drawImage(this,0,0),e({img:t,rgb:l.getImageData(0,0,this.width,this.height).data})}})}function h(e,t){let a,r=!1;return function(){let n;if(r)n=a,r=!1;else{let e,t,o;do{e=2*Math.random()-1,t=2*Math.random()-1,o=e*e+t*t}while(o>=1);o=Math.sqrt(-2*Math.log(o)/o),n=e*o,a=t*o,r=!0}let o=e+t*n;return o>0?o:-o}}h(.51,.2),h(.6,.2);let p=["2228AprilMay","2228AugOct","2228JuneJuly","2835AprilMay","2835AugOct","2835JuneJuly"],m=["April","May","June","July","August","September","October"];(async()=>{let e,t,r=await a.e(1).then(a.bind(null,1)),i={},l=parseInt(document.getElementById("release-year").value),h=parseFloat(document.getElementById("new-product-quality").value),f=parseInt(document.getElementById("informational-environment-reliability").value)/10,y=parseInt(document.getElementById("provider-trust").value)/10,b=parseFloat(document.getElementById("prop-he").value),_=parseFloat(document.getElementById("prop-ea").value);let v=!1,I=[],w={},E=1,M=11,B=2021,x=0,A={},T={};function k(){let e={},t={},a=[];for(let e=0;e<=100;e++)a[e]=[];for(let t=1;t<=29;t++)for(let a=0;a<E;a++)for(let r=2022;r<=2035;r++)e[r]||(e[r]={}),e[r][t]||(e[r][t]=0),e[r][t]+=A[a][r][t];for(let e=0;e<E;e++)for(let a=2022;a<=2035;a++)t[a]||(t[a]={adoptionRatio:0,averageCertainty:0,averageInfEnv:0,averageUtility:0,averageInTrial:0}),t[a].adoptionRatio+=T[e][a].adoptionRatio,t[a].averageCertainty+=T[e][a].averageCertainty,t[a].averageInfEnv+=T[e][a].averageInfEnv,t[a].averageUtility+=T[e][a].averageUtility,t[a].averageInTrial+=T[e][a].averageInTrial;for(let e=2022;e<=2035;e++)t[e]||(t[e]={}),t[e].adoptionRatio/=E,t[e].averageCertainty/=E,t[e].averageInfEnv/=E,t[e].averageUtility/=E,t[e].averageInTrial/=E;a[0][0]="Release year",a[1][0]=l,a[0][1]="Informational Environment Reliability",a[1][1]=f,a[0][2]="Provider trust",a[1][2]=y,a[0][3]="New product quality",a[1][3]=h,a[0][4]="Percentage highly experienced",a[1][4]=b,a[0][5]="Percentage early adopters",a[1][5]=_,a[0][7]="Trial length",a[1][7]=1,a[0][8]="High sea ice?",a[1][8]=v?"yes":"no";for(let e=0;e<14;e++)a[2][e+1]=e+2022;for(let t=1;t<=29;t++){a[t+2][0]="Route "+t;for(let r=2022;r<=2035;r++){e[r][t]/=E;let n=r-2021,o=e[r][t];a[t+2][n]=isNaN(o)?0:o}}a[2][20]="Average Certainty",a[2][21]="Adoption Ratio",a[2][22]="Average Informational Environment Reliance",a[2][23]="Average Utility",a[2][24]="In-Trial Ratio";for(let e=2022;e<=2035;e++)a[e-2021+2][19]=e,a[e-2021+2][20]=t[e].averageCertainty,a[e-2021+2][21]=t[e].adoptionRatio,a[e-2021+2][22]=t[e].averageInfEnv,a[e-2021+2][23]=t[e].averageUtility,a[e-2021+2][24]=t[e].averageInTrial;a[19][18]="Simulation";for(let e=0;e<E;e++){let t=13*e+20;a[t]||(a[t]=[]),a[t][25]=(w[e]||[]).join(";");for(let t=2022;t<=2035;t++){let r=13*e+20+(t-2022);a[r]||(a[r]=[]),a[r][18]=e,a[r][19]=t,a[r][20]=T[e][t].averageCertainty,a[r][21]=T[e][t].adoptionRatio,a[r][22]=T[e][t].averageCertainty,a[r][23]=T[e][t].averageUtility,a[r][24]=T[e][t].averageInTrial}}let r="";for(let e=0;e<a.length;e++){for(let t=0;t<=40;t++)r+=(void 0===a[e][t]||"number"==typeof a[e][t]&&isNaN(a[e][t])?"":a[e][t])+",";r+="\n"}window.open(encodeURI("data:text/csv;charset=utf-8,"+r))}let C={average_certainty:new Chart(document.getElementById("certainty-graph"),{type:"line",data:{labels:[],datasets:[{label:"Average Certainty",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{responsive:!1,scales:{y:{min:0,max:1}}}}),ship_count:new Chart(document.getElementById("ship-count"),{type:"line",data:{labels:[],datasets:[{label:"# of Ships",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{responsive:!1}}),adopters:new Chart(document.getElementById("adopters"),{type:"line",data:{labels:[],datasets:[{label:"% Adopters",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]},{label:"% Trialers",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]},{label:"% Non-Users",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{responsive:!1}}),reliance_on_informational_environment:new Chart(document.getElementById("informational-environment-reliance"),{type:"line",data:{labels:[],datasets:[{label:"Average reliance on informational environment",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}]},options:{responsive:!1,scales:{y:{min:0,max:1}}}})};function P(e,t){1!==t[t.length-1]&&r.add_ship_task(e,{task:"SetPosition",data:d[0]}),t.reverse().forEach(t=>{r.add_ship_task(e,{task:"GoTo",data:d[t-1]})})}const O={1:[[[1,2,4,1],1],[[1,2,4,2,1],2],[[1,2,4,6,4,2,1],3]],2:[[[1,2,4,6,8,6,2,1],4],[[1,2,4,6,8,6,4,2,1],5],[[1,2,5,2,1],6],[[1,4,6,8,6,4,2,1],7],[[1,4,6,8,9,3,1],8]],3:[[[1,2,4,6,7,6,2,1],9],[[1,2,4,6,7,6,4,2,1],10]],4:[[[1,2,4,6,10,7,17,6,4,2,1],11],[[1,2,4,6,7,10,9,3,1],12],[[1,2,4,6,7,12,7,6,5,2,1],13],[[1,2,4,6,8,10,7,6,4,2,1],14],[[1,2,4,6,8,16,10,6,4,2,1],15]],5:[[[1,2,4,6,20,18,19,6,4,2,1],16],[[1,2,4,6,20,6,2,1],17],[[1,4,6,20,6,4,2,1],18],[[1,4,6,21,9,3,1],19]],6:[[[1,2,4,6,19,7,17,6,4,2,1],20],[[1,2,4,6,20,19,7,6,4,2,1],21],[[1,2,4,6,20,6,4,2,1],22],[[1,2,4,6,7,19,22,1],23]],7:[[[1,2,4,6,7,14,13,11],24],[[1,2,4,6,8,14,11],25]],8:[[[1,2,4,6,20,14,11],26],[[1,2,4,6,21,14,1],27],[[1,2,4,6,7,12,13,11],28]],9:[[[1,2,4,6,7,12,15,13,14,11],29]]};function R(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function j(e,t,...a){let r=a[R(0,a.length)],n=O[Math.max(r-t,1)],o=R(0,n.length),i=n[o][0],l=n[o][1];return A[x]||(A[x]={}),A[x][e]||(A[x][e]={}),A[x][e][l]||(A[x][e][l]=0),A[x][e][l]++,i}function S(e,t,a){return Math.min(a.reliance_on_informational_environment+function(e,t,a){return a.reliance_boost}(0,0,a),1)}for(let a=0;a<p.length;a++){let r=await g("images/"+p[a]+".png"),n=r.img,o=r.rgb;e=Math.floor(r.img.width/4),t=Math.floor(r.img.height/4);let l=new Uint8Array(e*t);for(let a=0;a<t;a++)for(let t=0;t<e;t++){let r=Math.floor(4*t),i=4*(Math.floor(4*a)*n.width+r),s=(o[i],o[i+1]),c=o[i+2];Math.abs(c-234)<2?l[a*e+t]=2:l[a*e+t]=76===s?0:2}r.cells=l,i[p[a]]=r}r.make_game(e,t);let U=i["2228AprilMay"].img;r.upload_grid(i["2228AprilMay"].cells);let q=!1,$=(e,t)=>{let a;if(B<=2028)switch(M){case 4:case 5:a="2228AprilMay";break;case 6:case 7:a="2228JuneJuly";break;case 8:case 9:case 10:a="2228AugOct"}else switch(M){case 4:case 5:a="2835AprilMay";break;case 6:case 7:a="2835JuneJuly";break;case 8:case 9:case 10:a="2835AugOct"}U=i[a].img,function(e,t,a){n.setTransform(.5,0,0,.5,0,0),n.drawImage(e,0,0),u.clearRect(0,0,u.canvas.width,u.canvas.height),a.forEach(e=>{u.beginPath();let t=e[1].hits.filter(e=>e.year>=s&&e.year<=c).length;if(0!=t){u.moveTo(4*e[0][0][0],4*e[0][0][1]);for(let t=1;t<e[0].length;t++)u.lineTo(4*e[0][t][0],4*e[0][t][1]);u.lineWidth=.4*Math.log(e[1]+1),u.strokeStyle=`rgba(${30*Math.log(t)}, ${2*Math.log(t)}, 0.2, ${50/Math.log(t)})`,u.stroke(),u.beginPath()}}),n.drawImage(o,0,0)}(U,0,t)},J=()=>{let e=r.get_ship_states(),t=!1;for(let a=0;a<e.length;a++)if(e[a].tasks.length>0){t=!0;break}let a=!1;if(!t||E>1){if(a=!0,M++,M>10){if(e=r.get_ship_states(),2021!==B){if(1===E){let t=0;e.forEach(e=>{"Adopted"===e.adoption_status.status&&t++});let a=t/e.length,n=0,o=0;e.forEach(e=>{let t=h>=e.quality_threshold?1:0;n+=e.certainty,o+=e.weight_of_social_influence*a+(1-e.weight_of_social_influence)*t});let i=n/e.length;e.length;C.average_certainty.data.labels.push(B),C.average_certainty.data.datasets[0].data.push(i),C.average_certainty.update(),C.ship_count.data.labels.push(B),C.ship_count.data.datasets[0].data.push(e.length),C.ship_count.update(),C.adopters.data.labels.push(B),C.adopters.data.datasets[0].data.push(e.filter(e=>"Adopted"===e.adoption_status.status).length/e.length*100),C.adopters.data.datasets[1].data.push(e.filter(e=>"InTrial"===e.adoption_status.status).length/e.length*100),C.adopters.data.datasets[2].data.push(e.filter(e=>"NonUser"===e.adoption_status.status).length/e.length*100),C.adopters.update(),e=r.get_ship_states();let l=0;e.forEach(e=>l+=S(0,0,e));let s=l/e.length;C.reliance_on_informational_environment.data.labels.push(B),C.reliance_on_informational_environment.data.datasets[0].data.push(s),C.reliance_on_informational_environment.update()}e=r.get_ship_states();let t=0,a=0;e.forEach(e=>{"Adopted"===e.adoption_status.status&&t++,"InTrial"===e.adoption_status.status&&a++});let n=t/e.length,o=a/e.length,i=0,l=0,s=0;e.forEach(e=>{let t=h>=e.quality_threshold?1:0;i+=e.certainty,l+=e.weight_of_social_influence*n+(1-e.weight_of_social_influence)*t,s+=S(0,0,e)});let c=s/e.length,u=i/e.length,d=i/e.length;T[x]||(T[x]={}),T[x][B]={averageInfEnv:c,averageCertainty:u,averageUtility:d,adoptionRatio:n,averageInTrial:o}}e.forEach(e=>{let t=Math.min(e.experience_level+.05,1);r.update_ship_experience_level(t),t>.65&&function(e,t){let a;a=t>.65?.3*Math.random()+.1:.4*Math.random()+.6,r.update_reliance_on_informational_environment(e.id,a)}(e,t)}),e=r.get_ship_states(),e.forEach(e=>{!function(e){let t=1;if(y>.7&&(t=Math.ceil(.5)),"InTrial"===e.adoption_status.status&&B>=e.trial_year+t){let t=.25*S(I,B,e);t=Math.min(t+e.certainty,1),r.update_ship_certainty(e.id,t),r.update_ship_adoption_status(e.id,"Adopted")}}(e)}),e=r.get_ship_states();let t=0;if(e.forEach(e=>{e.experience_level>=.65&&t++}),M=4,B++,2022===B&&v){const e=[2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];I=[];for(let t=0;t<3;t++){let t=R(0,e.length);for(;I.includes(e[t]);)t=R(0,e.length);I.push(e[t])}I=I.sort((e,t)=>e-t),w[x]=I,console.log(I)}if(-1!=I.indexOf(B)&&e.forEach(e=>{let t=e.experience_level>.65?.2*Math.random():.4*Math.random();r.update_ship_reliance_boost(e.id,e.reliance_boost+t)}),e=r.get_ship_states(),r.update_year(B),e.forEach(e=>function(e,t){let a=S(0,0,t),n=(1-a)*t.experience_level+a*f;r.update_ship_certainty(t.id,n)}(0,e)),e=r.get_ship_states(),B>=l){let t=0;e.forEach(e=>{"Adopted"===e.adoption_status.status&&t++});let a=t/e.length;e.forEach(e=>{let t=h>=e.quality_threshold?1:0;e.weight_of_social_influence*a+(1-e.weight_of_social_influence)*t>=e.utility_threshold&&"NonUser"===e.adoption_status.status&&(r.update_ship_trial_year(e.id,B),r.update_ship_adoption_status(e.id,"InTrial"))})}e=r.get_ship_states(),B>2035&&(1===E?(q=!1,k()):(x++,x===E?(q=!1,k()):(document.getElementById("simulation-number").innerHTML="Simulation: #"+(x+1),B=2021,M=4,r.clear_ships(),e=r.get_ship_states())))}e=r.get_ship_states(),document.getElementById("season").innerHTML=`${m[M-4]} ${B}`;let t=function(){switch(B){case 2022:case 2023:case 2024:case 2025:case 2026:case 2027:case 2028:switch(M){case 4:return.2;case 5:return.75;case 6:case 7:case 8:return 1;case 9:return.5;case 10:return.25}case 2029:case 2030:case 2031:case 2032:case 2033:case 2034:case 2035:switch(M){case 4:return.3;case 5:case 6:case 7:case 8:return 1;case 9:return.75;case 10:return.35}}}(),n=function(e){switch(e){case"realistic":switch(B){case 2022:return 42;case 2023:return 45;case 2024:return 48;case 2025:return 49;case 2026:return 52;case 2027:return 53;case 2028:return 55;case 2029:return 57;case 2030:return 60;case 2031:return 65;case 2032:case 2033:return 72;case 2034:return 73;case 2035:return 75}break;case"conservative":switch(B){case 2022:return 47;case 2023:case 2024:case 2025:case 2026:case 2027:return 49;case 2028:return 50;case 2029:return 51;case 2030:return 52;case 2031:return 53;case 2032:case 2033:return 54;case 2034:case 2035:return 55}break;case"optimistic":switch(B){case 2022:return 42;case 2023:return 45;case 2024:return 50;case 2025:return 63;case 2026:return 65;case 2027:return 80;case 2028:return 95;case 2029:case 2030:return 105;case 2031:case 2032:return 110;case 2033:return 115;case 2034:return 118;case 2035:return 120}}}(document.getElementById("realism").value),o=Math.floor(n*t),i=o-e.length;if(o>e.length){let t=[];for(let e=0;e<i;e++)e<i*b?t.push(.35*Math.random()+.65):t.push(.649999*Math.random());let a=e.map(e=>e.experience_level).concat(t).sort((e,t)=>e>t?1:e<t?-1:0);for(let t=0;t<i;t++){let n=t/(o-e.length)<=_,i=n?.8*Math.random():Math.random();B>=2029&&(i=n?.6*Math.random():.8*Math.random());let s,c=a[t],u=n?.51:.6;s=c>.65?.3*Math.random()+.1:.4*Math.random()+.6;let g=B>=l,p=(1-s)*c+s*f,m=0;e.forEach(e=>{"Adopted"===e.adoption_status.status&&m++});let b=u*(m/e.length)+(1-u)*(h>=i?1:0),v="NonUser",I=e.map(e=>e.experience_level).concat(c).sort().reverse(),w=I.indexOf(c)/I.length;b>=i&&g&&w<_&&(v="InTrial"),r.add_ship(d[0][0],d[0][1],Math.random(),n,v,i,c,p,s,u,y,20*Math.random(),20*Math.random(),B)}e=r.get_ship_states()}let s=e.sort((e,t)=>e.certainty>t.certainty?1:e.certainty<t.certainty?-1:0),c=function(e){let t=I.includes(e)?2:0;switch(e){case 2022:case 2023:case 2024:case 2025:case 2026:case 2027:case 2028:switch(M){case 4:case 5:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,2)):P(r,j(e,t,1))};case 6:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,2,4)):P(r,j(e,t,3))};case 7:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,7,8)):P(r,j(e,t,2,5,7))};case 8:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,7,8,9)):P(r,j(e,t,4,7,8))};case 9:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,4,5)):P(r,j(e,t,1))};case 10:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,3)):P(r,j(e,t,1))}}default:switch(M){case 4:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,5)):P(r,j(e,t,2))};case 5:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,5,7)):P(r,j(e,t,3))};case 6:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,7,8)):P(r,j(e,t,5,7))};case 7:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,7,8,9)):P(r,j(e,t,6,7,8))};case 8:return(a,r,n,o)=>{o>=n/2&&a.certainty,P(r,j(e,t,7,8,9))};case 9:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,5,8,9)):P(r,j(e,t,6,7))};case 10:return(a,r,n,o)=>{o>=n/2&&a.certainty>=.5?P(r,j(e,t,6)):P(r,j(e,t,1,6))}}}}(B),u=e.filter(e=>e.experience_level>=.65).concat(e.filter(e=>e.experience_level<.65));for(let e=0;e<o;e++){let t=u[e];c(t,t.id,o,s.indexOf(t)),c(t,t.id,o,s.indexOf(t))}}let n=parseInt(document.getElementById("speed").value);if(1===E)for(let e=0;e<n;e++)r.tick_game();a&&1===E&&$(r.get_ship_states(),r.get_routes())};document.getElementById("play").onclick=()=>{q=!0;let e=()=>{q&&(J(),requestAnimationFrame(e))};e()},document.getElementById("record").onclick=()=>{q=!0,E=30;let e=()=>{q&&(J(),requestAnimationFrame(e))};e()};let L=e=>{l=parseInt(e.value),document.getElementById("release-year-label").innerHTML=`Release year (${e.value})`},H=e=>{let t=parseInt(e.value)/10;document.getElementById("informational-environment-reliability-label").innerHTML=`Informational environment reliability (${t})`,f=t},N=e=>{let t=parseInt(e.value)/10;document.getElementById("provider-trust-label").innerHTML=`Provider trust (${t})`,y=t},W=e=>{h=parseFloat(e.value),document.getElementById("new-product-quality-label").innerHTML=`New-product quality (${h})`},F=e=>{b=e.value,document.getElementById("prop-he-label").innerHTML=`Percentage highly experienced (${100*b}%)`},z=e=>{_=e.value,document.getElementById("prop-ea-label").innerHTML=`Percentage early adopters (${100*_}%)`},D=e=>{s=parseInt(e.value),document.getElementById("min-year-label").innerHTML=`Min graph year (${s})`,$(r.get_ship_states(),r.get_routes())},G=e=>{c=parseInt(e.value),document.getElementById("max-year-label").innerHTML=`Max graph year (${c})`,$(r.get_ship_states(),r.get_routes())};document.getElementById("release-year").onchange=e=>L(e.target),document.getElementById("informational-environment-reliability").onchange=e=>H(e.target),document.getElementById("provider-trust").onchange=e=>N(e.target),document.getElementById("new-product-quality").onchange=e=>W(e.target),document.getElementById("prop-he").onchange=e=>F(e.target),document.getElementById("prop-ea").onchange=e=>z(e.target),document.getElementById("min-year-view").onchange=e=>D(e.target),document.getElementById("max-year-view").onchange=e=>G(e.target),document.getElementById("high-sea-ice").onchange=e=>{v=e.target.checked},v=document.getElementById("high-sea-ice").checked,L(document.getElementById("release-year")),H(document.getElementById("informational-environment-reliability")),N(document.getElementById("provider-trust")),W(document.getElementById("new-product-quality")),F(document.getElementById("prop-he")),z(document.getElementById("prop-ea")),D(document.getElementById("min-year-view")),G(document.getElementById("max-year-view"))})()}]);