import{_ as t,r as i,o as l,c as r,a as n,b as e,d as o,w as c,e as s}from"./app-383362d6.js";const d={},p=s('<h1 id="任务分布式执行" tabindex="-1"><a class="header-anchor" href="#任务分布式执行" aria-hidden="true">#</a> 任务分布式执行</h1><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li><p>以往的单机器单进程，性能比较低，工具排队等待时间过长。希望通过并行执行分析来提高分析效率。</p></li><li><p>希望尽量使用公共资源或使用专机资源。</p></li></ul><p><strong>为了满足以上需求，TCA已经进行如下支持：</strong></p><ul><li><p>支持工具在多台机器上并行执行。</p></li><li><p>支持指定工具在指定的机器上运行。</p></li><li><p>支持与本地启动的任务衔接，加速本地任务扫描。</p></li><li><p>配套任务状态监控能力，及时重置初始化超时或机器掉线的任务。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TCA 客户端除了通过 localscan 命令启动单次的代码分析，也可以作为一个分布式分析节点启动，作为常驻进程，多个节点可以分布式并行执行服务端下发的任务，提高扫描效率。和本地分析一样，需要先安装环境和必要的工具，并配置好服务端地址。</p></div><h2 id="常驻节点配置" tabindex="-1"><a class="header-anchor" href="#常驻节点配置" aria-hidden="true">#</a> 常驻节点配置</h2>',7);function h(_,u){const a=i("RouterLink");return l(),r("div",null,[p,n("p",null,[e("请参考"),o(a,{to:"/en/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.html"},{default:c(()=>[e("客户端-常驻节点分析")]),_:1})])])}const f=t(d,[["render",h],["__file","任务分布式执行.html.vue"]]);export{f as default};
