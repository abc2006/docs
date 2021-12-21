"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9576],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,v=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),r=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(16681),s=t(86010),d="tabItem_1uMI";function u(e){var n,t,a,i=e.lazy,o=e.block,u=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,c.lx)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),b=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,r.useState)(g),x=y[0],E=y[1],O=[],z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=b[p];null!=T&&T!==x&&k.some((function(e){return e.value===T}))&&E(T)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==x&&(z(n),E(a),null!=p&&w(p,a))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},k.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":x===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:D,onClick:D},null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function m(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},79987:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=t(26396),l=t(58215),c=["components"],s={sidebar_position:4},d="Docker, Synology",u={unversionedId:"installation/docker",id:"installation/docker",title:"Docker, Synology",description:"evcc kann auch als Docker Image installiert werden.",source:"@site/docs/installation/docker.mdx",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/docker.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"macOS",permalink:"/docs/installation/macos"},next:{title:"Manuell (inkl. Windows)",permalink:"/docs/installation/manual"}},m=[{value:"Erstinstallation",id:"erstinstallation",children:[{value:"Alternative: docker-compose",id:"alternative-docker-compose",children:[],level:3}],level:2}],p={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-synology"},"Docker, Synology"),(0,i.kt)("p",null,"evcc kann auch als Docker Image installiert werden."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Momentan werden nur die CPU Architekturen AMD64, armv6 und arm64 in Docker Images unterst\xfctzt!"))),(0,i.kt)("h2",{id:"erstinstallation"},"Erstinstallation"),(0,i.kt)("p",null,"Folge diesen Schritten um die jeweils aktuellste Version zu installieren:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Erstelle ein lokales Verzeichnis, in welchem die evcc Konfigurationsdatei abgelegt wird.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wechsel in das erstellte Verzeichnis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F\xfchre folgenden Befehl aus:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"default",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -name evcc -v $(pwd)/evcc.yaml:/etc/evcc.yaml -p 7070:7070 andig/evcc\n"))),(0,i.kt)(l.Z,{value:"sma",label:"SMA Ger\xe4te",default:!0,mdxType:"TabItem"},"F\xfcr die Verwendung des SMA Sunny Home Manger 2.0 muss evcc eine eindeutige Ger\xe4te-ID erstellen. Unter Linux wird ",(0,i.kt)("i",null,"machine-id")," verwendet, und daf\xfcr muss es in den Container gemounted werden:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -name evcc -v $(pwd)/evcc.yaml:/etc/evcc.yaml -v /etc/machine-id:/etc/machine-id -v /var/lib/dbus/machine-id:/var/lib/dbus/machine-id --network host andig/evcc\n"))),(0,i.kt)(l.Z,{value:"udp",label:"UDP Ger\xe4te (z.b. KEBA)",default:!0,mdxType:"TabItem"},"Falls ein Messger\xe4t oder eine Wallbox verwendet wird, welches UDP ben\xf6tigt wie z.b. KEBA, stelle sicher dass der Docker Container auc hdie UDP Nachrichten auf den entsprechenden Ports empfangen kann (",(0,i.kt)("i",null,":7090")," for KEBA):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -name evcc -v $(pwd)/evcc.yaml:/etc/evcc.yaml -p 7070:7070 -p 7090:7090/udp andig/evcc\n")))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unter Linux ist es evtl. notwendig den Befehl mit ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," zu beginnen!"))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mounte nicht das lokale Verzeichnis ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," als Volume in Docker!"))),(0,i.kt)("p",{parentName:"li"},"Dies installiert einen Docker Container mit evcc und startet ihn.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pr\xfcfe die Installation und \xf6ffne einen Browser (auf dem gleichen Ger\xe4t) und gibt die folgende URL ein: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7070"),". Die evcc Oberfl\xe4che sollte im Demo Modus zu sehen sein."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ersetze ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," mit der IP Adresse oder dem Hostnamen des Computers, falls der Browser nicht auf dem gleichen Computer ge\xf6ffnet wurde.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it evcc evcc configure\n")),(0,i.kt)("p",{parentName:"li"},"Sofern alle Ger\xe4te korrekt konfiguriert sind, kannst du mit den n\xe4chsten Schritten fortfahren.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kopiere die erzeugte Konfigurationsdatei auf den Host:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker cp evcc:/evcc.yaml $(pwd)/evcc.yaml\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wenn die Konfiguration durchgef\xfchrt wurde, starte den Container mit folgendem Befehler erneut:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker container restart evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gehe zur\xfcck zum Browser und lade die evcc Seite neu. Die Oberfl\xe4che sollte nun mit deinen konfigurierten Ger\xe4ten zu sehen sein."))),(0,i.kt)("h3",{id:"alternative-docker-compose"},"Alternative: docker-compose"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," hat einige Vorteile gegen\xfcber der direkten Ausf\xfchrung in der Kommandozeile, z.B. falls man weitere Programme wie Traefik in Verbindung mit evcc nutzen m\xf6chte. Hier ist ein einfaches Beispiel f\xfcr eine solche Konfiguration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'version: "3"\nservices:\n evcc:\n   command:\n     - evcc\n   container_name: evcc\n   entrypoint:\n     - /app/entrypoint.sh\n   environment:\n     - PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n     - TZ=Europe/Berlin\n   hostname: 2326efea54e0\n   image: andig/evcc\n   ipc: private\n   logging:\n     driver: json-file\n     options: {}\n   ports:\n     - 7070:7070/tcp\n   volumes:\n     - /etc/evcc.yaml:/etc/evcc.yaml\n   working_dir: /app\nnetworks: {}\n')))}v.isMDXComponent=!0}}]);