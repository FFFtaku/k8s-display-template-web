<script setup lang="ts">

</script>

<template>
  <div class="product-tag">
    <el-icon :size="40">
      <img src="@assets/icon/tool-icon.png" alt="">
    </el-icon>
    <span class="tag">Version 0.0</span>
  </div>
</template>

<style scoped lang="scss">
.product-tag {
  height: $header-height;
  background-color: $menu-bg-color; 
  padding-top: 8px;
  padding-left: 17px;
  img{
    width: 100%;
  }
  .tag{
    color: white;
    font-weight: bold;
    font-size: 26px;
    vertical-align: top;
    margin-left: 5px;
  }
}
</style>