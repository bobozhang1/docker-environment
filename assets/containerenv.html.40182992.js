import{_ as n,o as e,c as s,a}from"./app.372d8cef.js";const i={},l=a(`<h1 id="php本地开发环境" tabindex="-1"><a class="header-anchor" href="#php本地开发环境" aria-hidden="true">#</a> PHP本地开发环境</h1><h2 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h2><p>php8.2/latest</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull dev:php8.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>php8.1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull dev:php8.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>php8.0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull dev:php8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>php7.4</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull dev:php7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.16</span>.0.0/24 web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> web <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/web/project:/var/web/project <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/web/service/nginx/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
wangqifei/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><p>站点配置 /etc/nginx/conf.d</p><p>可用模板 /etc/nginx/sites-available</p><p>基础命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> web nginx <span class="token parameter variable">-s</span> <span class="token punctuation">{</span>stop<span class="token operator">|</span>quit<span class="token operator">|</span>reopen<span class="token operator">|</span>reload<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="laravel-octane" tabindex="-1"><a class="header-anchor" href="#laravel-octane" aria-hidden="true">#</a> Laravel Octane</h2><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev chokidar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码热加载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan octane:start <span class="token parameter variable">--server</span><span class="token operator">=</span>swoole <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8000</span> <span class="token parameter variable">--watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  web:
    image: wangqifei/dev:php8.2
    container_name: web
    privileged: <span class="token boolean">true</span>
    volumes:
      - project:/var/web/project
      - nginx:/etc/nginx/conf.d
    networks:
      web:
        ipv4_address: <span class="token number">172.16</span>.0.80
    ports:
      - <span class="token string">&quot;80:80&quot;</span>
    restart: always
  pgsql:
    image: postgres:13-alpine
    container_name: pgsql
    privileged: <span class="token boolean">true</span>
    networks:
      web:
        ipv4_address: <span class="token number">172.16</span>.0.54
    ports:
      - <span class="token string">&quot;5432:5432&quot;</span>
    volumes:
      - pgsql:/etc/postgresql
    environment:
      - <span class="token assign-left variable">POSTGRES_DB</span><span class="token operator">=</span>postgres
      - <span class="token assign-left variable">POSTGRES_USER</span><span class="token operator">=</span>postgres
      - <span class="token assign-left variable">POSTGRES_PASSWORD</span><span class="token operator">=</span>Ab123456
networks:
  web:
    name: web
    ipam:
      driver: default
      config:
        - subnet: <span class="token number">172.16</span>.0.0/24
volumes:
  project:
    name: project
    driver: <span class="token builtin class-name">local</span>
    driver_opts:
      type: none
      o: <span class="token builtin class-name">bind</span>
      device: ~/web/project
  nginx:
    name: nginx
    driver: <span class="token builtin class-name">local</span>
    driver_opts:
      type: none
      o: <span class="token builtin class-name">bind</span>
      device: ~/web/service/nginx/conf.d
  pgsql:
    name: pgsql
    driver: <span class="token builtin class-name">local</span>
    driver_opts:
      type: none
      o: <span class="token builtin class-name">bind</span>
      device: ~/web/service/pgsql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),d=[l];function r(c,p){return e(),s("div",null,d)}const v=n(i,[["render",r],["__file","containerenv.html.vue"]]);export{v as default};
