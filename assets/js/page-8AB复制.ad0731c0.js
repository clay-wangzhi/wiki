(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{699:function(a,s,e){"use strict";e.r(s);var t=e(1),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_8-ab复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-ab复制"}},[a._v("#")]),a._v(" 8 AB复制")]),a._v(" "),e("h2",{attrs:{id:"mysql-ab简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-ab简介"}},[a._v("#")]),a._v(" MySQL AB简介")]),a._v(" "),e("p",[a._v("AB复制又称主从复制，实现的是数据同步。")]),a._v(" "),e("p",[a._v("如果要做MySQL AB复制，数据库版本尽量保持一致。如果版本不一致，从服务器版本高于主服务器，但是版本不一致不能做双向复制。")]),a._v(" "),e("p",[a._v("MySQL AB复制有什么好处呢？")]),a._v(" "),e("ul",[e("li",[a._v("解决宕机带来的数据不一致，因为MySQL AB复制可以实时备份数据；")]),a._v(" "),e("li",[a._v("减轻数据库服务器压力，多台服务器的性能一般比单台要好。但是MySQL AB复制不适用于大数据量，如果是大数据环境，推荐使用集群。")])]),a._v(" "),e("p",[a._v("​    MySQL复制（replication）是一个异步的复制，从一个MySQL实例（Master）复制到另一个MySQL（Slave）。实现整个主从复制，需要由Master服务器上的IO进程，和Slave服务器上的Sql进程和IO进程共同完成。")]),a._v(" "),e("h2",{attrs:{id:"主从复制的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的过程"}},[a._v("#")]),a._v(" 主从复制的过程")]),a._v(" "),e("p",[a._v("​    要实现主从复制，首先必须打开Master端的binary log(bin-log)功能，因为整个MySQL复制过程实际上就是Slave从Master端获取相应的二进制日志，然后再在自己slave端完全顺序的执行日志中所有记录的各种操作。\n主从复制的基本过程：\n​    1）MySQL Slave端的IO进程连接上Master，向Master请求指定日志文件的指定位置（或者从最开始的日志）之后的日志内容；")]),a._v(" "),e("p",[a._v("​    2）Master接收到来自Slave的IO进程的请求后，负责复制的IO进程根据Slave的请求信息，读取相应日志内容，返回给Slave的IO的进程。并将本次请求读到的bin-log文件名及位置一起返回给Slave端。")]),a._v(" "),e("p",[a._v("​    3）Slave的IO进程接收到信息后，将接收到的日志内容依次添加Slave端的realy-log文件的最末端，并将读取到的Master端的bin-log的文件名和位置记录到master-info文件中，以便在下一次读取的时候能够清楚的告诉Master“我需要从某个bin-log的哪个位置开始往后的日志内容，请发给我；”")]),a._v(" "),e("p",[a._v("​    4）Slave的Sql进程监测到relay-log中新增了内容后，会马上解析relay-log的内容成为在Master端真实执行时候的那些可执行的内容，并在自身执行。")]),a._v(" "),e("h3",{attrs:{id:"主服务器操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主服务器操作"}},[a._v("#")]),a._v(" 主服务器操作")]),a._v(" "),e("h4",{attrs:{id:"全备-并在从机恢复数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全备-并在从机恢复数据"}},[a._v("#")]),a._v(" 全备，并在从机恢复数据")]),a._v(" "),e("h4",{attrs:{id:"开启binlog日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启binlog日志"}},[a._v("#")]),a._v(" 开启binlog日志")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vim /etc/my.cnf\n[mysqld]\nlog-bin = master\nlog-bin-index = master\nserver-id = 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("service mysqld restart\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"授权从服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权从服务器"}},[a._v("#")]),a._v(" 授权从服务器")]),a._v(" "),e("p",[a._v("授权从服务器，可以传输binlog日志")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("grant replication slave on *.* to slave@'从服务器' identified by '123';\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"从服务器操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从服务器操作"}},[a._v("#")]),a._v(" 从服务器操作")]),a._v(" "),e("h4",{attrs:{id:"导入主服务器的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入主服务器的数据"}},[a._v("#")]),a._v(" 导入主服务器的数据")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql -u root < all.sql\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"改配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改配置文件"}},[a._v("#")]),a._v(" 改配置文件")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vim /etc/my.cnf\n[mysqld]\nserver-id = 2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"配置主服务器的信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置主服务器的信息"}},[a._v("#")]),a._v(" 配置主服务器的信息")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(">stop slave;\n>change master to\n-> master_host = '主服务器'，\n->master_user = 'slave',\n->master_password = '123',\n->master_port = 3306,\n->master_log_file = 'mysql-bin.000001',\n-> master_log_pos=120;\n>start slave;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h3",{attrs:{id:"校验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#校验"}},[a._v("#")]),a._v(" 校验")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> show slave status\\G\nSlave_IO_Running: Yes\nSlave_SQL_Running: Yes\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("表示成功")]),a._v(" "),e("p",[a._v("​")])])}),[],!1,null,null,null);s.default=r.exports}}]);