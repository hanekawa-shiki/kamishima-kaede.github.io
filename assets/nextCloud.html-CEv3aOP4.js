import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as d,e as r,b as e,d as a,a as s,f as c}from"./app-BmsF6tE2.js";const o="/assets/001-DhbwBGTk.png",p="/assets/002-BWUncoC3.png",u={},m=e("p",null,[a("在"),e("code",null,"Docker"),a("部署"),e("code",null,"NextCloud"),a("服务，并使用"),e("code",null,"MySQL"),a("和"),e("code",null,"Redis"),a("做数据库。")],-1),v=e("h2",{id:"背景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#背景"},[e("span",null,"背景")])],-1),h={href:"https://github.com/boredazfcuk/docker-icloudpd",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"icloud",-1),k=e("code",null,"NextCloud",-1),g={href:"https://nextcloud.com/",target:"_blank",rel:"noopener noreferrer"},x=c(`<p>此次的部署用的<code>Docker</code>环境，使用<code>MySQL</code>做数据库，利用<code>Redis</code>做服务缓存加速。</p><h2 id="自定义docker网络" tabindex="-1"><a class="header-anchor" href="#自定义docker网络"><span>自定义<code>Docker</code>网络</span></a></h2><p>由于后面各个容器之间需要通信，所以提前准备自定义网络。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create nextcloud <span class="token parameter variable">--driver</span> bridge
<span class="token comment"># nextcloud 是自定义网络名，可以随便取</span>
<span class="token comment"># --driver 指定网络模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">网络模式</th><th style="text-align:left;">简介</th></tr></thead><tbody><tr><td style="text-align:left;">bridge</td><td style="text-align:left;">为每一个容器分配、设置<code>IP</code>等，并将容器连接到一个<code>docker0</code>虚拟网桥，默认为该模式。</td></tr><tr><td style="text-align:left;">host</td><td style="text-align:left;">容器将不会虚拟出自己的网卡，配置自己的<code>IP</code>等，而是使用宿主机的<code>IP</code>和端口。</td></tr><tr><td style="text-align:left;">none</td><td style="text-align:left;">容器有独立的<code>Network namespace</code>，但并没有对其进行任何网络设置，如分配<code>veth pair</code>和网桥连接，<code>IP</code>等。</td></tr><tr><td style="text-align:left;">container</td><td style="text-align:left;">新创建的容器不会创建自己的网卡和配置自己的 IP，而是和一个指定的容器共享<code>IP</code>、端口范围等。</td></tr></tbody></table><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装<code>MySQL</code></span></a></h2><h3 id="_1-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-拉取镜像"><span>1.拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-启动服务" tabindex="-1"><a class="header-anchor" href="#_2-启动服务"><span>2.启动服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>yourMysqlPwd <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> nextcloud <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 mysql:8.0.33

<span class="token comment"># --name mysql 容器名字可以随意定义，这里一定要加！后面容器间通行会用到</span>
<span class="token comment"># /mysql/data 宿主机目录，用来做mysql容器数据持久化用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使用dbeaver测试数据库连接" tabindex="-1"><a class="header-anchor" href="#_3-使用dbeaver测试数据库连接"><span>3.使用<code>DBeaver</code>测试数据库连接</span></a></h3><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设置<code>allowPublicKeyRetrieval</code>为<code>TRUE</code></p><p>点击完成测试连接。</p><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装<code>Redis</code></span></a></h2><h3 id="_1-拉取镜像-1" tabindex="-1"><a class="header-anchor" href="#_1-拉取镜像-1"><span>1.拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:7.0.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-启动服务-1" tabindex="-1"><a class="header-anchor" href="#_2-启动服务-1"><span>2.启动服务</span></a></h3><p>下载<code>redis</code>配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-P</span> /redis/conf http://download.redis.io/redis-stable/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者手动创建配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> /redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加以下内容到conf文件中</span>
protected-mode no
appendonly <span class="token function">yes</span>
requirepass redisPwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以配置文件形式启动</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /redis/conf:/etc/redis/conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /redis/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:7.0.11 redis-server /etc/redis/conf/redis.conf

<span class="token comment"># /redis/conf 配置文件存放的本地目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-redis测试" tabindex="-1"><a class="header-anchor" href="#_3-redis测试"><span>3.<code>Redis</code>测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 通过 Docker 命令进入 Redis 容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis /bin/bash

<span class="token comment"># 进入 Redis 控制台</span>
redis-cli

<span class="token comment"># 查看当前密码</span>
config get requirepass

<span class="token comment"># 若出现(error) NOAUTH Authentication required.错误，则使用 auth 密码 来认证密码</span>
auth 你的密码

<span class="token comment"># 添加一个变量为 key 为 name , value 为 bella 的内容</span>
<span class="token builtin class-name">set</span> name bella
<span class="token comment"># 查看 key 为 name 的 value 值</span>
get name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装nextcloud" tabindex="-1"><a class="header-anchor" href="#安装nextcloud"><span>安装<code>NextCloud</code></span></a></h2><h3 id="_1-拉取镜像-2" tabindex="-1"><a class="header-anchor" href="#_1-拉取镜像-2"><span>1.拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nextcloud:26.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-启动服务-2" tabindex="-1"><a class="header-anchor" href="#_2-启动服务-2"><span>2.启动服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nextcloud <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/xxx/www/nextcloud/html:/var/www/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/xxx/www/nextcloud/apps:/var/www/html/custom_apps <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/xxx/www/nextcloud/config:/var/www/html/config <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/xxx/www/nextcloud/data:/var/www/html/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/xxx/www/nextcloud/theme:/var/www/html/themes <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> nextcloud <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token punctuation">\\</span>
nextcloud:26.0.1

<span class="token comment"># 参数解释：</span>
<span class="token comment"># docker run：启动容器</span>
<span class="token comment"># -d：后台启动</span>
<span class="token comment"># --restart=always：docker重启该容器跟着重启</span>
<span class="token comment"># --nmae nextcloud：自定义容器名称</span>
<span class="token comment"># -p 8080:80：将服务器的80端口映射到容器的80端口</span>
<span class="token comment"># nextcloud:latest：选择启动的镜像和版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-初次访问并配置" tabindex="-1"><a class="header-anchor" href="#_3-初次访问并配置"><span>3.初次访问并配置</span></a></h3>`,34),_={href:"http://xn--dockerip-ch0m705ekrl24skzo:8080",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"按照提示创建管理员账户和密码&指定数据库，这部分忘记截图了，以后想起来再补。。。",-1),y=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考"},[e("span",null,"参考")])],-1),w={href:"https://www.cnblogs.com/mrhelloworld/p/docker11.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://juejin.cn/post/7165163308343885838",target:"_blank",rel:"noopener noreferrer"},N={href:"https://learnku.com/articles/44349",target:"_blank",rel:"noopener noreferrer"};function D(R,S){const n=l("ExternalLinkIcon");return i(),d("div",null,[m,r(" more "),v,e("p",null,[a("由于最近"),e("a",h,[a("icloudpd"),s(n)]),a("在国内无法正常同步"),b,a("照片，遂寻找替代方案。经过一段时间时间的筛选，最后决定使用"),k,a("项目部署服务。"),e("a",g,[a("NextCloud"),s(n)]),a("是一套主打安全、合规的开源私有云存储项目。")]),x,e("p",null,[a("本地访问："),e("a",_,[a("http://docker所在宿主机ip:8080"),s(n)])]),f,y,e("ul",null,[e("li",null,[a("[1] "),e("a",w,[a("Docker 网络模式详解及容器间网络通信"),s(n)])]),e("li",null,[a("[2] "),e("a",C,[a("docker安装部署NextCloud私人网盘的方法步骤"),s(n)])]),e("li",null,[a("[3] "),e("a",N,[a("docker中MySQL备份及恢复"),s(n)])])])])}const L=t(u,[["render",D],["__file","nextCloud.html.vue"]]),P=JSON.parse('{"path":"/service/nextCloud.html","title":"Docker部署NextCloud指南","lang":"zh-CN","frontmatter":{"title":"Docker部署NextCloud指南","icon":"link","category":"service","tag":["Docker","NextCloud","MySQL","Redis"],"isOriginal":true,"timeline":true,"date":"2023-05-22T00:00:00.000Z","article":true,"description":"在Docker部署NextCloud服务，并使用MySQL和Redis做数据库。 背景 由于最近icloudpd在国内无法正常同步icloud照片，遂寻找替代方案。经过一段时间时间的筛选，最后决定使用NextCloud项目部署服务。NextCloud是一套主打安全、合规的开源私有云存储项目。 此次的部署用的Docker环境，使用MySQL做数据库，利用...","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/service/nextCloud.html"}],["meta",{"property":"og:site_name","content":"Kamishima-kaede"}],["meta",{"property":"og:title","content":"Docker部署NextCloud指南"}],["meta",{"property":"og:description","content":"在Docker部署NextCloud服务，并使用MySQL和Redis做数据库。 背景 由于最近icloudpd在国内无法正常同步icloud照片，遂寻找替代方案。经过一段时间时间的筛选，最后决定使用NextCloud项目部署服务。NextCloud是一套主打安全、合规的开源私有云存储项目。 此次的部署用的Docker环境，使用MySQL做数据库，利用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T07:32:19.000Z"}],["meta",{"property":"article:author","content":"kamishima-kaede"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"NextCloud"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2023-05-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T07:32:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker部署NextCloud指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T07:32:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kamishima-kaede\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"自定义Docker网络","slug":"自定义docker网络","link":"#自定义docker网络","children":[]},{"level":2,"title":"安装MySQL","slug":"安装mysql","link":"#安装mysql","children":[{"level":3,"title":"1.拉取镜像","slug":"_1-拉取镜像","link":"#_1-拉取镜像","children":[]},{"level":3,"title":"2.启动服务","slug":"_2-启动服务","link":"#_2-启动服务","children":[]},{"level":3,"title":"3.使用DBeaver测试数据库连接","slug":"_3-使用dbeaver测试数据库连接","link":"#_3-使用dbeaver测试数据库连接","children":[]}]},{"level":2,"title":"安装Redis","slug":"安装redis","link":"#安装redis","children":[{"level":3,"title":"1.拉取镜像","slug":"_1-拉取镜像-1","link":"#_1-拉取镜像-1","children":[]},{"level":3,"title":"2.启动服务","slug":"_2-启动服务-1","link":"#_2-启动服务-1","children":[]},{"level":3,"title":"3.Redis测试","slug":"_3-redis测试","link":"#_3-redis测试","children":[]}]},{"level":2,"title":"安装NextCloud","slug":"安装nextcloud","link":"#安装nextcloud","children":[{"level":3,"title":"1.拉取镜像","slug":"_1-拉取镜像-2","link":"#_1-拉取镜像-2","children":[]},{"level":3,"title":"2.启动服务","slug":"_2-启动服务-2","link":"#_2-启动服务-2","children":[]},{"level":3,"title":"3.初次访问并配置","slug":"_3-初次访问并配置","link":"#_3-初次访问并配置","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1682432811000,"updatedTime":1684740739000,"contributors":[{"name":"shiki ryougi","email":"shikiryougi@shikideMacBook.local","commits":3}]},"readingTime":{"minutes":2.95,"words":885},"filePathRelative":"service/nextCloud.md","localizedDate":"2023年5月22日","excerpt":"<p>在<code>Docker</code>部署<code>NextCloud</code>服务，并使用<code>MySQL</code>和<code>Redis</code>做数据库。</p>\\n","autoDesc":true}');export{L as comp,P as data};
