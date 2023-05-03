<script setup lang="ts">
import avatar from '@assets/icon/avatar-default-icon.png'
</script>

<template>
  <div class="account-card">
    <div class="card">
      <el-avatar shape="square" :size="50" fit="fill" :src="avatar" />
      <div class="base-info">
        <p class="user-name">taku</p>
        <p class="user-role">Admin</p>
      </div>
      <div class="account-op">...</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-card {
  height: 120px;
  background-color: $menu-fg-color;
  padding: 30px;
  display: flex;
  overflow: hidden;

  .card {
    display: flex;
    position: relative;
    width: 100%;
    .el-avatar {
      vertical-align: top;
    }

    .base-info{
      margin-left: 30px;
      .user-name{
        color: white;
        margin-top: -3px;
      }
      .user-role{
        color: #FED600;
        margin-top: 5px;
      }
    }
    .account-op{
      color: white;
      font-size: 40px;
      writing-mode: vertical-lr;
      position: absolute;
      right: -50px;
      top: 50%;
      transform: translateY(-50%);
      width: 65px;
      cursor: pointer;
    }
  }
}
</style>