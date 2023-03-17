import{_ as s,o as a,c as n,a as e}from"./app.372d8cef.js";const l={},i=e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MYSQL</h1><blockquote><p>本文档的目的是快速的利用容器技术搭建mysql数据服务</p></blockquote><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>docker network create <span class="token operator">--</span>subnet<span class="token operator">=</span><span class="token number">172.16</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">24</span> web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> mysql8.0 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_ROOT_HOST</span><span class="token operator">=</span>% <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>Ab123456 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> web <span class="token punctuation">\\</span>
    <span class="token parameter variable">--ip</span> <span class="token number">172.16</span>.0.33 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> ~/web/service/mysql8.0:/var/lib/mysql <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
    mysql:8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  mysql8.0:
    image: mysql:8
    container_name: mysql8.0
    privileged: <span class="token boolean">true</span>
    networks:
      web:
        ipv4_address: <span class="token number">172.16</span>.0.33
    ports:
      - <span class="token string">&quot;3306:3306&quot;</span>
    volumes:
      - mysql8.0:/var/lib/mysql
    environment:
      - <span class="token assign-left variable">MYSQL_ROOT_HOST</span><span class="token operator">=</span>%
      - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>Ab123456
volumes:
  mysql8.0:
    name: mysql8.0
    driver: <span class="token builtin class-name">local</span>
    driver_opts:
      type: none
      o: <span class="token builtin class-name">bind</span>
      device: ~/web/service/mysql8.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  mysql5.7:
    image: mysql:8
    container_name: mysql5.7
    privileged: <span class="token boolean">true</span>
    networks:
      web:
        ipv4_address: <span class="token number">172.16</span>.0.33
    ports:
      - <span class="token string">&quot;3306:3306&quot;</span>
    volumes:
      - mysql5.7:/var/lib/mysql
    environment:
      - <span class="token assign-left variable">MYSQL_ROOT_HOST</span><span class="token operator">=</span>%
      - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>Ab123456
volumes:
  mysql5.7:
    name: mysql5.7
    driver: <span class="token builtin class-name">local</span>
    driver_opts:
      type: none
      o: <span class="token builtin class-name">bind</span>
      device: ~/web/service/mysql5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> mysql <span class="token builtin class-name">echo</span> <span class="token string">&quot;sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/mysql/conf.d/mysql.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据库备份" tabindex="-1"><a class="header-anchor" href="#数据库备份" aria-hidden="true">#</a> 数据库备份</h2><p>backup.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># database</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">\${1}</span>
<span class="token assign-left variable">backup_path</span><span class="token operator">=</span>/var/web/backup/database
<span class="token comment"># 文件名称</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token variable">$backup_path</span>/<span class="token variable">\${database}</span>_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y_%m_%d_%H_%M_%S&quot;</span><span class="token variable">)</span></span>.sql
<span class="token comment"># 备份</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> mysql mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-paiguangjii</span> <span class="token variable">$database</span> <span class="token operator">&gt;</span> <span class="token variable">$file</span>
<span class="token comment"># 打包</span>
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$file</span>.tar.gz <span class="token variable">$file</span>
<span class="token comment"># 删除旧文件</span>
<span class="token function">rm</span> <span class="token variable">$file</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;数据库<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${database}</span><span class="token entity" title="\\&quot;">\\&quot;</span>备份成功&quot;</span>

<span class="token comment">#!/bin/bash</span>

<span class="token comment"># Database name</span>
<span class="token assign-left variable">database</span><span class="token operator">=</span><span class="token variable">\${1}</span>
<span class="token assign-left variable">path</span><span class="token operator">=</span>/var/lib/postgresql/backup
<span class="token comment"># Backup file name</span>
<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">\${database}</span>_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y%m%d-%H%M%S&quot;</span><span class="token variable">)</span></span>.bak

