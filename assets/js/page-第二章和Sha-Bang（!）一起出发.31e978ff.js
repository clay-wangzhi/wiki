(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{538:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"第二章-和sha-bang-一起出发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二章-和sha-bang-一起出发"}},[s._v("#")]),s._v(" 第二章 和Sha-Bang（#!）一起出发")]),s._v(" "),t("blockquote",[t("p",[s._v("Shell编程声名显赫")]),s._v(" "),t("p",[s._v("—— Larry Wall")])]),s._v(" "),t("h3",{attrs:{id:"本章目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章目录"}},[s._v("#")]),s._v(" 本章目录")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/Linux/shell/part1/02_1_invoking_the_script.html"}},[s._v("2.1 调用一个脚本")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/Linux/shell/part1/02_2_preliminary_exercises.html"}},[s._v("2.2 牛刀小试")])],1)]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("一个最简单的脚本其实就是将一连串系统命令存储在一个文件中。最起码，它能帮你省下重复输入这一连串命令的功夫。")]),s._v(" "),t("p",[s._v("样例 2-1. "),t("em",[s._v("cleanup")]),s._v("：清理"),t("code",[s._v("/var/log")]),s._v("目录下的日志文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cleanup")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用root权限执行")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" messages\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" wtmp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Log files cleaned up."')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("这支脚本仅仅是一些可以很容易从终端或控制台输入的命令的集合罢了，没什么特殊的地方。将命令放在脚本中的好处是，你不用再一遍遍重复输入这些命令啦。脚本成了一支"),t("em",[s._v("程序")]),s._v("、一款"),t("em",[s._v("工具")]),s._v("，它可以很容易的被修改或为特殊需求定制。")]),s._v(" "),t("p",[s._v("样例 2-2. "),t("em",[s._v("cleanup")]),s._v("：改进的清理脚本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Bash脚本标准起始行。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cleanup, version 2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用root权限执行。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里可以插入代码来打印错误信息，并在未使用root权限时退出。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOG_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用变量比硬编码（hard-coded）更合适")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOG_DIR")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" messages\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" wtmp\n\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Logs cleaned up."')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确终止脚本的方式。")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不带参数的exit返回上一条指令的运行结果。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("现在我们看到了一个真正意义上的脚本! 让我们继续前进...")]),s._v(" "),t("p",[s._v("样例 2-3. "),t("em",[s._v("cleanup")]),s._v("：改良、通用版")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cleanup, version 3")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此脚本涉及到许多后边才会解释的特性。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当你阅读完整本书的一半以后，理解它们就没有任何困难了。")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOG_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROOT_UID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UID为0的用户才拥有root权限。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LINES")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认保存messages日志文件行数。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("E_XCD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无法切换工作目录的错误码。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("E_NOTROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非root权限用户执行的错误码。")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请使用root权限运行。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$UID")]),s._v('"')]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROOT_UID")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Must be root to run this script."')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$E_NOTROOT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试命令行参数（保存行数）是否为空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lines")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lines")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$LINES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果为空则使用默认设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  Stephane Chazelas 建议使用如下方法检查命令行参数，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  但是这已经超出了此阶段教程的范围。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    E_WRONGARGS=85  # Non-numerical argument (bad argument format).")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    case "$1" in')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    ""      ) lines=50;;')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    *[!0-9]*) echo "Usage: `basename $0` lines-to-cleanup";')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     exit $E_WRONGARGS;;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    *       ) lines=$1;;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    esac")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#* 在第十一章“循环与分支”中会对此作详细的阐述。")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOG_DIR")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOG_DIR")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 也可以这样写 if [ "$PWD" != "$LOG_DIR" ]')]),s._v("\n                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查工作目录是否为 /var/log ?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Can't change to "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOG_DIR")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$E_XCD")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在清理日志前，二次确认是否在正确的工作目录下。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更高效的写法：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /var/log || {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   echo "Cannot change to necessary directory." >&2')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   exit $E_XCD;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# }")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lines")]),s._v(" messages "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mesg.temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存messages日志文件最后一部分")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mesg.temp messages              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换系统日志文件以达到清理目的")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  cat /dev/null > messages")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#* 我们不需要使用这个方法了，上面的方法更安全")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" wtmp  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ': > wtmp' 与 '> wtmp' 有同样的效果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Log files cleaned up."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  注意在/var/log目录下的其他日志文件不会被这个脚本清除")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  返回0表示脚本运行成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br")])]),t("p",[s._v("也许你并不希望清空全部的系统日志，这个脚本保留了messages日志的最后一部分。随着学习的深入，你将明白更多提高脚本运行效率的方法。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("脚本起始行"),t("em",[s._v("sha-bang")]),s._v("（#!）"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn1"}},[s._v("[1]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})]),s._v("告诉系统这个脚本文件需要使用指定的命令解释器来执行。#!实际上是一个占两字节"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn2"}},[s._v("[2]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref2"}})]),s._v("的"),t("em",[s._v("幻数")]),s._v("（magic number）,幻数可以用来标识特殊的文件类型，在这里则是标记可执行shell脚本（你可以在终端中输入"),t("code",[s._v("man magic")]),s._v("了解更多信息）。紧随#!的是一个路径名。此路径指向用来解释此脚本的程序，它可以是shell，可以是程序设计语言，也可以是实用程序。这个解释器从头（#!的下一行）开始执行整个脚本的命令，同时忽略注释。"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn3"}},[s._v("[3]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref3"}})])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#!/bin/sh\n#!/bin/bash\n#!/usr/bin/perl\n#!/usr/bin/tcl\n#!/bin/sed -f\n#!/bin/awk -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("上面每一条脚本起始行都调用了不同的解释器，比如"),t("code",[s._v("/bin/sh")]),s._v("调用了系统默认shell（Linux系统中默认是bash）"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn4"}},[s._v("[4]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref4"}})]),s._v("。大部分UNIX商业发行版中默认的是Bourne shell，即"),t("code",[s._v("#!/bin/sh")]),s._v("。你可以以牺牲Bash特性为代价，在非Linux的机器上运行sh脚本。当然，脚本得遵循POSIX"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn5"}},[s._v("[5]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref5"}})]),s._v(" sh标准。")]),s._v(" "),t("p",[s._v("需要注意的是"),t("code",[s._v("#!")]),s._v('后的路径必须正确，否则当你运行脚本时只会得到一条错误信息，通常是"Command not found."'),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn6"}},[s._v("[6]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref6"}})])]),s._v(" "),t("p",[s._v("当脚本仅包含一些通用的系统命令而不使用shell内部指令时，可以省略"),t("code",[s._v("#!")]),s._v("。第三个例子需要"),t("code",[s._v("#!")]),s._v("是因为当对变量赋值时，例如"),t("code",[s._v("lines=50")]),s._v("，使用了与shell特性相关的结构"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn7"}},[s._v("[7]")]),t("a",{staticClass:"footnote-anchor",attrs:{id:"fnref7"}})]),s._v("。再重复一次，"),t("code",[s._v("#!/bin/sh")]),s._v("调用的是系统默认shell解释器，在Linux系统中默认为"),t("code",[s._v("/bin/bash")]),s._v("。")]),s._v(" "),t("p",[s._v("这个例子鼓励读者使用模块化的方式编写脚本，并在平时记录和收集一些在以后可能会用到的代码模板。最终你将拥有一个相当丰富易用的代码库。以下的代码可以用来测试脚本被调用时的参数数量是否正确。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("E_WRONG_ARGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("85")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("script_parameters")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-a -h -m -z"')]),s._v("\n                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a = all, -h = help 等等")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Number_of_expected_args")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" $0"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$script_parameters")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# `basename $0` 是脚本的文件名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$E_WRONG_ARGS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("大多数情况下，你会针对特定的任务编写脚本。本章的第一个脚本就是这样。然后你也许会泛化（generalize）脚本使其能够适应更多相似的任务，比如用变量代替硬编码，用函数代替重复代码。")]),s._v(" "),t("hr",{staticClass:"footnotes-sep"}),s._v(" "),t("section",{staticClass:"footnotes"},[t("ol",{staticClass:"footnotes-list"},[t("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[t("p",[s._v("在文献中更常见的形式是she-bang或者sh-bang。它们都来源于词汇sharp(#)和bang(!)的连接。 "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[s._v("↩︎")])])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[t("p",[s._v("一些UNIX的衍生版（基于4.2 BSD）声称他们使用四字节的幻数，在#!后增加一个空格，即"),t("code",[s._v("#! /bin/sh")]),s._v("。而"),t("a",{attrs:{href:"http://www.in-ulm.de/~mascheck/various/shebang/#details",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sven Mascheck"),t("OutboundLink")],1),s._v("指出这是虚构的。 "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[s._v("↩︎")])])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[t("p",[s._v("命令解释器首先将会解释#!这一行，而因为#!以#打头，因此解释器将其视作注释。起始行作为调用解释器的作用已经完成了。")]),t("p",[s._v("事实上即使脚本中含有不止一个#!,bash也会将除第一个`#!`以外的解释为注释。")]),t("pre",[s._v("#!/bin/bash"),t("br"),t("br"),s._v('echo "Part 1 of script."'),t("br"),s._v("a=1"),t("br"),t("br"),s._v("#!/bin/bash"),t("br"),s._v("# 这并不会启动新的脚本"),t("br"),t("br"),s._v('echo "Part 2 of script."'),t("br"),s._v("echo $a  # $a的值仍旧为1")]),s._v(" "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[s._v("↩︎")])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[t("p",[s._v("这里允许使用一些技巧。")]),t("pre",[s._v("#!/bin/rm"),t("br"),s._v("# 自我删除的脚本"),t("br"),t("br"),s._v("# 当你运行这个脚本，除了这个脚本本身消失以外并不会发生什么。"),t("br"),t("br"),s._v("WHATEVER=85"),t("br"),t("br"),s._v('echo "This line will never print (betcha!)."'),t("br"),t("br"),s._v("exit $WHATEVER  # 这没有任何关系。脚本将不会从这里退出。"),t("br"),s._v("                # 尝试在脚本终止后打印echo $a。"),t("br"),s._v("                # 得到的值将会是0而不是85.")]),s._v("当然你也可以建立一个起始行是`#!/bin/more`的README文件，并且使它可以执行。结果就是这个文件成为了一个可以打印本身的文件。（查看样例 19-3，使用`cat`命令的here document也许是一个更好的选择）\n "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[s._v("↩︎")])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[t("p",[s._v("可移植操作系统接口（POSIX）尝试标准化类UNIX操作系统。POSIX规范可以在"),t("a",{attrs:{href:"http://www.opengroup.org/onlinepubs/007904975/toc.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Open Group site"),t("OutboundLink")],1),s._v("中查看。 "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[s._v("↩︎")])])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[t("p",[s._v("为了避免这种情况的发生，可以使用"),t("code",[s._v("#!/bin/env bash")]),s._v("作为起始行。这在bash不在"),t("code",[s._v("/bin")]),s._v("的UNIX系统中会有效果。 "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[s._v("↩︎")])])]),s._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[t("p",[s._v("如果bash是系统默认shell，那么脚本并不一定需要#!作为起始行。但是当你在其他的shell中运行脚本，例如tcsh，则需要使用#!。 "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[s._v("↩︎")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);