"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1251],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),r=t(67294),l=t(72389),i=t(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(16681),d=t(86010),p="tabItem_1uMI";function s(e){var n,t,a,l=e.lazy,i=e.block,s=e.defaultValue,c=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,u.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(n=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),y=N.tabGroupChoices,b=N.setTabGroupChoices,z=(0,r.useState)(f),w=z[0],C=z[1],F=[],B=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==w&&g.some((function(e){return e.value===T}))&&C(T)}var E=function(e){var n=e.currentTarget,t=F.indexOf(n),a=g[t].value;a!==w&&(B(n),C(a),null!=m&&b(m,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;t=F[a]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;t=F[r]||F[F.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},k)},g.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":w===n}),key:n,ref:function(e){return F.push(e)},onKeyDown:D,onFocus:E,onClick:E},null!=t?t:n)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},95059:function(e,n,t){t.d(n,{ZP:function(){return u}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],o={toc:[]};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sponsor-Token erforderlich")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Weitere Informationen zum evcc Sponsorship gibt es ",(0,l.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),"."))))}u.isMDXComponent=!0},17459:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=t(26396),o=t(58215),u=t(95059),d=["components"],p={sidebar_position:6},s="vehicles",c={unversionedId:"reference/configuration/vehicles",id:"reference/configuration/vehicles",title:"vehicles",description:"Ein Fahrzeug repr\xe4sentiert ein spezifisches elektrisches Fahrzeug (EV) mit seiner Batterie. Wenn ein Fahrzeug konfiguriert und einem Ladepunkt zugewiesen ist, kann in der Benutzeroberfl\xe4che der Ladestatus (SOC) und die verbleibende Ladezeit angezeigt werden.",source:"@site/docs/reference/configuration/vehicles.mdx",sourceDirName:"reference/configuration",slug:"/reference/configuration/vehicles",permalink:"/docs/reference/configuration/vehicles",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/vehicles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"meters",permalink:"/docs/reference/configuration/meters"},next:{title:"hems",permalink:"/docs/reference/configuration/hems"}},m=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",children:[{value:"<code>name</code>",id:"name",children:[],level:3},{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3}],level:2},{value:"Optionale Parameter",id:"optionale-parameter",children:[{value:"<code>capacity</code>",id:"capacity",children:[],level:3},{value:"<code>onIdentify</code>",id:"onidentify",children:[],level:3},{value:"<code>identifiers</code>",id:"identifiers",children:[{value:"RFID",id:"rfid",children:[],level:4},{value:"Fahrzeugkennung",id:"fahrzeugkennung",children:[],level:4}],level:3},{value:"<code>cache</code>",id:"cache",children:[],level:3}],level:2},{value:"Unterst\xfctzte Typen",id:"unterst\xfctzte-typen",children:[{value:"<code>audi</code>",id:"audi",children:[],level:3},{value:"<code>bmw</code>",id:"bmw",children:[],level:3},{value:"<code>carwings</code>",id:"carwings",children:[],level:3},{value:"<code>citroen</code>, <code>ds</code>, <code>opel</code>, <code>peugeot</code>",id:"citroen-ds-opel-peugeot",children:[],level:3},{value:"<code>fiat</code>",id:"fiat",children:[],level:3},{value:"<code>ford</code>",id:"ford",children:[],level:3},{value:"<code>kia</code>",id:"kia",children:[],level:3},{value:"<code>hyundai</code>",id:"hyundai",children:[],level:3},{value:"<code>mini</code>",id:"mini",children:[],level:3},{value:"<code>nissan</code>",id:"nissan",children:[],level:3},{value:"<code>niu</code>",id:"niu",children:[],level:3},{value:"<code>tesla</code>",id:"tesla",children:[],level:3},{value:"<code>renault</code>",id:"renault",children:[],level:3},{value:"<code>ovms</code>",id:"ovms",children:[],level:3},{value:"<code>porsche</code>",id:"porsche",children:[],level:3},{value:"<code>seat</code>",id:"seat",children:[],level:3},{value:"<code>skoda</code>",id:"skoda",children:[],level:3},{value:"<code>enyaq</code>",id:"enyaq",children:[],level:3},{value:"<code>vw</code>",id:"vw",children:[],level:3},{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>volvo</code>",id:"volvo",children:[],level:3},{value:"<code>tronity</code>",id:"tronity",children:[],level:3},{value:"<code>custom</code>",id:"custom",children:[],level:3}],level:2}],k={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vehicles"},(0,l.kt)("inlineCode",{parentName:"h1"},"vehicles")),(0,l.kt)("p",null,"Ein Fahrzeug repr\xe4sentiert ein spezifisches elektrisches Fahrzeug (EV) mit seiner Batterie. Wenn ein Fahrzeug konfiguriert und einem ",(0,l.kt)("a",{parentName:"p",href:"loadpoints#vehicle--vehicles"},"Ladepunkt")," zugewiesen ist, kann in der Benutzeroberfl\xe4che der Ladestatus (SOC) und die verbleibende Ladezeit angezeigt werden."),(0,l.kt)("p",null,"Ebenfalls ist es damit m\xf6glich die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen. Da die meisten Wallboxen diesen nicht kennen k\xf6nnen (er wird nur in bestimmten Kombinationen der Wallbox \xfcbermittelt), kann evcc mit dieser Konfiguration direkt mit dem Fahrzeug \xfcber die online Schnittstelle (API) des Fahrzeugherstellers kommunizieren."),(0,l.kt)("p",null,"Die ",(0,l.kt)("inlineCode",{parentName:"p"},"vehicles")," Konfiguration ist eine Liste von verschiedenen Fahrzeugen."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: Zoe\n    type: ...\n    ...\n")),(0,l.kt)("p",null,"Konfigurationen f\xfcr bekannte Fahrzeuge sind unter ",(0,l.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"Ger\xe4te - Fahrzeuge")," zu finden."),(0,l.kt)("p",null,"Im folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("p",null,"Eine Kurzbezeichnung des hier konfigurierten Fahrzeugs. Der Wert wird in der Referenzierung des Fahrzeugs in der Konfiguration des ",(0,l.kt)("a",{parentName:"p",href:"loadpoints#vehicle--vehicles"},"Ladepunktes")," verwendet."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: zoe\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"Eine Beschreibung des Fahrzeugs welche auf der Benutzeroberfl\xe4che angezeigt wird."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  title: Zoe\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"Dies ist der evcc spezifische Messger\xe4te Typ, mit Hilfe dessen mit dem Ger\xe4t kommuniziert werden kann. Den passenden Typ f\xfcr bekannte Ger\xe4te findet man unter ",(0,l.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"Ger\xe4te - Fahrzeuge"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: renault\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,l.kt)("h3",{id:"capacity"},(0,l.kt)("inlineCode",{parentName:"h3"},"capacity")),(0,l.kt)("p",null,"Die Kapazit\xe4t der Batterie des Fahrzeugs in kWh."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  capacity: 50 # kWh\n")),(0,l.kt)("h3",{id:"onidentify"},(0,l.kt)("inlineCode",{parentName:"h3"},"onIdentify")),(0,l.kt)("p",null,"Standardwerte die bei Erkennung des Fahrzeuges angewendet werden sollen:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#mode"},(0,l.kt)("inlineCode",{parentName:"a"},"mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#min"},(0,l.kt)("inlineCode",{parentName:"a"},"minSoC"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#target"},(0,l.kt)("inlineCode",{parentName:"a"},"targetSoC"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#mincurrent"},(0,l.kt)("inlineCode",{parentName:"a"},"minCurrent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"loadpoints#maxcurrent"},(0,l.kt)("inlineCode",{parentName:"a"},"maxCurrent")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)(i.Z,{groupId:"config-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Template",label:"Template",default:!0,mdxType:"TabItem"},"Wenn die Fahrzeuge \xfcber den ",(0,l.kt)("i",null,"type=templates")," in die Konfiguration eingebunden werdnen, z.b. bei Verwendung von ",(0,l.kt)("i",null,"evcc configure"),".",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mode: pv\nminSoC: 40\ntargetSoC: 80\n"))),(0,l.kt)(o.Z,{value:"Native",label:"Native",mdxType:"TabItem"},"Wenn die Fahrzeuge \xfcber ihren nativen Typ, z.b. ",(0,l.kt)("i",null,"type=audi"),", in die Konfiguration eingebunden werden.",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"onIdentify: # set defaults when vehicle is identified\n  mode: pv\n  minSoC: 40\n  targetSoC: 80\n")))),(0,l.kt)("h3",{id:"identifiers"},(0,l.kt)("inlineCode",{parentName:"h3"},"identifiers")),(0,l.kt)("p",null,"Eine Liste mit einer oder mehreren Kennungen um das Fahrzeug zu identifizieren. Soll das Fahrzeug zum Beispiel an unterschiedlichen Wallboxen identifiziert werden k\xf6nnen, m\xfcssen unter Umst\xe4nden mehrere Kennungen verwendet werden. Die Erkennung kann dabei \xfcber folgende Mechanismen erfolgen:"),(0,l.kt)("h4",{id:"rfid"},"RFID"),(0,l.kt)("p",null,"Wenn die Wallbox \xfcber eine RFID Schnittstelle verf\xfcgt, kann eine RFID-Karte einem Fahrzeug zugewiesen werden um es so zu identifizieren. Hierbei wird die ",(0,l.kt)("inlineCode",{parentName:"p"},"RFID Token ID")," ben\xf6tigt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  identifiers:\n  - 12345ABC # RFID token ID\n")),(0,l.kt)("h4",{id:"fahrzeugkennung"},"Fahrzeugkennung"),(0,l.kt)("p",null,"Wenn die Wallbox es unterst\xfctzt, kann bekommt es vom Fahrzeug eine Fahrzeugkennung \xfcbermittelt. Dies kann entweder die MAC Adresse des On-Board-Ladeger\xe4tes sein, oder eine Kennung eines fest installierten Plug & Charge Zertifikats (ist ein anderes Zertifikat als f\xfcr DC Laden!). "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  identifiers:\n  - 01:23:45:67:89:0A # MAC address\n")),(0,l.kt)("p",null,"Manche Fahrzeuge erzeugen jeden Tag eine neue MAC Adresse. F\xfcr diesen Fall kann man Wildcards verwenden, falls die vorhandenen Fahrzeuge sich beim nicht \xe4ndernden Teil der MAC Adresse unterscheiden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  identifiers:\n  - 01:23:45:*\n")),(0,l.kt)("h3",{id:"cache"},(0,l.kt)("inlineCode",{parentName:"h3"},"cache")),(0,l.kt)("p",null,"Dauer der Zwischenspeicherung von den Werten der online Fahrzeug API (Default: 15m). Kleinere Werte erh\xf6hen die Anzahl der API Zugriffe, liefern daf\xfcr aber aktuellere Werte."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  cache: 5m # 5 minutes\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"unterst\xfctzte-typen"},"Unterst\xfctzte Typen"),(0,l.kt)("p",null,"Im folgenden sind die verschiedenen m\xf6glichen Typen dokumentiert:"),(0,l.kt)("h3",{id:"audi"},(0,l.kt)("inlineCode",{parentName:"h3"},"audi")),(0,l.kt)("p",null,"Fahrzeuge von Audi, z.b. eTron, Q55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: audi\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bmw"},(0,l.kt)("inlineCode",{parentName:"h3"},"bmw")),(0,l.kt)("p",null,"Fahrzeuge von BMW, z.b. i3."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: bmw\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"carwings"},(0,l.kt)("inlineCode",{parentName:"h3"},"carwings")),(0,l.kt)("p",null,"Fahrzeuge von Nissan, z.b. Leaf vor 2019."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: carwings\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"citroen-ds-opel-peugeot"},(0,l.kt)("inlineCode",{parentName:"h3"},"citroen"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"ds"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"opel"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"peugeot")),(0,l.kt)("p",null,"Fahrzeuge der PSA Marken"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: citroen\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fiat"},(0,l.kt)("inlineCode",{parentName:"h3"},"fiat")),(0,l.kt)("p",null,"Fahrzeuge von Fiat, z.b. 500e, Neuer 500"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: fiat\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ford"},(0,l.kt)("inlineCode",{parentName:"h3"},"ford")),(0,l.kt)("p",null,"Fahrzeuge von Ford, z.b. Kuga, Mustang"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: ford\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"kia"},(0,l.kt)("inlineCode",{parentName:"h3"},"kia")),(0,l.kt)("p",null,"Fahrzeuge von Kia, z.b. Soul, andere Bluelink Modelle"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: kia\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hyundai"},(0,l.kt)("inlineCode",{parentName:"h3"},"hyundai")),(0,l.kt)("p",null,"Fahrzeuge von Hyunadi, z.b. Ioniq, Kona, andere Bluelink Modelle"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: hyundai\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mini"},(0,l.kt)("inlineCode",{parentName:"h3"},"mini")),(0,l.kt)("p",null,"Fahrzeuge von Mini, z.b. Cooper SE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: mini\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nissan"},(0,l.kt)("inlineCode",{parentName:"h3"},"nissan")),(0,l.kt)("p",null,"Fahrzeuge von Nissan, z.b. Leaf (ab 2019)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: nissan\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"niu"},(0,l.kt)("inlineCode",{parentName:"h3"},"niu")),(0,l.kt)("p",null,"Niu Scooter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: niu\n  ...\n")),(0,l.kt)("h3",{id:"tesla"},(0,l.kt)("inlineCode",{parentName:"h3"},"tesla")),(0,l.kt)("p",null,"Fahrzeuge von Tesla"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: tesla\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"renault"},(0,l.kt)("inlineCode",{parentName:"h3"},"renault")),(0,l.kt)("p",null,"Fahrzeuge von Renault, z.b. alle ZE Modelle, Twingo Electric, Master, Kangoo"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: renault\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ovms"},(0,l.kt)("inlineCode",{parentName:"h3"},"ovms")),(0,l.kt)("p",null,"Fahrzeuge \xfcber das Open Vehicle Monitoring System, z.b. twizzy, Smart ED"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: ovms\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"porsche"},(0,l.kt)("inlineCode",{parentName:"h3"},"porsche")),(0,l.kt)("p",null,"Fahrzeuge von Porsche, z.b. Taycan, Cayenne E-Hybrid"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: porsche\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"seat"},(0,l.kt)("inlineCode",{parentName:"h3"},"seat")),(0,l.kt)("p",null,"Fahrzeuge von Seat, z.b. Cupra, Mii"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: seat\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"skoda"},(0,l.kt)("inlineCode",{parentName:"h3"},"skoda")),(0,l.kt)("p",null,"Fahrzeuge von Skoda, z.b. Citigo"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: skoda\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"enyaq"},(0,l.kt)("inlineCode",{parentName:"h3"},"enyaq")),(0,l.kt)("p",null,"Skoda Enyaq"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: enyaq\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"vw"},(0,l.kt)("inlineCode",{parentName:"h3"},"vw")),(0,l.kt)("p",null,"Fahrzeuge von Volkswagen, z.b. eGolf, eUp"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: vw\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h3"},"id")),(0,l.kt)("p",null,"Volkswagen ID Modelle, z.b. ID.3, ID.4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: id\n  ...\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"volvo"},(0,l.kt)("inlineCode",{parentName:"h3"},"volvo")),(0,l.kt)("p",null,"Fahrzeuge von Volvo"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: volvo\n  ...\n")),(0,l.kt)("h3",{id:"tronity"},(0,l.kt)("inlineCode",{parentName:"h3"},"tronity")),(0,l.kt)(u.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("p",null,"Fahrzeuge \xfcber Tronity"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: tronity\n  ...\n")),(0,l.kt)("h3",{id:"custom"},(0,l.kt)("inlineCode",{parentName:"h3"},"custom")),(0,l.kt)("p",null,"Standardimplementierung um eigene Fahrzeuge \xfcber ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/plugins"},"Plugins")," hinzuzuf\xfcgen."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: custom\n  ...\n")))}h.isMDXComponent=!0}}]);