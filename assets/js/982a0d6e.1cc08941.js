"use strict";(self.webpackChunkalexlaverty_github_io=self.webpackChunkalexlaverty_github_io||[]).push([[4769],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5681:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={},c="TypeScript Examples",l={unversionedId:"Tech/Typescript",id:"Tech/Typescript",title:"TypeScript Examples",description:"Log to screen",source:"@site/docs/Tech/Typescript.md",sourceDirName:"Tech",slug:"/Tech/Typescript",permalink:"/docs/Tech/Typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tech/Typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SonarQube",permalink:"/docs/Tech/SonarQube"},next:{title:"Hashicorp Vault",permalink:"/docs/Tech/Vault"}},i={},p=[{value:"<a name='log-to-screen'></a>Log to screen",id:"log-to-screen",level:2},{value:"<a name='array-for-loop'></a>Array For Loop",id:"array-for-loop",level:2},{value:"<a name='function-with-return-value'></a>Function with return value",id:"function-with-return-value",level:2},{value:"<a name='create-an-object-from-an-interface-and-print-a-value'></a>Create an object from an interface and print a value",id:"create-an-object-from-an-interface-and-print-a-value",level:2},{value:"<a name='loop-through-an-array-of-strings-and-echo-each-one'></a>Loop through an array of strings and echo each one",id:"loop-through-an-array-of-strings-and-echo-each-one",level:2}],u={toc:p};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-examples"},"TypeScript Examples"),(0,a.kt)("h2",{id:"log-to-screen"},(0,a.kt)("a",{name:"log-to-screen"}),"Log to screen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'console.log("Hello World!");\n')),(0,a.kt)("h2",{id:"array-for-loop"},(0,a.kt)("a",{name:"array-for-loop"}),"Array For Loop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let arr = [1, 2, 3, 4, 5];\n\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}\n")),(0,a.kt)("h2",{id:"function-with-return-value"},(0,a.kt)("a",{name:"function-with-return-value"}),"Function with return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(a: number, b: number): number {\n    return a + b;\n}\n\nconst result: number = add(2, 3);\nconsole.log(result); ## Output: 5\n")),(0,a.kt)("h2",{id:"create-an-object-from-an-interface-and-print-a-value"},(0,a.kt)("a",{name:"create-an-object-from-an-interface-and-print-a-value"}),"Create an object from an interface and print a value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Person = {\n    name: string;\n    age: number;\n\n};\n\nconst person: Person = {\n    name: 'John Doe',\n    age: 30,\n\n};\n\nconsole.log(person.name);\n")),(0,a.kt)("h2",{id:"loop-through-an-array-of-strings-and-echo-each-one"},(0,a.kt)("a",{name:"loop-through-an-array-of-strings-and-echo-each-one"}),"Loop through an array of strings and echo each one"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const names: string[] = ['John', 'Jane', 'Jim'];\n\nfor (const name of names) {\n  console.log(name);\n}\n")))}s.isMDXComponent=!0}}]);