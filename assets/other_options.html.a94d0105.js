import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.b510f403.js";const t={},i=e(`<h1 id="\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5176\u4ED6\u6CE8\u610F\u4E8B\u9879</h1><h2 id="_1-setstate\u66F4\u65B0\u72B6\u6001\u76842\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-setstate\u66F4\u65B0\u72B6\u6001\u76842\u79CD\u5199\u6CD5" aria-hidden="true">#</a> 1. setState\u66F4\u65B0\u72B6\u6001\u76842\u79CD\u5199\u6CD5</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>  (1). setState(stateChange, [callback])------\u5BF9\u8C61\u5F0F\u7684setState
            1.stateChange\u4E3A\u72B6\u6001\u6539\u53D8\u5BF9\u8C61(\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u4F53\u73B0\u51FA\u72B6\u6001\u7684\u66F4\u6539)
            2.callback\u662F\u53EF\u9009\u7684\u56DE\u8C03\u51FD\u6570, \u5B83\u5728\u72B6\u6001\u66F4\u65B0\u5B8C\u6BD5\u3001\u754C\u9762\u4E5F\u66F4\u65B0\u540E(render\u8C03\u7528\u540E)\u624D\u88AB\u8C03\u7528
          
  (2). setState(updater, [callback])------\u51FD\u6570\u5F0F\u7684setState
            1.updater\u4E3A\u8FD4\u56DEstateChange\u5BF9\u8C61\u7684\u51FD\u6570\u3002
            2.updater\u53EF\u4EE5\u63A5\u6536\u5230state\u548Cprops\u3002
            4.callback\u662F\u53EF\u9009\u7684\u56DE\u8C03\u51FD\u6570, \u5B83\u5728\u72B6\u6001\u66F4\u65B0\u3001\u754C\u9762\u4E5F\u66F4\u65B0\u540E(render\u8C03\u7528\u540E)\u624D\u88AB\u8C03\u7528\u3002
\u603B\u7ED3:
  1.\u5BF9\u8C61\u5F0F\u7684setState\u662F\u51FD\u6570\u5F0F\u7684setState\u7684\u7B80\u5199\u65B9\u5F0F(\u8BED\u6CD5\u7CD6)
  2.\u4F7F\u7528\u539F\u5219\uFF1A
      (1).\u5982\u679C\u65B0\u72B6\u6001\u4E0D\u4F9D\u8D56\u4E8E\u539F\u72B6\u6001 ===&gt; \u4F7F\u7528\u5BF9\u8C61\u65B9\u5F0F
      (2).\u5982\u679C\u65B0\u72B6\u6001\u4F9D\u8D56\u4E8E\u539F\u72B6\u6001 ===&gt; \u4F7F\u7528\u51FD\u6570\u65B9\u5F0F
      (3).\u5982\u679C\u9700\u8981\u5728setState()\u6267\u884C\u540E\u83B7\u53D6\u6700\u65B0\u7684\u72B6\u6001\u6570\u636E, 
        \u8981\u5728\u7B2C\u4E8C\u4E2Acallback\u51FD\u6570\u4E2D\u8BFB\u53D6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u8DEF\u7531\u7EC4\u4EF6\u7684lazyload" tabindex="-1"><a class="header-anchor" href="#_2-\u8DEF\u7531\u7EC4\u4EF6\u7684lazyload" aria-hidden="true">#</a> 2. \u8DEF\u7531\u7EC4\u4EF6\u7684lazyLoad</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">//1.\u901A\u8FC7React\u7684lazy\u51FD\u6570\u914D\u5408import()\u51FD\u6570\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\u7EC4\u4EF6 ===&gt; \u8DEF\u7531\u7EC4\u4EF6\u4EE3\u7801\u4F1A\u88AB\u5206\u5F00\u6253\u5305</span>
