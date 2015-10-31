/*! formstone v0.8.25 [tabs.js] 2015-10-31 | MIT License | formstone.it */

!function(a,b){"use strict";function c(c){c.mq="(max-width:"+(c.mobileMaxWidth===1/0?"100000px":c.mobileMaxWidth)+")",c.content=this.attr("href"),c.group=this.data(q+"-group"),c.thisClasses=[s.tab,c.rawGuid,c.theme,c.customClass],c.mobileTabClasses=[s.tab,s.tab_mobile,c.rawGuid,c.theme,c.customClass].join(" "),c.contentClasses=[s.content,c.rawGuid].join(" "),c.$mobileTab=a('<button type="button" class="'+c.mobileTabClasses+'">'+this.text()+"</button>"),c.$content=a(c.content).addClass(c.contentClasses),c.$content.before(c.$mobileTab);var d=b.window.location.hash,e=!1,f=!1;d.length&&(e=this.filter("[href*="+d+"]").length>0,f=c.group&&a("[data-"+q+'-group="'+c.group+'"]').filter("[href*="+d+"]").length>0),e?this.attr("data-swap-active","true"):f?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",c.content).attr("data-swap-group",c.group).addClass(c.thisClasses.join(" ")).on("activate.swap"+c.dotGuid,c,i).on("deactivate.swap"+c.dotGuid,c,j).on("enable.swap"+c.dotGuid,c,k).on("disable.swap"+c.dotGuid,c,l)}function d(b){this.fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:r.enabled,active:r.active,raw:{target:b.rawGuid,enabled:s.enabled,active:s.active}},collapse:!1}),b.$mobileTab.on("click"+b.dotGuid,b,m),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){n.call(b.$el,b)},leave:function(){o.call(b.$el,b)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$mobileTab.off(t.namespace).remove(),b.$content.removeClass(s.content),this.removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeClass(b.thisClasses.join(" ")).off(t.namespace).fsSwap("destroy")}function f(){this.fsSwap("activate")}function g(){this.fsSwap("enable")}function h(){this.fsSwap("disable")}function i(a){if(!a.originalEvent){var b=a.data,c=0;b.$el.trigger(t.update,[c]),b.$mobileTab.addClass(s.active),b.$content.addClass(s.active)}}function j(a){if(!a.originalEvent){var b=a.data;b.$mobileTab.removeClass(s.active),b.$content.removeClass(s.active)}}function k(a){var b=a.data;b.$mobileTab.addClass(s.enabled),b.$content.addClass(s.enabled)}function l(a){var b=a.data;b.$mobileTab.removeClass(s.enabled),b.$content.removeClass(s.enabled)}function m(a){a.data.$el.fsSwap("activate")}function n(a){a.$el.addClass(s.mobile),a.$mobileTab.addClass(s.mobile)}function o(a){a.$el.removeClass(s.mobile),a.$mobileTab.removeClass(s.mobile)}{var p=b.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light",vertical:!1},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,enable:g,disable:h}}),q=p.namespace,r=p.classes,s=r.raw,t=p.events;p.functions}}(jQuery,Formstone);