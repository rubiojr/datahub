"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=s,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),s=a(67294),i=a(86010),l=a(51048),r=a(33609),o=a(1943),p=a(72957);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:m,className:k}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,r.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[v,w]=(0,s.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==v&&(x(t),w(n),null!=m&&y(m,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},k)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:S,onClick:C},l,{className:(0,i.Z)("tabs__item",d,l?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,s.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,l.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},64768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(83117),s=(a(67294),a(3905)),i=a(34259),l=a(18679);const r={sidebar_position:17,title:"Google Cloud Storage",slug:"/generated/ingestion/sources/gcs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md"},o="Google Cloud Storage",p={unversionedId:"docs/generated/ingestion/sources/gcs",id:"docs/generated/ingestion/sources/gcs",title:"Google Cloud Storage",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/gcs.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/gcs",permalink:"/docs/generated/ingestion/sources/gcs",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"Google Cloud Storage",slug:"/generated/ingestion/sources/gcs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md"},sidebar:"overviewSidebar",previous:{title:"Glue",permalink:"/docs/generated/ingestion/sources/glue"},next:{title:"Hive",permalink:"/docs/generated/ingestion/sources/hive"}},c={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Path Specs",id:"path-specs",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,s.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Capability"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Asset Containers"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,s.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,s.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,s.kt)("p",null,"This connector extracting datasets located on Google Cloud Storage. Supported file types are as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"CSV"),(0,s.kt)("li",{parentName:"ul"},"TSV"),(0,s.kt)("li",{parentName:"ul"},"JSON"),(0,s.kt)("li",{parentName:"ul"},"Parquet"),(0,s.kt)("li",{parentName:"ul"},"Apache Avro")),(0,s.kt)("p",null,"Schemas for Parquet and Avro files are extracted as provided."),(0,s.kt)("p",null,"Schemas for schemaless formats (CSV, TSV, JSON) are inferred. For CSV and TSV files, we consider the first 100 rows by default, which can be controlled via the ",(0,s.kt)("inlineCode",{parentName:"p"},"max_rows")," recipe parameter (see ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below"),")\nJSON file schemas are inferred on the basis of the entire file (given the difficulty in extracting only the first few objects of the file), which may impact performance."),(0,s.kt)("p",null,"This source leverages ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/interoperability"},"Interoperability of GCS with S3"),"\nand uses DataHub S3 Data Lake integration source under the hood."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Create a service account with "Storage Object Viewer" Role - ',(0,s.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts-create"},"https://cloud.google.com/iam/docs/service-accounts-create")),(0,s.kt)("li",{parentName:"ol"},"Make sure you meet following requirements to generate HMAC key - ",(0,s.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#before-you-begin"},"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#before-you-begin")),(0,s.kt)("li",{parentName:"ol"},"Create an HMAC key for service account created above - ",(0,s.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create"},"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create")," .")),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[gcs]'\n")),(0,s.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: gcs\n  config:\n    path_specs: \n       - include: gs://gcs-ingestion-bucket/parquet_example/{table}/year={partition[0]}/*.parquet\n    credential:\n      hmac_access_id: <hmac access id>\n      hmac_access_secret: <hmac access secret>\n\n")),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"credential"),"\xa0",(0,s.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"HMACKey"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Google cloud storage ",(0,s.kt)("a",{parentName:"td",href:"https://cloud.google.com/storage/docs/authentication/hmackeys"},"HMAC keys"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"credential."),(0,s.kt)("span",{className:"path-main"},"hmac_access_id"),"\xa0",(0,s.kt)("abbr",{title:"Required if credential is set"},"\u2753"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Access ID")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"credential."),(0,s.kt)("span",{className:"path-main"},"hmac_access_secret"),"\xa0",(0,s.kt)("abbr",{title:"Required if credential is set"},"\u2753"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string(password)"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Secret")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"max_rows"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Maximum number of rows to use when inferring schemas for TSV and CSV files. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"100")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"env"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"PROD")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"path_specs"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(object)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"include"),"\xa0",(0,s.kt)("abbr",{title:"Required if path_specs is set"},"\u2753"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Path to table. Name variable ",(0,s.kt)("inlineCode",{parentName:"td"},"{table}")," is used to mark the folder with dataset. In absence of ",(0,s.kt)("inlineCode",{parentName:"td"},"{table}"),", file level dataset will be created. Check below examples for more details.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"default_extension"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"For files without extension it will assume the specified file type. If it is not set the files without extensions will be skipped.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"enable_compression"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Enable or disable processing compressed files. Currently .gz and .bz files are supported. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"exclude"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"file_types"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"array(string)"))),(0,s.kt)("td",{parentName:"tr",align:"left"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"sample_files"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Not listing all the files but only taking a handful amount of sample file to infer the schema. File count and file size calculation will be disabled. This can affect performance significantly if enabled ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"True")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"path_specs."),(0,s.kt)("span",{className:"path-main"},"table_name"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Display name of the dataset.Combination of named variables from include path and strings")))))),(0,s.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "GCSSourceConfig",\n  "description": "Any source that is a primary producer of Dataset metadata should inherit this class",\n  "type": "object",\n  "properties": {\n    "path_specs": {\n      "title": "Path Specs",\n      "description": "List of PathSpec. See [below](#path-spec) the details about PathSpec",\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/PathSpec"\n      }\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "credential": {\n      "title": "Credential",\n      "description": "Google cloud storage [HMAC keys](https://cloud.google.com/storage/docs/authentication/hmackeys)",\n      "allOf": [\n        {\n          "$ref": "#/definitions/HMACKey"\n        }\n      ]\n    },\n    "max_rows": {\n      "title": "Max Rows",\n      "description": "Maximum number of rows to use when inferring schemas for TSV and CSV files.",\n      "default": 100,\n      "type": "integer"\n    }\n  },\n  "required": [\n    "path_specs",\n    "credential"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "PathSpec": {\n      "title": "PathSpec",\n      "type": "object",\n      "properties": {\n        "include": {\n          "title": "Include",\n          "description": "Path to table. Name variable `{table}` is used to mark the folder with dataset. In absence of `{table}`, file level dataset will be created. Check below examples for more details.",\n          "type": "string"\n        },\n        "exclude": {\n          "title": "Exclude",\n          "description": "list of paths in glob pattern which will be excluded while scanning for the datasets",\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "file_types": {\n          "title": "File Types",\n          "description": "Files with extenstions specified here (subset of default value) only will be scanned to create dataset. Other files will be omitted.",\n          "default": [\n            "csv",\n            "tsv",\n            "json",\n            "parquet",\n            "avro"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "default_extension": {\n          "title": "Default Extension",\n          "description": "For files without extension it will assume the specified file type. If it is not set the files without extensions will be skipped.",\n          "type": "string"\n        },\n        "table_name": {\n          "title": "Table Name",\n          "description": "Display name of the dataset.Combination of named variables from include path and strings",\n          "type": "string"\n        },\n        "enable_compression": {\n          "title": "Enable Compression",\n          "description": "Enable or disable processing compressed files. Currently .gz and .bz files are supported.",\n          "default": true,\n          "type": "boolean"\n        },\n        "sample_files": {\n          "title": "Sample Files",\n          "description": "Not listing all the files but only taking a handful amount of sample file to infer the schema. File count and file size calculation will be disabled. This can affect performance significantly if enabled",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "required": [\n        "include"\n      ],\n      "additionalProperties": false\n    },\n    "HMACKey": {\n      "title": "HMACKey",\n      "type": "object",\n      "properties": {\n        "hmac_access_id": {\n          "title": "Hmac Access Id",\n          "description": "Access ID",\n          "type": "string"\n        },\n        "hmac_access_secret": {\n          "title": "Hmac Access Secret",\n          "description": "Secret",\n          "type": "string",\n          "writeOnly": true,\n          "format": "password"\n        }\n      },\n      "required": [\n        "hmac_access_id",\n        "hmac_access_secret"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"path-specs"},"Path Specs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example - Dataset per file")),(0,s.kt)("p",null,"Bucket structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 employees.csv\n\u2514\u2500\u2500 food_items.csv\n")),(0,s.kt)("p",null,"Path specs config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/*.csv\n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example - Datasets with partitions")),(0,s.kt)("p",null,"Bucket structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 orders\n\u2502\xa0\xa0 \u2514\u2500\u2500 year=2022\n\u2502\xa0\xa0     \u2514\u2500\u2500 month=2\n\u2502\xa0\xa0         \u251c\u2500\u2500 1.parquet\n\u2502\xa0\xa0         \u2514\u2500\u2500 2.parquet\n\u2514\u2500\u2500 returns\n    \u2514\u2500\u2500 year=2021\n        \u2514\u2500\u2500 month=2\n            \u2514\u2500\u2500 1.parquet\n\n")),(0,s.kt)("p",null,"Path specs config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example - Datasets with partition and exclude")),(0,s.kt)("p",null,"Bucket structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 orders\n\u2502\xa0\xa0 \u2514\u2500\u2500 year=2022\n\u2502\xa0\xa0     \u2514\u2500\u2500 month=2\n\u2502\xa0\xa0         \u251c\u2500\u2500 1.parquet\n\u2502\xa0\xa0         \u2514\u2500\u2500 2.parquet\n\u2514\u2500\u2500 tmp_orders\n    \u2514\u2500\u2500 year=2021\n        \u2514\u2500\u2500 month=2\n            \u2514\u2500\u2500 1.parquet\n\n\n")),(0,s.kt)("p",null,"Path specs config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n      exclude: \n        - **/tmp_orders/**\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example - Datasets of mixed nature")),(0,s.kt)("p",null,"Bucket structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 customers\n\u2502\xa0\xa0 \u251c\u2500\u2500 part1.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 part2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 part3.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 part4.json\n\u251c\u2500\u2500 employees.csv\n\u251c\u2500\u2500 food_items.csv\n\u251c\u2500\u2500 tmp_10101000.csv\n\u2514\u2500\u2500  orders\n \xa0\xa0 \u2514\u2500\u2500 year=2022\n\xa0 \xa0     \u2514\u2500\u2500 month=2\n\xa0\xa0          \u251c\u2500\u2500 1.parquet\n\xa0\xa0          \u251c\u2500\u2500 2.parquet\n\xa0\xa0          \u2514\u2500\u2500 3.parquet\n\n")),(0,s.kt)("p",null,"Path specs config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/*.csv\n      exclude:\n        - **/tmp_10101000.csv\n    - include: gs://test-gs-bucket/{table}/*.json\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Valid path_specs.include")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"gs://my-bucket/foo/tests/bar.avro # single file table   \ngs://my-bucket/foo/tests/*.* # mulitple file level tables\ngs://my-bucket/foo/tests/{table}/*.avro #table without partition\ngs://my-bucket/foo/tests/{table}/*/*.avro #table where partitions are not specified\ngs://my-bucket/foo/tests/{table}/*.* # table where no partitions as well as data type specified\ngs://my-bucket/{dept}/tests/{table}/*.avro # specifying keywords to be used in display name\ngs://my-bucket/{dept}/tests/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.avro # specify partition key and value format\ngs://my-bucket/{dept}/tests/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.avro # specify partition value only format\ngs://my-bucket/{dept}/tests/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # for all extensions\ngs://my-bucket/*/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # table is present at 2 levels down in bucket\ngs://my-bucket/*/*/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # table is present at 3 levels down in bucket\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Valid path_specs.exclude")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"*","*/tests/**"),(0,s.kt)("li",{parentName:"ul"},"gs://my-bucket/hr/**"),(0,s.kt)("li",{parentName:"ul"},"*",(0,s.kt)("em",{parentName:"li"},"/tests/"),".csv"),(0,s.kt)("li",{parentName:"ul"},"gs://my-bucket/foo/*/my_table/**")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Notes")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"{table} represents folder for which dataset will be created."),(0,s.kt)("li",{parentName:"ul"},"include path must end with (",(0,s.kt)("em",{parentName:"li"},".")," or *.","[ext]",") to represent leaf level."),(0,s.kt)("li",{parentName:"ul"},"if *.","[ext]"," is provided then only files with specified type will be scanned."),(0,s.kt)("li",{parentName:"ul"},"/*/ represents single folder."),(0,s.kt)("li",{parentName:"ul"},"{partition","[i]","} represents value of partition."),(0,s.kt)("li",{parentName:"ul"},"{partition_key","[i]","} represents name of the partition."),(0,s.kt)("li",{parentName:"ul"},"While extracting, \u201ci\u201d will be used to match partition_key to partition."),(0,s.kt)("li",{parentName:"ul"},"all folder levels need to be specified in include. Only exclude path can have ** like matching."),(0,s.kt)("li",{parentName:"ul"},"exclude path cannot have named variables ( {} )."),(0,s.kt)("li",{parentName:"ul"},"Folder names should not contain {, }, *, / in their names."),(0,s.kt)("li",{parentName:"ul"},"{folder} is reserved for internal working. please do not use in named variables.")),(0,s.kt)("p",null,"If you would like to write a more complicated function for resolving file names, then a {transformer} would be a good fit."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Specify as long fixed prefix ( with out /*/ ) as possible in ",(0,s.kt)("inlineCode",{parentName:"p"},"path_specs.include"),". This will reduce the scanning time and cost, specifically on Google Cloud Storage.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you are ingesting datasets from Google Cloud Storage, we recommend running the ingestion on a server in the same region to avoid high egress costs.")),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.gcs.gcs_source.GCSSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/gcs/gcs_source.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for Google Cloud Storage, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}m.isMDXComponent=!0}}]);