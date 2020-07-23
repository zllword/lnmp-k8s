(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{376:function(s,t,a){"use strict";a.r(t);var e=a(33),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubeadm-部署-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-部署-kubernetes"}},[s._v("#")]),s._v(" kubeadm 部署 kubernetes")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("https://github.com/kubernetes/kubeadm")])]),s._v(" "),a("li",[a("p",[s._v("https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/")])]),s._v(" "),a("li",[a("p",[s._v("https://kubernetes.io/zh/docs/reference/setup-tools/kubeadm/kubeadm-init/")])]),s._v(" "),a("li",[a("p",[s._v("https://docs.khs1994.com/feiskyer-kubernetes-handbook/deploy/kubeadm.html")])]),s._v(" "),a("li",[a("p",[s._v("https://blog.csdn.net/tiger435/article/details/85002337")])])]),s._v(" "),a("h2",{attrs:{id:"安装-kubelet-kubeadm-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubelet-kubeadm-kubectl"}},[s._v("#")]),s._v(" 安装 "),a("strong",[s._v("kubelet")]),s._v(" "),a("strong",[s._v("kubeadm")]),s._v(" "),a("strong",[s._v("kubectl")])]),s._v(" "),a("blockquote",[a("p",[s._v("手动下载二进制文件放入 PATH，或者使用包管理工具安装。下面介绍如何使用包管理工具安装")])]),s._v(" "),a("h3",{attrs:{id:"ubuntu-debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian"}},[s._v("#")]),s._v(" Ubuntu/Debian")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y apt-transport-https\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/kubernetes.list\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet kubeadm kubectl\n")])])]),a("h3",{attrs:{id:"centos-fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-fedora"}},[s._v("#")]),s._v(" CentOS/Fedora")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/kubernetes.repo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Kubernetes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repo_gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\n$ setenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet kubeadm kubectl\n")])])]),a("h2",{attrs:{id:"修改内核的运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内核的运行参数"}},[s._v("#")]),s._v(" 修改内核的运行参数")]),s._v(" "),a("ul",[a("li",[s._v("https://kubernetes.io/docs/setup/production-environment/container-runtimes/")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ sysctl -a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" net.*iptables\n\nnet.bridge.bridge-nf-call-iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若未输出以上结果，请执行以下命令，若正常输出，请跳过以下命令")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/sysctl.d/99-kubernetes-cri.conf\nnet.bridge.bridge-nf-call-iptables  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.ipv4.ip_forward                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nEOF\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n$ sysctl --system\n")])])]),a("h2",{attrs:{id:"配置-kubelet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubelet"}},[s._v("#")]),s._v(" 配置 kubelet")]),s._v(" "),a("h3",{attrs:{id:"修改-kubelet-service-使用包管理工具安装-kubeadm-请跳过此步，查看下一步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-kubelet-service-使用包管理工具安装-kubeadm-请跳过此步，查看下一步骤"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("kubelet.service")]),s._v(" (使用包管理工具安装 kubeadm 请跳过此步，查看下一步骤)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/systemd/system/kubelet.service.d\n")])])]),a("p",[a("code",[s._v("/etc/systemd/system/kubelet.service.d/10-kubeadm.conf")]),s._v(" 写入以下内容(内容来自包管理工具安装的 kubeadm)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note: This dropin only works with kubeadm and kubelet v1.11+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/var/lib/kubelet/kubeadm-flags.env\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/etc/sysconfig/kubelet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/kubelet "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_KUBECONFIG_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_CONFIG_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_KUBEADM_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_EXTRA_ARGS")]),s._v("\n")])])]),a("p",[a("code",[s._v("/etc/systemd/system/kubelet.service.d/10-proxy-ipvs.conf")]),s._v(" 写入以下内容")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 ipvs 相关内核模块，用于 kube-proxy")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_rr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_wrr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_sh\n")])])]),a("p",[a("code",[s._v("/etc/systemd/system/kubelet.service")]),s._v(" 写入以下内容")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubelet: The Kubernetes Node Agent\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://kubernetes.io/docs/\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/kubelet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("StartLimitInterval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n")])])]),a("h3",{attrs:{id:"修改-kubelet-service-使用包管理工具安装-kubeadm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-kubelet-service-使用包管理工具安装-kubeadm"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("kubelet.service")]),s._v(" (使用包管理工具安装 kubeadm)")]),s._v(" "),a("p",[a("code",[s._v("/etc/systemd/system/kubelet.service.d/10-proxy-ipvs.conf")]),s._v(" 写入以下内容")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 ipvs 相关内核模块，用于 kube-proxy")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_rr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_wrr\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-modprobe ip_vs_sh\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n")])])]),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[s._v("#")]),s._v(" master")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm init --image-repository registry.cn-hangzhou.aliyuncs.com/google_containers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      --pod-network-cidr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      --v "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      --ignore-preflight-errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all\n")])])]),a("ul",[a("li",[a("code",[s._v("--pod-network-cidr 10.244.0.0/16")]),s._v(" 参数与后续 CNI 插件有关，这里以 "),a("code",[s._v("calico")]),s._v(" 为例，若后续部署其他类型的网络插件请更改此参数。")]),s._v(" "),a("li",[s._v("使用 "),a("strong",[s._v("配置文件")]),s._v(" 的方式这里不再赘述")])]),s._v(" "),a("blockquote",[a("p",[s._v("执行可能出现错误，例如缺少依赖包，根据提示安装即可。")])]),s._v(" "),a("p",[s._v("执行成功会输出")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: CoreDNS\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":35:13.270407   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86677")]),s._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("181")]),s._v(".409184ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/serviceaccounts\nI1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":35:13.470292   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86677")]),s._v(" request.go:538"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Throttling request took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("186")]),s._v(".088112ms, request: POST:https://192.168.199.100:6443/api/v1/namespaces/kube-system/configmaps\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl apply -f [podnetwork].yaml"')]),s._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" any number of worker nodes by running the following on each as root:\n\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.100:6443 --token cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])])]),a("h3",{attrs:{id:"node-工作节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-工作节点"}},[s._v("#")]),s._v(" node 工作节点")]),s._v(" "),a("p",[s._v("在 "),a("strong",[s._v("另一主机")]),s._v(" 重复 "),a("strong",[s._v("部署")]),s._v(" 小节以前的步骤，安装配置好 kubelet。根据提示，加入到集群。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.100:6443 --token cz81zt.orsy9gm9v649e5lf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:5edb316fd0d8ea2792cba15cdf1c899a366f147aa03cba52d4e5c5884ad836fe\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("将 "),a("code",[s._v("/etc/kubernetes/admin.conf")]),s._v(" 复制到 "),a("code",[s._v("~/.kube/config")])]),s._v(" "),a("p",[s._v("执行 "),a("code",[s._v("$ kubectl get all -A")])]),s._v(" "),a("p",[s._v("由于未部署 CNI 插件，CoreDNS 未正常启动。")]),s._v(" "),a("h2",{attrs:{id:"部署-cni-calico-3-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-cni-calico-3-10"}},[s._v("#")]),s._v(" 部署 CNI -- calico (3.10)")]),s._v(" "),a("ul",[a("li",[s._v("https://docs.projectcalico.org/v3.10/getting-started/kubernetes/installation/calico")])]),s._v(" "),a("p",[s._v("修改 "),a("code",[s._v("addons/cni/calico/configMap.yaml")]),s._v(" 中的 "),a("code",[s._v("192.168.0.0/16")]),s._v(" 为 "),a("code",[s._v("10.244.0.0/16")]),s._v("(同 "),a("code",[s._v("flannel")]),s._v(" 一致)")]),s._v(" "),a("p",[s._v("有 "),a("a",{attrs:{href:"https://docs.projectcalico.org/v3.10/getting-started/kubernetes/installation/calico",target:"_blank",rel:"noopener noreferrer"}},[s._v("三种方式"),a("OutboundLink")],1),s._v(" 存储 calico 数据,这里采用第一种 "),a("code",[s._v("Installing with the Kubernetes API datastore—50 nodes or less")])]),s._v(" "),a("h4",{attrs:{id:"修改内核参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改内核参数"}},[s._v("#")]),s._v(" 修改内核参数")]),s._v(" "),a("p",[a("code",[s._v("/etc/sysctl.d/99-kubernetes-calico.conf")]),s._v(" 写入以下内容")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("net.ipv4.conf.all.rp_filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("Fedora 31 默认值为 2 ,其他系统通过 "),a("code",[s._v("sysctl -a | grep net.ipv4.conf.all.rp_filter")]),s._v(" 查看")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n\n$ sysctl --system\n")])])]),a("p",[s._v("不进行以上步骤的话,会报如下错误")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-11-17 03:23:02.084 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FATAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5336")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" int_dataplane.go "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032")]),s._v(": Kernel"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s RPF check is set to '")]),s._v("loose"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.  This would allow endpoints to spoof their IP address.  Calico requires net.ipv4.conf.all.rp_filter to be set to 0 or 1. If you require loose RPF and you are not concerned about spoofing, this check can be disabled by setting the IgnoreLooseRPF configuration parameter to '")]),s._v("true'.\n")])])]),a("h4",{attrs:{id:"部署-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-2"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl apply -k addons/cni/calico\n")])])]),a("h2",{attrs:{id:"kube-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kube-proxy"}},[s._v("#")]),s._v(" kube-proxy")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/kubernetes/kubernetes/blob/master/pkg/proxy/ipvs/README.md")])]),s._v(" "),a("p",[s._v("启用 "),a("code",[s._v("ipvs")]),s._v(" 模式")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl edit cm kube-proxy -n kube-system\n")])])]),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[s._v('- mode: ""\n')]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s._v('+ mode: "ipvs"\n')])])])]),a("p",[s._v("加载内核模块(手动加载，实际上已通过 systemd 的配置执行了加载命令，这里介绍一下原理)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 kube-proxy 日志，查看未加载模块")]),s._v("\n$ E1116 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":53:34.421604       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" server_others.go:339"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" can't determine whether to use ipvs proxy, error: IPVS proxier will not be used because the following required kernel modules are not loaded: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ip_vs_rr ip_vs_wrr ip_vs_sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n$ modprobe -- ip_vs\n$ modprobe -- ip_vs_rr\n$ modprobe -- ip_vs_wrr\n$ modprobe -- ip_vs_sh\n\n$ modprobe -- nf_conntrack_ipv4\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux 内核 4.19+")]),s._v("\n$ modprobe -- nf_conntrack\n")])])]),a("p",[s._v("开机自动加载内核模块(Ubuntu)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/modules\nip_vs\nip_vs_rr\nip_vs_wrr\nip_vs_sh\nEOF\n")])])]),a("p",[s._v("CentOS 系列请参考 https://blog.csdn.net/s1234567_89/article/details/51836344")]),s._v(" "),a("p",[s._v("重启 "),a("code",[s._v("kube-proxy")]),s._v(" (注意将 XXX 替换为自己的名称)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl get pod -n kube-system\n\n$ kubectl get pod/kube-proxy-XXX -n kube-system -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kubectl replace --force -f -\n")])])]),a("h2",{attrs:{id:"master-节点默认不能运行-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-节点默认不能运行-pod"}},[s._v("#")]),s._v(" master 节点默认不能运行 pod")]),s._v(" "),a("ul",[a("li",[s._v("https://blog.csdn.net/BigData_Mining/article/details/88683459")])]),s._v(" "),a("p",[s._v("也就是说如果用 "),a("code",[s._v("kubeadm")]),s._v(" 部署一个单节点集群不能使用,请执行以下命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl taint nodes --all node-role.kubernetes.io/master-\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复默认值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ kubectl taint nodes NODE_NAME node-role.kubernetes.io/master=true:NoSchedule")]),s._v("\n")])])]),a("h2",{attrs:{id:"高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[s._v("#")]),s._v(" 高可用")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm init --apiserver-cert-extra-sans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx.com --control-plane-endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx.com:6443 其他参数\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --control-plane 其他参数\n")])])]),a("ul",[a("li",[s._v("高可用，入口地址不能为 IP(127.0.0.1 NGINX 轮询除外，这里不做介绍) 必须为一个域名,"),a("code",[s._v("init")]),s._v(" 时必须指定 "),a("code",[s._v("--apiserver-cert-extra-sans=xxx.com")]),s._v(" "),a("code",[s._v("--control-plane-endpoint=xxx.com:6443")]),s._v("。通过 DNS 轮询 xxx.com 实现高可用(请自行搭建 DNS 服务器，这里不做介绍)")])]),s._v(" "),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),a("p",[s._v("使用包管理工具安装的 "),a("code",[s._v("kubeadm")]),s._v(" 增加了哪些文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils -y\n$ yumdownloader kubeadm\n$ rpm2cpio xxx.rpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cpio -div\n")])])]),a("p",[s._v("新增了 "),a("code",[s._v("/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note: This dropin only works with kubeadm and kubelet v1.11+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/var/lib/kubelet/kubeadm-flags.env\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/etc/sysconfig/kubelet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/kubelet "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_KUBECONFIG_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_CONFIG_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_KUBEADM_ARGS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBELET_EXTRA_ARGS")]),s._v("\n")])])]),a("h2",{attrs:{id:"kubeadm-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-配置文件"}},[s._v("#")]),s._v(" kubeadm 配置文件")]),s._v(" "),a("ul",[a("li",[s._v("https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta2")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成默认的配置文件")]),s._v("\n\n$ kubeadm config print init-defaults\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\n\n$ kubeadm init/join --config 配置文件名 其他参数\n")])])]),a("h2",{attrs:{id:"所需镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所需镜像"}},[s._v("#")]),s._v(" 所需镜像")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubeadm config images list\n")])])]),a("h2",{attrs:{id:"使用其他运行时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用其他运行时"}},[s._v("#")]),s._v(" 使用其他运行时")]),s._v(" "),a("p",[a("code",[s._v("~/lnmp/kubernetes/kubeadm")])]),s._v(" "),a("h2",{attrs:{id:"笔者总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔者总结"}},[s._v("#")]),s._v(" 笔者总结")]),s._v(" "),a("ul",[a("li",[s._v("关键在于配置好 "),a("code",[s._v("kubelet")])]),s._v(" "),a("li",[s._v("k8s 组件除了 "),a("code",[s._v("kubelet")]),s._v(" 其他组件都能够以 "),a("code",[s._v("pod")]),s._v(" 方式运行，秘诀在于使用了 "),a("code",[s._v("hostnetwork")])]),s._v(" "),a("li",[s._v("国内网络问题（拉取不到 "),a("code",[s._v("k8s.gcr.io")]),s._v(" 镜像）：加上参数 "),a("code",[s._v("--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers")]),s._v(" 解决")]),s._v(" "),a("li",[a("code",[s._v("kubelet")]),s._v(" 的参数 "),a("code",[s._v("--cgroup-driver=systemd")]),s._v(" 一定要与 Docker(或其他的 CRI) 的一致，其他文档有介绍，这里不再赘述")])])])}),[],!1,null,null,null);t.default=n.exports}}]);