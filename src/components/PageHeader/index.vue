<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title'
  }
});

const goBack = () => {
  console.log('go back')
}
</script>

<template>
  <div class="page-header">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ title }} </span>
      </template>
    </el-page-header>
  </div>
</template>

<style scoped lang="scss"></style>