(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{990:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-rook-快速搭建-ceph-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-rook-快速搭建-ceph-集群"}},[s._v("#")]),s._v(" 使用 Rook 快速搭建 Ceph 集群")]),s._v(" "),a("p",[s._v("在容器世界中，无状态是一个核心原则，然而我们始终需要保存数据，并提供给他人进行访问。所以就需要一个方案用于保持数据，以备重启之需。")]),s._v(" "),a("p",[s._v("在 Kubernetes 中，PVC 是管理有状态应用的一个推荐方案。有了 PVC 的帮助，Pod 可以申请并连接到存储卷，这些存储卷在 Pod 生命周期结束之后，还能独立存在。")]),s._v(" "),a("p",[s._v("PVC 在存储方面让开发和运维的职责得以分离。运维人员负责供应存储，而开发人员则可以在不知后端细节的情况下，申请使用这些存储卷。")]),s._v(" "),a("p",[s._v("PVC 由一系列组件构成：")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim",target:"_blank",rel:"noopener noreferrer"}},[s._v("PVC"),a("OutboundLink")],1),s._v("：是 Pod 对存储的请求。PVC 会被 Pod 动态加载成为一个存储卷。")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PV"),a("OutboundLink")],1),s._v("，可以由运维手工分配，也可以使用 "),a("code",[s._v("StorageClass")]),s._v(" 动态分配。PV 受 Kubernetes 管理，但并不与特定的 Pod 直接绑定。")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/",target:"_blank",rel:"noopener noreferrer"}},[s._v("StorageClass"),a("OutboundLink")],1),s._v("：由管理员创建，可以用来动态的创建存储卷和 PV。")])])]),s._v(" "),a("p",[s._v("物理存储：实际连接和加载的存储卷。")]),s._v(" "),a("p",[s._v("分布式存储系统是一个有效的解决有状态工作负载高可用问题的方案。Ceph 就是一个分布式存储系统，近年来其影响主键扩大。Rook 是一个编排器，能够支持包括 Ceph 在内的多种存储方案。Rook 简化了 Ceph 在 Kubernetes 集群中的部署过程。")]),s._v(" "),a("p",[s._v("在生产环境中使用 Rook + Ceph 组合的用户正在日益增加，尤其是自建数据中心的用户，"),a("a",{attrs:{href:"https://www.cengn.ca/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CENGN"),a("OutboundLink")],1),s._v("、Gini、GPR 等很多组织都在进行评估。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog.fleeto.us/post/the-ultimate-rook-and-ceph-survival-guide/images/rookceph1.png",alt:"images"}})]),s._v(" "),a("h2",{attrs:{id:"ceph-rook-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ceph-rook-简介"}},[s._v("#")]),s._v(" Ceph & Rook 简介")]),s._v(" "),a("h3",{attrs:{id:"ceph-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ceph-是什么"}},[s._v("#")]),s._v(" Ceph 是什么")]),s._v(" "),a("p",[s._v("Ceph 是一个分布式存储系统，具备大规模、高性能、无单点失败的特点。Ceph 是一个软件定义的系统，也就是说他可以运行在任何符合其要求的硬件之上。")]),s._v(" "),a("p",[s._v("Ceph 包括多个组件：")]),s._v(" "),a("p",[a("strong",[s._v("Ceph Monitors(MON)")]),s._v("：负责生成集群票选机制。所有的集群节点都会向 Mon 进行汇报，并在每次状态变更时进行共享信息。")]),s._v(" "),a("p",[a("strong",[s._v("Ceph Object Store Devices(OSD)")]),s._v("：负责在本地文件系统保存对象，并通过网络提供访问。通常 OSD 守护进程会绑定在集群的一个物理盘上，Ceph 客户端直接和 OSD 打交道。")]),s._v(" "),a("p",[a("strong",[s._v("Ceph Manager(MGR)")]),s._v("：提供额外的监控和界面给外部的监管系统使用。")]),s._v(" "),a("p",[a("strong",[s._v("Reliable Autonomic Distributed Object Stores")]),s._v("：Ceph 存储集群的核心。这一层用于为存储数据提供一致性保障，执行数据复制、故障检测以及恢复等任务。")]),s._v(" "),a("p",[s._v("为了在 Ceph 上进行读写，客户端首先要联系 MON，获取最新的集群地图，其中包含了集群拓扑以及数据存储位置的信息。Ceph 客户端使用集群地图来获知需要交互的 OSD，从而和特定 OSD 建立联系。")]),s._v(" "),a("h3",{attrs:{id:"rook-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rook-是什么"}},[s._v("#")]),s._v(" Rook 是什么")]),s._v(" "),a("p",[s._v("Rook 是一个可以提供 Ceph 集群管理能力的 "),a("a",{attrs:{href:"https://coreos.com/blog/introducing-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Operator"),a("OutboundLink")],1),s._v("。Rook 使用 CRD 一个控制器来对 Ceph 之类的资源进行部署和管理。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://blog.fleeto.us/post/the-ultimate-rook-and-ceph-survival-guide/images/rook-arch.png",alt:"rook arch"}})]),s._v(" "),a("p",[s._v("Rook 包含多个组件：")]),s._v(" "),a("p",[a("strong",[s._v("Rook Operator")]),s._v("：Rook 的核心组件，Rook Operator 是一个简单的容器，自动启动存储集群，并监控存储守护进程，来确保存储集群的健康。")]),s._v(" "),a("p",[a("strong",[s._v("Rook Agent")]),s._v("：在每个存储节点上运行，并配置一个 FlexVolume 插件，和 Kubernetes 的存储卷控制框架进行集成。Agent 处理所有的存储操作，例如挂接网络存储设备、在主机上加载存储卷以及格式化文件系统等。")]),s._v(" "),a("p",[a("strong",[s._v("Rook Discovers")]),s._v("：检测挂接到存储节点上的存储设备。")]),s._v(" "),a("p",[s._v("Rook 还会用 Kubernetes Pod 的形式，部署 Ceph 的 MON、OSD 以及 MGR 守护进程。")]),s._v(" "),a("p",[s._v("Rook Operator 让用户可以通过 CRD 的是用来创建和管理存储集群。每种资源都定义了自己的 CRD.")]),s._v(" "),a("p",[a("strong",[s._v("Rook "),a("a",{attrs:{href:"https://rook.github.io/docs/rook/master/cluster-crd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cluster"),a("OutboundLink")],1)]),s._v("：提供了对存储机群的配置能力，用来提供块存储、对象存储以及共享文件系统。每个集群都有多个 Pool。")]),s._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://rook.github.io/docs/rook/master/pool-crd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pool"),a("OutboundLink")],1)]),s._v("：为块存储提供支持。Pool 也是给文件和对象存储提供内部支持。")]),s._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://rook.github.io/docs/rook/master/object-store-crd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Object Store"),a("OutboundLink")],1)]),s._v("：用 S3 兼容接口开放存储服务。")]),s._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://rook.github.io/docs/rook/master/filesystem-crd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("File System"),a("OutboundLink")],1)]),s._v("：为多个 Kubernetes Pod 提供共享存储。")]),s._v(" "),a("h2",{attrs:{id:"在-kubernetes-上部署-rook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-kubernetes-上部署-rook"}},[s._v("#")]),s._v(" 在 Kubernetes 上部署 Rook")]),s._v(" "),a("h3",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("您已经安装了 Kubernetes 集群，且集群版本不低于 v1.17.0")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Kubernetes 集群有至少 3 个工作节点，且每个工作节点都有一块初系统盘以外的 "),a("strong",[s._v("未格式化")]),s._v(" 的裸盘（工作节点是虚拟机时，未格式化的裸盘可以是虚拟磁盘），用于创建 3 个 Ceph OSD；")])]),s._v(" "),a("li",[a("p",[s._v("也可以只有 1 个工作节点，挂载了一块 "),a("strong",[s._v("未格式化")]),s._v(" 的裸盘；")])]),s._v(" "),a("li",[a("p",[s._v("在节点机器上执行 "),a("code",[s._v("lsblk -f")]),s._v(" 指令可以查看磁盘是否需被格式化，输出结果如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("lsblk -f\nNAME                  FSTYPE      LABEL UUID                                   MOUNTPOINT\nvda\n└─vda1                LVM2_member       eSO50t-GkUV-YKTH-WsGq-hNJY-eKNf-3i07IB\n  ├─ubuntu--vg-root   ext4              c2366f76-6e21-4f10-a8f3-6776212e2fe4   /\n  └─ubuntu--vg-swap_1 swap              9492a3dc-ad75-47cd-9596-678e8cf17ff9   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SWAP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nvdb    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果 "),a("code",[s._v("FSTYPE")]),s._v(" 字段不为空，则表示该磁盘上已经被格式化。在上面的例子中，可以将磁盘 "),a("code",[s._v("vdb")]),s._v(" 用于 Ceph 的 OSD，而磁盘 "),a("code",[s._v("vda")]),s._v(" 及其分区则不能用做 Ceph 的 OSD。")])])])])]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --single-branch --branch v1.6.7 https://github.com/rook/rook.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" rook/cluster/examples/kubernetes/ceph\nkubectl create -f crds.yaml -f common.yaml -f operator.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 cluster.yaml 文件， dashboard 不使用 ssl")]),s._v("\nkubectl create -f cluster.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 共享文件系统")]),s._v("\nkubectl create -f filesystem.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提供存储")]),s._v("\nkubectl create -f csi/cephfs/storageclass.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"rook-工具箱-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rook-工具箱-dashboard"}},[s._v("#")]),s._v(" Rook 工具箱 & dashboard")]),s._v(" "),a("p",[s._v("1）安装 Rook")]),s._v(" "),a("p",[s._v("要验证集群是否处于正常状态，我们可以使用 "),a("a",{attrs:{href:"https://rook.io/docs/rook/v1.1/ceph-toolbox.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rook 工具箱"),a("OutboundLink")],1),s._v(" 来运行 "),a("code",[s._v("ceph status")]),s._v(" 命令查看。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署 tools:")]),s._v("\nkubectl apply -f toolbox.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("一旦 toolbox 的 Pod 运行成功后，我们就可以使用下面的命令进入到工具箱内部进行操作：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" kubectl -n rook-ceph "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl -n rook-ceph get pod -l "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app=rook-ceph-tools"')]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.items[0].metadata.name}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如现在我们要查看集群的状态，需要满足下面的条件才认为是健康的：")]),s._v(" "),a("ul",[a("li",[s._v("所有 mons 应该达到法定数量")]),s._v(" "),a("li",[s._v("mgr 应该是激活状态")]),s._v(" "),a("li",[s._v("至少有一个 OSD 处于激活状态")]),s._v(" "),a("li",[s._v("如果不是 HEALTH_OK 状态，则应该查看告警或者错误信息")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ceph status\nceph status\n  cluster:\n    id:     dae083e6-8487-447b-b6ae-9eb321818439\n    health: HEALTH_OK\n\n  services:\n    mon: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" daemons, quorum a,b,c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age 15m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    mgr: a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("active, since 2m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    osd: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" osds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("since 6m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("since 6m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  data:\n    pools:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" pools, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" pgs\n    objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" objects, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n    usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),s._v(" GiB used, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("314")]),s._v(" GiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("393")]),s._v(" GiB avail\n    pgs:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("如果群集运行不正常，可以查看 "),a("a",{attrs:{href:"https://rook.io/docs/rook/v1.1/ceph-common-issues.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ceph 常见问题"),a("OutboundLink")],1),s._v("以了解更多详细信息和可能的解决方案。")]),s._v(" "),a("p",[s._v("2）部署 dashboard：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl apply -f dashboard-external-http.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("dashboard 的密码可以通过如下方式获取：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{['data']['password']}\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 --decode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("错误一")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("错误信息：")]),s._v(" "),a("p",[s._v("Kubernetes安装rook-ceph集群时报MountVolume.SetUp failed for volume “rook-ceph-crash-collector-keyring” : secret “rook-ceph-crash-collector-keyring” not found")])]),s._v(" "),a("li",[a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("删除yaml的创建")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl delete -f cluster.yaml\nkubectl delete -f operator.yaml\nkubectl delete -f common.yaml\nkubectl delete -f crds.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("确认目录下有文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ll /var/lib/rook/ /var/lib/kubelet/plugins/ /var/lib/kubelet/plugins_registry/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除之前失败的创建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/rook/* /var/lib/kubelet/plugins/* /var/lib/kubelet/plugins_registry/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("⚠️ 在每个相关节点都执行")])]),s._v(" "),a("p",[s._v("重新创建集群")])])])]),s._v(" "),a("li",[a("p",[s._v("错误二")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("错误信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a volume to be created, either by external provisioner "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ceph.rook.io/block"')]),s._v(" or manually created by system administrator\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("因为自己编写了 pool 和 sc，直接 apply 官方的 rbd 目录里的 stoageclass.yaml")])])])]),s._v(" "),a("li",[a("p",[s._v("错误三")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("错误信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ceph -s\n  cluster:\n    id:     f1731b79-1e9e-447e-9bc4-36b834c19582\n    health: HEALTH_WARN\n            mons are allowing insecure global_id reclaim\n\n  services:\n    mon: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" daemons, quorum bxpp-master-1,bxpp-worker-1,bxpp-worker-2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age 25m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    mgr: bxpp-worker-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("active, since 17m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", standbys: bxpp-master-1, bxpp-worker-2\n    mds: cephfs:1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bxpp-master-1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("up:active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" up:standby\n    osd: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" osds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("since 16m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("since 16m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rgw: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" daemons active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bxpp-master-1.rgw0, bxpp-worker-1.rgw0, bxpp-worker-2.rgw0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  task status:\n    scrub status:\n        mds.bxpp-master-1: idle\n\n  data:\n    pools:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" pools, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v(" pgs\n    objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("211")]),s._v(" objects, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KiB\n    usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("328")]),s._v(" MiB used, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" GiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" GiB avail\n    pgs:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v(" active+clean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("错误原因：低版本bug")])]),s._v(" "),a("li",[a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("升级版本")]),s._v(" "),a("p",[s._v("或者直接禁用掉此设置（测试环境可）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ceph config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mon mon_warn_on_insecure_global_id_reclaim_allowed "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nceph config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mon auth_allow_insecure_global_id_reclaim "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("错误四")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("错误信息：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ceph -s ")]),s._v("\n  cluster:\n    id:     dd1a1ab2-0f34-4936-bc09-87bd40ef5ca0\n    health: HEALTH_WARN\n            Degraded data redundancy: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v("/4019 objects degraded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.553")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" pgs degraded, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" pgs undersized\n \n  services:\n    mon: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" daemons, quorum k8s-01,k8s-02,k8s-03\n    mgr: k8s-01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    mds: cephfs-2/2/2 up  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k8s-01"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("up:active,1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k8s-03"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("up:active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" up:standby\n    osd: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" osds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" up, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    rgw: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" daemons active\n \n  data:\n    pools:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" pools, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("288")]),s._v(" pgs\n    objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.92")]),s._v(" k objects, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1020")]),s._v(" MiB\n    usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.5")]),s._v(" GiB used, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("342")]),s._v(" GiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("350")]),s._v(" GiB avail\n    pgs:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v("/4019 objects degraded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.553")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("272")]),s._v(" active+clean\n             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("  active+undersized+degraded\n             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   active+undersized\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("错误原因：这个状态降级的集群可以正常读写数据，undersized是当前存活的PG副本数为2，小于副本数3.将其做此标记，表明存数据副本数不足。")])]),s._v(" "),a("li",[a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("设置存储池的副本数为2")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ceph osd  pool "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" default.rgw.log size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.fleeto.us/post/the-ultimate-rook-and-ceph-survival-guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rook & Ceph 简介 | 伪架构师"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://kuboard.cn/learning/k8s-intermediate/persistent/ceph/rook-config.html#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 CephFS 作为存储类 - Rook | Kuboard"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.itbkz.com/12925.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kubernetes安装rook-ceph集群时报MountVolume.SetUp failed for secret "),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://rook.io/docs/rook/v1.6/ceph-quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("快速安装ceph | rook 官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://rook.io/docs/rook/v1.6/ceph-filesystem.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("共享文件系统 | rook 官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.shileizcc.com/confluence/display/CEPH/Ceph+Rook+Install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ceph Rook Install | shileizcc"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.qikqiak.com/post/deploy-ceph-cluster-with-rook/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 Rook 快速搭建 Ceph 集群 | 阳明"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://dylanyang.top/post/2021/04/25/ceph%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ceph问题处理 | dylanyang"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.dazhuanlan.com/2019/08/29/5d66a8f505b40/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ceph集群故障运维 | 大专栏"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);