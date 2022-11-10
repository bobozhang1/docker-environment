# VIEW DEVELOP TEAM TOOLBOX TALK v1.4

> 本文档的目的是简单地回顾指导方针，并迫使开发人员意识到那些在日常工作中很重要或经常被观察到的要点。为了达到这一目标，我们要求开发团队负责人在每次会议开始时与开发人员一起审阅文档中的主题，以加强指导方针。

在线文档: https://tke.sharepoint.com/:p:/r/sites/tkeapitapplication/view/Shared%20Documents/Guidelines%20and%20Standards/VIEW%20develop%20team%20toolbox%20talk%20v1.4.pptx?d=wf3ae10c2fb114ee8b5855301a37c6a61&csf=1&web=1&e=dskURI

## 1.命名规范(Naming Convention)

> 如何在不同的情况下命名?

### 规范

#### 变量名

小驼峰

`$iUnitId` `$sBuildingName`

#### 方法/函数名

小驼峰

`createUnit()` `createBuilding()`

#### 类名

大驼峰

`ConfigParser{}` `UnitDao{}`

#### 文件/文件夹

大驼峰

`UnitDao.php` `BizLogic`

#### 字段名

大驼峰

`UnitId` `BuildingName`

#### 表名

小驼峰,使用下划线连接

`unit` `contract_unit`

#### 标签

标题: 大驼峰,使用空格连接

`Unit Id` `Building Name`

描述文字: 首字母大写

`Translation may take few minutes to be effective`

::: warning
避免在PHP代码和MySql中使用任何关键字，如`date`等。
:::

## 2.缩进和空格(INDENTION AND WHITESPACE)

> 如何使代码更漂亮?

- 使用4个空格进行缩进，(不能使用tab，在编辑器中设置)
- 在变量和语句之间使用适当的空格
- 在提交代码前，使用格式化工具格式化代码

示例:

```php
if ($yes) {
    print "OK";
} else if ($no) {
    print "I don't think so";
} else {
    print "How should I know?";
}
```

## 3.注释(Comment)

> 如何使代码易于解释和维护?
> 代码是最好的技术文档，注释是代码的一部分

- 为`类`、`方法`、`逻辑块`、`if/else语句`甚至`变量`添加足够的注释
- 使用适当的标签对`类`、`方法`进行注释，生成技术文档(API文档)
- 删除不必要的注释
- 注释必须使用**英文语言**

示例：
![](/image/screenshots/toolbox/comment.png)

## 4.错误处理和日志记录(Error process and Logging)

> 用户报告了错误，但不能提供更详细的信息，该如何处理?

- 不要在没有任何进程(日志和错误消息)的情况下捕获错误
- 如果系统不知道如何处理，则显示通用的错误页面，并注销异常以便进一步调查(log4php->Zabbix/Centralized error dashboard, debug table)
- 注意区别日志级别：`debug`、`info`、`warning`、`error/critical`
- 尽可能提前对数据做验证，在相关页面提醒用户如：`必填项`，`格式`，`数值/日期范围`等....
-  ==记录日志时，使用正确的信息和参数(不要在`message`中包含数据信息，而是使用`additionInfo`，注意标识符`identifier`参数，可以去快速定位错误)==

## 5.删除未使用的代码(REMOVE UNUSED CODE)

::: warning
删除不必要的代码以保持代码整洁。这些删除的代码可以通过SVN日志找到。
:::

- 一旦逻辑不再使用，就删除不使用的代码，以保持代码文件的整洁

## 6.系统开关(SYSTEM SETTING)

> 保持系统的灵活性，我们能把所有东西都设置成可配置的吗?

- 避免在代码中使用硬编码，而应该使用可配置的`system setting`
- 尽可能的去协调代码逻辑，减少创建新的`system setting`，使系统逻辑简单
- 一个开关应该只控制一个逻辑，不要把太大的范围和不相关的逻辑放在一个设置中
- 提供有意义的开关名称和描述信息(针对于BA和TKE)，并且要在技术文档/Review中体现出来
- 注意`system setting`表中的`IsTestConfigRequired`属性（是否要求在测试环境中配置）

示例：
![](/image/screenshots/toolbox/system-setting.png)

## 7.数据库设计(DATABASE DESIGN)

> 在VIEW这样的操作系统中，数据结构是最重要的，应该遵循什么基本规则?

- 总是包含自增字段`Id`去作为主键
- 总是包含标准字段，`CreatedBy`, `CreatedDate(UTC)`， `LastModifiedBy`, `LastModifiedDate (UTC)`
- 始终考虑是否需要状态字段(`IsDeleted`, `isActivated`...)，并根据表的设计实现软删除
- 总是使用设置**外键索引**来保持数据一致性(除非有性能方面的要求)


