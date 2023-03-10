import{_ as o,W as s,X as u,Y as d,Z as e,a1 as t,a2 as n,$ as _,C as E,a0 as i}from"./framework-47d528cb.js";const r={},c=_("<p>使用<code>ubuntu</code>+<code>nodejs</code>+<code>nginx</code>搭建静态网站</p><p>利用<code>git</code>+<code>webhook</code>+<code>pm2</code>实现自动更新代码并部署</p><p>使用<code>Let&#39;s Encrypt</code>实现免费启用<code>SSL</code>证书</p>",3),m=e("code",null,"windows",-1),a=e("code",null,"ssh-agent",-1),b=e("code",null,"ssh-agent",-1),h=e("code",null,"ssh",-1),A=e("code",null,"git",-1),B=e("code",null,"Node",-1),w=e("code",null,"Nginx",-1),v=e("code",null,"nginx",-1),f=e("code",null,"nginx",-1),p=e("code",null,"SSL",-1),g=e("code",null,"UFW",-1);function D(x,C){const l=E("RouterLink");return s(),u("div",null,[c,d(" more "),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_windows.html#windows%E5%90%AF%E5%8A%A8ssh-agent"},{default:n(()=>[m,i("启动"),a]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_windows.html#%E5%B0%86%E7%A7%81%E9%92%A5%E6%B7%BB%E5%8A%A0%E5%88%B0ssh-agent"},{default:n(()=>[i("将私钥添加到"),b]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_windows.html#ssh%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE"},{default:n(()=>[h,i("代理设置")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_windows.html#%E5%8F%82%E8%80%83"},{default:n(()=>[i("参考")]),_:1})])])]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E7%8E%AF%E5%A2%83%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE"},{default:n(()=>[i("环境服务配置")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_server.html#git"},{default:n(()=>[A]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%AE%89%E8%A3%85"},{default:n(()=>[i("安装")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E9%85%8D%E7%BD%AE"},{default:n(()=>[i("配置")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E7%94%9F%E6%88%90ssh%E5%AF%86%E9%92%A5"},{default:n(()=>[i("生成ssh密钥")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E6%B5%8B%E8%AF%95%E8%BF%9E%E6%8E%A5"},{default:n(()=>[i("测试连接")]),_:1})])])]),e("li",null,[t(l,{to:"/website_build/environment_server.html#node"},{default:n(()=>[B]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#nginx"},{default:n(()=>[w]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%AE%89%E8%A3%85-1"},{default:n(()=>[i("安装")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E6%B7%BB%E5%8A%A0%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%85%8D%E7%BD%AE"},{default:n(()=>[i("添加虚拟机配置")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE"},{default:n(()=>[v,i("反向代理配置")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%85%B3%E9%97%ADnginx%E7%89%88%E6%9C%AC%E5%8F%B7%E9%9C%B2%E5%87%BA"},{default:n(()=>[i("关闭"),f,i("版本号露出")]),_:1})])])]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%85%8D%E8%B4%B9ssl%E8%AF%81%E4%B9%A6%E5%90%AF%E7%94%A8"},{default:n(()=>[i("免费"),p,i("证书启用")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%AE%89%E8%A3%85-2"},{default:n(()=>[i("安装")]),_:1})])])]),e("li",null,[t(l,{to:"/website_build/environment_server.html#ufw%E9%98%B2%E7%81%AB%E5%A2%99"},{default:n(()=>[g,i("防火墙")]),_:1})]),e("li",null,[t(l,{to:"/website_build/environment_server.html#%E5%8F%82%E8%80%83"},{default:n(()=>[i("参考")]),_:1})])])]),e("li",null,[t(l,{to:"/website_build/pm2&bash.html#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9B%B4%E6%96%B0%E9%83%A8%E7%BD%B2"},{default:n(()=>[i("自动化更新部署")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"/website_build/pm2&bash.html#%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E4%BB%A3%E7%A0%81"},{default:n(()=>[i("自动更新代码")]),_:1})]),e("li",null,[t(l,{to:"/website_build/pm2&bash.html#%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2"},{default:n(()=>[i("打包部署")]),_:1})]),e("li",null,[t(l,{to:"/website_build/pm2&bash.html#%E6%8C%81%E4%B9%85%E5%8C%96%E6%9C%8D%E5%8A%A1"},{default:n(()=>[i("持久化服务")]),_:1})]),e("li",null,[t(l,{to:"/website_build/giuhub_actions.html"},{default:n(()=>[i("github actions")]),_:1})])])])])])}const N=o(r,[["render",D],["__file","index.html.vue"]]);export{N as default};
