(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{279:function(t,s,n){"use strict";n.r(s);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=n(6),o=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"custom-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-endpoints","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom Endpoints")]),t._v(" "),n("blockquote",[n("p",[t._v("In addition to the "),n("router-link",{attrs:{to:"./../api-reference/reference.html"}},[t._v("core endpoints")]),t._v(", you can add completely custom endpoints. Custom endpoints are easy to create files that return an array with the endpoint path, method, and handler. All custom endpoints are scoped within "),n("code",[t._v("/custom")]),t._v(" to avoid conflicts with the Core functionality.")],1)]),t._v(" "),n("h2",{attrs:{id:"creating-custom-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-endpoints","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating Custom Endpoints")]),t._v(" "),n("p",[n("strong",[t._v("Global")]),t._v(" endpoints are defined in files within "),n("code",[t._v("/public/extension/custom/endpoints")]),t._v(" ("),n("a",{attrs:{href:"https://github.com/directus/api/tree/master/public/extensions/custom/endpoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1),t._v("). You can use any file-names or sub-directories to help keep things organized.")]),t._v(" "),n("p",[n("strong",[t._v("Extension")]),t._v(" endpoints are defined in the "),n("code",[t._v("endpoints.php")]),t._v(" file within that extension's directory.")]),t._v(" "),n("p",[t._v("The endpoint identification will be the file or directory name.")]),t._v(" "),n("h3",{attrs:{id:"using-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Files")]),t._v(" "),n("p",[t._v("The following file path: A file stored in "),n("code",[t._v("public/extensions/custom/endpoints/example.php")]),t._v(" will be accesible in "),n("code",[t._v("/custom/example")]),t._v(" endpoint.")]),t._v(" "),n("h3",{attrs:{id:"using-directories"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-directories","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Directories")]),t._v(" "),n("p",[t._v("The following file path: A file stored in "),n("code",[t._v("public/extensions/custom/endpoints/example/endpoints.php")]),t._v(" will be accesible in "),n("code",[t._v("/custom/example")]),t._v(" endpoint. When using directories the entrypoint file is "),n("code",[t._v("endpoints.php")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Directus"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Directus"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Response")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// The endpoint path:")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// '' means it is located at: `/custom/<endpoint-id>`")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// '/` means it is located at: `/custom/<endpoint-id>/`")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 'test' and `/test` means it is located at: `/custom/<endpoint-id>/test")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// if the handler is a Closure or Anonymous function, it's binded to the app container. Which means $this = to the app container.")]),t._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("''")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'method'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'GET'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handler'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Request "),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response "),n("span",{attrs:{class:"token variable"}},[t._v("$response")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$response")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withJson")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'data'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item 1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item 2'")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),n("h2",{attrs:{id:"nesting-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nesting-endpoints","aria-hidden":"true"}},[t._v("#")]),t._v(" Nesting Endpoints")]),t._v(" "),n("p",[t._v("Endpoints can also be nested, or grouped, under a parent path name.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/articles'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'group'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'endpoints'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// `/custom/<endpoint-id>/articles")]),t._v("\n      "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("''")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'method'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'GET'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handler'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$response")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// `/custom/<endpoint-id>/articles/category")]),t._v("\n      "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/category'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'method'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'GET'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handler'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$response")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// `/custom/<endpoint-id>/articles/preview")]),t._v("\n      "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/preview'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'method'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'GET'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handler'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$response")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])},[],!1,null,null,null);o.options.__file="custom-endpoints.md";s.default=o.exports}}]);