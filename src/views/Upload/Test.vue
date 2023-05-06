<script setup lang="ts">
let emit = defineEmits(['test'])
emit('test', { a: 132, b: 211 }, 2)
</script>

<template></template>

<style scoped lang="scss"></style>