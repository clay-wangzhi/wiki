(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1093:function(n,s,e){"use strict";e.r(s);var t=e(1),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_30-网络编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30-网络编程"}},[n._v("#")]),n._v(" 30 网络编程")]),n._v(" "),e("blockquote",{staticClass:"blockquote-center"},[n._v("The Net's a cross between an elephant and a white elephant sale: it never forgets, and it's always crap."),e("br"),n._v("\n                                                  --Nemo")]),n._v(" "),e("p",[n._v("Linux系统拥有一系列的工具，用于访问、操作和调解网络连接。我们能够把其中的一部分工具整合到脚本中 -- 这些脚本能扩展我们对网络的认知，有用的脚本还能方便网络管理。")]),n._v(" "),e("p",[n._v("以下是一个简单的CGI脚本，阐述如何连接到远程服务器。")]),n._v(" "),e("p",[n._v("例子 30-1. 打印服务器环境")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#!/bin/bash\n# test-cgi.sh\n# by Michael Zick\n# Used with permission\n\n# 您应该根据您的情况修改相应的Bash路径\n# （在ISP的服务器中，Bash一般不会放在正常的位置）\n# 其他位置： /usr/bin 或者 /usr/local/bin\n# 甚至应该在sha-bang中不用任何路径运行它\n\n# 取消通配符\nset -f\n\n# Http Header（译者注：此头信息是告诉浏览器服务器返回的内容格式）\necho Content-type: text/plain\necho\n\necho CGI/1.0 test script report:\necho\n\necho environment settings:\nset\necho\n\necho whereis bash?\nwhereis bash\necho\n\n\necho who are we?\necho ${BASH_VERSINFO[*]}\necho\n\necho argc is $#. argv is "$*".\necho\n\n# CGI/1.0 预期的环境变量。\n\necho SERVER_SOFTWARE = $SERVER_SOFTWARE\necho SERVER_NAME = $SERVER_NAME\necho GATEWAY_INTERFACE = $GATEWAY_INTERFACE\necho SERVER_PROTOCOL = $SERVER_PROTOCOL\necho SERVER_PORT = $SERVER_PORT\necho REQUEST_METHOD = $REQUEST_METHOD\necho HTTP_ACCEPT = "$HTTP_ACCEPT"\necho PATH_INFO = "$PATH_INFO"\necho PATH_TRANSLATED = "$PATH_TRANSLATED"\necho SCRIPT_NAME = "$SCRIPT_NAME"\necho QUERY_STRING = "$QUERY_STRING"\necho REMOTE_HOST = $REMOTE_HOST\necho REMOTE_ADDR = $REMOTE_ADDR\necho REMOTE_USER = $REMOTE_USER\necho AUTH_TYPE = $AUTH_TYPE\necho CONTENT_TYPE = $CONTENT_TYPE\necho CONTENT_LENGTH = $CONTENT_LENGTH\n\nexit 0\n\n# 在这里，文档给出一些简短的指令。\n:<<-\'_test_CGI_\'\n\n1) 将此文档放到http://domain.name/cgi-bin的目录。\n2) 然后，访问http://domain.name/cgi-bin/test-cgi.sh.\n\n_test_CGI_\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br")])]),e("p",[n._v("出于安全的考虑，确认连接计算机的IP地址是有用的。\n例子 30-2. IP地址")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#!/bin/bash\n# ip-addresses.sh\n# 列出您的计算机所连接的IP地址。\n\n#  受Greg Bledsoe的ddos.sh脚本所启发，\n#  Linux Journal，2011年3月9号。\n#    URL:\n#  http://www.linuxjournal.com/content/back-dead-simple-bash-complex-ddos\n#  Greg licensed his script under the GPL2,\n#+ and as a derivative, this script is likewise GPL2.\n\nconnection_type=TCP      # 也可以使用UDP\nfield=2           # Which field of the output we\'re interested in.\nno_match=LISTEN   # 过滤出包含此字符串的记录，为什么？\nlsof_args=-ni     # -i 列出互联网相关的文件。\n                  # -n 使用数值IP地址。\n\t\t  # 如果不使用-n选项，会发生什么情况？试试看。\nrouter="[0-9][0-9][0-9][0-9][0-9]->"\n#       删除路由信息。\n\nlsof "$lsof_args" | grep $connection_type | grep -v "$no_match" |\n      awk \'{print $9}\' | cut -d : -f $field | sort | uniq |\n      sed s/"^$router"//\n\n#  Bledsoe的脚本将过滤出的IP地址结果赋给一个变量（类似上面的19行到22行）。\n#  他检查连接到一个IP地址的多个连接，\n#  使用：\n#\n#    iptables -I INPUT -s $ip -p tcp -j REJECT --reject-with tcp-reset\n#\n#  ... 在每一次的60秒延迟循环中，拒绝来自DDOS攻击的数据包。\n\n\n#  练习：\n#  --------\n#  使用\'iptable\'命令扩展这个脚本\n#+ 来拒绝一些来自垃圾邮件发送者的IP域名的连接请求。\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br")])]),e("hr"),n._v(" "),e("p",[n._v("更多网络编程的例子：")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/devref1.html#NPREF",target:"_blank",rel:"noopener noreferrer"}},[n._v("Getting the time from nist.gov"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/devref1.html#NW001",target:"_blank",rel:"noopener noreferrer"}},[n._v("Downloading a URL"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/system.html#IPSCRIPT0",target:"_blank",rel:"noopener noreferrer"}},[n._v("A GRE tunnel"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/communications.html#PING0",target:"_blank",rel:"noopener noreferrer"}},[n._v("Checking if an Internet server is up"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/communications.html#ISSPAMMER",target:"_blank",rel:"noopener noreferrer"}},[n._v("例子 16-41"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#ISSPAMMER2",target:"_blank",rel:"noopener noreferrer"}},[n._v("例子 A-28"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#WHX",target:"_blank",rel:"noopener noreferrer"}},[n._v("例子 A-29"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/devref1.html#DEVTCP",target:"_blank",rel:"noopener noreferrer"}},[n._v("例子 29-1"),e("OutboundLink")],1)])]),n._v(" "),e("p",[n._v("更多资料请看"),e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/system.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("《System and Administrative Commands》"),e("OutboundLink")],1),n._v("的章节"),e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/system.html#NETWORKSYS1",target:"_blank",rel:"noopener noreferrer"}},[n._v("“网络命令”"),e("OutboundLink")],1),n._v("，以及"),e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/external.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("《External Filters, Programs and Commands》"),e("OutboundLink")],1),n._v("的章节"),e("a",{attrs:{href:"http://tldp.org/LDP/abs/html/communications.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("“通信命令”"),e("OutboundLink")],1),n._v("。")])])}),[],!1,null,null,null);s.default=a.exports}}]);