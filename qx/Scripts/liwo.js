const $=hammer("梨涡签到"),CookieKey="liwoCookie";function GetCookie(){$.log(`cookie:
 `+$request.body),$.write($request.body,CookieKey),$.alert("签到Cookie写入成功"),$.done()}async function main(){var e=$.read("CookieJD"),t=$.read(CookieKey);if(!e||!t)return $.log("Cookie不存在，中止运行."),$.done();let r={url:"https://api.m.jd.com/api/v1/sign/doSign",headers:{"Content-Type":"application/x-www-form-urlencoded",Cookie:e,Host:"api.m.jd.com",Origin:"https://2do.jd.com",Referer:"https://2do.jd.com/events/7-days/","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/yocial/5.1.1(iOS;13.7;com.jd.campustodo)"},body:t.replace(/&t=\d+/,"&t="+Date.now().toString())};const n={"open-url":"yocial://webview/?url=https%3A%2F%2F2do.jd.com%2Fevents%2F7-days%2F%23%2F&login=1"};e=()=>new Promise(i=>{$.request("post",r,(e,t,o)=>{var s=r.url.split("/").pop();return e?($.log(s+` request error: 
`+e),i(0)):($.log(s+` response: 
`+t),(t=JSON.parse(t)).status?(e=t.data,$.alert(e.message,e.title+",余额："+e.currentAmount,n),i(1)):39004==t.error.code?setTimeout(()=>{i(2)},1234):($.alert(t.error.message,"",n),i(3)))})});2==await e(r)&&(r.url=r.url.replace("doSign","resetSign"),r.body=r.body.replace("v1_sign_doSign","v1_sign_resetSign"),await e(r)),$.done()}function hammer(e="untitled",i=3){return new class{constructor(e,t){this.name=e,this.logLevel=t,this.isRequest="object"==typeof $request&&"OPTIONS"!=$request.method,this.isSurge="undefined"!=typeof $httpClient,this.isQuanX="undefined"!=typeof $task,this.isNode="function"==typeof require,this.node=(()=>{if(!this.isNode)return null;var e="localstorage.yml";let t,o,s;try{t=require("fs"),o=require("js-yaml"),s=require("request"),t.appendFile(e,"",function(e){if(e)throw e})}catch(e){return console.log("install unrequired module by: yarn add module_name"),console.log(e.message),{}}return{file:e,fs:t,yaml:o,request:s}})()}log(...e){if(i<2)return null;for(var t in console.log(`
***********${this.name}***********`),e)console.log(e[t])}alert(e="",t="",o={}){if(2==i||0==i)return null;"string"==typeof o&&(o={"open-url":o});let s=null;return Object.keys(o).length&&(s=this.isQuanX?o:{openUrl:o["open-url"],mediaUrl:o["media-url"]}),this.isSurge?$notification.post(this.name,t,e,s):this.isQuanX?$notify(this.name,t,e,s):void console.log(`系统通知📣
title:${this.name}
subtitle:${t}
body:${e}
link:`+s)}request(e,t,s){var o={};"string"==typeof t?o.url=t:(o.url=t.url,"object"==typeof t&&(t.headers&&(o.headers=t.headers),t.body)&&(o.body=t.body));const i=function(t,o){return e=>console.log(this.name+`request error:
`+t+o,e)}(e=e.toUpperCase(),o.url);if(this.isSurge)return("GET"==e?$httpClient.get:$httpClient.post)(o,(e,t,o)=>{null==e||""==e?(t.body=o,s("",o,t)):(i(e),s(e,"",t))});if(o.method=e,this.isQuanX&&$task.fetch(o).then(e=>{e.status=e.statusCode,delete e.statusCode,s("",e.body,e)},e=>{i(e.error),response.status=response.statusCode,delete response.statusCode,s(e.error,"",response)}),this.isNode){if("POST"==o.method&&o.body)try{o.body=JSON.parse(o.body),o.json=!0}catch(e){console.log(e.message)}this.node.request(o,(e,t,o)=>{"object"==typeof o&&(o=JSON.stringify(o)),"object"==typeof t&&t&&(t.status=t.statusCode,delete t.statusCode),s(e,o,t)})}}read(t){if(this.isSurge)return $persistentStore.read(t);if(this.isQuanX)return $prefs.valueForKey(t);if(this.isNode){let e="";try{var o=this.node.fs.readFileSync(this.node.file,"utf8"),s=this.node.yaml.safeLoad(o);e="object"==typeof s&&s[t]?s[t]:""}catch(e){return console.log(`读取文件时错误:
`+e.message),""}return e}}write(e,t){if(this.isSurge)return $persistentStore.write(e,t);if(this.isQuanX)return $prefs.setValueForKey(e,t);if(this.isNode){try{var o=this.node.fs.readFileSync(this.node.file,"utf8"),s=this.node.yaml.safeLoad(o);(s="object"==typeof s?s:{})[t]=e,e=this.node.yaml.safeDump(s),this.node.fs.writeFileSync(this.node.file,e,"utf8")}catch(e){return console.log(e.message),!1}return!0}}delete(e){if(this.isNode){try{var t=this.node.fs.readFileSync(this.node.file,"utf8"),o=this.node.yaml.safeLoad(t);if(!(o="object"==typeof o?o:{}).hasOwnProperty(e))return!0;delete o[e];var s=this.node.yaml.safeDump(o);this.node.fs.writeFileSync(this.node.file,s,"utf8")}catch(e){return console.log(e.message),!1}return!0}}done(e={}){return this.isQuanX?this.isRequest?$done(e):null:this.isSurge?this.isRequest?$done(e):$done():void 0}pad(e=!1,t="*",o=15){return e?this.log(t.padEnd(o,t)):`
${t.padEnd(o,t)}
`}}(e,i)}($.isRequest?GetCookie:main)();