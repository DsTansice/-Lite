const version="V1.0.24";var obj=JSON.parse($response.body);if(-1!=$request.url.indexOf("valueadded/alimama/splash_screen")){if(obj.data&&obj.data.ad)for(let e of obj.data.ad)e.set.setting.display_time=0,e.creative[0].start_time=2240150400,e.creative[0].end_time=2240150400;$done({body:JSON.stringify(obj)})}else if(-1!=$request.url.indexOf("faas/amap-navigation/main-page"))obj.data?.cardList&&(obj.data.cardList=Object.values(obj.data.cardList).filter(e=>"LoginCard"==e.dataType)),obj.data?.pull3?.msgs&&(obj.data.pull3.msgs=[]),obj.data?.mapBizList&&(obj.data.mapBizList=[]),$done({body:JSON.stringify(obj)});else if(-1!=$request.url.indexOf("profile/index/node"))delete obj.data.tipData,obj.data?.cardList&&(obj.data.cardList=Object.values(obj.data.cardList).filter(e=>"MyOrderCard"==e.dataType||"GdRecommendCard"==e.dataType)),$done({body:JSON.stringify(obj)});else if(-1!=$request.url.indexOf("new_hotword"))obj.data?.header_hotword&&(obj.data.header_hotword=[]),$done({body:JSON.stringify(obj)});else if(-1!=$request.url.indexOf("ws/promotion-web/resource")){let a=["icon","banner","tips","popup","bubble"];for(let e of a)obj.data?.[e]&&(obj.data[e]=[]);$done({body:JSON.stringify(obj)})}else if(-1!=$request.url.indexOf("ws/msgbox/pull"))obj.msgs&&(obj.msgs=[]),obj.pull3?.msgs&&(obj.pull3.msgs=[]),$done({body:JSON.stringify(obj)});else if(-1!=$request.url.indexOf("ws/shield/frogserver/aocs"))obj.data?.operation_layer&&(obj.data.operation_layer={status:1,version:"",value:""}),obj.data?.home_business_position_config&&(obj.data.home_business_position_config={status:1,version:"",value:""}),$done({body:JSON.stringify(obj)});else if(-1!=$request.url.indexOf("search/nearbyrec_smart")){let a=["coupon","scene","activity","commodity_rec"];obj.data&&(a.forEach(e=>{delete obj.data[e]}),obj.data.modules)&&(obj.data.modules=obj.data.modules.filter(e=>!a.includes(e))),$done({body:JSON.stringify(obj)})}else $done({});