(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=7)})([function(a){a.exports=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}},function(a){function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}a.exports=function(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a}},function(a){function b(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}a.exports=function(a){return function(){var c=this,d=arguments;return new Promise(function(e,f){function g(a){b(i,e,f,g,h,'next',a)}function h(a){b(i,e,f,g,h,'throw',a)}var i=a.apply(c,d);g(void 0)})}}},function(a,b,c){a.exports=c(11)},function(a,b,h){'use strict';h.d(b,'a',function(){return r});var c=h(3),d=h.n(c),e=h(2),f=h.n(e),g=h(0),i=h.n(g),j=h(1),k=h.n(j),l=h(13),m=h.n(l),n=h(8),o=h(9),p='.searchlight',q='.searchscreen',r=function(){function e(a,b){i()(this,e),this.greetings=a,this.coordinate=b}return k()(e,[{key:'run',value:function(){this.initGreetings(),this.initEvents(),this.initGestureEventListener()}},{key:'initGreetings',value:function(){var b=new n.a(this.greetings);b.start()}},{key:'initEvents',value:function(){var b=this;4===$('.video')[0].readyState?(this.updateScreenSize(),this.initSearchEvents()):$('.video').on('loadeddata',function(){b.updateScreenSize(),b.initSearchEvents()})}},{key:'updateScreenSize',value:function(){$(q).height($('.video').height()),$(q).width($('.video').width())}},{key:'initSearchEvents',value:function(){var b=f()(d.a.mark(function c(){var i=this;return d.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:$(window).resize(function(){i.updateScreenSize()}),$(window).on('mousemove',function(c){var a=$(p).width()/2;$(p).css({"margin-left":c.pageX-a,"margin-top":c.pageY-a})}),$(q).on('click',function(b){var a={x:$('.video').width(),y:$('.video').height()},j=h.i(o.a)(m.a,a,b),c=Object.keys(i.coordinate).find(function(b){var a=h.i(o.b)(j,i.coordinate[b],i.coordinate[b].diff);return a?b:''});if(c){h.i(o.c)(),$('.title').html(''),$('.subtitle').html('');var d=[{text:i.coordinate[c].text,class:i.coordinate[c].class}],e=new n.a(d,function(){'me'===c&&i.foundMe()});e.start()}'me'===c&&$(p).fadeOut(function(){$(p).remove(),$(q).off('click'),$('.navigation').css({display:'inline-block'})})});case 3:case'end':return b.stop();}},c)}));return function(){return b.apply(this,arguments)}}()},{key:'foundMe',value:function(){var b=f()(d.a.mark(function b(){return d.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,h.i(o.d)(1e3);case 2:case'end':return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}()},{key:'initGestureEventListener',value:function(){var b=new Hammer($(q)[0]);b.get('pan').set({threshold:0,direction:Hammer.DIRECTION_ALL}),b.on('pan',function(j){var a=$('.video').offset().top+j.deltaY,b=$('.video').offset().left+j.deltaX,c=window.innerHeight-a,d=c<=$('.video').height()&&0>=a,e=window.innerWidth-b,f=e<=$('.video').width()&&0>=b;if(d){var g={transform:'none',top:''.concat(a,'px')};$('.video').css(g),$(q).css(g)}if(f){var h={transform:'none',left:''.concat(b,'px')};$('.video').css(h),$(q).css(h)}})}}]),e}()},function(a){a.exports={me:{x:356,y:148,diff:50,text:'Congrats on finding me! Ah yes, the plants also need some food \uD83C\uDF3F',class:'title'},cat_9:{x:181,y:209,diff:50,text:'O, a cat food',class:'title'},cat_1:{x:397,y:340,diff:50,text:'Excited baby! Be careful momma cat',class:'title'},cat_2:{x:779,y:368,diff:50,text:'Meow~ meoww meowy~ \uD83C\uDFA7',class:'title'},cat_3:{x:1184,y:364,diff:50,text:'Don\'t smoke too much, kuro-san!',class:'title'},cat_4:{x:141,y:434,diff:50,text:'A cool summer breeze make a good sleeping time *yawn*',class:'title'},cat_5:{x:126,y:632,diff:50,text:'AAAAA CATGHOST \uD83D\uDC7B',class:'title'},cat_6:{x:369,y:633,diff:50,text:'Does it spark joy, Meowi Kondo?',class:'title'},cat_7:{x:1110,y:613,diff:50,text:'A couple kissing kissing <3',class:'title'},cat_8:{x:1097,y:146,diff:50,text:'Why is he so energetic... Doesn\'t he got tired at all?',class:'title'},window_1:{x:835,y:638,diff:50,text:'*knock* *knock* Hello? Is someone here?',class:'title'},window_2:{x:832,y:150,diff:50,text:'I don\'t think anyone who lives here likes to go see the sun very much',class:'title'}}},function(a){a.exports=[{text:'Oh, hello again!',class:'title'},{text:'I\'m on this apartement, you can definitely find me :D',class:'subtitle'}]},function(a,b,c){'use strict';function d(){var b=new i.a(h.a,f.a);b.run()}Object.defineProperty(b,'__esModule',{value:!0});var e=c(5),f=c.n(e),g=c(6),h=c.n(g),i=c(4);document.addEventListener('DOMContentLoaded',function(){d()})},function(a,b,c){'use strict';c.d(b,'a',function(){return m});var d=c(3),g=c.n(d),e=c(2),f=c.n(e),h=c(0),i=c.n(h),j=c(1),k=c.n(j),l=c(10),m=function(){function d(a,b){i()(this,d),this.dialogue=a,this.callback=b}return k()(d,[{key:'start',value:function(){var b=f()(g.a.mark(function e(){var f,b,c;return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:f=0;case 1:if(!(f<this.dialogue.length)){d.next=9;break}return b=this.dialogue[f].text,c=this.dialogue[f].class,d.next=6,this.animateText(b,c);case 6:f++,d.next=1;break;case 9:this.callback&&this.callback();case 10:case'end':return d.stop();}},e,this)}));return function(){return b.apply(this,arguments)}}()},{key:'animateText',value:function(){var b=f()(g.a.mark(function h(i,b){var c,d,e;return g.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=i.split(''),d=$('.'.concat(b)),e=new l.a(c,d),f.next=5,e.startAnimation();case 5:case'end':return f.stop();}},h)}));return function(){return b.apply(this,arguments)}}()}]),d}()},function(a,b){'use strict';function c(){for(var b=window.setTimeout(function(){},0);b--;)window.clearTimeout(b)}function d(f,a,b){var c=f.x<a.x+b&&f.x>a.x-b,d=f.y<a.y+b&&f.y>a.y-b;return c&&d}function e(c){return new Promise(function(a){return setTimeout(a,c)})}function f(f,a,b){var c=f.x/a.x*b.offsetX,g=f.y/a.y*b.offsetY;return{x:c,y:g}}b.c=c,b.b=d,b.d=e,b.a=f},function(a,b,c){'use strict';c.d(b,'a',function(){return h});var d=c(0),e=c.n(d),f=c(1),g=c.n(f),h=function(){function d(a,b){e()(this,d),this.text=a,this.el=b,this.speed=90}return g()(d,[{key:'startAnimation',value:function(){var c=this;return this.typingAnimation(),new Promise(function(a){return setTimeout(a,c.speed*(c.text.length+1))})}},{key:'typingAnimation',value:function(){if(0<this.text.length){var c=this.el.html(),a=''.concat(c).concat(this.text.shift());this.el.html(a),setTimeout(this.typingAnimation.bind(this),this.speed)}}}]),d}()},function(a,b,c){var d=function(){return this||'object'==typeof self&&self}()||Function('return this')(),e=d.regeneratorRuntime&&0<=Object.getOwnPropertyNames(d).indexOf('regeneratorRuntime'),f=e&&d.regeneratorRuntime;if(d.regeneratorRuntime=void 0,a.exports=c(12),e)d.regeneratorRuntime=f;else try{delete d.regeneratorRuntime}catch(a){d.regeneratorRuntime=void 0}},function(a){!function(b){'use strict';function c(a,b,c,d){var f=b&&b.prototype instanceof e?b:e,g=Object.create(f.prototype),h=new n(d||[]);return g._invoke=j(a,c,h),g}function d(a,b,c){try{return{type:'normal',arg:a.call(b,c)}}catch(a){return{type:'throw',arg:a}}}function e(){}function f(){}function g(){}function h(a){['next','throw','return'].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function i(a){function b(c,e,f,g){var h=d(a[c],a,e);if('throw'===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&'object'==typeof j&&r.call(j,'__await')?Promise.resolve(j.__await).then(function(a){b('next',a,f,g)},function(a){b('throw',a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},function(a){return b('throw',a,f,g)})}}function c(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=c}function j(a,b,c){var e=y;return function(f,g){if(e===A)throw new Error('Generator is already running');if(e===B){if('throw'===f)throw g;return p()}for(c.method=f,c.arg=g;;){var h=c.delegate;if(h){var i=k(h,c);if(i){if(i===C)continue;return i}}if('next'===c.method)c.sent=c._sent=c.arg;else if('throw'===c.method){if(e===y)throw e=B,c.arg;c.dispatchException(c.arg)}else'return'===c.method&&c.abrupt('return',c.arg);e=A;var j=d(a,b,c);if('normal'===j.type){if(e=c.done?B:z,j.arg===C)continue;return{value:j.arg,done:c.done}}'throw'===j.type&&(e=B,c.method='throw',c.arg=j.arg)}}}function k(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,'throw'===b.method){if(a.iterator.return&&(b.method='return',b.arg=void 0,k(a,b),'throw'===b.method))return C;b.method='throw',b.arg=new TypeError('The iterator does not provide a \'throw\' method')}return C}var e=d(c,a.iterator,b.arg);if('throw'===e.type)return b.method='throw',b.arg=e.arg,b.delegate=null,C;var f=e.arg;if(!f)return b.method='throw',b.arg=new TypeError('iterator result is not an object'),b.delegate=null,C;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,'return'!==b.method&&(b.method='next',b.arg=void 0);else return f;return b.delegate=null,C}function l(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function m(a){var b=a.completion||{};b.type='normal',delete b.arg,a.completion=b}function n(a){this.tryEntries=[{tryLoc:'root'}],a.forEach(l,this),this.reset(!0)}function o(a){if(a){var b=a[t];if(b)return b.call(a);if('function'==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(r.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:p}}function p(){return{value:void 0,done:!0}}var q=Object.prototype,r=q.hasOwnProperty,s='function'==typeof Symbol?Symbol:{},t=s.iterator||'@@iterator',u=s.asyncIterator||'@@asyncIterator',v=s.toStringTag||'@@toStringTag',w='object'==typeof a,x=b.regeneratorRuntime;if(x)return void(w&&(a.exports=x));x=b.regeneratorRuntime=w?a.exports:{},x.wrap=c;var y='suspendedStart',z='suspendedYield',A='executing',B='completed',C={},D={};D[t]=function(){return this};var E=Object.getPrototypeOf,F=E&&E(E(o([])));F&&F!==q&&r.call(F,t)&&(D=F);var G=g.prototype=e.prototype=Object.create(D);f.prototype=G.constructor=g,g.constructor=f,g[v]=f.displayName='GeneratorFunction',x.isGeneratorFunction=function(a){var b='function'==typeof a&&a.constructor;return!!b&&(b===f||'GeneratorFunction'===(b.displayName||b.name))},x.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,!(v in a)&&(a[v]='GeneratorFunction')),a.prototype=Object.create(G),a},x.awrap=function(a){return{__await:a}},h(i.prototype),i.prototype[u]=function(){return this},x.AsyncIterator=i,x.async=function(a,b,d,e){var f=new i(c(a,b,d,e));return x.isGeneratorFunction(b)?f:f.next().then(function(a){return a.done?a.value:f.next()})},h(G),G[v]='Generator',G[t]=function(){return this},G.toString=function(){return'[object Generator]'},x.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},x.values=o,n.prototype={constructor:n,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method='next',this.arg=void 0,this.tryEntries.forEach(m),!a)for(var b in this)'t'===b.charAt(0)&&r.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if('throw'===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type='throw',f.arg=a,c.next=b,d&&(c.method='next',c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if('root'===e.tryLoc)return b('end');if(e.tryLoc<=this.prev){var g=r.call(e,'catchLoc'),h=r.call(e,'finallyLoc');if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error('try statement without catch or finally');else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&r.call(c,'finallyLoc')&&this.prev<c.finallyLoc){var e=c;break}e&&('break'===a||'continue'===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method='next',this.next=e.finallyLoc,C):this.complete(f)},complete:function(a,b){if('throw'===a.type)throw a.arg;return'break'===a.type||'continue'===a.type?this.next=a.arg:'return'===a.type?(this.rval=this.arg=a.arg,this.method='return',this.next='end'):'normal'===a.type&&b&&(this.next=b),C},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),m(b),C},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if('throw'===d.type){var e=d.arg;m(b)}return e}throw new Error('illegal catch attempt')},delegateYield:function(a,b,c){return this.delegate={iterator:o(a),resultName:b,nextLoc:c},'next'===this.method&&(this.arg=void 0),C}}}(function(){return this||'object'==typeof self&&self}()||Function('return this')())},function(a){a.exports={x:1280,y:756}}]);