export default [
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
    name: '维修管理',
    icon: 'smile',
    path: '/repair',
    component: './CommingSoon',
  },
  {
    name: '费用管理',
    icon: 'smile',
    path: '/cost',
    component: './CommingSoon',
  },
  {
    name: '门卫管理',
    icon: 'smile',
    path: '/guard',
    component: './CommingSoon',
  },
  {
    name: '管物品理',
    icon: 'smile',
    path: '/goods',
    component: './CommingSoon',
  },
  {
    name: '车辆管理',
    icon: 'smile',
    path: '/cars',
    component: './CommingSoon',
  },
  {
    name: '特种设备管理',
    icon: 'smile',
    path: '/equipment',
    component: './CommingSoon',
  },
  {
    component: './404',
  },
];
