const t=JSON.parse('{"key":"v-14d71cb3","path":"/framework_front/react/basic_use.html","title":"基本使用","lang":"zh-CN","frontmatter":{"article":false,"description":"基本使用 虚拟DOM 虚拟 DOM 的两种创建方式: 1.使用 jsx 创建 const VDOM /* 此处一定不要写引号，因为不是字符串 */ = ( &lt;h1 id=\\"title\\"&gt; &lt;span&gt;Hello,React&lt;/span&gt; &lt;/h1&gt; );","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/framework_front/react/basic_use.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"基本使用"}],["meta",{"property":"og:description","content":"基本使用 虚拟DOM 虚拟 DOM 的两种创建方式: 1.使用 jsx 创建 const VDOM /* 此处一定不要写引号，因为不是字符串 */ = ( &lt;h1 id=\\"title\\"&gt; &lt;span&gt;Hello,React&lt;/span&gt; &lt;/h1&gt; );"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://hanekawa.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-15T09:53:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基本使用"}],["meta",{"property":"article:modified_time","content":"2022-06-15T09:53:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"基本使用\\",\\"description\\":\\"基本使用 虚拟DOM 虚拟 DOM 的两种创建方式: 1.使用 jsx 创建 const VDOM /* 此处一定不要写引号，因为不是字符串 */ = ( &lt;h1 id=\\\\\\"title\\\\\\"&gt; &lt;span&gt;Hello,React&lt;/span&gt; &lt;/h1&gt; );\\"}"]]},"headers":[{"level":2,"title":"虚拟DOM","slug":"虚拟dom","link":"#虚拟dom","children":[]},{"level":2,"title":"jsx的基本语法规则","slug":"jsx的基本语法规则","link":"#jsx的基本语法规则","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]},{"level":2,"title":"组件实例属性之:state","slug":"组件实例属性之-state","link":"#组件实例属性之-state","children":[]},{"level":2,"title":"组件实例属性之:props","slug":"组件实例属性之-props","link":"#组件实例属性之-props","children":[]},{"level":2,"title":"组件实例属性之:refs","slug":"组件实例属性之-refs","link":"#组件实例属性之-refs","children":[]},{"level":2,"title":"事件处理","slug":"事件处理","link":"#事件处理","children":[]},{"level":2,"title":"受控组件与非受控组件","slug":"受控组件与非受控组件","link":"#受控组件与非受控组件","children":[]},{"level":2,"title":"高阶函数","slug":"高阶函数","link":"#高阶函数","children":[]},{"level":2,"title":"生命周期函数","slug":"生命周期函数","link":"#生命周期函数","children":[{"level":3,"title":"getSnapshotBeforeUpdate 使用场景","slug":"getsnapshotbeforeupdate-使用场景","link":"#getsnapshotbeforeupdate-使用场景","children":[]}]},{"level":2,"title":"key 的作用","slug":"key-的作用","link":"#key-的作用","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1655286810000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2}]},"readingTime":{"minutes":11.33,"words":3400},"filePathRelative":"framework_front/react/basic_use.md","localizedDate":"2022年6月14日","excerpt":"<h1> 基本使用</h1>\\n<h2> 虚拟<code>DOM</code></h2>\\n<p>虚拟 DOM 的两种创建方式:</p>\\n<p>1.使用 jsx 创建</p>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token constant\\">VDOM</span> <span class=\\"token comment\\">/* 此处一定不要写引号，因为不是字符串 */</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h1</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>title<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">Hello,React</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n  </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h1</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
