(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{220:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("存储 "),s("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/storage/volumes/#volume-%E7%9A%84%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("内置"),s("OutboundLink")],1),e._v(" 了很多卷插件 "),s("code",[e._v("aws")]),e._v(" "),s("code",[e._v("azure")]),e._v(" 等(类比 Docker).")]),e._v(" "),e._m(3),e._v(" "),e._m(4)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[this._v("#")]),this._v(" Storage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("Out-of-Tree")]),this._v(" 卷插件包括容器存储接口（CSI）和 "),t("code",[this._v("FlexVolume")]),this._v("。 它们使存储供应商能够创建自定义存储插件，而无需将它们添加到 Kubernetes 代码仓库。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("存储")]),this._v(" 可以和 "),t("code",[this._v("容器运行时")]),this._v(" 做一类比,容器运行时 docker 内置到存储库中,不便于扩展.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("CSI")]),this._v(" 和 "),t("code",[this._v("FlexVolume")]),this._v(" 就是让存储插件放到外部去实现,不要和 k8s 强耦合.(类比 "),t("code",[this._v("CRI-O")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("FlexVolume")]),this._v(" 是把可执行文件放到卷插件目录(kubelet --volume-plugin-dir=/path 参数指定的值),这个可执行文件实现接口.")])}],!1,null,null,null);t.default=i.exports}}]);