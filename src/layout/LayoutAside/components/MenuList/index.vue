<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import MENU_LIST from '@constant/menuList'
import { MenuFgColor } from '@constant/styleConstant'

const router = useRouter()
const activedMenu = ref('dashboard')

// 获取用于二级菜单的菜单项目录
const subMenuList = (() => {
  let res: Array<string> = []
  MENU_LIST.forEach((item) => {
    if (item.children) {
      res.push(item.uniqueTag)
    }
  })
  return res
})()

// 根据权限显示菜单列表
const fixMenuList = computed(() => {
  return MENU_LIST
})

// 控制菜单选中时高亮以及跳转对应router
const handleSelectMenu = (routerTo: string, mainTag: string, secondTag?: string) => {
  if (secondTag !== undefined) {
    activedMenu.value = mainTag + "-" + secondTag
  } else {
    activedMenu.value = mainTag
  }
  router.push({
    name: routerTo
  })
}
// 处理子菜单展开时的选中问题
const handleSubMenuOpen = (key: string) => {
  const _index = subMenuList.findIndex(item => item === key)
  if (_index !== -1) {
    const sub = MENU_LIST.find(item => item.uniqueTag === key)
    handleSelectMenu(sub!.children![0].routerName, sub!.uniqueTag, sub!.children![0].uniqueTag)
  }
}
</script>

<template>
  <el-menu :background-color="MenuFgColor" @open="handleSubMenuOpen" text-color="#fff" :default-active="activedMenu"
    :unique-opened="true">
    <template v-for="(mainItem, mainIndex) in fixMenuList">
      <el-sub-menu v-if="mainItem.children" :index="mainItem.uniqueTag">
        <template #title>
          <el-icon>
            <component :is="mainItem.icon" />
          </el-icon>
          <span>{{ mainItem.title }}</span>
        </template>
        <el-menu-item @click="handleSelectMenu(secondItem.routerName, mainItem.uniqueTag, secondItem.uniqueTag)"
          v-for="(secondItem, secondIndex) in mainItem.children"
          :index="mainItem.uniqueTag + '-' + secondItem.uniqueTag">{{
            secondItem.title }}</el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else @click="handleSelectMenu(mainItem.routerName, mainItem.uniqueTag)" :index="mainItem.uniqueTag">
        <el-icon>
          <component :is="mainItem.icon" />
        </el-icon>
        <span>{{ mainItem.title }}</span>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  --bg-color: #1D242E !important;
  --active-color: #1D242E !important;
}
</style>