const url=$request.url,method=$request.method,postMethod="POST",notifyTitle="贴吧json脚本错误";console.log("贴吧json-2022.11.09");let body=JSON.parse($response.body);if(url.includes("tiebaads/commonbatch")&&method===postMethod){let o=getUrlParamValue(url,"adcmd");o?(console.log("commonbatch:"+o),0===body.error_code?body.res.ad?.length?(body.res.ad=[],console.log("成功")):console.log("ad字段为空"):console.log("error_code不为0:"+body.error_code)):(console.log("url:"+url),$notification.post(notifyTitle,"贴吧-tiebaads/commonbatch","adCmd参数不存在"))}else if(url.includes("c/f/pb/picpage")){console.log("picpage");const b=body.recom_live_list?.length;b&&(console.log("去除直播:"+b),body.recom_live_list=[])}else if(url.includes("c/s/sync")){if(console.log("贴吧-sync"),"floating_icon"in body?(console.log("右下角悬浮icon"),body.floating_icon?(body.floating_icon.homepage?.icon_url?console.log("homepage悬浮去除"):console.log("无需去除homepage悬浮"),body.floating_icon.pb?.icon_url?console.log("pb悬浮去除"):console.log("无需去除pb悬浮"),body.floating_icon=null):console.log("无需修改floating_icon字段值")):(console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无floating_icon字段")),"advertisement_config"in body?body.advertisement_config?.advertisement_str?(console.log("advertisement_str:"+body.advertisement_config.advertisement_str),body.advertisement_config=null):console.log("无需处理advertisement_config"):(console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无advertisement_config字段")),"config"in body){if(body.config?.switch)for(const c of body.config.switch)["platform_csj_init","platform_ks_init","platform_gdt_init"].includes(c.name)&&(c.type="0",console.log("禁止初始化"+c.name))}else console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无config字段");"screen_fill_data_result"in body?("1"===body.screen_fill_data_result.screen_fill_advertisement_bear_switch?(body.screen_fill_data_result.screen_fill_advertisement_bear_switch="0",console.log("开屏不展示小熊广告")):console.log("无需修改screen_fill_advertisement_bear_switch"),"1"===body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch?(body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch="0",console.log("开屏不展示序章CPC")):console.log("无需修改screen_fill_advertisement_plj_cpc_switch"),"1"===body.screen_fill_data_result.screen_fill_advertisement_plj_switch?(body.screen_fill_data_result.screen_fill_advertisement_plj_switch="0",console.log("开屏不展示序章")):console.log("无需修改screen_fill_advertisement_plj_switch")):(console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无screen_fill_data_result字段")),"ad_stlog_switch"in body?"1"===body.ad_stlog_switch?(body.ad_stlog_switch="0",console.log("修改ad_stlog_switch")):console.log("无需修改ad_stlog_switch"):(console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无ad_stlog_switch字段")),"lcs_strategy"in body?"0"===body.lcs_strategy.conn_conf?(body.lcs_strategy.conn_conf="1",console.log("修改conn_conf")):console.log("无需修改conn_conf"):(console.log("body:"+$response.body),$notification.post(notifyTitle,"贴吧-sync","无lcs_strategy字段"))}else if(url.includes("c/f/frs/page"))console.log("贴吧-FrsPage"),body.live_fuse_forum?.length?(body.live_fuse_forum=[],console.log("去除吧头直播")):console.log("无需处理吧头直播"),body.activityhead?.is_ad?(body.activityhead={},console.log("去除吧内header图片广告")):console.log("无需处理activityhead"),body.thread_list=removeLive(body.thread_list),removeGoodsInfo(body.forum?.banner_list?.app);else if(url.includes("c/f/frs/threadlist"))console.log("贴吧-threadlist");else if(url.includes("c/f/pb/page")){if(console.log("贴吧-PbPage"),body.recom_ala_info?.live_id?(console.log("帖子详情页推荐的直播广告去除"),body.recom_ala_info=null):console.log("帖子详情页无直播广告"),body.post_list?.length)for(const d of body.post_list)d.outer_item&&(console.log("outer_item去除"),d.outer_item=null);else console.log("无需处理postList中的outer_item");removeGoodsInfo(body.banner_list?.app)}else url.includes("c/f/excellent/personalized")?(console.log("贴吧-personalized"),removeGoodsInfo(body.banner_list?.app),body.thread_list=removeLive(body.thread_list)):url.includes("c/f/frs/generalTabList")?console.log("贴吧-generalTabList"):$notification.post(notifyTitle,"路径/请求方法匹配错误:",method+","+url);function getUrlParamValue(o,e){return Object.fromEntries(o.substring(o.indexOf("?")+1).split("&").map(o=>o.split("=")))[e]}function removeGoodsInfo(o){if(o?.length){let e=0;o.forEach(o=>{o.goods_info?.length&&(e++,o.goods_info=[])}),e?console.log("去除goods_info:"+e):console.log("app内无goods_info")}else console.log("app为空,无需处理")}function removeLive(o){let e=o;var l=o?.length;return l?l===(e=o.filter(o=>!o.ala_info||(console.log("去除推荐的直播帖子"),!1))).length&&console.log("无推荐的直播帖子"):console.log("无需处理threadList"),e}body=JSON.stringify(body),$done({body:body});