import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,d as t}from"./app.8c89f077.js";const e={},p=t(`<h1 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h1><p>react-router是跨平台的。<br> react-router-dom是在react-router基础上提供了Link和NavLink，而且依赖history库提供了两个浏览器端适用的BrowserRouter和HashRouter组件。<br> 项目中一般使用react-router-dom</p><h2 id="路由的基本使用" tabindex="-1"><a class="header-anchor" href="#路由的基本使用" aria-hidden="true">#</a> 路由的基本使用</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.明确好界面中的导航区、展示区
2.导航区的a标签改为Link标签
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxxxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
3.展示区写Route标签进行路径的匹配
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/xxxx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Demo}/</span><span class="token punctuation">&gt;</span></span>
4.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span><span class="token punctuation">&gt;</span></span>的最外侧包裹了一个<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BrowserRouter</span><span class="token punctuation">&gt;</span></span>或<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HashRouter</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由组件与一般组件" tabindex="-1"><a class="header-anchor" href="#路由组件与一般组件" aria-hidden="true">#</a> 路由组件与一般组件</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.写法不同：  
      一般组件：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span><span class="token punctuation">/&gt;</span></span> 
      路由组件：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Demo}/</span><span class="token punctuation">&gt;</span></span>
2.存放位置不同：  
      一般组件：components  
      路由组件：pages  
3.接收到的props不同：  
      一般组件：写组件标签时传递了什么，就能收到什么  
      路由组件：接收到三个固定的属性  
                history:
                      go: ƒ go(n)
                      goBack: ƒ goBack()
                      goForward: ƒ goForward()
                      push: ƒ push(path, state)
                      replace: ƒ replace(path, state)
                location:
                      pathname: &quot;/about&quot;
                      search: &quot;&quot;
                      state: undefined
                match:
                      params: {}
                      path: &quot;/about&quot;
                      url: &quot;/about&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navlink与封装navlink" tabindex="-1"><a class="header-anchor" href="#navlink与封装navlink" aria-hidden="true">#</a> NavLink与封装NavLink</h2><p>1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名</p><h2 id="switch的使用" tabindex="-1"><a class="header-anchor" href="#switch的使用" aria-hidden="true">#</a> Switch的使用</h2><p>1.通常情况下，path和component是一一对应的关系。<br> 2.Switch可以提高路由匹配效率(单一匹配)。</p><h2 id="解决多级路径刷新页面样式丢失的问题" tabindex="-1"><a class="header-anchor" href="#解决多级路径刷新页面样式丢失的问题" aria-hidden="true">#</a> 解决多级路径刷新页面样式丢失的问题</h2><p>1.public/index.html 中 引入样式时不写 ./ 写 / （常用）<br> 2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）<br> 3.使用HashRouter</p><h2 id="路由的严格匹配与模糊匹配" tabindex="-1"><a class="header-anchor" href="#路由的严格匹配与模糊匹配" aria-hidden="true">#</a> 路由的严格匹配与模糊匹配</h2><p>1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）<br> 2.开启严格匹配：<code>&lt;Route exact={true} path=&quot;/about&quot; component={About}/&gt;</code><br> 3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由</p><h2 id="redirect的使用" tabindex="-1"><a class="header-anchor" href="#redirect的使用" aria-hidden="true">#</a> Redirect的使用</h2><p>1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由<br> 2.具体编码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h2><p>1.注册子路由时要写上父路由的path值<br> 2.路由的匹配是按照注册路由的顺序进行的</p><h2 id="向路由组件传递参数" tabindex="-1"><a class="header-anchor" href="#向路由组件传递参数" aria-hidden="true">#</a> 向路由组件传递参数</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.params参数
      路由链接(携带参数)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/demo/test/tom/18<span class="token punctuation">&#39;</span></span><span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span>详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      注册路由(声明接收)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo/test/:name/:age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Test}/</span><span class="token punctuation">&gt;</span></span>
      接收参数：this.props.match.params
2.search参数
      路由链接(携带参数)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/demo/test?name=tom&amp;age=18<span class="token punctuation">&#39;</span></span><span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span>详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      注册路由(无需声明，正常注册即可)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo/test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Test}/</span><span class="token punctuation">&gt;</span></span>
      接收参数：this.props.location.search
      备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
3.state参数
      路由链接(携带参数)：&lt;Link to={{pathname:&#39;/demo/test&#39;,state:{name:&#39;tom&#39;,age:18}}}&gt;详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
      注册路由(无需声明，正常注册即可)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo/test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Test}/</span><span class="token punctuation">&gt;</span></span>
      接收参数：this.props.location.state
      备注：刷新也可以保留住参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编程式路由导航" tabindex="-1"><a class="header-anchor" href="#编程式路由导航" aria-hidden="true">#</a> 编程式路由导航</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>借助this.prosp.history对象上的API对操作路由跳转、前进、后退
    -this.prosp.history.push()
    -this.prosp.history.replace()
    -this.prosp.history.goBack()
    -this.prosp.history.goForward()
    -this.prosp.history.go()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="browserrouter与hashrouter的区别" tabindex="-1"><a class="header-anchor" href="#browserrouter与hashrouter的区别" aria-hidden="true">#</a> BrowserRouter与HashRouter的区别</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1.底层原理不一样：  
      BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。  
      HashRouter使用的是URL的哈希值。  
2.path表现形式不一样  
      BrowserRouter的路径中没有#,例如：localhost:3000/demo/test  
      HashRouter的路径包含#,例如：localhost:3000/#/demo/test  
3.刷新后对路由state参数的影响  
      (1).BrowserRouter没有任何影响，因为state保存在history对象中。  
      (2).HashRouter刷新后会导致路由state参数的丢失！！！  
4.备注：HashRouter可以用于解决一些路径错误相关的问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function c(i,l){return n(),s("div",null,o)}const d=a(e,[["render",c],["__file","router.html.vue"]]);export{d as default};
