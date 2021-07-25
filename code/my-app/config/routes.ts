export default [
  {
     
    layout: false,
    path: '/home',
    routes: [
      {
        path: '/home',
        component: './Home',
        // routes: [
        //   {
        //     name: '首页',
        //     path: '/home/index',
        //     component: './Home',
        //   },
        // ]
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  {
    name: '日常办公',
    icon: 'smile',
    path: '/approve',
    routes: [
      {
        name: '我的考勤',
        icon: 'smile',
        path: '/approve/attence',
        component: './CommingSoon',
      },
      {
        name: '我的审批',
        icon: 'smile',
        path: '/approve/approve',
        component: './CommingSoon',
      },
      {
        name: '费用申请',
        icon: 'smile',
        path: '/approve/fee',
        component: './CommingSoon',
      },
      {
        name: '车辆申请',
        icon: 'smile',
        path: '/approve/car',
        component: './CommingSoon',
      },
      {
        name: '公章申请',
        icon: 'smile',
        path: '/approve/seal',
        component: './CommingSoon',
      },
      {
        name: '请假申请',
        icon: 'smile',
        path: '/approve/leave',
        component: './CommingSoon',
      },
      {
        name: '加班申请',
        icon: 'smile',
        path: '/approve/overtime',
        component: './CommingSoon',
      },
      {
        name: '出差申请',
        icon: 'smile',
        path: '/approve/business',
        component: './CommingSoon',
      },
      {
        name: '因公外出申请',
        icon: 'smile',
        path: '/approve/outward',
        component: './CommingSoon',
      },
      {
        name: '人事申请',
        icon: 'smile',
        path: '/approve/staff',
        component: './CommingSoon',
      },
      {
        name: '其它申请',
        icon: 'smile',
        path: '/approve/others',
        component: './CommingSoon',
      },
    ]
  },
  {
    name: '财务管理',
    icon: 'smile',
    path: '/finance',
    routes: [
      {
        name: '会计账目',
        icon: 'smile',
        path: '/finance/accounting',
        component: './CommingSoon',
      },
      {
        name: '费用审批',
        icon: 'smile',
        path: '/finance/approve',
        component: './CommingSoon',
      },
      {
        name: '企业租金',
        icon: 'smile',
        path: '/finance/rent',
        component: './CommingSoon',
      },
      {
        name: '物业费',
        icon: 'smile',
        path: '/finance/property',
        component: './CommingSoon',
      },
      {
        name: '水暖电气费',
        icon: 'smile',
        path: '/finance/fee',
        component: './CommingSoon',
      },
      {
        name: '费用统计',
        icon: 'smile',
        path: '/finance/statistics',
        component: './CommingSoon',
      },
      {
        name: '缴费查询',
        icon: 'smile',
        path: '/finance/pay',
        component: './CommingSoon',
      },
      {
        name: '开票查询',
        icon: 'smile',
        path: '/finance/receipt',
        component: './CommingSoon',
      },
      {
        name: '在线催缴',
        icon: 'smile',
        path: '/fee',
        component: './CommingSoon',
      },
    ]
  },
  {
    name: '物业部',
    icon: 'smile',
    path: '/property',
    routes: [
      {
        name: '维修管理',
        icon: 'smile',
        path: '/property/repair',
        component: './Repair',
      },
      {
        name: '水暖电气费',
        icon: 'smile',
        path: '/property/fee',
        component: './Repair',
      },
      {
        name: '设施管理',
        icon: 'smile',
        path: '/property/items',
        component: './Repair',
      },
      {
        name: '门卫管理',
        icon: 'smile',
        path: '/property/guard',
        component: './CommingSoon',
      },
      {
        name: '安全管理',
        icon: 'smile',
        path: '/property/safety',
        component: './CommingSoon',
      },
      {
        name: '物品管理',
        icon: 'smile',
        path: '/property/goods',
        component: './CommingSoon',
      },
      {
        name: '车辆管理',
        icon: 'smile',
        path: '/property/cars',
        component: './CommingSoon',
      },
      {
        name: '特种设备管理',
        icon: 'smile',
        path: '/property/equipment',
        component: './CommingSoon',
      },
      {
        name: '绿化管理',
        icon: 'smile',
        path: '/property/plants',
        component: './CommingSoon',
      },
    ]
  },
  {
    name: '企业服务部',
    icon: 'smile',
    path: '/merchants',
    routes: [
      {
        name: '园区信息',
        icon: 'smile',
        path: '/merchants/park',
        component: './CommingSoon',
      },
      {
        name: '入驻企业管理',
        icon: 'smile',
        path: '/merchants/company',
        component: './CommingSoon',
      },
      {
        name: '合同管理',
        icon: 'smile',
        path: '/merchants/contract',
        component: './CommingSoon',
      },
      {
        name: '潜在客户管理',
        icon: 'smile',
        path: '/merchants/potential',
        component: './CommingSoon',
      },
    ]
  },
  {
    name: '综合办公室',
    icon: 'smile',
    path: '/office',

    routes: [
      {
        name: '合同管理',
        icon: 'smile',
        path: '/office/contract',
        component: './CommingSoon',
      },
      {
        name: '日常报修',
        icon: 'smile',
        path: '/office/repair',
        component: './CommingSoon',
      },
      {
        name: '物品管理',
        icon: 'smile',
        path: '/office/items',
        component: './CommingSoon',
      },
      {
        name: '通知发布',
        icon: 'smile',
        path: '/office/broadcast',
        component: './CommingSoon',
      },
      {
        name: '保洁管理',
        icon: 'smile',
        path: '/office/cleaning',
        component: './CommingSoon',
      },
    ]
  },
  {
    name: '品牌企划部',
    icon: 'smile',
    path: '/planning',

    routes: [
      {
        name: '企业信息管理',
        icon: 'smile',
        path: '/planning/company',
        component: './CommingSoon',
      },
      {
        name: '通知发布',
        icon: 'smile',
        path: '/planning/broadcast',
        component: './CommingSoon',
      },
      {
        name: '项目协同',
        icon: 'smile',
        path: '/planning/project',
        component: './CommingSoon',
      },
    ]
  },
  {
    hideInMenu: true,
    name: '反馈详情',
    icon: 'smile',
    path: '/repair/profilebasic',
    component: './ProfileBasic',
  },
  {
    component: './user/Login',
  },
];
