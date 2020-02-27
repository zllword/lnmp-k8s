(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{217:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"部署-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署-kubernetes"}},[t._v("#")]),t._v(" 部署 Kubernetes")]),t._v(" "),e("p",[t._v("请查看 "),e("a",{attrs:{href:"https://github.com/khs1994-docker/lnmp-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" README.md 文件。")]),t._v(" "),e("h2",{attrs:{id:"kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubectl"}},[t._v("#")]),t._v(" kubectl")]),t._v(" "),e("p",[t._v("复制 K8s 配置文件到 "),e("code",[t._v("~/.kube/config")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" cert/kubectl.kubeconfig ~/.kube/config\n")])])]),e("p",[t._v("若还有其他集群，请将生成的文件追加到 "),e("code",[t._v("~/.kube/config")])]),t._v(" "),e("h2",{attrs:{id:"组件状态检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件状态检查"}},[t._v("#")]),t._v(" 组件状态检查")]),t._v(" "),e("p",[t._v("确保 "),e("code",[t._v("$ systemctl status 组件名")]),t._v(" 状态为 "),e("code",[t._v("Active: active (running)")])]),t._v(" "),e("h3",{attrs:{id:"etcd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[t._v("#")]),t._v(" etcd")]),t._v(" "),e("p",[t._v("第一步启动 "),e("code",[t._v("etcd")]),t._v(" 集群。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status etcd-member\n\n$ journalctl -u etcd-member\n\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" etcdctl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --endpoints"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${node_ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("192.168.57.110}")]),t._v(":2379 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --cacert"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --cert"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/etcd.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/certs/etcd-key.pem endpoint health\n")])])]),e("ul",[e("li",[e("strong",[t._v("2379")]),t._v(" 提供 HTTP(S) API 服务，供客户端交互")]),t._v(" "),e("li",[e("strong",[t._v("2380")]),t._v(" 和集群中其他节点通信")])]),t._v(" "),e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status docker\n\n$ journalctl -u docker\n")])])]),e("ul",[e("li",[e("strong",[t._v("2375")]),t._v(" http")]),t._v(" "),e("li",[e("strong",[t._v("2376")]),t._v(" TLS")])]),t._v(" "),e("h2",{attrs:{id:"master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[t._v("#")]),t._v(" Master")]),t._v(" "),e("h3",{attrs:{id:"kube-apiserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-apiserver"}},[t._v("#")]),t._v(" kube-apiserver")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status kube-apiserver\n\n$ journalctl -u kube-apiserver\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install kubectl")]),t._v("\n\n$ kubectl cluster-info\n\n$ kubectl get all -A\n\n$ kubectl get componentstatuses\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-apiserve\n\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:6443    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25691")]),t._v("/kube-apiserve\n")])])]),e("ul",[e("li",[e("strong",[t._v("6443")]),t._v(" 接收 https 请求的安全端口，对所有请求做认证和授权")])]),t._v(" "),e("h3",{attrs:{id:"kube-controller-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-controller-manager"}},[t._v("#")]),t._v(" kube-controller-manager")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status kube-controller-manager\n\n$ journalctl -u kube-controller-manager\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-controll\n\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:10257         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("638")]),t._v("/kube-controller\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s --cacert /etc/kubernetes/certs/ca.pem https://127.0.0.1:10257/metrics "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v("\n\n$ kubectl get endpoints kube-controller-manager --namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system  -o yaml\n")])])]),e("ul",[e("li",[e("strong",[t._v("10252")]),t._v(" http 端口 (本项目不监听)")]),t._v(" "),e("li",[e("strong",[t._v("10257")]),t._v(" https 端口")])]),t._v(" "),e("h3",{attrs:{id:"kube-scheduler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-scheduler"}},[t._v("#")]),t._v(" kube-scheduler")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status kube-scheduler\n\n$ journalctl -u kube-scheduler\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-sche\n\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10251   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25873")]),t._v("/kube-schedule\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10259   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25873")]),t._v("/kube-schedule\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://127.0.0.1:10251/metrics "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v("\n\n$ kubectl get endpoints kube-scheduler --namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system  -o yaml\n")])])]),e("ul",[e("li",[e("strong",[t._v("10251")]),t._v(" http 端口")]),t._v(" "),e("li",[e("strong",[t._v("10259")]),t._v(" https 端口")])]),t._v(" "),e("p",[t._v("两个接口都对外提供 "),e("code",[t._v("/metrics")]),t._v(" 和 "),e("code",[t._v("/healthz")]),t._v(" 的访问")]),t._v(" "),e("h2",{attrs:{id:"worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker"}},[t._v("#")]),t._v(" Worker")]),t._v(" "),e("h3",{attrs:{id:"kube-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy"}},[t._v("#")]),t._v(" kube-proxy")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kube-proxy\n\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10249   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26034")]),t._v("/kube-proxy\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10256   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26034")]),t._v("/kube-proxy\n")])])]),e("ul",[e("li",[e("strong",[t._v("10249")]),t._v(" http prometheus metrics port;")]),t._v(" "),e("li",[e("strong",[t._v("10256")]),t._v(" http healthz port;")])]),t._v(" "),e("h3",{attrs:{id:"kubelet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubelet"}},[t._v("#")]),t._v(" kubelet")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ systemctl status kubelet\n\n$ journalctl -u kubelet\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lnpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kubelet\n\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10248   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26484")]),t._v("/kubelet\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".199.100:10250   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26484")]),t._v("/kubelet\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:35843         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*               LISTEN      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26484")]),t._v("/kubelet\n")])])]),e("ul",[e("li",[e("strong",[t._v("10248")]),t._v(" healthz http 服务")]),t._v(" "),e("li",[e("strong",[t._v("10250")]),t._v(" https API 服务")]),t._v(" "),e("li",[e("strong",[t._v("10255")]),t._v(" 只读端口 (本项目不监听)")])]),t._v(" "),e("h4",{attrs:{id:"自动生成的证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动生成的证书"}},[t._v("#")]),t._v(" 自动生成的证书")]),t._v(" "),e("p",[e("code",[t._v("kubelet")]),t._v(" 与 "),e("code",[t._v("apiserver")]),t._v(" 通讯所使用的证书为 "),e("code",[t._v("kubelet-client.crt")]),t._v(" 剩下的 "),e("code",[t._v("kubelet.crt")]),t._v(" 将会被用于 kubelet server(10250) 做鉴权使用")]),t._v(" "),e("h2",{attrs:{id:"test-k8s-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-k8s-cluster"}},[t._v("#")]),t._v(" Test k8s Cluster")]),t._v(" "),e("p",[t._v("务必保证各组件正常运行之后，再进行测试！")]),t._v(" "),e("p",[t._v("部署 "),e("RouterLink",{attrs:{to:"/addons/coredns.html"}},[t._v("CoreDNS 插件")]),t._v(" 进行测试。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);