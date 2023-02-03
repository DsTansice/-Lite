function GitCalendarInit(t,e,n){var w,i,a,$,l,o,d,s,c,_,r,g,u,m,k,p,h,v,f,y,b,x,I,B,E,S,T;document.getElementById("git_container")&&(w=(t,e)=>{if("string"==typeof e){var n=document.createElement("div");n.innerHTML=e;for(var i=document.createDocumentFragment();n.firstChild;)i.appendChild(n.firstChild);t.appendChild(i)}else t.appendChild(e)},i=document.getElementById("git_container"),document.getElementById("git_loading"),a=n,$=e,c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],_=[],u=g=r="",k=[],p=[],h=[],f=v=m=0,y=[],b=[],x=()=>{if(document.getElementById("gitcanvas")){var t,s=document.getElementById("git_tooltip_container"),e=window.devicePixelRatio||1,c="",r="",g="",u="",n=document.getElementById("gitcanvas"),i=(n.style.width="100%",n.style.height="",document.getElementById("gitmessage"),n.getContext("2d")),a=(width=n.width=document.getElementById("gitcalendarcanvasbox").offsetWidth,height=n.height=8.64*n.width/git_data.length,f=n,y=i,1<(e=e)&&(b=f.width,x=f.height,f.width=b*e,f.height=x*e,f.style.width="100%",f.style.height=x+"px",y.scale(e,e)),height/9),m=.8*a,l={x:.02*width,y:.025*width};for(t in git_data){for(var o in weekdata=git_data[t]){var d={date:"",count:"",x:0,y:0};k.push(d),i.fillStyle=E($,weekdata[o].count),l.y=Math.round(100*l.y)/100,d.date=weekdata[o].date,d.count=weekdata[o].count,d.x=l.x,d.y=l.y,i.fillRect(l.x,l.y,m,m),l.y=l.y+a}l.y=.025*width,l.x=l.x+a}if(700<document.body.clientWidth){i.font="600  Arial",i.fillStyle="#aaa",i.fillText("日",0,1.9*a),i.fillText("二",0,3.9*a),i.fillText("四",0,5.9*a),i.fillText("六",0,7.9*a);var p,h=n.width/24;for(p in _)i.fillText(_[p],h,.7*a),h+=n.width/12}n.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML=""),v(n,t)},s.onmousemove=function(t){document.querySelector(".gitmessage")&&(s.innerHTML="")};var v=(t,e)=>{var n,i=t.getBoundingClientRect(),a=e.clientX-i.left*(t.width/i.width),l=e.clientY-i.top*(t.height/i.height);for(n of k){var o=a-n.x,d=l-n.y;0<o&&o<m&&0<d&&d<m&&(g=n.date,u=n.count,c=e.clientX-100,r=e.clientY-60,html=S(c,r,g,u),w(s,html))}}}var f,y,b,x},I=t=>{for(var e of git_data[t])v+=e.count},B=()=>{for(var t of p)m+=t.count},fetch(t).then(t=>t.json()).then(t=>{document.getElementById("git_loading")&&document.getElementById("git_loading").remove(),git_data=t.contributions,l=t.total,y=git_data[48],d=git_data[47],o=t.contributions[0],p=t.contributions[52],h=t.contributions[51],f=p.length-1,r=p[f].date,o=o[0].date,s=+r.substring(5,7),b=c.splice(s,12-s),_=b.concat(c),t=t,(6===f?(u=p[0].date,B):(lastweek=t.contributions[51],u=lastweek[f+1].date,B(),()=>{for(var t=f;t<h.length;t++)m+=h[t].count}))(),g=(0===f?(I(52),I(51),I(50),I(49),I(48),v+=d[6].count,d[6]):(I(52),I(51),I(50),I(49),(()=>{for(var t=f-1;t<y.length;t++)v+=y[t].count})(),y[f-1])).date;t=T(_,git_data,a,$,l,v,m,o,r,u,g);w(i,t),x()}).catch(function(t){console.log(t)}),window.onresize=function(){x()},window.onscroll=function(){document.querySelector(".gitmessage")&&(git_tooltip_container.innerHTML="")},E=(t,e)=>0===e?(parseInt(e/2),t[0]):e<2?t[1]:e<20?t[parseInt(e/2)]:t[9],S=(t,e,n,i)=>{return""+`<div class="gitmessage" style="top:${e}px;left: ${t}px;position: fixed;z-index:9999">
                          <div class="angle-wrapper" style="display:block;">
                            <span>${n}&nbsp;</span>
                            <span>${i}uploads</span>
                          </div>
                        </div>`},T=(t,e,n,i,a,l,o,d,s,c,r)=>{var g="";return(g+=`<div class="position-relative">
                          <div class="border py-2 graph-before-activity-overview">
                            <div class="js-gitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas gitcalendar-graph height-full text-center">
                              <div id="gitcalendarcanvasbox">
                              <canvas id="gitcanvas" style="animation: none;">
                              </canvas>
                            </div>
                            </div>
                            ${`<div id="git_tooltip_container"></div>
                        <div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">
                          <div class="float-left text-gray">Data Sources
                            <a href="https://github.com/${n}" target="blank">@${n}</a>
                          </div>
                          <div class="contrib-legend text-gray">Less
                            <ul class="legend">
                            <li style="background-color:${i[0]}"></li>
                            <li style="background-color:${i[2]}"></li>
                            <li style="background-color:${i[4]}"></li>
                            <li style="background-color:${i[6]}"></li>
                            <li style="background-color:${i[8]}"></li>
                            </ul>More
                          </div>
                        </div>`}
                          </div>
                        </div>`)+`<div style="display:flex;width:100%">
                          <div class="contrib-column contrib-column-first table-column">
                            <span class="text-muted">Submitted in the past year</span>
                            <span class="contrib-number">${a}</span>
                            <span class="text-muted">${d}&nbsp;-&nbsp;${s}</span>
                          </div>
                          <div class="contrib-column table-column">
                            <span class="text-muted">Submitted last month</span>
                            <span class="contrib-number">${l}</span>
                            <span class="text-muted">${r}&nbsp;-&nbsp;${s}</span>
                          </div>
                          <div class="contrib-column table-column">
                            <span class="text-muted">Submitted last week</span>
                            <span class="contrib-number">${o}</span>
                            <span class="text-muted">${c}&nbsp;-&nbsp;${s}</span>
                          </div>
                        </div>`})}