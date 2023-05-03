<script setup lang="ts">
// import { reactive } from 'vue'
import MENU_LIST from '@constant/menuList'
import { MenuBgColor, MenuFgColor} from '@constant/styleConstant'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


</script>

<template>
  <el-menu :background-color="MenuFgColor" text-color="#fff" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <template v-for="(mainItem, mainIndex) in MENU_LIST">
      <el-sub-menu v-if="mainItem.children" :index="mainIndex + 1 + ''">
        <template #title>
          <el-icon>
            <component :is="mainItem.icon" />
          </el-icon>
          <span>{{ mainItem.title }}</span>
        </template>
        <el-menu-item v-for="(secondItem, secondIndex) in mainItem.children"
          :index="(mainIndex + 1) + '-' + (secondIndex + 1)">{{ secondItem.title }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="mainIndex + 1 + ''">
        <el-icon>
          <component :is="mainItem.icon" />
        </el-icon>
        <span>{{ mainItem.title }}</span>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<style scoped lang="scss">
.el-menu{
  --bg-color: #1D242E !important;
  --active-color:  #1D242E !important;
}
</style>