"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[1787],{7251:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>n,data:()=>h});var t=a(7829);const e=[(0,t.Fv)('<h1 id="字符组和量词" tabindex="-1"><a class="header-anchor" href="#字符组和量词"><span>字符组和量词</span></a></h1><h2 id="_1-模糊匹配" tabindex="-1"><a class="header-anchor" href="#_1-模糊匹配"><span>1. 模糊匹配</span></a></h2><p>匹配长度不固定</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> reg1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /ab</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">{2,5}</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">c/</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">g</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;abc abbc abbbc abbbbc abbbbbc abbbbbbc&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">reg1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [ &#39;abbc&#39;, &#39;abbbc&#39;, &#39;abbbbc&#39;, &#39;abbbbbc&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配固定长度,可以是不固定字符</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> reg2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">[123]</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">b/</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> str2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;a0b a1b a2b a3b a4b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">str2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">reg2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) );</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [ &#39;a1b&#39;, &#39;a2b&#39;, &#39;a3b&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-字符类" tabindex="-1"><a class="header-anchor" href="#_2-字符类"><span>2. 字符类</span></a></h2><p><code>[]</code>包裹的内容叫字符类,但是只匹配其中一个</p><p><code>[abc]</code>,表示匹配一个字符,可以是&#39;a&#39;,&#39;b&#39;,&#39;c&#39;之一</p><h3 id="_2-1-范围表示法" tabindex="-1"><a class="header-anchor" href="#_2-1-范围表示法"><span>2.1. 范围表示法</span></a></h3><p>比如[123456abcdXYZ],可以使用<code>-</code>简写成[1-6a-dX-Z]</p><p>如果要匹配&#39;-&#39;字符,可以使用&#39;&#39;转义</p><h3 id="_2-2-排除字符" tabindex="-1"><a class="header-anchor" href="#_2-2-排除字符"><span>2.2. 排除字符</span></a></h3><p>如下示例[^123],表示排除1,2,3之外的任意一个字符</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> reg2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123]</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">b/</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> str2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;a0b a1b a2b a3b a4b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">str2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">reg2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) );</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [ &#39;a0b&#39;, &#39;a4b&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-常见简写" tabindex="-1"><a class="header-anchor" href="#_2-3-常见简写"><span>2.3. 常见简写</span></a></h3><table><thead><tr><th style="text-align:left;">字符组</th><th style="text-align:left;">具体含义</th></tr></thead><tbody><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">表示 [0-9]。表示是一位数字。记忆方式：其英文是 digit（数字）。</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">表示 [^0-9]。表示除数字外的任意字符。</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">表示 [0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w 是 word 的简写，也称单词字符。</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">表示 [^0-9a-zA-Z_]。非单词字符。</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">表示 [ \\t\\v\\n\\r\\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s 是 space 的首字母，空白符的单词是 white space。</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">表示 [^ \\t\\v\\n\\r\\f]。 非空白符。</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">表示 [^\\n\\r\\u2028\\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。记忆方式：想想省略号 … 中的每个点，都可以理解成占位符，表示任何类似的东西。</td></tr></tbody></table><p>如果要匹配任意字符怎么办？可以使用 [\\d\\D]、[\\w\\W]、[\\s\\S] 和 [^] 中任何的一个。</p><h2 id="_3-量词" tabindex="-1"><a class="header-anchor" href="#_3-量词"><span>3. 量词</span></a></h2><h3 id="_3-1-简写" tabindex="-1"><a class="header-anchor" href="#_3-1-简写"><span>3.1 简写</span></a></h3><table><thead><tr><th style="text-align:left;">字符组</th><th style="text-align:left;">具体含义</th></tr></thead><tbody><tr><td style="text-align:left;">{m,}</td><td style="text-align:left;">表示至少出现 m 次。</td></tr><tr><td style="text-align:left;">{m}</td><td style="text-align:left;">等价于 {m,m}，表示出现 m 次。</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">等价于 {0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">等价于 {1,}，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">等价于 {0,}，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">惰性量词</th><th style="text-align:left;">贪婪量词</th></tr></thead><tbody><tr><td style="text-align:left;">{m,n}?</td><td style="text-align:left;">{m,n}</td></tr><tr><td style="text-align:left;">{m,n}?</td><td style="text-align:left;">{m,n}</td></tr><tr><td style="text-align:left;">??</td><td style="text-align:left;">?</td></tr><tr><td style="text-align:left;">+?</td><td style="text-align:left;">+</td></tr><tr><td style="text-align:left;">*?</td><td style="text-align:left;">*</td></tr></tbody></table><p>贪婪匹配:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> reg3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">{2,5}</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> str3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;123 1234 12345 123456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">str3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">reg3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) );</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [ &#39;123&#39;, &#39;1234&#39;, &#39;12345&#39;, &#39;12345&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>惰性匹配:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> reg3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#D19A66;">{2,5}?</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> str3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;123 1234 12345 123456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">str3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">reg3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) );</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// [ &#39;12&#39;, &#39;12&#39;, &#39;34&#39;, &#39;12&#39;, &#39;34&#39;, &#39;12&#39;, &#39;34&#39;, &#39;56&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-分支" tabindex="-1"><a class="header-anchor" href="#_4-分支"><span>4. 分支</span></a></h2><p>一个模式可以实现横向和纵向模糊匹配。而多选分支可以支持多个子模式任选其一。</p><p>使用管道符<code>|</code>表示。如：(p1|p2|p3)，其中 p1、p2 和 p3 是子模式，例如要匹配字符串 &quot;good&quot; 和 &quot;nice&quot; 可以使用 /good|nice/。</p><p><strong>分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了</strong></p><h2 id="_5-案列" tabindex="-1"><a class="header-anchor" href="#_5-案列"><span>5. 案列</span></a></h2><h3 id="_5-1-匹配16进制颜色值" tabindex="-1"><a class="header-anchor" href="#_5-1-匹配16进制颜色值"><span>5.1. 匹配16进制颜色值</span></a></h3><h3 id="_5-2-匹配时间" tabindex="-1"><a class="header-anchor" href="#_5-2-匹配时间"><span>5.2. 匹配时间</span></a></h3><h3 id="_5-3-匹配日期" tabindex="-1"><a class="header-anchor" href="#_5-3-匹配日期"><span>5.3. 匹配日期</span></a></h3><h3 id="_5-4-匹配windows路径" tabindex="-1"><a class="header-anchor" href="#_5-4-匹配windows路径"><span>5.4. 匹配windows路径</span></a></h3><h3 id="_5-5-匹配id" tabindex="-1"><a class="header-anchor" href="#_5-5-匹配id"><span>5.5. 匹配id</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;container&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',37)],l={},n=(0,a(1305).A)(l,[["render",function(i,s){return(0,t.uX)(),(0,t.CE)("div",null,e)}]]),h=JSON.parse('{"path":"/regexp/matching.html","title":"字符组和量词","lang":"zh-CN","frontmatter":{"article":false,"description":"字符组和量词 1. 模糊匹配 匹配长度不固定 匹配固定长度,可以是不固定字符 2. 字符类 []包裹的内容叫字符类,但是只匹配其中一个 [abc],表示匹配一个字符,可以是\'a\',\'b\',\'c\'之一 2.1. 范围表示法 比如[123456abcdXYZ],可以使用-简写成[1-6a-dX-Z] 如果要匹配\'-\'字符,可以使用\'\'转义 2.2. 排除字...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/regexp/matching.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"字符组和量词"}],["meta",{"property":"og:description","content":"字符组和量词 1. 模糊匹配 匹配长度不固定 匹配固定长度,可以是不固定字符 2. 字符类 []包裹的内容叫字符类,但是只匹配其中一个 [abc],表示匹配一个字符,可以是\'a\',\'b\',\'c\'之一 2.1. 范围表示法 比如[123456abcdXYZ],可以使用-简写成[1-6a-dX-Z] 如果要匹配\'-\'字符,可以使用\'\'转义 2.2. 排除字..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-23T10:01:07.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:modified_time","content":"2022-08-23T10:01:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"字符组和量词\\",\\"description\\":\\"字符组和量词 1. 模糊匹配 匹配长度不固定 匹配固定长度,可以是不固定字符 2. 字符类 []包裹的内容叫字符类,但是只匹配其中一个 [abc],表示匹配一个字符,可以是\'a\',\'b\',\'c\'之一 2.1. 范围表示法 比如[123456abcdXYZ],可以使用-简写成[1-6a-dX-Z] 如果要匹配\'-\'字符,可以使用\'\'转义 2.2. 排除字...\\"}"]]},"headers":[{"level":2,"title":"1. 模糊匹配","slug":"_1-模糊匹配","link":"#_1-模糊匹配","children":[]},{"level":2,"title":"2. 字符类","slug":"_2-字符类","link":"#_2-字符类","children":[{"level":3,"title":"2.1. 范围表示法","slug":"_2-1-范围表示法","link":"#_2-1-范围表示法","children":[]},{"level":3,"title":"2.2. 排除字符","slug":"_2-2-排除字符","link":"#_2-2-排除字符","children":[]},{"level":3,"title":"2.3. 常见简写","slug":"_2-3-常见简写","link":"#_2-3-常见简写","children":[]}]},{"level":2,"title":"3. 量词","slug":"_3-量词","link":"#_3-量词","children":[{"level":3,"title":"3.1 简写","slug":"_3-1-简写","link":"#_3-1-简写","children":[]}]},{"level":2,"title":"4. 分支","slug":"_4-分支","link":"#_4-分支","children":[]},{"level":2,"title":"5. 案列","slug":"_5-案列","link":"#_5-案列","children":[{"level":3,"title":"5.1. 匹配16进制颜色值","slug":"_5-1-匹配16进制颜色值","link":"#_5-1-匹配16进制颜色值","children":[]},{"level":3,"title":"5.2. 匹配时间","slug":"_5-2-匹配时间","link":"#_5-2-匹配时间","children":[]},{"level":3,"title":"5.3. 匹配日期","slug":"_5-3-匹配日期","link":"#_5-3-匹配日期","children":[]},{"level":3,"title":"5.4. 匹配windows路径","slug":"_5-4-匹配windows路径","link":"#_5-4-匹配windows路径","children":[]},{"level":3,"title":"5.5. 匹配id","slug":"_5-5-匹配id","link":"#_5-5-匹配id","children":[]}]}],"git":{"createdTime":1660643669000,"updatedTime":1661248867000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":3}]},"readingTime":{"minutes":2.72,"words":817},"filePathRelative":"regexp/matching.md","localizedDate":"2022年8月16日","excerpt":"\\n<h2>1. 模糊匹配</h2>\\n<p>匹配长度不固定</p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> reg1</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#E06C75\\"> /ab</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#D19A66\\">{2,5}</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#E06C75\\">c/</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">g</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> str</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \'abc abbc abbbc abbbbc abbbbbc abbbbbbc\'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">console</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">log</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">str</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">match</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">reg1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">));</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// [ \'abbc\', \'abbbc\', \'abbbbc\', \'abbbbbc\' ]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')},1305:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,t]of s)a[i]=t;return a}}}]);