<span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/pages/Login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//2.\u901A\u8FC7&lt;Suspense&gt;\u6307\u5B9A\u5728\u52A0\u8F7D\u5F97\u5230\u8DEF\u7531\u6253\u5305\u6587\u4EF6\u524D\u663E\u793A\u4E00\u4E2A\u81EA\u5B9A\u4E49loading\u754C\u9762</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">loading.....</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Xxxx<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hooks" tabindex="-1"><a class="header-anchor" href="#_3-hooks" aria-hidden="true">#</a> 3. Hooks</h2><h3 id="_1-react-hook-hooks\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-react-hook-hooks\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. React Hook/Hooks\u662F\u4EC0\u4E48?</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1). Hook\u662FReact 16.8.0\u7248\u672C\u589E\u52A0\u7684\u65B0\u7279\u6027/\u65B0\u8BED\u6CD5
(2). \u53EF\u4EE5\u8BA9\u4F60\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 state \u4EE5\u53CA\u5176\u4ED6\u7684 React \u7279\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4E09\u4E2A\u5E38\u7528\u7684hook" tabindex="-1"><a class="header-anchor" href="#_2-\u4E09\u4E2A\u5E38\u7528\u7684hook" aria-hidden="true">#</a> 2. \u4E09\u4E2A\u5E38\u7528\u7684Hook</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-hook" tabindex="-1"><a class="header-anchor" href="#state-hook" aria-hidden="true">#</a> State Hook</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1). State Hook\u8BA9\u51FD\u6570\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u6709state\u72B6\u6001, \u5E76\u8FDB\u884C\u72B6\u6001\u6570\u636E\u7684\u8BFB\u5199\u64CD\u4F5C
(2). \u8BED\u6CD5: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()\u8BF4\u660E:
        \u53C2\u6570: \u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u6307\u5B9A\u7684\u503C\u5728\u5185\u90E8\u4F5C\u7F13\u5B58
        \u8FD4\u56DE\u503C: \u5305\u542B2\u4E2A\u5143\u7D20\u7684\u6570\u7EC4, \u7B2C1\u4E2A\u4E3A\u5185\u90E8\u5F53\u524D\u72B6\u6001\u503C, \u7B2C2\u4E2A\u4E3A\u66F4\u65B0\u72B6\u6001\u503C\u7684\u51FD\u6570
(4). setXxx()2\u79CD\u5199\u6CD5:
        setXxx(newValue): \u53C2\u6570\u4E3A\u975E\u51FD\u6570\u503C, \u76F4\u63A5\u6307\u5B9A\u65B0\u7684\u72B6\u6001\u503C, \u5185\u90E8\u7528\u5176\u8986\u76D6\u539F\u6765\u7684\u72B6\u6001\u503C
        setXxx(value =&gt; newValue): \u53C2\u6570\u4E3A\u51FD\u6570, \u63A5\u6536\u539F\u672C\u7684\u72B6\u6001\u503C, \u8FD4\u56DE\u65B0\u7684\u72B6\u6001\u503C, \u5185\u90E8\u7528\u5176\u8986\u76D6\u539F\u6765\u7684\u72B6\u6001\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-hook" tabindex="-1"><a class="header-anchor" href="#effect-hook" aria-hidden="true">#</a> Effect Hook</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1). Effect Hook \u53EF\u4EE5\u8BA9\u4F60\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6267\u884C\u526F\u4F5C\u7528\u64CD\u4F5C(\u7528\u4E8E\u6A21\u62DF\u7C7B\u7EC4\u4EF6\u4E2D\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50)
(2). React\u4E2D\u7684\u526F\u4F5C\u7528\u64CD\u4F5C:
        \u53D1ajax\u8BF7\u6C42\u6570\u636E\u83B7\u53D6
        \u8BBE\u7F6E\u8BA2\u9605 / \u542F\u52A8\u5B9A\u65F6\u5668
        \u624B\u52A8\u66F4\u6539\u771F\u5B9EDOM
