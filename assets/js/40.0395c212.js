(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{206:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[s("strong",[e._v("基于 "),s("a",{attrs:{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-tls-bootstrapping/#certificate-rotation",target:"_blank",rel:"noopener noreferrer"}},[e._v("安全性考虑"),s("OutboundLink")],1),e._v("，CSR approving controllers 不会（也不能）自动 approve kubelet server 证书签名请求，需要手动 approve。")])]),e._v(" "),e._m(4),e._v(" "),s("blockquote",[s("p",[e._v("Note: The CSR approving controllers implemented in core Kubernetes do not approve node serving certificates for "),s("a",{attrs:{href:"https://github.com/kubernetes/community/pull/1982",target:"_blank",rel:"noopener noreferrer"}},[e._v("security reasons"),s("OutboundLink")],1),e._v(". To use RotateKubeletServerCertificate operators need to run a custom approving controller, or manually approve the serving certificate requests.")])]),e._v(" "),s("p",[e._v("未手动 approve 之前报错如下。")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("根据官方文档配置即可。")]),e._v(" "),e._m(27),e._m(28)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"kubelet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubelet","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubelet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"初始化步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化步骤")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("参考 "),t("code",[this._v("bin/generate-kubelet-bootstrap-kubeconfig.sh")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"必须手动-approve-server-cert-csr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#必须手动-approve-server-cert-csr","aria-hidden":"true"}},[this._v("#")]),this._v(" 必须手动 approve server cert csr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/326")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/399")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/kubernetes/kubernetes/issues/73356")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/kubernetes/community/pull/1982")])]),e._v(" "),s("li",[s("p",[e._v("1.10 可以自动轮换 server 证书")])]),e._v(" "),s("li",[s("p",[e._v("1.11 删除了此功能 https://github.com/kubernetes/kubernetes/commit/7665f15b7d8d9006e410e41f6678cfa2be3ac602")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("bootstrap.go:65"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" Using bootstrap kubeconfig to generate TLS client cert, key and kubeconfig "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("file")]),this._v("\n\nbootstrap.go:96"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" No valid private key and/or certificate found, reusing existing private key or creating a new one\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"手动-approve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动-approve","aria-hidden":"true"}},[this._v("#")]),this._v(" 手动 approve")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ kubectl get csr\n\nNAME                                                   AGE     REQUESTOR                 CONDITION\ncsr-4gzpq                                              4m20s   system:node:node1         Pending\ncsr-62qp7                                              50m     system:node:node1         Pending\ncsr-6ml4w                                              12m     system:node:node1         Pending\ncsr-8nvc2                                              63m     system:node:node1         Pending\ncsr-f6gbd                                              38m     system:node:node1         Pending\ncsr-sjthd                                              25m     system:node:node1         Pending\ncsr-sxjxf                                              2m41s   system:node:node1         Pending\nnode-csr-j1Ja8wpP3FxFBMnEVNsrwYosgWk_-796bWmRg9cnFTE   63m     system:bootstrap:fp7k2i   Approved,Issued\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# approve 倒数第二个，例如")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# $ kubectl certificate approve csr-sxjxf")]),this._v("\n$ kubectl certificate approve CSR_NAME\n\n$ kubectl describe csr CSR_NAME\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用-tls-bootstrap-机制自动生成-client-和-server-证书，过期后自动轮转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-tls-bootstrap-机制自动生成-client-和-server-证书，过期后自动轮转","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 TLS bootstrap 机制自动生成 client 和 server 证书，过期后自动轮转")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("过期，server 证书也得(必须) "),t("strong",[this._v("手动 approve")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("19:00:13.625470   15572 certificate_manager.go:507"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Certificate expiration is 2019-10-31 11:55:00 +0000 UTC, rotation deadline is 2019-10-31 11:43:38.484582973 +0000 UTC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n19:43:38.494896   15572 certificate_manager.go:381"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Rotating certificates\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n19:58:38.503176   15572 certificate_manager.go:414"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" certificate request was not signed: timed out waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the condition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("未手动 approve 报错"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("假设过期时间设为 1 小时, "),t("code",[this._v("kubelet")]),this._v(" 会在 "),t("code",[this._v("43")]),this._v(" 分钟（具体时间看日志）时轮换")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"bootstrap-token-auth-和授予权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-token-auth-和授予权限","aria-hidden":"true"}},[this._v("#")]),this._v(" Bootstrap Token Auth 和授予权限")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("code",[e._v("kublet")]),e._v(" 启动时查找配置的 "),s("code",[e._v("--kubeletconfig")]),e._v(" 文件是否存在，如果不存在则使用 "),s("code",[e._v("--bootstrap-kubeconfig")]),e._v(" 向 "),s("code",[e._v("kube-apiserver")]),e._v(" 发送证书签名请求 (CSR)。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("kube-apiserver")]),this._v(" 收到 CSR 请求后，对其中的 Token 进行认证（事先使用 kubeadm 创建的 token），认证通过后将请求的 user 设置为 "),t("code",[this._v("system:bootstrap:")]),this._v("，group 设置为 "),t("code",[this._v("system:bootstrappers")]),this._v("，这一过程称为 Bootstrap Token Auth。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("kubelet 启动后使用 "),t("code",[this._v("--bootstrap-kubeconfig")]),this._v(" 向 kube-apiserver 发送 CSR 请求，当这个 CSR 被 approve 后，"),t("code",[this._v("kube-controller-manager")]),this._v(" 为 kubelet 创建 TLS 客户端证书、私钥和 --kubeletconfig 文件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kubelet-client-current-pem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubelet-client-current-pem","aria-hidden":"true"}},[this._v("#")]),this._v(" kubelet-client-current.pem")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("这是一个软连接文件，当 kubelet 配置了 "),t("code",[this._v("--feature-gates=RotateKubeletClientCertificate=true")]),this._v(" 选项后，会在证书总有效期的 70%~90% 的时间内发起续期请求，请求被批准后会生成一个 "),t("code",[this._v("kubelet-client-时间戳.pem")]),this._v(" "),t("code",[this._v("kubelet-client-current.pem")]),this._v(" 文件则始终软连接到最新的真实证书文件，除首次启动外，kubelet 一直会使用这个证书同 apiserver 通讯")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kubelet-server-current-pem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubelet-server-current-pem","aria-hidden":"true"}},[this._v("#")]),this._v(" kubelet-server-current.pem")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("同样是一个软连接文件，当 kubelet 配置了 "),t("code",[this._v("--feature-gates=RotateKubeletServerCertificate=true")]),this._v(" 选项后，会在证书总有效期的 70%~90% 的时间内发起续期请求，请求被批准后会生成一个 "),t("code",[this._v("kubelet-server-时间戳.pem")]),this._v(" "),t("code",[this._v("kubelet-server-current.pem")]),this._v(" 文件则始终软连接到最新的真实证书文件，该文件将会一直被用于 kubelet 10250 api 端口鉴权")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("kubelet-client.crt")]),this._v(" 该文件在 kubelet 完成 TLS bootstrapping 后生成，此证书是由 "),t("code",[this._v("controller-manager")]),this._v(" 签署的，此后 kubelet 将会加载该证书，用于与 apiserver 建立 TLS 通讯，同时使用该证书的 CN 字段作为用户名，O 字段作为用户组向 apiserver 发起其他请求")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pause","aria-hidden":"true"}},[this._v("#")]),this._v(" pause")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://github.com/rootsongjc/kubernetes-handbook/blob/master/concepts/pause-container.md")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"动态-kubelet-配置（dynamic-kubelet-configuration）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态-kubelet-配置（dynamic-kubelet-configuration）","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态 kubelet 配置（Dynamic Kubelet Configuration）")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("code",[e._v("Kubelet")]),e._v(" "),s("strong",[e._v("动态配置")]),e._v(" 可以使让我们及其方便的大规模更新集群 "),s("code",[e._v("Kubelet")]),e._v(" 配置，让我们可以像配置集群中其他应用一样通过 "),s("code",[e._v("ConfigMap")]),e._v(" 配置 "),s("code",[e._v("Kubelet")]),e._v("，并且 "),s("code",[e._v("Kubelet")]),e._v(" 能动态感知到配置的变化，自动退出重新加载最新配置。不仅如此，Kubelet Dynamic Config 还有本地 "),s("code",[e._v("Checkpoint")]),e._v(" 数据、失败回滚到上一个可用配置集等美丽特性。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://kubernetes.io/docs/tasks/administer-cluster/reconfigure-kubelet/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ kubectl get no "),t("span",{pre:!0,attrs:{class:"token variable"}},[this._v("${NODE_NAME}")]),this._v(" -o json "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("|")]),this._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'.status.config'")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://cloud.tencent.com/developer/article/1381318")]),this._v(" "),t("li",[this._v("https://kubernetes.io/blog/2018/07/11/dynamic-kubelet-configuration/")])])}],!1,null,null,null);t.default=n.exports}}]);