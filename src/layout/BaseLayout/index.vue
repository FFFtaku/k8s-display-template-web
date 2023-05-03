<script setup lang="ts">
import LayoutAside from '@layout/LayoutAside/index.vue'
import LayoutHeader from '@layout/LayoutHeader/index.vue'
import { LayoutAsideWidth } from '@constant/styleConstant'
import AccountCreate from '@views/Account/AccountCreate/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="LayoutAsideWidth + 'px'">
        <LayoutAside></LayoutAside>
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader></LayoutHeader>
        </el-header>
        <el-main>
          <RouterView v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </RouterView>
          <AccountCreate></AccountCreate>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  .el-aside {
    min-height: 100vh;
    background-color: $menu-fg-color;
  }

  .el-header {
    padding: 0;
  }

}
</style>