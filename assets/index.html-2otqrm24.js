import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,e as t,b as e,o}from"./app-B18m450P.js";const p={},c=t("p",null,"平时看到的变成思想记录",-1),i=e(`<h2 id="哨兵变量" tabindex="-1"><a class="header-anchor" href="#哨兵变量"><span>哨兵变量</span></a></h2><blockquote><p>由于多个异步场景中回调函数的执行并不能保证顺序，且回调函数之间互相没有任何交集，所以需要借助一个第三方函数和第三方变量来处理异步协作的结果。通常，我们把这个用于检测次数的变量叫做哨兵变量。--《深入浅出Node.js》﹒朴灵</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">times<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> results <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    results<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> times<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> done <span class="token operator">=</span> <span class="token function">after</span><span class="token punctuation">(</span>times<span class="token punctuation">,</span> render<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Node基于事件驱动和非阻塞设计，在分布式环境中尤其能发挥出它的特长，基于事件驱动可以实现与大量的客户端进行连接，非阻塞设计则让它可以更好地提升网络的响应吞吐。Node提供了相对底层的网络调用，以及基于事件的编程接口，使得开发者在这些模块上十分轻松地构建网络应用。</p></blockquote>`,4);function l(r,u){return o(),a("div",null,[c,s(" more "),i])}const m=n(p,[["render",l],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/programming_ideas/","title":"编程思维积累","lang":"zh-CN","frontmatter":{"title":"编程思维积累","icon":"list","category":"编程","tag":["ideas"],"isOriginal":true,"date":"2022-08-09T00:00:00.000Z","description":"平时看到的变成思想记录","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/programming_ideas/"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"编程思维积累"}],["meta",{"property":"og:description","content":"平时看到的变成思想记录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-16T03:42:08.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:tag","content":"ideas"}],["meta",{"property":"article:published_time","content":"2022-08-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-16T03:42:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编程思维积累\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-16T03:42:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kamishima-kaede\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"headers":[{"level":2,"title":"哨兵变量","slug":"哨兵变量","link":"#哨兵变量","children":[]}],"git":{"createdTime":1660039367000,"updatedTime":1676518928000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":2},{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":1}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"programming_ideas/README.md","localizedDate":"2022年8月9日","excerpt":"<p>平时看到的变成思想记录</p>\\n","autoDesc":true}');export{m as comp,v as data};