import{_ as l,r as c,o as n,c as r,a,b as e,d,w as i,e as o}from"./app-383362d6.js";const t={},h=a("h1",{id:"docker-compose快速部署",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-compose快速部署","aria-hidden":"true"},"#"),e(" Docker-Compose快速部署")],-1),u=a("br",null,null,-1),p=o(`<h4 id="部署对象" tabindex="-1"><a class="header-anchor" href="#部署对象" aria-hidden="true">#</a> 部署对象</h4><p>Server、Web 与 Client</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>仅适用于 Docker-Compose 部署体验，生产环境建议使用专业的 MySQL、Redis 等服务</p></div><h4 id="操作说明" tabindex="-1"><a class="header-anchor" href="#操作说明" aria-hidden="true">#</a> 操作说明</h4><h5 id="首次启动操作" tabindex="-1"><a class="header-anchor" href="#首次启动操作" aria-hidden="true">#</a> 首次启动操作</h5><ol><li><p>进入 CodeAnalysis 工作目录（例如<code>~/CodeAnalysis</code>)，以下路径均为目录内的相对路径</p></li><li><p>执行命令：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker-compose deploy #启动tca_server容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：通过 Docker-Compose 部署默认会在当前根目录下的挂载三个路径：</p><ul><li><code>.docker_data/logs</code>：存放 TCA 平台的各个服务日志输出目录；</li><li><code>.docker_data/mysql</code>：存放 TCA 平台的 MySQL 数据</li><li><code>.docker_data/redis</code>：存放 TCA 平台的 Redis 数据</li><li><code>.docker_data/filedata</code>：存放 TCA 平台文件服务器的文件</li></ul>`,9),m={class:"custom-container tip"},b=a("p",{class:"custom-container-title"},"TIP",-1),_=a("code",null,"http://部署机器IP/",-1),v=a("br",null,null,-1),k=a("p",null,"默认平台登录账号/密码：CodeDog/admin",-1),g=a("p",null,"如部署过程中，已调整默认账号密码，请按照调整后的账号密码进行登录",-1),A=o(`<h5 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h5><ol><li><p>更新代码</p></li><li><p>执行以下命令：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker-compose build  #重新构建TCA相关镜像
bash ./quick_install.sh docker-compose stop  #停止运行中的TCA容器
bash ./quick_install.sh docker-compose deploy  #重新部署TCA相关容器与初始化（或刷新数据）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="运行操作" tabindex="-1"><a class="header-anchor" href="#运行操作" aria-hidden="true">#</a> 运行操作</h5><p>如果已经在机器上执行过<code>docker-compose deploy</code>，并保留容器数据的，可以执行以下命令启动容器，继续运行 TCA</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker-compose start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="停止操作" tabindex="-1"><a class="header-anchor" href="#停止操作" aria-hidden="true">#</a> 停止操作</h5><p>如果容器正在运行，希望停止容器，可以执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker-compose stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="构建镜像操作" tabindex="-1"><a class="header-anchor" href="#构建镜像操作" aria-hidden="true">#</a> 构建镜像操作</h5><p>如果希望构建镜像，可以执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker-compose build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function C(f,x){const s=c("RouterLink");return n(),r("div",null,[h,a("p",null,[e("TCA提供部署脚本，支持一键式快速部署 Server、Web、Client。"),u,e(" 脚本共提供三种部署方式："),d(s,{to:"/en/quickStarted/dockerDeploy.html"},{default:i(()=>[e("Docker部署(平台体验首推)")]),_:1}),e("、Docker-Compose部署、"),d(s,{to:"/en/quickStarted/codeDeploy.html"},{default:i(()=>[e("源码部署")]),_:1}),e("， 可根据您的具体使用场景任意选择其一进行部署。")]),p,a("div",m,[b,a("p",null,[e("完成 TCA 平台部署后，请在浏览器输入"),_,e("，点击立即体验，完成登录后即可开启您的腾讯云代码分析。"),v,e(" 平台内操作指引请查看："),d(s,{to:"/en/guide/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E6%AC%A1%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90.html"},{default:i(()=>[e("快速启动一次代码分析")]),_:1})]),k,g]),A])}const y=l(t,[["render",C],["__file","dockercomposeDeploy.html.vue"]]);export{y as default};
