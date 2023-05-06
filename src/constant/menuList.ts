import {
  Orange,
  User,
  Files,
  Monitor,
  HelpFilled,
  Histogram,
  ArrowRight,
  UploadFilled
} from '@element-plus/icons-vue'

const MENU_LIST = [
  {
    uniqueTag: 'dashboard',
    title: "面板",
    icon: Orange,
    role: 'All',
    routerName: 'dashboard'
  }, {
    uniqueTag: 'account',
    title: '账户管理',
    icon: User,
    role: 'Admin',
    children: [
      {
        uniqueTag: 'accountCreate',
        title: '账户创建',
        icon: ArrowRight,
        routerName: 'accountCreate'
      }, {
        uniqueTag: 'accountInfo',
        title: '账户信息查询',
        icon: ArrowRight,
        routerName: 'accountInfo'
      }
    ]
  }, {
    uniqueTag: 'directory',
    title: '目录查询',
    icon: Files,
    role: 'All',
    routerName: 'directory'
  }, {
    uniqueTag: 'image',
    title: '镜像创建',
    icon: Monitor,
    role: 'All',
    routerName: 'image'
  }, {
    uniqueTag: 'pod',
    title: '容器创建',
    icon: HelpFilled,
    role: 'All',
    routerName: 'pod'
  }, {
    uniqueTag: 'upload',
    title: '资源上传',
    icon: UploadFilled,
    role: 'All',
    routerName: 'upload'
  }, {
    uniqueTag: 'dataDisplay',
    title: '数据查询',
    icon: Histogram,
    role: 'All',
    routerName: 'dataDisplay'
  }
]

export default MENU_LIST