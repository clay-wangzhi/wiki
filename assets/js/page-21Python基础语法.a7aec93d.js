(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1005:function(t,s,a){"use strict";a.r(s);var v=a(1),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-1-python基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-python基础语法"}},[t._v("#")]),t._v(" 2.1 Python基础语法")]),t._v(" "),a("h2",{attrs:{id:"数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[t._v("#")]),t._v(" 数字")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("整数"),a("code",[t._v("int")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Python3")]),t._v("开始不再区分 long 、int ，long 被重命名为int，所以只有 int 类型了")]),t._v(" "),a("li",[t._v("进制表示：\n"),a("ul",[a("li",[t._v("十进制10")]),t._v(" "),a("li",[t._v("十六进制0x10")]),t._v(" "),a("li",[t._v("八进制0o10")]),t._v(" "),a("li",[t._v("二进制0b10")])])]),t._v(" "),a("li",[t._v("bool 类型，有2个值 True、False")])])]),t._v(" "),a("li",[a("p",[t._v("浮点数 float")]),t._v(" "),a("ul",[a("li",[t._v("1.2、3.1415、-0.12、1.46e9等价于科学计数法1.46*10"),a("sup",[t._v("9")])])])]),t._v(" "),a("li",[a("p",[t._v("复数 complex")]),t._v(" "),a("ul",[a("li",[t._v("1+2j 或 +2J")])])])]),t._v(" "),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("ul",[a("li",[t._v("使用‘ ”单双引号引用的字符的序列")]),t._v(" "),a("li",[t._v("'''和\"\"\" 单双三引号，可以跨行、可以在其中自由的使用单双引号")]),t._v(" "),a("li",[t._v("r 前缀：在字符串前面加上 r 或者 R 前缀，表示该字符串不做特殊的处理")]),t._v(" "),a("li",[t._v("f 前缀：3.6版本开始，新增 f 前缀，格式化字符串")])]),t._v(" "),a("h2",{attrs:{id:"转义序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义序列"}},[t._v("#")]),t._v(" 转义序列")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("\\\\")]),t._v(" "),a("code",[t._v("\\t")]),t._v(" "),a("code",[t._v("\\r")]),t._v(" "),a("code",[t._v("\\n")]),t._v(" "),a("code",[t._v("\\'")]),t._v(" "),a("code",[t._v('\\"')])]),t._v(" "),a("li",[t._v("上面每一个转义字符只代表一个字符，例如"),a("code",[t._v("\\t")]),t._v("显示时占了4个字符位置，但是它是一个字符")]),t._v(" "),a("li",[t._v("前缀 r，把里面的所有字符当普通字符对待，则转义字符就不转义了")])]),t._v(" "),a("p",[t._v("转义：让字符不再是它当前的意义，例如 \\t，t 就不是当前意义字符 t 了，而是被 \\ 转成了 tab 键")]),t._v(" "),a("h2",{attrs:{id:"续行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#续行"}},[t._v("#")]),t._v(" 续行")]),t._v(" "),a("ul",[a("li",[t._v("在行尾使用 \\，注意 \\ 之后除了紧跟着换行之外不能有其他字符")]),t._v(" "),a("li",[t._v("如果使用各种括号，认为括号内是一个整体，其内部跨行不用 \\")])]),t._v(" "),a("h2",{attrs:{id:"标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[t._v("#")]),t._v(" 标识符")]),t._v(" "),a("p",[a("strong",[t._v("标识符")])]),t._v(" "),a("ol",[a("li",[t._v("一个名字，用来指代一个值")]),t._v(" "),a("li",[t._v("只能是字母、下划线和数字")]),t._v(" "),a("li",[t._v("只能以字母或下划线开头")]),t._v(" "),a("li",[t._v("不能是 python 的关键字，例如 def、class 就不能作为标识符")]),t._v(" "),a("li",[t._v("Python 是大小写敏感的")])]),t._v(" "),a("p",[t._v("标识符约定：")]),t._v(" "),a("ul",[a("li",[t._v("不允许使用中文，也不建议使用拼音")]),t._v(" "),a("li",[t._v("不要使用歧义单词，例如class_")]),t._v(" "),a("li",[t._v("在python中不要随便使用下划线开头的标识符")])]),t._v(" "),a("p",[a("strong",[t._v("常量")])]),t._v(" "),a("ul",[a("li",[t._v("一旦赋值不能改变值的标识符")]),t._v(" "),a("li",[t._v("python中无法定义常量")])]),t._v(" "),a("p",[a("strong",[t._v("字面常量")])]),t._v(" "),a("ul",[a("li",[t._v("一个单独的不可变量，例如 12、\"abc\" 、'2341356514.03e-9'")])]),t._v(" "),a("p",[a("strong",[t._v("变量")])]),t._v(" "),a("ul",[a("li",[t._v("赋值后，可以改变值的标识符")])]),t._v(" "),a("p",[a("strong",[t._v("标识符本质")])]),t._v(" "),a("p",[t._v("每一个标识符对应一个具有数据结构的值，但是这个值不方便直接访问，程序员就可以通过其对应的标\n识符来访问数据，标识符就是一个指代。一句话，标识符是给程序员编程使用的。")]),t._v(" "),a("h2",{attrs:{id:"语言类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言类型"}},[t._v("#")]),t._v(" 语言类型")]),t._v(" "),a("blockquote",[a("p",[t._v("详见 https://clay-wangzhi.com/linux/gainian/code-type/")])]),t._v(" "),a("h2",{attrs:{id:"false-等价"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#false-等价"}},[t._v("#")]),t._v(" False 等价")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("对象/常量")]),t._v(" "),a("th",[t._v("值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('""')]),t._v(" "),a("td",[t._v("假")])]),t._v(" "),a("tr",[a("td",[t._v("“string”")]),t._v(" "),a("td",[t._v("真")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("假")])]),t._v(" "),a("tr",[a("td",[t._v(">=1")]),t._v(" "),a("td",[t._v("真")])]),t._v(" "),a("tr",[a("td",[t._v("<=-1")]),t._v(" "),a("td",[t._v("真")])]),t._v(" "),a("tr",[a("td",[t._v("()空元组")]),t._v(" "),a("td",[t._v("假")])]),t._v(" "),a("tr",[a("td",[t._v("[]空列表")]),t._v(" "),a("td",[t._v("假")])]),t._v(" "),a("tr",[a("td",[t._v("{}空字典")]),t._v(" "),a("td",[t._v("假")])]),t._v(" "),a("tr",[a("td",[t._v("None")]),t._v(" "),a("td",[t._v("假")])])])]),t._v(" "),a("p",[t._v("False 等价布尔值，相当于"),a("code",[t._v("bool(value)")])]),t._v(" "),a("ul",[a("li",[t._v("空容器\n"),a("ul",[a("li",[t._v("空集合 set")]),t._v(" "),a("li",[t._v("空字典 dict")]),t._v(" "),a("li",[t._v("空列表 list")]),t._v(" "),a("li",[t._v("空元组 tuple")])])]),t._v(" "),a("li",[t._v("空字符串")]),t._v(" "),a("li",[t._v("None")]),t._v(" "),a("li",[t._v("0")])]),t._v(" "),a("h2",{attrs:{id:"逻辑运算真值表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算真值表"}},[t._v("#")]),t._v(" 逻辑运算真值表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/log_op.png",alt:"log_ope"}})]),t._v(" "),a("h2",{attrs:{id:"运算符-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符-operator"}},[t._v("#")]),t._v(" 运算符 Operator")]),t._v(" "),a("p",[a("strong",[t._v("算数运算符")])]),t._v(" "),a("p",[t._v("+、-、*、/、//向下取整整除、%取模、**幂")]),t._v(" "),a("p",[t._v("注：在"),a("code",[t._v("Python2")]),t._v("中/和//都是整除。")]),t._v(" "),a("p",[a("strong",[t._v("位运算符")])]),t._v(" "),a("p",[t._v("&位与、|位或、^异或、<<左移、>>右移")]),t._v(" "),a("p",[t._v("~按位取反，包括符号位")]),t._v(" "),a("p",[a("strong",[t._v("比较运算符")])]),t._v(" "),a("p",[t._v("==、!=、>、>=、<、<=")]),t._v(" "),a("p",[t._v("链式比较： 4 > 3 > 2")]),t._v(" "),a("p",[a("strong",[t._v("逻辑运算符")])]),t._v(" "),a("p",[t._v("与and、或or、非not")]),t._v(" "),a("p",[t._v("逻辑运算符也是短路运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("and 如果前面的表达式等价为False，后面就没有必要计算了，这个逻辑表达式最终一定等价为\nFalse\n1 and '2' and 0\n0 and 'abc' and 1")])]),t._v(" "),a("li",[a("p",[t._v("or 如果前面的表达式等价为True，后面没有必要计算了，这个逻辑表达式最终一定等价为True\n1 or False or None")])]),t._v(" "),a("li",[a("p",[t._v("特别注意，返回值。返回值不一定是 bool 型")])]),t._v(" "),a("li",[a("p",[t._v("把最频繁使用的，做最少计算就可以知道结果的条件放到前面，如果它能短路，将大大减少计算量")])])]),t._v(" "),a("p",[a("strong",[t._v("赋值运算符")])]),t._v(" "),a("p",[t._v("a = min(3, 5)")]),t._v(" "),a("p",[t._v("+=、 -= 、*=、/=、%=、//= 等")]),t._v(" "),a("p",[t._v("x = y = z = 10")]),t._v(" "),a("p",[a("strong",[t._v("成员运算符")])]),t._v(" "),a("p",[t._v("in、not in")]),t._v(" "),a("p",[a("strong",[t._v("身份运算符")])]),t._v(" "),a("p",[t._v("is、is not")]),t._v(" "),a("h2",{attrs:{id:"运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级"}},[t._v("#")]),t._v(" 运算符优先级")]),t._v(" "),a("ul",[a("li",[t._v("单目运算符 > 双目运算符")]),t._v(" "),a("li",[t._v("算数运算符 > 位运算符 > 比较运算符 > 逻辑运算符\n"),a("ul",[a("li",[t._v("-3 + 2 > 5 and 'a' > 'b'")])])])]),t._v(" "),a("p",[t._v("搞不清楚就使用括号。长表达式，多用括号，易懂、易读。")]),t._v(" "),a("h2",{attrs:{id:"表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[t._v("#")]),t._v(" 表达式")]),t._v(" "),a("p",[t._v("由数字、符号、括号、变量等的组合。有算数表达式、逻辑表达式、赋值表达式、lambda 表达式等\n等。")]),t._v(" "),a("p",[t._v("Python 中，赋值即定义。Python 是动态语言，只有赋值才会创建一个变量，并决定了变量的类型和\n值。")]),t._v(" "),a("p",[t._v("如果一个变量已经定义，赋值相当于重新定义。")]),t._v(" "),a("h2",{attrs:{id:"内建函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内建函数"}},[t._v("#")]),t._v(" 内建函数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("内建函数")]),t._v(" "),a("th",[t._v("函数签名")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("print")]),t._v(" "),a("td",[t._v("print(value, ..., sep=' ', end='\\n')")]),t._v(" "),a("td",[t._v("将多个数据输出到控制台，默认使用空格分隔、\\n 换行")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("input([prompt])")]),t._v(" "),a("td",[t._v("在控制台和用户交互，接收用户输入，并返回字符串")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("int(value)")]),t._v(" "),a("td",[t._v("将给定的值，转换成整数。int 本质是类")])]),t._v(" "),a("tr",[a("td",[t._v("str")]),t._v(" "),a("td",[t._v("str(value)")]),t._v(" "),a("td",[t._v("将给定的值，转换成字符串。str 本质是元类")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("type(value)")]),t._v(" "),a("td",[t._v("返回对象的类型。本质是元类")])]),t._v(" "),a("tr",[a("td",[t._v("isinstance")]),t._v(" "),a("td",[t._v("isinstance(obj, class_or_tuple)")]),t._v(" "),a("td",[t._v("比较对象的类型，类型可以是 obj 的基类")])])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'***'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回的是类型，不是字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回的是类型，不是字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回type，意思是这个int类型由type构造出来")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回type，也是类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也是type")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# True")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);