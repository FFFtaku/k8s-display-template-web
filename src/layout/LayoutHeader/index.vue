<script setup lang="ts">
import { ref } from 'vue'
import WelcomeWidget from './components/WelcomeWidget/index.vue'
const searchInput = ref(null)
</script>

<template>
  <div class="layout-header">
    <div class="global-search">
      <el-input v-model="searchInput" placeholder="Please input" />
      <el-icon size="25">
        <Search />
      </el-icon>
    </div>
    <WelcomeWidget></WelcomeWidget>
  </div>
</template>

<style scoped lang="scss">
.layout-header {
  height: $header-height;
  background-color: $second-bg-color;
  display: flex;
  align-items: center;

  .global-search {
    height: 40px;
    width: 500px;
    margin-left: 40px;

    .el-input {
      height: 100%;
    }

    .el-icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      padding: 2.5px;
      cursor: pointer;
    }
  }

  .welcome-widget {
    position: absolute;
    right: 0;
  }
}
</style>