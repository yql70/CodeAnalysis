import{_,r as n,o,c as s,a as e,b as i,d as r,e as l}from"./app-383362d6.js";const d={},c=l('<h1 id="tca-server" tabindex="-1"><a class="header-anchor" href="#tca-server" aria-hidden="true">#</a> TCA Server</h1><h2 id="工程结构" tabindex="-1"><a class="header-anchor" href="#工程结构" aria-hidden="true">#</a> 工程结构</h2><p>TCA Server由Main、Analysis、Login、File、ScmProxy五个微服务组成，主要技术栈为Django+uwsgi+nginx</p><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明" aria-hidden="true">#</a> 配置说明</h2>',4),t={href:"https://github.com/Faberiii/CodeAnalysis/blob/main/server/scripts/config.sh",target:"_blank",rel:"noopener noreferrer"},S=l(`<h3 id="main服务" tabindex="-1"><a class="header-anchor" href="#main服务" aria-hidden="true">#</a> Main服务</h3><p>框架配置：</p><ul><li>MAIN_DEBUG_MODE: Main服务的Debug模式，<code>true/false</code></li><li>MAIN_SECRET_KEY: Main服务的Secret Key配置，可以通过<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>方法获取</li></ul><p>Main服务DB配置：</p><ul><li>MAIN_DB_NAME：Main服务的数据库名称</li><li>MAIN_DB_USER：Main服务的数据库用户名</li><li>MAIN_DB_PASSWORD：Main服务的数据库密码</li><li>MAIN_DB_HOST：Main服务的数据库地址</li><li>MAIN_DB_PORT：Main服务的数据库端口号</li></ul><p>Main服务Redis配置：</p><ul><li>MAIN_REDIS_HOST：Main服务访问的Redis地址</li><li>MAIN_REDIS_PORT：Main服务访问的Redis端口号</li><li>MAIN_REDIS_PASSWD：Main服务访问的Redis密码</li><li>MAIN_REDIS_DBID：Main服务访问的Redis DB编号，默认为1（Analysis服务默认访问0号DB）</li></ul><p>服务交互配置：</p><ul><li>MAIN_SENTRY_DSN：Main服务异常日志上报至sentry配置</li><li>PASSWORD_KEY：数据加密密钥</li><li>API_TICKET_SALT：服务访问Token加密密钥</li><li>API_TICKET_TOKEN：服务访问Token</li><li>FILE_SERVER_TOKEN：文件服务器访问Token</li><li>CODEDOG_TOKEN：CodeDog默认访问的Token</li></ul><h3 id="analysis服务" tabindex="-1"><a class="header-anchor" href="#analysis服务" aria-hidden="true">#</a> Analysis服务</h3><p>框架配置：</p><ul><li>ANALYSIS_DEBUG_MODE: Analysis服务的Debug模式，<code>true/false</code></li><li>ANALYSIS_SECRET_KEY: Analysis服务的Secret Key配置，可以通过<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>方法获取</li></ul><p>Analysis服务DB配置：</p><ul><li>ANALYSIS_DB_NAME：Analysis服务的数据库名称</li><li>ANALYSIS_DB_USER：Analysis服务的数据库用户名</li><li>ANALYSIS_DB_PASSWORD：Analysis服务的数据库密码</li><li>ANALYSIS_DB_HOST：Analysis服务的数据库地址</li><li>ANALYSIS_DB_PORT：Analysis服务的数据库端口号</li></ul><p>Analysis服务Redis配置：</p><ul><li>ANALYSIS_REDIS_HOST：Analysis服务访问的Redis地址</li><li>ANALYSIS_REDIS_PORT：Analysis服务访问的Redis端口号</li><li>ANALYSIS_REDIS_PASSWD：Analysis服务访问的Redis密码</li><li>ANALYSIS_REDIS_DBID：Analysis服务访问的Redis DB编号，默认为0（Main服务默认访问1号DB）</li></ul><p>服务交互配置：</p><ul><li>ANALYSIS_SENTRY_DSN：Analysis服务异常日志上报至sentry配置</li><li>PASSWORD_KEY：数据加密密钥</li><li>API_TICKET_SALT：服务访问Token加密密钥</li><li>API_TICKET_TOKEN：服务访问Token</li></ul><h3 id="login服务" tabindex="-1"><a class="header-anchor" href="#login服务" aria-hidden="true">#</a> Login服务</h3><p>框架配置：</p><ul><li>LOGIN_DEBUG_MODE: Login服务的Debug模式，<code>true/false</code></li><li>LOGIN_SECRET_KEY: Login服务的Secret Key配置，可以通过<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>方法获取</li></ul><p>Login服务DB配置：</p><ul><li>LOGIN_DB_NAME：Login服务的数据库名称</li><li>LOGIN_DB_USER：Login服务的数据库用户名</li><li>LOGIN_DB_PASSWORD：Login服务的数据库密码</li><li>LOGIN_DB_HOST：Login服务的数据库地址</li><li>LOGIN_DB_PORT：Login服务的数据库端口号</li></ul><p>服务交互配置：</p><ul><li>PASSWORD_KEY：数据加密密钥</li><li>API_TICKET_SALT：服务访问Token加密密钥</li><li>API_TICKET_TOKEN：服务访问Token</li></ul><p>注：配置文件中的pub_key与private_key生成方式可以参考以下方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen -t rsa -b 1024 -m PEM -f tca_login.key
$ openssl rsa -in tca_login.key -pubout -outform PEM -out tca_login.key.pub
$ cat tca_login.key  # 作为private_key的内容
$ cat tca_login.key.pub  # 作为pub_key的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file服务" tabindex="-1"><a class="header-anchor" href="#file服务" aria-hidden="true">#</a> File服务</h3><p>框架配置：</p><ul><li>FILE_DEBUG_MODE: File服务的Debug模式，<code>true/false</code></li><li>FILE_SECRET_KEY: File服务的Secret Key配置，可以通过<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>方法获取</li></ul><p>File服务DB配置：</p><ul><li>FILE_DB_NAME：File服务的数据库名称</li><li>FILE_DB_USER：File服务的数据库用户名</li><li>FILE_DB_PASSWORD：File服务的数据库密码</li><li>FILE_DB_HOST：File服务的数据库地址</li><li>FILE_DB_PORT：File服务的数据库端口号</li></ul><p>服务交互配置：</p><ul><li>FILE_SENTRY_DSN：File服务异常日志上报至sentry配置</li><li>API_TICKET_SALT：服务访问Token加密密钥</li><li>API_TICKET_TOKEN：服务访问Token</li></ul><p>File存储引擎配置</p><ul><li>FILE_STORAGE_CLIENT: 文件存储引擎，可选项：<code>LOCAL</code>/<code>MINIO</code>/<code>COS</code><ul><li>当配置引擎为<code>LOCAL</code>，可以指定<code>FILE_STORAGE_DIR</code>文件存放的路径</li><li>当配置引擎为<code>MINIO</code>，可以指定以下变量： <ul><li>FILE_MINIO_ENTRYPOINT：MINIO服务地址</li><li>FILE_MINIO_ACCESS_KEY：MINIO服务访问账号</li><li>MINIO_SECRET_KEY：MINIO服务访问密码</li></ul></li><li>当配置引擎为<code>COS</code>，可以指定以下变量 <ul><li>TENCENT_COS_APPID</li><li>TENCENT_COS_SECRETID</li><li>TENCENT_COS_SECRETKEY</li><li>TENCENT_COS_REGION</li><li>TENCENT_COS_ROOT_BUCKET：填写格式为bucket-appid</li></ul></li></ul></li></ul><h3 id="scmproxy" tabindex="-1"><a class="header-anchor" href="#scmproxy" aria-hidden="true">#</a> ScmProxy</h3><p>服务配置：</p><ul><li>SCMPROXY_HOST：ScmProxy服务的HOST，默认为<code>0.0.0.0</code></li><li>SCMPROXY_PORT：ScmProxy服务监听端口，默认为<code>8009</code></li><li>SCMPROXY_SENTRY_URL：ScmProxy服务异常日志上报至sentry配置</li><li>SCMPROXY: 通过本环境变量去指定其他服务调用ScmProxy服务的地址，默认值为<code>127.0.0.1:8009</code></li></ul>`,39);function E(I,A){const a=n("ExternalLinkIcon");return o(),s("div",null,[c,e("p",null,[i("注意：以下配置内容可以参考 "),e("a",t,[i("config.sh"),r(a)]),i("文件进行查阅，使用时主要关注 MySQL、Redis 的配置，其他配置均已提供默认值，可以根据需要进行调整")]),S])}const T=_(d,[["render",E],["__file","server.html.vue"]]);export{T as default};