<span class="token comment"># Backing up</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> mysql mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-paiguangjii</span> <span class="token variable">$database</span> <span class="token operator">&gt;</span> <span class="token variable">\${path}</span>/<span class="token variable">$file</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">\${database}</span> database backup was successful!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql数据库自动备份" tabindex="-1"><a class="header-anchor" href="#mysql数据库自动备份" aria-hidden="true">#</a> Mysql数据库自动备份</h2><h3 id="_1、编写-sh脚本-另存为-backup-sh" tabindex="-1"><a class="header-anchor" href="#_1、编写-sh脚本-另存为-backup-sh" aria-hidden="true">#</a> 1、编写.sh脚本 另存为 backup.sh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 文件路径</span>
<span class="token assign-left variable">path</span><span class="token operator">=</span>/home/web/backup/

<span class="token comment"># 循环</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> xyun1688 xyuntest
<span class="token keyword">do</span>
	<span class="token comment"># 文件名称</span>
	<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token variable">$path</span><span class="token variable">\${db}</span>_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y_%m_%d_%H_%M_%S&quot;</span><span class="token variable">)</span></span>.sql
	<span class="token comment"># 备份</span>
	mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-paiguangjii</span> <span class="token variable">$database</span> <span class="token operator">&gt;</span> <span class="token variable">$file</span>
	<span class="token comment"># 打包</span>
	<span class="token function">tar</span> <span class="token parameter variable">-czvf</span> <span class="token variable">$file</span>.tar.gz <span class="token variable">$file</span>
	<span class="token comment"># 删除旧文件</span>
	/bin/rm <span class="token variable">$file</span>
	<span class="token variable"><span class="token punctuation">((</span>count<span class="token operator">++</span><span class="token punctuation">))</span></span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;数据库<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${db}</span><span class="token entity" title="\\&quot;">\\&quot;</span>备份成功&quot;</span>
<span class="token keyword">done</span>
<span class="token comment"># 备份完成</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;已完成<span class="token variable">$count</span>个数据库的备份&quot;</span>

<span class="token comment"># 删除超过时间的备份文件</span>
<span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token function">find</span> <span class="token variable">$path</span> <span class="token parameter variable">-mtime</span> +<span class="token variable">$day</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*.gz&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$day</span>天前的备份数据已删除&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使脚本具有执行权限" tabindex="-1"><a class="header-anchor" href="#_2-使脚本具有执行权限" aria-hidden="true">#</a> 2.使脚本具有执行权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /data/sh/db/backup.sh
<span class="token comment"># 或cd到当前脚本命令目录运行：</span>
<span class="token function">chmod</span> +x ./backup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加计划任务" tabindex="-1"><a class="header-anchor" href="#_3-添加计划任务" aria-hidden="true">#</a> 3.添加计划任务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token comment"># 每天 3 点钟执行备份</span>
01   <span class="token number">3</span> * * * root/home/backup/DatabaseName.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、常见问题" tabindex="-1"><a class="header-anchor" href="#_4、常见问题" aria-hidden="true">#</a> 4、常见问题</h3><p>1、sh脚本报错“^M: bad interpreter”解决方法 这时因为这个sh脚本可能是在Windows电脑上写的，或是在Windows电脑上复制了一些内容到脚本中，或进行了一些不正确的操作，必须将脚本格式由dos改为unix才能解决问题</p><p>第一步：首先在Terminal中输入“vim 脚本”命令。 这时会看到文件最下方显示的是“[dos]”，这就表示这个脚本是dos格式的啦。如果没有看到，可以输入“:set ff”，按下Enter键，查看脚本格式。</p><p>第二步 输入“:set ff=unix”后按Enter，将格式更改为unix格式。 然后再输入“:set ff”，按下Enter键，这时如果看到“fileformat=unix”，这表明格式修改正确啦。</p><p>第三步 输入“:wq”，保存并退出脚本。 再次运行脚本，看，不再出错啦。</p><p>注意，编辑sh脚本前，一定要将输入法切换为英文半角符号状态。</p>`,28),t=[i];function p(c,r){return a(),n("div",null,t)}const d=s(l,[["render",p],["__file","mysql.html.vue"]]);export{d as default};
