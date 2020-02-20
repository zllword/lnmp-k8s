(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"kubectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl"}},[a._v("#")]),a._v(" kubectl")]),a._v(" "),t("h2",{attrs:{id:"增加-hosts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加-hosts"}},[a._v("#")]),a._v(" 增加 hosts")]),a._v(" "),t("p",[a._v("执行 kubectl 的主机必须能 ping 通节点,可以在主机增加 "),t("code",[a._v("hosts")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("NODE_IP NODE_NAME\n")])])]),t("p",[a._v("否则将不能执行 "),t("code",[a._v("exec")]),a._v(" "),t("code",[a._v("port-forward")]),a._v(" 等命令.")]),a._v(" "),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" run")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl run nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx:1.17.8-alpine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --command -- cmd arg1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -- arg1 arg2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n")])])]),t("h2",{attrs:{id:"exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[a._v("#")]),a._v(" exec")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it nginx -- "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n")])])]),t("h2",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" expose")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl expose deployment nginx --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" --target-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n")])])]),t("h2",{attrs:{id:"logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[a._v("#")]),a._v(" logs")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl logs POD_NAME\n")])])]),t("ul",[t("li",[t("p",[a._v("https://www.jianshu.com/p/258539db000a")])]),a._v(" "),t("li",[t("p",[a._v("https://kubernetes.io/zh/docs/user-guide/kubectl-overview/")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);