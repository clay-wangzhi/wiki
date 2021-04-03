(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{547:function(t,s,r){"use strict";r.r(s);var e=r(1),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"第五章-引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第五章-引用"}},[t._v("#")]),t._v(" 第五章 引用")]),t._v(" "),r("h3",{attrs:{id:"本章目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本章目录"}},[t._v("#")]),t._v(" 本章目录")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/Linux/shell/part2/05_1_quoting_variables.html"}},[t._v("5.1 引用变量")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/Linux/shell/part2/05_2_escaping.html"}},[t._v("5.2 转义")])],1)]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("引用就是将一个字符串用引号括起来。这样做是为了保护Shell/Shell脚本中被重新解释过或带扩展功能的"),r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/special-chars.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("特殊字符"),r("OutboundLink")],1),t._v("（如果一个字符带有其特殊意义而不仅仅是字面量的话，这个字符就能称为“特殊字符”。比如星号“*”就能表示"),r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式"),r("OutboundLink")],1),t._v("中的一个"),r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/globbingref.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通配符"),r("OutboundLink")],1),t._v("）。")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("bash$ ls -l [Vv]*\n-rw-rw-r--    1 bozo  bozo       324 Apr  2 15:05 VIEWDATA.BAT\n-rw-rw-r--    1 bozo  bozo       507 May  4 14:25 vartrace.sh\n-rw-rw-r--    1 bozo  bozo       539 Apr 14 17:11 viewdata.sh\n\nbash$ ls -l '[Vv]*'\nls: [Vv]*: No such file or directory\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("blockquote",[r("p",[t._v("可以看到，提示不存在该文件。这里的"),r("code",[t._v("'[Vv]*")]),t._v("被当成了文件名。\n在日常沟通和写作中，当我们引用一个短语的时候，我们会将它单独隔开并赋予它特殊的意义，而在bash脚本中，当我们"),r("em",[t._v("引用")]),t._v("一个字符串，意味着保留它的"),r("em",[t._v("字面量")]),t._v("。")])]),t._v(" "),r("p",[t._v("很多程序和公用代码会展开被引用字符串中的特殊字符。引用的一个重用用途是保护Shell中的命令行参数，但仍然允许调用的程序扩展它。")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("bash$ grep '[Ff]irst' *.txt\nfile1.txt:This is the first line of file1.txt.\nfile2.txt:This is the First line of file2.txt.\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("blockquote",[r("p",[t._v("在所有.txt文件中找出包含first或者First字符串的行")])]),t._v(" "),r("p",[t._v("注意，不加引号的 "),r("code",[t._v("grep [Ff]irst *.txt")]),t._v(" 在Bash下也同样有效。"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1"}},[t._v("[1]")]),r("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})])]),t._v(" "),r("p",[t._v("引用也可以控制"),r("a",{attrs:{href:"http://tldp.org/LDP/abs/html/internal.html#ECHOREF",target:"_blank",rel:"noopener noreferrer"}},[t._v("echo"),r("OutboundLink")],1),t._v("命令的断行符。")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('bash$ echo $(ls -l)\ntotal 8 -rw-rw-r-- 1 bo bo 13 Aug 21 12:57 t.sh -rw-rw-r-- 1 bo bo 78 Aug 21 12:57 u.sh\n\n\nbash$ echo "$(ls -l)"\ntotal 8\n -rw-rw-r--  1 bo bo  13 Aug 21 12:57 t.sh\n -rw-rw-r--  1 bo bo  78 Aug 21 12:57 u.sh\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("hr",{staticClass:"footnotes-sep"}),t._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[t._v("前提是当前目录下有文件名为First或first的文件。这也是使用引用的另一个原因。（感谢 Harald Koenig 指出了这一点） "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);