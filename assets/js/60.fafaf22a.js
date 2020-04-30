(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{377:function(e,t,o){"use strict";o.r(t);var r=o(33),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),o("p",[o("code",[e._v("Out-of-Tree")]),e._v(" 卷插件包括容器存储接口（CSI）和 "),o("code",[e._v("FlexVolume")]),e._v("。 它们使存储供应商能够创建自定义存储插件，而无需将它们添加到 Kubernetes 代码仓库。")]),e._v(" "),o("p",[o("code",[e._v("存储")]),e._v(" 可以和 "),o("code",[e._v("容器运行时")]),e._v(" 做一类比,容器运行时 docker 内置到存储库中,不便于扩展.")]),e._v(" "),o("p",[e._v("存储 "),o("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/storage/volumes/#volume-%E7%9A%84%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("内置"),o("OutboundLink")],1),e._v(" 了很多卷插件 "),o("code",[e._v("aws")]),e._v(" "),o("code",[e._v("azure")]),e._v(" 等(类比 Docker).")]),e._v(" "),o("p",[o("code",[e._v("CSI")]),e._v(" 和 "),o("code",[e._v("FlexVolume")]),e._v(" 就是让存储插件放到外部去实现,不要和 k8s 强耦合.(类比 "),o("code",[e._v("CRI-O")]),e._v(")")]),e._v(" "),o("p",[o("code",[e._v("FlexVolume")]),e._v(" 是把可执行文件放到卷插件目录(kubelet --volume-plugin-dir=/usr/libexec/kubernetes/kubelet-plugins/volume/exec/ 参数指定的值),这个可执行文件实现接口.")])])}),[],!1,null,null,null);t.default=v.exports}}]);