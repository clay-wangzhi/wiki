(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{838:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("如何查看当前服务器内核的版本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("uname -r\ncat /proc/version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("查看当前服务器 cpu 的 core(核心)数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 总核数 = 物理CPU个数 X 每颗物理CPU的核数 \n# 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数\n# 查看物理CPU个数\ncat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l\n# 查看每个物理CPU中core的个数(即核数)\ncat /proc/cpuinfo| grep "cpu cores"| uniq\n# 查看逻辑CPU的个数\ncat /proc/cpuinfo| grep "processor"| wc -l\n查看CPU信息（型号）\ncat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);