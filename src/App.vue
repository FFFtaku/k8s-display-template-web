<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <div>
    <ElConfigProvider :locale="zhCn">
      <RouterView></RouterView>
    </ElConfigProvider>
  </div>
</template>

<style scoped lang="scss"></style>
