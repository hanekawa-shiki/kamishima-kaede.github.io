import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-B18m450P.js";const i={},t=e(`<h1 id="常用命令整理" tabindex="-1"><a class="header-anchor" href="#常用命令整理"><span>常用命令整理</span></a></h1><h2 id="unix-哲学" tabindex="-1"><a class="header-anchor" href="#unix-哲学"><span>Unix 哲学</span></a></h2><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>一个工具只做一件事
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="linux原则" tabindex="-1"><a class="header-anchor" href="#linux原则"><span>Linux原则</span></a></h2><div class="language-tex line-numbers-mode" data-ext="tex" data-title="tex"><pre class="language-tex"><code>Linux 命令行默认的行为都遵循“最少打扰”原则 —— 相信用户是在深思熟虑之后向系统发出指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文件相关操作" tabindex="-1"><a class="header-anchor" href="#文件相关操作"><span>文件相关操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span> <span class="token comment"># print working directory（打印工作目录）</span>

<span class="token function">ls</span> <span class="token comment"># 当前位置文件和目录 list 的简写</span>

<span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment"># 命令的参数-a 是--all 的简写，意思是列出所有文件，包括不加任何参数的ls 能够列出的文件和以. 开头的文件，即隐藏（hidden）文件</span>

<span class="token builtin class-name">cd</span> <span class="token comment"># change directory 切换目录</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token comment"># 参数-l，意思是输出文件的详细内容（long listing format）</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/sudoers <span class="token comment"># 可查看该文件的所有者</span>

<span class="token comment"># 文件权限 -rwxr-xr-x(1-3-3-3位)</span>
<span class="token comment"># 文件类型(1位): 常见的文件类型有 -（代表文件）、d（代表目录）和 l（代表链接）</span>
<span class="token comment"># 读（read）、写（write）和执行（execute）</span>
<span class="token comment"># 所有者权限(3位)</span>
<span class="token comment"># 组用户权限(3位)</span>
<span class="token comment"># 其他用户权限(3位)</span>

<span class="token function">cat</span> /etc/sudoers <span class="token comment"># 查看文件内容</span>
                 <span class="token comment"># sudo 免密时间长度由 /etc/sudoers 文件中的 timestamp_timeout 参数确定</span>
<span class="token function">less</span> <span class="token comment"># j键向下 k键向上</span>
<span class="token function">head</span> <span class="token comment"># 打印文本前10行</span>
<span class="token function">tail</span> <span class="token comment"># 打印文本最后10行</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token comment"># 统计文本行数</span>
<span class="token function">file</span> <span class="token comment"># 常看文件类型</span>

<span class="token comment"># 重定向：将命令行的结果输出保存到文件</span>
<span class="token function">ls</span> /bin <span class="token operator">&gt;</span> ~/file_list.txt
<span class="token comment"># 管道（pipe）：将前面命令的输出变成后面命令的输入</span>
<span class="token function">ls</span> /bin <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token function">mkdir</span> <span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-v</span> <span class="token comment"># 返回执行成功的信息</span>

<span class="token comment"># vim文本编辑器</span>
<span class="token comment"># - 标准模式 </span>
<span class="token comment"># - 插入模式：在标准模式下按 i 进入</span>
<span class="token comment"># - 命令模式：在标准模式下按 ESC 进入</span>

<span class="token function">cp</span> a b <span class="token comment"># 复制文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> demo backup <span class="token comment"># 复制文件夹 -r =&gt; recursive 从顶层到下面，递归复制</span>
<span class="token comment"># mv 命令不会区别对待文件和目录</span>
<span class="token function">mv</span> demo/hw.sh backup/
<span class="token function">mv</span> demo demo2 <span class="token comment"># 修改文件夹名称</span>


<span class="token comment"># 技巧：使用 vi 编辑一个没有权限的文件后如何保存？</span>
<span class="token comment"># :wq /tmp/a 将文件保存至 tmp 文件夹中，因为任何人都有 tmp 文件夹的权限</span>
<span class="token comment"># 最后使用 sudo cp 命令复制替换</span>

<span class="token function">rm</span> a <span class="token comment"># 删除文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token comment"># 删除文件夹 递归删除文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-i</span> <span class="token comment"># 谨慎删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-ri</span> <span class="token comment"># -r -i 简写</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token comment"># 强制删除</span>

<span class="token function">touch</span> a.txt <span class="token comment"># 创建新文件，也可以用来更新新文件时间戳</span>

<span class="token comment"># linux 每个命令都会返回一个证书，叫做返回值（exit status），每次执行完一个命令后紧接着运行 echo $? 就可以查看上个命令的返回值</span>
<span class="token comment"># - 0 表示命令正常结束</span>
<span class="token comment"># - 否则说明命令执行过程中出现了错误，命令没有正常运行</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用和包管理" tabindex="-1"><a class="header-anchor" href="#应用和包管理"><span>应用和包管理</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> list <span class="token parameter variable">--installed</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token parameter variable">-N</span>
<span class="token comment"># 输入 /apt 并按回车键，然后按 n 键，就会将每一个匹配到的 apt 字符串放到分页器第一行</span>
<span class="token comment"># 们按 g 键回到列表头</span>

<span class="token comment"># 过滤 grep</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;^apt&#39;</span> <span class="token operator">&gt;</span> apt_related_pkgs


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function c(p,o){return a(),s("div",null,l)}const r=n(i,[["render",c],["__file","commoncmd.html.vue"]]),v=JSON.parse('{"path":"/linux/commoncmd.html","title":"常用命令整理","lang":"zh-CN","frontmatter":{"article":false,"description":"常用命令整理 Unix 哲学 Linux原则 文件相关操作 应用和包管理","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/linux/commoncmd.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"常用命令整理"}],["meta",{"property":"og:description","content":"常用命令整理 Unix 哲学 Linux原则 文件相关操作 应用和包管理"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-21T08:10:09.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:modified_time","content":"2024-05-21T08:10:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"常用命令整理\\",\\"description\\":\\"常用命令整理 Unix 哲学 Linux原则 文件相关操作 应用和包管理\\"}"]]},"headers":[{"level":2,"title":"Unix 哲学","slug":"unix-哲学","link":"#unix-哲学","children":[]},{"level":2,"title":"Linux原则","slug":"linux原则","link":"#linux原则","children":[]},{"level":2,"title":"文件相关操作","slug":"文件相关操作","link":"#文件相关操作","children":[]},{"level":2,"title":"应用和包管理","slug":"应用和包管理","link":"#应用和包管理","children":[]}],"git":{"createdTime":1688524072000,"updatedTime":1716279009000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":4},{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":1}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"linux/commoncmd.md","localizedDate":"2023年7月5日","excerpt":"\\n<h2>Unix 哲学</h2>\\n<div class=\\"language-tex\\" data-ext=\\"tex\\" data-title=\\"tex\\"><pre class=\\"language-tex\\"><code>一个工具只做一件事\\n</code></pre></div><h2>Linux原则</h2>\\n<div class=\\"language-tex\\" data-ext=\\"tex\\" data-title=\\"tex\\"><pre class=\\"language-tex\\"><code>Linux 命令行默认的行为都遵循“最少打扰”原则 —— 相信用户是在深思熟虑之后向系统发出指令\\n</code></pre></div>","autoDesc":true}');export{r as comp,v as data};