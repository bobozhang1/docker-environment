import{_ as n,o as s,c as a,a as e}from"./app.372d8cef.js";const i={},r=e(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> REDIS</h1><blockquote><p>本文档的目的是快速的利用容器技术搭建REDIS数据服务</p></blockquote><h2 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> web <span class="token punctuation">\\</span>
    <span class="token parameter variable">--ip</span> <span class="token number">172.16</span>.0.63 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    redis:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  redis:
    image: redis:alpine
    container_name: redis
    privileged: <span class="token boolean">true</span>
    networks:
      web:
        ipv4_address: <span class="token number">172.16</span>.0.63
    ports:
      - <span class="token string">&quot;6379:6379&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function d(t,c){return s(),a("div",null,l)}const o=n(i,[["render",d],["__file","redis.html.vue"]]);export{o as default};
