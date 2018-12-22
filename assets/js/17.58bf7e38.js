(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{182:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"helm-with-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-with-tls","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm With TLS")]),e._v(" "),a("h2",{attrs:{id:"安装客户端-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装客户端-helm","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装客户端 helm")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/helm/helm")])]),e._v(" "),a("p",[e._v("在 GitHub Release 处下载二进制文件，放入 "),a("code",[e._v("PATH")]),e._v(" 即可")]),e._v(" "),a("ul",[a("li",[e._v("需要安装 "),a("code",[e._v("socat")]),e._v("，"),a("code",[e._v("yum/apt")]),e._v(" 直接安装即可")])]),e._v(" "),a("h2",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[e._v("#")]),e._v(" 客户端")]),e._v(" "),a("p",[e._v("证书直接用之前生成的，具体原理和 Dockerd TLS 一样")]),e._v(" "),a("p",[e._v("之前没有生成证书，使用如下命令生成证书")]),e._v(" "),a("p",[e._v("编辑 "),a("code",[e._v("./coreos/.env")]),e._v(" 文件中的变量")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker-compose up cfssl\n")])])]),a("p",[e._v("下载二进制文件，放入 PATH")]),e._v(" "),a("p",[e._v("把客户端证书放入指定文件夹，减少命令参数，这点和启用了 Dockerd TLS 认证的原理一样")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ~/.helm\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreos/cert/ca.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("helm home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/ca.pem\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreos/cert/cert.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("helm home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/cert.pem\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreos/cert/key.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("helm home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/key.pem\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreos/cert/server-cert.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("helm home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/server-cert.pem\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreos/cert/server-key.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("helm home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/server-key.pem\n")])])]),a("h3",{attrs:{id:"winodws、macos-docker-桌面版-k8s-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winodws、macos-docker-桌面版-k8s-集群","aria-hidden":"true"}},[e._v("#")]),e._v(" Winodws、macOS Docker 桌面版 k8s 集群")]),e._v(" "),a("p",[e._v("编辑 "),a("code",[e._v("systemd/.env")]),e._v(" 中的变量，之后生成证书")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ./lnmp-k8s\n\n$ docker-compose up cfssl-single\n")])])]),a("p",[e._v("之后将 "),a("code",[e._v("server-cert.pem")]),e._v(" "),a("code",[e._v("server-key.pem")]),e._v(" "),a("code",[e._v("ca.pem")]),e._v(" "),a("code",[e._v("cert.pem")]),e._v(" "),a("code",[e._v("key.pem")]),e._v(" 复制到 "),a("code",[e._v("~/.helm")])]),e._v(" "),a("h2",{attrs:{id:"服务端部署-tiller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端部署-tiller","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务端部署 Tiller")]),e._v(" "),a("ul",[a("li",[e._v("由于网络问题，替换为国内源")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/.helm\n\n$ helm init --tiller-tls --tiller-tls-cert ./server-cert.pem \\\n      --tiller-tls-key ./server-key.pem \\\n      --tiller-tls-verify --tls-ca-cert ./ca.pem \\\n      --service-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tiller \\\n      --upgrade -i \\\n      gcr.mirrors.ustc.edu.cn/kubernetes-helm.tiller:v2.10.0 --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n")])])]),a("p",[e._v("客户端使用时加上 "),a("code",[e._v("--tls")])]),e._v(" "),a("h3",{attrs:{id:"winodws、macos-docker-桌面版-k8s-集群-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winodws、macos-docker-桌面版-k8s-集群-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Winodws、macOS Docker 桌面版 k8s 集群")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/.helm\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Windows")]),e._v("\n$ helm init --tiller-tls --tiller-tls-cert ./server-cert.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("\n      --tiller-tls-key ./server-key.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n      --tiller-tls-verify --tls-ca-cert ./ca.pem "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("\n      --service-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tiller "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n      --upgrade -i `\n      gcr.mirrors.ustc.edu.cn/kubernetes-helm.tiller:v2.10.0 --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# macOS")]),e._v("\n$ helm init --tiller-tls --tiller-tls-cert ./server-cert.pem \\\n      --tiller-tls-key ./server-key.pem \\\n      --tiller-tls-verify --tls-ca-cert ./ca.pem \\\n      --service-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tiller \\\n      --upgrade -i \\\n      gcr.mirrors.ustc.edu.cn/kubernetes-helm.tiller:v2.10.0 --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n\n")])])]),a("h2",{attrs:{id:"rbac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rbac","aria-hidden":"true"}},[e._v("#")]),e._v(" RBAC")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/lnmp/kubernetes\n\n$ kubectl apply -f addons/helm/rbac-config.yaml\n")])])]),a("h2",{attrs:{id:"helm-仓库-charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-仓库-charts","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 仓库 Charts")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/helm/charts")])])])}],!1,null,null,null);r.options.__file="helm.md";s.default=r.exports}}]);