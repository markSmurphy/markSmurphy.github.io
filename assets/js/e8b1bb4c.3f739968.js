"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return a?i.createElement(h,r(r({ref:t},p),{},{components:a})):i.createElement(h,r({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<n;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294),l=a(6010);const n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(7462),l=a(7294),n=a(6010),r=a(2389),o=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a;const{lazy:r,block:m,defaultValue:d,values:h,groupId:b,className:y}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),g=(0,o.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:A}=(0,s.U)(),[S,N]=(0,l.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==S&&f.some((t=>t.value===e))&&N(e)}const L=e=>{const t=e.currentTarget,a=x.indexOf(t),i=f[a].value;i!==S&&(T(t),N(i),null!=b&&A(b,String(i)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var i;const t=x.indexOf(e.currentTarget)+1;a=null!=(i=x[t])?i:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;a=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":m},y)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:L,onClick:L},r,{className:(0,n.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(v.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function d(e){const t=(0,r.Z)();return l.createElement(m,(0,i.Z)({key:String(t)},e))}},1054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var i=a(7462),l=(a(7294),a(3905)),n=a(5488),r=a(5162);const o={title:"Calculating Availability SLAs in Distributed Systems",author:"Mark Murphy",authorURL:"https://github.com/markSmurphy"},s=void 0,u={permalink:"/blog/2022/10/05/Calculating-Availability-SLAs/Calculating-Availability-SLAs",source:"@site/blog/2022-10-05-Calculating-Availability-SLAs/Calculating-Availability-SLAs.mdx",title:"Calculating Availability SLAs in Distributed Systems",description:"Complexity in multi-tiered systems",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[],readingTime:6.135,hasTruncateMarker:!1,authors:[{name:"Mark Murphy",url:"https://github.com/markSmurphy"}],frontMatter:{title:"Calculating Availability SLAs in Distributed Systems",author:"Mark Murphy",authorURL:"https://github.com/markSmurphy"}},p={authorsImageUrls:[void 0]},c=[{value:"Complexity in multi-tiered systems",id:"complexity-in-multi-tiered-systems",level:2},{value:"The Relationship Between Complexity and Availability",id:"the-relationship-between-complexity-and-availability",level:2},{value:"Single tier",id:"single-tier",level:3},{value:"Two tiers",id:"two-tiers",level:3},{value:"Calculating Probability",id:"calculating-probability",level:4},{value:"Real World Example",id:"real-world-example",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"complexity-in-multi-tiered-systems"},"Complexity in multi-tiered systems"),(0,l.kt)("p",null,"Modern cloud-native solutions invariably employ micro-service architecture, resulting in highly distributed applications spanning multiple tiers."),(0,l.kt)("p",null,"The benefits of this approach are well documented and not in dispute, but it does add a certain complexity."),(0,l.kt)("p",null,"The complexity we're referring to here is ",(0,l.kt)("em",{parentName:"p"},"not")," complexity of the code, nor complexity of the functionality of the solution; By ",(0,l.kt)("strong",{parentName:"p"},"complexity")," we mean the non-functional complexity that come hand-in-hand with multi-tiered micro-service solutions. As an end-to-end system becomes more complex, it also becomes, probabilistically, less available."),(0,l.kt)("p",null,"Consider the example topology below, and that each of these nine tiers will be underpinned by a given cloud service, and the service provider will publish it's availability ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Service-level_agreement"},"SLA")," for each of those services; but when ",(0,l.kt)("em",{parentName:"p"},"our")," end users expect an SLA statement about the guaranteed availability of ",(0,l.kt)("em",{parentName:"p"},"our")," overall service, ",(0,l.kt)("strong",{parentName:"p"},"How do we calculate the availability SLA of a distributed system?")),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:a(973).Z},(0,l.kt)("img",{alt:"Example Topology",src:a(3710).Z,width:"925",height:"1020"}))),(0,l.kt)("p",null,"To work this out for any conceivable topology, we must first understand the ",(0,l.kt)("strong",{parentName:"p"},"The relationship between complexity and availability")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"the-relationship-between-complexity-and-availability"},"The Relationship Between Complexity and Availability"),(0,l.kt)("p",null,"To understand this better, let's start off with a simple topology and add complexity as we go:"),(0,l.kt)("h3",{id:"single-tier"},"Single tier"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:a(2893).Z},(0,l.kt)("img",{alt:"Simple Topology",src:a(6107).Z,width:"578",height:"557"}))),(0,l.kt)("p",null,"In the example above we have a client-side application which connects directly to a cloud hosted database, and the cloud provider's SLA states an availability of 99%."),(0,l.kt)("p",null,"If the database is down, then our whole system is down. So our system also, inherently, has an availability of ",(0,l.kt)("strong",{parentName:"p"},"99%")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"There are very good reasons why don't design ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/w/index.php?title=Thick_client&redirect=yes"},"thick-client")," applications anymore."),(0,l.kt)("p",{parentName:"admonition"},"This example serves only as a baseline upon which to add complexity and examine how the system's availability evolves.")),(0,l.kt)("p",null,"Let's make our system a little more realistic by changing it to be a browser based application and see how it changes our system's 99% Availability."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"two-tiers"},"Two tiers"),(0,l.kt)("p",null,"If we add a web server between the client and the database we're introducing a new tier into our system."),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:a(4061).Z},(0,l.kt)("img",{alt:"Web Application Topology",src:a(7864).Z,width:"580",height:"592"}))),(0,l.kt)("p",null,"The client's browser uses ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS")," to communicate with the web server, and the application hosted on the web server connects to the database."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For simplicity we're stating that the web server's availability is also 99%.")),(0,l.kt)("p",null,"If either of these two tiers are down, then our system is down (because each tier is useless by itself)."),(0,l.kt)("h4",{id:"calculating-probability"},"Calculating Probability"),(0,l.kt)("p",null,"So we now have two tiers, each with 0.99 probability of being available at any given point time."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Probabilities are expressed as numbers between ",(0,l.kt)("strong",{parentName:"p"},"zero")," (no chance of happening) and ",(0,l.kt)("strong",{parentName:"p"},"one")," (a certainty).")),(0,l.kt)("p",null,"Calculating our system's availability is a simple matter of multiplying each tier's probability of being available (being up)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"0.99 * 0.99 = 0.98\n")),(0,l.kt)("p",null,"So our revised system architecture has an availability ",(0,l.kt)("strong",{parentName:"p"},"98%"),". Notice that this is ",(0,l.kt)("em",{parentName:"p"},"lower")," than the previous, more simplistic, example. If this is surprising to you. it can rationalised by considering that we'd expect the database to be down 1% of the time, but we'd also expect the web server to be down 1% of the time. These two separate downtimes combine for a total of 2% downtime."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The addition of additional tiers into a distributed application decreases it's expected availability.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"real-world-example"},"Real World Example"),(0,l.kt)("p",null,"Let's return to our earlier example of a topology with nine tiers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Relational database"),(0,l.kt)("li",{parentName:"ul"},"NoSQL database"),(0,l.kt)("li",{parentName:"ul"},"DNS"),(0,l.kt)("li",{parentName:"ul"},"Serverless compute"),(0,l.kt)("li",{parentName:"ul"},"Web Servers"),(0,l.kt)("li",{parentName:"ul"},"API Gateway"),(0,l.kt)("li",{parentName:"ul"},"Load Balancer"),(0,l.kt)("li",{parentName:"ul"},"Firewall"),(0,l.kt)("li",{parentName:"ul"},"CDN")),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:a(973).Z},(0,l.kt)("img",{alt:"Example Topology",src:a(3710).Z,width:"925",height:"1020"}))),(0,l.kt)("p",null,"Using our cloud service provider's SLA documentation, such as ",(0,l.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/support/legal/sla/summary/"},"Azure's")," or ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/legal/service-level-agreements/"},"AWS's"),", we can find the Service Availability for each of our tiers and multiply them together to obtain our solution's availability."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"azure",label:"Azure",default:!0,mdxType:"TabItem"},"Azure Availability SLAs",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  | Tier                | Azure Service              | Service Availability |\n  |---------------------|----------------------------|----------------------|\n  | Relational database | Azure SQL Database         |        99.99%        |\n  | NoSQL database      | Azure CosmosDB             |        99.99%        |\n  | DNS                 | Azure Provided DNS         |       100.00%        |\n  | Serverless compute  | Azure Functions            |        99.95%        |\n  | Web Servers         | Azure Cloud Services       |        99.95%        |\n  | API Gateway         | Azure API Management       |        99.95%        |\n  | Load Balancer       | Azure Load Balancer        |        99.99%        |\n  | Firewall            | Azure Firewall             |        99.95%        |\n  | CDN                 | Azure CDN                  |        99.90%        |\n\n  0.9999 * 0.9999 * 1.0000 * 0.9995 * 0.9995 * 0.9995 * 0.9999 * 0.9995 * 0.999 = 0.9967\n\n  End-to-end System's Availability SLA is 99.67%\n"))),(0,l.kt)(r.Z,{value:"aws",label:"AWS",mdxType:"TabItem"},"AWS Availability SLAs",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  | Tier                | AWS Service                | Service Availability |\n  |---------------------|----------------------------|----------------------|\n  | Relational database | Amazon RDS                 |        99.95%        |\n  | NoSQL database      | AWS DynamoDB               |        99.99%        |\n  | DNS                 | Amazon Route 53            |        99.99%        |\n  | Serverless compute  | AWS Lambda                 |        99.95%        |\n  | Web Servers         | Amazon Lightsail (managed) |        99.95%        |\n  | API Gateway         | AWS API Gateway            |        99.95%        |\n  | Load Balancer       | Elastic Load Balancer      |        99.99%        |\n  | Firewall            | AWS Network Firewall       |        99.90%        |\n  | CDN                 | Amazon CloudFront          |        99.90%        |\n\n  0.9995 * 0.9999 * 0.9999 * 0.9995 * 0.9995 * 0.9995 * 0.9999 * 0.9990 * 0.9990 = 0.9957\n\n  End-to-end System's Availability SLA is 99.57%\n")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"It's interesting to note the slight differences between providers. In this example, Azure offers a 0.1% higher availability SLA than AWS for these equivalent services, but there are caveats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Many services have multiple tiers, and different tiers offer different availability SLAs. For this example I've used the highest tier on offer, but ..."),(0,l.kt)("li",{parentName:"ul"},"These services change and improve over time, so this example is just snapshot in time rather than evidence of superiority."),(0,l.kt)("li",{parentName:"ul"},"Service providers may not achieve their SLAs, and conversely may exceed them."),(0,l.kt)("li",{parentName:"ul"},"Different regions ",(0,l.kt)("em",{parentName:"li"},"will")," have different uptime results. e.g. AWS's ",(0,l.kt)("inlineCode",{parentName:"li"},"us-east-1")," region ",(0,l.kt)("em",{parentName:"li"},"usually")," gets updates first, so you might expect solutions deployed there to be effected more by problematic updates."),(0,l.kt)("li",{parentName:"ul"},"In my experience, downtime normally results from problems with deployments of the solution, or escaped bugs, rather than the underlying cloud platform. So the lesson there is to avoid shooting yourself in the foot by having a like-live non-production environment and a robust QA process.")),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"If you're going to offer your user-base an ",(0,l.kt)("strong",{parentName:"p"},"Availability SLA"),", then this methodology will allow you to calculate the composite availability for your solution. The key points are:"),(0,l.kt)("p",null,"1 Identify each critical tier in your solution and the service that hosts them.\n2 Our example is constrained to services offered be a single cloud provider, but you might have additional third party services to include too (CDN, oAuth provider, back-end SaaS service, etc).\n3 Obtain the provider's availability SLA for each of these tiers/services as a value between zero and one (i.e. 0.995 = 99.5%).\n4 Multiply all of these values together to obtain your solution's SLA.\n5 Keep in mind that this figure represents the ",(0,l.kt)("em",{parentName:"p"},"highest")," SLA you should offer for your solution because:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For your solution to exceed this uptime objective you'll need your service providers to exceed their's, and you can't guarantee that."),(0,l.kt)("li",{parentName:"ul"},"There are other variables that can effect availability that aren't accounted for, such as failed deployments, bugs, misconfigurations, etc."),(0,l.kt)("li",{parentName:"ul"},"In other words, if you achieve a higher uptime it'll be by luck rather than by design, so don't quote anything higher.")))}d.isMDXComponent=!0},973:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/High_Availability_Example-020c6ae1bf55487555c18a193cc34f6a.png"},2893:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/High_Availability_Simple_Topology-6558a2046323d1505c75699067e0d10d.png"},4061:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/High_Availability_Web_app-3b1da924e17ff61bc1eb598460ce68ae.png"},3710:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/High_Availability_Example-020c6ae1bf55487555c18a193cc34f6a.png"},6107:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/High_Availability_Simple_Topology-6558a2046323d1505c75699067e0d10d.png"},7864:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/High_Availability_Web_app-3b1da924e17ff61bc1eb598460ce68ae.png"}}]);