(3). \u8BED\u6CD5\u548C\u8BF4\u660E: 
        useEffect(() =&gt; { 
          // \u5728\u6B64\u53EF\u4EE5\u6267\u884C\u4EFB\u4F55\u5E26\u526F\u4F5C\u7528\u64CD\u4F5C
          return () =&gt; { // \u5728\u7EC4\u4EF6\u5378\u8F7D\u524D\u6267\u884C
            // \u5728\u6B64\u505A\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C, \u6BD4\u5982\u6E05\u9664\u5B9A\u65F6\u5668/\u53D6\u6D88\u8BA2\u9605\u7B49
          }
        }, [stateValue]) // \u5982\u679C\u6307\u5B9A\u7684\u662F[], \u56DE\u8C03\u51FD\u6570\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21render()\u540E\u6267\u884C
    
(4). \u53EF\u4EE5\u628A useEffect Hook \u770B\u505A\u5982\u4E0B\u4E09\u4E2A\u51FD\u6570\u7684\u7EC4\u5408
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount() 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-hook" tabindex="-1"><a class="header-anchor" href="#ref-hook" aria-hidden="true">#</a> Ref Hook</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>(1). Ref Hook\u53EF\u4EE5\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5B58\u50A8/\u67E5\u627E\u7EC4\u4EF6\u5185\u7684\u6807\u7B7E\u6216\u4EFB\u610F\u5176\u5B83\u6570\u636E
(2). \u8BED\u6CD5: const refContainer = useRef()
(3). \u4F5C\u7528:\u4FDD\u5B58\u6807\u7B7E\u5BF9\u8C61,\u529F\u80FD\u4E0EReact.createRef()\u4E00\u6837
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-fragment" tabindex="-1"><a class="header-anchor" href="#_4-fragment" aria-hidden="true">#</a> 4. Fragment</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u4F7F\u7528</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

// \u4F5C\u7528: \u53EF\u4EE5\u4E0D\u7528\u5FC5\u987B\u6709\u4E00\u4E2A\u771F\u5B9E\u7684DOM\u6839\u6807\u7B7E\u4E86
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-context" tabindex="-1"><a class="header-anchor" href="#_5-context" aria-hidden="true">#</a> 5. Context</h2><p>\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F, \u5E38\u7528\u4E8E\u3010\u7956\u7EC4\u4EF6\u3011\u4E0E\u3010\u540E\u4EE3\u7EC4\u4EF6\u3011\u95F4\u901A\u4FE1</p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 1) \u521B\u5EFAContext\u5BB9\u5668\u5BF9\u8C61\uFF1A</span>
  <span class="token keyword">const</span> XxxContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  

<span class="token comment">// 2) \u6E32\u67D3\u5B50\u7EC4\u65F6\uFF0C\u5916\u9762\u5305\u88F9xxxContext.Provider, \u901A\u8FC7value\u5C5E\u6027\u7ED9\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\uFF1A</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xxxContext.Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\u6570\u636E<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    \u5B50\u7EC4\u4EF6
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xxxContext.Provider</span><span class="token punctuation">&gt;</span></span>
    
<span class="token comment">// 3) \u540E\u4EE3\u7EC4\u4EF6\u8BFB\u53D6\u6570\u636E\uFF1A</span>

  <span class="token comment">//\u7B2C\u4E00\u79CD\u65B9\u5F0F:\u4EC5\u9002\u7528\u4E8E\u7C7B\u7EC4\u4EF6 </span>
    <span class="token keyword">static</span> contextType <span class="token operator">=</span> xxxContext  <span class="token comment">// \u58F0\u660E\u63A5\u6536context</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token comment">// \u8BFB\u53D6context\u4E2D\u7684value\u6570\u636E</span>
    
  <span class="token comment">//\u7B2C\u4E8C\u79CD\u65B9\u5F0F: \u51FD\u6570\u7EC4\u4EF6\u4E0E\u7C7B\u7EC4\u4EF6\u90FD\u53EF\u4EE5</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xxxContext.Consumer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span> <span class="token comment">// value\u5C31\u662Fcontext\u4E2D\u7684value\u6570\u636E</span>
          \u8981\u663E\u793A\u7684\u5185\u5BB9
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xxxContext.Consumer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F:\u5728\u5E94\u7528\u5F00\u53D1\u4E2D\u4E00\u822C\u4E0D\u7528context, \u4E00\u822C\u90FD\u5B83\u7684\u5C01\u88C5react\u63D2\u4EF6</p><h2 id="_6-\u7EC4\u4EF6\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_6-\u7EC4\u4EF6\u4F18\u5316" aria-hidden="true">#</a> 6. \u7EC4\u4EF6\u4F18\u5316</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>1.Component\u76842\u4E2A\u95EE\u9898 
  1)\u53EA\u8981\u6267\u884CsetState(),\u5373\u4F7F\u4E0D\u6539\u53D8\u72B6\u6001\u6570\u636E, \u7EC4\u4EF6\u4E5F\u4F1A\u91CD\u65B0render()
  2)\u53EA\u5F53\u524D\u7EC4\u4EF6\u91CD\u65B0render(), \u5C31\u4F1A\u81EA\u52A8\u91CD\u65B0render\u5B50\u7EC4\u4EF6 ==&gt; \u6548\u7387\u4F4E

