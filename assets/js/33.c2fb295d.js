(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{233:function(s,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"mysql-日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-日志"}},[s._v("#")]),s._v(" MySQL 日志")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("log_output "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" FILE\n\nlog-error"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/mysql/error.log\n\nslow_query_log "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nslow-query-log-file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/host_name-slow.log\n")])])]),r("p",[r("strong",[s._v("错误日志")]),s._v(" 能输出到 "),r("strong",[s._v("标准输出")]),s._v("，之后使用日志收集软件进行处理。")]),s._v(" "),r("p",[r("s",[r("strong",[s._v("慢日志")]),s._v(" 不能输出到 "),r("strong",[s._v("标准错误输出")]),s._v("，方案是采用节点 hostPath /var/log/mysql/slow.APP_ENV.log")])]),s._v(" "),r("p",[r("strong",[s._v("慢日志")]),s._v(" 放到数据库所在目录（系统默认）")])])}),[],!1,null,null,null);t.default=o.exports}}]);