(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{101:function(e,t,a){e.exports=a(221)},22:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=a(9),l=a.n(s),u=a(13),i=a(18),d=a(245),m=a(248),f=a(249),p=a(223),h=a(22),v=a.n(h),b=a(47),y=a.n(b),E=a(48),g=a.n(E),x=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:v.a.container},r.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(v.a.card,v.a.infected)},r.a.createElement(f.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(p.a,{variant:"body2"},"Number of active Cases of Covid-19"))),r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(v.a.card,v.a.recovered)},r.a.createElement(f.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(p.a,{variant:"body2"},"Number of recoveries from Covid-19"))),r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:g()(v.a.card,v.a.deaths)},r.a.createElement(f.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(p.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(p.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(p.a,{variant:"body2"},"Number of deaths from Covid-19"))))):"Loading..."},C=a(49),w=a.n(C),_="https://covid19.mathdro.id/api",j=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,c,o,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_,t&&(a="".concat(_,"/countries/").concat(t)),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(_,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(_,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=a(59),D=a(93),N=a.n(D),I=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,d=Object(n.useState)([]),m=Object(i.a)(d,2),f=m[0],p=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=f.length?r.a.createElement(k.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;console.log(a,c,o);var v=a?r.a.createElement(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(s)}}}):null;return r.a.createElement("div",{className:N.a.container},s?v:h)},B=a(255),P=a(253),R=a(94),U=a.n(R),W=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),r.a.createElement(B.a,{className:U.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},z=a(254),J=a(252),V=a(250),q=a(251);var A=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(z.a,{onClick:function(){c(!0)},variant:"contained",color:"primary"},"How to Stay Safe"),r.a.createElement(J.a,{open:a,onClose:function(){c(!1)}},r.a.createElement(V.a,null,"How to Stay Safe from Covid-19"),r.a.createElement(q.a,null,["Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.","Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease. \n","Boo"].map((function(e){return r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},e)})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},G=a(60),H=a.n(G),M=a(95),Q=a.n(M);var Z=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),d=s[0],m=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:a=e.sent,c(a),m(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:Q.a,alt:"COVID-19"}),r.a.createElement(x,{data:a}),r.a.createElement(A,null),r.a.createElement(W,{handleCountryChange:f}),r.a.createElement(I,{data:a,country:d}),r.a.createElement("h4",null,"Created by Jamal Dabas"))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},60:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},93:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},94:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9",card:"CountryPicker_card__R3NZw"}},95:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.d7b76408.chunk.js.map