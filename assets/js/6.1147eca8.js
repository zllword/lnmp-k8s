(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"coredns-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coredns-插件","aria-hidden":"true"}},[e._v("#")]),e._v(" CoreDNS 插件")]),e._v(" "),n("ul",[n("li",[e._v("https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/dns/coredns/coredns.yaml.base")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("$ kubectl apply -k addons/coredns\n\n$ kubectl get all -n kube-system\n")])])]),n("h2",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test","aria-hidden":"true"}},[e._v("#")]),e._v(" Test")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("$ kubectl run nginx --image"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl expose pod nginx-6b4b85b77b-sxskl --port 80\n\n$ kubectl run nginx2 --image"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" nginx2-5f48f6bb64-gr5jk -i -t -- /bin/sh\n\nroot@nginx:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# cat /etc/resolv.conf")]),e._v("\n\nroot@nginx:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ping nginx")]),e._v("\n")])])])])}],!1,null,null,null);t.default=a.exports}}]);