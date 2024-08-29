import{_ as t,o as d,c as e,e as a}from"./app-383362d6.js";const r={},i=a('<h1 id="api调用脚本使用指引" tabindex="-1"><a class="header-anchor" href="#api调用脚本使用指引" aria-hidden="true">#</a> API调用脚本使用指引</h1><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><h4 id="_1-修改脚本api-invoke-py的内部参数-填写个人令牌mytoken" tabindex="-1"><a class="header-anchor" href="#_1-修改脚本api-invoke-py的内部参数-填写个人令牌mytoken" aria-hidden="true">#</a> 1. 修改脚本api_invoke.py的内部参数，填写个人令牌mytoken</h4><h4 id="_2-部署代码分析服务" tabindex="-1"><a class="header-anchor" href="#_2-部署代码分析服务" aria-hidden="true">#</a> 2. 部署代码分析服务</h4><h4 id="_3-进入项目根目录" tabindex="-1"><a class="header-anchor" href="#_3-进入项目根目录" aria-hidden="true">#</a> 3. 进入项目根目录</h4><h4 id="_4-检查requests-模块是否安装-如未安装-可执行下列安装指令。" tabindex="-1"><a class="header-anchor" href="#_4-检查requests-模块是否安装-如未安装-可执行下列安装指令。" aria-hidden="true">#</a> 4. 检查requests 模块是否安装，如未安装，可执行下列安装指令。</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip install requests\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-设置参数method-选择要执行的api接口-并根据接口添加所需参数。" tabindex="-1"><a class="header-anchor" href="#_5-设置参数method-选择要执行的api接口-并根据接口添加所需参数。" aria-hidden="true">#</a> 5. 设置参数method，选择要执行的api接口，并根据接口添加所需参数。</h4><h4 id="_6-执行脚本python-scriptsapi-py" tabindex="-1"><a class="header-anchor" href="#_6-执行脚本python-scriptsapi-py" aria-hidden="true">#</a> 6. 执行脚本python ScriptsAPI.py</h4><h2 id="方法总览" tabindex="-1"><a class="header-anchor" href="#方法总览" aria-hidden="true">#</a> 方法总览</h2><table><thead><tr><th>method</th><th>类型</th></tr></thead><tbody><tr><td>create_repository</td><td>创建代码库</td></tr><tr><td>update_scheme_settings</td><td>设置指定代码库的指定方案的代码度量配置</td></tr><tr><td>create_project</td><td>创建分析项目</td></tr><tr><td>create_scans</td><td>启动任务</td></tr><tr><td>get_scan_cons</td><td>轮询任务结果</td></tr><tr><td>get_overview</td><td>获取分析概览</td></tr><tr><td>get_issues</td><td>查看扫描问题列表</td></tr><tr><td>get_issue_detail</td><td>查看问题详情</td></tr><tr><td>get_ccissues</td><td>查看指定项目的圈复杂度问题列表</td></tr><tr><td>get_dupfiles</td><td>查看指定项目的重复文件列表</td></tr></tbody></table><h2 id="api详细信息" tabindex="-1"><a class="header-anchor" href="#api详细信息" aria-hidden="true">#</a> API详细信息</h2><h3 id="一、创建代码库" tabindex="-1"><a class="header-anchor" href="#一、创建代码库" aria-hidden="true">#</a> 一、创建代码库</h3><h4 id="_1-url请求" tabindex="-1"><a class="header-anchor" href="#_1-url请求" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明" tabindex="-1"><a class="header-anchor" href="#_2-参数说明" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数" tabindex="-1"><a class="header-anchor" href="#脚本参数" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，create_repository</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>scm_url</td><td>str</td><td>代码库地址</td></tr><tr><td>scm_type</td><td>str</td><td>填git或svn</td></tr></tbody></table><h5 id="脚本内部参数" tabindex="-1"><a class="header-anchor" href="#脚本内部参数" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例" tabindex="-1"><a class="header-anchor" href="#_3-操作示例" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=create_repository --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --scm_url=${TCA_SCM_URL} --scm_type=${TCA_SCM_TYPE}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、设置指定代码库的指定方案的代码度量配置" tabindex="-1"><a class="header-anchor" href="#二、设置指定代码库的指定方案的代码度量配置" aria-hidden="true">#</a> 二、设置指定代码库的指定方案的代码度量配置</h3><h4 id="_1-url请求-1" tabindex="-1"><a class="header-anchor" href="#_1-url请求-1" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/metricconf/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-1" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-1" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-1" tabindex="-1"><a class="header-anchor" href="#脚本参数-1" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，update_scheme_settings</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>scheme_id</td><td>str</td><td>扫描方案id</td></tr></tbody></table><h5 id="脚本内部参数-1" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-1" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-1" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-1" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=update_scheme_settings --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --scheme_id=${TCA_SCHEME_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="三、创建分析项目" tabindex="-1"><a class="header-anchor" href="#三、创建分析项目" aria-hidden="true">#</a> 三、创建分析项目</h3><h4 id="_1-url请求-2" tabindex="-1"><a class="header-anchor" href="#_1-url请求-2" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-2" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-2" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-2" tabindex="-1"><a class="header-anchor" href="#脚本参数-2" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，create_repository</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>scan_scheme_id</td><td>int</td><td>和global_scheme_id二选一进行填写，当前代码库的扫描方案编号</td></tr><tr><td>global_scheme_id</td><td>int</td><td>和scan_scheme_id二选一进行填写，扫描方案模板编号</td></tr><tr><td>branch</td><td>str</td><td>分支</td></tr></tbody></table><h5 id="脚本内部参数-2" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-2" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-2" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-2" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=create_project --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --scan_scheme_id=${TCA_SCAN_SCHEME_ID} --branch=${TCA_BRANCH}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="四、启动任务" tabindex="-1"><a class="header-anchor" href="#四、启动任务" aria-hidden="true">#</a> 四、启动任务</h3><h4 id="_1-url请求-3" tabindex="-1"><a class="header-anchor" href="#_1-url请求-3" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/scans/create/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-3" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-3" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-3" tabindex="-1"><a class="header-anchor" href="#脚本参数-3" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，create_scans</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-3" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-3" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-3" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-3" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=create_scans --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="五、轮询任务结果" tabindex="-1"><a class="header-anchor" href="#五、轮询任务结果" aria-hidden="true">#</a> 五、轮询任务结果</h3><h4 id="_1-url请求-4" tabindex="-1"><a class="header-anchor" href="#_1-url请求-4" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/jobs/&lt;job_id&gt;/detail/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-4" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-4" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-4" tabindex="-1"><a class="header-anchor" href="#脚本参数-4" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_scan_cons</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-4" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-4" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr><tr><td>sleeptime</td><td>int</td><td>轮询间隔的时间</td></tr></tbody></table><h4 id="_3-操作示例-4" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-4" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_scan_cons --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID} --job_id=${TCA_JOB_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="六、获取分析概览" tabindex="-1"><a class="header-anchor" href="#六、获取分析概览" aria-hidden="true">#</a> 六、获取分析概览</h3><h4 id="_1-url请求-5" tabindex="-1"><a class="header-anchor" href="#_1-url请求-5" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-5" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-5" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-5" tabindex="-1"><a class="header-anchor" href="#脚本参数-5" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_overview</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-5" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-5" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-5" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-5" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_overview --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="七、查看扫描问题列表" tabindex="-1"><a class="header-anchor" href="#七、查看扫描问题列表" aria-hidden="true">#</a> 七、查看扫描问题列表</h3><h4 id="_1-url请求-6" tabindex="-1"><a class="header-anchor" href="#_1-url请求-6" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/issues/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-6" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-6" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-6" tabindex="-1"><a class="header-anchor" href="#脚本参数-6" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_issues</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-6" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-6" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-6" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-6" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_issues --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="八、查看问题详情" tabindex="-1"><a class="header-anchor" href="#八、查看问题详情" aria-hidden="true">#</a> 八、查看问题详情</h3><h4 id="_1-url请求-7" tabindex="-1"><a class="header-anchor" href="#_1-url请求-7" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/issues/&lt;issue_id&gt;/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-7" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-7" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-7" tabindex="-1"><a class="header-anchor" href="#脚本参数-7" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_issue_detail</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr><tr><td>issue_id</td><td>str</td><td>问题id</td></tr></tbody></table><h5 id="脚本内部参数-7" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-7" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-7" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-7" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_issue_detail --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID} --issue_id=${TCA_ISSUE_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="九、查看指定项目的圈复杂度问题列表" tabindex="-1"><a class="header-anchor" href="#九、查看指定项目的圈复杂度问题列表" aria-hidden="true">#</a> 九、查看指定项目的圈复杂度问题列表</h3><h4 id="_1-url请求-8" tabindex="-1"><a class="header-anchor" href="#_1-url请求-8" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/ccissues/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-8" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-8" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-8" tabindex="-1"><a class="header-anchor" href="#脚本参数-8" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_ccissues</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-8" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-8" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-8" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-8" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_ccissues --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="十、查看指定项目的重复文件列表" tabindex="-1"><a class="header-anchor" href="#十、查看指定项目的重复文件列表" aria-hidden="true">#</a> 十、查看指定项目的重复文件列表</h3><h4 id="_1-url请求-9" tabindex="-1"><a class="header-anchor" href="#_1-url请求-9" aria-hidden="true">#</a> 1. url请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/dupfiles/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-参数说明-9" tabindex="-1"><a class="header-anchor" href="#_2-参数说明-9" aria-hidden="true">#</a> 2. 参数说明</h4><h5 id="脚本参数-9" tabindex="-1"><a class="header-anchor" href="#脚本参数-9" aria-hidden="true">#</a> 脚本参数</h5><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>method</td><td>str</td><td>调用的方法名，get_dupfiles</td></tr><tr><td>base_url</td><td>str</td><td>基础路径</td></tr><tr><td>org_sid</td><td>str</td><td>项目组名称</td></tr><tr><td>team_name</td><td>str</td><td>团队唯一标识</td></tr><tr><td>repo_id</td><td>str</td><td>代码库id</td></tr><tr><td>project_id</td><td>str</td><td>分析项目id</td></tr></tbody></table><h5 id="脚本内部参数-9" tabindex="-1"><a class="header-anchor" href="#脚本内部参数-9" aria-hidden="true">#</a> 脚本内部参数</h5><table><thead><tr><th>Key</th><th>类型</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td>str</td><td>&quot;Token 当前user的token&quot;</td></tr></tbody></table><h4 id="_3-操作示例-9" tabindex="-1"><a class="header-anchor" href="#_3-操作示例-9" aria-hidden="true">#</a> 3. 操作示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python ScriptsAPI.py --base_url=${TCA_BASE_URL} --method=get_dupfiles --org_sid=${TCA_ORG_SID} --team_name=${TCA_TEAM_NAME} --repo_id=${TCA_REPO_ID} --project_id=${TCA_PROJECT_ID}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',112),h=[i];function s(n,l){return d(),e("div",null,h)}const c=t(r,[["render",s],["__file","ScriptAPI_guide.html.vue"]]);export{c as default};
