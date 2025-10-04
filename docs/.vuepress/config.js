// .vuepress/config.mjs  或者将文件重命名为 config.mjs，或者确保 package.json 有 "type": "module"

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
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
                              { text: '业务流程图', link: '/views/basics.md#基础' },
                              {
                                    text: '常用操作',
                                    children: [
                                          { text: '点击', link: '/views/basics.md#常用操作' },
                                          { text: '选择', link: '/views/basics.md#选择' },
                                          { text: '勾选', link: '/views/basics.md#勾选' },
                                          { text: '拖动', link: '/views/basics.md#拖动' },
                                    ]
                              },
                              {
                                    text: '常见表单元素',
                                    children: [
                                          { text: '规则', link: '/views/basics.md#常见表单元素' },
                                          { text: '常见表单元素', link: '/views/basics.md#常见表单元素-2' },
                                    ]
                              },
                              {
                                    text: '常见按钮',
                                    children: [
                                          { text: '查询', link: '/views/basics.md#常见按钮' },
                                          { text: '重置', link: '/views/basics.md#重置' },
                                          { text: '更多/收缩', link: '/views/basics.md#更多-收缩' },
                                          { text: '增加/删除', link: '/views/basics.md#增加-删除' },
                                          { text: '排序三角形', link: '/views/basics.md#排序三角形' },
                                          { text: '展开三角形', link: '/views/basics.md#展开三角形' },
                                    ]
                              },
                              {
                                    text: '审批',
                                    children: [
                                          { text: '待办列表', link: '/views/basics.md#待办列表' },
                                          { text: '已办列表', link: '/views/basics.md#常已办列表' },
                                    ]

                              },

                        ]
                  },

                  {
                        text: '采购管理',
                        children: [
                              { text: '采购计划创建', link: '/views/purchase.md#采购管理' },
                              { text: '采购计划单', link: '/views/purchase.md#采购计划单' },
                              {
                                    text: '待采购清单',
                                    children: [
                                          { text: '查询待采购清单', link: '/views/purchase.md#待采购清单' },
                                          { text: '创建采购合同', link: '/views/purchase.md#创建采购合同' },
                                          { text: '关联合同', link: '/views/purchase.md#关联合同' },
                                    ]
                              },
                              {
                                    text: '采购合同',
                                    children: [
                                          { text: '查询采购合同', link: '/views/purchase.md#采购合同' },
                                          { text: '上传', link: '/views/purchase.md#上传' },
                                          { text: '下单-拆分成子订单', link: '/views/purchase.md#下单-拆分成子订单' },
                                          { text: '退货和降等接收', link: '/views/purchase.md#退货和降等接收' },
                                          { text: '录入发票', link: '/views/purchase.md#录入发票' },
                                    ]
                              },
                              { text: '采购合同子订单查询', link: '/views/purchase.md#采购合同子订单查询' },
                              { text: '小试流程申请', link: '/views/purchase.md#小试流程申请' },
                              { text: '小试流程申请记录', link: '/views/purchase.md#小试流程申请记录' },
                              { text: '中试流程申请', link: '/views/purchase.md#中试流程申请' },
                              { text: '中试流程申请记录', link: '/views/purchase.md#中试流程申请记录' },
                        ]
                  },

                  {
                        text: '库存管理',
                        children: [
                              { text: '库存统计', link: '/views/inventory.md#库存管理' },
                              { text: '库存明细', link: '/views/inventory.md#库存明细' },
                              {
                                    text: '库存变更记录',
                                    children: [
                                          { text: '查询库存变更记录', link: '/views/inventory.md#库存变更记录' },
                                          { text: '出入库操作', link: '/views/inventory.md#出入库操作' },
                                          { text: '打印预览', link: '/views/inventory.md#打印预览' },
                                    ]
                              },
                              { text: '库存预警查询', link: '/views/inventory.md#库存预警查询' },
                        ]
                  },
                  {
                        text: '生产管理',
                        children: [
                              {
                                    text: '生产暂存库管理',
                                    children: [
                                          { text: '查询领料投料明细', link: '/views/production.md#生产管理' },
                                          { text: '领料入库申请', link: '/views/production.md#领料入库申请' },
                                    ]
                              },
                              {
                                    text: '生产计划管理',
                                    children: [
                                          { text: '备货单汇总', link: '/views/production.md#生产计划管理' },
                                          { text: '录入生产计划', link: '/views/production.md#录入生产计划' },
                                          { text: '生产情况', link: '/views/production.md#生产情况' },
                                    ]
                              },
                              {
                                    text: '灌装移库',
                                    children: [
                                          { text: '移库', link: '/views/production.md#灌装移库' },
                                          { text: '灌装', link: '/views/production.md#灌装' },
                                    ]
                              },
                              { text: '灌装移库查询', link: '/views/production.md#灌装移库查询' },
                              { text: '生产报表汇总', link: '/views/production.md#生产报表汇总' },
                        ]
                  },
                  {
                        text: '销售管理',
                        children: [
                              { text: '备货单创建', link: '/views/pc.md' },
                              {
                                    text: '备货单查询',
                                    children: [
                                          { text: '查询备货单', link: '/views/pi.md#查询备货单' },
                                          { text: '作废', link: '/views/pi.md#作废' },
                                          { text: '作废订单', link: '/views/pi.md#作废订单' },
                                          { text: '关联库存', link: '/views/pi.md#关联库存' },
                                          { text: '取消关联库存', link: '/views/pi.md#取消关联库存' },
                                    ]
                                    // ,
                                    // link: '/views/pi.md#备货单查询'
                              },
                              { text: '销售合同创建', link: '/views/sc.md' },
                              {
                                    text: '销售合同查询',
                                    children: [
                                          { text: '查询销售合同', link: '/views/si.md#查询销售合同' },
                                          { text: '上传', link: '/views/si.md#上传' },
                                          { text: '作废销售合同', link: '/views/si.md#作废销售合同' },
                                          { text: '查看详情', link: '/views/si.md#查看详情' },
                                          { text: '履行完毕', link: '/views/si.md#履行完毕' },
                                          { text: '下单-拆分子订单', link: '/views/si.md#下单-拆分子订单' },
                                          { text: '录入发票', link: '/views/si.md#录入发票' },
                                          { text: '送货单', link: '/views/si.md#送货单' },
                                          { text: '物流结算单', link: '/views/si.md#物流结算单' },
                                          { text: '金额修改', link: '/views/si.md#金额修改' },
                                          { text: '降价处理', link: '/views/si.md#降价处理' },
                                          { text: '退货处理', link: '/views/si.md#退货处理' },

                                    ],

                              },
                              { text: '销售合同子订单查询', link: '/views/soi.md' },
                              { text: '外发试验料申请', link: '/views/oc.md' },
                              { text: '外发试验料申请记录', link: '/views/or.md' },
                              { text: '销售数据统计', link: '/views/ss.md' },
                              { text: '报价单申请', link: '/views/bc.md' },
                              { text: '报价单查询', link: '/views/bi.md' },
                        ]
                  },
                  {
                        text: '物流管理',
                        children: [
                              { text: '物流合同创建', link: '/views/logistics.md#物流管理' },
                              {
                                    text: '物流合同查询',
                                    children: [
                                          { text: '查询物流合同', link: '/views/logistics.md#物流合同查询' },
                                          { text: '签订', link: '/views/logistics.md#签订' },
                                          { text: '关联物流结算单', link: '/views/logistics.md#关联物流结算单' },
                                    ]
                              },
                              { text: '物流结算单创建', link: '/views/logistics.md#物流结算单创建' },
                              {
                                    text: '物流结算单查询',
                                    children: [
                                          { text: '查询物流结算单', link: '/views/logistics.md#物流结算单查询' },
                                          { text: '生成对账单', link: '/views/logistics.md#生成对账单' },
                                          { text: '修改关联状态', link: '/views/logistics.md#修改关联状态' },
                                    ]
                              },
                              { text: '物流对账单查询', link: '/views/logistics.md#物流对账单查询' },
                        ]
                  },
                  {
                        text: '发票管理',
                        children: [
                              { text: '进项发票录入', link: '/views/invoice.md#发票管理' },
                              { text: '进项发票查询', link: '/views/invoice.md#进项发票查询' },
                              { text: '销项发票创建', link: '/views/invoice.md#销项发票创建', },
                              {
                                    text: '销项发票查询',
                                    children: [
                                          { text: '查询', link: '/views/invoice.md#查询' },
                                          { text: '冲销', link: '/views/invoice.md#冲销' },
                                    ]
                              },
                              { text: '物流发票录入', link: '/views/invoice.md#物流发票录入', },
                              { text: '物流发票查询', link: '/views/invoice.md#物流发票查询', },
                        ]
                  },
                  {
                        text: '付款管理',
                        children: [
                              { text: '供应商付款申请', link: '/views/payment.md#供应商付款申请' },
                              {
                                    text: '供应商付款查询',
                                    // link: '/views/payment.md#供应商付款查询',
                                    children: [
                                          { text: '查询', link: '/views/payment.md#查询' },
                                          { text: '打印', link: '/views/payment.md#打印' },
                                    ]
                              },
                              { text: '销项收款录入', link: '/views/payment.md#销项收款录入', },
                              { text: '销项收款查询', link: '/views/payment.md#销项收款查询', },
                        ]
                  },
                  {
                        text: '应收应付管理',
                        children: [
                              { text: '供应商应付账款', link: '/views/finance.md#应收应付管理' },
                              { text: '承运商应付账款', link: '/views/finance.md#承运商应付账款' },
                              {
                                    text: '应收账款',
                                    // link: '/views/finance.md#应收账款',
                                    children: [
                                          { text: '冲销', link: '/views/finance.md#冲销' },

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
                                          { text: '快捷搜索', link: '/views/employee.md#员工管理' },
                                          { text: '自定义搜索', link: '/views/employee.md#自定义搜索' },
                                    ]
                              },
                              {
                                    text: '汇报提报',
                                    children: [
                                          { text: '查询汇报提报', link: '/views/employee.md#查询汇报提报' },
                                          { text: '创建汇报提报', link: '/views/employee.md#创建汇报提报' },
                                    ]
                              },
                              {
                                    text: '生产调度会',
                                    children: [
                                          { text: '查询任务', link: '/views/employee.md#查询任务' },
                                          { text: '指派任务', link: '/views/employee.md#指派任务' },
                                    ]
                              },
                              { text: '周期巡检', link: '/views/employee.md#周期巡检' },
                              {
                                    text: '首页公告创建',
                                    children: [
                                          { text: '首页公告创建', link: '/views/employee.md#首页公告创建' },
                                          { text: '首页公告查看和修改', link: '/views/employee.md#首页公告查看和修改' },
                                    ]
                              },
                              { text: '出差申请', link: '/views/employee.md#出差申请' },
                              { text: '出差查询', link: '/views/employee.md#出差查询' },
                              {
                                    text: '整改记录',
                                    children: [
                                          { text: '查询整改记录', link: '/views/employee.md#查询整改记录' },
                                          { text: '新增整改记录', link: '/views/employee.md#新增整改记录' },
                                    ]
                              },
                              {
                                    text: '审批数据统计', link: '/views/employee.md#查询审批数据'
                                    //                          children: [
                                    //                             { text: '查询审批数据', link: '/views/employee.md#查询审批数据' },
                                    //                         ],
                              },
                              { text: '日报统计', link: '/views/employee.md#日报统计' },
                              { text: '操作记录统计', link: '/views/employee.md#操作记录统计' },
                              { text: '请假申请', link: '/views/employee.md#请假申请' },
                              { text: '请假申请查询', link: '/views/employee.md#请假申请查询' },
                              { text: '请假统计查询', link: '/views/employee.md#请假统计查询' },
                              { text: '加班申请', link: '/views/employee.md#加班申请' },
                              { text: '加班申请查询', link: '/views/employee.md#加班申请查询' },
                              { text: '加班统计查询', link: '/views/employee.md#加班统计查询' },

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
                              { text: '包装桶往来统计', link: '/views/bucket.md#包装桶管理' },
                              { text: '包装桶往来明细', link: '/views/bucket.md#包装桶管理' },
                              { text: '包装桶降级', link: '/views/bucket.md#包装桶管理' },
                        ]
                  },
                  {
                        text: '其他合同管理',
                        children: [
                              { text: '其他合同创建', link: '/views/others.md#其他合同管理' },
                              {
                                    text: '其他合同查询',
                                    children: [
                                          { text: '查询其他合同', link: '/views/others.md#其他合同管理' },
                                          { text: '上传', link: '/views/others.md#上传' },
                                          { text: '下单', link: '/views/others.md#下单' },
                                          { text: '查看详情', link: '/views/others.md#查看详情' },
                                          { text: '履行完毕', link: '/views/others.md#履行完毕' },
                                    ]
                              },

                              { text: '其他合同子订单查询', link: '/views/others.md#其他合同子订单查询' },
                              { text: '其他合同发票录入', link: '/views/others.md#其他合同发票录入' },
                              { text: '其他合同付款发票查询', link: '/views/others.md#其他合同付款发票查询' },
                              { text: '其他合同收款发票查询', link: '/views/others.md#其他合同收款发票查询' },
                        ]
                  },
                  {
                        text: '常见问题',
                        children: [
                              {
                                    text: '账号注册与登录',
                                    children: [
                                          { text: '注册', link: '/views/question.md#常见问题' },
                                          { text: '登录', link: '/views/question.md#常见问题' },
                                          { text: '忘记密码', link: '/views/question.md#常见问题' },
                                    ]
                              },
                              { text: '库存出库', link: '/views/question.md#库存出库' },
                              {
                                    text: '周期巡检',
                                    children: [
                                          { text: '查看任务', link: '/views/question.md#查看任务' },
                                          { text: '删除任务', link: '/views/question.md#删除任务' },
                                          { text: '修改责任人', link: '/views/question.md#修改责任人' },
                                    ]
                              },
                              {
                                    text: '审批',
                                    children: [
                                          { text: '按钮区别', link: '/views/question.md#按钮区别' },
                                          { text: '数据填写错误', link: '/views/question.md#数据填写错误' },
                                    ]

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


