var fdata={jsonurl:"",apiurl:"",apipublieurl:"https://friendsapi.0skyu.cn/",initnumber:20,stepnumber:10,article_sort:"created",error_img:"/pingo/pg5.png"};if("undefined"!=typeof fdataUser)for(var key in fdataUser)fdataUser[key]&&(fdata[key]=fdataUser[key]);var article_num="",sortNow="",UrlNow="",friends_num="",container=document.getElementById("cf-container")||document.getElementById("fcircleContainer"),localSortNow=localStorage.getItem("sortNow"),localUrlNow=localStorage.getItem("urlNow");function loadStatistical(a){article_num=a.article_num,friends_num=a.friends_num;var t=`
  <div id="cf-state" class="cf-new-add">
    <div class="cf-state-data">
      <div class="cf-data-friends" onclick="openToShow()">
        <span class="cf-label">Subscription</span>
        <span class="cf-message">${a.friends_num}</span>
      </div>
      <div class="cf-data-active" onclick="changeEgg()">
        <span class="cf-label">Active</span>
        <span class="cf-message">${a.active_num}</span>
      </div>
      <div class="cf-data-article" onclick="clearLocal()">
        <span class="cf-label">Log</span>
        <span class="cf-message">${a.article_num}</span>
      </div>
    </div>
    <div id="cf-change">
        <span id="cf-change-created" data-sort="created" onclick="changeSort(event)" class="${"created"==sortNow?"cf-change-now":""}">Created</span> | <span id="cf-change-updated" data-sort="updated" onclick="changeSort(event)" class="${"updated"==sortNow?"cf-change-now":""}" >Updated</span>
    </div>
  </div>
  `,a=`
    <div id="cf-more" class="cf-new-add" onclick="loadNextArticle()"><i class="fas fa-angle-double-down"></i></div>
    <div id="cf-footer" class="cf-new-add">
     <span id="cf-version-up" onclick="checkVersion()"></span>
     <span class="cf-data-lastupdated">Updated on：${a.last_updated_time}</span>
      Powered by <a target="_blank" href="https://github.com/dstansice/hexo-circle-of-friends" target="_blank">FriendCircle</a>
    </div>
    <div id="cf-overlay" class="cf-new-add" onclick="closeShow()"></div>
    <div id="cf-overshow" class="cf-new-add"></div>
  `;container&&(container.insertAdjacentHTML("beforebegin",t),container.insertAdjacentHTML("afterend",a))}function loadArticleItem(a,t,e){var l="",o=article_num<e?article_num:e;if(t<article_num){for(var r=t;r<o;r++){var c=a[r];l+=`
      <div class="cf-article">
        <a class="cf-article-title" href="${c.link}" target="_blank" rel="noopener nofollow" data-title="${c.title}">${c.title}</a>
        <span class="cf-article-floor">${c.floor}</span>
        <div class="cf-article-avatar no-lightbox flink-item-icon">
          <img class="cf-img-avatar avatar" src="${c.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;">
          <a onclick="openMeShow(event)" data-link="${c.link}" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><span class="cf-article-author">${c.author}</span></a>
          <span class="cf-article-time">
            <span class="cf-time-created" style="${"created"==sortNow?"":"display:none"}"><i class="far fa-calendar-alt">Published on</i>${c.created}</span>
            <span class="cf-time-updated" style="${"updated"==sortNow?"":"display:none"}"><i class="fas fa-history">Updated on</i>${c.updated}</span>
          </span>
        </div>
      </div>
      `}container.insertAdjacentHTML("beforeend",l),fetchNextArticle()}else document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>Everything has an end!</small></div>'}function loadFcircleShow(a,t){for(var e=`
      <div class="cf-overshow">
        <div class="cf-overshow-head">
          <img class="cf-img-avatar avatar" src="${a.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;">
          <a class="" target="_blank" rel="noopener nofollow" href="${a.link}">${a.author}</a>
        </div>
        <div class="cf-overshow-content">
  `,l=0;l<a.article_num;l++){var o=t[l];e+=`
      <p><a class="cf-article-title"  href="${o.link}" target="_blank" rel="noopener nofollow" data-title="${o.title}">${o.title}</a><span>${o.created}</span></p>
    `}e+="</div></div>",document.getElementById("cf-overshow").insertAdjacentHTML("beforeend",e),document.getElementById("cf-overshow").className="cf-show-now"}function fetchNextArticle(){var start=document.getElementsByClassName("cf-article").length,end=start+fdata.stepnumber,articleNum=article_num,fetchUrl;articleNum<end&&(end=articleNum),start<articleNum?(UrlNow=localStorage.getItem("urlNow"),fetchUrl=UrlNow+"rule="+sortNow+"&start="+start+"&end="+end,fetch(fetchUrl).then(a=>a.json()).then(json=>{var nextArticle=eval(json.article_data);console.log("已预载?rule="+sortNow+"&start="+start+"&end="+end),localStorage.setItem("nextArticle",JSON.stringify(nextArticle))})):(start=articleNum)&&(document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>Everything has an end! </small></div>')}function loadNextArticle(){for(var a=JSON.parse(localStorage.getItem("nextArticle")),t="",e=0;e<a.length;e++){var l=a[e];t+=`
      <div class="cf-article">
        <a class="cf-article-title" href="${l.link}" target="_blank" rel="noopener nofollow" data-title="${l.title}">${l.title}</a>
        <span class="cf-article-floor">${l.floor}</span>
        <div class="cf-article-avatar no-lightbox flink-item-icon">
          <img class="cf-img-avatar avatar" src="${l.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;">
          <a onclick="openMeShow(event)" data-link="${l.link}" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><span class="cf-article-author">${l.author}</span></a>
          <span class="cf-article-time">
            <span class="cf-time-created" style="${"created"==sortNow?"":"display:none"}"><i class="far fa-calendar-alt">Published on</i>${l.created}</span>
            <span class="cf-time-updated" style="${"updated"==sortNow?"":"display:none"}"><i class="fas fa-history">Updated on</i>${l.updated}</span>
          </span>
        </div>
      </div>
      `}container.insertAdjacentHTML("beforeend",t),fetchNextArticle()}function loadNoArticle(){var a=sortNow+"ArticleData";localStorage.removeItem(a),localStorage.removeItem("statisticalData"),document.getElementById("cf-more").remove(),window.scrollTo(0,document.getElementsByClassName("cf-state").offsetTop)}function clearLocal(){localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),localStorage.removeItem("sortNow"),localStorage.removeItem("urlNow"),location.reload()}function checkVersion(){var a=fdata.apiurl+"version";fetch(a).then(a=>a.json()).then(a=>{console.log(a);var t=a.status,e=a.current_version,a=a.latest_version;document.getElementById("cf-version-up").innerHTML=0==t?"Now Version：v"+e:1==t?"New Version：v"+e+" ↦ "+a:"Network error, detection failed!"})}function changeEgg(){var a;fdata.jsonurl||fdata.apiurl?(document.querySelectorAll(".cf-new-add").forEach(a=>a.remove()),localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),container.innerHTML="",UrlNow=localStorage.getItem("urlNow"),a=fdata.apipublieurl+"api?",UrlNow!==a?changeUrl=fdata.apipublieurl+"api?":fdata.jsonurl?changeUrl=fdata.apipublieurl+"postjson?jsonlink="+fdata.jsonurl+"&":fdata.apiurl&&(changeUrl=fdata.apiurl+"api?"),localStorage.setItem("urlNow",changeUrl),FetchFriendCircle(sortNow,changeUrl)):clearLocal()}function FetchFriendCircle(sortNow,changeUrl){var end=fdata.initnumber,fetchUrl=changeUrl?changeUrl+"rule="+sortNow+"&start=0&end="+end:UrlNow+"rule="+sortNow+"&start=0&end="+end;fetch(fetchUrl).then(a=>a.json()).then(json=>{var statisticalData=json.statistical_data,articleData=eval(json.article_data),articleSortData=sortNow+"ArticleData";loadStatistical(statisticalData),loadArticleItem(articleData,0,end),localStorage.setItem("statisticalData",JSON.stringify(statisticalData)),localStorage.setItem(articleSortData,JSON.stringify(articleData))})}function changeSort(a){sortNow=a.currentTarget.dataset.sort,localStorage.setItem("sortNow",sortNow),document.querySelectorAll(".cf-new-add").forEach(a=>a.remove()),container.innerHTML="",changeUrl=localStorage.getItem("urlNow"),initFriendCircle(sortNow,changeUrl),fdata.apiurl&&checkVersion()}function openMeShow(a){a.preventDefault();a=a.currentTarget.dataset.link.replace(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,"$1:$2$3"),console.log(a),a=fdata.apiurl?fdata.apiurl+"post?num=5&link="+a:fdata.apipublieurl+"post?num=5&link="+a;"ok"==noClick&&(noClick="no",fetchShow(a))}function closeShow(){document.getElementById("cf-overlay").className-="cf-show-now",document.getElementById("cf-overshow").className-="cf-show-now",document.getElementById("cf-overshow").innerHTML=""}localSortNow&&localUrlNow?(sortNow=localSortNow,UrlNow=localUrlNow):(sortNow=fdata.article_sort,UrlNow=fdata.jsonurl?fdata.apipublieurl+"postjson?jsonlink="+fdata.jsonurl+"&":fdata.apiurl?fdata.apiurl+"api?":fdata.apipublieurl+"api?",console.log("当前模式："+UrlNow),localStorage.setItem("urlNow",UrlNow),localStorage.setItem("sortNow",sortNow));var noClick="ok";function openToShow(){var a=fdata.apiurl?fdata.apiurl+"post":fdata.apipublieurl+"post";"ok"==noClick&&(noClick="no",fetchShow(a))}function fetchShow(url){var closeHtml='\n    <div class="cf-overshow-close" onclick="closeShow()"></div>\n  ';document.getElementById("cf-overlay").className="cf-show-now",document.getElementById("cf-overshow").insertAdjacentHTML("afterbegin",closeHtml),console.log("开往"+url),fetch(url).then(a=>a.json()).then(json=>{noClick="ok";var statisticalData=json.statistical_data,articleData=eval(json.article_data);loadFcircleShow(statisticalData,articleData)})}function initFriendCircle(sortNow,changeUrl){var articleSortData=sortNow+"ArticleData",localStatisticalData=JSON.parse(localStorage.getItem("statisticalData")),localArticleData=JSON.parse(localStorage.getItem(articleSortData)),fetchUrl;container.innerHTML="",localStatisticalData&&localArticleData?(loadStatistical(localStatisticalData),loadArticleItem(localArticleData,0,fdata.initnumber),console.log("本地数据加载成功"),fetchUrl=UrlNow+"rule="+sortNow+"&start=0&end="+fdata.initnumber,fetch(fetchUrl).then(a=>a.json()).then(json=>{var statisticalData=json.statistical_data,articleData=eval(json.article_data),localSnum=localStatisticalData.article_num,newSnum=statisticalData.article_num,localAtile=localArticleData[0].title,newAtile=articleData[0].title,articleSortData;localSnum!==newSnum||localAtile!==newAtile?(document.getElementById("cf-state").remove(),document.getElementById("cf-more").remove(),document.getElementById("cf-footer").remove(),container.innerHTML="",articleSortData=sortNow+"ArticleData",loadStatistical(statisticalData),loadArticleItem(articleData,0,fdata.initnumber),localStorage.setItem("statisticalData",JSON.stringify(statisticalData)),localStorage.setItem(articleSortData,JSON.stringify(articleData)),console.log("热更新完成")):console.log("API数据未更新")})):(FetchFriendCircle(sortNow,changeUrl),console.log("第一次加载完成"))}initFriendCircle(sortNow);