"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[9609],{2580:(s,e,n)=>{n.r(e),n.d(e,{comp:()=>r,data:()=>i});var a=n(9034);const l=(0,a.Lk)("p",null,"开发过程中常用的镜像资源收集记录",-1),o=(0,a.Fv)('<p>本人常用的镜像站点:</p><ul><li><a href="https://mirrors.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">中科大镜像源</a></li><li><a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noopener noreferrer">阿里巴巴开源镜像站</a></li><li><a href="https://mirrors.huaweicloud.com/" target="_blank" rel="noopener noreferrer">华为开源镜像站</a></li></ul><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span><code>pnpm</code></span></a></h2><p>官网:<a href="https://pnpm.io/zh" target="_blank" rel="noopener noreferrer">中文</a>|<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">英文</a></p><p><code>pnpm</code>不仅能作为<code>JavaScript</code>的包管理工具,而且可以作为<code>nodejs</code>的版本管理工具</p><p>在 POSIX 类系统上，即使尚未安装 Node.js，也可以使用以下脚本安装 pnpm：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">curl</span><span style="color:#A3BE8C;"> -fsSL</span><span style="color:#A3BE8C;"> https://get.pnpm.io/install.sh</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> sh</span><span style="color:#A3BE8C;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果没有安装 curl，可以使用 wget：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">wget</span><span style="color:#A3BE8C;"> -qO-</span><span style="color:#A3BE8C;"> https://get.pnpm.io/install.sh</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> sh</span><span style="color:#A3BE8C;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 Windows 系统上（PowerShell）：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">iwr</span><span style="color:#A3BE8C;"> https://get.pnpm.io/install.ps1</span><span style="color:#A3BE8C;"> -useb</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> iex</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置<code>npm</code>包镜像地址：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> set</span><span style="color:#A3BE8C;"> registry</span><span style="color:#A3BE8C;"> https://registry.npmmirror.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置<code>Node.js</code>镜像地址：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> set</span><span style="color:#A3BE8C;"> node-mirror:release</span><span style="color:#A3BE8C;"> https://mirrors.aliyun.com/nodejs-release/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果设置报错,原因一般是没有安装<code>npm</code>,可以手动创建<code>.npmrc</code>文件,然后添加:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">registry</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">https://registry.npmmirror.com/</span></span>\n<span class="line"><span style="color:#88C0D0;">node-mirror:release</span><span style="color:#A3BE8C;">=https://mirrors.aliyun.com/nodejs-release/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.npmrc</code>文件所在位置如下,根据具体情况在所在位置创建:</p><ul><li>全局配置文件：<code>/etc/npmrc</code></li><li>用户配置文件：<code>~/.npmrc</code></li><li>项目配置文件：<code>$项目根目录/.npmrc</code></li></ul><p>然后就可以使用<code>pnpm env</code>命令来管理<code>Node.js</code>版本。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 安装</span></span>\n<span class="line"><span style="color:#616E88;"># 安装 LTS 版本的 Node.js</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> lts</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> argon</span></span>\n<span class="line"><span style="color:#616E88;"># 安装 v16 的Node.js</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#B48EAD;"> 16</span></span>\n<span class="line"><span style="color:#616E88;"># 安装 Node.js 的预发行版本</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> nightly</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> rc</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> 16.0.0-rc.0</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> rc/14</span></span>\n<span class="line"><span style="color:#616E88;"># 安装最新版本的 Node.js</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> latest</span></span>\n<span class="line"><span style="color:#616E88;"># 安装指定版本的 Node.js 而不激活为当前版本</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> --global</span><span style="color:#A3BE8C;"> lts</span><span style="color:#B48EAD;"> 18</span><span style="color:#B48EAD;"> 20.0.1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 查看</span></span>\n<span class="line"><span style="color:#616E88;"># 查看本地Node.js列表</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> list</span></span>\n<span class="line"><span style="color:#616E88;"># 查看远程可用Node.js列表</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> list</span><span style="color:#A3BE8C;"> --remote</span></span>\n<span class="line"><span style="color:#616E88;"># 查看远程可用指定Node.js版本</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> list</span><span style="color:#A3BE8C;"> --remote</span><span style="color:#B48EAD;"> 16</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 移除</span></span>\n<span class="line"><span style="color:#616E88;"># 移除指定版本的 Node.js</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> env</span><span style="color:#A3BE8C;"> remove</span><span style="color:#A3BE8C;"> --global</span><span style="color:#B48EAD;"> 14.0.0</span><span style="color:#B48EAD;"> 16.2.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm-不推荐" tabindex="-1"><a class="header-anchor" href="#nvm-不推荐"><span><code>nvm</code>(不推荐)</span></a></h2><p>nodejs版本管理工具</p><blockquote><p>for windows: <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">nvm-windows</a><br> for mac/linux: <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm-sh/nvm</a></p></blockquote><p>设置镜像</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">nvm</span><span style="color:#A3BE8C;"> node_mirror</span><span style="color:#A3BE8C;"> https://npmmirror.com/mirrors/node/</span></span>\n<span class="line"><span style="color:#88C0D0;">nvm</span><span style="color:#A3BE8C;"> npm_mirror</span><span style="color:#A3BE8C;">  https://npmmirror.com/mirrors/npm/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-不推荐" tabindex="-1"><a class="header-anchor" href="#npm-不推荐"><span><code>npm</code>(不推荐)</span></a></h2><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> get</span><span style="color:#A3BE8C;"> registry</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2.设置淘宝镜像【不建议，影响其他指令】</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> set</span><span style="color:#A3BE8C;"> registry</span><span style="color:#A3BE8C;"> https://registry.npmmirror.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.NPM镜像的管理工具<br> 安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> -g</span><span style="color:#A3BE8C;"> nrm</span></span>\n<span class="line"><span style="color:#616E88;"># 或者</span></span>\n<span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> -g</span><span style="color:#A3BE8C;"> nrm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 查看所有镜像</span></span>\n<span class="line"><span style="color:#88C0D0;">nrm</span><span style="color:#A3BE8C;"> ls</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88C0D0;">  npm</span><span style="color:#A3BE8C;"> ----------</span><span style="color:#A3BE8C;"> https://registry.npmjs.org/</span></span>\n<span class="line"><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> yarn --------- https://registry.yarnpkg.com/</span></span>\n<span class="line"><span style="color:#88C0D0;">  tencent</span><span style="color:#A3BE8C;"> ------</span><span style="color:#A3BE8C;"> https://mirrors.cloud.tencent.com/npm/</span></span>\n<span class="line"><span style="color:#88C0D0;">  cnpm</span><span style="color:#A3BE8C;"> ---------</span><span style="color:#A3BE8C;"> https://r.cnpmjs.org/</span></span>\n<span class="line"><span style="color:#88C0D0;">  taobao</span><span style="color:#A3BE8C;"> -------</span><span style="color:#A3BE8C;"> https://registry.nlark.com/</span></span>\n<span class="line"><span style="color:#88C0D0;">  npmMirror</span><span style="color:#A3BE8C;"> ----</span><span style="color:#A3BE8C;"> https://skimdb.npmjs.com/registry/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 使用淘宝镜像</span></span>\n<span class="line"><span style="color:#88C0D0;">nrm</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> taobao</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.中国<code>NPM</code>镜像</p><p><a href="https://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">国内NPM镜像</a></p><h2 id="yarn-不推荐" tabindex="-1"><a class="header-anchor" href="#yarn-不推荐"><span><code>yarn</code>(不推荐)</span></a></h2><p><code>node</code>包管理工具</p><p>1.查看当前源地址</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">yarn</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> get</span><span style="color:#A3BE8C;"> registry</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2.设置淘宝镜像【不建议，影响其他指令】</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">yarn</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> set</span><span style="color:#A3BE8C;"> registry</span><span style="color:#A3BE8C;"> https://registry.npmmirror.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.YARN镜像的管理工具<br> 安装：<code>yarn global add yrm</code></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># 查看所有镜像</span></span>\n<span class="line"><span style="color:#88C0D0;">yrm</span><span style="color:#A3BE8C;"> ls</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88C0D0;">  npm</span><span style="color:#A3BE8C;"> ----------</span><span style="color:#A3BE8C;"> https://registry.npmjs.org/</span></span>\n<span class="line"><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> yarn --------- https://registry.yarnpkg.com/</span></span>\n<span class="line"><span style="color:#88C0D0;">  tencent</span><span style="color:#A3BE8C;"> ------</span><span style="color:#A3BE8C;"> https://mirrors.cloud.tencent.com/npm/</span></span>\n<span class="line"><span style="color:#88C0D0;">  cnpm</span><span style="color:#A3BE8C;"> ---------</span><span style="color:#A3BE8C;"> https://r.cnpmjs.org/</span></span>\n<span class="line"><span style="color:#88C0D0;">  taobao</span><span style="color:#A3BE8C;"> -------</span><span style="color:#A3BE8C;"> https://registry.nlark.com/</span></span>\n<span class="line"><span style="color:#88C0D0;">  npmMirror</span><span style="color:#A3BE8C;"> ----</span><span style="color:#A3BE8C;"> https://skimdb.npmjs.com/registry/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 使用淘宝镜像</span></span>\n<span class="line"><span style="color:#88C0D0;">yrm</span><span style="color:#A3BE8C;"> use</span><span style="color:#A3BE8C;"> taobao</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="electron镜像设置" tabindex="-1"><a class="header-anchor" href="#electron镜像设置"><span><code>electron</code>镜像设置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">pnpm</span><span style="color:#A3BE8C;"> config</span><span style="color:#A3BE8C;"> set</span><span style="color:#A3BE8C;"> electron_mirror</span><span style="color:#A3BE8C;"> https://npmmirror.com/mirrors/electron/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ubuntu镜像" tabindex="-1"><a class="header-anchor" href="#ubuntu镜像"><span><code>Ubuntu</code>镜像</span></a></h2><p>手动更改<br> 用你熟悉的编辑器打开：<code>/etc/apt/sources.list</code>,替换默认的连接</p><p>本人一般使用中科大源,这是一个中科大源镜像生成工具<a href="https://mirrors.ustc.edu.cn/repogen/" target="_blank" rel="noopener noreferrer">https://mirrors.ustc.edu.cn/repogen/</a>,包括<code>Archlinux</code>、<code>Debian</code>、<code>Ubuntu</code></p><p>其他<code>Ubuntu</code>国内镜像源请在头部连接中查找</p>',51),p={},r=(0,n(8538).A)(p,[["render",function(s,e){return(0,a.uX)(),(0,a.CE)("div",null,[l,(0,a.Q3)(" more "),o])}]]),i=JSON.parse('{"path":"/dev-tools/mirror_source.html","title":"镜像源收集","lang":"zh-CN","frontmatter":{"title":"镜像源收集","icon":"link","category":"开发必备","tag":["node","pnpm","linux"],"isOriginal":true,"timeline":true,"date":"2021-07-28T00:00:00.000Z","description":"开发过程中常用的镜像资源收集记录","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/dev-tools/mirror_source.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"镜像源收集"}],["meta",{"property":"og:description","content":"开发过程中常用的镜像资源收集记录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-21T09:05:01.000Z"}],["meta",{"property":"article:author","content":"hanekawa-shiki"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"pnpm"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2021-07-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T09:05:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"镜像源收集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-21T09:05:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hanekawa-shiki\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"headers":[{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[]},{"level":2,"title":"nvm(不推荐)","slug":"nvm-不推荐","link":"#nvm-不推荐","children":[]},{"level":2,"title":"npm(不推荐)","slug":"npm-不推荐","link":"#npm-不推荐","children":[]},{"level":2,"title":"yarn(不推荐)","slug":"yarn-不推荐","link":"#yarn-不推荐","children":[]},{"level":2,"title":"electron镜像设置","slug":"electron镜像设置","link":"#electron镜像设置","children":[]},{"level":2,"title":"Ubuntu镜像","slug":"ubuntu镜像","link":"#ubuntu镜像","children":[]}],"git":{"createdTime":1655200609000,"updatedTime":1708506301000,"contributors":[{"name":"shiki","email":"kamiacgxu@gmail.com","commits":11},{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":2},{"name":"kamishima-kaede","email":"kamiacgxu@gmail.com","commits":1}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"dev-tools/mirror_source.md","localizedDate":"2021年7月28日","excerpt":"<p>开发过程中常用的镜像资源收集记录</p>\\n","autoDesc":true}')},8538:(s,e)=>{e.A=(s,e)=>{const n=s.__vccOpts||s;for(const[s,a]of e)n[s]=a;return n}}}]);