\u6548\u7387\u9AD8\u7684\u505A\u6CD5:\u53EA\u6709\u5F53\u7EC4\u4EF6\u7684state\u6216props\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u624D\u91CD\u65B0render()

\u539F\u56E0: Component\u4E2D\u7684shouldComponentUpdate()\u603B\u662F\u8FD4\u56DEtrue

\u89E3\u51B3\u65B9\u6CD5:
  \u529E\u6CD51: 
    \u91CD\u5199shouldComponentUpdate()\u65B9\u6CD5
    \u6BD4\u8F83\u65B0\u65E7state\u6216props\u6570\u636E, \u5982\u679C\u6709\u53D8\u5316\u624D\u8FD4\u56DEtrue, \u5982\u679C\u6CA1\u6709\u8FD4\u56DEfalse
  
  \u529E\u6CD52:  
    \u4F7F\u7528PureComponent
    PureComponent\u91CD\u5199\u4E86shouldComponentUpdate(), \u53EA\u6709state\u6216props\u6570\u636E\u6709\u53D8\u5316\u624D\u8FD4\u56DEtrue
    \u6CE8\u610F: 
      \u53EA\u662F\u8FDB\u884Cstate\u548Cprops\u6570\u636E\u7684\u6D45\u6BD4\u8F83, \u5982\u679C\u53EA\u662F\u6570\u636E\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u53D8\u4E86, \u8FD4\u56DEfalse  
      \u4E0D\u8981\u76F4\u63A5\u4FEE\u6539state\u6570\u636E, \u800C\u662F\u8981\u4EA7\u751F\u65B0\u6570\u636E
  \u9879\u76EE\u4E2D\u4E00\u822C\u4F7F\u7528PureComponent\u6765\u4F18\u5316
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-render-props" tabindex="-1"><a class="header-anchor" href="#_7-render-props" aria-hidden="true">#</a> 7. render props</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>1.\u5982\u4F55\u5411\u7EC4\u4EF6\u5185\u90E8\u52A8\u6001\u4F20\u5165\u5E26\u5185\u5BB9\u7684\u7ED3\u6784(\u6807\u7B7E)?

Vue\u4E2D:
  \u4F7F\u7528slot\u6280\u672F, \u4E5F\u5C31\u662F\u901A\u8FC7\u7EC4\u4EF6\u6807\u7B7E\u4F53\u4F20\u5165\u7ED3\u6784  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AA</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BB</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AA</span><span class="token punctuation">&gt;</span></span>
React\u4E2D:
  \u4F7F\u7528children props: \u901A\u8FC7\u7EC4\u4EF6\u6807\u7B7E\u4F53\u4F20\u5165\u7ED3\u6784
  \u4F7F\u7528render props: \u901A\u8FC7\u7EC4\u4EF6\u6807\u7B7E\u5C5E\u6027\u4F20\u5165\u7ED3\u6784, \u4E00\u822C\u7528render\u51FD\u6570\u5C5E\u6027

2.children props

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>A</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>B</span><span class="token punctuation">&gt;</span></span>xxxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>B</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>A</span><span class="token punctuation">&gt;</span></span>
  {this.props.children}
  \u95EE\u9898: \u5982\u679CB\u7EC4\u4EF6\u9700\u8981A\u7EC4\u4EF6\u5185\u7684\u6570\u636E, ==&gt; \u505A\u4E0D\u5230 

