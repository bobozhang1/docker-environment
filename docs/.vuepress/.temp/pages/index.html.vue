<template><div><h1 id="view-develop-team-toolbox-talk-v1-4" tabindex="-1"><a class="header-anchor" href="#view-develop-team-toolbox-talk-v1-4" aria-hidden="true">#</a> VIEW DEVELOP TEAM TOOLBOX TALK v1.4</h1>
<blockquote>
<p>本文档的目的是简单地回顾指导方针，并迫使开发人员意识到那些在日常工作中很重要或经常被观察到的要点。为了达到这一目标，我们要求开发团队负责人在每次会议开始时与开发人员一起审阅文档中的主题，以加强指导方针。</p>
</blockquote>
<p>在线文档: https://tke.sharepoint.com/:p:/r/sites/tkeapitapplication/view/Shared%20Documents/Guidelines%20and%20Standards/VIEW%20develop%20team%20toolbox%20talk%20v1.4.pptx?d=wf3ae10c2fb114ee8b5855301a37c6a61&amp;csf=1&amp;web=1&amp;e=dskURI</p>
<h2 id="_1-命名规范-naming-convention" tabindex="-1"><a class="header-anchor" href="#_1-命名规范-naming-convention" aria-hidden="true">#</a> 1.命名规范(Naming Convention)</h2>
<blockquote>
<p>如何在不同的情况下命名?</p>
</blockquote>
<h3 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h3>
<h4 id="变量名" tabindex="-1"><a class="header-anchor" href="#变量名" aria-hidden="true">#</a> 变量名</h4>
<p>小驼峰</p>
<p><code v-pre>$iUnitId</code> <code v-pre>$sBuildingName</code></p>
<h4 id="方法-函数名" tabindex="-1"><a class="header-anchor" href="#方法-函数名" aria-hidden="true">#</a> 方法/函数名</h4>
<p>小驼峰</p>
<p><code v-pre>createUnit()</code> <code v-pre>createBuilding()</code></p>
<h4 id="类名" tabindex="-1"><a class="header-anchor" href="#类名" aria-hidden="true">#</a> 类名</h4>
<p>大驼峰</p>
<p><code v-pre>ConfigParser{}</code> <code v-pre>UnitDao{}</code></p>
<h4 id="文件-文件夹" tabindex="-1"><a class="header-anchor" href="#文件-文件夹" aria-hidden="true">#</a> 文件/文件夹</h4>
<p>大驼峰</p>
<p><code v-pre>UnitDao.php</code> <code v-pre>BizLogic</code></p>
<h4 id="字段名" tabindex="-1"><a class="header-anchor" href="#字段名" aria-hidden="true">#</a> 字段名</h4>
<p>大驼峰</p>
<p><code v-pre>UnitId</code> <code v-pre>BuildingName</code></p>
<h4 id="表名" tabindex="-1"><a class="header-anchor" href="#表名" aria-hidden="true">#</a> 表名</h4>
<p>小驼峰,使用下划线连接</p>
<p><code v-pre>unit</code> <code v-pre>contract_unit</code></p>
<h4 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h4>
<p>标题: 大驼峰,使用空格连接</p>
<p><code v-pre>Unit Id</code> <code v-pre>Building Name</code></p>
<p>描述文字: 首字母大写</p>
<p><code v-pre>Translation may take few minutes to be effective</code></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>避免在PHP代码和MySql中使用任何关键字，如<code v-pre>date</code>等。</p>
</div>
<h2 id="_2-缩进和空格-indention-and-whitespace" tabindex="-1"><a class="header-anchor" href="#_2-缩进和空格-indention-and-whitespace" aria-hidden="true">#</a> 2.缩进和空格(INDENTION AND WHITESPACE)</h2>
<blockquote>
<p>如何使代码更漂亮?</p>
</blockquote>
<ul>
<li>使用4个空格进行缩进，(不能使用tab，在编辑器中设置)</li>
<li>在变量和语句之间使用适当的空格</li>
<li>在提交代码前，使用格式化工具格式化代码</li>
</ul>
<p>示例:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$yes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">print</span> <span class="token string double-quoted-string">"OK"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$no</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">print</span> <span class="token string double-quoted-string">"I don't think so"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">print</span> <span class="token string double-quoted-string">"How should I know?"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-注释-comment" tabindex="-1"><a class="header-anchor" href="#_3-注释-comment" aria-hidden="true">#</a> 3.注释(Comment)</h2>
<blockquote>
<p>如何使代码易于解释和维护?
代码是最好的技术文档，注释是代码的一部分</p>
</blockquote>
<ul>
<li>为<code v-pre>类</code>、<code v-pre>方法</code>、<code v-pre>逻辑块</code>、<code v-pre>if/else语句</code>甚至<code v-pre>变量</code>添加足够的注释</li>
<li>使用适当的标签对<code v-pre>类</code>、<code v-pre>方法</code>进行注释，生成技术文档(API文档)</li>
<li>删除不必要的注释</li>
<li>注释必须使用<strong>英文语言</strong></li>
</ul>
<p>示例：</p>
<h2 id="_4-错误处理和日志记录-error-process-and-logging" tabindex="-1"><a class="header-anchor" href="#_4-错误处理和日志记录-error-process-and-logging" aria-hidden="true">#</a> 4.错误处理和日志记录(Error process and Logging)</h2>
<blockquote>
<p>用户报告了错误，但不能提供更详细的信息，该如何处理?</p>
</blockquote>
<ul>
<li>不要在没有任何进程(日志和错误消息)的情况下捕获错误</li>
<li>如果系统不知道如何处理，则显示通用的错误页面，并注销异常以便进一步调查(log4php-&gt;Zabbix/Centralized error dashboard, debug table)</li>
<li>注意区别日志级别：<code v-pre>debug</code>、<code v-pre>info</code>、<code v-pre>warning</code>、<code v-pre>error/critical</code></li>
<li>尽可能提前对数据做验证，在相关页面提醒用户如：<code v-pre>必填项</code>，<code v-pre>格式</code>，<code v-pre>数值/日期范围</code>等....</li>
<li>==记录日志时，使用正确的信息和参数(不要在<code v-pre>message</code>中包含数据信息，而是使用<code v-pre>additionInfo</code>，注意标识符<code v-pre>identifier</code>参数，可以去快速定位错误)==</li>
</ul>
<h2 id="_5-删除未使用的代码-remove-unused-code" tabindex="-1"><a class="header-anchor" href="#_5-删除未使用的代码-remove-unused-code" aria-hidden="true">#</a> 5.删除未使用的代码(REMOVE UNUSED CODE)</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>删除不必要的代码以保持代码整洁。这些删除的代码可以通过SVN日志找到。</p>
</div>
<ul>
<li>一旦逻辑不再使用，就删除不使用的代码，以保持代码文件的整洁</li>
</ul>
<h2 id="_6-系统开关-system-setting" tabindex="-1"><a class="header-anchor" href="#_6-系统开关-system-setting" aria-hidden="true">#</a> 6.系统开关(SYSTEM SETTING)</h2>
<blockquote>
<p>保持系统的灵活性，我们能把所有东西都设置成可配置的吗?</p>
</blockquote>
<ul>
<li>避免在代码中使用硬编码，而应该使用可配置的<code v-pre>system setting</code></li>
<li>尽可能的去协调代码逻辑，减少创建新的<code v-pre>system setting</code>，使系统逻辑简单</li>
<li>一个开关应该只控制一个逻辑，不要把太大的范围和不相关的逻辑放在一个设置中</li>
<li>提供有意义的开关名称和描述信息(针对于BA和TKE)，并且要在技术文档/Review中体现出来</li>
<li>注意<code v-pre>system setting</code>表中的<code v-pre>IsTestConfigRequired</code>属性（是否要求在测试环境中配置）</li>
</ul>
<p>示例：</p>
<h2 id="_7-数据库设计-database-design" tabindex="-1"><a class="header-anchor" href="#_7-数据库设计-database-design" aria-hidden="true">#</a> 7.数据库设计(DATABASE DESIGN)</h2>
<blockquote>
<p>在VIEW这样的操作系统中，数据结构是最重要的，应该遵循什么基本规则?</p>
</blockquote>
<ul>
<li>总是包含自增字段<code v-pre>Id</code>去作为主键</li>
<li>总是包含标准字段，<code v-pre>CreatedBy</code>, <code v-pre>CreatedDate(UTC)</code>， <code v-pre>LastModifiedBy</code>, <code v-pre>LastModifiedDate (UTC)</code></li>
<li>始终考虑是否需要状态字段(<code v-pre>IsDeleted</code>, <code v-pre>isActivated</code>...)，并根据表的设计实现软删除</li>
<li>总是使用设置<strong>外键索引</strong>来保持数据一致性(除非有性能方面的要求)</li>
</ul>
<h2 id="_8-sql-语句-sql-statement" tabindex="-1"><a class="header-anchor" href="#_8-sql-语句-sql-statement" aria-hidden="true">#</a> 8.SQL 语句（Sql statement）</h2>
<p>如何利用SQL提高系统性能？</p>
<h3 id="规范-1" tabindex="-1"><a class="header-anchor" href="#规范-1" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>Group by 规则</li>
<li>使用Explain检查sql语句，看索引是否被使用</li>
<li>考虑数据量，评估1年、3年、5年后的性能(特别是报告)</li>
<li>使用从库进行导出</li>
<li>必要时缓存数据，以提高关键的sql性能</li>
<li>在更新时不要这样写代码:删除所有，然后再插入，这是一种有风险的方法，因为一些列的数据可能被删除，无法再恢复。
==- (新)当有更新或删除sql时，对部署中的数据补丁进行特殊的团队领导批准避免由于错误的sql语句导致大量数据的问题，如大部分用户组被删除==</li>
</ul>
<h2 id="_9-ui设计-ui-design" tabindex="-1"><a class="header-anchor" href="#_9-ui设计-ui-design" aria-hidden="true">#</a> 9.UI设计（UI design）</h2>
<p>如何让用户乐于使用我们开发的功能?
除了功能部分，也要注意非功能部分，如UI/UX体验。</p>
<h3 id="规范-2" tabindex="-1"><a class="header-anchor" href="#规范-2" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>按照VIEW标准UI模板设计新页面</li>
<li>注意所有UI元素的对齐方式(数字-右，字符串-左)</li>
<li>遵循系统设置的日期和货币格式(十进制，千位分隔符)，以支持全球化</li>
<li>在一次操作中尽可能地计算和判断单击次数，避免重复提交。</li>
<li>参与UI设计师的新页面设计和审核</li>
</ul>
<h2 id="_10-通用的view组件和库-generic-view-component-and-libraires" tabindex="-1"><a class="header-anchor" href="#_10-通用的view组件和库-generic-view-component-and-libraires" aria-hidden="true">#</a> 10.通用的VIEW组件和库（Generic VIEW component and libraires ）</h2>
<p>VIEW中已经提供的哪些通用组件可以被重用?</p>
<h3 id="规范-3" tabindex="-1"><a class="header-anchor" href="#规范-3" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>VIEW一般组件</li>
</ul>
<ol>
<li>File upload / Building/Bank/Unit Chooser / Contract /Unit Search / Employee/Salesman chooser /</li>
<li>Controller / Drive Type / Model  /  Manufacture / Factory chooser</li>
<li>Common pages (404, Unauthorized access, Exception)</li>
</ol>
<ul>
<li>分公司试点</li>
<li>如果新特性可以作为组件实现并被其他人重用，就需要考虑它</li>
<li>引入通用的第三方库，新库或版本需经过SHARP团队批准</li>
</ul>
<ol>
<li>TCPDF/SPOUT/PHPOffice/etc….</li>
<li>Jquery/Bootstrap/ etc…</li>
</ol>
<ul>
<li>鼓励引入库来解决常见问题，比如前端的datetime库(moment.js已经在混合开发中使用了)</li>
</ul>
<h2 id="_11-view代码-view-snippet" tabindex="-1"><a class="header-anchor" href="#_11-view代码-view-snippet" aria-hidden="true">#</a> 11.VIEW代码（VIEW Snippet）</h2>
<p>VIEW中代码注意细节</p>
<h3 id="规范-4" tabindex="-1"><a class="header-anchor" href="#规范-4" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>在每个与日期/时间相关的业务逻辑中，时区和夏令时会改变考虑因素</li>
<li>日期、时间格式和货币(千位分隔符等)</li>
<li>不要在PHP代码的调试中使用echo，因为它将内容输出到页面中，会混淆其他人</li>
<li>注意Azure环境中的会话超时时间(5分钟)，提高页面性能吗</li>
<li>所有的标签应该是可翻译的静态目录与适当的模块设置</li>
<li>邮件API(在测试环境中是否直接向真实用户发送邮件)</li>
<li>始终使用来自SharePoint的最新文档模板</li>
<li>在PHP代码中的CURL调用中显式地设置超时，否则将导致无响应，对用户不友好。
-== 是否设置与要在生产中执行的特性相同的测试环境。比如不要在dev2中使用模拟页面来测试后台作业功能。==</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>day <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commonService<span class="token punctuation">.</span><span class="token function">dateformat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>day<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">"/"</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token number">246060</span><span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-开发和部署-devops-and-deployment" tabindex="-1"><a class="header-anchor" href="#_12-开发和部署-devops-and-deployment" aria-hidden="true">#</a> 12.开发和部署（Devops and deployment）</h2>
<p>如何使部署和(dev2, rc)重新加载更加流畅和提高效率?</p>
<h3 id="规范-5" tabindex="-1"><a class="header-anchor" href="#规范-5" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>不要在测试环境中进行调试或按照正常的方式进行调试</li>
<li>总是使用devops工具进行部署(像Diff工具，重新加载机制，…)</li>
<li>使补丁与开发操作工具兼容</li>
<li>DDL应该始终通过sql脚本，而不是PHP，以使其与dev2重新加载兼容</li>
<li>测试覆盖率(测试用例应该覆盖所有更改，以实现100%的代码覆盖率)</li>
<li>安全的部署</li>
<li>安全部署确保没有代码遗漏，或者没有代码不应该包括通过补丁差异工具。</li>
<li>==代码部署总是应该从dev、dev2开始，然后开始运行==</li>
<li>==要更多地关注那些突出的补丁，比如一个补丁持续了3个多月还没有部署。==</li>
<li>==大多数部署都需要部署后监视和验证==</li>
</ul>
<h2 id="_13-查看环境和体系结构-view-environment-and-architecture" tabindex="-1"><a class="header-anchor" href="#_13-查看环境和体系结构-view-environment-and-architecture" aria-hidden="true">#</a> 13.查看环境和体系结构（VIEW environment and architecture ）</h2>
<p>查看环境和体系结构相关的点。</p>
<h3 id="规范-6" tabindex="-1"><a class="header-anchor" href="#规范-6" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>VIEW环境和使用(dev, dev2/opt/opt2, rc, live)</li>
<li>VIEW环境重新加载机制
数据库从活动中重新加载，重新部署(sql脚本)由重新加载作业自动触发。</li>
<li>视图环境循环
Dev -&gt; 6个月，dev2 -&gt; 2周，rc -&gt;每天</li>
<li>查看数据库架构
Tkglobal, tkcountry和复制机制</li>
</ul>
<h2 id="_14-安全-security" tabindex="-1"><a class="header-anchor" href="#_14-安全-security" aria-hidden="true">#</a> 14.安全（Security）</h2>
<p>安全相关的点</p>
<h3 id="规范-7" tabindex="-1"><a class="header-anchor" href="#规范-7" aria-hidden="true">#</a> 规范</h3>
<ul>
<li>避免SQL注入，在SQL语句中使用占位符(参数)</li>
<li>避免XSS注入(使用NGForm组件，如文本、隐藏等…)</li>
<li>按照规则将外部帐户管理在单独的文件中</li>
</ul>
</div></template>


