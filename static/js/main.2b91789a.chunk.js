(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/greenVillage.f2d72682.jpg"},function(e){e.exports=JSON.parse('{"coord":{"lon":0,"lat":0},"weather":[{"id":0,"main":"Brak danych","description":"Brak danych","icon":"11d"}],"base":"Brak danych","main":{"temp":0,"feels_like":0,"temp_min":0,"temp_max":0,"pressure":0,"humidity":0},"visibility":0,"wind":{"speed":0,"deg":0},"clouds":{"all":0},"dt":0,"sys":{"type":0,"id":0,"country":"Brak danych","sunrise":0,"sunset":0},"timezone":0,"id":0,"name":"Brak danych","cod":0}')},,,function(e,t,a){e.exports=a.p+"static/media/rain.0e54c1a2.jpg"},function(e,t,a){e.exports=a.p+"static/media/summer.41cb5f87.jpg"},function(e,t,a){e.exports=a.p+"static/media/thunder.c416d247.jpg"},function(e,t,a){e.exports=a.p+"static/media/winter.ff7c4633.jpg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(5),r=a.n(c),o=(a(15),a(1)),i=function(e){var t=e.scrollUp,a=e.clickRefreshBtn;return s.a.createElement("i",{onClick:function(){t(),a()},className:"fas fa-sync-alt result__refreshIcon"})},l=function(e){var t=e.scrollUp,a=e.showSettings;return s.a.createElement("i",{onClick:function(){t(),a(!0)},className:"fas fa-cogs result__settingsIcon"})},m=a(2),u=a.n(m),p=a(6),g=a.n(p),f=a(7),d=a.n(f),_=a(8),h=a.n(_),w=a(9),N=a.n(w),E=(a(16),function(e){var t=e.weatherData,a=e.clickRefreshBtn,n=e.time,c=e.showSettings,r=t.main,o=t.name,m=t.weather,p=t.wind,f=t.sys,_=r.temp,w=r.feels_like,E=r.temp_min,v=r.temp_max,I=r.pressure,S=r.humidity,k=f.sunrise,T=f.sunset,b=new Date(1e3*(k+3600)),y=new Date(1e3*(T+3600)),O=b.toUTCString(),j=y.toUTCString(),x=3.6*p.speed,B=_<0&&_>=-.49?0:_.toFixed(),F=w<0&&w>=-.49?0:w.toFixed(),C=E<0&&E>=-.49?0:E.toFixed(),D=v<0&&v>=-.49?0:v.toFixed(),M=function e(){document.getElementById("result__wrapper").scrollTop>0&&(document.getElementById("result__wrapper").scrollTop-=5,setTimeout(e,5))},L=u.a;return B<=0||m[0].icon.includes("13")?L=N.a:B>0&&B<=20?L=u.a:B>20&&(L=d.a),(m[0].icon.includes("09")||m[0].icon.includes("10"))&&(L=g.a),m[0].icon.includes("11")&&(L=h.a),s.a.createElement("div",{className:"result",style:{backgroundImage:'url("'.concat(L,'")')}},s.a.createElement("div",{className:"result__wrapper",id:"result__wrapper"},s.a.createElement("h1",{className:"result__townName"},o),s.a.createElement("div",{className:"result__wrapperTemp"},s.a.createElement("h2",{className:"result__temp"},B,"\xb0C"),s.a.createElement("p",{className:"result__maxMinTemp"},"".concat(D,"\xb0C / ").concat(C,"\xb0C"))),s.a.createElement("img",{className:"result__weatherIcon",src:"https://openweathermap.org/img/wn/".concat(m[0].icon,"@2x.png"),alt:"Weather icon."}),s.a.createElement("div",{className:"result__wrapperInfo"},s.a.createElement("p",{className:"result__infoText"},"Opis: ",s.a.createElement("span",{className:"result__info"},m[0].description)),s.a.createElement("p",{className:"result__infoText"},"Odczuwalna: ",s.a.createElement("span",{className:"result__info"},F,"\xb0C")),s.a.createElement("p",{className:"result__infoText"},"Ci\u015bnienie: ",s.a.createElement("span",{className:"result__info"},I," pHa")),s.a.createElement("p",{className:"result__infoText"},"Wilgotno\u015b\u0107: ",s.a.createElement("span",{className:"result__info"},S,"%")),s.a.createElement("p",{className:"result__infoText"},"Pr\u0119dko\u015b\u0107 wiatru:"," ",s.a.createElement("span",{className:"result__info"},x.toFixed(2)," km/h")),s.a.createElement("p",{className:"result__infoText"},"Wsch\xf3d s\u0142o\u0144ca:"," ",s.a.createElement("span",{className:"result__info"},O.slice(-12,-4))),s.a.createElement("p",{className:"result__infoText"},"Zach\xf3d s\u0142o\u0144ca:"," ",s.a.createElement("span",{className:"result__info"},j.slice(-12,-4)))),s.a.createElement("div",{className:"result__wrapperIcons"},s.a.createElement(i,{scrollUp:M,clickRefreshBtn:a}),s.a.createElement(l,{scrollUp:M,showSettings:c})),s.a.createElement("p",{className:"result__dateOfRefresh"},"Dane z: ",n||"Brak danych")))}),v=function(e){var t=e.valueInput,a=e.changeInput;return s.a.createElement("input",{type:"text",value:t,onChange:a,className:"settings__input",placeholder:"Nazwa miasta..."})},I=function(e){var t=e.clickAddBtn;return s.a.createElement("button",{className:"settings__btn",onClick:t},"Sprawd\u017a pogod\u0119")},S=function(e){var t=e.isMainTown,a=e.checkIsMainTown,n=e.isFavourite;return[{text:"Ustaw jako g\u0142\xf3wne miasto.",name:"isMainTown",checked:t,fun:a},{text:"Dodaj do listy ulubionych miast.",name:"isFavourite",checked:t||n,fun:e.checkIsFavourite,disabled:t}].map((function(e){return s.a.createElement("label",{key:e.text,className:"settings__checkLabel",htmlFor:e.name},s.a.createElement("input",{type:"checkbox",name:e.name,id:e.name,className:"settings__check",checked:e.checked,onChange:e.fun,disabled:e.disabled}),e.text)}))},k=function(e){var t=e.favouriteTowns,a=e.setMainTownBtn,n=e.deleteTownFromList,c=e.checkWeatherHere,r=t.map((function(e,t){return s.a.createElement("li",{className:"settings__listItem",key:t},s.a.createElement("div",{className:"settings__wrapperIconName"},localStorage.getItem("townName")===e?s.a.createElement("i",{className:"fas fa-home settings__homeIcon"}):s.a.createElement("i",{className:"fas fa-home settings__homeIcon settings__homeIcon--disabled"}),s.a.createElement("span",{className:"settings__townName"},e),s.a.createElement("i",{onClick:function(){return n(e)},className:"fas fa-trash-alt settings__trashIcon"})),s.a.createElement("div",{className:"settings__wrapperBtn"},localStorage.getItem("townName")===e?null:s.a.createElement("button",{className:"settings__btn",onClick:function(){return a(e)}},"G\u0142\xf3wne miasto"),s.a.createElement("button",{className:"settings__btn",onClick:function(){return c(e)}},"Sprawd\u017a pogod\u0119")))})),o=r.find((function(e){return"fas fa-home settings__homeIcon"===e.props.children[0].props.children[0].props.className})),i=r.filter((function(e){return e!==o}));return[o,i.reverse()]},T=function(e){var t=e.showSettings;return s.a.createElement("i",{className:"fas fa-times settings__close",onClick:function(){return t(!1)}})},b=(a(17),function(e){var t=e.valueInput,a=e.changeInput,c=e.clickAddBtn,r=e.isMainTown,i=e.checkIsMainTown,l=e.isFavourite,m=e.checkIsFavourite,u=e.favouriteTowns,p=e.setMainTownBtn,g=e.deleteTownFromList,f=e.checkWeatherHere,d=e.settingsVisible,_=e.showSettings,h=Object(n.useState)(0),w=Object(o.a)(h,2),N=w[0],E=w[1],b=function(e){E(N+e)};return d&&N<100&&(!function e(){document.getElementById("settings").scrollTop>0&&(document.getElementById("settings").scrollTop-=5,setTimeout(e,10))}(),setTimeout((function(){return b(5)}),10)),!d&&N>0&&setTimeout((function(){return b(-5)}),10),s.a.createElement("div",{className:"settings",id:"settings",style:{display:"".concat(0!==N?"block":"none"),opacity:"".concat(N,"%")}},s.a.createElement("div",{className:"settings__wrapper"},s.a.createElement("h1",{className:"settings__title"},"Ustawienia"),s.a.createElement("div",{className:"settings__wrapperAddTown"},s.a.createElement(v,{valueInput:t,changeInput:a}),s.a.createElement(I,{clickAddBtn:c}),s.a.createElement(S,{isMainTown:r,checkIsMainTown:i,isFavourite:l,checkIsFavourite:m})),s.a.createElement("div",{className:"settings__wrapperFavouriteList"},s.a.createElement("h3",{className:"settings__favouriteTitle"},"Lista ulubionych miast"),s.a.createElement("ul",{className:"settings__favouriteList"},u.length?s.a.createElement(k,{favouriteTowns:u,setMainTownBtn:p,deleteTownFromList:g,checkWeatherHere:f}):s.a.createElement("li",{className:"settings__listItem"},"Brak danych."))),s.a.createElement(T,{showSettings:_}),s.a.createElement("p",{className:"settings__author"},"Projekt i realizacja: Marcin Hercog")))}),y=(a(18),function(e){var t=e.errorMessage;return s.a.createElement("div",{className:"errorPage"},s.a.createElement("h1",{className:"errorPage__message"},t))}),O=a(3),j=(a(19),"0d90c0d99506c2d578ef4a5f8468ce4f"),x=localStorage.getItem("localData")?JSON.parse(localStorage.getItem("localData")):O,B=localStorage.getItem("timeOfData")?localStorage.getItem("timeOfData"):"",F=localStorage.getItem("favouriteTownsList")?JSON.parse(localStorage.getItem("favouriteTownsList")):[];var C=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(x),i=Object(o.a)(r,2),l=i[0],m=i[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),g=p[0],f=p[1],d=Object(n.useState)(!1),_=Object(o.a)(d,2),h=_[0],w=_[1],N=Object(n.useState)(B),v=Object(o.a)(N,2),I=v[0],S=v[1],k=Object(n.useState)(F),T=Object(o.a)(k,2),C=T[0],D=T[1],M=Object(n.useState)(!1),L=Object(o.a)(M,2),W=L[0],z=L[1],U=Object(n.useState)(""),J=Object(o.a)(U,2),A=J[0],H=J[1],P=Object(n.useState)(!1),R=Object(o.a)(P,2),V=R[0],q=R[1],G=Object(n.useState)(!0),Z=Object(o.a)(G,2),$=Z[0],K=Z[1];Object(n.useEffect)((function(){localStorage.getItem("townName")?localStorage.getItem("townName")&&$&&(K(!1),X(localStorage.getItem("townName"))):(localStorage.setItem("townName","Warszawa"),X("Warszawa"))}),[$]);var Q=function(){var e=(new Date).toLocaleDateString(),t=(new Date).toLocaleTimeString();return"".concat(e,", ").concat(t)},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat(j,"&lang=pl&units=metric"),n=Q();fetch(t).then((function(e){if(e.ok)return e.json();throw e.status})).then((function(t){if(e===a.trim()&&(h||g))if(-1===C.findIndex((function(t){return t.toUpperCase()===e.toUpperCase()}))){var s=C;s.push(e),localStorage.setItem("favouriteTownsList",JSON.stringify(s)),D(s),g&&(localStorage.setItem("townName",e),localStorage.setItem("localData",JSON.stringify(t)),q(!1))}else z(!0),H("Miaso istnieje ju\u017c na li\u015bcie!"),setTimeout((function(){return z(!1)}),2e3);e===localStorage.getItem("townName")?(localStorage.setItem("localData",JSON.stringify(t)),localStorage.setItem("timeOfData",n),S(localStorage.getItem("timeOfData"))):S(n),m(t),g||h||q(!1)})).catch((function(e){console.log(new Error(e)),z(!0),localStorage.getItem("townName")?H("Nie istnieje miasto o nazwie ".concat(a.toUpperCase(),"!")):H("Brak przypisanego miasta g\u0142\xf3wnego!"),setTimeout((function(){return z(!1)}),2e3)}))},Y=function(e){q(e)};return s.a.createElement("div",{className:"app"},s.a.createElement(E,{weatherData:l,clickRefreshBtn:function(){X(localStorage.getItem("townName"))},time:I,showSettings:Y}),s.a.createElement(b,{valueInput:a,changeInput:function(e){c(e.target.value)},clickAddBtn:function(){if(""===a)z(!0),H("Wpisz nazw\u0119 miasta!"),setTimeout((function(){return z(!1)}),2e3);else{var e=a.trim();X(e),c(""),w(!1),f(!1)}},isMainTown:g,checkIsMainTown:function(){f(!g)},isFavourite:h,checkIsFavourite:function(){w(!h)},favouriteTowns:C,setMainTownBtn:function(e){localStorage.setItem("townName",e),X(localStorage.getItem("townName"))},deleteTownFromList:function(e){var t=C.filter((function(t){return t!==e}));D(t),e===localStorage.getItem("townName")&&(localStorage.clear(),m(O),S("")),localStorage.setItem("favouriteTownsList",JSON.stringify(t))},checkWeatherHere:function(e){X(e),q(!1)},settingsVisible:V,showSettings:Y}),W?s.a.createElement(y,{errorMessage:A}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2b91789a.chunk.js.map