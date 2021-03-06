module.exports = [
  "",
  {
    title: "1 Python 简介",
    collapsable: false,
    children: ["first", "codeSpecification", "python-virtualenv", "vscode-python", "python-pip"]
  },
  {
    title: "2 Python 基础",
    collapsable: false,
    children: ["python-basic-grammar", "python-control",
    {
      title: "2.3 Python数据类型",
      path: "type-of-data",
      collapsable: false,
      children: ["num-data", "str-data", "bytearray-data", "list-tuple-data", "set-dict-data"],
    },
    ]
  },
  {
    title: "3 高级特性",
    collapsable: false,
    children: ["python-linear-data-structure", "python-analytic-expre", "python-generator", "python-iterator"]
  },
  {
    title: "4 函数",
    collapsable: false,
    children: ["python-function", "function-parameter", "action-scope", "python-recursive-function"]
  },
  {
    title: "5 函数式编程",
    path: "func-prog",
    collapsable: false,
    children: ["high-func", "python-return-function", "lambda", "python-decorator", "python-partial-function"]
  },
  {
    title: "6 模块",
    path: "python-module",
    collapsable: false,
    children: ["python-module-install", "python-setup"]
  },
  {
    title: "7 IO编程",
    collapsable: false,
    children: ["python-dir-file-pro", "python-serialize"]
  },
  {
    title: "8 异常、调试和测试",
    collapsable: false,
    children: ["python-exception"]
  },
  {
    title: "9 面向对象编程",
    path: "python-oop",
    collapsable: false,
    children: ["python-oo-package", "access-control", "python-oo-inher-pol"]
  },
  {
    title: "10 进程和线程",
    path: "process-thread",
    collapsable: false,
    children: ["python-gil-multiprocessing", "python-thread", "python-thread-sync"]
  },
  {
    title: "11 网络编程",
    collapsable: false,
    children: ["python-socketserver", "python-tcp-pg"]
  },
  "python-magic.md",
  "python-io-model.md",
  "python-instance",
]