(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/bell.877d82b3.svg"},16:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=a(2),c=a(15),l=a(4),u=a(5),m=a(1),d=a(7),p=a(6),g=(a(24),a(3)),f=a(13),h=a.n(f),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={allTriggerElements:[],triggersPlaystate:[],indicatorPosition:"50%",scrollingContainer:"body"},n.handleScroll=n.handleScroll.bind(Object(m.a)(n)),n.checkTriggers=n.checkTriggers.bind(Object(m.a)(n)),n.debounceScroll=e.isDebounce?h()(n.handleScroll,e.debounceAmount,{trailing:!0,leading:!0}):n.handleScroll,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.triggerElements,a=e.scrollContainer,n=e.indicatorPlacement,r=parseInt(n,10)/100*window.innerHeight,s=function(e){return"string"===typeof e?function(e){return document.querySelector(e)}(e):e},o=Array.isArray(t)?t:[t],i=a.current?a.current:s(a),c=[],l=o.map((function(e){return c.push(!1),s(e)}));this.setState({allTriggerElements:l,triggersPlaystate:c,indicatorPosition:r,scrollingContainer:i}),i.addEventListener("scroll",this.debounceScroll,!0)}},{key:"componentWillUnmount",value:function(){this.state.scrollingContainer.removeEventListener("scroll",this.debounceScroll,!0)}},{key:"checkTriggers",value:function(e,t){var a,n=this,r=this.state,s=r.allTriggerElements,o=r.triggersPlaystate,i=this.props,c=i.isReplayable,l=i.onScrollYCallback,u=s[e].current||s[e],m=u.offsetHeight,d=(t-u.getBoundingClientRect().top)/m*100,p=function(t){var a=Object.assign([],o,Object(g.a)({},e,t));n.setState({triggersPlaystate:a})},f=function(t){var a,n=l;switch(t){case"start":a=n.start;break;case"progress":a=n.progress;break;case"end":a=n.end;break;default:a=null}"function"===typeof l?l(e,t,d):a&&a(u,d)};if(d>=0&&d<=100&&null!==o[e])!1===o[e]&&(a=!0,f("start"),p(a)),f("progress");else if(o[e]){f("end"),p(!c&&null)}}},{key:"handleScroll",value:function(){var e=this.state,t=e.allTriggerElements,a=e.indicatorPosition,n=e.scrollingContainer,r=t.length;r||n.removeEventListener("scroll",this.debounceScroll,!0);for(var s=a+n.scrollTop,o=0;o<r;o+=1)this.checkTriggers(o,s)}},{key:"render",value:function(){var e=this.props,t=e.indicatorPlacement,a=e.isIndicator,n=e.customComponent,s=e.indicatorStyles,o=Object(i.a)({position:"fixed",height:"3px",width:"10vw",backgroundColor:"green",top:"".concat(parseInt(t,10),"vh"),right:0,zIndex:100},s);return r.a.createElement("div",{className:"indicator",style:!n&&a?o:{}},n)}}]),a}(n.Component);b.defaultProps={scrollContainer:"body",indicatorPlacement:"50vh",isIndicator:!0,isReplayable:!0,debounceAmount:15,customComponent:null,indicatorStyles:{},isDebounce:!1};var v=b,y=a(14),S=a.n(y),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={messageData:[["messageOne",{opacity:0,transform:"scale(1)"},"Lorem ipsum aute officia ut aute ut dolor exercitation tempor pariatur nisi sit."],["messageTwo",{opacity:0,transform:"scale(1)"},"Exercitation et quis ea fugiat voluptate sit occaecat sint dolor."],["messageThree",{opacity:0,transform:"scale(1)"},"Voluptate magna proident aliqua cupidatat fugiat cillum sint reprehenderit."],["messageFour",{opacity:0,transform:"scale(1)"},"Veniam culpa nisi occaecat ut ex in adipisicing nulla aute consequat."],["messageFive",{opacity:0,transform:"scale(1)"},"Lorem ipsum in nostrud proident consequat est ea minim amet nostrud."],["messageSix",{opacity:0,transform:"scale(1)"},"Lorem ipsum dolor est excepteur sint eiusmod proident cillum mollit nisi enim ut consectetur officia excepteur consequat."],["messageSeven",{opacity:0,transform:"scale(1)"},"Ad laboris commodo non ad aliquip id fugiat dolor do in consectetur in ea deserunt incididunt reprehenderit."]],messageAlerts:0,notifyAlert:{color:"#b5b9c1",transform:"scale(1)"}},n.scrollContainer=r.a.createRef(),n.state.messageData.forEach((function(e){n["messageRef".concat(e[0])]=r.a.createRef()})),n.onScrollY=n.onScrollY.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"onScrollY",value:function(e,t,a){var n=this.state,r=n.messageData,s=n.messageAlerts,o=function(e){return parseInt(e,10)/100*Math.round(a)},l=o(1),u=o(1.75),m="scale(".concat(a<50?1-u/10:1+u/10,")"),d=Object(c.a)(r);d[e][1]={opacity:l,transform:m};var p=s+("end"===t?a>90?1:s?-1:0:0),g=p>s?{transform:"scale(1.2)"}:{transform:"scale(1)"},f=p>0?{color:"red"}:{color:"#b5b9c1"},h=Object(i.a)(Object(i.a)({},g),f);this.setState({messageData:d,messageAlerts:p,notifyAlert:h})}},{key:"render",value:function(){var e=this,t=this.state,a=t.messageData,n=t.messageAlerts,s=t.notifyAlert;return r.a.createElement("div",null,r.a.createElement("div",{ref:this.scrollContainer,className:"app"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"app-nav"},r.a.createElement("img",{alt:"notification bell",className:"app-nav-bell",src:S.a}),r.a.createElement("span",{className:"app-nav-header"},"notifications"),r.a.createElement("span",{className:"app-nav-list",style:s},n)),a.map((function(t){return r.a.createElement("div",{key:t[0],ref:e["messageRef".concat(t[0])],style:t[1],className:"messages"},t[2])})))),r.a.createElement(v,{triggerElements:a.map((function(t){return e["messageRef".concat(t[0])]})),onScrollYCallback:this.onScrollY,scrollContainer:this.scrollContainer,isIndicator:!0,indicatorPlacement:"70vh",indicatorStyles:{height:"1vh",backgroundColor:"blue"},isReplayable:!0,isDebounce:!1,debounceAmount:!0,customComponent:null}))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ad5f8257.chunk.js.map