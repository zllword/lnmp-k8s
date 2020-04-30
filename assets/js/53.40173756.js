(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{371:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"master-节点高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-节点高可用"}},[t._v("#")]),t._v(" Master 节点高可用")]),t._v(" "),s("ul",[s("li",[t._v("https://www.cnblogs.com/hahp/p/5803694.html")])]),t._v(" "),s("p",[s("code",[t._v("controller-manager")]),t._v(" 和 "),s("code",[t._v("scheduler")]),t._v(" 只要加上 "),s("code",[t._v("--leader-elect=true")]),t._v(" 参数就可以同时启动，系统会自动选举 leader。")]),t._v(" "),s("p",[s("code",[t._v("apiserver")]),t._v(" 本来就可以多节点同时运行，只要它们连接同一个 "),s("code",[t._v("etcd cluster")]),t._v(" 就可以了。")]),t._v(" "),s("h2",{attrs:{id:"故障演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#故障演示"}},[t._v("#")]),t._v(" 故障演示")]),t._v(" "),s("ul",[s("li",[t._v("删除节点 3")]),t._v(" "),s("li",[t._v("新建节点 3")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ fcos-etcdctl endpoint health\n\n$ fcos-etcdctl member list\n881a63738ea17eb1, started, coreos3, https://192.168.57.112:2380, https://192.168.57.112:2379\n\n$ fcos-etcdctl member remove 881a63738ea17eb1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必须先添加 member 后启动故障节点 etcd")]),t._v("\n$ fcos-etcdctl member "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" coreos3 --peer-urls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.57.112:2380"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动故障节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于默认 etcd 自动启动，我们先将其停止")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop etcd\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /opt/k8s/var/lib/etcd\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 etcd.service 参数")]),t._v("\n\n--initial-cluster-state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("new 改为 --initial-cluster-state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("existing\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start etcd\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);