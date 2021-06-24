(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1032:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-2-序列化和反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-序列化和反序列化"}},[t._v("#")]),t._v(" 7.2 序列化和反序列化")]),t._v(" "),a("h2",{attrs:{id:"csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv"}},[t._v("#")]),t._v(" csv")]),t._v(" "),a("h3",{attrs:{id:"csv-文件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-文件简介"}},[t._v("#")]),t._v(" csv 文件简介")]),t._v(" "),a("p",[t._v("参看 RFC 4180\nhttp://www.ietf.org/rfc/rfc4180.txt")]),t._v(" "),a("p",[t._v("逗号分隔值Comma-Separated Values。\nCSV 是一个被行分隔符、列分隔符划分成行和列的文本文件。\nCSV 不指定字符编码。")]),t._v(" "),a("p",[t._v("行分隔符为\\r\\n，最后一行可以没有换行符\n列分隔符常为逗号或者制表符。\n每一行称为一条记录record")]),t._v(" "),a("p",[t._v("字段可以使用双引号括起来，也可以不使用。如果字段中出现了双引号、逗号、换行符必须使用双引号\n括起来。如果字段的值是双引号，使用两个双引号表示一个转义。")]),t._v(" "),a("p",[t._v("表头可选，和字段列对齐就行了。")]),t._v(" "),a("h3",{attrs:{id:"csv-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-模块"}},[t._v("#")]),t._v(" csv 模块")]),t._v(" "),a("p",[a("code",[t._v("reader(csvfile, dialect='excel', **fmtparams)")]),t._v("\n返回reader对象，是一个行"),a("strong",[t._v("迭代器")]),t._v("。")]),t._v(" "),a("p",[t._v("默认使用excel方言，如下：")]),t._v(" "),a("ul",[a("li",[t._v("delimiter 列分隔符,逗号")]),t._v(" "),a("li",[t._v("lineterminator 行分隔符\\r\\n")]),t._v(" "),a("li",[t._v('quotechar 字段的引用符号，缺省为 " 双引号')]),t._v(" "),a("li",[t._v("双引号的处理\n"),a("ul",[a("li",[t._v("doublequote 双引号的处理，默认为True。如果碰到数据中有双引号，而quotechar也是双引号，True则使用2个双引号表示，False表示使用转义字符将作为双引号的前缀")]),t._v(" "),a("li",[t._v("escapechar 一个转义字符，默认为None")]),t._v(" "),a("li",[t._v("writer = csv.writer(f, doublequote=False, escapechar='@') 遇到双引号，则必须提供转义字符")])])]),t._v(" "),a("li",[t._v("quoting 指定双引号的规则\n"),a("ul",[a("li",[t._v("QUOTE_ALL 所有字段")]),t._v(" "),a("li",[t._v("QUOTE_MINIMAL特殊字符字段，Excel方言使用该规则")]),t._v(" "),a("li",[t._v("QUOTE_NONNUMERIC非数字字段")]),t._v(" "),a("li",[t._v("QUOTE_NONE都不使用引号。")])])])]),t._v(" "),a("p",[a("code",[t._v("writer(csvfile, dialect='excel', **fmtparams)")]),t._v("\n返回DictWriter的实例。\n主要方法有writerow、writerows。")]),t._v(" "),a("p",[a("code",[t._v("writerow(iterable)")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csv\nrows "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'comment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jerry'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jerry'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'justin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'just\\t\"in'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcdefgh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# newline=''，表示写入时，不要做\\n的替换，那么输出就是\\r\\n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o:/test.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    writer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writerows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# newline=''，表示读取时，也不做\\n的替换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o:/test.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    reader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 行迭代器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" reader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h2",{attrs:{id:"ini-文件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ini-文件处理"}},[t._v("#")]),t._v(" ini 文件处理")]),t._v(" "),a("p",[t._v("略")]),t._v(" "),a("h2",{attrs:{id:"序列化和反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化"}},[t._v("#")]),t._v(" 序列化和反序列化")]),t._v(" "),a("h3",{attrs:{id:"为什么要序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要序列化"}},[t._v("#")]),t._v(" 为什么要序列化")]),t._v(" "),a("p",[t._v("内存中的字典、列表、集合以及各种对象，如何保存到一个文件中？")]),t._v(" "),a("p",[t._v("如果是自己定义的类的实例，如何保存到一个文件中？")]),t._v(" "),a("p",[t._v("如何从文件中读取数据，并让它们在内存中再次恢复成自己对应的类的实例？")]),t._v(" "),a("p",[t._v("要设计一套协议，按照某种规则，把内存中数据保存到文件中。文件是一个字节序列，所以必须把数据转换成字节序列，输出到文件。这就是序列化。")]),t._v(" "),a("p",[t._v("反之，从文件的字节序列恢复到内存并且还是原来的类型，就是反序列化。")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("serialization 序列化\n将内存中对象存储下来，把它变成一个个字节。-> 二进制")]),t._v(" "),a("p",[t._v("deserialization 反序列化\n将文件的一个个字节恢复成内存中对象。<- 二进制")]),t._v(" "),a("p",[t._v("序列化保存到文件就是持久化。\n可以将数据序列化后持久化，或者网络传输；也可以将从文件中或者网络接收到的字节序列反序列化。")]),t._v(" "),a("p",[t._v("Python 提供了pickle 库。")]),t._v(" "),a("h3",{attrs:{id:"pickle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pickle"}},[t._v("#")]),t._v(" pickle")]),t._v(" "),a("p",[t._v("Python中的序列化、反序列化模块。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("函数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dumps")]),t._v(" "),a("td",[t._v("对象序列化为bytes对象")])]),t._v(" "),a("tr",[a("td",[t._v("dump")]),t._v(" "),a("td",[t._v("对象序列化到文件对象，就是存入文件")])]),t._v(" "),a("tr",[a("td",[t._v("loads")]),t._v(" "),a("td",[t._v("从bytes对象反序列化")])]),t._v(" "),a("tr",[a("td",[t._v("load")]),t._v(" "),a("td",[t._v("对象反序列化，从文件读取数据")])])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pickle\n\nfilename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o:/ser'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 序列化后看到什么")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 序列化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反序列化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seek"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h3",{attrs:{id:"序列化应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化应用"}},[t._v("#")]),t._v(" 序列化应用")]),t._v(" "),a("p",[t._v("一般来说，本地序列化的情况，应用较少。大多数场景都应用在网络传输中。\n将数据序列化后通过网络传输到远程节点，远程服务器上的服务将接收到的数据反序列化后，就可以使用了。\n但是，要注意一点，远程接收端，反序列化时必须有对应的数据类型，否则就会报错。尤其是自定义\n类，必须远程得有一致的定义。")]),t._v(" "),a("p",[t._v("现在，大多数项目，都不是单机的，也不是单服务的，需要多个程序之间配合。需要通过网络将数据传送到其他节点上去，这就需要大量的序列化、反序列化过程。")]),t._v(" "),a("p",[t._v("但是，问题是，Python程序之间可以都用pickle解决序列化、反序列化，如果是跨平台、跨语言、跨协议pickle就不太适合了，就需要公共的协议。例如XML、Json、Protocol Buffer、msgpack等。")]),t._v(" "),a("p",[t._v("不同的协议，效率不同、学习曲线不同，适用不同场景，要根据不同的情况分析选型。")]),t._v(" "),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" Json")]),t._v(" "),a("p",[t._v("SON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript\n1999年ES3 的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。\nhttp://json.org/\nhttps://www.json.org/json-zh.html")]),t._v(" "),a("h3",{attrs:{id:"json的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json的数据类型"}},[t._v("#")]),t._v(" Json的数据类型")]),t._v(" "),a("p",[a("strong",[t._v("值")])]),t._v(" "),a("p",[t._v("双引号引起来的字符串、数值、true和false、null、对象、数组，这些都是值")]),t._v(" "),a("p",[a("strong",[t._v("字符串")])]),t._v(" "),a("p",[t._v("由双引号包围起来的任意字符的组合，可以有转义字符。")]),t._v(" "),a("p",[a("strong",[t._v("数值")]),t._v("\n有正负，有整数、浮点数。")]),t._v(" "),a("p",[a("strong",[t._v("对象")]),t._v("\n无序的键值对的集合\n格式: {key1:value1, ... ,keyn:valulen}\nkey必须是一个字符串，需要双引号包围这个字符串。\nvalue可以是任意合法的值。")]),t._v(" "),a("p",[a("strong",[t._v("数组")])]),t._v(" "),a("p",[t._v("有序的值的集合\n格式：[val1,...,valn]")]),t._v(" "),a("p",[t._v("实例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "person": [\n    {\n      "name": "tom",\n      "age": 18\n    },\n    {\n      "name": "jerry",\n      "age": 16\n    }\n  ],\n  "total": 2\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"json-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-模块"}},[t._v("#")]),t._v(" json 模块")]),t._v(" "),a("p",[a("strong",[t._v("python 与json")])]),t._v(" "),a("p",[t._v("Python支持少量内建数据类型到Json类型的转换。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Python 类型")]),t._v(" "),a("th",[t._v("Json 类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("True")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("False")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("None")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("str")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("float")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("dict")]),t._v(" "),a("td",[t._v("object")])])])]),t._v(" "),a("p",[a("strong",[t._v("常用方法")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Python 类型")]),t._v(" "),a("th",[t._v("Json 类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dumps")]),t._v(" "),a("td",[t._v("json 编码")])]),t._v(" "),a("tr",[a("td",[t._v("dump")]),t._v(" "),a("td",[t._v("json 编码并存入文件")])]),t._v(" "),a("tr",[a("td",[t._v("loads")]),t._v(" "),a("td",[t._v("json 解码")])]),t._v(" "),a("tr",[a("td",[t._v("load")]),t._v(" "),a("td",[t._v("json 解码，从文件读取数据")])])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'movie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'python'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请注意引号、括号的变化，注意数据类型的变化")]),t._v("\n\nd1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("一般 json 编码的数据很少落地，数据都是通过网络传输。传输的时候，要考虑压缩它。")]),t._v(" "),a("p",[t._v("本质上来说它就是个文本，就是个字符串。")]),t._v(" "),a("p",[t._v("json 很简单，几乎编程语言都支持 json，所以应用范围十分广泛。")])])}),[],!1,null,null,null);s.default=r.exports}}]);