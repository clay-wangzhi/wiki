(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{709:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-mysql基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql基本操作"}},[a._v("#")]),a._v(" 1 MySQL基本操作")]),a._v(" "),t("h2",{attrs:{id:"_1-数据库相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库相关概念"}},[a._v("#")]),a._v(" 1 数据库相关概念")]),a._v(" "),t("h3",{attrs:{id:"_1-1-什么是数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是数据"}},[a._v("#")]),a._v(" 1.1 什么是数据？")]),a._v(" "),t("p",[a._v("​\t\t数据（data）是事实或观察的结果，是对客观事物的逻辑归纳，是用于表示客观事物的未经加工的原始素材。数据是信息的表现形式和载体，可以是符号、文字、数字、语音、图像、视频等。数据和信息是不可分离的，数据是信息的表达，信息是数据的内涵。数据本身没有意义，数据只有对实体行为产生影响才成为信息。数据可以是连续的值，比如声音、图像，称为模拟数据。也可以是离散的，如符号、文字，称为数字数据。在计算机系统中，数据以二进制信息单元0,1的形式表示。")]),a._v(" "),t("h3",{attrs:{id:"_1-2-什么是数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-什么是数据库"}},[a._v("#")]),a._v(" 1.2 什么是数据库？")]),a._v(" "),t("p",[a._v("​\t\t数据库（Database）：是按照数据结构来组织、存储和管理数据的仓库。")]),a._v(" "),t("h3",{attrs:{id:"_1-3-什么是数据库管理系统-dbms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-什么是数据库管理系统-dbms"}},[a._v("#")]),a._v(" 1.3 什么是数据库管理系统（DBMS）？")]),a._v(" "),t("p",[a._v("​\t\t数据库管理系统：是由数据库及其管理软件组成的系统，它支持如下操作：")]),a._v(" "),t("p",[a._v("​\t\t\t1）提供数据持久性的存储，备份，恢复")]),a._v(" "),t("p",[a._v("​\t\t\t2）支持事务管理")]),a._v(" "),t("p",[a._v("​\t\t\t3）支持数据操作的并发")]),a._v(" "),t("p",[a._v("​\t\t\t4）支持独立的管理语言（sql语句）")]),a._v(" "),t("h2",{attrs:{id:"_2-数据库的发展史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库的发展史"}},[a._v("#")]),a._v(" 2 数据库的发展史")]),a._v(" "),t("h3",{attrs:{id:"_2-1-萌芽阶段-文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-萌芽阶段-文件系统"}},[a._v("#")]),a._v(" 2.1 萌芽阶段：文件系统")]),a._v(" "),t("p",[a._v("最初始的数据库是用磁盘来存储数据的。文件就是最早的数据库。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-第一代数据库-层次模型、网状模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-第一代数据库-层次模型、网状模型"}},[a._v("#")]),a._v(" 2.2  第一代数据库：层次模型、网状模型")]),a._v(" "),t("h4",{attrs:{id:"_2-2-1-层次模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-层次模型"}},[a._v("#")]),a._v(" 2.2.1 层次模型")]),a._v(" "),t("p",[t("img",{attrs:{src:"images%5C1536628336467.png",alt:"1536628336467"}})]),a._v(" "),t("p",[a._v("缺点：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("查找不同类的数据效率低了（导航的结构的缺点）")])]),a._v(" "),t("li",[t("p",[a._v("数据不完整（不能区分到底是一个李白还是两个李白）")])])]),a._v(" "),t("h4",{attrs:{id:"_2-2-2-网状模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-网状模型"}},[a._v("#")]),a._v(" 2.2.2 网状模型")]),a._v(" "),t("p",[a._v("网状模型解决了层次数据的数据不完整的问题，但是没有解决层次模型的导航问题。")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1536628485678.png",alt:"1536628485678"}})]),a._v(" "),t("h3",{attrs:{id:"_2-3-第二代数据库-关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-第二代数据库-关系型数据库"}},[a._v("#")]),a._v(" 2.3 第二代数据库：关系型数据库")]),a._v(" "),t("p",[a._v("特点：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("每个表都是独立的")])]),a._v(" "),t("li",[t("p",[a._v("表与表之间通过公共字段来建立关系")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1536628687644.png",alt:"1536628687644"}})]),a._v(" "),t("p",[a._v("优点：解决了导航问题，并且数据完整性得到解决")]),a._v(" "),t("p",[a._v("缺点：多表查询效率低了")]),a._v(" "),t("p",[a._v("提示：我们现在用的主流的数据库都是关系模型的。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("多学一招：NoSQL（非关系型数据库）解决关系型数据库多表查询效率的问题，常见的非关系型数据库有：Redis、mongodb。数据库中存储格式是键值对。 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-数据库的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库的分类"}},[a._v("#")]),a._v(" 3 数据库的分类")]),a._v(" "),t("h3",{attrs:{id:"_3-1-关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-关系型数据库"}},[a._v("#")]),a._v(" 3.1 关系型数据库")]),a._v(" "),t("p",[a._v("​\t\t关系数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。关系模型是由埃德加·科德于1970年首先提出的，并配合“科德十二定律”。现如今虽然对模型有一些批评意见，但它还是数据存储的传统标准。标准数据查询语言SQL就是一种基于关系数据库的语言，这种语言执行对关系数据库中数据的检索和操作。关系模型由关系数据结构、关系操作集合、关系完整性约束三部分组成。")]),a._v(" "),t("h4",{attrs:{id:"_3-1-2-常见的关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-常见的关系型数据库"}},[a._v("#")]),a._v(" 3.1.2  常见的关系型数据库")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("关系型数据库")]),a._v(" "),t("th",[a._v("开发公司")]),a._v(" "),t("th",[a._v("使用语言")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("SQL Server")]),a._v(" "),t("td",[a._v("微软公司")]),a._v(" "),t("td",[a._v("T-SQL")])]),a._v(" "),t("tr",[t("td",[a._v("Oracle")]),a._v(" "),t("td",[a._v("甲骨文公司")]),a._v(" "),t("td",[a._v("PL/SQL")])]),a._v(" "),t("tr",[t("td",[a._v("MySQL")]),a._v(" "),t("td",[a._v("MySQL AB 公司开发——甲骨文公司收购")]),a._v(" "),t("td",[a._v("MySQL")])])])]),a._v(" "),t("h3",{attrs:{id:"_3-2-非关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-非关系型数据库"}},[a._v("#")]),a._v(" 3.2 非关系型数据库")]),a._v(" "),t("h2",{attrs:{id:"_4-mysql的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-mysql的安装"}},[a._v("#")]),a._v(" 4 Mysql的安装")]),a._v(" "),t("h2",{attrs:{id:"_5-连接服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-连接服务器"}},[a._v("#")]),a._v(" 5 连接服务器")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-h 主机（host）\n-u 用户名（username）\n-p 密码（password）\n-P 端口（port）\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"images/1536633424017.png",alt:"1536633424017"}})]),a._v(" "),t("hr"),a._v(" "),t("p",[t("img",{attrs:{src:"images/1536633591923.png",alt:"1536633591923"}})]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("多学一招：如果MySQL服务器在本地，IP地址可以省略；如果MySQL服务器用的是3306端口，-P也是可以省略 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-sql介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-sql介绍"}},[a._v("#")]),a._v(" 6 SQL介绍")]),a._v(" "),t("h3",{attrs:{id:"_6-1-sql是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-sql是什么"}},[a._v("#")]),a._v(" 6.1 SQL是什么")]),a._v(" "),t("p",[a._v("Structured Query Language（结构化查询语言），是用来操作关系型数据库的一门语言。这是一个关系型数据库的通用操作语言，也成为标准SQL，也叫SQL-92。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("多学一招：数据库的生产厂商为了占有市场份额，都会在标准SQL的基础上扩展一些自己的东西以吸引用户。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("**思考：**已知标准SQL可以在所有的关系型数据库上运行，在Oracle上编写的PL/SQL能否在MySQL上运行？")]),a._v(" "),t("p",[a._v("答：不能，只能运行标准SQL 。")]),a._v(" "),t("h3",{attrs:{id:"_6-2-sql的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-sql的分类"}},[a._v("#")]),a._v(" 6.2 SQL的分类")]),a._v(" "),t("ul",[t("li",[a._v("DDL（data definition language）数据库定义语言CREATE、ALTER、DROP、SHOW")]),a._v(" "),t("li",[a._v("DML（data manipulation language）数据操纵语言SELECT、UPDATE、INSERT、DELETE")]),a._v(" "),t("li",[a._v("DCL（data control language）数据库控制语言,是用来设置或更改数据库用户或角色权限的语句GRANT,REVOKE,COMMIT,ROLLBACK")]),a._v(" "),t("li",[a._v("DQL（data query language）：数据查询语言 SELECT")])]),a._v(" "),t("h3",{attrs:{id:"_6-3-注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-注意事项"}},[a._v("#")]),a._v(" 6.3 注意事项")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("每条SQL语句结束时要以"),t("code",[a._v(";")]),a._v("做为结束符(除了use命令)")])]),a._v(" "),t("li",[t("p",[a._v("SQL语句的关键字不区分大小写(除了库名字和表名字)")])]),a._v(" "),t("li",[t("p",[a._v("在查询数据库信息或者表信息时,可以以\\G做为结束符,表示以文本模式输出")])]),a._v(" "),t("li",[t("p",[a._v("当你不需要一条语句输出的结果以\\c结束,不可以使用ctrl+c,否则登出mysql.")])]),a._v(" "),t("li",[t("p",[a._v("我们可以在命令行执行sql语句,要通过mysql -e参数")]),a._v(" "),t("p",[t("code",[a._v('mysql -e "show databases \\G')]),a._v('"显示到shell上')])]),a._v(" "),t("li",[t("p",[a._v("如果需要获取SQL语句的帮助可以用help命令"),t("code",[a._v("help create")]),a._v("\n如果需要进一步获取帮助,可以继续使用help命令"),t("code",[a._v("help create database")])])])]),a._v(" "),t("h2",{attrs:{id:"_7-数据库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据库操作"}},[a._v("#")]),a._v(" 7 数据库操作")]),a._v(" "),t("h3",{attrs:{id:"_7-1-增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-增"}},[a._v("#")]),a._v(" 7.1 增")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create database [if not exists] `数据库名` [charset=utf8];\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7-2-删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-删"}},[a._v("#")]),a._v(" 7.2 删")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("drop database [if exists] 数据库名;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7-3-改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-改"}},[a._v("#")]),a._v(" 7.3 改")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter database 数据库名 charset=字符编码;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7-4-查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-查"}},[a._v("#")]),a._v(" 7.4 查")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show databases;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装MySQL后，MySQL自带了4个数据库")]),a._v(" "),t("ol",[t("li",[a._v("information_schema：存储了MySQL服务器管理数据库的信息。")]),a._v(" "),t("li",[a._v("performance_schema：MySQL5.5新增的表，用来保存数据库服务器性能的参数")]),a._v(" "),t("li",[a._v("mysql：MySQL系统数据库，保存的登录用户名，密码，以及每个用户的权限等等")]),a._v(" "),t("li",[a._v("test：给用户学习和测试的数据库。")])]),a._v(" "),t("p",[a._v("显示创建数据库的SQL语句")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show create database 数据库名;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7-5-选择数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-选择数据库"}},[a._v("#")]),a._v(" 7.5 选择数据库")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use 数据库名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_8-表操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-表操作"}},[a._v("#")]),a._v(" 8 表操作")]),a._v(" "),t("h3",{attrs:{id:"_8-1-增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-增"}},[a._v("#")]),a._v(" 8.1 增")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create table [if not exists] 表名（字段名 数据类型 [null|not null] [auto_increment] [primary key] [comment], 字段名 数据类型 [default]...）engine=存储引擎;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("单词")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("null | not null   \t空|非空\ndefault\t          \t默认值\nauto_increment    \t自动增长\nprimary key       \t主键\ncomment           \t备注\nengine           \t引擎   \ninnodb  myisam  memory  引擎是决定数据存储的方式\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"_8-2-删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-删"}},[a._v("#")]),a._v(" 8.2 删")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("drop table [if exists] 表1,表2;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_8-3-改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-改"}},[a._v("#")]),a._v(" 8.3 改")]),a._v(" "),t("h4",{attrs:{id:"_8-3-1-修改表名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-1-修改表名"}},[a._v("#")]),a._v(" 8.3.1 修改表名")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa rename to bb;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-3-2-添加字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-2-添加字段"}},[a._v("#")]),a._v(" 8.3.2 添加字段")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa add age int;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在第一个位置上添加字段")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa add email varchar(30) first;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在指定的字段后添加字段")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa add age int(10) after name;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-3-3-删除字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-3-删除字段"}},[a._v("#")]),a._v(" 8.3.3 删除字段")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa drop email;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-3-4-修改字段名和类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-4-修改字段名和类型"}},[a._v("#")]),a._v(" 8.3.4 修改字段名和类型")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa change sex xingbie int;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-3-5-修改字段类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-5-修改字段类型"}},[a._v("#")]),a._v(" 8.3.5 修改字段类型")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa modify xingbie varchar(2);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-3-6-修改引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-6-修改引擎"}},[a._v("#")]),a._v(" 8.3.6 修改引擎")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("alter table aa engine=myisam;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_8-4-查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-查"}},[a._v("#")]),a._v(" 8.4 查")]),a._v(" "),t("h4",{attrs:{id:"_8-4-1-显示所有表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-1-显示所有表"}},[a._v("#")]),a._v(" 8.4.1 显示所有表")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show tables;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-4-2-显示创建表的语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-2-显示创建表的语句"}},[a._v("#")]),a._v(" 8.4.2 显示创建表的语句")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show create table 表名;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-4-3-查看表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-3-查看表结构"}},[a._v("#")]),a._v(" 8.4.3 查看表结构")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("desc 表名;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_8-5-复制表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-复制表"}},[a._v("#")]),a._v(" 8.5 复制表")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("create table 新表 select 字段 from 旧表;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-数据操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-数据操作"}},[a._v("#")]),a._v(" 9 数据操作")]),a._v(" "),t("h3",{attrs:{id:"_9-1-增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-增"}},[a._v("#")]),a._v(" 9.1 增")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into 表名 (字段名，字段名，...) values (值1，值2，...);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-2-删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-删"}},[a._v("#")]),a._v(" 9.2 删")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("delete from 表名 [where 条件];\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("删除表中所有记录")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("delete from aa;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-3-改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-改"}},[a._v("#")]),a._v(" 9.3 改")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("update 表名 set 字段=值 [where 条件];\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-4-查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-查"}},[a._v("#")]),a._v(" 9.4 查")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select 列名 from 表;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-5-清空表数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-清空表数据"}},[a._v("#")]),a._v(" 9.5 清空表数据")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("truncate table 表名;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_10-数据表的文件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-数据表的文件介绍"}},[a._v("#")]),a._v(" 10 数据表的文件介绍")]),a._v(" "),t("p",[a._v("一个数据库对应一个文件夹")]),a._v(" "),t("p",[a._v("一个表对应一个或多个文件")]),a._v(" "),t("p",[a._v("引擎是myisam，一个表对应三个文件")]),a._v(" "),t("ol",[t("li",[a._v("xx.frm  表结构")]),a._v(" "),t("li",[a._v("xx.MYD  数据")]),a._v(" "),t("li",[a._v("xx.MYI   index信息")])]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1536654269605.png",alt:"1536654269605"}})]),a._v(" "),t("p",[a._v("引擎是innodb,一个表对应一个表结构文件")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1536654519700.png",alt:"1536654519700"}})]),a._v(" "),t("p",[a._v("go3.frm 表结构")]),a._v(" "),t("p",[a._v("所有的innodb引擎的数据统一的存放在data\\ibdata1文件中。如果数据量很大，MySQL会自动的创建ibdata2，ibdata3，…，目的就是为了便于管理。")]),a._v(" "),t("p",[a._v("引擎是memory，数据存储在内存中，重启服务数据丢失，但是读取速度非常快")]),a._v(" "),t("h2",{attrs:{id:"_11-字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-字符集"}},[a._v("#")]),a._v(" 11 字符集")]),a._v(" "),t("p",[a._v("查看当前设置的字符编码集")]),a._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show variables like 'character_set_%';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("客户端编码、character_set_client、character_set_results三个编码的值一致即可操作中文。")]),a._v(" "),t("h2",{attrs:{id:"_12-思维导图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-思维导图"}},[a._v("#")]),a._v(" 12 思维导图")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/xmind.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);