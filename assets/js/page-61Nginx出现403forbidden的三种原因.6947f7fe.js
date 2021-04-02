(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{797:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_6-1-nginx出现403-forbidden的三种原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-nginx出现403-forbidden的三种原因"}},[s._v("#")]),s._v(" 6.1 Nginx出现403 forbidden的三种原因")]),s._v(" "),e("p",[s._v("引起"),e("code",[s._v("nginx 403 forbidden")]),s._v("通常是三种情况：一是缺少主页文件，二是权限问题，三是"),e("code",[s._v("SELinux")]),s._v("状态。")]),s._v(" "),e("h2",{attrs:{id:"缺少主页文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺少主页文件"}},[s._v("#")]),s._v(" 缺少主页文件")]),s._v(" "),e("div",{staticClass:"language-nginx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# index index.html index.htm;")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("clay"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("clay1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("clay2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("如果在"),e("code",[s._v("/clay/clay1/clay2/")]),s._v("下面没有"),e("code",[s._v("index.php")]),s._v("或"),e("code",[s._v("index.html")]),s._v("的时候，直接文件，会报403 forbidden。")]),s._v(" "),e("blockquote",[e("p",[s._v("当index文件问"),e("code",[s._v("index.html")]),s._v("时，index指令可以省略不写")])]),s._v(" "),e("h2",{attrs:{id:"权限问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限问题"}},[s._v("#")]),s._v(" 权限问题")]),s._v(" "),e("p",[s._v("主要原因是"),e("code",[s._v("nginx")]),s._v("启动用户没有，查看主页文件的权限")]),s._v(" "),e("p",[s._v("1）查看"),e("code",[s._v("nginx")]),s._v("启动用户")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx: worker process"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grep"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{ print "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" }'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2）查看主页文件权限及递归查看主页文件所在目录权限")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("主页文件，"),e("code",[s._v("nginx")]),s._v("启动用户要有"),e("code",[s._v("r")]),s._v("权限，读取文件内容的权限")])]),s._v(" "),e("li",[e("p",[s._v("递归主页所在的目录，"),e("code",[s._v("nginx")]),s._v("启动用户要有"),e("code",[s._v("x")]),s._v("权限，可以访问目录的内容")]),s._v(" "),e("blockquote",[e("p",[s._v("递归目录在上述配置文件中是指"),e("code",[s._v("/clay/")]),s._v("、"),e("code",[s._v("/clay/clay1/")]),s._v("、"),e("code",[s._v("/clay/clay1/clay2/")]),s._v("这三个目录")])])])]),s._v(" "),e("h2",{attrs:{id:"selinux为开启状态-enabled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux为开启状态-enabled"}},[s._v("#")]),s._v(" "),e("code",[s._v("SELinux")]),s._v("为开启状态(enabled)")]),s._v(" "),e("p",[s._v("1）查看当前"),e("code",[s._v("selinux")]),s._v("的状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/usr/sbin/sestatus \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2）将"),e("code",[s._v("SELINUX=enforcing")]),s._v(" 修改为 "),e("code",[s._v("SELINUX=disabled")]),s._v(" 状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/selinux/config\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SELINUX=enforcing")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SELINUX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("3）重启生效")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);