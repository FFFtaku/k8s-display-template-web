<script setup lang="ts">
import AAA from './Test.vue'
const func= (a:number, b:number, e:any)=>{
  console.log(e)
}
</script>

<template>
  <AAA @test="(p1, p2)=>func(1, 2, {p1, p2})"></AAA>
</template>

<style scoped lang="scss"></style>