"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4691],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],d={sidebar_position:3},o="loadpoints",p={unversionedId:"reference/configuration/loadpoints",id:"reference/configuration/loadpoints",title:"loadpoints",description:"loadpoints (Ladepunkte) ist eine Liste von Ladepunkten und kombiniert f\xfcr jeden Ladepunkt eine Wallbox, Fahrzeuge und falls notwendig einen Z\xe4hler mit weiteren optionalen Parametern. Eine minimale Konfiguration erfordert eine Wallbox.",source:"@site/docs/reference/configuration/loadpoints.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/loadpoints",permalink:"/docs/reference/configuration/loadpoints",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/loadpoints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"site",permalink:"/docs/reference/configuration/site"},next:{title:"chargers",permalink:"/docs/reference/configuration/chargers"}},m=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>charger</code>",id:"charger",children:[],level:3}],level:2},{value:"Optionale Parameter",id:"optionale-parameter",children:[{value:"<code>meters</code>",id:"meters",children:[],level:3},{value:"<code>vehicle(s)</code>",id:"vehicles",children:[],level:3},{value:"<code>resetOnDisconnect</code>",id:"resetondisconnect",children:[],level:3},{value:"<code>mode</code>",id:"mode",children:[],level:3},{value:"<code>soc</code>",id:"soc",children:[{value:"<code>poll</code>",id:"poll",children:[],level:4},{value:"<code>poll.mode</code>",id:"pollmode",children:[],level:4},{value:"<code>poll.Interval</code>",id:"pollinterval",children:[],level:4},{value:"<code>min</code>",id:"min",children:[],level:4},{value:"<code>target</code>",id:"target",children:[],level:4},{value:"<code>estimate</code>",id:"estimate",children:[],level:4},{value:"<code>mode</code>",id:"mode-1",children:[],level:4},{value:"<code>targetSoC</code>",id:"targetsoc",children:[],level:4},{value:"<code>mode</code>",id:"mode-2",children:[],level:4},{value:"<code>targetSoC</code>",id:"targetsoc-1",children:[],level:4}],level:3},{value:"<code>enable</code>",id:"enable",children:[{value:"<code>threshold</code>",id:"threshold",children:[],level:4},{value:"<code>delay</code>",id:"delay",children:[],level:4}],level:3},{value:"<code>disable</code>",id:"disable",children:[{value:"<code>threshold</code>",id:"threshold-1",children:[],level:4},{value:"<code>delay</code>",id:"delay-1",children:[],level:4}],level:3},{value:"<code>guardduration</code>",id:"guardduration",children:[],level:3},{value:"<code>phases</code>",id:"phases",children:[],level:3},{value:"<code>minCurrent</code>",id:"mincurrent",children:[],level:3},{value:"<code>maxCurrent</code>",id:"maxcurrent",children:[],level:3}],level:2}],s={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loadpoints"},(0,l.kt)("inlineCode",{parentName:"h1"},"loadpoints")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loadpoints")," (Ladepunkte) ist eine Liste von Ladepunkten und kombiniert f\xfcr jeden Ladepunkt eine Wallbox, Fahrzeuge und falls notwendig einen Z\xe4hler mit weiteren optionalen Parametern. Eine minimale Konfiguration erfordert eine Wallbox."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"loadpoints:\n- title: Garage # display name for UI\n  charger: wallbox # Wallbox Referenz\n  vehicles:\n    - audi # Fahreug Referenz\n  mode: pv # charge mode (off, now, minpv, pv)\n")),(0,l.kt)("p",null,"Referenzen sind hierbei immer die Werte des Parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"wallbox"),") in der jeweiligen Ger\xe4tekonfiguration."),(0,l.kt)("p",null,"Im folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"Eine Beschreibung des Ladepunktes, wird in der UI angezeigt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  title: Garage\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"charger"},(0,l.kt)("inlineCode",{parentName:"h3"},"charger")),(0,l.kt)("p",null,"Referenz auf eine ",(0,l.kt)("inlineCode",{parentName:"p"},"charger")," (Wallbox) Konfiguration.\n",(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  charger: wallbox\n")),(0,l.kt)("p",null,"Wobei hier der Wert ",(0,l.kt)("inlineCode",{parentName:"p"},"wallbox")," dem Wert eines ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,l.kt)("a",{parentName:"p",href:"chargers#name"},"Wallbox Definition")," entspricht."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,l.kt)("h3",{id:"meters"},(0,l.kt)("inlineCode",{parentName:"h3"},"meters")),(0,l.kt)("p",null,"Referenz auf eine ",(0,l.kt)("inlineCode",{parentName:"p"},"meter")," (Strommessger\xe4t) Konfiguration."),(0,l.kt)("p",null,"Dieser Eintrag wird nur ben\xf6tigt, wenn die verwendete Wallbox keine eigene Strommessung durchf\xfchrt bzw. die Werte der Messung von evcc nicht ausgelesen werden k\xf6nnen. Aber selbst dann ist dieser Eintrag optional, denn evcc rechnet nimmt an dass mit der eingestellten maximalen Stromst\xe4rke auch geladen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  meters:\n    charge: charge\n")),(0,l.kt)("p",null,"Wobei hier der Wert ",(0,l.kt)("inlineCode",{parentName:"p"},"charge")," dem Wert eines ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,l.kt)("a",{parentName:"p",href:"meters#name"},"Strommessger\xe4te Definition")," entspricht."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"vehicles"},(0,l.kt)("inlineCode",{parentName:"h3"},"vehicle(s)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vehicle"),": Referenz auf eine ",(0,l.kt)("inlineCode",{parentName:"p"},"vehicle")," (Fahrzeug) Konfiguration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  vehicle: renault\n")),(0,l.kt)("p",null,"Wobei hier der Wert ",(0,l.kt)("inlineCode",{parentName:"p"},"renault")," dem Wert eines ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,l.kt)("a",{parentName:"p",href:"vehicles#name"},"Fahrzeug Definition")," entspricht."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vehicles"),": Eine Liste von Referenzen auf Konfigurationen von ",(0,l.kt)("inlineCode",{parentName:"p"},"vehicles")," (Fahrzeugen)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  vehicles:\n  - renault\n  - vw\n")),(0,l.kt)("p",null,"Wobei hier der Wert ",(0,l.kt)("inlineCode",{parentName:"p"},"renault")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"vw")," dem Wert eines ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,l.kt)("a",{parentName:"p",href:"vehicles#name"},"Fahrzeug Definition")," entspricht."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resetondisconnect"},(0,l.kt)("inlineCode",{parentName:"h3"},"resetOnDisconnect")),(0,l.kt)("p",null,"Definiert ob bei Abstecken des Ladekabels vom Fahrzeug, die Standardeinstellungen f\xfcr folgende Werte wieder hergestellt werden sollen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#mode"},(0,l.kt)("inlineCode",{parentName:"a"},"mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#min"},(0,l.kt)("inlineCode",{parentName:"a"},"soc.min"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#target"},(0,l.kt)("inlineCode",{parentName:"a"},"soc.target"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#mincurrent"},(0,l.kt)("inlineCode",{parentName:"a"},"minCurrent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#maxcurrent"},(0,l.kt)("inlineCode",{parentName:"a"},"maxCurrent")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true"),": Standardeinstellungen werden eingestellt."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"false"),": Aktuelle Einstellungen bleiben erhalten.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  resetOnDisconnect: true\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"mode")),(0,l.kt)("p",null,"Der Standard Lademodus wenn evcc startet."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"off"),": Das Laden ist gestoppt, auch wenn ein Fahrzeug an der Wallbox angeschlossen ist."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"now"),": Lade sofort mit der maximalen m\xf6glichen Leistung."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minpv"),": Lade sofort mit der minimal m\xf6glichen Leistung. Falls genug PV \xdcberschuss vorhanden ist, lade schneller."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pv"),": Lade nur mit PV \xdcberschuss und pausiere wenn nicht genug Leistung verf\xfcgbar ist.")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Im allgemeinen ben\xf6tigt ein EV mindestens 1,4kW Leistung pro Phase um zu Laden. Bei Wallboxen und Fahrzeugen welche \xfcber den ISO15118 Standard kommunizieren, wird insgesamt mindestens 1,4kW Leistung ben\xf6tigt, egal mit wievielen Phasen geladen wird."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  mode: pv\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"soc"},(0,l.kt)("inlineCode",{parentName:"h3"},"soc")),(0,l.kt)("p",null,"Definiere die Standardeinstellungen f\xfcr den Umgang mit dem SOC eines angeschlossenen Fahrzeugs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  soc:\n    poll:\n      mode: charging\n      interval: 60m\n    min: 0\n    target: 100\n    estimate: false\n")),(0,l.kt)("h4",{id:"poll"},(0,l.kt)("inlineCode",{parentName:"h4"},"poll")),(0,l.kt)("p",null,"Definiert wie die Fahrzeug APIs benutzt werden um aktuelle Informationen des Fahrzeugs abzurufen."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Es ist ",(0,l.kt)("strong",{parentName:"p"},"NICHT")," empfehlen die Standardeinstellungen zu \xe4ndern. Denn dies k\xf6nnte dazu f\xfchren dass die Fahrzeugbatterie entleert wird\noder dass der Fahrzeughersteller aktiv verhindern w\xfcrde das evcc benutzen kann. ",(0,l.kt)("strong",{parentName:"p"},"AUF EIGENES RISIKO.")))),(0,l.kt)("h4",{id:"pollmode"},(0,l.kt)("inlineCode",{parentName:"h4"},"poll.mode")),(0,l.kt)("p",null,"Definiert unter welchen Bedingungen die Daten f\xfcr da Fahrzeug abgerufen werden"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"charging"),": aktualisiere die Daten ",(0,l.kt)("strong",{parentName:"li"},"NUR")," w\xe4hrend eines Ladevorgangs (dies ist die empfohlene Standardeinstellung)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"connected"),": aktualisiere die Daten wenn das Fahrzeug mit der Wallbox verbunden ist (nicht nur wenn es l\xe4dt), der Parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"interval")," definiert wie oft"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"always"),": aktualisiere die Daten immer auch wenn es nicht mit der Wallbox verbunden ist, der Parameter ",(0,l.kt)("a",{parentName:"li",href:"#interval"},(0,l.kt)("inlineCode",{parentName:"a"},"interval"))," definiert wie oft (wird nur f\xfcr ein Fahrzeug eines Ladepunktes unterst\xfctzt)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"      mode: charging\n")),(0,l.kt)("h4",{id:"pollinterval"},(0,l.kt)("inlineCode",{parentName:"h4"},"poll.Interval")),(0,l.kt)("p",null,"Definiert wie oft das Fahrzeug nach neuen Daten abgefragt wird, wenn es ",(0,l.kt)("strong",{parentName:"p"},"NICHT")," l\xe4dt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"      interval: 60m\n")),(0,l.kt)("h4",{id:"min"},(0,l.kt)("inlineCode",{parentName:"h4"},"min")),(0,l.kt)("p",null,"Lade sofort bis zu dem angegebenen Wert mit der h\xf6chsten Leistung, wenn der Parameter ",(0,l.kt)("a",{parentName:"p",href:"#mode"},(0,l.kt)("inlineCode",{parentName:"a"},"mode"))," (Lademodus) nicht auf ",(0,l.kt)("inlineCode",{parentName:"p"},"off")," steht"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Der Wert entspricht dem Ziel-SoC (Ladezustand in %) der EV Batterie."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    min: 50 # Lade sofort auf 50% SOC\n")),(0,l.kt)("h4",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h4"},"target")),(0,l.kt)("p",null,"Definiere bis zu welchem SOC geladen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    target: 80 # Lade bis maximal 80% SOC\n")),(0,l.kt)("h4",{id:"estimate"},(0,l.kt)("inlineCode",{parentName:"h4"},"estimate")),(0,l.kt)("p",null,"Berechne (interpoliere) den aktuellen SOC zwischen den Abfragen an das Fahrzeug."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true"),": evcc interpoliert die SOC Werte zwischen den Fahrzeug abfragen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"false"),": evcc nutzt nur die SOC Werte welche das Fahrzeug zur\xfcckliefert")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    estimate: false # Keine Interpolation\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"mode-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"mode")),(0,l.kt)("p",null,"Der Lademodus wenn ein Fahrzeug von der Wallbox getrennt wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":  Siehe ",(0,l.kt)("a",{parentName:"p",href:"#mode"},"Mode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    mode: pv\n")),(0,l.kt)("h4",{id:"targetsoc"},(0,l.kt)("inlineCode",{parentName:"h4"},"targetSoC")),(0,l.kt)("p",null,"Definiere bis zu welchem SOC geladen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Siehe ",(0,l.kt)("a",{parentName:"p",href:"#target"},"Target")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    targetSoC: 80 # Lade bis maximal 80% SOC\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"mode-2"},(0,l.kt)("inlineCode",{parentName:"h4"},"mode")),(0,l.kt)("p",null,"Der Lademodus wenn ein Fahrzeug von der Wallbox getrennt wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Siehe ",(0,l.kt)("a",{parentName:"p",href:"#mode"},"Mode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    mode: pv\n")),(0,l.kt)("h4",{id:"targetsoc-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"targetSoC")),(0,l.kt)("p",null,"Definiere bis zu welchem SOC geladen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Siehe ",(0,l.kt)("a",{parentName:"p",href:"#target"},"Target")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    targetSoC: 80 # Lade bis maximal 80% SOC\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"enable"},(0,l.kt)("inlineCode",{parentName:"h3"},"enable")),(0,l.kt)("p",null,"Definiert das Verhalten wann im PV Modus das Laden begonnen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  enable:\n    threshold: 0\n    delay: 1m\n")),(0,l.kt)("h4",{id:"threshold"},(0,l.kt)("inlineCode",{parentName:"h4"},"threshold")),(0,l.kt)("p",null,"Definiert den Schwellenwert der Leistung am Netzanschlusspunkt in Watt (W)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein positiver Wert f\xfcr Netzbezug, ein negativer Wert f\xfcr Export. Bei ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," muss der Export die minimale Ladeleistung erreicht haben."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    threshold: 0\n")),(0,l.kt)("h4",{id:"delay"},(0,l.kt)("inlineCode",{parentName:"h4"},"delay")),(0,l.kt)("p",null,"Definiert wie lange der ",(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (Schwellenwert) erf\xfcllt sein muss."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    delay: 1m\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disable"},(0,l.kt)("inlineCode",{parentName:"h3"},"disable")),(0,l.kt)("p",null,"Definiert das Verhalten wann im PV Modus das Laden unterbrochen wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"10m")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  disable:\n    threshold: 200 # maximum import power (W)\n    delay: 10m\n")),(0,l.kt)("h4",{id:"threshold-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"threshold")),(0,l.kt)("p",null,"Definiert den Schwellenwert der Leistung am Netzanschlusspunkt in Watt (W)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein positiver Wert f\xfcr Netzbezug, ein negativer Wert f\xfcr Export."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    threshold: 200 # Ein maximaler Netzbezug von 200W ist erlaubt\n")),(0,l.kt)("h4",{id:"delay-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"delay")),(0,l.kt)("p",null,"Definiert wie lange der ",(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (Schwellenwert) erf\xfcllt sein muss."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    delay: 10m\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"guardduration"},(0,l.kt)("inlineCode",{parentName:"h3"},"guardduration")),(0,l.kt)("p",null,"Definiert den zeitlichen Mindestabstand in welchem der Strom gesperrt oder wieder freigegeben werden darf."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"10m")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("p",null,"Mindestens 15 Minuten Abstand zwischen dem An-/Ausschalten des Ladevorgangs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  guardduration: 15m\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"phases"},(0,l.kt)("inlineCode",{parentName:"h3"},"phases")),(0,l.kt)("p",null,"Definiert die Anzahl der Phasen mit welcher die Wallbox angeschlossen ist."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"1|2|3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  phases: 1\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mincurrent"},(0,l.kt)("inlineCode",{parentName:"h3"},"minCurrent")),(0,l.kt)("p",null,"Definiert die minimale Stromst\xe4rke in Ampere (A) pro angeschlossener Phase von der Zuleitung zur Wallbox."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Im allgemeinen ben\xf6tigt ein EV mindestens eine Stromst\xe4rke 6A pro Phase um zu Laden. Bei manchen Fahrzeugen wird auch eine h\xf6here Stromst\xe4rke ben\xf6tigt!"),(0,l.kt)("p",{parentName:"div"},"Bei Wallboxen und Fahrzeugen welche \xfcber den ISO15118 Standard kommunizieren kann unter umst\xe4nden auch mit einer geringeren Stromst\xe4rke pro Phase geladen werden, wenn die Gesamtleistung trotzdem mindestens etwa 1,4kW betr\xe4gt."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  mincurrent: 6\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxcurrent"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxCurrent")),(0,l.kt)("p",null,"Definiert die maximale Stromst\xe4rke in Ampere (A) pro angeschlossener Phase von der Zuleitung zur Wallbox."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"16")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  maxcurrent: 16\n")))}u.isMDXComponent=!0}}]);