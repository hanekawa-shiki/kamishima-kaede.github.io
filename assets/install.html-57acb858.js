import{_ as o,W as l,X as r,Z as e,a0 as n,a1 as a,$ as t,C as c}from"./framework-18b71f17.js";const d={},i=e("h1",{id:"docker安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker安装","aria-hidden":"true"},"#"),n(),e("code",null,"Docker"),n("安装")],-1),u=e("code",null,"Docker",-1),p={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},h=t('<p>本人是在<code>Ubuntu 20.04</code>中安装使用<code>Docker</code>，使用的是中科大<code>Docker CE</code>源，<code>Docker Hub</code>镜像加速器配置的是阿里云镜像。</p><h2 id="安装docker-ce" tabindex="-1"><a class="header-anchor" href="#安装docker-ce" aria-hidden="true">#</a> 安装<code>Docker CE</code></h2>',2),k={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),m={href:"https://mirrors.ustc.edu.cn/help/docker-ce.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>你可以参考以上文档自己安装，也可以直接复制下面我整理好的命令安装。</p><p>1.卸载旧版<code>Docker</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.使用<code>apt</code>软件库进行安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg <span class="token punctuation">\\</span>
    lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加<code>Docker</code>的官方<code>GPG</code>密钥。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置版本库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>Docker</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装最新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试验证<code>Docker</code>是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置镜像加速" tabindex="-1"><a class="header-anchor" href="#设置镜像加速" aria-hidden="true">#</a> 设置镜像加速</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://&lt;your_code&gt;.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以设置多个镜像地址，一下是常用<code>Docker Hub</code>镜像加速器列表</p>`,18),v=e("thead",null,[e("tr",null,[e("th",null,"镜像加速器"),e("th",null,"镜像加速器地址"),e("th",null,[n("专属加速器"),e("a",{href:"#",title:"需登录后获取平台分配的专属加速器"},"？")]),e("th",null,[n("其它加速"),e("a",{href:"#",title:"支持哪些镜像来源的镜像加速"},"？")])])],-1),g={href:"https://github.com/DaoCloud/public-image-mirror",target:"_blank",rel:"noopener noreferrer"},f=e("td",null,[e("code",null,"https://docker.m.daocloud.io")],-1),D=e("td",null,null,-1),x=e("td",null,"Docker Hub、GCR、K8S、GHCR、Quay、NVCR 等",-1),y={href:"https://mirrors.ustc.edu.cn/help/dockerhub.html",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,[e("code",null,"https://docker.mirrors.ustc.edu.cn")],-1),E={href:"https://mirrors.ustc.edu.cn/help/dockerhub.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/ustclug/mirrorrequest/issues/91",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/ustclug/mirrorrequest/issues/135",target:"_blank",rel:"noopener noreferrer"},R={href:"https://cr.console.aliyun.com",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,[e("code",null,"https://<your_code>.mirror.aliyuncs.com")],-1),N=e("td",null,"需登录，系统分配",-1),V=e("td",null,"Docker Hub",-1),B={href:"https://c.163yun.com/hub",target:"_blank",rel:"noopener noreferrer"},j=e("td",null,[e("code",null,"https://hub-mirror.c.163.com")],-1),A=e("td",null,null,-1),F=e("td",null,"Docker Hub",-1),S={href:"https://dockerproxy.com",target:"_blank",rel:"noopener noreferrer"},L=e("td",null,[e("code",null,"https://dockerproxy.com")],-1),Q=e("td",null,null,-1),$=e("td",null,"Docker Hub、GCR、K8S、GHCR",-1),I={href:"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},K=e("td",null,[e("code",null,"https://mirror.baidubce.com")],-1),O=e("td",null,null,-1),U=e("td",null,"Docker Hub",-1),w={href:"https://doc.nju.edu.cn/books/35f4a",target:"_blank",rel:"noopener noreferrer"},z=e("td",null,[e("code",null,"https://docker.nju.edu.cn")],-1),P=e("td",null,null,-1),T=e("td",null,"Docker Hub、GCR、GHCR、Quay、NVCR 等",-1);function W(X,Y){const s=c("ExternalLinkIcon");return l(),r("div",null,[i,e("p",null,[u,n("安装方式可以参照"),e("a",p,[n("官方文档"),a(s)])]),h,e("p",null,[e("a",k,[n("官网Ubuntu安装Docker步骤"),a(s)]),b,e("a",m,[n("Docker CE源"),a(s)])]),_,e("table",null,[v,e("tbody",null,[e("tr",null,[e("td",null,[e("a",g,[n("DaoCloud 镜像站"),a(s)])]),f,D,x]),e("tr",null,[e("td",null,[e("a",y,[n("科大镜像站"),a(s)])]),C,e("td",null,[e("a",E,[n("仅供内部访问"),a(s)])]),e("td",null,[n("Docker Hub、"),e("a",H,[n("GCR"),a(s)]),n("、"),e("a",G,[n("Quay"),a(s)])])]),e("tr",null,[e("td",null,[e("a",R,[n("阿里云"),a(s)])]),q,N,V]),e("tr",null,[e("td",null,[e("a",B,[n("网易云"),a(s)])]),j,A,F]),e("tr",null,[e("td",null,[e("a",S,[n("Docker 镜像代理"),a(s)])]),L,Q,$]),e("tr",null,[e("td",null,[e("a",I,[n("百度云"),a(s)])]),K,O,U]),e("tr",null,[e("td",null,[e("a",w,[n("南京大学镜像站"),a(s)])]),z,P,T])])])])}const J=o(d,[["render",W],["__file","install.html.vue"]]);export{J as default};
