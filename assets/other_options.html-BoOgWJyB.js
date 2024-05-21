import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,b as e}from"./app-B18m450P.js";const t={},i=e(`<h1 id="其他注意事项" tabindex="-1"><a class="header-anchor" href="#其他注意事项"><span>其他注意事项</span></a></h1><h2 id="_1-setstate更新状态的2种写法" tabindex="-1"><a class="header-anchor" href="#_1-setstate更新状态的2种写法"><span>1. setState更新状态的2种写法</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>  (1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
          
  (2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
  1.对象式的setState是函数式的setState的简写方式(语法糖)
  2.使用原则：
      (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式
      (2).如果新状态依赖于原状态 ===&gt; 使用函数方式
      (3).如果需要在setState()执行后获取最新的状态数据, 
        要在第二个callback函数中读取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-路由组件的lazyload" tabindex="-1"><a class="header-anchor" href="#_2-路由组件的lazyload"><span>2. 路由组件的lazyLoad</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">//1.通过React的lazy函数配合import()函数动态加载路由组件 ===&gt; 路由组件代码会被分开打包</span>
<span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/pages/Login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//2.通过&lt;Suspense&gt;指定在加载得到路由打包文件前显示一个自定义loading界面</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">loading.....</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Xxxx<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hooks" tabindex="-1"><a class="header-anchor" href="#_3-hooks"><span>3. Hooks</span></a></h2><h3 id="_1-react-hook-hooks是什么" tabindex="-1"><a class="header-anchor" href="#_1-react-hook-hooks是什么"><span>1. React Hook/Hooks是什么?</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-三个常用的hook" tabindex="-1"><a class="header-anchor" href="#_2-三个常用的hook"><span>2. 三个常用的Hook</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-hook" tabindex="-1"><a class="header-anchor" href="#state-hook"><span>State Hook</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value =&gt; newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-hook" tabindex="-1"><a class="header-anchor" href="#effect-hook"><span>Effect Hook</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() =&gt; { 
          // 在此可以执行任何带副作用操作
          return () =&gt; { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount() 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-hook" tabindex="-1"><a class="header-anchor" href="#ref-hook"><span>Ref Hook</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-fragment" tabindex="-1"><a class="header-anchor" href="#_4-fragment"><span>4. Fragment</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 使用</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

// 作用: 可以不用必须有一个真实的DOM根标签了
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-context" tabindex="-1"><a class="header-anchor" href="#_5-context"><span>5. Context</span></a></h2><p>一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 1) 创建Context容器对象：</span>
  <span class="token keyword">const</span> XxxContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

<span class="token comment">// 2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xxxContext.Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    子组件
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xxxContext.Provider</span><span class="token punctuation">&gt;</span></span>
    
<span class="token comment">// 3) 后代组件读取数据：</span>

  <span class="token comment">//第一种方式:仅适用于类组件 </span>
    <span class="token keyword">static</span> contextType <span class="token operator">=</span> xxxContext  <span class="token comment">// 声明接收context</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token comment">// 读取context中的value数据</span>
    
  <span class="token comment">//第二种方式: 函数组件与类组件都可以</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xxxContext.Consumer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span> <span class="token comment">// value就是context中的value数据</span>
          要显示的内容
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xxxContext.Consumer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:在应用开发中一般不用context, 一般都它的封装react插件</p><h2 id="_6-组件优化" tabindex="-1"><a class="header-anchor" href="#_6-组件优化"><span>6. 组件优化</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>1.Component的2个问题 
  1)只要执行setState(),即使不改变状态数据, 组件也会重新render()
  2)只当前组件重新render(), 就会自动重新render子组件 ==&gt; 效率低

效率高的做法:只有当组件的state或props数据发生改变时才重新render()

原因: Component中的shouldComponentUpdate()总是返回true

解决方法:
  办法1: 
    重写shouldComponentUpdate()方法
    比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
  
  办法2:  
    使用PureComponent
    PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
    注意: 
      只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
      不要直接修改state数据, 而是要产生新数据
  项目中一般使用PureComponent来优化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-render-props" tabindex="-1"><a class="header-anchor" href="#_7-render-props"><span>7. render props</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>1.如何向组件内部动态传入带内容的结构(标签)?

Vue中:
  使用slot技术, 也就是通过组件标签体传入结构  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AA</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BB</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AA</span><span class="token punctuation">&gt;</span></span>
React中:
  使用children props: 通过组件标签体传入结构
  使用render props: 通过组件标签属性传入结构, 一般用render函数属性

2.children props

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>A</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>B</span><span class="token punctuation">&gt;</span></span>xxxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>B</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>A</span><span class="token punctuation">&gt;</span></span>
  {this.props.children}
  问题: 如果B组件需要A组件内的数据, ==&gt; 做不到 

3.render props

  &lt;A render={(data) =&gt; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>C</span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{data}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>C</span><span class="token punctuation">&gt;</span></span>}&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>A</span><span class="token punctuation">&gt;</span></span>
  A组件: {this.props.render(内部state数据)}
  C组件: 读取A组件传入的数据显示 {this.props.data} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-错误边界" tabindex="-1"><a class="header-anchor" href="#_8-错误边界"><span>8. 错误边界</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>错误边界：用来捕获后代组件错误，渲染出备用页面

特点：只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

使用方式：getDerivedStateFromError配合componentDidCatch


// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-组件通信方式总结" tabindex="-1"><a class="header-anchor" href="#_9-组件通信方式总结"><span>9. 组件通信方式总结</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>方式：
  props：
    (1).children props
    (2).render props
  消息订阅-发布：
    pubs-sub、event等等
  集中式管理：
    redux、dva等等
  conText:
    生产者-消费者模式

组件间的关系:
  父子组件：props
  兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理
  祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),l=[i];function o(c,p){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","other_options.html.vue"]]),v=JSON.parse('{"path":"/framework_front/react/other_options.html","title":"其他注意事项","lang":"zh-CN","frontmatter":{"article":false,"description":"其他注意事项 1. setState更新状态的2种写法 2. 路由组件的lazyLoad 3. Hooks 1. React Hook/Hooks是什么? 2. 三个常用的Hook State Hook Effect Hook Ref Hook 4. Fragment 5. Context 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信 使...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/other_options.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"其他注意事项"}],["meta",{"property":"og:description","content":"其他注意事项 1. setState更新状态的2种写法 2. 路由组件的lazyLoad 3. Hooks 1. React Hook/Hooks是什么? 2. 三个常用的Hook State Hook Effect Hook Ref Hook 4. Fragment 5. Context 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信 使..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"其他注意事项\\",\\"description\\":\\"其他注意事项 1. setState更新状态的2种写法 2. 路由组件的lazyLoad 3. Hooks 1. React Hook/Hooks是什么? 2. 三个常用的Hook State Hook Effect Hook Ref Hook 4. Fragment 5. Context 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信 使...\\"}"]]},"headers":[{"level":2,"title":"1. setState更新状态的2种写法","slug":"_1-setstate更新状态的2种写法","link":"#_1-setstate更新状态的2种写法","children":[]},{"level":2,"title":"2. 路由组件的lazyLoad","slug":"_2-路由组件的lazyload","link":"#_2-路由组件的lazyload","children":[]},{"level":2,"title":"3. Hooks","slug":"_3-hooks","link":"#_3-hooks","children":[{"level":3,"title":"1. React Hook/Hooks是什么?","slug":"_1-react-hook-hooks是什么","link":"#_1-react-hook-hooks是什么","children":[]},{"level":3,"title":"2. 三个常用的Hook","slug":"_2-三个常用的hook","link":"#_2-三个常用的hook","children":[]},{"level":3,"title":"State Hook","slug":"state-hook","link":"#state-hook","children":[]},{"level":3,"title":"Effect Hook","slug":"effect-hook","link":"#effect-hook","children":[]},{"level":3,"title":"Ref Hook","slug":"ref-hook","link":"#ref-hook","children":[]}]},{"level":2,"title":"4. Fragment","slug":"_4-fragment","link":"#_4-fragment","children":[]},{"level":2,"title":"5. Context","slug":"_5-context","link":"#_5-context","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"6. 组件优化","slug":"_6-组件优化","link":"#_6-组件优化","children":[]},{"level":2,"title":"7. render props","slug":"_7-render-props","link":"#_7-render-props","children":[]},{"level":2,"title":"8. 错误边界","slug":"_8-错误边界","link":"#_8-错误边界","children":[]},{"level":2,"title":"9. 组件通信方式总结","slug":"_9-组件通信方式总结","link":"#_9-组件通信方式总结","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":5.41,"words":1623},"filePathRelative":"framework_front/react/other_options.md","localizedDate":"2022年6月14日","excerpt":"\\n<h2>1. setState更新状态的2种写法</h2>\\n<div class=\\"language-markdown\\" data-ext=\\"md\\" data-title=\\"md\\"><pre class=\\"language-markdown\\"><code>  (1). setState(stateChange, [callback])------对象式的setState\\n            1.stateChange为状态改变对象(该对象可以体现出状态的更改)\\n            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用\\n          \\n  (2). setState(updater, [callback])------函数式的setState\\n            1.updater为返回stateChange对象的函数。\\n            2.updater可以接收到state和props。\\n            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。\\n总结:\\n  1.对象式的setState是函数式的setState的简写方式(语法糖)\\n  2.使用原则：\\n      (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式\\n      (2).如果新状态依赖于原状态 ===&gt; 使用函数方式\\n      (3).如果需要在setState()执行后获取最新的状态数据, \\n        要在第二个callback函数中读取\\n</code></pre></div>","autoDesc":true}');export{u as comp,v as data};
