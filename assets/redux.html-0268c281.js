const e=JSON.parse(`{"key":"v-6bada316","path":"/framework_front/react/redux.html","title":"Redux","lang":"zh-CN","frontmatter":{"article":false,"description":"Redux 1.求和案例_redux精简版 (1).去除Count组件自身的状态 (2).src下建立: -redux -store.js -count_reducer.js (3).store.js： 1).引入redux中的createStore函数，创建一个store 2).createStore调用时要传入一个为其服务的reducer 3).记得暴露store对象 (4).count_reducer.js： 1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态 2).reducer有两个作用：初始化状态，加工状态 3).reducer被第一次调用时，是store自动触发的， 传递的preState是undefined, 传递的action是:{type:'@@REDUX/INIT_a.2.b.4} (5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt; 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/redux.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"Redux"}],["meta",{"property":"og:description","content":"Redux 1.求和案例_redux精简版 (1).去除Count组件自身的状态 (2).src下建立: -redux -store.js -count_reducer.js (3).store.js： 1).引入redux中的createStore函数，创建一个store 2).createStore调用时要传入一个为其服务的reducer 3).记得暴露store对象 (4).count_reducer.js： 1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态 2).reducer有两个作用：初始化状态，加工状态 3).reducer被第一次调用时，是store自动触发的， 传递的preState是undefined, 传递的action是:{type:'@@REDUX/INIT_a.2.b.4} (5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt; 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Redux\\",\\"description\\":\\"Redux 1.求和案例_redux精简版 (1).去除Count组件自身的状态 (2).src下建立: -redux -store.js -count_reducer.js (3).store.js： 1).引入redux中的createStore函数，创建一个store 2).createStore调用时要传入一个为其服务的reducer 3).记得暴露store对象 (4).count_reducer.js： 1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态 2).reducer有两个作用：初始化状态，加工状态 3).reducer被第一次调用时，是store自动触发的， 传递的preState是undefined, 传递的action是:{type:'@@REDUX/INIT_a.2.b.4} (5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt; 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。\\"}"]]},"headers":[{"level":2,"title":"1.求和案例_redux精简版","slug":"_1-求和案例-redux精简版","link":"#_1-求和案例-redux精简版","children":[]},{"level":2,"title":"2.求和案例_redux完整版","slug":"_2-求和案例-redux完整版","link":"#_2-求和案例-redux完整版","children":[]},{"level":2,"title":"3.求和案例_redux异步action版","slug":"_3-求和案例-redux异步action版","link":"#_3-求和案例-redux异步action版","children":[]},{"level":2,"title":"4.求和案例_react-redux基本使用","slug":"_4-求和案例-react-redux基本使用","link":"#_4-求和案例-react-redux基本使用","children":[]},{"level":2,"title":"5.求和案例_react-redux优化","slug":"_5-求和案例-react-redux优化","link":"#_5-求和案例-react-redux优化","children":[]},{"level":2,"title":"6.求和案例_react-redux数据共享版","slug":"_6-求和案例-react-redux数据共享版","link":"#_6-求和案例-react-redux数据共享版","children":[]},{"level":2,"title":"7.求和案例_react-redux开发者工具的使用","slug":"_7-求和案例-react-redux开发者工具的使用","link":"#_7-求和案例-react-redux开发者工具的使用","children":[]},{"level":2,"title":"8.求和案例_react-redux最终版","slug":"_8-求和案例-react-redux最终版","link":"#_8-求和案例-react-redux最终版","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":3.24,"words":973},"filePathRelative":"framework_front/react/redux.md","localizedDate":"2022年6月14日","excerpt":"<h1> Redux</h1>\\n<h2> 1.求和案例_redux精简版</h2>\\n<div class=\\"language-markdown line-numbers-mode\\" data-ext=\\"md\\"><pre class=\\"language-markdown\\"><code>(1).去除Count组件自身的状态\\n(2).src下建立:\\n        -redux\\n          -store.js\\n          -count_reducer.js\\n\\n(3).store.js：\\n      1).引入redux中的createStore函数，创建一个store\\n      2).createStore调用时要传入一个为其服务的reducer\\n      3).记得暴露store对象\\n\\n(4).count_reducer.js：\\n      1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态\\n      2).reducer有两个作用：初始化状态，加工状态\\n      3).reducer被第一次调用时，是store自动触发的，\\n              传递的preState是undefined,\\n              传递的action是:{type:'@@REDUX/INIT_a.2.b.4}\\n\\n(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>App</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
