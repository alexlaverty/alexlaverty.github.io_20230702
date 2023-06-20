"use strict";(self.webpackChunkalexlaverty_github_io=self.webpackChunkalexlaverty_github_io||[]).push([[356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const s={},o=void 0,i={unversionedId:"AWS/SystemsManager",id:"AWS/SystemsManager",title:"SystemsManager",description:"What is ssm agent?",source:"@site/docs/AWS/SystemsManager.md",sourceDirName:"AWS",slug:"/AWS/SystemsManager",permalink:"/docs/AWS/SystemsManager",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AWS/SystemsManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SnowFlake",permalink:"/docs/AWS/SnowFlake"},next:{title:"Health",permalink:"/docs/category/health"}},l={},m=[{value:"What is ssm agent?",id:"what-is-ssm-agent",level:2},{value:"How does SSM agent interact with the parameter store?",id:"how-does-ssm-agent-interact-with-the-parameter-store",level:2},{value:"What does SSM acronym stand for ? why are there two S?",id:"what-does-ssm-acronym-stand-for--why-are-there-two-s",level:2}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-ssm-agent"},"What is ssm agent?"),(0,r.kt)("p",null,"The SSM (Systems Manager) Agent is an Amazon Web Services (AWS) service that enables you to remotely manage your EC2 instances, on-premises servers, and virtual machines (VMs) using AWS Systems Manager. The SSM Agent is pre-installed on Amazon Linux and Windows Server 2016 and later Amazon Machine Images (AMIs)."),(0,r.kt)("p",null,"The SSM Agent runs on your instances and processes requests from the Systems Manager service to perform various management tasks such as installing or updating software, running scripts, performing patching and compliance scans, and configuring instances. The SSM Agent communicates with the Systems Manager service using the AWS Systems Manager API."),(0,r.kt)("p",null,"Some of the features and benefits of the SSM Agent include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for multiple operating systems: The SSM Agent supports Amazon Linux, Ubuntu Server, Red Hat Enterprise Linux, SUSE Linux Enterprise Server, Windows Server, and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure communication: The SSM Agent uses AWS Identity and Access Management (IAM) roles to authenticate and authorize API requests, and all communication is encrypted using Transport Layer Security (TLS).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Agent health and status monitoring: The SSM Agent sends heartbeat messages to the Systems Manager service to report its health and status, and can be configured to send CloudWatch Metrics to monitor the performance and usage of the agent.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Seamless integration with AWS Systems Manager: The SSM Agent is fully integrated with the AWS Systems Manager service, which provides a centralized view of your instances, including inventory, compliance, and patch management data."))),(0,r.kt)("p",null,"Overall, the SSM Agent simplifies the management of your instances by allowing you to perform remote management tasks at scale, while providing a secure and reliable communication channel between your instances and the Systems Manager service."),(0,r.kt)("h2",{id:"how-does-ssm-agent-interact-with-the-parameter-store"},"How does SSM agent interact with the parameter store?"),(0,r.kt)("p",null,"The SSM (Systems Manager) Agent can interact with the Parameter Store in AWS Systems Manager to retrieve configuration data, secrets, and other sensitive information for your EC2 instances, on-premises servers, and virtual machines (VMs)."),(0,r.kt)("p",null,"To retrieve data from the Parameter Store, the SSM Agent uses the aws ssm get-parameter command or the GetParameter API operation to send a request to the Systems Manager service with the name of the parameter to retrieve. The SSM Agent must have the necessary IAM permissions to access the Parameter Store."),(0,r.kt)("p",null,"The SSM Agent can retrieve both plaintext and encrypted parameters from the Parameter Store. If the parameter is encrypted with a KMS key, the SSM Agent automatically decrypts the value using the appropriate KMS key."),(0,r.kt)("p",null,"After the SSM Agent retrieves the parameter value from the Parameter Store, it can use the value to configure the instance or perform other management tasks. For example, the SSM Agent can set environment variables, update configuration files, or pass the parameter value as an argument to a script."),(0,r.kt)("p",null,"Overall, the SSM Agent simplifies the process of retrieving and managing configuration data and secrets for your instances by providing a secure and reliable communication channel with the Parameter Store in AWS Systems Manager."),(0,r.kt)("h2",{id:"what-does-ssm-acronym-stand-for--why-are-there-two-s"},"What does SSM acronym stand for ? why are there two S?"),(0,r.kt)("p",null,'The SSM acronym stands for "Systems Manager", which is an AWS service that enables you to manage your EC2 instances, on-premises servers, and virtual machines (VMs) at scale. The service provides a unified user interface, a set of tools for automating management tasks, and a suite of features for monitoring and securing your infrastructure.'),(0,r.kt)("p",null,'The reason why there are two "S" in the acronym is because the service was originally called "Simple Systems Manager" when it was first launched in 2014. However, in 2018, the service was renamed to "AWS Systems Manager" to reflect the expanded scope and functionality of the service beyond just "simple" management tasks.'),(0,r.kt)("p",null,"Today, AWS Systems Manager provides a wide range of capabilities for managing your infrastructure, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inventory management: Collect metadata and configuration data from your instances and VMs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Patch management: Automate the process of patching and updating your instances and VMs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Automation: Create and run automation workflows to perform common management tasks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Parameter Store: Store and manage configuration data and secrets for your instances.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run Command: Execute commands and scripts on your instances and VMs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"State Manager: Ensure that your instances and VMs are in a desired state, based on a defined configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OpsCenter: Centralize your operational data and gain insights into your infrastructure."))),(0,r.kt)("p",null,"Overall, AWS Systems Manager is a powerful and flexible service that can help you streamline your operations, improve security and compliance, and reduce management overhead."))}u.isMDXComponent=!0}}]);