3.render props

  &lt;A render={(data) =&gt; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>C</span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{data}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>C</span><span class="token punctuation">&gt;</span></span>}&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>A</span><span class="token punctuation">&gt;</span></span>
  A\u7EC4\u4EF6: {this.props.render(\u5185\u90E8state\u6570\u636E)}
  C\u7EC4\u4EF6: \u8BFB\u53D6A\u7EC4\u4EF6\u4F20\u5165\u7684\u6570\u636E\u663E\u793A {this.props.data} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u9519\u8BEF\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#_8-\u9519\u8BEF\u8FB9\u754C" aria-hidden="true">#</a> 8. \u9519\u8BEF\u8FB9\u754C</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u9519\u8BEF\u8FB9\u754C\uFF1A\u7528\u6765\u6355\u83B7\u540E\u4EE3\u7EC4\u4EF6\u9519\u8BEF\uFF0C\u6E32\u67D3\u51FA\u5907\u7528\u9875\u9762

\u7279\u70B9\uFF1A\u53EA\u80FD\u6355\u83B7\u540E\u4EE3\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4EA7\u751F\u7684\u9519\u8BEF\uFF0C\u4E0D\u80FD\u6355\u83B7\u81EA\u5DF1\u7EC4\u4EF6\u4EA7\u751F\u7684\u9519\u8BEF\u548C\u5176\u4ED6\u7EC4\u4EF6\u5728\u5408\u6210\u4E8B\u4EF6\u3001\u5B9A\u65F6\u5668\u4E2D\u4EA7\u751F\u7684\u9519\u8BEF

\u4F7F\u7528\u65B9\u5F0F\uFF1AgetDerivedStateFromError\u914D\u5408componentDidCatch


// \u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E00\u65E6\u540E\u53F0\u7EC4\u4EF6\u62A5\u9519\uFF0C\u5C31\u4F1A\u89E6\u53D1
static getDerivedStateFromError(error) {
    console.log(error);
    // \u5728render\u4E4B\u524D\u89E6\u53D1
    // \u8FD4\u56DE\u65B0\u7684state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // \u7EDF\u8BA1\u9875\u9762\u7684\u9519\u8BEF\u3002\u53D1\u9001\u8BF7\u6C42\u53D1\u9001\u5230\u540E\u53F0\u53BB
    console.log(error, info);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_9-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u603B\u7ED3" aria-hidden="true">#</a> 9. \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u603B\u7ED3</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u65B9\u5F0F\uFF1A
  props\uFF1A
    (1).children props
    (2).render props
  \u6D88\u606F\u8BA2\u9605-\u53D1\u5E03\uFF1A
    pubs-sub\u3001event\u7B49\u7B49
  \u96C6\u4E2D\u5F0F\u7BA1\u7406\uFF1A
    redux\u3001dva\u7B49\u7B49
  conText:
    \u751F\u4EA7\u8005-\u6D88\u8D39\u8005\u6A21\u5F0F

\u7EC4\u4EF6\u95F4\u7684\u5173\u7CFB:
  \u7236\u5B50\u7EC4\u4EF6\uFF1Aprops
  \u5144\u5F1F\u7EC4\u4EF6(\u975E\u5D4C\u5957\u7EC4\u4EF6)\uFF1A\u6D88\u606F\u8BA2\u9605-\u53D1\u5E03\u3001\u96C6\u4E2D\u5F0F\u7BA1\u7406
  \u7956\u5B59\u7EC4\u4EF6(\u8DE8\u7EA7\u7EC4\u4EF6)\uFF1A\u6D88\u606F\u8BA2\u9605-\u53D1\u5E03\u3001\u96C6\u4E2D\u5F0F\u7BA1\u7406\u3001conText(\u7528\u7684\u5C11)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),l=[i];function c(d,p){return s(),a("div",null,l)}var u=n(t,[["render",c],["__file","other_options.html.vue"]]);export{u as default};
