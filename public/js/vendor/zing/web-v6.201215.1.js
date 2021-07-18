/*!version: 201215.0945 */

"use strict";window.AdtimaZingMp3=window.AdtimaZingMp3||{config:{_ready:!1,_playerOverlay:null,_callback:{},_request:{}},pageType:{HOME_PAGE:"home",SEARCH_PAGE:"search",ALBUM_PAGE:"album",ALBUM_LIST_PAGE:"the-loai-album",VIDEO_PAGE:"video",VIDEO_LIST_PAGE:"the-loai-video",SONG_PAGE:"song",TOPIC_PAGE:"chu-de",ARTIST_PAGE:"artist",ARTIST_LIST_PAGE:"the-loai-nghe-si",TOP100_PAGE:"top100",CHART_PAGE:"zing-chart",MY_MUSIC:"mymusic"},position:{halfpage:{id:"zmp3_Halfpage",width:"300",height:"600",other:{"z2-close":"true","z2-close-freq":"-1","z2-close-ignore":"remove"},demoId:"1319658198603887578"},masthead:{id:"zmp3_Top",width:"970",height:"250",other:{"z2-close":"true","z2-close-freq":"-1","z2-close-ignore":"remove","z2-logo":"no_fb"},demoId:"1482784041508239174"},mastheadInline:{id:"zmp3_Masthead_Inline",width:"970",height:"250"},playerOverlay:{id:"zmp3_Player_Overlay",width:"728",height:"90",other:{"z2-close":"true","z2-logo-position":"bottom","z2-logo":"no_fb","z2-close-freq":300,"z2-freq-type":1},demoId:"712187267027269436"},welcome:{id:"zmp3_Popup",width:"640",height:"360",type:"popup",other:{"z2-sound":"true","z2-autoscale":"video","z2-logo":"no_fb","z2-logo-position":"bottom","z2-overlay":"static","z2-close-freq":-1},hideDevice:1024,demoId:"2593002077860362049"},idle:{id:"zmp3_IDLE",width:"640",height:"360",type:"popup",other:{"z2-sound":"true","z2-autoscale":"video","z2-logo":"no_fb","z2-logo-position":"bottom","z2-overlay":"static","z2-close-freq":-1},hideDevice:1024,demoId:"2593002077860362049"}},getZoneId:function(e,t){t=t||this.config._page;var i,a=document.location.hostname,o=null;return window.adtimaData?o=null===(i=Object.keys(this.position).filter(function(t){return e.id===t.id})[0])||void 0===i?void 0:i.demoId:(t===this.pageType.HOME_PAGE?e.id==this.position.mastheadInline.id&&(o=["1583290983518795698","437464846489316890"]):(e.id==this.position.halfpage.id&&(o=["832779168331024416","1319658198603887578"]),e.id==this.position.mastheadInline.id&&(o=["1116961872813716889","2684247030271274521"])),e.id==this.position.masthead.id&&(o=["527410622832798483","1254895662352791333"]),e.id==this.position.playerOverlay.id&&(o=["1095369414359345941","712187267027269436"]),e.id==this.position.idle.id&&(o=["1894904669163438980","2593002077860362049"]),e.id==this.position.welcome.id&&(o=["2774115840800811806","2206148270361111324"])),Array.isArray(o)?a.startsWith("stg.")&&o[1]?o[1]:o[0]:o},addScript:function(t,e,i){var a,o=this,n=document.getElementsByTagName("script")[0];document.getElementById(t)||((a=document.createElement("script")).type="text/javascript",a.async=!0,a.id=t,a.src=e,a.onload=function(){"function"==typeof i&&i.call(o)},n.parentNode.insertBefore(a,n))},addAdtimaDiv:function(e,t){if(e){var i=this.getZoneId(e,t),a=document.getElementById(e.id);if(i&&a){a.hasAttribute("z2-bid")&&a.removeAttribute("z2-bid");var o=document.createElement("div");return o.className="z2-zads-zone",o.id="adtima-zone-"+i,o.setAttribute("z2-zoneid",i),o.setAttribute("z2-width",e.width||"1"),o.setAttribute("z2-height",e.heigh||"1"),e.type&&o.setAttribute("z2-type",e.type),Object.keys(e.other||{}).forEach(function(t){return o.setAttribute(t,e.other[t])}),a.appendChild(o),i}}},setPrebidZones:function(){window.AdtimaHBZones={},window.AdtimaHBZones.ix={"832779168331024416":{mediaTypes:{banner:{sizes:[[300,600]]}},siteId:"285146",size:[300,600]}},window.AdtimaHBZones.rtbhouse={"832779168331024416":{mediaTypes:{banner:{sizes:[[300,600]]}},publisherId:"D4Irs4ZbbxRC8x8Rj46G",region:"prebid-asia"}},window.AdtimaHBZones.appier={"832779168331024416":{mediaTypes:{banner:{sizes:[[300,600]]}},hzid:"WtcJmzOp"}},window.AdtimaHBZones.criteo={}},triggerPlayer:function(t){var e=document.getElementById("audio"),i=window.zPlayer,a=this.getPageType()==this.pageType.VIDEO_PAGE;if(e||i)switch(t){case"play":a?i.play():e&&e.play();break;case"pause":a?i.pause():e&&e.pause()}},appendPlayerOverlay:function(){var t=AdtimaZingMp3.position.playerOverlay.id,e="\n\t\t\t#".concat(t," {transition: all .5s ease-in-out; -webkit-transition: all .5s ease-in-out; overflow: hidden; max-height: 0; height: 110px;}\n\t\t\tbody:not(.adtima-popup-show) #").concat(t,".adtima-show {max-height: 110px;padding-bottom: 10px;padding-top: 10px;}\n\t\t\tbody.adtima-fullplayer #").concat(t," {height: 90px;}\n\t\t\tbody:not(.adtima-popup-show).adtima-fullplayer #").concat(t,".adtima-show {max-height: 90px;padding-bottom: 0;padding-top: 0;}\n\t\t\t\n\t\t");AdtimaRender.Helpers.includeStyle(document,"adtimaPlayerOverlay",e)},appendPopup:function(){AdtimaRender.Helpers.includeStyle(document,"adtimaPopupZmp3",'\n\t\t\tbody.adtima-popup-show .adtima-popup [z2-type="popup"] {width: 70% !important;max-width: 1000px !important;position: relative;height: auto !important;}\n\t\t\tbody.adtima-popup-show .adtima-popup [z2-type="popup"]:before {content: \'\';width: 100%;display: block;padding-top: 56.25%;position: relative; z-index: 0;}\n\t\t\tbody.adtima-popup-show .adtima-popup [z2-type="popup"] .z2-zad-iframe {position: absolute !important;top: 0;left:0;width: 100% !important;height: 100% !important;}\n\t\t')},getParameterByName:function(t){var e=window.location.href;t=t.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},preload:function(){var t;window.ignoreAutoLoadBanner=!0;var e=AdtimaZingMp3.getParameterByName("zone")&&(null===(t=AdtimaZingMp3.position[AdtimaZingMp3.getParameterByName("zone")])||void 0===t?void 0:t.demoId);e&&AdtimaZingMp3.getParameterByName("bid")?window.adtimaData={zones:e+"|"+AdtimaZingMp3.getParameterByName("bid"),bid:AdtimaZingMp3.getParameterByName("bid")}:window.adtimaData=void 0,window.adtimaConfig=window.adtimaConfig||{},window.adtimaConfig.idle={zoneId:AdtimaZingMp3.getZoneId(AdtimaZingMp3.position.idle),timeout:9e5,divId:AdtimaZingMp3.position.idle.id,attrs:AdtimaZingMp3.position.idle.other},setTimeout(function(){window.isUserVip&&(window.adtimaConfig.idle.zoneId=void 0)},3e5);var i=document.getElementById(AdtimaZingMp3.position.idle.id);i||((i=document.createElement("div")).id=AdtimaZingMp3.position.idle.id,Object.keys(AdtimaZingMp3.position.idle.other||{}).forEach(function(t){return i.setAttribute(t,AdtimaZingMp3.position.idle.other[t])}),document.body.appendChild(i));var a=document.createElement("style");a.id="adtimaPreloadStyle",a.innerHTML=".z2-zads-zone .adtima-logo,.z2-zads-zone .adtima-close-btn {transition: all .3s ease; -webkit-transition: all .3s ease;}\n\t\t\t.z2-zads-zone .adtima-logo, .z2-zads-zone .adtima-close-btn {opacity: 0;}\n\t\t\t.z2-zads-zone:hover .adtima-logo, .z2-zads-zone:hover .adtima-close-btn {opacity: 1;}\n\t\t\t#".concat(AdtimaZingMp3.position.playerOverlay.id," .z2-zads-zone .adtima-close-btn {display: none;}"),document.head.appendChild(a),this.addScript("z2-jssdk","//adtima-static.zadn.vn/resource/js/zad/adr.201215.0945.js",function(){AdtimaZingMp3.config._ready=!0;var t=new CustomEvent("ADTIMA.onready");document.dispatchEvent(t)})},clearTracking:function(t){var e;t&&(document.querySelectorAll('[data-zoneid="'+t+'"]').forEach(function(t){"none"===t.parentNode.style.display?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t)}),!AdtimaZingMp3.config._request[t]||(e=document.getElementById("zad-request-"+AdtimaZingMp3.config._request[t]))&&e.parentNode.removeChild(e))},load:function(t,d){var e,i,p;AdtimaZingMp3.config._ready?(d=Object.assign({pageType:"home"},d),window.adtimaConfig=window.adtimaConfig||{},e=["cate="+d.pageType],window.song_id&&e.push("song_id="+window.song_id),window.playlist_id&&e.push("playlist_id="+window.playlist_id),window.adtimaConfig.vsParams=e.join(";"),i=d.contentId||AdtimaZingMp3.config.contentId,window.adtimaConfig.contentId=i||void 0,"string"==typeof t&&(t=[t]),p=[],t.forEach(function(e){if(e){var t=document.getElementById(e);for(null!=t&&t.classList.remove("adtima-loaded");null!=t&&t.firstChild;)t.removeChild(t.firstChild);e!==AdtimaZingMp3.position.playerOverlay.id&&(AdtimaZingMp3.config._playerOverlay&&clearTimeout(AdtimaZingMp3.config._playerOverlay),null!=t&&t.classList.remove("adtima-show"));var i,a,o,n=Object.keys(AdtimaZingMp3.position).filter(function(t){return AdtimaZingMp3.position[t].id===e});n.length&&(i=AdtimaZingMp3.position[n[0]],a=AdtimaZingMp3.addAdtimaDiv(i,d.pageType),o="popup"==i.type||AdtimaRender.Prepare.isSupportZoneType(a,i.type),a&&o&&(AdtimaZingMp3.clearTracking(a),p.push(a),"function"==typeof d.callback&&(AdtimaZingMp3.config._callback[a]=d.callback)))}}),p.length&&AdtimaRender.Prepare.createWrappers(p,function(){var e=AdtimaRender.Helpers.random();p.forEach(function(t){AdtimaZingMp3.config._request[t]=e}),AdtimaRender.Prepare.includeScript(p,e)})):document.addEventListener("ADTIMA.onready",function(){AdtimaZingMp3.load(t,d)})}},window.adtimaCallBack={startShow:function(t){var e=document.getElementById("adtima-zone-"+t.zid),i=e.parentElement,a=document.body;switch(i.getAttribute("id")){case AdtimaZingMp3.position.masthead.id:10<t.banner.width&&t.banner.width<1e3&&a.classList.add("masthead-show"),a.classList.add("masthead-fullwidth"),e.setAttribute("z2-responsive","true"),AdtimaRender.Helpers.includeStyle(document,"adtimaMasthead","body.masthead-fullwidth #".concat(AdtimaZingMp3.position.masthead.id," {height: ").concat(t.banner.height,"px}"));break;case AdtimaZingMp3.position.mastheadInline.id:i.style.paddingTop="50px",i.style.paddingBottom="20px";break;case AdtimaZingMp3.position.playerOverlay.id:AdtimaZingMp3.appendPlayerOverlay(t),10<t.banner.width&&728<t.banner.width?(e.setAttribute("z2-responsive","true"),a.classList.add("adtima-fullplayer")):(e.removeAttribute("z2-responsive"),a.classList.remove("adtima-fullplayer"));break;case AdtimaZingMp3.position.idle.id:case AdtimaZingMp3.position.welcome.id:AdtimaZingMp3.appendPopup(t)}"popup"!=e.getAttribute("z2-type")&&parseInt(t.banner.width)<10&&(e.style.position="absolute",e.style.top="-10000px",e.style.display="none")},endShow:function(t){var e=document.getElementById("adtima-zone-"+t.zid),i=e.parentElement;switch(i.classList.add("adtima-loaded"),i.getAttribute("id")){case AdtimaZingMp3.position.playerOverlay.id:i.classList.add("adtima-show"),AdtimaZingMp3.config._playerOverlay=setTimeout(function(){var t=e.querySelector(".adtima-close-btn");t&&(t.style.display="block")},5e3);break;case AdtimaZingMp3.position.masthead.id:i.style.position="relative",i.style.zIndex="1"}"function"==typeof AdtimaZingMp3.config._callback[t.zid]&&AdtimaZingMp3.config._callback[t.zid]()},close:function(t){var e=document.getElementById("adtima-zone-"+t);if(e){var i=e.parentElement;switch(i.getAttribute("id")){case AdtimaZingMp3.position.masthead.id:"function"==typeof window.zmp3CloseAdsFn?window.zmp3CloseAdsFn("masthead"):window.open("https://zingmp3.vn/vip?utm_source=desktop&utm_medium=halfpage&utm_campaign=close_button","_blank");break;case AdtimaZingMp3.position.halfpage.id:"function"==typeof window.zmp3CloseAdsFn?window.zmp3CloseAdsFn("halfpage"):window.open("https://zingmp3.vn/vip?utm_source=desktop&utm_medium=halfpage&utm_campaign=close_button","_blank");break;case AdtimaZingMp3.position.playerOverlay.id:return i.classList.remove("adtima-show"),500}}},closePopup:function(){return 500},videoClickSound:function(t){switch(document.getElementById("adtima-zone-"+t.zoneId).parentElement.getAttribute("id")){case AdtimaZingMp3.position.welcome.id:case AdtimaZingMp3.position.idle.id:AdtimaZingMp3.triggerPlayer(t.muted?"play":"pause")}}},window.ignoreAutoLoadBanner=!0,AdtimaZingMp3.preload();