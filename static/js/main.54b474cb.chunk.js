(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"coord":{"lon":0,"lat":0},"weather":[{"id":0,"main":"Brak danych","description":"Brak danych","icon":"11d"}],"base":"Brak danych","main":{"temp":0,"feels_like":0,"temp_min":0,"temp_max":0,"pressure":0,"humidity":0},"visibility":0,"wind":{"speed":0,"deg":0},"clouds":{"all":0},"dt":0,"sys":{"type":0,"id":0,"country":"Brak danych","sunrise":0,"sunset":0},"timezone":0,"id":0,"name":"Brak danych","cod":0}')},,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(4),r=a.n(c),i=(a(10),a(1)),o=(a(11),function(e){var t=e.weatherData,a=e.clickRefreshBtn,n=e.time,c=e.showSettings,r=t.main,i=t.name,o=t.weather,l=t.wind,m=t.sys,u=r.temp,g=r.feels_like,p=r.temp_min,_=r.temp_max,f=r.pressure,h=r.humidity,w=m.sunrise,d=m.sunset,N=3.6*l.speed,E=new Date(1e3*(w+3600)),v=new Date(1e3*(d+3600)),S=E.toUTCString(),I=v.toUTCString(),b=u<0&&u>=-.49?0:u.toFixed(),k=g<0&&g>=-.49?0:g.toFixed(),O=p<0&&p>=-.49?0:p.toFixed(),T=_<0&&_>=-.49?0:_.toFixed();return s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"result__wrapper"},s.a.createElement("h1",{className:"result__townName"},i),s.a.createElement("div",{className:"result__wrapperTemp"},s.a.createElement("h2",{className:"result__temp"},b,"\xb0C"),s.a.createElement("p",{className:"result__maxMinTemp"},"".concat(T,"\xb0C / ").concat(O,"\xb0C"))),s.a.createElement("img",{className:"result__weatherIcon",src:"https://openweathermap.org/img/wn/".concat(o[0].icon,"@2x.png"),alt:"Weather icon."}),s.a.createElement("div",{className:"result__wrapperInfo"},s.a.createElement("p",{className:"result__infoText"},"Opis: ",s.a.createElement("span",{className:"result__info"},o[0].description)),s.a.createElement("p",{className:"result__infoText"},"Odczuwalna: ",s.a.createElement("span",{className:"result__info"},k,"\xb0C")),s.a.createElement("p",{className:"result__infoText"},"Ci\u015bnienie: ",s.a.createElement("span",{className:"result__info"},f," pHa")),s.a.createElement("p",{className:"result__infoText"},"Wilgotno\u015b\u0107: ",s.a.createElement("span",{className:"result__info"},h,"%")),s.a.createElement("p",{className:"result__infoText"},"Pr\u0119dko\u015b\u0107 wiatru:"," ",s.a.createElement("span",{className:"result__info"},N.toFixed(2)," km/h")),s.a.createElement("p",{className:"result__infoText"},"Wsch\xf3d s\u0142o\u0144ca:"," ",s.a.createElement("span",{className:"result__info"},S.slice(-12,-4))),s.a.createElement("p",{className:"result__infoText"},"Zach\xf3d s\u0142o\u0144ca:"," ",s.a.createElement("span",{className:"result__info"},I.slice(-12,-4)))),s.a.createElement("div",{className:"result__wrapperIcons"},s.a.createElement("i",{onClick:a,className:"fas fa-sync-alt result__refreshIcon"}),s.a.createElement("i",{onClick:function(){return c(!0)},className:"fas fa-cogs result__settingsIcon"})),s.a.createElement("p",{className:"result__dateOfRefresh"},"Dane z: ",n||"Brak danych")))}),l=function(e){var t=e.valueInput,a=e.changeInput;return s.a.createElement("input",{type:"text",value:t,onChange:a,className:"settings__input",placeholder:"Nazwa miasta..."})},m=(a(12),function(e){var t=e.valueInput,a=e.changeInput,c=e.clickAddBtn,r=e.isMainTown,o=e.checkIsMainTown,m=e.isFavourite,u=e.checkIsFavourite,g=e.favouriteTowns,p=e.setMainTownBtn,_=e.deleteTownFromList,f=e.checkWeatherHere,h=e.settingsVisible,w=e.showSettings,d=Object(n.useState)(0),N=Object(i.a)(d,2),E=N[0],v=N[1],S=function(e){v(E+e)};h&&E<100&&setTimeout((function(){return S(5)}),10),!h&&E>0&&setTimeout((function(){return S(-5)}),10);var I=[];return g&&(I=g.map((function(e,t){return s.a.createElement("li",{className:"settings__listItem",key:t},s.a.createElement("div",{className:"settings__wrapperIconName"},localStorage.getItem("townName")===e?s.a.createElement("i",{className:"fas fa-home settings__homeIcon"}):s.a.createElement("i",{className:"fas fa-home settings__homeIcon settings__homeIcon--disabled"}),s.a.createElement("span",{className:"settings__townName"},e),s.a.createElement("i",{onClick:function(){return _(e)},className:"fas fa-trash-alt settings__trashIcon"})),s.a.createElement("div",{className:"settings__wrapperBtn"},localStorage.getItem("townName")===e?null:s.a.createElement("button",{className:"settings__btn",onClick:function(){return p(e)}},"G\u0142\xf3wne miasto"),s.a.createElement("button",{className:"settings__btn",onClick:function(){return f(e)}},"Sprawd\u017a pogod\u0119")))}))),s.a.createElement("div",{className:"settings",style:{display:"".concat(0!==E?"block":"none"),opacity:"".concat(E,"%")}},s.a.createElement("div",{className:"settings__wrapper"},s.a.createElement("h1",{className:"settings__title"},"Ustawienia"),s.a.createElement("div",{className:"settings__wrapperAddTown"},s.a.createElement(l,{valueInput:t,changeInput:a}),s.a.createElement("button",{className:"settings__btn",onClick:c},"Sprawd\u017a pogod\u0119"),s.a.createElement("label",{className:"settings__checkLabel",htmlFor:"isMainTown"},s.a.createElement("input",{type:"checkbox",name:"isMainTown",id:"isMainTown",className:"settings__check",checked:r,onChange:o}),"Ustaw jako g\u0142\xf3wne miasto."),s.a.createElement("label",{className:"settings__checkLabel",htmlFor:"isFavourite"},s.a.createElement("input",{type:"checkbox",name:"isFavourite",id:"isFavourite",className:"settings__check",checked:r||m,onChange:u,disabled:r}),"Dodaj do listy ulubionych miast.")),g.length?s.a.createElement("div",{className:"settings__wrapperFavouriteList"},s.a.createElement("h3",{className:"settings__favouriteTitle"},"Lista ulubionych miast"),s.a.createElement("ul",{className:"settings__favouriteList"},I.reverse())):s.a.createElement("div",{className:"settings__wrapperFavouriteList"},s.a.createElement("h3",{className:"settings__favouriteTitle"},"Lista ulubionych miast"),s.a.createElement("ul",{className:"settings__favouriteList"},s.a.createElement("li",{className:"settings__listItem"},"Brak danych."))),s.a.createElement("i",{className:"fas fa-times settings__close",onClick:function(){return w(!1)}}),s.a.createElement("p",{className:"settings__author"},"Projekt i realizacja: Marcin Hercog")))}),u=(a(13),function(e){var t=e.errorMessage;return s.a.createElement("div",{className:"errorPage"},s.a.createElement("h1",{className:"errorPage__message"},t))}),g=a(2),p=(a(14),"0d90c0d99506c2d578ef4a5f8468ce4f"),_=localStorage.getItem("localData")?JSON.parse(localStorage.getItem("localData")):g,f=localStorage.getItem("timeOfData")?localStorage.getItem("timeOfData"):"",h=localStorage.getItem("favouriteTownsList")?JSON.parse(localStorage.getItem("favouriteTownsList")):[];var w=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(_),l=Object(i.a)(r,2),w=l[0],d=l[1],N=Object(n.useState)(!1),E=Object(i.a)(N,2),v=E[0],S=E[1],I=Object(n.useState)(!1),b=Object(i.a)(I,2),k=b[0],O=b[1],T=Object(n.useState)(f),y=Object(i.a)(T,2),j=y[0],x=y[1],C=Object(n.useState)(h),D=Object(i.a)(C,2),F=D[0],B=D[1],L=Object(n.useState)(!1),M=Object(i.a)(L,2),z=M[0],W=M[1],J=Object(n.useState)(""),U=Object(i.a)(J,2),P=U[0],A=U[1],H=Object(n.useState)(!1),R=Object(i.a)(H,2),V=R[0],q=R[1],G=Object(n.useState)(!0),Z=Object(i.a)(G,2),$=Z[0],K=Z[1];Object(n.useEffect)((function(){localStorage.getItem("townName")?localStorage.getItem("townName")&&$&&(K(!1),X(localStorage.getItem("townName"))):(localStorage.setItem("townName","Warszawa"),X("Warszawa"))}),[$]);var Q=function(){var e=(new Date).toLocaleDateString(),t=(new Date).toLocaleTimeString();return"".concat(e,", ").concat(t)},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat(p,"&lang=pl&units=metric"),n=Q();fetch(t).then((function(e){if(e.ok)return e.json();throw e.status})).then((function(t){if(e===a.trim()&&(k||v))if(-1===F.findIndex((function(t){return t.toUpperCase()===e.toUpperCase()}))){var s=F;s.push(e),localStorage.setItem("favouriteTownsList",JSON.stringify(s)),B(s),v&&(localStorage.setItem("townName",e),localStorage.setItem("localData",JSON.stringify(t)),q(!1))}else W(!0),A("Miaso istnieje ju\u017c na li\u015bcie!"),setTimeout((function(){return W(!1)}),2e3);e===localStorage.getItem("townName")?(localStorage.setItem("localData",JSON.stringify(t)),localStorage.setItem("timeOfData",n),x(localStorage.getItem("timeOfData"))):x(n),d(t),v||k||q(!1)})).catch((function(e){console.log(new Error(e)),W(!0),localStorage.getItem("townName")?A("Nie istnieje miasto o nazwie ".concat(a.toUpperCase(),"!")):A("Brak przypisanego miasta g\u0142\xf3wnego!"),setTimeout((function(){return W(!1)}),2e3)}))},Y=function(e){q(e)};return s.a.createElement("div",{className:"app"},s.a.createElement(o,{weatherData:w,clickRefreshBtn:function(){X(localStorage.getItem("townName"))},time:j,showSettings:Y}),s.a.createElement(m,{valueInput:a,changeInput:function(e){c(e.target.value)},clickAddBtn:function(){if(""===a)W(!0),A("Wpisz nazw\u0119 miasta!"),setTimeout((function(){return W(!1)}),2e3);else{var e=a.trim();X(e),c(""),O(!1),S(!1)}},isMainTown:v,checkIsMainTown:function(){S(!v)},isFavourite:k,checkIsFavourite:function(){O(!k)},favouriteTowns:F,setMainTownBtn:function(e){localStorage.setItem("townName",e),X(localStorage.getItem("townName"))},deleteTownFromList:function(e){var t=F.filter((function(t){return t!==e}));B(t),e===localStorage.getItem("townName")&&(localStorage.clear(),d(g),x("")),localStorage.setItem("favouriteTownsList",JSON.stringify(t))},checkWeatherHere:function(e){X(e),q(!1)},settingsVisible:V,showSettings:Y}),z?s.a.createElement(u,{errorMessage:P}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.54b474cb.chunk.js.map