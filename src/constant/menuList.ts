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
    title: "面板",
    icon: Orange
  }, {
    title: '账户管理',
    icon: User,
    children: [
      {
        title: '账户创建',
        icon: ArrowRight
      }, {
        title: '账户信息查询',
        icon: ArrowRight
      }
    ]
  }, {
    title: '目录查询',
    icon: Files
  }, {
    title: '镜像创建',
    icon: Monitor
  }, {
    title: '容器创建',
    icon: HelpFilled
  },{
    title: '资源上传',
    icon: UploadFilled
  },{
    title: '数据查询',
    icon: Histogram
  }
]

export default MENU_LIST