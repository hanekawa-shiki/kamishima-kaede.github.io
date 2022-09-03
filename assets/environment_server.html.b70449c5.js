import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as o,b as n,a,e as i,d as e,r as l}from"./app.e66db888.js";const t={},r=i(`<h1 id="\u73AF\u5883\u670D\u52A1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u670D\u52A1\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u670D\u52A1\u914D\u7F6E</h1><p>\u4E00\u53F0\u5B89\u88C5\u6709<code>node</code>\u548C<code>nginx</code>\u7684<code>linux</code>\u670D\u52A1\u5668,\u8FD9\u91CC\u7528\u7684<code>linux</code>\u53D1\u884C\u7248\u662F<code>ubuntu</code></p><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> <code>git</code></h2><p>\u53EF\u4EE5\u901A\u8FC7<code>git version</code>\u547D\u4EE4\u67E5\u770B\u7248\u672C\u53F7,\u5982\u679C\u6CA1\u6709\u5219\u6CA1\u6709\u5B89\u88C5</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;\u7528\u6237\u540D&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;\u90AE\u7BB1\u5730\u5740&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u6210ssh\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210ssh\u5BC6\u94A5" aria-hidden="true">#</a> \u751F\u6210ssh\u5BC6\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -C <span class="token string">&#39;you email address@gmail.com&#39;</span> -t rsa
<span class="token comment"># \u4F1A\u5728\u7528\u6237\u76EE\u5F55~/.ssh/\u4E0B\u5EFA\u7ACB\u76F8\u5E94\u7684\u5BC6\u94A5\u6587\u4EF6\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u5165<code>~/.ssh</code>\u6587\u4EF6\u5939\uFF0C\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00id_rsa.pub\u6587\u4EF6\uFF0C\u590D\u5236\u5176\u4E2D\u6240\u6709\u5185\u5BB9\u3002</span>
<span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u5236\u516C\u94A5\u5E76\u5728github\u4E2D\u914D\u7F6ESSH\u516C\u94A5</p><h3 id="\u6D4B\u8BD5\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u8FDE\u63A5" aria-hidden="true">#</a> \u6D4B\u8BD5\u8FDE\u63A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> <code>Node</code></h2>`,16),p=e("\u63A8\u8350\u4F7F"),u={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},v=e("nvm"),m=e("\u7248\u672C\u7BA1\u7406\u5DE5\u5177\u7BA1\u7406"),h=n("code",null,"node",-1),b=e("\u7248\u672C"),g=i(`<p>\u5B89\u88C5<code>nvm</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5B89\u88C5\u5B8C\u6210\u540E\u52A1\u5FC5\u91CD\u542F!!</strong></p><p>\u5B89\u88C5<code>node</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">16.14</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5207\u6362\u5E76\u4F7F\u7528<code>node</code>\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use <span class="token number">16.14</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),f=e("\u5176\u4ED6\u64CD\u4F5C\u53C2\u8003"),_={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},x=e("nvm"),k=i(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> <code>Nginx</code></h2><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>\u66F4\u65B0\u5305\u5217\u8868</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u670D\u52A1</span>
nginx

<span class="token comment"># \u5173\u95ED\u670D\u52A1</span>
nginx -s stop
<span class="token comment"># \u6216\u8005</span>
nginx -s quit

<span class="token comment"># \u66F4\u65B0\u914D\u7F6E\u540E\u91CD\u65B0\u8F7D\u5165</span>
nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u865A\u62DF\u673A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u865A\u62DF\u673A\u914D\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0\u865A\u62DF\u673A\u914D\u7F6E</h3><p>\u5207\u5230<code>nginx</code>\u914D\u7F6E\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B0\u5EFA\u865A\u62DF\u673A\u914D\u7F6E\u6587\u4EF6,\u63A8\u8350\u4F7F\u7528\u7F51\u7AD9\u57DF\u540D\u4F5C\u4E3A\u6587\u4EF6\u540D\u65B0\u5EFA\u6587\u4EF6.</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F8B\u5982\u8BE5\u914D\u7F6E\u662F\u4E3A\u57DF\u540D\u4E3A<code>fuckqq.com</code>\u670D\u52A1\u7684,\u90A3\u4E48\u6587\u4EF6\u540D\u4E3A<code>fuckqq.com.conf</code>,\u5982\u679C\u6709\u591A\u4E2A\u57DF\u540D\u914D\u7F6E\u8FD9\u4E48\u547D\u540D\u65B9\u4FBF\u4EE5\u540E\u7EF4\u62A4</p></div><p>\u914D\u7F6E\u53C2\u8003,\u6839\u636E\u81EA\u8EAB\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen       80;
    # \u57DF\u540D\uFF0C\u591A\u4E2A\u4EE5\u7A7A\u683C\u5206\u5F00
    server_name  fuckqq.com blog.fuckqq.com www.fuckqq.com;

    # Gzip Compression
    gzip on;  #\u662F\u5426\u5F00\u542Fgzip\u6A21\u5757 on\u8868\u793A\u5F00\u542F off\u8868\u793A\u5173\u95ED
    gzip_comp_level 6;  #\u538B\u7F29\u7EA7\u522B1-9\uFF0C\u6570\u5B57\u8D8A\u5927\u538B\u7F29\u7684\u8D8A\u597D\uFF0C\u4E5F\u8D8A\u5360\u7528CPU\u65F6\u95F4
    gzip_min_length 10k;  #\u8BBE\u7F6E\u5141\u8BB8\u538B\u7F29\u7684\u6700\u5C0F\u5B57\u8282
    gzip_types text/plain text/css application/json application/javascript text/javascript;  #\u8BBE\u7F6E\u538B\u7F29\u7684\u6587\u4EF6\u7C7B\u578B
    gzip_vary on;  #\u52A0\u4E0Ahttp\u5934\u4FE1\u606FVary: Accept-Encoding\u7ED9\u540E\u7AEF\u4EE3\u7406\u670D\u52A1\u5668\u8BC6\u522B\u662F\u5426\u542F\u7528 gzip \u538B\u7F29

    location / {
        root   /home/dist; #\u9759\u6001\u7F51\u7AD9\u6839\u76EE\u5F55
        index  index.html;
        gzip_static on;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u914D\u7F6E\u540E,\u6267\u884C\u68C0\u67E5\u914D\u7F6E\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> nginx -t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u63D0\u8D77\u9519\u8BEF\u4FE1\u606F,\u8BF7\u5584\u7528\u641C\u7D22\u5F15\u64CE\u89E3\u51B3</p><p>\u6700\u540E\u91CD\u542F<code>nginx</code>\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx\u53CD\u5411\u4EE3\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u53CD\u5411\u4EE3\u7406\u914D\u7F6E" aria-hidden="true">#</a> <code>nginx</code>\u53CD\u5411\u4EE3\u7406\u914D\u7F6E</h3><p>\u539F\u7406:</p><p>\u9996\u5148\u5F53\u7AEF\u53E3\u662F80\u7684\u65F6\u5019\uFF0C \u57DF\u540D\u8BBF\u95EE\u7684\u65F6\u5019 \u662F\u53EF\u4EE5\u7701\u7565\u7AEF\u53E3\u7684\uFF0C\u76F4\u63A5\u57DF\u540D\u8BBF\u95EE\uFF0C<code>nginx</code>\u4F1A\u76D1\u542C80\u7AEF\u53E3\uFF0C\u540C\u65F6\u6839\u636E\u4E0D\u540C\u7684\u57DF\u540D\uFF0C\u628A\u6D41\u91CF\u5206\u914D\u7ED9<code>Node</code>\u76F8\u5E94\u7684\u7AEF\u53E3\u670D\u52A1\u3002</p>`,23),w=e("\u8865\u5145\u77E5\u8BC6\u70B9\uFF1A"),y={href:"https://www.cnblogs.com/taostaryu/p/10547132.html",target:"_blank",rel:"noopener noreferrer"},S=e("\u6B63\u5411\u4EE3\u7406\u53CD\u5411\u4EE3\u7406\u7684\u533A\u522B"),q=i(`<p>\u914D\u7F6E:</p><p>\u5728<code>/etc/nginx/conf.d</code>\u6587\u4EF6\u5939\u4E0B\u9762\u65B0\u589E\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/conf.d/fuckqq-5000.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6587\u4EF6\u547D\u540D\u53EF\u4EE5\u7528\u4E0A\u9762\u7684\u547D\u540D\u65B9\u5F0F\uFF0C\u770B\u4E00\u4E0B\u914D\u7F6E\u6587\u4EF6\uFF0C\u4FBF\u77E5\u9053\u662F\u54EA\u4E2A\u57DF\u540D\u5BF9\u5E94\u5230\u54EA\u4E2A\u7AEF\u53E3\u3002</p><p>\u56E0\u4E3A\u5C06\u6765\u53EF\u80FD\u4F1A\u6709\u591A\u4E2A\u9879\u76EE\u5BF9\u5E94\u670D\u52A1\u5668\u540E\u7AEF\u7684\u591A\u4E2A\u670D\u52A1\uFF0C\u6240\u4EE5\u8981\u8003\u8651\u8FD9\u79CD\u8D1F\u8F7D\u5747\u8861\u7684\u8FD9\u79CD\u573A\u666F\u3002\u8FD9\u65F6\u5019\u901A\u8FC7\u4EE5\u4E0B\u914D\u7F6E\u6765\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u901A\u8FC7 upstream \u6211\u4EEC\u53EF\u4EE5\u8BBE\u5B9A\u4E00\u4E2A\u7B80\u5355\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\uFF0C\u4EE5\u5E94\u5BF9\u5C06\u6765\u53EF\u80FD\u7684\u5347\u7EA7
# \u9996\u5148\u5B9A\u4E49\u4E00\u4E2A server \u96C6\u7FA4 gougou\uFF0C\u91CC\u9762\u53EF\u4EE5\u52A0\u591A\u4E2A server\uFF0C\u6BCF\u4E2A server \u5BF9\u5E94\u7684\u503C\u53EF\u4EE5\u7528\u57DF\u540D\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7528 IP\uFF0C# \u4F46\u6211\u4EEC\u901A\u5E38\u4E0D\u4F1A\u7528 IP \u6765\u8BBF\u95EE\uFF0C\u800C\u662F\u901A\u8FC7\u57DF\u540D:
upstream nodeStatic {
    server 127.0.0.1:5000;
}
server {
    listen 80;
    server_name xxx.com; // xxx.com \u662F\u4F60\u7684\u57DF\u540D
    # Gzip Compression
    gzip on;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_min_length  1000;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_buffers 16 8k;
    
    location / {
        # remote_addr \u4EE3\u8868\u5BA2\u6237\u7AEF\u7684 IP
        proxy_set_header X-Real-IP $remote_addr;
        # proxy_add_x_forwarded_for \u83B7\u53D6\u771F\u5B9E\u7684 IP
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # http_host \u8868\u793A\u8BF7\u6C42\u7684 host \u5934
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
      
        # proxy_pass \u6307\u4EE4\u5B9E\u73B0\u4EE3\u7406\u3002\u628A\u57DF\u540D\u4EE3\u7406\u5230\u96C6\u7FA4\u540D\u4E0A\u9762
        proxy_pass http://nodeStatic;
        proxy_redirect off;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95EDnginx\u7248\u672C\u53F7\u9732\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDnginx\u7248\u672C\u53F7\u9732\u51FA" aria-hidden="true">#</a> \u5173\u95ED<code>nginx</code>\u7248\u672C\u53F7\u9732\u51FA</h3><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u68C0\u67E5\u4E0B<code>Nginx</code>\u7684\u7248\u672C\uFF1A<code>nginx -v</code></p><p>\u8FD9\u4E2A\u7248\u672C\u53F7\u901A\u5E38\u53EF\u4EE5\u5728 Web \u7AEF\u7684 header \u91CC\u770B\u5230\u3002\u5B89\u5168\u8D77\u89C1\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u9690\u85CF\u6389\uFF0C\u5982\u4E0B\u6253\u5F00<code>nginx.conf</code>\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A<code>nginx.conf</code>\u6587\u4EF6\u4E2D\u7684<code>server_tokens on</code>\u6539\u6210<code>server_tokens off</code>\u5C31\u53EF\u4EE5\u4E86</p><p>\u6709\u7684\u914D\u7F6E\u91CC\u6CA1\u6709<code>server_tokens on</code>\u7684 \u76F4\u63A5\u6DFB\u52A0<code>server_tokens off</code>\u5373\u53EF</p><h2 id="\u514D\u8D39ssl\u8BC1\u4E66\u542F\u7528" tabindex="-1"><a class="header-anchor" href="#\u514D\u8D39ssl\u8BC1\u4E66\u542F\u7528" aria-hidden="true">#</a> \u514D\u8D39<code>SSL</code>\u8BC1\u4E66\u542F\u7528</h2>`,13),z=e("\u8FD9\u91CC\u4F7F\u7528"),U=n("code",null,"Certbot",-1),F=e("\u83B7\u53D6\u8BC1\u4E66,\u4EE5\u4E0B\u64CD\u4F5C\u9002\u7528\u4E8E"),N=n("code",null,"ubuntu + nginx",-1),C=e(",\u5176\u4ED6\u73AF\u5883\u53EF\u4EE5\u53C2\u8003"),L={href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},W=e("Certbot\u5B98\u7F51"),j=i(`<p>1.\u5B89\u88C5<code>snapd</code>,\u901A\u8FC7<code>snapd</code>\u5B89\u88C5<code>certbot</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5snapd</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> snapd

<span class="token comment"># \u5B89\u88C5certbot</span>
<span class="token comment"># \u5728\u5B89\u88C5 Certbot \u4E4B\u524D\uFF0C\u6700\u597D\u5148\u79FB\u9664\u5386\u53F2\u5FEB\u7167\u3002</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove certbot
<span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> --classic certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u751F\u6210\u8BC1\u4E66</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u81EA\u52A8\u914D\u7F6E</span>
<span class="token function">sudo</span> certbot --nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5B89\u88C5\u5B8C\u6210<code>cerbot</code>\u540E,\u6267\u884C<code>apt update</code>\u53EF\u80FD\u4F1A\u9047\u5230\u4EE5\u4E0B\u95EE\u9898:</p><p><code>E: The repository &#39;http://ppa.launchpad.net/certbot/certbot/ubuntu focal Release&#39; does not have a Release file</code></p><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> apt-add-repository -r ppa:certbot/certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u518D\u66F4\u65B0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u5B89\u88C5-2" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-2" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> certbot --nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u4F1A\u63D0\u793A\u4F60\u8F93\u5165\u4F60\u7684\u90AE\u7BB1\uFF0C\u4F1A\u68C0\u6D4B\u5230\u4F60nginx\u914D\u7F6E\u7684\u57DF\u540D\uFF0C\u9009\u62E9\u4F60\u8981\u751F\u6210\u8BC1\u4E66\u7684\u57DF\u540D\u5E8F\u53F7\u5373\u53EF\uFF1B\u8FD8\u4F1A\u63D0\u793A\u4F60\u662F\u5426\u5728\u7528\u6237\u4F7F\u7528http\u8BBF\u95EE\u7684\u65F6\u5019\u81EA\u52A8\u8DF3\u8F6C\u5230https\u8BBF\u95EE\uFF0C\u5E8F\u53F71\u662F\u4E0D\u8DF3\u8F6C\uFF0C\u5E8F\u53F72\u662F\u81EA\u52A8\u8DF3\u8F6C\uFF0C\u5EFA\u8BAE\u90092</p><p>\u5176\u4ED6\u64CD\u4F5C\u6839\u636E\u63D0\u793A\u8FDB\u884C.</p><p>\u6BCF\u6B21\u751F\u6210\u7684\u8BC1\u4E66\u6709\u6548\u671F\u662F90\u5929\uFF0C\u5230\u671F\u540E\u9700\u8981\u91CD\u65B0\u7533\u8BF7\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u8BC1\u4E66\u5230\u671F\u524D\u81EA\u52A8\u7EED\u8BA2\u53EF\u4EE5\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837certbot\u4F1A\u5728\u8BC1\u4E66\u5230\u671F\u65F6\u81EA\u52A8\u5E2E\u4F60\u7EED\u8BA2\u8BC1\u4E66\uFF0C\u8FD9\u5C31\u76F8\u5F53\u4E8E\u4F60\u6709\u4E86\u6C38\u4E45\u7684\u514D\u8D39SSL\u8BC1\u4E66\u4E86</p><h2 id="ufw\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#ufw\u9632\u706B\u5899" aria-hidden="true">#</a> <code>UFW</code>\u9632\u706B\u5899</h2><p><code>Ubuntu</code>\u968F\u9644\u4E86\u4E00\u4E2A\u79F0\u4E3A<code>UFW</code>\u7684\u9632\u706B\u5899\u914D\u7F6E\u5DE5\u5177\u3002</p><p>\u9632\u706B\u5899\u662F\u7528\u4E8E\u76D1\u63A7\u548C\u8FC7\u6EE4\u4F20\u5165\u548C\u4F20\u51FA\u7F51\u7EDC\u6D41\u91CF\u7684\u5DE5\u5177\u3002 \u5B83\u901A\u8FC7\u5B9A\u4E49\u4E00\u7EC4\u786E\u5B9A\u662F\u5141\u8BB8\u8FD8\u662F\u963B\u6B62\u7279\u5B9A\u6D41\u91CF\u7684\u5B89\u5168\u89C4\u5219\u6765\u5DE5\u4F5C</p><p>\u5E38\u7528\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ufw

<span class="token comment"># \u68C0\u67E5 UFW \u72B6\u6001</span>
<span class="token function">sudo</span> ufw status verbose
<span class="token comment"># \u60A8\u53EF\u4EE5\u901A\u8FC7\u952E\u5165\u4EE5\u4E0B\u547D\u4EE4\u5217\u51FA\u670D\u52A1\u5668\u4E0A\u6240\u6709\u53EF\u7528\u7684\u5E94\u7528\u7A0B\u5E8F\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sudo</span> ufw app list
<span class="token comment"># \u8981\u67E5\u627E\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u5305\u542B\u7684\u9632\u706B\u5899\u89C4\u5219\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token function">sudo</span> ufw app info <span class="token string">&#39;Nginx Full&#39;</span>

<span class="token comment"># \u542F\u7528UFW</span>
<span class="token comment"># \u5982\u679C\u8981\u4ECE\u8FDC\u7A0B\u4F4D\u7F6E\u8FDE\u63A5\u5230Ubuntu\uFF0C\u5728\u542F\u7528UFW\u9632\u706B\u5899\u4E4B\u524D\uFF0C\u5FC5\u987B\u660E\u786E\u5141\u8BB8SSH\u7684\u8FDE\u63A5\u3002 \u5426\u5219\uFF0C\u60A8\u5C06\u65E0\u6CD5\u8FDE\u63A5\u5230\u8BA1\u7B97\u673A\u3002\u8981\u5C06\u60A8\u7684UFW\u9632\u706B\u5899\u914D\u7F6E\u4E3A\u5141\u8BB8SSH\u7684\u8FDE\u63A5\uFF0C\u8BF7\u952E\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token function">sudo</span> ufw allow <span class="token function">ssh</span>

<span class="token comment"># \u7981\u7528</span>
<span class="token function">sudo</span> ufw disable
<span class="token comment"># \u542F\u7528</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,18),I=e("[1] "),P={href:"https://segmentfault.com/a/1190000016555800",target:"_blank",rel:"noopener noreferrer"},E=e("10\u5206\u949F\u642D\u5EFAubuntu+nodejs+pm2\u81EA\u52A8\u90E8\u7F72+nginx+\u6C38\u4E45\u514D\u8D39SSL\u8BC1\u4E66+mongodb\u81EA\u52A8\u90E8\u7F72\u73AF\u5883"),V=e("[2] "),H={href:"https://segmentfault.com/a/1190000024552266",target:"_blank",rel:"noopener noreferrer"},X=e("\u5982\u4F55\u81EA\u52A8\u7533\u8BF7\u514D\u8D39\u7684SSL \u8BC1\u4E66"),B=e("[3] "),R={href:"http://blog.cngal.org/index.php?controller=post&action=view&id_post=10",target:"_blank",rel:"noopener noreferrer"},T=e("Let\u2019s Encrypt\u514D\u8D39SSL\u8BC1\u4E66\u83B7\u53D6\u4EE5\u53CA\u81EA\u52A8\u7EED\u7B7E"),$=e("[4] "),G={href:"https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-20-04/",target:"_blank",rel:"noopener noreferrer"},A=e("\u5982\u4F55\u5728Ubuntu 20.04\u4E0A\u4F7F\u7528UFW\u914D\u7F6E\u9632\u706B\u5899");function O(D,J){const s=l("ExternalLinkIcon");return c(),o("div",null,[r,n("p",null,[p,n("a",u,[v,a(s)]),m,h,b]),g,n("p",null,[f,n("a",_,[x,a(s)])]),k,n("p",null,[w,n("a",y,[S,a(s)])]),q,n("p",null,[z,U,F,N,C,n("a",L,[W,a(s)])]),j,n("ul",null,[n("li",null,[I,n("a",P,[E,a(s)])]),n("li",null,[V,n("a",H,[X,a(s)])]),n("li",null,[B,n("a",R,[T,a(s)])]),n("li",null,[$,n("a",G,[A,a(s)])])])])}var Q=d(t,[["render",O],["__file","environment_server.html.vue"]]);export{Q as default};