## 8.SQL 语句（Sql statement）

如何利用SQL提高系统性能？

### 规范

*   Group by 规则
*   使用Explain检查sql语句，看索引是否被使用
*   考虑数据量，评估1年、3年、5年后的性能(特别是报告)
*   使用从库进行导出
*   必要时缓存数据，以提高关键的sql性能
*   在更新时不要这样写代码:删除所有，然后再插入，这是一种有风险的方法，因为一些列的数据可能被删除，无法再恢复。
    ==- (新)当有更新或删除sql时，对部署中的数据补丁进行特殊的团队领导批准避免由于错误的sql语句导致大量数据的问题，如大部分用户组被删除==

## 9.UI设计（UI design）

如何让用户乐于使用我们开发的功能?
除了功能部分，也要注意非功能部分，如UI/UX体验。

### 规范

*   按照VIEW标准UI模板设计新页面
*   注意所有UI元素的对齐方式(数字-右，字符串-左)
*   遵循系统设置的日期和货币格式(十进制，千位分隔符)，以支持全球化
*   在一次操作中尽可能地计算和判断单击次数，避免重复提交。
*   参与UI设计师的新页面设计和审核

## 10.通用的VIEW组件和库（Generic VIEW component and libraires ）
VIEW中已经提供的哪些通用组件可以被重用?

### 规范
- VIEW一般组件
1. File upload / Building/Bank/Unit Chooser / Contract /Unit Search / Employee/Salesman chooser /
2. Controller / Drive Type / Model  /  Manufacture / Factory chooser
3. Common pages (404, Unauthorized access, Exception)
- 分公司试点
- 如果新特性可以作为组件实现并被其他人重用，就需要考虑它
- 引入通用的第三方库，新库或版本需经过SHARP团队批准
1. TCPDF/SPOUT/PHPOffice/etc….
2. Jquery/Bootstrap/ etc…
- 鼓励引入库来解决常见问题，比如前端的datetime库(moment.js已经在混合开发中使用了)

## 11.VIEW代码（VIEW Snippet）
VIEW中代码注意细节

### 规范
- 在每个与日期/时间相关的业务逻辑中，时区和夏令时会改变考虑因素
- 日期、时间格式和货币(千位分隔符等)
- 不要在PHP代码的调试中使用echo，因为它将内容输出到页面中，会混淆其他人
- 注意Azure环境中的会话超时时间(5分钟)，提高页面性能吗
- 所有的标签应该是可翻译的静态目录与适当的模块设置
- 邮件API(在测试环境中是否直接向真实用户发送邮件)
- 始终使用来自SharePoint的最新文档模板
- 在PHP代码中的CURL调用中显式地设置超时，否则将导致无响应，对用户不友好。
  -== 是否设置与要在生产中执行的特性相同的测试环境。比如不要在dev2中使用模拟页面来测试后台作业功能。==
### 示例
```js
day = this.commonService.dateformat(new Date(new Date(day.replace(/\-/g,"/") ).getTime() +246060* 1000),'YYYY-MM-DD',false);
``` 

## 12.开发和部署（Devops and deployment）
如何使部署和(dev2, rc)重新加载更加流畅和提高效率?

### 规范
- 不要在测试环境中进行调试或按照正常的方式进行调试
- 总是使用devops工具进行部署(像Diff工具，重新加载机制，…)
- 使补丁与开发操作工具兼容
- DDL应该始终通过sql脚本，而不是PHP，以使其与dev2重新加载兼容
- 测试覆盖率(测试用例应该覆盖所有更改，以实现100%的代码覆盖率)
- 安全的部署
- 安全部署确保没有代码遗漏，或者没有代码不应该包括通过补丁差异工具。
- ==代码部署总是应该从dev、dev2开始，然后开始运行==
- ==要更多地关注那些突出的补丁，比如一个补丁持续了3个多月还没有部署。==
- ==大多数部署都需要部署后监视和验证==

## 13.查看环境和体系结构（VIEW environment and architecture ）
查看环境和体系结构相关的点。

### 规范
- VIEW环境和使用(dev, dev2/opt/opt2, rc, live)
- VIEW环境重新加载机制
  数据库从活动中重新加载，重新部署(sql脚本)由重新加载作业自动触发。
- 视图环境循环
  Dev -> 6个月，dev2 -> 2周，rc ->每天
- 查看数据库架构
  Tkglobal, tkcountry和复制机制

## 14.安全（Security）
安全相关的点
### 规范
- 避免SQL注入，在SQL语句中使用占位符(参数)
- 避免XSS注入(使用NGForm组件，如文本、隐藏等…)
- 按照规则将外部帐户管理在单独的文件中

