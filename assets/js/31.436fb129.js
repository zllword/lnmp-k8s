(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{351:function(s,t,a){"use strict";a.r(t);var r=a(33),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-隧道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-隧道"}},[s._v("#")]),s._v(" SSH 隧道")]),s._v(" "),a("p",[s._v("访问 windows ip => wsl2 ip")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -LNg "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26443")]),s._v(":wsl2:6443 khs1994@wsl2\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地转发 监听的端口在执行命令的主机")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -g -f -N -L forwardingPort:targetIP:targetPort user@sshServerIP\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# targetIP 和 sshServerIP 可以相同，也可以不同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不同的话，sshServerIP 作为跳板代理 targetIP")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程转发 逆向转发 监听的端口在 sshServer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 故只能通过 sshServer 的 127.0.0.1:forwardingPort")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问 targetIP:targetPort")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -f -N -R forwardingPort:targetIP:targetPort user@sshServerIP\n")])])]),a("ul",[a("li",[a("code",[s._v("-N")]),s._v(" 不登录到服务端")]),s._v(" "),a("li",[a("code",[s._v("-f")]),s._v(" 后台运行")]),s._v(" "),a("li",[a("code",[s._v("-g")]),s._v(" 监听所有 IP")])]),s._v(" "),a("h2",{attrs:{id:"动态转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态转发"}},[s._v("#")]),s._v(" 动态转发")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SSH Server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("在浏览器设置 "),a("strong",[s._v("socks")]),s._v(" 代理服务器 "),a("code",[s._v("127.0.0.1:<local port>")]),s._v("，即可进行代理访问。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[s._v("https://www.jianshu.com/p/20600c91e656")])])])}),[],!1,null,null,null);t.default=e.exports}}]);