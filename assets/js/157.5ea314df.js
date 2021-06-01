(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{670:function(s,t,a){"use strict";a.r(t);var n=a(57),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"单文件组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件"}},[s._v("#")]),s._v(" 单文件组件")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("在很多 Vue 项目中，我们使用 "),a("code",[s._v("app.component")]),s._v(" 来定义全局组件，紧接着用 "),a("code",[s._v("app.mount('#app')")]),s._v(" 在每个页面内指定一个容器元素。")]),s._v(" "),a("p",[s._v("这对于中小型项目非常有效，在这些项目里 JavaScript 只被用来增强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("全局定义 (Global definitions)")]),s._v(" 强制要求每个 component 中的命名不得重复；")]),s._v(" "),a("li",[a("strong",[s._v("字符串模板 (String templates)")]),s._v(" 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 "),a("code",[s._v("\\")]),s._v("；")]),s._v(" "),a("li",[a("strong",[s._v("不支持 CSS (No CSS support)")]),s._v(" 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏；")]),s._v(" "),a("li",[a("strong",[s._v("没有构建步骤 (No build step)")]),s._v(" 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug (曾经的 Jade) 和 Babel。")])]),s._v(" "),a("p",[s._v("所有这些都可以通过扩展名为 "),a("code",[s._v(".vue")]),s._v(" 的 "),a("strong",[s._v("single-file components (单文件组件)")]),s._v(" 来解决，并且还可以使用 webpack 或 Browserify 等构建工具。")]),s._v(" "),a("p",[s._v("这是一个文件名为 "),a("code",[s._v("Hello.vue")]),s._v(" 的简单实例：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/team/Vue/pen/3de13b5cd0133df4ecf307b6cf2c5f94",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticStyle:{display:"block",margin:"15px auto","max-width":"100%"},attrs:{src:"/images/sfc.png",width:"403",alt:"Single-file component example (click for code as text)"}})])]),s._v(" "),a("p",[s._v("现在我们获得：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#source-code-editing",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整语法高亮"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/concepts/modules/#what-is-a-webpack-module",target:"_blank",rel:"noopener noreferrer"}},[s._v("CommonJS 模块"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("组件作用域的 CSS"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("正如我们说过的，我们可以使用预处理器来构建简洁和功能更丰富的组件，比如 Pug，Babel (with ES2015 modules)，和 Stylus。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/vue-single-file-component-with-pre-processors-mr3ik?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticStyle:{display:"block",margin:"15px auto","max-width":"100%"},attrs:{src:"/images/sfc-with-preprocessors.png",width:"563",alt:"Single-file component with pre-processors example (click for code as text)"}})])]),s._v(" "),a("p",[s._v("这些特定的语言只是例子，你可以只是简单地使用 Babel，TypeScript，SCSS，PostCSS 或者其他任何能够帮助你提高生产力的预处理器。如果搭配 "),a("code",[s._v("vue-loader")]),s._v(" 使用 webpack，它也能为 CSS Modules 提供头等支持。")]),s._v(" "),a("h3",{attrs:{id:"怎么看待关注点分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么看待关注点分离"}},[s._v("#")]),s._v(" 怎么看待关注点分离？")]),s._v(" "),a("p",[s._v("值得注意的是，"),a("strong",[s._v("关注点分离不等于文件类型分离")]),s._v("。在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。")]),s._v(" "),a("p",[s._v("即便你不喜欢单文件组件，你仍然可以把 JavaScript、CSS 分离成独立的文件然后做到热重载和预编译。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- my-component.vue --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("This will be pre-compiled"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("./my-component.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("./my-component.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[s._v("#")]),s._v(" 起步")]),s._v(" "),a("h3",{attrs:{id:"在线演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线演示"}},[s._v("#")]),s._v(" 在线演示")]),s._v(" "),a("p",[s._v("如果你希望深入了解并开始使用单文件组件，请来 CodeSandbox "),a("a",{attrs:{href:"https://codesandbox.io/s/vue-todo-list-app-with-single-file-component-vzkl3?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"}},[s._v("看看这个简单的 todo 应用"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"针对刚接触-javascript-模块开发系统的用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对刚接触-javascript-模块开发系统的用户"}},[s._v("#")]),s._v(" 针对刚接触 JavaScript 模块开发系统的用户")]),s._v(" "),a("p",[s._v("有了 "),a("code",[s._v(".vue")]),s._v(" 组件，我们就进入了高阶 JavaScript 应用领域。如果你没有准备好的话，意味着还需要学会使用一些附加的工具：")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("Node 包管理器 (npm)")]),s._v("： 阅读 "),a("a",{attrs:{href:"https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry",target:"_blank",rel:"noopener noreferrer"}},[s._v("Getting Started guide"),a("OutboundLink")],1),s._v(" 中关于如何从注册地 (registry) 获取包的章节。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("现代 JavaScript 与 ES2015/16")]),s._v("：阅读 Babel 的 "),a("a",{attrs:{href:"https://babeljs.io/docs/en/learn",target:"_blank",rel:"noopener noreferrer"}},[s._v("Learn ES2015 guide"),a("OutboundLink")],1),s._v("。你不需要立刻记住每一个方法，但是你可以保留这个页面以便后期参考。")])])]),s._v(" "),a("p",[s._v("在你花一天时间了解这些资源之后，我们建议你参考 "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue CLI"),a("OutboundLink")],1),s._v("。只要遵循指示，你就能很快地运行一个带有 "),a("code",[s._v(".vue")]),s._v(" 组件、ES2015、webpack 和热重载 (hot-reloading) 的 Vue 项目！")]),s._v(" "),a("h3",{attrs:{id:"针对高阶用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对高阶用户"}},[s._v("#")]),s._v(" 针对高阶用户")]),s._v(" "),a("p",[s._v("CLI 会为你搞定大多数工具的配置问题，同时也支持细粒度自定义"),a("a",{attrs:{href:"https://cli.vuejs.org/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置项"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("有时你会想从零搭建你自己的构建工具，这时你需要通过 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue Loader"),a("OutboundLink")],1),s._v(" 手动配置 webpack。关于学习更多 webpack 的内容，请查阅"),a("a",{attrs:{href:"https://webpack.js.org/configuration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("其官方文档"),a("OutboundLink")],1),s._v("和 "),a("a",{attrs:{href:"https://webpack.academy/p/the-core-concepts",target:"_blank",rel:"noopener noreferrer"}},[s._v("Webpack Academy"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"使用-rollup-构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-rollup-构建"}},[s._v("#")]),s._v(" 使用 rollup 构建")]),s._v(" "),a("p",[s._v("在开发第三方库的时候，大多数时候我们都希望以一种允许类库用户 "),a("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[s._v("tree shake"),a("OutboundLink")],1),s._v(" 的方式来构建它。为了实现 tree-shaking，我们需要构建 "),a("code",[s._v("esm")]),s._v(" 模块。由于 webpack 以及 vue-cli 都不支持构建 "),a("code",[s._v("esm")]),s._v(" 模块，我们需要依靠 "),a("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rollup"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"安装-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-rollup"}},[s._v("#")]),s._v(" 安装 Rollup")]),s._v(" "),a("p",[s._v("我们需要安装 Rollup 和一些依赖：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev rollup @rollup/plugin-commonjs rollup-plugin-vue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这些都是我们需要用来编译 "),a("code",[s._v("esm")]),s._v(" 模块中的代码的最小化的 rollup 插件。我们可能还需要添加 "),a("a",{attrs:{href:"https://github.com/rollup/plugins/tree/master/packages/babel",target:"_blank",rel:"noopener noreferrer"}},[s._v("rollup-plugin-babel"),a("OutboundLink")],1),s._v(" 来移植它们的代码，如果我们需要与库捆绑一起的依赖关系，还需要添加 "),a("a",{attrs:{href:"https://github.com/rollup/plugins/tree/master/packages/node-resolve",target:"_blank",rel:"noopener noreferrer"}},[s._v("node-resolve"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"配置-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-rollup"}},[s._v("#")]),s._v(" 配置 Rollup")]),s._v(" "),a("p",[s._v("要配置 Rollup 进行构建，我们需要在项目的根目录创建一个 "),a("code",[s._v("rollup.config.js")]),s._v(" 文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" rollup.config.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建文件后，选择需要的编辑器打开并添加以下代码：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入我们的第三方插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" commonjs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-commonjs'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" VuePlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollup-plugin-vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pkg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入我们的 package.json 文件，重新使用命名。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是一个包含所有导出的组件/函数的文件。")]),s._v("\n  input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是一个输出格式的数组")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们的 ESM 库的名词")]),s._v("\n      format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'esm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选择的格式")]),s._v("\n      sourcemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要求 rollup 包含 sourcemap")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是我们所包含插件的数组")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commonjs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("VuePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要求 rollup 不要将 Vue 捆绑在库中。")]),s._v("\n  external"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h4",{attrs:{id:"配置-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-package-json"}},[s._v("#")]),s._v(" 配置 package.json")]),s._v(" "),a("p",[s._v("为了利用我们新创建的 "),a("code",[s._v("esm")]),s._v(" 模块，我们需要在 "),a("code",[s._v("package.json")]),s._v(" 文件中添加一些字段。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   ...\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup -c rollup.config.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   ...\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/my-library-name.esm.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("在这里，我们要说明的是：")]),s._v(" "),a("ul",[a("li",[s._v("如何打包")]),s._v(" "),a("li",[s._v("我们要在依赖中捆绑哪些文件")]),s._v(" "),a("li",[s._v("什么文件代表我们的 "),a("code",[s._v("esm")]),s._v(" 模块")])]),s._v(" "),a("h4",{attrs:{id:"打包-umd-和-cjs-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-umd-和-cjs-模块"}},[s._v("#")]),s._v(" 打包 "),a("code",[s._v("umd")]),s._v(" 和 "),a("code",[s._v("cjs")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("要构建 "),a("code",[s._v("umd")]),s._v(" 和 "),a("code",[s._v("cjs")]),s._v(" 模块，我们可以简单地在 "),a("code",[s._v("rollup.config.js")]),s._v(" 和 "),a("code",[s._v("package.json")]),s._v(" 中添加几行配置。")]),s._v(" "),a("h5",{attrs:{id:"rollup-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup-config-js"}},[s._v("#")]),s._v(" rollup.config.js")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sourcemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("unpkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyLibraryName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sourcemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h5",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/my-library-name.esm.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/my-library-name.cjs.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"unpkg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/my-library-name.global.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);