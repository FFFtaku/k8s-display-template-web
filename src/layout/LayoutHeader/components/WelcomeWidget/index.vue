<script setup lang="ts">

</script>

<template>
  <div class="welcome-widget">
    <div class="main">
      <i class="tag" />
      <span>Good Morning</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome-widget{
  padding: 5px;
  .main{
    .tag{
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #FED600;
      display: inline-block;
    }
    span{
      font-weight: bold;
      font-size: 18px ;
      padding-left: 7px;
    }
  }
}
</style>