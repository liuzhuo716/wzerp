// .vuepress/config.mjs  或者将文件重命名为 config.mjs，或者确保 package.json 有 "type": "module"

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
      base:'/wzerp/',
      title: 'ERP使用操作说明',
      description: 'ERP使用操作说明',
      head: [
            ['link', { rel: 'icon', href: '/icons/favicon.ico' }]
      ],
      // 配置插件
      plugins: [
            searchPlugin({
                  // 配置选项（可选）
                  locales: {
                        '/': {
                              placeholder: '搜索',
                        },
                  },
                  // 热键支持：按 `Ctrl + K` 可以聚焦搜索框
                  hotKeys: ['ctrl', 'k'],
                  // 最大搜索建议数
                  maxSuggestions: 10,
                  // 排除首页
                  isSearchable: (page) => page.path !== '/',
            }),
      ],
      theme: defaultTheme({
            // logo: '/icons/favicon.ico',
            // sidebar: 'auto',
            navbar: [
                  {
                        text: '导航',
                        link: '/guide/'
                  },
                  {
                        text: '基础',
                        children: [
                              { text: '业务流程图', link: '/views/basics/process.md#基础' },
                              {
                                    text: '常用操作',
                                    children: [
                                          { text: '点击', link: '/views/basics/operate.md#点击' },
                                          { text: '选择', link: '/views/basics/operate.md#选择' },
                                          { text: '勾选', link: '/views/basics/operate.md#勾选' },
                                          { text: '拖动', link: '/views/basics/operate.md#拖动' },
                                    ],
                                    link: '/views/basics/operate.md#常用操作'
                              },
                              {
                                    text: '常见表单元素',
                                    children: [
                                          { text: '规则', link: '/views/basics/form.md#常见表单元素' },
                                          { text: '常见表单元素', link: '/views/basics/form.md#常见表单元素-2' },
                                    ],
                                    link: '/views/basics/form.md#常用表单元素'
                              },
                              {
                                    text: '常见按钮',
                                    children: [
                                          { text: '查询', link: '/views/basics/button.md#查询' },
                                          { text: '重置', link: '/views/basics/button.md#重置' },
                                          { text: '更多/收缩', link: '/views/basics/button.md#更多-收缩' },
                                          { text: '增加/删除', link: '/views/basics/button.md#增加-删除' },
                                          { text: '排序三角形', link: '/views/basics/button.md#排序三角形' },
                                          { text: '展开三角形', link: '/views/basics/button.md#展开三角形' },
                                    ],
                                    link: '/views/basics/button.md#常用按钮'
                              },
                              {
                                    text: '审批',
                                    children: [
                                          { text: '待办列表', link: '/views/basics/approve.md#待办列表' },
                                          { text: '已办列表', link: '/views/basics/approve.md#常已办列表' },
                                    ],
                                    link: '/views/basics/approve.md#审批'
                                    

                              },
                        ]
                  },

                  {
                        text: '采购管理',
                        children: [
                              { text: '采购计划创建', link: '/views/purchase/plan1.md#采购计划创建' },
                              { text: '采购计划单', link: '/views/purchase/plan2.md#采购计划单' },
                              {
                                    text: '待采购清单',
                                    children: [
                                          { text: '查询待采购清单', link: '/views/purchase/list.md#查询待采购清单' },
                                          { text: '创建采购合同', link: '/views/purchase/list.md#创建采购合同' },
                                          { text: '关联合同', link: '/views/purchase/list.md#关联合同' },
                                    ],
                                    link: '/views/purchase/list.md#待采购计划单'
                              },
                              {
                                    text: '采购合同',
                                    children: [
                                          { text: '查询采购合同', link: '/views/purchase/contract.md#查询采购合同' },
                                          { text: '上传', link: '/views/purchase/contract.md#上传' },
                                          { text: '下单-拆分成子订单', link: '/views/purchase/contract.md#下单-拆分成子订单' },
                                          { text: '退货和降等接收', link: '/views/purchase/contract.md#退货和降等接收' },
                                          { text: '录入发票', link: '/views/purchase/contract.md#录入发票' },
                                    ],
                                    link: '/views/purchase/contract.md#采购合同'
                              },
                              { text: '采购合同子订单查询', link: '/views/purchase/order.md#采购合同子订单查询' },
                              { text: '小试流程申请', link: '/views/purchase/small1.md#小试流程申请' },
                              { text: '小试流程申请记录', link: '/views/purchase/small2.md#小试流程申请记录' },
                              { text: '中试流程申请', link: '/views/purchase/middle1.md#中试流程申请' },
                              { text: '中试流程申请记录', link: '/views/purchase/middle2.md#中试流程申请记录' },
                        ]
                  },

                  {
                        text: '库存管理',
                        children: [
                              { text: '库存统计', link: '/views/inventory/stastics.md#库存统计' },
                              { text: '库存明细', link: '/views/inventory/detail.md#库存明细' },
                              {
                                    text: '库存变更记录',
                                    children: [
                                          { text: '查询库存变更记录', link: '/views/inventory/change.md#查询库存变更记录' },
                                          { text: '出入库操作', link: '/views/inventory/change.md#出入库操作' },
                                          { text: '打印预览', link: '/views/inventory/change.md#打印预览' },
                                    ],
                                    link: '/views/inventory/change.md#库存变更记录'

                              },
                              { text: '库存预警查询', link: '/views/inventory/warning.md#库存预警查询' },
                        ]
                  },
                  {
                        text: '生产管理',
                        children: [
                              {
                                    text: '生产暂存库管理',
                                    children: [
                                          { text: '查询领料投料明细', link: '/views/production/temporary.md#查询领料投料明细' },
                                          { text: '领料入库申请', link: '/views/production/temporary.md#领料入库申请' },
                                    ],
                                    link: '/views/production/temporary.md#生产暂存库管理'
                              },
                              {
                                    text: '生产计划管理',
                                    children: [
                                          { text: '备货单汇总', link: '/views/production/plan.md#备货单汇总' },
                                          { text: '录入生产计划', link: '/views/production/plan.md#录入生产计划' },
                                          { text: '生产情况', link: '/views/production/plan.md#生产情况' },
                                    ],
                                    link: '/views/production/plan.md#生产计划管理'
                              },
                              {
                                    text: '灌装移库',
                                    children: [
                                          { text: '移库', link: '/views/production/bottle1.md#移库' },
                                          { text: '灌装', link: '/views/production/bottle1.md#灌装' },
                                    ],
                                    link: '/views/production/bottle1.md#灌装移库'
                              },
                              { text: '灌装移库查询', link: '/views/production/bottle2.md#灌装移库查询' },
                              { text: '生产报表汇总', link: '/views/production/excel.md#生产报表汇总' },
                        ]
                  },
                  {
                        text: '销售管理',
                        children: [
                              { text: '备货单创建', link: '/views/sales/pc.md' },
                              {
                                    text: '备货单查询',
                                    children: [
                                          { text: '查询备货单', link: '/views/sales/pi.md#查询备货单' },
                                          { text: '作废', link: '/views/sales/pi.md#作废' },
                                          { text: '作废订单', link: '/views/sales/pi.md#作废订单' },
                                          { text: '关联库存', link: '/views/sales/pi.md#关联库存' },
                                          { text: '取消关联库存', link: '/views/sales/pi.md#取消关联库存' },
                                    ],
                                    link: '/views/sales/pi.md#备货单查询'
                              },
                              { text: '销售合同创建', link: '/views/sales/sc.md#销售合同创建' },
                              {
                                    text: '销售合同查询',
                                    children: [
                                          { text: '查询销售合同', link: '/views/sales/si.md#查询销售合同' },
                                          { text: '上传', link: '/views/sales/si.md#上传' },
                                          { text: '作废销售合同', link: '/views/sales/si.md#作废销售合同' },
                                          { text: '查看详情', link: '/views/sales/si.md#查看详情' },
                                          { text: '履行完毕', link: '/views/sales/si.md#履行完毕' },
                                          { text: '下单-拆分子订单', link: '/views/sales/si.md#下单-拆分子订单' },
                                          { text: '录入发票', link: '/views/sales/si.md#录入发票' },
                                          { text: '送货单', link: '/views/sales/si.md#送货单' },
                                          { text: '物流结算单', link: '/views/sales/si.md#物流结算单' },
                                          { text: '金额修改', link: '/views/sales/si.md#金额修改' },
                                          { text: '降价处理', link: '/views/sales/si.md#降价处理' },
                                          { text: '退货处理', link: '/views/sales/si.md#退货处理' },
                                    ],
                              },
                              { text: '销售合同子订单查询', link: '/views/sales/soi.md' },
                              { text: '外发试验料申请', link: '/views/sales/oc.md' },
                              { text: '外发试验料申请记录', link: '/views/sales/or.md' },
                              { text: '销售数据统计', link: '/views/sales/ss.md' },
                              { text: '报价单申请', link: '/views/sales/bc.md' },
                              { text: '报价单查询', link: '/views/sales/bi.md' },
                        ]
                  },
                  {
                        text: '物流管理',
                        children: [
                              { text: '物流合同创建', link: '/views/logistics/contract1.md#物流合同创建' },
                              {
                                    text: '物流合同查询',
                                    children: [
                                          { text: '查询物流合同', link: '/views/logistics/contract2.md#查询物流合同' },
                                          { text: '签订', link: '/views/logistics/contract2.md#签订' },
                                          { text: '关联物流结算单', link: '/views/logistics/contract2.md#关联物流结算单' },
                                    ],
                                    link: '/views/logistics/contract2.md#物流合同查询'
                              },
                              { text: '物流结算单创建', link: '/views/logistics/settlement1.md#物流结算单创建' },
                              {
                                    text: '物流结算单查询',
                                    children: [
                                          { text: '查询物流结算单', link: '/views/logistics/settlement2.md#物流结算单查询' },
                                          { text: '生成对账单', link: '/views/logistics/settlement2.md#生成对账单' },
                                          { text: '修改关联状态', link: '/views/logistics/settlement2.md#修改关联状态' },
                                    ],
                                    link: '/views/logistics/settlement2.md#物流结算单查询'
                              },
                              { text: '物流对账单查询', link: '/views/logistics/check.md#物流对账单查询' },
                        ]
                  },
                  {
                        text: '发票管理',
                        children: [
                              { text: '进项发票录入', link: '/views/invoice/purchase1.md#进项发票录入' },
                              { text: '进项发票查询', link: '/views/invoice/purchase2.md#进项发票查询' },
                              { text: '销项发票创建', link: '/views/invoice/sales1.md#销项发票创建', },
                              {
                                    text: '销项发票查询',
                                    children: [
                                          { text: '查询', link: '/views/invoice/sales2.md#查询' },
                                          { text: '冲销', link: '/views/invoice/sales2.md#冲销' },
                                    ],
                                    link: '/views/invoice/sales2.md#销项发票查询'
                              },
                              { text: '物流发票录入', link: '/views/invoice/logistics1.md#物流发票录入', },
                              { text: '物流发票查询', link: '/views/invoice/logistics2.md#物流发票查询', },
                        ]
                  },
                  {
                        text: '付款管理',
                        children: [
                              { text: '供应商付款申请', link: '/views/payment/supplier1.md#供应商付款申请' },
                              {
                                    text: '供应商付款查询',
                                     link: '/views/payment/supplier2.md#供应商付款查询',
                                    children: [
                                          { text: '查询', link: '/views/payment/supplier2.md#查询' },
                                          { text: '打印', link: '/views/payment/supplier2.md#打印' },
                                    ],
                                    
                              },
                              { text: '销项收款录入', link: '/views/payment/sales1.md#销项收款录入', },
                              { text: '销项收款查询', link: '/views/payment/sales2.md#销项收款查询', },
                        ]
                  },
                  {
                        text: '应收应付管理',
                        children: [
                              { text: '供应商应付账款', link: '/views/finance/supplier1.md#供应商应付账款' },
                              { text: '承运商应付账款', link: '/views/finance/supplier2.md#承运商应付账款' },
                              {
                                    text: '应收账款',
                                    link: '/views/finance/sales.md#应收账款',
                                    children: [
                                          { text: '冲销', link: '/views/finance/sales.md#冲销' },

                                    ]
                              },
                        ]
                  },
                  {
                        text: '员工管理',
                        children: [
                              {
                                    text: '工作量统计',
                                    children: [
                                          { text: '快捷搜索', link: '/views/employee/work.md#快捷搜索' },
                                          { text: '自定义搜索', link: '/views/employee/work.md#自定义搜索' },
                                    ],
                                    link: '/views/employee/work.md#工作量统计'
                              },
                              {
                                    text: '汇报提报',
                                    children: [
                                          { text: '查询汇报提报', link: '/views/employee/report.md#查询汇报提报' },
                                          { text: '创建汇报提报', link: '/views/employee/report.md#创建汇报提报' },
                                    ],
                                    link: '/views/employee/report.md#汇报提报'
                              },
                              {
                                    text: '生产调度会',
                                    children: [
                                          { text: '查询任务', link: '/views/employee/production.md#查询任务' },
                                          { text: '指派任务', link: '/views/employee/production.md#指派任务' },
                                    ],
                                    link: '/views/employee/production.md#生产调度会'
                              },
                              { text: '周期巡检', link: '/views/employee/inspection.md#周期巡检' },
                              {
                                    text: '首页公告创建',
                                    children: [
                                          { text: '首页公告创建', link: '/views/employee/index.md#首页公告创建' },
                                          { text: '首页公告查看和修改', link: '/views/employee/index.md#首页公告查看和修改' },
                                    ],
                                    link: '/views/employee/index.md#首页公告创建'
                              },
                              { text: '出差申请', link: '/views/employee/business1.md#出差申请' },
                              { text: '出差查询', link: '/views/employee/business2.md#出差查询' },
                              {
                                    text: '整改记录',
                                    children: [
                                          { text: '查询整改记录', link: '/views/employee/modify.md#查询整改记录' },
                                          { text: '新增整改记录', link: '/views/employee/modify.md#新增整改记录' },
                                    ],
                                    link: '/views/employee/modify.md#整改记录'
                              },
                              {
                                    text: '审批数据统计', link: '/views/employee/statics.md#查询审批数据'
                                    //                          children: [
                                    //                             { text: '查询审批数据', link: '/views/employee.md#查询审批数据' },
                                    //                         ],
                              },
                              { text: '日报统计', link: '/views/employee/day.md#日报统计' },
                              { text: '操作记录统计', link: '/views/employee/operate.md#操作记录统计' },
                              { text: '请假申请', link: '/views/employee/holiday1.md#请假申请' },
                              { text: '请假申请查询', link: '/views/employee/holiday2.md#请假申请查询' },
                              { text: '请假统计查询', link: '/views/employee/holiday3.md#请假统计查询' },
                              { text: '加班申请', link: '/views/employee/overtime1.md#加班申请' },
                              { text: '加班申请查询', link: '/views/employee/overtime2.md#加班申请查询' },
                              { text: '加班统计查询', link: '/views/employee/overtime3.md#加班统计查询' },

                        ]
                  },
                  {
                        text: '技术管理',
                        children: [
                              { text: '质检数据查询', link: '/views/technology.md#技术管理' },
                        ]
                  },
                  {
                        text: '包装桶管理',
                        children: [
                              { text: '包装桶往来统计', link: '/views/bucket/statics.md#包装桶往来统计' },
                              { text: '包装桶往来明细', link: '/views/bucket/details.md#包装桶往来明细' },
                              { text: '包装桶降级', link: '/views/bucket/degree.md#包装桶降级' },
                        ]
                  },
                  {
                        text: '其他合同管理',
                        children: [
                              { text: '其他合同创建', link: '/views/others/create.md#其他合同创建' },
                              {
                                    text: '其他合同查询',
                                    children: [
                                          { text: '查询其他合同', link: '/views/others/contract.md#查询其他合同' },
                                          { text: '上传', link: '/views/others/contract.md#上传' },
                                          { text: '下单', link: '/views/others/contract.md#下单' },
                                          { text: '查看详情', link: '/views/others/contract.md#查看详情' },
                                          { text: '履行完毕', link: '/views/others/contract.md#履行完毕' },
                                    ],
                                    link: '/views/others/contract.md#其他合同查询'
                              },

                              { text: '其他合同子订单查询', link: '/views/others/order.md#其他合同子订单查询' },
                              { text: '其他合同发票录入', link: '/views/others/invoice1.md#其他合同发票录入' },
                              { text: '其他合同付款发票查询', link: '/views/others/invoice2.md#其他合同付款发票查询' },
                              { text: '其他合同收款发票查询', link: '/views/others/invoice3.md#其他合同收款发票查询' },
                        ]
                  },
                  {
                        text: '常见问题',
                        children: [
                              {
                                    text: '账号注册与登录',
                                    children: [
                                          { text: '注册', link: '/views/question/login.md#注册' },
                                          { text: '登录', link: '/views/question/login.md#登录' },
                                          { text: '忘记密码', link: '/views/question/login.md#忘记密码' },
                                    ],
                                    link: '/views/question/login.md#账号注册与登录'
                              },
                              { text: '库存出库', link: '/views/question/out.md#库存出库' },
                              {
                                    text: '周期巡检',
                                    children: [
                                          { text: '查看任务', link: '/views/question/inspection.md#查看任务' },
                                          { text: '删除任务', link: '/views/question/inspection.md#删除任务' },
                                          { text: '修改责任人', link: '/views/question/inspection.md#修改责任人' },
                                    ],
                                    link: '/views/question/inspection.md#周期巡检'
                              },
                              {
                                    text: '审批',
                                    children: [
                                          { text: '按钮区别', link: '/views/question/approve.md#按钮区别' },
                                          { text: '数据填写错误', link: '/views/question/approve.md#数据填写错误' },
                                    ],
                                    link: '/views/question/approve.md#审批'

                              },


                        ]
                  },
            ],

            //     sidebar: [
            //   {
            //     text: '导航',
            //     children: [], // 留空数组，VuePress 会自动填充
            //   }
            // ],

            // sidebarDepth: 2, // 只显示 h2 和 h3 级别的标题

            // 其他正确的配置






      }),
      bundler: webpackBundler(),
})
// .vuepress/client.ts (新路径和新API)


