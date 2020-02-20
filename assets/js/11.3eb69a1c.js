(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"metrics-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-server"}},[e._v("#")]),e._v(" Metrics Server")]),e._v(" "),s("blockquote",[s("p",[e._v("本文基于 0.3.x 版本。")])]),e._v(" "),s("ul",[s("li",[e._v("https://github.com/kubernetes-incubator/metrics-server/tree/master/deploy/1.8%2B")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl apply -k addons/metrics-server\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" node\n\n$ kubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" pod -A\n")])])]),s("h2",{attrs:{id:"错误排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误排查"}},[e._v("#")]),e._v(" 错误排查")]),e._v(" "),s("p",[e._v("无法解析节点的主机名，是 metrics-server 这个容器不能通过 CoreDNS 解析各 Node 的主机名，metrics-server 连节点时默认是连接节点的主机名，需要加个参数，让它连接节点的IP，同时因为 10250 是https端口，连接它时需要提供证书，所以加上 --kubelet-insecure-tls，表示不验证客户端证书，此前的版本中使用 --source= 这个参数来指定不验证客户端证书。")]),e._v(" "),s("ul",[s("li",[e._v("https://blog.csdn.net/zyl290760647/article/details/83041991")]),e._v(" "),s("li",[e._v("https://www.cnblogs.com/both/p/10078316.html")])]),e._v(" "),s("h2",{attrs:{id:"kubeadm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm"}},[e._v("#")]),e._v(" kubeadm")]),e._v(" "),s("p",[e._v("报如下错误：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("unable to fully collect metrics: unable to fully scrape metrics from "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" kubelet_summary:node1: unable to fetch metrics from Kubelet node1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".199.100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": Get https://192.168.199.100:10250/stats/summary?only_cpu_and_memory"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true: x509: cannot validate certificate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".199.100 because it doesn't contain any IP SANs\n")])])]),s("p",[e._v("修改 "),s("code",[e._v("addons/metrics-server/metrics-server-deployment.yaml")]),e._v(",增加 "),s("code",[e._v("- --kubelet-insecure-tls")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl edit -n kube-system deployment/metrics-server\n")])])]),s("h2",{attrs:{id:"启动参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动参数"}},[e._v("#")]),e._v(" 启动参数")]),e._v(" "),s("blockquote",[s("p",[e._v("0.3.1")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Launch metrics-server\n\nUsage:\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\nFlags:\n      --alsologtostderr                                         log to standard error as well as files\n      --authentication-kubeconfig string                        kubeconfig "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" pointing at the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'core'")]),e._v(" kubernetes server with enough rights to create tokenaccessreviews.authentication.k8s.io.\n      --authentication-skip-lookup                              If false, the authentication-kubeconfig will be used to lookup missing authentication configuration from the cluster.\n      --authentication-token-webhook-cache-ttl duration         The duration to cache responses from the webhook token authenticator. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default 10s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --authorization-kubeconfig string                         kubeconfig "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" pointing at the "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'core'")]),e._v(" kubernetes server with enough rights to create  subjectaccessreviews.authorization.k8s.io.\n      --authorization-webhook-cache-authorized-ttl duration     The duration to cache "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'authorized'")]),e._v(" responses from the webhook authorizer. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default 10s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --authorization-webhook-cache-unauthorized-ttl duration   The duration to cache "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'unauthorized'")]),e._v(" responses from the webhook authorizer. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default 10s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --bind-address "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v("                                         The IP address on "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" to listen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the --secure-port port. The associated interface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" must be reachable by the rest of the cluster, and by CLI/web clients. If blank, all interfaces will be used "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" all IPv4 interfaces and :: "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" all IPv6 interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --cert-dir string                                         The directory where the TLS certs are located. If --tls-cert-file and --tls-private-key-file are provided, this flag will be ignored. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"apiserver.local.config/certificates"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --client-ca-file string                                   If set, any request presenting a client certificate signed by one of the authorities "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the client-ca-file is authenticated with an identity corresponding to the CommonName of the client certificate.\n      --contention-profiling                                    Enable lock contention profiling, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" profiling is enabled\n      --enable-swagger-ui                                       Enables swagger ui on the apiserver at /swagger-ui\n  -h, --help                                                    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v("\n      --http2-max-streams-per-connection int                    The limit that the server gives to clients "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the maximum number of streams "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" an HTTP/2 connection. Zero means to use golang"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s default.\n      --kubeconfig string                                       The path to the kubeconfig used to connect to the Kubernetes API server and the Kubelets (defaults to in-cluster config)\n      --kubelet-insecure-tls                                    Do not verify CA of serving certificates presented by Kubelets.  For testing purposes only.\n      --kubelet-port int                                        The port to use to connect to Kubelets (defaults to 10250) (default 10250)\n      --kubelet-preferred-address-types strings                 The priority of node address types to use when determining which address to use to connect to a particular node (default [Hostname,InternalDNS,InternalIP,ExternalDNS,ExternalIP])\n      --log-flush-frequency duration                            Maximum number of seconds between log flushes (default 5s)\n      --log_backtrace_at traceLocation                          when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                                          If non-empty, write log files in this directory\n      --logtostderr                                             log to standard error instead of files (default true)\n      --metric-resolution duration                              The resolution at which metrics-server will retain metrics. (default 1m0s)\n      --profiling                                               Enable profiling via web interface host:port/debug/pprof/ (default true)\n      --requestheader-allowed-names strings                     List of client certificate common names to allow to provide usernames in headers specified by --requestheader-username-headers. If empty, any client certificate validated by the authorities in --requestheader-client-ca-file is allowed.\n      --requestheader-client-ca-file string                     Root certificate bundle to use to verify client certificates on incoming requests before trusting usernames in headers specified by --requestheader-username-headers. WARNING: generally do not depend on authorization being already done for incoming requests.\n      --requestheader-extra-headers-prefix strings              List of request header prefixes to inspect. X-Remote-Extra- is suggested. (default [x-remote-extra-])\n      --requestheader-group-headers strings                     List of request headers to inspect for groups. X-Remote-Group is suggested. (default [x-remote-group])\n      --requestheader-username-headers strings                  List of request headers to inspect for usernames. X-Remote-User is common. (default [x-remote-user])\n      --secure-port int                                         The port on which to serve HTTPS with authentication and authorization. If 0, don'")]),e._v("t serve HTTPS at all. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --stderrthreshold severity                                logs at or above this threshold go to stderr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --tls-cert-file string                                    File containing the default x509 Certificate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" HTTPS. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CA cert, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" any, concatenated after server cert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(". If HTTPS serving is enabled, and --tls-cert-file and --tls-private-key-file are not provided, a self-signed certificate and key are generated "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the public address and saved to the directory specified by --cert-dir.\n      --tls-cipher-suites strings                               Comma-separated list of cipher suites "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the server. If omitted, the default Go cipher suites will be use.  Possible values: TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_RC4_128_SHA,TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_RC4_128_SHA,TLS_RSA_WITH_3DES_EDE_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_RC4_128_SHA\n      --tls-min-version string                                  Minimum TLS version supported. Possible values: VersionTLS10, VersionTLS11, VersionTLS12\n      --tls-private-key-file string                             File containing the default x509 private key matching --tls-cert-file.\n      --tls-sni-cert-key namedCertKey                           A pair of x509 certificate and private key "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" paths, optionally suffixed with a list of domain patterns "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" are fully qualified domain names, possibly with prefixed wildcard segments. If no domain patterns are provided, the names of the certificate are extracted. Non-wildcard matches trump over wildcard matches, explicit domain patterns trump over extracted names. For multiple key/certificate pairs, use the --tls-sni-cert-key multiple times. Examples: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example.crt,example.key"')]),e._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo.crt,foo.key:*.foo.com,foo.com"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  -v, --v Level                                                 log level "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" V logs\n      --vmodule moduleSpec                                      comma-separated list of "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("pattern")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("N settings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" file-filtered logging\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);